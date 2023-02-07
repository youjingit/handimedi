import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TemplateNavbar from "./Navbar";

function PhotoStep2({ onPrevClick }) {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/photo/step3");
    }, 3400);
  }, [navigate]);
  return (
    <div>
      <header>
        <TemplateNavbar onArrowClick={onPrevClick} />
      </header>
      <main>
        <div className="container">
          <h2>약을 찾고있어요...</h2>
          <div className="loading_image">
            <img src="/static/images/loading.gif" alt="사진검색중" />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default PhotoStep2;
