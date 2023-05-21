import "../App.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import BACK_LOGO from "../media/icons8-back-arrow-96.png";
import HandleCoverClick from "./HandleCoverClick";
import HandleUncoverClick from "./HandleUncoverClick";

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

  const handleCoverClick = () =>
    HandleCoverClick(
      textLines,
      poemLines,
      coverIterations,
      currentIteration,
      setPoemLines,
      setCurrentIteration,
      setCoverIterations
    );

  // функция открытия скрытого слова
  const handleUncoverClick = () =>
    HandleUncoverClick(
      currentIteration,
      setCurrentIteration,
      coverIterations,
      textLines,
      setPoemLines
    );

  // замена решеток на скрытие через CSS
  const coverSymbol = (line) => {
    return line.replace(/\#/g, '<span class="symbol-overlay">#</span>');
  };

  console.log(poemLines);
  console.log(coverIterations);
  console.log(currentIteration);

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
