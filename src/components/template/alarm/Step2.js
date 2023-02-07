import classNames from "classnames";
import { useState } from "react";
import { IoCaretDown, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

const MINUTES = ["00", "10", "20", "30", "40", "50"];

function AlarmStep2({
  values,
  addValues,
  delValues,
  onPrevClick,
  onNextClick,
}) {
  const [modal, setModal] = useState(false); // 모달창 스위치
  const [hour, setHour] = useState("0"); // 시간 입력
  const [minute, setMinute] = useState("00"); // 분 입력
  const [modalMinute, setModalMinute] = useState("00"); // 모달창에서 분 선택

  const handleChangeHour = (event) => {
    // 시간 입력 input
    let value = parseInt(event.target.value.replace(/[^0-9]/g, ""));
    if (value < 0 || value > 23) {
      value = 0;
    }
    value += ""; // 숫자를 문자형식으로 변환
    if (value.length < 2) {
      value = "0" + value;
    }
    setHour(value);
  };

  const handleCloseModal = () => {
    // 모달창 닫을 때 선택한 '분' 을 '분'입력 창에 넣기
    setMinute(modalMinute);
    setModal(false);
  };

  return (
    <div>
      <header>
        <TemplateNavbar onArrowClick={onPrevClick} />
      </header>
      <main>
        <form className="medi_register_form">
          <fieldset className="fieldset">
            <legend className="hide">약 복용 정보 입력</legend>
            <div>
              <h2>몇 시에 복용하시나요?</h2>
              <div className="form_input_container">
                <div className="form_input_wrap">
                  <div className="form_hour_input">
                    <input
                      type="text"
                      id="hour"
                      name="hour"
                      value={hour}
                      onChange={handleChangeHour}
                    />
                    <label htmlFor="hour" className="hour_label">
                      시
                    </label>
                  </div>
                  <div className="form_minutes_sel">
                    <span className="minute_label">{minute}분</span>
                    <button
                      type="button"
                      className="minutes_arrow"
                      onClick={() => {
                        setModal(true);
                      }}
                    >
                      <IoCaretDown />
                    </button>
                    {modal && (
                      <div className="modal_background">
                        <div className="sel_modal">
                          <div className="sel_minutes">
                            {MINUTES.map((minuteObj) => {
                              return (
                                <span
                                  key={minuteObj}
                                  className={classNames("minutes", {
                                    active: minuteObj === modalMinute, // 기본 "00분"이 active되게
                                  })}
                                  onClick={() => setModalMinute(minuteObj)}
                                >
                                  {minuteObj}분
                                </span>
                              );
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
                            <button
                              type="button"
                              className="confirm_btn"
                              onClick={handleCloseModal}
                            >
                              확인
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="add_alarm"
                    onClick={() => addValues(hour, minute)}
                  >
                    알림 추가
                  </button>
                </div>
                <ul className="hour_info">
                  <li>0~23시 사이로 입력해주세요</li>
                  <li>'+' 버튼으로 3개까지 추가할 수 있습니다.</li>
                </ul>
                {values.times && (
                  <div className="alarm_list">
                    <ul>
                      {values.times.map((timesObj, i) => {
                        return (
                          <li key={i}>
                            <span>
                              {timesObj.hour}:{timesObj.minute}
                            </span>
                            <button
                              type="button"
                              className="delete_btn"
                              onClick={() => delValues(i)}
                            >
                              <span className="hide">삭제하기</span>
                              <i>
                                <IoClose />
                              </i>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer>
        <div className="footer_btn_wrap">
          <Link
            to=""
            className={classNames("next_btn", {
              disabled: values.times.length < 1,
            })}
            onClick={onNextClick}
          >
            확인
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default AlarmStep2;
