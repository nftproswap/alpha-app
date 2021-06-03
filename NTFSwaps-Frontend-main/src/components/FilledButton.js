import "../App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "#2498C9",
    border: 0,
    borderRadius: "34px",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "18px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#03275B",
    },
  },
});
export default function FilledButton(props) {
  const classes = useStyles();
  return (
    <Button {...props} className={classes.root} variant="contained">
      {props.children}
    </Button>
  );
}
