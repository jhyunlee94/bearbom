import React, { useEffect, useState } from "react";
import "../css/mypage.css";

const Mypage = () => {
  const [state, setState] = useState([`모든 일상이 즐겁기만\n그렇지만 우리는`]);

  useEffect(() => {
    let i = 0;
    state.push("즐겁게", "행복하게", "재미있게");
    console.log(state);
    setInterval(() => {
      console.log(state);
      setState(state[i]);
      i++;
    }, 2000);
  }, []);
  return (
    <>
      <div className="outside">
        <div className="inside1">{state}</div>
        <div className="inside2">2</div>
        <div className="inside2">3</div>
        <div className="inside2">4</div>
        <div className="inside2">5</div>
      </div>
    </>
  );
};

export default Mypage;
