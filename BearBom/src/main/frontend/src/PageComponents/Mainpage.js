import React, { useEffect, useState } from "react";

import "../css/mainpage.css";
import "../css/mainpage.scss";

import Carousel from "react-bootstrap/Carousel";

const Mainpage = (props) => {
  const prototypes = [
    {
      id: "pp-01",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-04",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
  ];

  const initialArray = [
    `지금 베어봄과 함께
    일상을 취미로 채워보세요!`,
    `모든 일상이 즐겁기만 할 수는 없죠.
    그렇지만 우리는,`,
    `일상 틈틈이, 즐거운 일들을
    채워나갈 수 있어요!`,
  ]; // 원본 배열

  const [text, setText] = useState([]);

  useEffect(() => {
    let i = 0;
    setText(initialArray.filter((item, index) => index === i));
    setInterval(() => {
      i++;
      setText(initialArray.filter((item, index) => index === i));
      if (initialArray.length - 1 === i) {
        i = -1;
      }
    }, 3000);
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="top-vod-banner-container">
        <video
          className="vod"
          id="mainBannerVideo"
          preload="metadata"
          poster="https://d1x9f5mf11b8gz.cloudfront.net/vod/20210831/main-poster.gif"
          controlsList="nodownload"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://d2g3bq8rd0lmrw.cloudfront.net/vod/20210907/pcmain.mp4"
            type="video/mp4"
          />
        </video>
        <div className="main-title-area">
          <div className="msg-wrapper">
            {/* <div className="anim-msg msg-1 visible">
              <img
                className="sub-msg"
                src="pc-main-title.png"
                width="100%"
                alt="대체이미지"
              />
            </div> */}

            <div className="anim-msg msg-3 visible">
              <p className="sub-msg visible">
                <strong>
                  {/* 지금 베어봄과 함께 */}
                  {/* <br /> */}
                  {/* 일상을 취미로 채워보세요! */}
                  {text}
                </strong>
              </p>
            </div>
          </div>
          <div className="chevronContainer">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </div>
      <main id="wrapper" className="main-contents">
        <div className="list-box favorite-class-area">
          <div className="list-header">
            <h2>베이봄이 검증한 이달의 인기클래스!</h2>
            <div className="favorite-list">
              {/* {prototypes.map((prototype) => {
                const { id, thumbnail, title, price, desc, pieUrl } = prototype;
                return (
                  <div className="prototype" key={id}>
                    <a href={pieUrl} target="_BLANK" rel="noreferrer">
                      <div style={{ padding: "25px 0 33px 0" }}>
                        <video
                          autoPlay
                          loop
                          playsInline
                          className="prototype__artwork prototype__eidit"
                          src={thumbnail}
                          style={{
                            objectFit: "contain",
                          }}
                        ></video>
                      </div>
                    </a>
                  </div>
                );
              })} */}

              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                variant="dark"
              >
                <Carousel.Item>
                  ㅁㅁㅁㅁㅁ
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  ㅁㅁㅁㅁㅁ
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  ㅁㅁㅁㅁㅁ
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="list-box new-class-area">
          <div className="list-header">
            <h2>오늘 오픈 했어요!</h2>
            <div className="new-list"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mainpage;
