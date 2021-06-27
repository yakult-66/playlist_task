import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

/**
 * TODO:一つの仮の案として残す
 * 左側画像で真ん中テキストでクリック時にalertのを実行する
 * ただ要素がボタンじゃないから要件を満たすか不明のため要確認
 *
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const VideoListCardTest = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        onClick={() => alert("画像クリック")}
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="h5"
            onClick={() => alert("タイトルがクリックされました")}
          >
            動画のタイトルは{props.videotitle}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            動画の長さは{props.videotime}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
