import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../ModuleComponents/data";
import "../css/detail.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";

const Detail = () => {
  // 아래에 왜 초기값을 객체 형태로 주지 않으면 오류가 나는지 모르겠음
  const [course, setCourse] = useState(
    data
    // {
    //   course_idx: "0",
    //   course_nm: "happy lecture",
    // },
  );

  const { id } = useParams(data);

  // a.id: data의 id속성
  // id: useParam으로 불러온 url의 숫자값
  let item = course.find((a) => (a.course_idx = id));
  console.log(item);
  return (
    <>
      <div className="main-container">
        <div className="img">
          <div className="main-img">
            <img className="img1" src="/img/psy.jpeg" />
          </div>
          <div className="sub-total-img">
            <div className="sub-img1">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img2">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img3">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img4">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="main-info">
            Title
            <Navbar>
              <Nav className="justify-content-start">
                <AnchorLink className="nav-list" href="#teacher">
                  강사소개
                </AnchorLink>
                <AnchorLink className="nav-list" href="#class">
                  클래스소개
                </AnchorLink>
                <AnchorLink className="nav-list" href="#cur">
                  커리큘럼
                </AnchorLink>
                <AnchorLink className="nav-list" href="#time">
                  시간표
                </AnchorLink>
                <AnchorLink className="nav-list" href="#loc">
                  위치
                </AnchorLink>
                <AnchorLink className="nav-list" href="#notice">
                  유의사항
                </AnchorLink>
                <AnchorLink className="nav-list" href="#review">
                  후기
                </AnchorLink>
              </Nav>
            </Navbar>
            <section id="teacher">강사소개</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="class">클래스소개</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="cur">커리큘럼</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="time">시간표</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="loc">위치</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="notice">유의사항</section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="review">후기</section>
            <hr />
          </div>
          <div className="main-cal">
            const [startDate, setStartDate] = useState()
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label={"수강기간 (From)"}
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      {/* <div className="detail-main">
        <h4>{item.course_nm}</h4>
        <p>강의번호: {item.course_idx}</p>
        <p>강의유형: {item.course_type}</p>
        <p>강의가격: {item.course_pri}</p>
      </div> */}
    </>
  );
};

export default Detail;
