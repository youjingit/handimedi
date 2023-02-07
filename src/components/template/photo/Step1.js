import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import TemplateNavbar from "./Navbar";

function PhotoStep1({ onPrevClick, onNextClick }) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  return (
    <div>
      <header>
        <TemplateNavbar onArrowClick={onPrevClick} />
      </header>
      <main>
        <form>
          <fieldset>
            <legend className="hide">검색할 사진 업로드</legend>
            <div>
              <h2 className="hide">사진 업로드하기</h2>
              <div className="container gap50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={saveImgFile}
                  ref={imgRef}
                  id="search_img"
                  className="file_input"
                />
                <img
                  src={
                    imgFile
                      ? imgFile
                      : process.env.PUBLIC_URL +
                        "/static/images/photo_step1.png"
                  }
                  alt="사진 미리보기"
                  width={"174px"}
                />
                <label htmlFor="search_img" className="add_photo">
                  검색할 사진 추가
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer>
        <div className="footer_btn_wrap">
          <Link to="" className="next_btn" onClick={onNextClick}>
            검색
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default PhotoStep1;
