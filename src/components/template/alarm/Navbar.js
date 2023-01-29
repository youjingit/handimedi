import { FaArrowLeft } from "react-icons/fa";

function AlarmNavbar({ onArrowClick }) {
	return (
		<header>
			<nav className="navbar">
				<button type="button" className="navbar_back" onClick={onArrowClick}>
					<FaArrowLeft />
				</button>
			</nav>
		</header>
	);
}

export default AlarmNavbar;
