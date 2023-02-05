import { Link } from "react-router-dom";
import BottomNav from "../../fragments/BottomNav";
import TopNav from "../../fragments/TopNav";

function PhotoStep3() {
	return (
		<div>
			<header>
				<TopNav />
			</header>
			<main>
				<div className="container">
					<h2>사진 검색 결과</h2>
					<div className="search_result_wrap">
						<div className="search_result_item">
							<div className="search_result_txt">
								<h4>타이레놀8시간이알서방정325mg</h4>
								<span>해열·진통·소염제</span>
							</div>
							<img
								src={process.env.PUBLIC_URL + "/static/images/result_01.jpg"}
								alt="검색결과"
							/>
						</div>
						<div className="search_result_item">
							<div className="search_result_txt">
								<h4>마이폴캡슐</h4>
								<span>아편알카로이드계 제제</span>
							</div>
							<img
								src={process.env.PUBLIC_URL + "/static/images/result_02.jpg"}
								alt="검색결과"
							/>
						</div>
						<div className="search_result_item">
							<div className="search_result_txt">
								<h4>부스코판당의정</h4>
								<span>진경제</span>
							</div>
							<img
								src={process.env.PUBLIC_URL + "/static/images/result_03.jpg"}
								alt="검색결과"
							/>
						</div>
					</div>
					<p>일치하는 약을 찾지 못하셨나요?</p>
					<Link to="" className="direct_search_btn">
						직접 검색해보기
					</Link>
				</div>
			</main>
			<footer>
				<BottomNav activeMenu="photo" />
			</footer>
		</div>
	);
}

export default PhotoStep3;
