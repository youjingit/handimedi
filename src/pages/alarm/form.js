import { useState } from "react";
import AlarmStep1 from "../../components/template/alarm/Step1";
import AlarmStep2 from "../../components/template/alarm/Step2";
import AlarmStep3 from "../../components/template/alarm/Step3";

function AlarmForm() {
	const [step, setStep] = useState(1);

	const handlePrevClick = () => {
		if (step === 1) {
			return;
		}
		setStep(step - 1);
	};

	const handleNextClick = () => {
		if (step === 3) {
			return;
		}
		setStep(step + 1);
	};

	return (
		<>
			{step === 1 && (
				<AlarmStep1
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
			{step === 2 && (
				<AlarmStep2
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
