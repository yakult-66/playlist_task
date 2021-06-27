import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VideoStartButton } from "./VideoStartButton";
import { SortDelButton } from "./SortDelButton";
import { EditButton } from "./EditButton";
import { Grid, CardMedia, SvgIcon } from "@material-ui/core";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "blue",
  },
  iconrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "9px 4px",

    position: "static",
    width: "120px",
    height: "120px",
    left: "0px",
    top: "0px",

    background: "#3ABCA5",
    border: "2px solid #35D1B5",
    boxSizing: "border-box",
    borderRadius: "8px",

    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 11px",
  },
}));

export const VideoPlayListTitle = () => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <div className={classes.root}>
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
      </Grid>
    </>
  );
};
