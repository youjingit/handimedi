import { FaArrowLeft } from "react-icons/fa";

function AlarmNavbar({ onArrowClick }) {
	return (
		<nav className="navbar">
			<button type="button" className="navbar_back" onClick={onArrowClick}>
				<FaArrowLeft />
			</button>
		</nav>
	);
}

export default AlarmNavbar;
