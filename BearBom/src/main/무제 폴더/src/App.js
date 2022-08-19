/* eslint-disable jsx-a11y/alt-text */

import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./PageComponents/Header";
import Footer from "./PageComponents/Footer";
import Mainpage from "./PageComponents/Mainpage";
import Course from "./PageComponents/Course";
import CourseRegistration from "./PageComponents/CourseRegistration";
import Notice from "./PageComponents/Notice";
import Helpdesk from "./PageComponents/Helpdesk";
import Mypage from "./PageComponents/Mypage";
import Login from "./PageComponents/Login";
import Detail from "./PageComponents/Detail";
import { useState } from "react";

function App() {
  const [categoryBar, setCategoryBar] = useState(false);
  return (
    <>
      <Header />
      {categoryBar == false ? <Category /> : null}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<Detail />} />
        <Route path="/course/registration" element={<CourseRegistration />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}
const Category = () => {
  return (
    <>
      <div className="category-main">
        <ul>
          <li>지역</li>
          <li>|</li>
          <li>서울</li>
          <li>경기</li>
          <li>부산</li>
          <li>인천</li>
          <li>대구</li>
          <li>울산</li>
          <li>광주</li>
          <li>대전</li>
          <li>경상남도</li>
          <li>경상북도</li>
          <li>전라남도</li>
          <li>전라북도</li>
          <li>충청남도</li>
          <li>충청북도</li>
          <li>강원도</li>
          <li>제주도</li>
        </ul>
        <ul>
          <li>카테고리</li>
          <li>|</li>
          <li>핸드메이드</li>
          <li>쿠킹</li>
          <li>플라워</li>
          <li>드로잉</li>
          <li>음악</li>
          <li>요가</li>
          <li>필라테스</li>
          <li>레저</li>
          <li>뷰티</li>
          <li>반려동물</li>
          <li>체험</li>
          <li>자기계발</li>
        </ul>
      </div>
    </>
  );
};
export default App;
