import CreatePoem from "./CreatePoem";

export default function HandleUncoverClick(
  currentIteration,
  setCurrentIteration,
  coverIterations,
  textLines,
  setPoemLines
) {
  // если все слова открыты не выпонять функцию
  if (currentIteration < 0) return;

  // при нажатии декрементировать значение currentInteration
  const tempCurrentIteration = currentIteration - 1;
  setCurrentIteration(tempCurrentIteration);

  // обновление текста стиха с заменой скрытого слова на хэштег
  const updatedPoem = CreatePoem(
    coverIterations,
    textLines,
    tempCurrentIteration
  );

  // обновляем текст с замененными звездочек на слова
  setPoemLines(updatedPoem);
}
