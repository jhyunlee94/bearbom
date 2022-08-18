import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../ModuleComponents/data";
import "../css/detail.css";

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
      <div className="detail-main">
        <h4>{item.course_nm}</h4>
        <p>강의번호: {item.course_idx}</p>
        <p>강의유형: {item.course_type}</p>
        <p>강의가격: {item.course_pri}</p>
      </div>
    </>
  );
};

export default Detail;
