import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { emphasize, Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import BackgroundImage from "components/BackgroundImage";
import { capitalize } from "@mui/material/utils";

interface SectionProps {
  bgColor?: string;
  bgImage?: string;
  bgImageOpacity?: number;
  size?: "normal" | "medium" | "large" | "auto";
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

const useStyles = makeStyles((theme: Theme) => ({
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
  }, {} as Record<string, Record<string, string>>),

  colorInherit: {
    color: "inherit",
  },

  colorTransparent: {
    backgroundColor: "transparent",
    color: "inherit",
  },
}));

const Section = ({
  bgColor = "default",
  bgImage,
  bgImageOpacity,
  size = "normal",
  className,
  children,
}: SectionProps) => {
  const classes = useStyles();

  const verticalPadding: Record<string, number | { xs: number; sm?: number }> =
    {
      normal: { xs: 6 },
      medium: { xs: 6, sm: 10 },
      large: { xs: 6, sm: 20 },
      auto: 0,
    };

  const paddingValue = verticalPadding[size];

  return (
    <Box
      component="section"
      py={paddingValue}
      className={
        classes.root +
        ` ${(classes as any)[`color${capitalize(bgColor)}`]}` +
        (className ? ` ${className}` : "")
      }
    >
      {bgImage && (
        <BackgroundImage imageUrl={bgImage} opacity={bgImageOpacity} />
      )}

      {children}
    </Box>
  );
};

export default Section;
