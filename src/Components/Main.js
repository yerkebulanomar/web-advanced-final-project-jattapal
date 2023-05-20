import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import json from "./texts.json";

export default function Main() {
  const [textValue, setTextValue] = useState("");

  // read entered code
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  // autofocus on input part
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // do not accept empty string
  const isTextEmpty = textValue.trim() === "";
  return (
    <div className="App">
      <header className="d-flex justify-content-between">
        <button
          className="header-name courier-white"
          onClick={() => {
            window.location.replace("/");
          }}>
          Jattap_al
        </button>

        <div className="d-flex flex-row nav-btns">
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#yourpoem")}>
            Свой стих
          </button>
          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#instructions")}>
            Инструкция
          </button>

          <button
            className="nav-btn Inter-500 white"
            onClick={() => window.location.replace("/#examples")}>
            Примеры
          </button>
        </div>
      </header>
      x
      <form className="d-flex flex-column align-items-center" id="yourpoem">
        <textarea
          ref={textareaRef}
          value={textValue}
          onChange={handleTextChange}
          placeholder="Введите свой текст"
          className="Inter-400"></textarea>
        <Link to={isTextEmpty ? "#" : "/text"} state={{ myText: textValue }}>
          <button
            className="next-page-button"
            type="submit"
            disabled={isTextEmpty}>
            Далее
          </button>
        </Link>
      </form>
      <h3 id="instructions">
        <span className="title-text">
          Jattap_al - это веб приложение для облегчения заучивания стихов и
          текстов{"\n\n"}
        </span>
        {json.instructions}
      </h3>
      <div className="d-flex flex-column" id="examples">
        <div className="d-flex justify-content-center example-poems">
          <Link to="/text" state={{ myText: json.bobDylan }}>
            <h6>
              <span className="poem-title">
                Bob Dylan - Blowin' in the wind{"\n\n"}
              </span>
            </h6>
          </Link>
          <Link to="/text" state={{ myText: json.bata }}>
            <h6>
              <span className="poem-title">
                Бата - Құдай берсін, кем қылмасын...{"\n\n"}
              </span>
            </h6>
          </Link>
        </div>
        <div className="d-flex justify-content-center example-poems">
          <Link to="/text" state={{ myText: json.yasin }}>
            <h6>
              <span className="poem-title">Коран - сура Ясин{"\n\n"}</span>
            </h6>
          </Link>
          <Link to="/text" state={{ myText: json.pushkin }}>
            <h6>
              <span className="poem-title">
                Пушкин - Я помню чудное мгновенье...{"\n\n"}
              </span>
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}
