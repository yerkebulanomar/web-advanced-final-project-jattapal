import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import React, { useState } from "react";
import Text from "./Text";

function App() {
  const [textValue, setTextValue] = useState("");

  const jasylJailau =
    "Жасыл жайлау – түкті кілем, көк кілем,\nКөк кілемде көп ойнаймын, көп күлем.\nАйдарымнан сипап өткен самалды\nҚазағымның алақаны деп білем.\n\nҚайда жүрсең, атамекен,\nКөкейіңде жатады екен.\nКүннің өзі қимай оны,\nҰясына батады екен.\n";
  const bata =
    "Құдай берсін, кем қылмасын,\nДастарханың мол болсын,\nАбыройың зор болсын.\nОтбасының байлығын берсін,\n\nДеніміздің саулығын берсін.\nКөңіліміз тоқ болсын,\nУайым - қайғы жоқ болсын.\nОтырғандарың үлкен тақ болсын.\n";
  const fatiha =
    "бисмиллаһир рахманир рахиим\nәлхәмду лилләһи раббил ъаләмиин\nәррахманир рахиим\nмәлики йәумид диин\nиййәкә нәъбуду уәиййәкә нәстәъиин\nиһдинәс сирәтал мустәқиим\nсирәтал ләз̃иинә әнъамтә ъаләйһим\nғайрил мәғдууби ъаләйһим уәләд даллиин\n";
  const pushkin =
    "Я помню чудное мгновенье:\nПередо мной явилась ты,\nКак мимолетное виденье,\nКак гений чистой красоты.\n\nВ томленьях грусти безнадежной,\nВ тревогах шумной суеты,\nЗвучал мне долго голос нежный\nИ снились милые черты.";
  const instruction =
    "Инструкция:\n1. Cкопируйте текст, который Вы хотите выучить и вставьте в окно inbox либо выберите один из предоставленных стихов\n2. В открывшемся окне при нажатии кнопки More текст будет постепенно исчезать, при нажатии кнопки Less появляться\n3. По мере заучивания текста нажимайте на кнопку More до полного заучивания";

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1 className="d-flex justify-content-center">Jattap.al</h1>
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
                <Link to="/text" state={{ myText: jasylJailau }}>
                  <h6>
                    Жасыл жауйлау{"\n\n"}
                    {jasylJailau}
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
                    Фатиха сүресі{"\n\n"}
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
