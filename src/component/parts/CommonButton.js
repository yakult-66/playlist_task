import React from "react";
import clsx from "clsx";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  commonButton: {
    paddingTop: "10px",
    paddingBottom: "10px",
    "& .MuiButton-startIcon": {
      marginRight: "4px",
      marginLeft: "0px",
    },
  },
  rounded: {
    borderRadius: 32,
  },
}));

export const CommonButton = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      color="primary"
      variant="contained"
      className={clsx(
        classes.commonButton,
        className,
        props.rounded && classes.rounded
      )}
      startIcon={props.svgicon}
      {...props}
    >
      {props.children}
    </Button>
  );
};
