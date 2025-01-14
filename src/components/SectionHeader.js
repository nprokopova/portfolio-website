import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
  subtitle: {
    maxWidth: 700,
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
    display: "inline-block",
  },
  about: {
    lineHeight: 2.4,
    marginTop: "10px",
    maxWidth: 900,
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
    },
    display: "inline-block",
  },
  title: {
    fontSize: "2.4rem",
  },
}));

function SectionHeader(props) {
  const classes = useStyles();

  const { subtitle, title, size, className, ...otherProps } = props;

  if (!title && !subtitle) {
    return null;
  }

  return (
    <Box
      component="header"
      className={classes.root + (props.className ? ` ${props.className}` : "")}
      {...otherProps}
    >
      {title && (
        <Typography
          variant={`h${size}`}
          gutterBottom={props.subtitle ? true : false}
          className={classes.title}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography
          variant="subtitle1"
          className={
            props.className ? classes[props.className] : classes.subtitle
          }
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SectionHeader;
