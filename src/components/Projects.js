import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import IframeResizer from "iframe-resizer-react";
import Link from 'next/link';
import { projects } from "../data/projects";
import slugify from 'react-slugify';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    flexDirection: "row",
    cursor: "pointer",
    transition: 'transform 0.3s ease',
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
    
    "&:hover": {
      transform: 'scale(1.01)'
    },
  },
  figure: {
    margin: "30px auto",
    height: "600px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      margin: "0px",
    },
  },
  iframe: {
    border: "1px #ffffff none",
    display: "inherit",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    margin: "100px auto",
    maxWidth: "870px",
    display: "block",
    height: "100%",
    opacity: 0.9,
  },
  title: {
    fontSize: "1.8rem",
  },
}));

function Projects(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {projects.map((item, index) => (
            <Link href={`/${slugify(item.title)}`}>
              <Grid
                className={classes.row}
                container={true}
                item={true}
                alignItems="center"
                spacing={4}
                key={index}
              >
                <Grid item={true} xs={12} md={6}>
                  <Box
                    textAlign={{
                      xs: "center",
                      md: "left",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom={true}
                      className={classes.title}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item={true} xs={12} md={6}>
                  <figure className={classes.figure}>
                    {item.src ? 
                    <IframeResizer
                      src={item.src}
                      autoResize={true}
                      className={classes.iframe}
                      scrolling="no"
                      allowFullScreen
                      frameBorder="0"
                    ></IframeResizer> : 
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className={classes.image}
                    />
                    }     
                  </figure>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default Projects;
