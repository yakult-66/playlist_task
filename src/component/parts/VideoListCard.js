import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  Hidden,
  Divider,
  Typography,
  CardMedia,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    // TODO:div要素を横並び
    display: "flex",
    height: "100px",
    background: "transparent",
    boxShadow: "none",
    "& .MuiCardContent-root": {
      paddingTop: "18px",
      //paddingBottom: "35px",
      paddingLeft: "16px",
      //paddingRight: "16px",
      width: "777px",
      //height: "47px",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 0,
      },
    },
  },
  cardMedia: {
    height: 63,
    width: 112,
  },
  videoInfo: {
    paddingRight: 0,
    background: "#35383F",
    textAlign: "left",
  },
  videoTitle: {
    fontFamily: "Noto Sans JP",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "23px",
    fontStyle: "normal",
    color: "#F9FAFC",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "12px",
      color: "#BBBBBB",
      position: "absolute",
      paddingTop: 24.5,
    },
  },
  videoLength: {
    fontFamily: "Noto Sans JP",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    fontStyle: "normal",
    color: "#BBBBBB",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 60,
    },
  },
  arrowForward: {
    paddingTop: 40,
    paddingBottom: 40,
    //paddingRight: 15,
    paddingLeft: 16,
    color: "#F9FAFC",
  },
}));

export const VideoListCard = ({ videoTitle, videoLength }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.card}>
          <Hidden xsDown>
            <div style={{ paddingTop: "18.5px", paddingBottom: "18.5px" }}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image="https://source.unsplash.com/random/"
              />
            </div>
          </Hidden>
          <CardContent
            className={classes.videoInfo}
            style={{ position: "relative" }}
          >
            <Hidden smUp>
              <img
                src="https://source.unsplash.com/random/"
                style={{
                  width: 48,
                  height: 27,
                  position: "absolute",
                  paddingTop: 4.5,
                }}
                alt="img"
              />
            </Hidden>
            <Typography className={classes.videoTitle}>{videoTitle}</Typography>
            <Typography className={classes.videoLength}>
              {videoLength}
            </Typography>
          </CardContent>
          <ArrowForwardIosIcon className={classes.arrowForward} />
        </Card>
      </div>
      <Divider style={{ backgroundColor: "#4F535C" }} />
    </>
  );
};
