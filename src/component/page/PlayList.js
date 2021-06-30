import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayListAccordion } from "../parts/PlayListAccordion";
import { VideoListCard } from "../parts/VideoListCard";
import { VideoPlayListTitle } from "../parts/VideoPlayListTitle";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "#35383F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    overflow: "hidden",
    fontFamily: "Noto Sans JP",
  },
  title: { width: "100%", maxWidth: 1479 },
  titleText: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: "24px",
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      lineHeight: "18px",
      paddingTop: 12,
      paddingBottom: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      lineHeight: "16px",
    },
  },
  content: { maxWidth: "956px", width: "100%" },
  titleDivider: {
    background: "#E5E5E5",
    marginBottom: 24,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 16,
    },
  },
}));

export const PlayList = () => {
  const content = [...Array(10)].map((data, index) => index);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/** タイトル部分 */}
      <div className={classes.title}>
        <div className={classes.titleText}>プレイリスト詳細</div>
        <Divider className={classes.titleDivider} />
      </div>
      {/** コンテンツ部分 */}
      <div className={classes.content} style={{}}>
        {/** プレイリストタイトル部分 */}
        <VideoPlayListTitle />
        {/** アコーディオン部分 */}
        <div>
          <PlayListAccordion />
        </div>
        {/** 動画リスト */}
        <div>
          {content.map((data, index) => {
            return (
              <VideoListCard
                key={index}
                videoTitle={`${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です${data}番目の動画です`}
                videoLength="10:10:10"
                onClick={() => alert(`${data}番目のカードがクリックされました`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
