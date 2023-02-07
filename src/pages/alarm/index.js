import { Link } from "react-router-dom";
import BottomNav from "../../components/fragments/BottomNav";
import TopNav from "../../components/fragments/TopNav";

function Alarm() {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main>
        <div className="container gap50">
          <h2>약 복용 알림 목록</h2>
          <img
            src={process.env.PUBLIC_URL + "/static/images/alarm_index.png"}
            alt="알림등록"
          />
          <Link to="/alarm/form" className="add_alarm_btn">
            알림을 등록해보세요
          </Link>
        </div>
      </main>
      <footer>
        <BottomNav activeMenu="alarm" />
      </footer>
    </div>
  );
}

export default Alarm;
