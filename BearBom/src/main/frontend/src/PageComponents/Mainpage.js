import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/mainpage.css";
import { Button, Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

const Mainpage = () => {
  return (
    <>
      <Checkbox defaultChecked color="default" />
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Checkbox
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
      <Checkbox
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </>
  );
};

export default Mainpage;
