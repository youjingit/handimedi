import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

function PhotoStep2({ onPrevClick, onNextClick }) {
	return (
		<div>
			<header>
				<TemplateNavbar onArrowClick={onPrevClick} />
			</header>
			<main>
				<div className="container gap50">
					<h2>약을 찾고있어요...</h2>
				</div>
				<div className="loading_image">

				</div>
			</main>
			<footer>
				<Link to="" className="next_btn" onClick={onNextClick}>
					확인
				</Link>
			</footer>
		</div>
	);
}

export default PhotoStep2;
