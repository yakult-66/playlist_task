import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  playListAccordionSummaryRoot: {
    margin: 0,
    paddingRight: 16,
    paddingLeft: 0,
    background: "#35383F",
  },
  playListAccordionSummaryContent: {
    margin: "0px !important",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  accordion: { boxShadow: "none" },

  accordionText: {
    fontFamily: "Noto Sans JP",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: "14px",
    overflow: "hidden",
    maxWidth: 893,
    width: "100%",
    textAlign: "left",
    color: "#F9FAFC",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "12px",
    },
  },
  accordionHidden: {
    // TODO:複数行のテキストで幅をはみ出した際に...を表示するためには
    // display:web-kit-boxが必要だが、displayが使えなくなる欠点がある
    display: "-webkit-box",
    // TODO:要素を縦に並べる
    "-webkit-box-orient": "vertical",
    // TODO:指定した値を超える行数の場合...を表示させる
    "-webkit-line-clamp": 3,
  },
  expandMoreIcon: {
    color: "#F9FAFC",
    paddingRight: 0,
    paddingLeft: 0,
  },
}));

const word =
  "テストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです";

export const PlayListAccordion = () => {
  const classes = useStyles();
  const [accordionOpen, isAccordionOpen] = useState(false);
  return (
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          onClick={() => isAccordionOpen(!accordionOpen)}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root: classes.playListAccordionSummaryRoot,
            content: classes.playListAccordionSummaryContent,
          }}
          expandIcon={<ExpandMoreIcon className={classes.expandMoreIcon} />}
        >
          <Typography
            className={clsx(
              classes.accordionText,
              !accordionOpen && classes.accordionHidden
            )}
          >
            {/** TODO:accodionOpenがtrueならばword内の\nをsplitして配列化
             * それをmap関数で回す htmlなので改行には<br />が必要
             * accodionOpenがfalseならば改行無しのwordを表示するだけ
             */}
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
