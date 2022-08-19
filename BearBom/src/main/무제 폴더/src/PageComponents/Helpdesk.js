import React, { useEffect, useState } from "react";
import "../css/helpdesk.css";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

const Helpdesk = () => {
  const [tabContent, setTabContent] = useState(0);

  return (
    <>
      <div className="helpdesk-main">
        <br />
        <br />
        <h4>고객센터</h4>
        <Nav justify variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                setTabContent(0);
              }}
            >
              공지사항
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                setTabContent(1);
              }}
            >
              FAQ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                setTabContent(2);
              }}
            >
              1:1문의
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tabContent={tabContent} />
      </div>
    </>
  );
};

const TabContent = ({ tabContent }) => {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tabContent]);

  return (
    <div className="content-main">
      {
        [
          // 공지사항
          <div className="notice">
            <table>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </table>
          </div>,
          // FAQ
          <div className="FAQ">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>,
          // 1:1문의
          <div className="inquiry">문의 관련 내용 남길 수 있는 테이블</div>,
        ][tabContent]
      }
    </div>
  );
};

export default Helpdesk;
