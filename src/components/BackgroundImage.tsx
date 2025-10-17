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

interface BackgroundImageProps {
  imageUrl: string;
  opacity?: number;
}

function BackgroundImage({ imageUrl, opacity }: BackgroundImageProps) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${imageUrl})`,
        opacity: opacity,
      }}
    />
  );
}

export default BackgroundImage;
