import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlarmStep1 from "../../components/template/alarm/Step1";
import AlarmStep2 from "../../components/template/alarm/Step2";
import AlarmStep3 from "../../components/template/alarm/Step3";

function AlarmForm() {
	let navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [values, setValues] = useState({
		name: "",
		day: "everyday",
		days: [],
		times: [
			{
				hour: "",
				minute: "",
			}
		],
	});

	const handleChange = (event) => {
		let newValue = event.target.value; // 사용자가 변경할 값
		if (event.target.name === "days") {
			if (event.target.checked) {
				newValue = [...values.days, event.target.value];
			} else {
				newValue = values.days.filter((day) => day !== event.target.value);
			}

			// newValue = [];
			// for(var i = 0; i < values.days.length; i++){
			// 	var day = values.days[i];
			// 	if(day !== event.target.value){
			// 		newValue.push(day);
			// 	}
			// }
		}
		setValues((state) => ({
			...state,
			[event.target.name]: newValue,
		}));
	};

	// setValues(function(state){
	// 	return{
	// 		name: state.name,
	// 		day: state.day,
	// 		days: state.days,
	// 		times: state.times,
	// 		'input태그에 달린 name값': '사용자가 입력한 값'
	// 	}
	// })

	const handlePrevClick = () => {
		if (step === 1) {
			navigate(-1);
		} else {
			setStep(step - 1);
		}
	};

	const handleNextClick = () => {
		if (step === 3) {
			return;
		}
		setStep(step + 1);
	};
	console.log(values);
	return (
		<>
			{step === 1 && (
				<AlarmStep1
					values={values}
					setValues={handleChange}
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
			{step === 2 && (
				<AlarmStep2
					values={values}
					setValues={handleChange}
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
			{step === 3 && (
				<AlarmStep3
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
		</>
	);
}

export default AlarmForm;
