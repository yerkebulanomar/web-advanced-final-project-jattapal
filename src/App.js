import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import React, { useState } from "react";
import Text from "./Text";

function App() {
  const [textValue, setTextValue] = useState("");

  const bobDylan =
    "How many roads must a man walk down\nBefore you call him a man?\nHow many seas must a white dove sail\nBefore she sleeps in the sand?\nYes, and how many times must the cannonballs fly\nBefore they're forever banned?\n\nThe answer, my friend, is blowin' in the wind\nThe answer is blowin' in the wind";
  const bata =
    "Құдай берсін, кем қылмасын,\nДастарханың мол болсын,\nАбыройың зор болсын.\nОтбасының байлығын берсін,\n\nДеніміздің саулығын берсін.\nКөңіліміз тоқ болсын,\nУайым - қайғы жоқ болсын.\nОтырғандарың үлкен тақ болсын.\n";
  const fatiha =
    "Bismillaahir Rahmaanir Raheem\nAlhamdu lillaahi Rabbil ‘aalameen\nAr-Rahmaanir-Raheem\nMaaliki Yawmid-Deen\nIyyaaka na’budu wa lyyaaka nasta’een\nIhdinas Siraatal Mustaqeem\nSiraatal lazheena an’amta ‘alaihim\nghayril maghdoobi ‘alaihim wa lad-daalleen";
  const pushkin =
    "Я помню чудное мгновенье:\nПередо мной явилась ты,\nКак мимолетное виденье,\nКак гений чистой красоты.\n\nВ томленьях грусти безнадежной,\nВ тревогах шумной суеты,\nЗвучал мне долго голос нежный\nИ снились милые черты.";
  const instruction =
    "Инструкция:\n1. Cкопируйте текст, который Вы хотите выучить и вставьте в окно inbox либо выберите один из предоставленных стихов\n2. В открывшемся окне при нажатии кнопки More текст будет постепенно исчезать, при нажатии кнопки Less появляться\n3. По мере заучивания текста нажимайте на кнопку More до полного заучивания";

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">Jattap.al</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <form className="d-flex flex-column align-items-center mb-3">
                <textarea
                  value={textValue}
                  onChange={handleTextChange}
                  placeholder="Введите свой текст"
                />
                <Link to="/text" state={{ myText: textValue }}>
                  <button type="submit">Далее</button>
                </Link>
              </form>
              <div className="d-flex justify-content-around mb-3">
                <Link to="/text" state={{ myText: bobDylan }}>
                  <h6>
                    Bob Dylan - Blowin' in the wind{"\n\n"}
                    {bobDylan}
                  </h6>
                </Link>
                <Link to="/text" state={{ myText: bata }}>
                  <h6>
                    Бата{"\n\n"}
                    {bata}
                  </h6>
                </Link>
                <Link to="/text" state={{ myText: fatiha }}>
                  <h6>
                    Al-Fatiha{"\n\n"}
                    {fatiha}
                  </h6>
                </Link>
                <Link to="/text" state={{ myText: pushkin }}>
                  <h6>
                    А. С. Пушкин{"\n\n"}
                    {pushkin}
                  </h6>
                </Link>
              </div>
              <h3 className="p-3">{instruction}</h3>
              <footer className="d-flex justify-content-between mt-3 p-3">
                <p>
                  Made with ❤️ at{" "}
                  <a href="https://www.nfactorial.school/">nFactorial</a> in
                  2023
                </p>
                <p>
                  Credits: icons from <a href="https://icons8.com/">Icons8</a>
                </p>
              </footer>
            </div>
          }
        />
        <Route path="/text" element={<Text />} />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </>
  );
}

export default App;
