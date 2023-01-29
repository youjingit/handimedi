import { Link } from "react-router-dom";
import AlarmNavbar from "./Navbar";

function AlarmStep3({ onPrevClick, onNextClick }) {
	return (
		<div>
			<AlarmNavbar onArrowClick={onPrevClick} />
			<main>step3</main>
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

export default AlarmStep3;
