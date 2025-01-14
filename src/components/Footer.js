import React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import Section from "components/Section";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
      marginBottom: 0,
    },
  },
  logo: {
    display: "block",
    height: "80px",
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    color: "inherit",
    lineHeight: 1,
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },

  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();

  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Link href="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <LinkMui href="/about" className={classes.link} underline="hover">
                About
              </LinkMui>

              <LinkMui
                href="/contact"
                className={classes.link}
                underline="hover"
              >
                Contact
              </LinkMui>

              <LinkMui
                href="https://github.com/nprokopova/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
                underline="hover"
              >
                GitHub
              </LinkMui>
              <LinkMui
                href="https://www.linkedin.com/in/nikol-prokopova-019b35180/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
                underline="hover"
              >
                LinkedIn
              </LinkMui>
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
