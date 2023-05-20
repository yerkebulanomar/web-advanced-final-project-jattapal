import "./App.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import CreatePoem from "./CreatePoem";
import BACK_LOGO from "./media/icons8-back-arrow-96.png";

function Text(props) {
  const location = useLocation();

  // принятие текста из пропсов и разделение его на массив из строк
  const text = location.state.myText;
  const textLines = text.split("\n");

  // useState для обновления стиха и вывода его на экран
  const [poemLines, setPoemLines] = useState(textLines);

  // useState для обновления массива из адресов (2D массив) закрытых слов из стиха
  const [coverIterations, setCoverIterations] = useState([]);

  // useState для обновления значения текущей итерации до которой мы выводим текст
  const [currentIteration, setCurrentIteration] = useState(-1);

  const handleCoverClick = () => {
    const tempCurrentIteration = currentIteration + 1;
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
      const uncoveredIndexes = [...Array(lineLength).keys()].filter(
        (element) => {
          return !coveredWordsInLineIndexes.includes(element);
        }
      );

      // рандомно выбрать слово в строке которое будет скрыто и вывести его индекс
      const indexToCover =
        uncoveredIndexes[Math.floor(Math.random() * uncoveredIndexes.length)];

      // записать индекс скрытых слов в массив coverIteration, с условием что индекс больше нуля чтобы не записывать undefined значения
      if (indexToCover >= 0) {
        coverIteration[index] = indexToCover;
      }
    });

    if (coverIteration.length === 0) {
      return;
    }

    // почему-то не работает
    // setCoverIterations((prevIteration) => [...prevIteration, coverIteration]);

    // обновление массива из массивов coverIterations новым элементом из массива coverIteration с адресами скрытых слов в строке
    setCurrentIteration(tempCurrentIteration);
    const temp = coverIterations.copyWithin();
    temp.push(coverIteration);
    setCoverIterations(temp);

    // обновление текста стиха с заменой скрытого слова на звездочки
    const updatedPoem = CreatePoem(
      coverIterations,
      textLines,
      tempCurrentIteration
    );

    // обновляем текст с замененными словами на звездочки
    setPoemLines(updatedPoem);
  };

  // функция открытия скрытого слова
  const handleUncoverClick = () => {
    // если все слова открыты не выпонять функцию
    if (currentIteration < 0) return;

    // при нажатии декрементировать значение currentInteration
    const tempCurrentIteration = currentIteration - 1;
    setCurrentIteration(tempCurrentIteration);

    // обновление текста стиха с заменой скрытого слова на звездочки
    const updatedPoem = CreatePoem(
      coverIterations,
      textLines,
      tempCurrentIteration
    );

    // обновляем текст с замененными звездочек на слова
    setPoemLines(updatedPoem);
  };

  const coverSymbol = (line) => {
    return line.replace(/\*/g, '<span class="symbol-overlay">*</span>');
  };

  return (
    <div>
      <div className="d-flex justify-content-between header-poem-page">
        <Link to="/" className="d-flex align-items-center">
          <img className="btn-img" src={BACK_LOGO} alt="back" />
          <button className="back-button d-flex align-items-center">
            Назад
          </button>
        </Link>
        <div className="d-flex cover-buttons">
          <button className="cover-button" onClick={handleUncoverClick}>
            Открыть
          </button>
          <button className="cover-button" onClick={handleCoverClick}>
            Скрыть
          </button>
        </div>
        <div>
          <button className="hidden-button">{""}</button>
        </div>
      </div>
      <div className="d-flex justify-content-center Inter-400 poem-text">
        <div>
          {/* проходимся по массиву из слов стиха и выводим их на экран */}
          {poemLines.map((line, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: coverSymbol(line) }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Text;
