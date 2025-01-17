import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    content: "",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    zIndex: 0,
  },
}));

function BackgroundImage(props) {
  const classes = useStyles();

  const { image, opacity, ...otherProps } = props;

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${image})`,
        opacity: opacity,
      }}
      {...otherProps}
    />
  );
}

export default BackgroundImage;
