import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// TODO:width,height,left,topは位置で、画面サイズによって変わるから仮で定義
const useStyles = makeStyles((theme) => ({
  videoStartButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 64px",
    position: "static",
    //width: "400px",
    //height: "40px",
    left: "0px",
    top: "0px",
    //background: "#08AEF4",
    flex: "none",
    flexGrow: "0",
    margin: "0px 13px",
    borderRadius: "32px",
  },
}));

export const CommonButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.videoStartButton}>
      <Button onClick={props.onClick}>{props.children}</Button>
    </div>
  );
};
