import classNames from "classnames";
import { useState } from "react";
import { IoCaretDown, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

function AlarmStep2({ values, setValues,  onPrevClick, onNextClick }) {
	const [modal, setModal] = useState(false);
	const [List, setList] = useState(false);
	const [minutes, setMinutes] = useState([0, 10, 20, 30, 40, 50]);

	return (
		<div>
			<header>
				<TemplateNavbar onArrowClick={ onPrevClick } />
			</header>
			<main>
				<form className="medi_register_form">
					<fieldset>
						<legend className="hide">약 복용 정보 입력</legend>
						<div>
							<h2>몇 시에 복용하시나요?</h2>
							<div className="form_input_wrap">
								<div>
									<input type="text" id="hour" name="hour" onChange={(e) => (e.target.value)}/>
									<label htmlFor="hour">시</label>
								</div>
								<div className="form_minutes_sel">
									<input type="text" id="minute" name="minute" onChange={(e) => (e.target.value)}></input>
									<button type="button" className="minutes_arrow">
										<IoCaretDown
											onClick={() => {
												setModal(true);
											}}
										/>
									</button>
									{modal && (
										<div className="modal_background">
											<div className="sel_modal">
												<div className="sel_minutes">
													{minutes.map((minutesObj, i) => {
														var i = 0;
														return(
															<span key={i} className="minutes">{minutesObj}분</span>
														)
													})}	
												</div>
												<div className="sel_btn_wrap">
													<button
														type="button"
														className="close_btn"
														onClick={() => {
															setModal(false);
														}}
													>
														닫기
													</button>
													<button type="button" className="confirm_btn">
														확인
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
								<button type="button" className="add_alarm" onClick={()=>{ 
									setList(true)
									let copy = [...values.times];
									copy.unshift(values);
									setValues.times(copy)
									}}>
									알림 추가
								</button>
							</div>
							<ul className="hour_info">
								<li>0~23시 사이로 입력해주세요</li>
								<li>'+' 버튼으로 3개까지 추가할 수 있습니다.</li>
							</ul>

							{List && 
							(<div className="alarm_list">
								<ul>
									{values.times.map((timesObj, i)=>{
										var i = 0;
										return(
											<li key={i}><span>{timesObj.hour}:{timesObj.minute}</span>
											<button type="button" className="delete_btn"
											onClick={() => {
												let copy = [...values.times[i]];
												copy.splice(i, 1);
              									setValues.times[i](copy);	
												}
											}>
												<span className="hide">삭제하기</span>
												<i><IoClose /></i>
											</button>
											</li>
										);
									})}
								</ul>
							</div>)
							}
						</div>
					</fieldset>
				</form>
			</main>
			<footer>
				<div className="footer_btn_wrap">
					<Link to="" className={classNames("next_btn", { disabled: !values.times[0].hour })} onClick={onNextClick} >
						확인
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default AlarmStep2;
