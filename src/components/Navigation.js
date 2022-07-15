import React from "react";
import Button from "@mui/material/Button";

export default function Navigation(props) {
  return (
    <Button
      // color="primary"
      // color="inherit"
      color={props.status}
      size="large"
      href={props.link}
      onClick={props.onClick}
      component="a"
      // noWrap
      sx={{
        // color: "white",
        fontSize: "130%",
        textTransform: "capitalize",
        px: "1rem",
      }}
    >
      {props.page}
    </Button>
  );
}
