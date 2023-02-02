import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

const days = [
	{
		name: "월",
		value: "monday",
	},
	{
		name: "화",
		value: "tuesday",
	},
	{
		name: "수",
		value: "wednesday",
	},
	{
		name: "목",
		value: "thursday",
	},
	{
		name: "금",
		value: "friday",
	},
	{
		name: "토",
		value: "saturday",
	},
	{
		name: "일",
		value: "sunday",
	},
];

function AlarmStep1({ onPrevClick, onNextClick }) {
	return (
		<div>
			<header>
				<TemplateNavbar onArrowClick={onPrevClick} />
			</header>
			<main>
				<form className="medi_register_form">
					<fieldset>
						<legend className="hide">약 복용 정보 입력</legend>
						<div>
							<h2>어떤 약을 복용하시나요?</h2>
							<input type="text" className="form_input" />
						</div>
						<div>
							<h2>언제 복용하시나요?</h2>
							<div className="form_day_input">
								<div className="form_radio_wrap">
									<input
										type="radio"
										id="everyday"
										className="form_radio"
										name="day"
										value="everyday"
									/>
									{
									(document.getElementById("everyday").checked == true) ? 
									(document.getElementsByClassName("day").disabled == true) : 
									(document.getElementsByClassName("day").disabled == false) 
									};
									<label htmlFor="everyday" className="form_radio_label">
										매일
									</label>
								</div>
							</div>
							<div className="form_day_input">
								<div className="form_radio_wrap">
									<input
										type="radio"
										id="specialday"
										className="form_radio"
										name="day"
										value="specialday"
									/>
									<label htmlFor="specialday" className="form_radio_label">
										특정 요일에
									</label>
								</div>
							</div>
							<div className="form_inline_between">
								{days.map((day) => {
									return (
										<div key={day.value} className="form_check_wrap">
											<input
												type="checkbox"
												className="form_check"
												id={day.value}
												value={day.value}
											/>
											<label htmlFor={day.value} className="form_check_label">
												{day.name}
											</label>
										</div>
									);
								})}
							</div>
						</div>
					</fieldset>
				</form>
			</main>
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

export default AlarmStep1;
