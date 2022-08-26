import React from "react";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import LinkMui from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",

  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'center'
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    [theme.breakpoints.up('sm')]: {
      
    },
    height: '80px'
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
  legal: {
    opacity: 0.6,
    fontSize: "0.875rem",
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
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
              <a>
                <img src={logo} alt="Logo" className={classes.brand} />
              </a>
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <Link href="/about" passHref={true}>
                <LinkMui className={classes.link}>About</LinkMui>
              </Link>

              <Link href="/contact" passHref={true}>
                <LinkMui className={classes.link}>Contact</LinkMui>
              </Link>
              <LinkMui
                href="https://github.com/nprokopova/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                GitHub
              </LinkMui>
              <LinkMui
                href="https://www.linkedin.com/in/nikol-prokopova-019b35180/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
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
