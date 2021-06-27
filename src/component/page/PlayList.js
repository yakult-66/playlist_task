import React from "react";
import { VideoStartButton } from "../parts/VideoStartButton";
import { EditButton } from "../parts/EditButton";
import { SortDelButton } from "../parts/SortDelButton";
import { makeStyles } from "@material-ui/core/styles";
import { PlayListAccordion } from "../parts/PlayListAccordion";
import { VideoListCard } from "../parts/VideoListCard";
import { VideoListCardTest } from "../parts/VideoListCardTest";
import { VideoPlayListTitle } from "../parts/VideoPlayListTitle";

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
    position: "static",
    // TODO:maxをつけると最大値のデカさを指定 ただのwidthが値だとその値固定
    width: "100%",
    maxWidth: "1479px",
    height: "44px",
    left: "90.5px",
    top: "0px",
    // TODO:boxShadowで下線をつける　titletextでつけるべきか
    boxShadow: "inset 0px -1px 0px #F9FAFC",
    flex: "none",
    margin: "24px 0px",
    // TODO:分かりやすくするために色を付ける
    backgroundColor: "gray",
  },
  titleText: {
    position: "static",
    // width: "192px",
    // height: "24px",
    // left: "0px",
    // top: "10px",
    fontWeight: "bold",
    fontSize: "24px",
    // lineHeight: "24px",
    display: "flex",
    alignItems: "center",
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
      {/**プレイリストタイトル部分 */}
      <div>
        <VideoPlayListTitle />
      </div>
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
              videoTitle={`${data}番目の動画のタイトルです${data}番目の動画のタイトルです${data}番目の動画のタイトルです${data}番目の動画のタイトルです`}
              videoLength="10:10:10"
              onClick={() => alert(`${data}番目のカードがクリックされました`)}
            />
          );
        })}
      </div>
    </div>
  );
};
