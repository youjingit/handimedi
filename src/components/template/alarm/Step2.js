import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import AlarmNavbar from "./Navbar";

function AlarmStep2({ onPrevClick, onNextClick }) {
	const [modal, setModal] = useState(false);
	return (
		<div>
			<header>
				<AlarmNavbar onArrowClick={onPrevClick} />
			</header>
			<main>
				<form className="medi_register_form">
					<fieldset>
						<legend className="hide">약 복용 정보 입력</legend>
						<div>
							<h2>몇 시에 복용하시나요?</h2>
							<div className="form_input_wrap">
								<div>
									<input type="text" id="hours"/>
									<label htmlFor="hours">시</label>
								</div>
								<div className="form_minutes_sel">
									<span>0 분</span>
									<button type="button" className="minutes_arrow">
										<IoCaretDown 
										onClick={ () => { setModal(true) } }/>
									</button>
									{
										modal == true ? 
										<div class="modal_background">
											<div className="sel_modal">
												<div className="sel_minutes">
													<span>0분</span>
													<span>10분</span>
													<span>20분</span>
													<span>30분</span>
													<span>40분</span>
													<span>50분</span>
												</div> 
												<div className="sel_btn_wrap">
													<button type="button" className="close_btn" onClick={ () => { setModal(false) }}>닫기</button>
													<button type="button" className="confirm_btn">확인</button>
												</div>
											</div>
										</div> : null
									}
								</div>
								<button type="button" className="add_alarm">알림 추가</button>
							</div>
							<ul className="hours_info">
								<li>0~23시 사이로 입력해주세요</li>
								<li>'+' 버튼으로 3개까지 추가할 수 있습니다.</li>
							</ul>

							<div className="alarm_list">

							</div>
						</div>
					</fieldset>
				</form>
			</main>
			<footer>
				<div className="footer_btn_wrap">
					<Link to="" className="next_btn" onClick={onNextClick}>
						확인
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default AlarmStep2;
