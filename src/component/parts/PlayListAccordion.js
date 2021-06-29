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
  playListAccordionSummaryRoot: {
    margin: 0,
    paddingRight: 16,
    paddingLeft: 0,
  },
  playListAccordionSummaryContent: {
    margin: "0px !important",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  accordionText: {
    fontFamily: "Noto Sans JP",
    fontWeight: 400,
    style: "normal",
    fontSize: 14,
    lineHeight: "14px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: 893,
    width: "100%",
    textAlign: "left",
  },
  accordionHidden: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3,
  },
  accordionOpen: {
    height: 100,
  },
}));

const word =
  "テストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです";

export const PlayListAccordion = () => {
  const classes = useStyles();

  const [accordionOpen, isAccordionOpen] = useState(false);

  return (
    <div className={classes.playListAccordion}>
      <Accordion>
        <AccordionSummary
          onClick={() => isAccordionOpen(!accordionOpen)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root: classes.playListAccordionSummaryRoot,
            content: classes.playListAccordionSummaryContent,
          }}
        >
          <Typography
            className={clsx(
              classes.accordionText,
              accordionOpen && classes.accordionOpen,
              !accordionOpen && classes.accordionHidden
            )}
          >
            {accordionOpen
              ? word.split("\n").map((data, index) => (
                  <>
                    {data}
                    <br />
                  </>
                ))
              : word}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
