import GITHUB from "../media/github-mark-white.svg";
import LINKEDIN_LOGO from "../media/icons8-linkedin-circled-96.svg";
import TELEGRAM_LOGO from "../media/Telegram_logo.svg";

export default function Footer() {
  return (
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
  );
}
