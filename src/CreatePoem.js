export default function CreatePoem(
  coverIterations,
  poemLines,
  currentIteration
) {
  // скрытие слова в тексте и обновление текста с помощью useState
  return poemLines.map((line, lineIndex) => {
    //проходимся по 2D массиву и записываем адреса слов которые будут скрыты в каждой строке
    const coveredWordsIndexes = coverIterations.flatMap((iteration, index) => {
      // если индекс больше currentIteration перезаписывать массив не нужно
      if (index > currentIteration) return [];
      return iteration[lineIndex];
    });

    // делим стринг из строки на массив из слов
    const words = line.split(" ");

    // проходимся по массиву из слов и меняем слова находящиеся по адресу который должен быть скрыт на хэштег и собираем вместе
    return words
      .map((word, index) => {
        if (coveredWordsIndexes.includes(index)) {
          return word.replace(/[a-zA-ZА-Яа-яғқәіөңұүӘӨҒҚІҢҰҮ']/g, "#");
        } else {
          return word;
        }
      })
      .join(" ");
  });
}
