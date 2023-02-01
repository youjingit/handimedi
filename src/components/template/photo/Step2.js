import TemplateNavbar from "./Navbar";

function PhotoStep2({ onPrevClick, onNextClick }) {
	return (
		<div>
			<header>
				<TemplateNavbar onArrowClick={onPrevClick} />
			</header>
			<main>
				<h2>약을 찾고있어요...</h2>
			</main>
			<footer>
			</footer>
		</div>
	);
}

export default PhotoStep2;
