import React from "react";
import Box from "@mui/material/Box";
import { emphasize } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import BackgroundImage from "components/BackgroundImage";
import { capitalize } from "@mui/material/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    "& > .MuiContainer-root": {
      position: "relative",
    },
  },

  ...[
    ["default", theme.palette.background.default],
    ["light", emphasize(theme.palette.background.default, 0.03)],
    ["primary", theme.palette.primary.main],
    ["secondary", theme.palette.secondary.main],
  ].reduce((acc, [name, value]) => {
    acc[`color${capitalize(name)}`] = {
      backgroundColor: value,
      color: theme.palette.getContrastText(value),
    };
    return acc;
  }, {}),

  colorInherit: {
    color: "inherit",
  },

  colorTransparent: {
    backgroundColor: "transparent",
    color: "inherit",
  },
}));

function Section(props) {
  const classes = useStyles();

  const {
    bgColor = "default",
    bgImage,
    bgImageOpacity,
    size = "normal",
    className,
    children,
    ...otherProps
  } = props;

  const verticalPadding = {
    normal: { xs: 6 },
    medium: { xs: 6, sm: 10 },
    large: { xs: 6, sm: 20 },
    auto: 0,
  }[size];

  return (
    <Box
      component="section"
      py={verticalPadding}
      className={
        classes.root +
        ` ${classes[`color${capitalize(bgColor)}`]}` +
        (className ? ` ${className}` : "")
      }
      {...otherProps}
    >
      {bgImage && <BackgroundImage image={bgImage} opacity={bgImageOpacity} />}

      {props.children}
    </Box>
  );
}

export default Section;
