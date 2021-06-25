import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 956,
  },
});

export const MoveieListCard = (props) => {
  const classes = useStyles();

  return (
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
    </Card>
  );
};
