// 목록 불러오기
export const getList = () => {
  return JSON.parse(localStorage.getItem("alarmList") || "[]");
};

// 알림 저장
export const save = (newData) => {
  const list = getList();
  list.push(newData);
  localStorage.setItem("alarmList", JSON.stringify(list));
};

// 알림 삭제
export const del = (index) => {
  const list = getList();
  const newList = [];
  for (var i = 0; i < list.length; i++) {
    var data = list[i];
    if (i === index) {
      //삭제할 데이터와 동일한 경우 조건문 계속 실행
      continue;
    }
    newList.push(data); //삭제할 데이터와 다를 경우 다시 넣어줌
  }
  localStorage.setItem("alarmList", JSON.stringify(newList));
};
