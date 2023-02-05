import classNames from "classnames";
import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

const DAYS = [
	{
		name: "월",
		value: "월",
	},
	{
		name: "화",
		value: "화",
	},
	{
		name: "수",
		value: "수",
	},
	{
		name: "목",
		value: "목",
	},
	{
		name: "금",
		value: "금",
	},
	{
		name: "토",
		value: "토",
	},
	{
		name: "일",
		value: "일",
	},
];

function AlarmStep1({ values, setValues, onPrevClick, onNextClick }) {
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
							<input
								type="text"
								className="form_input"
								name="name"
								value={values.name}
								onChange={setValues}
							/>
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
										checked={values.day === "everyday"}
										onChange={setValues}
									/>
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
										checked={values.day === "specialday"}
										onChange={setValues}
									/>
									<label htmlFor="specialday" className="form_radio_label">
										특정 요일에
									</label>
								</div>
							</div>
							{values.day === "specialday" && (
								<div className="form_inline_between">
									{DAYS.map((dayObj) => {
										return (
											<div key={dayObj.value} className="form_check_wrap">
												<input
													type="checkbox"
													className="form_check"
													id={dayObj.value}
													name="days"
													value={dayObj.value}
													checked={values.days.includes(dayObj.value)}
													onChange={setValues}
												/>
												<label
													htmlFor={dayObj.value}
													className="form_check_label"
												>
													{dayObj.name}
												</label>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</fieldset>
				</form>
			</main>
			<footer>
				<div className="footer_btn_wrap">
					<Link
						to=""
						className={classNames("next_btn", { disabled: !values.name })}
						onClick={onNextClick}
					>
						다음
					</Link>
				</div>
			</footer>
		</div>
	);
}

export default AlarmStep1;
