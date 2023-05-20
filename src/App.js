import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Text from "./Text";
import GITHUB from "./media/github-mark-white.svg";
import LINKEDIN_LOGO from "./media/icons8-linkedin-circled-96.svg";
import TELEGRAM_LOGO from "./media/Telegram_logo.svg";

function App() {
  const [textValue, setTextValue] = useState("");

  const bobDylan =
    "How many roads must a man walk down\nBefore you call him a man?\nHow many seas must a white dove sail\nBefore she sleeps in the sand?\nYes, and how many times must the cannonballs fly\nBefore they're forever banned?\n\nThe answer, my friend, is blowin' in the wind\nThe answer is blowin' in the wind\nYes, and how many years must a mountain exist\nBefore it is washed to the sea?\nAnd how many years can some people exist\nBefore they're allowed to be free?\nYes, and how many times can a man turn his head\nAnd pretend that he just doesn't see?\nThe answer, my friend, is blowin' in the wind\n\nThe answer is blowin' in the wind";
  const bata =
    "Құдай берсін, кем қылмасын,\nДастарханың мол болсын,\nАбыройың зор болсын.\nОтбасының байлығын берсін,\n\nДеніміздің саулығын берсін.\nКөңіліміз тоқ болсын,\nУайым - қайғы жоқ болсын.\nОтырғандарың үлкен тақ болсын.\nОсы үйге тек бақ қонсын!\nСұрасаң бата берейін,\nЫқыласпен қол жайсаң,\nҮстем болсын мерейің.\n\nБасыңа бақ орнасын,\nҚызыр болсын жолдасың.\nДастарханың мол болсын,\nАбыройың зор болсын.";
  const fatiha =
    "Bismillaahir Rahmaanir Raheem\nYaa-Seeen\nWal Qur-aanil Hakeem\nInnaka laminal mursaleen\n'Alaa Siraatim Mustaqeem\nTanzeelal 'Azeezir Raheem\nLitunzira qawmam maaa unzira\naabaaa'uhum fahum ghaafiloon\nLaqad haqqal qawlu 'alaaa\naksarihim fahum laa yu'minoon\nInnaa ja'alnaa feee\na'naaqihim aghlaalan fahiya ilal\nazqaani fahum muqmahoon\nWa ja'alnaa min baini aydeehim\nsaddanw-wa min khalfihim saddan\nfa aghshai naahum fahum laa yubsiroon";
  const pushkin =
    "Я помню чудное мгновенье:\nПередо мной явилась ты,\nКак мимолетное виденье,\nКак гений чистой красоты.\n\nВ томленьях грусти безнадежной,\nВ тревогах шумной суеты,\nЗвучал мне долго голос нежный\nИ снились милые черты.\nШли годы. Бурь порыв мятежный\nРассеял прежние мечты,\nИ я забыл твой голос нежный,\nТвои небесные черты.\nВ глуши, во мраке заточенья\nТянулись тихо дни мои\nБез божества, без вдохновенья,\nБез слез, без жизни, без любви.";
  const instruction =
    'Как это работает? Очень просто:\n\n1) Загрузите текст или стихотворение в приложение либо выберите один из примеров;\n2) Прочтите свой текст 2-3 раза, стараясь его запомнить;\n3) Нажав кнопку "Скрыть", приложение закроет некоторые слова. Перечитайте пару раз, пытаясь вспомнить, что скрывается за звездочками;\n4) При затруднении с помощью кнопки "Открыть" открывайте слова чтоюы их повторить;\n5) Постепенно увеличивайте сложность. Когда почти все слова будут закрыты, запомнить весь текст станет достаточно легко;\n6) Наслаждайтесь своим успехом.';

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
    <div className="d-flex flex-column justify-content-between align-items-between body">
      <Routes>
        <Route
          path="/"
          element={
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
              <form
                className="d-flex flex-column align-items-center"
                id="yourpoem">
                <textarea
                  ref={textareaRef}
                  value={textValue}
                  onChange={handleTextChange}
                  placeholder="Введите свой текст"
                  className="Inter-400"></textarea>
                <Link
                  to={isTextEmpty ? "#" : "/text"}
                  state={{ myText: textValue }}>
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
                  Jattap_al - это веб приложение для облегчения заучивания
                  стихов и текстов{"\n\n"}
                </span>
                {instruction}
              </h3>

              <div className="d-flex flex-column" id="examples">
                <div className="d-flex justify-content-center example-poems">
                  <Link to="/text" state={{ myText: bobDylan }}>
                    <h6>
                      <span className="poem-title">
                        Bob Dylan - Blowin' in the wind{"\n\n"}
                      </span>
                    </h6>
                  </Link>
                  <Link to="/text" state={{ myText: bata }}>
                    <h6>
                      <span className="poem-title">
                        Бата - Құдай берсін, кем қылмасын...{"\n\n"}
                      </span>
                    </h6>
                  </Link>
                </div>
                <div className="d-flex justify-content-center example-poems">
                  <Link to="/text" state={{ myText: fatiha }}>
                    <h6>
                      <span className="poem-title">
                        Коран - сура Ясин{"\n\n"}
                      </span>
                    </h6>
                  </Link>
                  <Link to="/text" state={{ myText: pushkin }}>
                    <h6>
                      <span className="poem-title">
                        Пушкин - Я помню чудное мгновенье...{"\n\n"}
                      </span>
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        <Route path="/text" element={<Text />} />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
      <footer className="d-flex justify-content-between Inter-500" id="credits">
        <p>Made with ❤️ by Yerkebulan Omar </p>
        <div className="buttons">
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://telegram.me/yerkebulanomar", "_blank");
            }}>
            <img className="btn-img" src={TELEGRAM_LOGO} alt="linkedin" />
          </button>
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://github.com/yerkebulanomar", "_blank");
            }}>
            <img className="btn-img" src={GITHUB} alt="github" />
          </button>
          <button
            className="contact-btn"
            onClick={() => {
              window.open("https://www.linkedin.com", "_blank");
            }}>
            <img className="btn-img" src={LINKEDIN_LOGO} alt="linkedin" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
