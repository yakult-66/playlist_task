import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 956,
    // TODO:div要素を横並び
    display: "flex",
  },
  cardMedia: {
    // TODO:カードメディアの大きさは値である必要がある 文字列だと反映されない
    height: 63,
    width: 112,
  },
}));

export const VideoListCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} onClick={props.onClick}>
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.cardMedia}
          component="img"
          image="https://source.unsplash.com/random/"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.videoTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.videoLength}
          </Typography>
          <ArrowForwardIosIcon />
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
};
