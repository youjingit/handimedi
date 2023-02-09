import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlarmStep1 from "../../components/template/alarm/Step1";
import AlarmStep2 from "../../components/template/alarm/Step2";
import AlarmStep3 from "../../components/template/alarm/Step3";
import { save } from "api/alarmApi";

function AlarmForm() {
  let navigate = useNavigate();
  const [step, setStep] = useState(1);  
  const [values, setValues] = useState({
    name: "",
    day: "everyday",
    days: [],
    times: [
      // {
      // 	hour: "",
      // 	minute: "",
      // },
    ],
  });

  const handleChange = (event) => {
    let newValue = event.target.value; // 사용자가 변경할 값
    if (event.target.name === "days") {  
      if (event.target.checked) {      // 요일 선택했을 때
        newValue = [...values.days, event.target.value]; // 새로운 배열 =  기존 요일 배열 사본 + 선택한 값 
      } else {  // 요일 선택 해제했을 때 
        newValue = values.days.filter((day) => day !== event.target.value);
        // 사용자가 해제한 값과 일치하지 않는 값을 데이터에 넣음 
        // (일치하면 데이터 안에 안 넣음 (=삭제)) 
      } 
      // newValue = [];
      // for( var i = 0; i < values.days.length; i++ ){
      //   var day = values.days[i];
      //     if(day !== event.target.value){
      //       newValue.push(day);
      //     }
      // } 
    }
    setValues((state) => ({
      ...state,
      [event.target.name]: newValue, // 사용자가 입력한 약 이름 넣기
    }));
  };

  const handlePlusTime = (hour, minute) => {
    if (values.times.length === 3) {
      return;
    }
    const newValue = [...values.times, { hour: hour, minute: minute }];
    setValues((state) => ({
      ...state,
      times: newValue,
    }));
  };

  const handleMinusTime = (index) => {
    // const newValue = values.times.filter(time => time.hour !== hour && time.minute !== minute);
    let newValue = [];
    for (var i = 0; i < values.times.length; i++) {
      var time = values.times[i];
      if (index !== i) {
        newValue.push(time);
      }
    }
    setValues((state) => ({
      ...state,
      times: newValue,
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
    const nextStep = step + 1; // alarm 2에서 3으로 넘어갈 때 데이터 저장
    if (nextStep === 3) {
      save(values);
    }
    setStep(nextStep);
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
          addValues={handlePlusTime}
          delValues={handleMinusTime}
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
