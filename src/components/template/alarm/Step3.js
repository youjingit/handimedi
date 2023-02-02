import { Link } from "react-router-dom";
import BottomNav from "../../fragments/BottomNav";
import TopNav from "../../fragments/TopNav";

function AlarmStep3() {
	return (
		<div>
			<header>
				<TopNav />
			</header>
			<main>
				<div className="container gap50">
					<h2>복용 시간이 되면 알려드릴게요!</h2>
					<Link to="/alarm/list" className="list_btn">
						알림 목록 보기
					</Link>
				</div>
			</main>
			<footer>
				<BottomNav activeMenu="alarm" />
			</footer>
		</div>
	);
}

export default AlarmStep3;
