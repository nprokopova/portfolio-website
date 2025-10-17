import React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import Section from "components/Section";
import { useDarkMode } from "util/theme";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
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
    [theme.breakpoints.down("md")]: {
      height: "60px",
    },
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

interface FooterProps {
  bgColor?: string;
  size?: "auto" | "normal" | "medium" | "large";
  bgImage?: string;
  bgImageOpacity?: number;
  logo: string;
  logoInverted?: string;
  sticky?: boolean;
}

const Footer = ({
  bgColor,
  size,
  bgImage,
  bgImageOpacity,
  logo,
  logoInverted,
  sticky,
}: FooterProps) => {
  const classes = useStyles();

  const darkMode = useDarkMode();

  const themeLogo = logoInverted && darkMode.value ? logoInverted : logo;

  return (
    <Section
      bgColor={bgColor}
      size={size}
      bgImage={bgImage}
      bgImageOpacity={bgImageOpacity}
      className={sticky ? classes.sticky : undefined}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Link href="/">
              <img src={themeLogo} alt="Logo" className={classes.logo} />
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
};

export default Footer;
