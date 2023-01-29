import { Link } from "react-router-dom";
import AlarmNavbar from "./Navbar";

function AlarmStep2({ onPrevClick, onNextClick }) {
	return (
		<div>
			<AlarmNavbar onArrowClick={onPrevClick} />
			<main>step2</main>
			<footer>
				<div className="footer_btn_wrap">
					<Link to="" className="next_btn" onClick={onNextClick}>
						다음
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default AlarmStep2;
