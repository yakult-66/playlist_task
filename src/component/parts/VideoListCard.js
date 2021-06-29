import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Divider from "@material-ui/core/Divider";

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
      //background: "green",
      width: "777px",
      height: "47px",
    },
  },
  cardMedia: {
    // TODO:カードメディアの大きさは値である必要がある 文字列だと反映されない
    height: 63,
    width: 112,
  },
  videoInfo: {
    //paddingTop: "18px",
    //paddingBottom: "35px",
    //paddingLeft: "16px",
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
    height: "47px",
  },
  videoLength: {
    fontFamily: "Noto Sans JP",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "14px",
    fontStyle: "normal",
    color: "#BBBBBB",
  },
  arrowForward: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 15,
    paddingLeft: 16,
    color: "#F9FAFC",
  },
}));

export const VideoListCard = ({ videoTitle, videoLength }) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ paddingBottom: "5px" }}>
        <Card className={classes.card} /* onClick={props.onClick} */>
          <div style={{ paddingTop: "18.5px", paddingBottom: "18.5px" }}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              image="https://source.unsplash.com/random/"
            />
          </div>
          <CardContent className={classes.videoInfo}>
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
