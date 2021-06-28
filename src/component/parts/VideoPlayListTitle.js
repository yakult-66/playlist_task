import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VideoStartButton } from "./VideoStartButton";
import { SortDelButton } from "./SortDelButton";
import { EditButton } from "./EditButton";
import { Grid, Typography } from "@material-ui/core";
import { PlayIcon } from "../icon/PlayIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "956px",
    width: "100%",
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    color: "#F9FAFC",
  },
  header: {
    display: "grid",
    // TODO:gridTemplateRowsとgridTemplateColumns同時に割り当てられる
    gridTemplateRows: " 120px 1fr",
    gridTemplateColumns: "120px 1fr",

    maxWidth: "956px",
    width: "100%",
  },
  title: {
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "11px",
  },
  titletext: {
    padding: "16px",
    overflow: "hidden",
    height: "80px",
    fontSize: "18px",
    LineHeight: "18px",
    fontWeight: "bold",
    textAlign: "left",
  },
  left: {},
  iconrap: {
    position: "static",
    width: "120px",
    height: "120px",
    left: "0px",
    top: "0px",
    background: "#3ABCA5",
    // TODO:枠が2px分できるから別のClassがpaddingする場合に注意が必要
    border: "2px solid #35D1B5",
    boxSizing: "border-box",
    borderRadius: "8px",
    // TODO:SVGにもフォントカラーが適用されるからここで色を定義
    color: "#F9FAFC",
  },
  iconText: {
    paddingTop: "7px",
    paddingRight: "18px",
    paddingLeft: "19px",
    // TODO:ここからテキスト関連
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "10px",
  },
  iconImg: {
    height: 63,
    width: 112,
    paddingTop: 8,
    paddingBottom: 8.6,
    paddingRight: 2,
    paddingLeft: 2,
  },
  playIcon: {
    fontSize: "12px",
    textAlign: "center",
    paddingBottom: "8.57px",
  },
  buttonGrid: {
    // TODO:CSS Gridリストと呼ばれる方法を使う
    // material-uiのGridと違って特定のpxで固定できるのがメリット
    display: "grid",
    // TODO:1fr(maxWidth:956px) - 120px でGridを2つに分ける 1frは836pxになる
    gridTemplateColumns: "1fr 120px",
    maxWidth: "956px",
    width: "100%",
    height: "40px",
    paddingTop: "24px",
  },
  buttonGridRight: {
    paddingTop: "6px",
    fontSize: "12px",
    lineHeight: "12px",
    fontWeight: "400",
    color: "#BBBBBB",
    textAlign: "left",
  },
  createDate: { paddingBottom: "4px" },
  videoMum: { paddingBottom: "6px" },
}));

export const VideoPlayListTitle = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.iconrap}>
          <div className={classes.iconText}>VIDEO PLAYLIST</div>
          <img
            src="https://source.unsplash.com/random/"
            className={classes.iconImg}
          />
          <PlayIcon className={classes.playIcon} />
        </div>
        <div className={classes.title}>
          <Typography className={classes.titletext}>
            {/** */}
            オーディオプレイリスト名オーディオプレイリスト名
            オーディオプレイリスト名オーディオプレイリスト名
            オーディオプレイリスト名オーディオプレイリスト名
          </Typography>
        </div>
      </div>
      {/** TODO:ここからボタン群 */}
      <div className={classes.buttonGrid}>
        <div className={classes.left}>
          <Grid container justify="flex-start">
            <Grid item xs={12} md={6} style={{ paddingRight: 6.5 }}>
              <VideoStartButton />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ paddingLeft: 6.5, paddingRight: 6.5 }}
            >
              <EditButton />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ paddingLeft: 6.5, paddingRight: 13 }}
            >
              <SortDelButton />
            </Grid>
          </Grid>
        </div>

        <div className={classes.buttonGridRight}>
          <div className={classes.createDate}>作成日：2020.10.04</div>
          <div className={classes.videoMum}> 全15動画</div>
        </div>
      </div>
    </div>
  );
};
