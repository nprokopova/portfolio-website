import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { makeStyles } from "@mui/styles";
import Section from "components/Section";
import { useDarkMode } from "util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 80,
    marginRight: theme.spacing(2),
    marginTop: 5,
    [theme.breakpoints.down("md")]: {
      height: "60px",
    },
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
  section: {
    padding: "20px",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section bgColor={props.color} size="auto" className={classes.section}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>

            <div className={classes.spacer} />
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
              size="large"
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Section>
  );
}

export default Navbar;
