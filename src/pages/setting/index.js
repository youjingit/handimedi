import $ from "jquery";
import TopNav from "components/fragments/TopNav";
import { useEffect, useState } from "react";
import BottomNav from "../../components/fragments/BottomNav";
import classNames from "classnames";

const SOUNDS = ["기본 알림 소리 (조약돌)", "(짹짹이)", "(삐약이)", "(웅장한 소리)"]

function Setting() {
	useEffect(() => {
		$(".setting_list_toggle a").click(function () {
			$(".setting_list_wrap").not($(this).next()).slideUp();
			$(this).next().slideToggle("slow");
		});
	}, []);

	const [modal, setModal] = useState(false); // 모달창 스위치
	const [sound, setSound] = useState("기본 알림 소리 (조약돌)"); //알림음 입력
	const [modalSound, setModalSound] = useState("기본 알림 소리 (조약돌)"); // 모달창에서 알림음 선택

	const handleCloseModal = () => {
		setSound(modalSound);
		setModal(false);
	}
	return (
		<div>
			<TopNav />
			<main>
				<div>
					<div className="setting_list_toggle">
						<a href="#!">
							<h2>알림설정</h2><i className="open_btn">열기</i>
						</a>
						<form className="setting_list_wrap">
							<fieldset>
								<legend className="hide">알림설정</legend>
								<div>
									<div className="setting_list_item">
										<label htmlFor="alarm_stop">알림차단</label>
										<label className="switch">	
											<input type="checkbox" id="alarm_stop" name="alarm_stop" value="y"/>
											<span className="ck_slider round"></span>
										</label>
										
									</div>
									<div className="setting_list_item">
										<label htmlFor="alarm_sound">소리</label>
										<label className="switch">
											<input type="checkbox" id="alarm_sound" name="alarm_sound" value="y"/>
											<span className="ck_slider round"></span>
										</label>
										
									</div>
									<div className="setting_list_item">
										<label htmlFor="alarm_vibrate">진동</label>
										<label className="switch">
												<input type="checkbox" id="alarm_vibrate" name="alarm_vibrate" value="y"/>
												<span className="ck_slider round"></span>
										</label>
									</div>
									<div className="setting_list_item">
										<label htmlFor="alarm_sound_sel" onClick={() => {setModal(true)}}>알림음 설정</label>
										<span id="alarm_sound_sel" className="setting_list_cont" onClick={() => {setModal(true)}}>{sound}</span>
										{modal && (
											<div className="modal_background">
												<div className="sel_modal">
													<div className="sel_sounds">
														{SOUNDS.map((soundObj) => {
															return(
																<span key={soundObj} className={classNames("sounds", {active: soundObj === modalSound})}
																onClick={() => { setModalSound(soundObj)}}>
																	{soundObj}
																</span>
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
								</div>
							</fieldset>
						</form>
					</div>
					<div className="setting_list_toggle">
						<a href="#!">
							<h2>서비스 이용 약관</h2><i className="open_btn">열기</i>
						</a>
						<div className="setting_list_wrap terms_wrap">
							<h3>제 1 장 총칙</h3>
							<ul>
								<li>제 1조 (목적)
									<ul>
										<li>본 약관은 서비스(이하 "회사"라 한다)는 홈페이지에서 제공하는 서비스(이하 "서비스"라 한다)를 제공함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</li>
									</ul>
								</li>
								<li>제 2조 (용어의 정의)
									<ul>
										<li>1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
											<ul>
												<li>'서비스'란 회사가 이용자에게 서비스를 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 구성한 가상의 공간을 의미하며, 서비스 자체를 의미하기도 합니다.</li>
												<li>'회원(이하 "회원"이라 한다)'이란 개인정보를 제공하여 회원등록을 한 자로서 홈페이지의 정보를 지속적으로 제공받으며 홈페이지가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
												<li>'아이디(이하 "ID"라 한다)'란 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 회원 고유의 계정 정보를 의미합니다.</li>
												<li>'비밀번호'란 회원이 부여 받은 ID와 일치된 회원임을 확인하고, 회원의 개인정보를 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 의미합니다.</li>
												<li>'회원탈퇴(이하 "탈퇴"라 한다)'란 회원이 이용계약을 해지하는 것을 의미합니다.</li>
											</ul>
										</li>
										<li>2. 본 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스 별 안내에서 정하는 바에 의합니다.</li>
									</ul>
								</li>
								<li>제 3조 (이용약관의 효력 및 변경)
									<ul>
										<li>1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 각 서비스 사이트의 초기 서비스화면에 게시합니다.</li>
										<li>2. 회사는 약관의 규제에 관한 법률, 전자거래기본법, 전자 서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
										<li>3. 회사는 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 회사가 제공하는 서비스 사이트의 초기 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.<br/>
										다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 회사는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.</li>
										<li>4. 회원은 개정된 약관에 대해 거부할 권리가 있습니다. 회원은 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 회원등록을 해지할 수 있습니다.<br/>
										단, 개정된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우에는 약관의 변경사항에 동의한 것으로 간주합니다.</li>
										<li>5. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원 피해는 회사가 책임지지 않습니다.</li>
									</ul>
								</li>
								<li>제 4조 (약관 외 준칙)
									<ul>
										<li>1. 본 약관은 회사가 제공하는 서비스에 관해 별도의 정책 및 운영규칙과 함께 적용됩니다.</li>
										<li>2. 본 약관에 명시되지 아니한 사항과 본 약관의 해석에 관하여는 관계법령에 따릅니다.</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="setting_list_toggle">
						<a href="#!">
							<h2>개인정보처리방침</h2><i className="open_btn">열기</i>
						</a>
						<div className="setting_list_wrap privacy_wrap">
							<div>
								<h3>1. 개인정보의 처리 목적</h3>
									<p>&lt;(주)handimedi&gt;(‘www.handimedi.com’이하 ‘핸디메디’) 은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
									<p>고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등</p>
								
									<h3>2. 개인정보의 처리 및 보유 기간</h3>
									
									<dl>
										<dt>① ‘핸디메디’는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.</dt>

										<dt>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</dt>
											<dd>고객 가입 및 관리 : 구글을 통한 회원가입 및 구글을 통한 관리</dd>
											<dd>보유 기간 : 구글 탈퇴 시, 즉시 삭제</dd>
									</dl>
								
								<h3>3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</h3>

									<dl>							
										<dt>① 정보주체는 ‘핸디메디’ 에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</dt>
											<dd>1. 개인정보 열람요구</dd>
											<dd>2. 오류 등이 있을 경우 정정 요구</dd>
											<dd>3. 삭제요구</dd>
											<dd>4. 처리정지 요구</dd>
									</dl>

								<h3>4. 처리하는 개인정보의 항목 작성</h3>
								<dl>						
									<dt>① ‘핸디메디’은 다음의 개인정보 항목을 처리하고 있습니다.</dt>

									<dt>&lt;‘핸디메디’에서 수집하는 개인정보 항목&gt;</dt>
									<dt>‘핸디메디’ 회원 가입 및 고객 문의 시, 제공 동의를 해주시는 개인정보 수집 항목입니다.</dt>

									<dt>■ 회원 가입 시(회원)</dt>
										<dd>필수항목 : 이름, 이메일, 전화번호, 성별, 연령대</dd>
										<dd>선택항목 : 생년월일</dd>
										<dd>수집목적 : 핸디메디 회원관리 및 마케팅 이용</dd>
										<dd>보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기</dd>

									<dt>■ 고객 문의 시(비회원)</dt>
										<dd>필수항목 : 문의종류, 이름, 휴대폰번호, 이메일, 문의사항</dd>
										<dd>수집목적 : 고객문의 및 상담요청에 대한 회신, 상담을 위한 서비스 이용기록 조회</dd>
										<dd>보유기간 : 문의 접수 후 2년 간 보관 (단, 관계 법령이 정한 시점까지 보존)</dd>

									<dt>② ‘핸디메디’은 만 14세 미만 아동의 개인정보를 보호하기 위하여 회원가입은 만14세 이상만 가능하도록 함으로써 아동의 개인정보를 수집하지 않습니다.</dt>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</main>
			<BottomNav activeMenu="setting" />
		</div>
	);
}

export default Setting;
