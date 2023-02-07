import { FaArrowLeft } from "react-icons/fa";

function TemplateNavbar({ onArrowClick }) {
  return (
    <nav className="navbar">
      <button type="button" className="navbar_back" onClick={onArrowClick}>
        <FaArrowLeft />
      </button>
    </nav>
  );
}

export default TemplateNavbar;
