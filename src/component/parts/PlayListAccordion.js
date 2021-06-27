import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
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
    position: "static",
    maxWidth: "893px",
    height: "54px",
    left: "8px",
    top: "8px",

    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 10px",
  },
}));

export const PlayListAccordion = () => {
  const classes = useStyles();
  return (
    <div className={classes.playListAccordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontSize: "14px",
              lineHeight: "14px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: 893,
            }}
          >
            テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認テキストの長さを確認
          </Typography>
        </AccordionSummary>
        {/*     <AccordionDetails>
          <Typography>開いたときに見えるテキスト です</Typography>
        </AccordionDetails> */}
      </Accordion>
    </div>
  );
};
