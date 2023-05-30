import CreatePoem from "./CreatePoem";

export default function HandleCoverClick(
  textLines,
  poemLines,
  coverIterations,
  currentIteration,
  setPoemLines,
  setCurrentIteration,
  setCoverIterations
) {
  // add +1 to current iteration to change position of covered text read
  const tempCurrentIteration = currentIteration + 1;

  // если currentIteration массив не пустой, то пройти в эту часть кода
  if (coverIterations[tempCurrentIteration]) {
    setCurrentIteration(tempCurrentIteration);
    const updatedPoem = CreatePoem(
      coverIterations,
      poemLines,
      tempCurrentIteration
    );
    setPoemLines(updatedPoem);
    return;
  }

  // если массив пустой то заполнять его с нуля

  // массив из адресов закрытых слов из текста при одинарном нажатии кнопки cover
  const coverIteration = [];

  // добавление адресов закрытых слов в каждой строке в массив coverIteration
  textLines.forEach((line, index) => {
    const words = line.split(" ");
    const lineLength = words.length;

    // достать адрес слов закрытых в строке
    const coveredWordsInLineIndexes = coverIterations.flatMap((iteration) => {
      return iteration[index];
    });

    // создать массив из индексов слов в строке без индекса сткрытого слова
    const uncoveredIndexes = [...Array(lineLength).keys()].filter((element) => {
      return !coveredWordsInLineIndexes.includes(element);
    });

    // рандомно выбрать слово в строке которое будет скрыто из тех что не были скрыты и вывести его индекс
    const indexToCover =
      uncoveredIndexes[Math.floor(Math.random() * uncoveredIndexes.length)];

    // записать индекс скрытых слов в массив coverIteration, с условием что индекс больше нуля чтобы не записывать undefined значения
    // без этого кода когда слова в строке заканчивались в массив coverIteration записывались undefined значения и кнопка uncover на работала сразу

    if (indexToCover >= 0) {
      coverIteration[index] = indexToCover;
    } else {
      return;
    }

    console.log(indexToCover);
  });

  if (coverIteration.length === 0) {
    return;
  }

  // почему-то не работает
  // setCoverIterations((prevIteration) => [...prevIteration, coverIteration]);

  // перезаписываем currentIteration
  setCurrentIteration(tempCurrentIteration);

  // обновление массива из массивов coverIterations новым элементом из массива coverIteration с адресами скрытых слов в строке
  // copy array to temp
  const temp = coverIterations.copyWithin();
  // add new item
  temp.push(coverIteration);
  // rewrite coverIterations array
  setCoverIterations(temp);

  // обновление текста стиха с заменой скрытого слова на хэштег
  const updatedPoem = CreatePoem(
    coverIterations,
    textLines,
    tempCurrentIteration
  );

  // обновляем текст с замененными словами на хэштег
  setPoemLines(updatedPoem);
}
