import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";

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
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3,
  },
  expandMoreIcon: {
    color: "#F9FAFC",
    paddingRight: 0,
    paddingLeft: 0,
  },
  divider: {
    backgroundColor: "#4F535C",
    marginTop: 12,
    marginBottom: 12,
    [theme.breakpoints.down("md")]: { marginBottom: 36 },
    [theme.breakpoints.down("xs")]: { marginBottom: 12 },
  },
}));

const word =
  "テストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです\nテストですテストですテストですテストですテストですテストですテストですテストですテストです";

export const PlayListAccordion = () => {
  const classes = useStyles();
  const [accordionOpen, isAccordionOpen] = useState(false);
  return (
    <>
      <Accordion style={{ boxShadow: "none" }}>
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
      <Divider className={classes.divider} />
    </>
  );
};
