import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { EditIcon } from "../icon/EditIcon";

const useStyles = makeStyles((theme) => ({
  edittButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 64px",
    position: "static",
    background: "#4F535C",
    borderRadius: "32px",
  },
}));

export const EditButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.edittButton}>
      <Button onClick={props.onClick}>
        <EditIcon />
        編集
      </Button>
    </div>
  );
};
