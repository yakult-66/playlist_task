import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  sortDelButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 64px",

    position: "static",
    width: "200px",
    height: "40px",
    left: "413px",
    top: "0px",

    background: "#4F535C",
    borderRadius: "32px",

    flex: "none",
    order: "1",
    flexGrow: "0",
    margin: "0px 13px",
  },
}));

export const SortDelButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.sortDelButton}>
      <Button onClick={props.onClick}>並び替え/削除</Button>
    </div>
  );
};
