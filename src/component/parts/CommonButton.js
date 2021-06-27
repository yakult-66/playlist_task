import React from "react";
import clsx from "clsx";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  commonButton: {
    paddingTop: "10px",
    paddingBottom: "10px",
    // TODO: commonButtonクラス配下でMuiButton-startIconクラスの物に適用
    // 今回はsvgアイコンが全て同じ位置に存在するため共通化コンポーネント内に仕込む
    "& .MuiButton-startIcon": {
      marginRight: "4px",
      marginLeft: "0px",
    },
  },
  rounded: {
    // TODO:角落とし 指定が一つだけだと四辺全てに適用される
    borderRadius: 32,
  },
}));

export const CommonButton = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      color="primary"
      variant="contained"
      // TODO:クラスを複数適用するにはclsxが必要 importも必要
      className={clsx(
        classes.commonButton,
        className,
        // TODO:props.roundedがtrueならば classes.roundedクラス(角落としのスタイル)が適用される
        props.rounded && classes.rounded
      )}
      startIcon={props.svgicon}
      // TODO:下記書き方だとprops.に指定されて居ないものもpropsとして受け取れる
      {...props}
    >
      {props.children}
    </Button>
  );
};
