import { Link } from "react-router-dom";
import BottomNav from "../../components/fragments/BottomNav";
import TopNav from "../../components/fragments/TopNav";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5"

function AlarmList() {
	return (
		<div>
			<header>
				<TopNav />
			</header>
			<main>
				<div className="alarm_list_wrap">
					<h2>약 복용 알림 목록</h2>
					
                    <div className="alarm_list">
                        <Link to="/alarm/form" className="register_btn">
                            <span className="hide">알림 추가</span>
                            <i><FaPen /></i>
                        </Link>
                        <div className="alarm_list_item">
                            <h4>감기약</h4>
                            <div className="alarm_time">
                                <span>월, 수, 금</span>
                                <div>
                                    <span>08:30</span>
                                    <span>14:00</span>
                                    <span>19:30</span>
                                </div>
                            </div>
                            <button type="button" className="delete_btn">
                                <span className="hide">삭제하기</span>
                                <i><IoClose /></i>
                            </button>
                        </div>
                    </div>
				</div>
			</main>
			<footer>
				<BottomNav />
			</footer>
		</div>
	);
}

export default AlarmList;
