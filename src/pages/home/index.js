import { useState } from "react";
import { FaSearch, FaLightbulb } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BottomNav from "../../components/fragments/BottomNav";
import TopNav from "../../components/fragments/TopNav";

function Home() {
	const [questionOpen, setQuestionOpen] = useState(false);

	return (
		<div>
			<header>
				<TopNav />
			</header>
			<main>
				<section>
					<div className="main_image_wrap">
						<img src={process.env.PUBLIC_URL + '/static/images/main_image.jpg'} alt="메인타이틀" />
						<div className="main_image_backdrop"></div>
						<p>
							간편하게 관리해주는
							<br />
							나만을 위한 복약 알리미
						</p>
						<form className="main_image_search" action="" method="">
							<fieldset>
								<legend className="hide">검색</legend>
								<FaSearch className="main_image_search_icon" />
								<input type="text" />
							</fieldset>
						</form>
					</div>
				</section>
				<section className="service_section">
					<div className="service_bg">
						<img
							src={process.env.PUBLIC_URL + '/static/images/main_circle.png'}
							alt="animation"
							className="service_bg_img1"
						/>
					</div>
					<div className="service_bg">
						<div className="service_gray_circle">
							<img
								src={process.env.PUBLIC_URL + '/static/images/pill.png'}
								alt="알약"
								className="service_bg_img2"
							/>
						</div>
					</div>
					<div className="service_btn_container">
						<div className="sevice_btn_wrap">
							<button type="button" className="service_btn purple">
								약 복용 알림
								<br />
								등록하기
							</button>
						</div>
					</div>
					<div className="service_btn_container reverse">
						<div className="sevice_btn_wrap">
							<button type="button" className="service_btn blue">
								사진으로
								<br />약 검색하기
							</button>
						</div>
					</div>
				</section>
				<section>
					<div className="question_wrap">
						<div className="question_title">
							<h3>
								오늘의 간단 상식 <FaLightbulb className="FaLightbulb" />
							</h3>
							<div className="question_header">
								<div>Q.</div>
								<p>캡슐을 뜯어 내용물만 복용해도 될까요?</p>
							</div>
							<div
								className="question_arrow"
								onClick={() => {
									setQuestionOpen(!questionOpen);
								}}
							>
								{questionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</div>
						</div>
						{questionOpen && (
							<div className="question_body">
								<div>A.</div>
								<p>
									젤라틴으로 만든 캡슐은 치료하고자 하는 부위와 
									이동 시간을 설정하기 위해 만들어진 것이므로
									형태 그대로 복용해야 합니다!
								</p>
							</div>
						)}
					</div>
				</section>
			</main>
			<footer>
				<BottomNav activeMenu="home" />
			</footer>
		</div>
	);
}

export default Home;
