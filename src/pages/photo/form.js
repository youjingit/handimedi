import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoStep1 from "../../components/template/photo/Step1";
import PhotoStep2 from "../../components/template/photo/Step2";
import PhotoStep3 from "../../components/template/photo/Step3";

function PhotoForm() {
	const [step, setStep] = useState(1);
	let navigate = useNavigate();
	
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

	return (
		<>   
			{step === 1 && (
				<PhotoStep1
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
			{step === 2 && (
				<PhotoStep2
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
			{step === 3 && (
				<PhotoStep3
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
				/>
			)}
		</>
	);
}

export default PhotoForm;
