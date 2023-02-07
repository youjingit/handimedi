import { Link } from "react-router-dom";
import BottomNav from "../../components/fragments/BottomNav";
import TopNav from "../../components/fragments/TopNav";

function Photo() {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main>
        <div className="container gap50">
          <h2>사진으로 약 검색하기</h2>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/static/images/search_index.png"}
              alt="사진검색"
              width={"150px"}
            />
          </div>
          <Link to="/photo/form" className="add_photo_btn">
            사진 업로드하기
          </Link>
        </div>
      </main>
      <footer>
        <BottomNav activeMenu="photo" />
      </footer>
    </div>
  );
}

export default Photo;
