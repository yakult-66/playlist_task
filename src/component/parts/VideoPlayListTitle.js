import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VideoStartButton } from "./VideoStartButton";
import { SortDelButton } from "./SortDelButton";
import { EditButton } from "./EditButton";
import { Grid, CardMedia, SvgIcon } from "@material-ui/core";
import { PlayIcon } from "../icon/PlayIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    // TODO:CSS Gridリストと呼ばれる方法を使う
    // material-uiのGridと違って特定のpxで固定できるのがメリット
    display: "grid",
    // TODO:1fr(maxWidth:956px) - 120px でGridを2つに分ける 1frは836pxになる
    gridTemplateColumns: "1fr 120px",
    maxWidth: "956px",
    width: "100%",
  },
  header: {
    display: "grid",
    // TODO:gridTemplateRowsとgridTemplateColumns同時に割り当てられる
    gridTemplateRows: " 120px 1fr",
    gridTemplateColumns: "120px 1fr",
    maxWidth: "956px",
    width: "100%",
  },
  left: {},
  right: {},
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
}));

export const VideoPlayListTitle = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.iconrap}>
          <div className={classes.iconText}>VIDEO PLAYLIST</div>
          <img
            src="https://source.unsplash.com/random/"
            className={classes.iconImg}
          />
          <PlayIcon className={classes.playIcon} />
        </div>
        <div className={classes.right}>aaa</div>
      </div>
      {/** TODO:ここからボタン群 */}
      <div className={classes.root}>
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

        <div className={classes.right}>aaaaaaaaaaaaaaaa</div>
        {/* <div className={classes.root}>
          ビデオリストTitle部部分です
          <div className={classes.iconrap}>
            test
            <CardMedia
              component="img"
              src="https://source.unsplash.com/random"
              style={{ height: 63, width: 112 }}
            />
            <SvgIcon>
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.34401 5.16L1.67601 0.731999C1.02801 0.347999 0.200012 0.827999 0.200012 1.584V10.44C0.200012 11.196 1.02801 11.676 1.67601 11.292L9.34401 6.864C10.004 6.492 10.004 5.544 9.34401 5.16Z"
                  fill="#F9FAFC"
                />
              </svg>
            </SvgIcon>
            <div style={{ display: "flex" }}>testestetest</div>
          </div>
          <div>
            <VideoStartButton />
            <EditButton />
            <SortDelButton />
            <div>test</div>
            <div>test</div>
          </div>
        </div>
 */}
      </div>
    </>
  );
};
