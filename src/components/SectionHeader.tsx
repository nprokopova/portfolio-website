import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
  subtitle: {
    maxWidth: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3rem",
    },
    display: "inline-block",
  },
  about: {
    lineHeight: 2.4,
    marginTop: "10px",
    maxWidth: 900,
    fontSize: "1.1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    display: "inline-block",
  },
  title: {
    fontSize: "2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
    },
  },
}));

interface SectionHeaderProps {
  title?: string;
  subtitle?: ReactNode;
  size?: number;
  className?: string;
  textAlign?: "left" | "center" | "right";
}

const SectionHeader = ({
  title,
  subtitle,
  size = 1,
  className,
  textAlign,
}: SectionHeaderProps) => {
  const classes = useStyles();

  if (!title && !subtitle) {
    return null;
  }

  // Ensure size is valid Typography variant
  const typographyVariant = `h${Math.min(Math.max(size, 1), 6)}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  return (
    <Box
      component="header"
      className={classes.root + (className ? ` ${className}` : "")}
      textAlign={textAlign}
    >
      {title && (
        <Typography
          variant={typographyVariant}
          gutterBottom={subtitle ? true : false}
          className={classes.title}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography
          variant="subtitle1"
          className={className ? (classes as any)[className] : classes.subtitle}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
