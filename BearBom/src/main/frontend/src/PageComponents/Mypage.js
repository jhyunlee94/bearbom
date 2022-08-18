import React from "react";
import "../css/mypage.css";

const Mypage = () => {
  return (
    <>
      <header>
        {/* <div className="login_join">
          <ul>
            <li>로그인</li>
            <li>마이페이지</li>
          </ul>
        </div> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="../images/mainlogo(temp).png" alt="" />
              className 222
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link mx-auto" aria-current="page" href="#">
                    클래스 검색
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-auto" href="#">
                    클래스 등록
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-auto" href="#">
                    이용안내
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-auto" href="#">
                    고객센터
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-auto" href="#">
                    마이페이지
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="wide-bar">
        <ul>
          <li>지역</li>
          <li>|</li>
          <li>
            <a href="#">서울</a>
          </li>
          <li>
            <a href="#">경기도</a>
          </li>
          <li>
            <a href="#">부산</a>
          </li>
          <li>
            <a href="#">인천</a>
          </li>
          <li>
            <a href="#">대구</a>
          </li>
          <li>
            <a href="#">울산</a>
          </li>
          <li>
            <a href="#">광주</a>
          </li>
          <li>
            <a href="#">대전</a>
          </li>
          <li>
            <a href="#">경상남도</a>
          </li>
          <li>
            <a href="#">경상북도</a>
          </li>
          <li>
            <a href="#">전라남도</a>
          </li>
          <li>
            <a href="#">전라북도</a>
          </li>
          <li>
            <a href="#">충청남도</a>
          </li>
          <li>
            <a href="#">충청북도</a>
          </li>
          <li>
            <a href="#">강원도</a>
          </li>
          <li>
            <a href="#">제주도</a>
          </li>
          <li>
            <a href="#">세종</a>
          </li>
        </ul>
        <ul>
          <li>카테고리</li>
          <li>|</li>
          <li>
            <a href="#">핸드메이드</a>
          </li>
          <li>
            <a href="#">쿠킹</a>
          </li>
          <li>
            <a href="#">플라워/가드닝</a>
          </li>
          <li>
            <a href="#">드로잉</a>
          </li>
          <li>
            <a href="#">음악</a>
          </li>
          <li>
            <a href="#">요가/필라테스</a>
          </li>
          <li>
            <a href="#">레저/스포츠</a>
          </li>
          <li>
            <a href="#">뷰티</a>
          </li>
          <li>
            <a href="#">반려동물</a>
          </li>
          <li>
            <a href="#">체험</a>
          </li>
          <li>
            <a href="#">자기계발</a>
          </li>
        </ul>
      </div>
      <br />
      <main>
        <div className="wrap">
          <form action="#">
            <div className="login">
              <h2>로그인</h2>
              <div className="login_id">
                <p>아이디</p>
                <input type="text" className="" name="" id="" required />
              </div>
              <div className="login_pw">
                <p>비밀번호</p>
                <input type="password" className="" name="" id="" required />
              </div>

              <div className="submit">
                <input type="submit" value="로그인" />
              </div>

              <hr />

              <div className="easy_login">
                <p>간편 로그인</p>
                <div className="login_sns" style={{ textAlign: "center" }}>
                  <a
                    href="https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com"
                    className="sns_naver"
                  >
                    <img
                      src="../images/naver_login.png"
                      alt="네이버 로그인"
                      width="30"
                      height="30"
                    />
                  </a>
                  <a
                    href="https://accounts.kakao.com/login?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo"
                    className="sns_kakao"
                  >
                    <img
                      src="../images/kakao_login.png"
                      alt="카카오 로그인"
                      width="30"
                      height="30"
                    />
                  </a>
                  <a
                    href="https://accounts.google.com/signin/v2/identifier?hl=ko&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fhl%3Dko&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                    className="sns_google"
                  >
                    <img
                      src="../images/google_login.png"
                      alt="구글 로그인"
                      width="30"
                      height="30"
                    />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />
      </main>
    </>
  );
};

export default Mypage;
