import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VideoStartButton } from "./VideoStartButton";
import { SortDelButton } from "./SortDelButton";
import { EditButton } from "./EditButton";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { PlayIcon } from "../icon/PlayIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    color: "#F9FAFC",
  },
  header: {
    display: "grid",
    // TODO:gridTemplateRowsとgridTemplateColumns同時に割り当てられる
    gridTemplateRows: " 120px 1fr",
    gridTemplateColumns: "120px 1fr",
    //maxWidth: "956px",
    //width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  title: {
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "11px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  titletext: {
    margin: 16,
    overflow: "hidden",
    maxHeight: "80px",
    height: "100%",
    fontSize: "18px",
    LineHeight: "18px",
    fontWeight: "bold",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      marginTop: 10,
      marginBottom: 16,
      marginRight: 0,
      marginLeft: 0,
      fontSize: 14,
      lineHeight: "14px",
      fontFamily: "Noto Sans JP ",
    },
  },
  iconrap: {
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
    [theme.breakpoints.down("xs")]: {
      // TODO:アイコンを囲うCSSは真ん中に来るからmarginをautoに指定
      margin: "auto",
      marginBottom: 16,
    },
  },
  iconText: {
    paddingTop: "7px",
    paddingRight: "19px",
    paddingLeft: "18px",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "10px",
  },
  iconImg: {
    height: 63,
    width: 112,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 2,
    paddingLeft: 2,
  },
  playIcon: {
    fontSize: "12px",
    textAlign: "center",
    paddingBottom: "8.57px",
  },
  buttonGrid: {
    maxWidth: "956px",
    width: "100%",
    // TODO:CSS Gridリストと呼ばれる方法を使う
    // material-uiのGridと違って特定のpxで固定できるのがメリット
    display: "grid",
    // TODO:1fr(maxWidth:956px) - 120px でGridを2つに分ける 1frは836pxになる
    gridTemplateColumns: "1fr 120px",
    paddingTop: "24px",
    // TODO:特定のサイズ(xs)以下になったらdisplayをblockにして
    // gridを破壊する
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingTop: 0,
    },
  },
  buttonGridRight: {
    paddingTop: "6px",
    fontSize: "12px",
    lineHeight: "12px",
    fontWeight: "400",
    color: "#BBBBBB",
    textAlign: "left",
  },
  videoStartButton: {
    paddingRight: 6.5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  editButton: {
    paddingLeft: 6.5,
    paddingRight: 6.5,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 24,
      paddingRight: 6.5,
      paddingLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 16,
      paddingRight: 8,
      paddingBottom: 16,
    },
  },
  sortDelButton: {
    paddingLeft: 6.5,
    paddingRight: 13,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 24,
      paddingRight: 13,
      paddingLeft: 6.5,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingRight: 0,
      paddingLeft: 8,
    },
  },
  createDate: {
    paddingBottom: "4px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 64,
    },
  },
  videoMum: { paddingBottom: "6px" },
  playListInfo: {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: "400",
    color: "#BBBBBB",
    textAlign: "center",
  },
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
            alt="a"
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
            <Grid item xs={12} md={6} className={classes.videoStartButton}>
              <VideoStartButton />
            </Grid>
            <Grid item xs={6} md={3} className={classes.editButton}>
              <EditButton />
            </Grid>
            <Grid item xs={6} md={3} className={classes.sortDelButton}>
              <SortDelButton />
            </Grid>
          </Grid>
        </div>
        {/** TODO:xs以下になったら隠す */}
        <Hidden xsDown>
          <div className={classes.buttonGridRight}>
            <div className={classes.createDate}>作成日：2020.10.04</div>
            <div className={classes.videoMum}> 全15動画</div>
          </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.playListInfo}>
            作成日：2020.10.04 / 全15動画
          </div>
        </Hidden>
      </div>
    </div>
  );
};
