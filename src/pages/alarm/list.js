import { Link, useNavigate } from "react-router-dom";
import BottomNav from "components/fragments/BottomNav";
import TopNav from "components/fragments/TopNav";
import { FaPen } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { getList, del } from "api/alarmApi";
import { useEffect, useState } from "react";

function AlarmList() {
	const [loading, setLoading] = useState(false);
	const [list, setList] = useState([]);
	const navigate = useNavigate();

	// 리스트에서 삭제할 때 실행
	const handleDel = (index) => {
		del(index);
		setList(getList()); // api에서 이미 삭제된 데이터를 다시 불러옴
	};

	// 화면 다 로딩되면 실행
	useEffect(() => {
		setList(getList());
		setLoading(true);
	}, []);

	// loading이나 list가 변경되면 실행
	useEffect(() => {
		if (loading && list.length < 1) {
			navigate("/alarm"); // 불러올 리스트가 없으면 알람등록하기 페이지로 이동
		}
	}, [navigate, list, loading]); // 위에서 setLoading이 true로 값이 변경됐기 때문에 해당 useEffect 실행됨

	return (
		<div>
			<header>
				<TopNav />
			</header>
			<main>
				<div className="container">
					<h2>약 복용 알림 목록</h2>

					<div className="alarm_list_wrap">
						<Link to="/alarm/form" className="register_btn">
							<span className="hide">알림 추가</span>
							<i>
								<FaPen />
							</i>
						</Link>
						<div className="alarm_list_gap20">
							{list.map((listObj, i) => {
								return (
									<div key={i} className="alarm_list_item">
										<h4>{listObj.name}</h4>
										<div className="alarm_time">
											<span>
												{listObj.day === "everyday"
													? "매일"
													: listObj.days.join(", ")}
											</span>
											<div>
												{listObj.times.map((timesObj, j) => {
													return (
														<span key={j} className="time_list">
															{timesObj.hour}:{timesObj.minute}
														</span>
													);
												})}
											</div>
										</div>
										<button
											type="button"
											className="delete_btn"
											onClick={() => handleDel(i)}
										>
											<span className="hide">삭제하기</span>
											<i>
												<IoClose />
											</i>
										</button>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</main>
			<footer>
				<BottomNav activeMenu="alarm" />
			</footer>
		</div>
	);
}

export default AlarmList;
