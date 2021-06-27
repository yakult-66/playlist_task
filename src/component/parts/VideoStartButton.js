import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CommonButton } from "./CommonButton";
import { PlayIcon } from "../icon/PlayIcon";

const useStyles = makeStyles((theme) => ({
  videoStartButton: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "20px",
  },
}));

export const VideoStartButton = ({ ...props }) => {
  const classes = useStyles();
  return (
    <CommonButton
      rounded={true}
      className={clsx(classes.videoStartButton)}
      svgicon={<PlayIcon />}
      fullWidth
    >
      再生
    </CommonButton>
  );
};
