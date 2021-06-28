import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/**
 * TODO:テキストが特定の長さ(3行以上)になったら...を表示する
 * アコーディオンを開いたら改行して...より先を表示する
 * 現状はアコーディオンがテキストの長さに合わせて大きくなる
 *
 */

const useStyles = makeStyles((theme) => ({
  playListAccordion: {
    // TODO:仮で高さと色を指定
    height: "150px",
    background: "blue",
    "& .MuiButtonBase-root MuiAccordionSummary-root": {
      margin: "0px",
      padding: "0px",
    },
    "& .MuiAccordionSummary-content": {
      margin: "0px",
      paddingTop: "8px",
      paddingBottom: "8px",
      paddingLeft: "8px",
    },
  },
  accordionText: {
    fontFamily: "Noto Sans JP",
    fontWeight: "400",
    style: "normal",
    fontSize: "14px",
    lineHeight: "14px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: "54px",
    maxWidth: "893px",
    width: "100%",
    textAlign: "left",
  },
  accordionOpen: {
    height: "100px",
  },
}));
export const PlayListAccordion = () => {
  const classes = useStyles();

  const [accordionOpen, isAccordionOpen] = useState("flase");
  console.log(accordionOpen);

  return (
    <div className={classes.playListAccordion}>
      <Accordion>
        <AccordionSummary
          onClick={() => isAccordionOpen(!accordionOpen)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={clsx(
              classes.accordionText,
              accordionOpen && classes.accordionOpen
            )}
          >
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
            テストですテストですテストですテストですテストですテストですテストですテストですテストです
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
