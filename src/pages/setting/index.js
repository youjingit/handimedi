import $ from "jquery";
import TopNav from "components/fragments/TopNav";
import { useEffect, useState } from "react";
import BottomNav from "../../components/fragments/BottomNav";

function Setting() {
	const [openMenu, setOpenMenu] = useState("alarm");

	const handleChange = (menu) => {
		if (openMenu === menu) {
			setOpenMenu("");
			return;
		}
		setOpenMenu(menu);
	};

	useEffect(() => {
		$(".setting_list a").click(function () {
			$(".setting_list_item").not($(this).next()).slideUp();
			$(this).next().slideToggle("slow");
		});
	}, []);

	return (
		<div>
			<TopNav />
			<main>
				<ul>
					<li className="setting_list">
						<a href="#!" onClick={() => handleChange("alarm")}>
							알림설정<i className="open_btn">열기</i>
						</a>
						<ul className="setting_list_item">
							<li>알림차단</li>
							<li>소리</li>
							<li>진동</li>
							<li>
								<span>알림음 설정</span>
								<span>기본 알림 소리 (조약돌)</span>
							</li>
						</ul>
					</li>
					<li className="setting_list">
						<a href="#!" onClick={() => handleChange("terms")}>
							서비스 이용 약관<i className="open_btn">열기</i>
						</a>
						<ul className="setting_list_item">
							<li>알림차단</li>
							<li>소리</li>
							<li>진동</li>
							<li>
								<span>알림음 설정</span>
								<span>기본 알림 소리 (조약돌)</span>
							</li>
						</ul>
					</li>
					<li className="setting_list">
						<a href="#!" onClick={() => handleChange("privacy")}>
							개인정보처리방침<i className="open_btn">열기</i>
						</a>
						<ul className="setting_list_item">
							<li>알림차단</li>
							<li>소리</li>
							<li>진동</li>
							<li>
								<span>알림음 설정</span>
								<span>기본 알림 소리 (조약돌)</span>
							</li>
						</ul>
					</li>
				</ul>
			</main>
			<BottomNav activeMenu="setting" />
		</div>
	);
}

export default Setting;
