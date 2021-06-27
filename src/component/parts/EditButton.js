import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CommonButton } from "./CommonButton";
import { EditIcon } from "../icon/EditIcon";

const useStyles = makeStyles((theme) => ({
  edittButton: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "20px",
  },
}));

export const EditButton = (props) => {
  const classes = useStyles();
  return (
    <div>
      <CommonButton
        rounded={true}
        className={classes.edittButton}
        svgicon={<EditIcon />}
        fullWidth
      >
        編集
      </CommonButton>
    </div>
  );
};
