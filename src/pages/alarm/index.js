import { Link } from "react-router-dom";
import BottomNav from "../../components/fragments/BottomNav";
import TopNav from "../../components/fragments/TopNav";

function Alarm() {
	return (
		<div>
			<TopNav />
			<main>
				<div className="alarm_title_wrap">
					<h2>약 복용 알림 목록</h2>
				</div>
				<div className="alarm_content_wrap">
					<p>알림을 등록해보세요.</p>
					<img src="/static/images/alarm_index.png" alt="알림등록" />
					<Link to="/alarm/form" className="alarm_add_btn">
						알림 등록하기
					</Link>
				</div>
			</main>
			<BottomNav activeMenu="alarm" />
		</div>
	);
}

export default Alarm;
