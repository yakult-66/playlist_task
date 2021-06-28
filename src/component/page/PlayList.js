import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayListAccordion } from "../parts/PlayListAccordion";
import { VideoListCard } from "../parts/VideoListCard";
import { VideoPlayListTitle } from "../parts/VideoPlayListTitle";
import { CommonButton } from "../parts/CommonButton";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#35383F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    overflow: "hidden",
  },
  title: {
    // TODO:分かりやすくするために色を付ける
    backgroundColor: "gray",
  },
  titleText: {
    color: "#FFFFFF",
  },
}));

export const PlayList = () => {
  const content = [...Array(10)].map((data, index) => index);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/**タイトル部分 */}
      <div className={classes.title}>
        <div className={classes.titleText}>プレイリスト詳細</div>
      </div>
      <div style={{ maxWidth: "956px", width: "100%" }}>
        {/**プレイリストタイトル部分 */}
        {/* <div> */}
        <VideoPlayListTitle />
        {/* </div> */}
        {/**アコーディオン部分 */}
        <div>
          <PlayListAccordion />
        </div>
        {/**動画リスト */}
        <div>
          {content.map((data, index) => {
            return (
              <VideoListCard
                key={index}
                videoTitle={`${data}番目の動画です`}
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
