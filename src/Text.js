import "./App.css";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Text(props) {
  const [isCovered, setIsCovered] = useState(false);
  const location = useLocation();

  const handleToggleCover = () => {
    setIsCovered((prev) => !prev);
  };

  // let atameken =
  //   "Жасыл жайлау – түкті кілем, көк кілем,\nКөк кілемде көп ойнаймын, көп күлем.\nАйдарымнан сипап өткен самалды\nҚазағымның алақаны деп білем.\nҚайда жүрсең, атамекен,\nКөкейіңде жатады екен.\nКүннің өзі қимай оны,\nҰясына батады екен.";
  // const punctuationMarks = [
  //   ",",
  //   ".",
  //   ";",
  //   ":",
  //   "?",
  //   "!",
  //   `-`,
  //   '"',
  //   "(",
  //   ")",
  //   // "–",
  // ];

  // const regex = new RegExp(`[${punctuationMarks.join("")}]`, "g");
  // let newAtameken = atameken.replace(regex, "");
  // console.log(newAtameken);
  // newAtameken = newAtameken.replace(new RegExp("– ", "g"), "");

  // console.log(newAtameken);

  // const atamekenArray = newAtameken.split("\n");
  // console.log(atamekenArray);
  // atamekenArray.forEach((el) => {
  //   const wordsInLine = el.split(" ");
  //   console.log(wordsInLine);
  // });

  console.log(location.state.myText);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <p
          style={{ whiteSpace: "pre-line" }}
          id={isCovered ? "covered-text" : ""}>
          {location.state.myText}
        </p>
        <button className="cover-button" onClick={handleToggleCover}>
          Cover
        </button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Text;
