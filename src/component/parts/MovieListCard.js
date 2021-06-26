import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

/* const useStyles = makeStyles({
  card: {
    maxWidth: 956,
  },
});
 */
//export const MoveieListCard = (props) => {
//const classes = useStyles();

/*   return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          height="112"
          // 適用されない
          width="63"
          component="img"
          image="https://source.unsplash.com/random/"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.movieLength}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  */
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

export const MoveieListCard = (props) => {
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
            動画のタイトル
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
