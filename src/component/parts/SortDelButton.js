import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CommonButton } from "./CommonButton";

const useStyles = makeStyles((theme) => ({
  sortDelButton: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "20px",
    background: "#4F535C",
    "&:hover": {
      background: "#4F535C",
    },
  },
}));

export const SortDelButton = (props) => {
  const classes = useStyles();
  return (
    // TODO:Gridの中で幅いっぱい使うためfullwidthが必要
    <CommonButton rounded={true} className={classes.sortDelButton} fullWidth>
      並び替え/削除
    </CommonButton>
  );
};
