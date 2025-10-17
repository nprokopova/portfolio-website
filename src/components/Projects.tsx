import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import IframeResizer from "iframe-resizer-react";
import Link from "next/link";
import { projects } from "../data/projects";
import slugify from "react-slugify";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    flexDirection: "row",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  figure: {
    margin: "30px auto",
    height: "600px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
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
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0px",
    },
  },
  title: {
    fontSize: "1.8rem",
  },
}));

interface ProjectsProps {
  title: string;
  subtitle?: string;
  bgColor?: "default" | "light" | "primary" | "secondary" | "transparent";
  size?: "normal" | "medium" | "large" | "auto";
  bgImage?: string;
  bgImageOpacity?: number;
}

function Projects({
  title,
  subtitle,
  bgColor,
  size,
  bgImage,
  bgImageOpacity,
}: ProjectsProps) {
  const classes = useStyles();

  return (
    <Section
      bgColor={bgColor}
      size={size}
      bgImage={bgImage}
      bgImageOpacity={bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {projects.map((item, index) => (
            <Link
              legacyBehavior
              href={`/${slugify(item.title)}`}
              key={`${item.title}-${index}`}
            >
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
                    {item.heroImage ? (
                      <img
                        src={item.heroImage}
                        alt={item.title}
                        className={classes.image}
                      />
                    ) : (
                      <IframeResizer
                        src={item.src}
                        autoResize={true}
                        className={classes.iframe}
                        allowFullScreen
                      />
                    )}
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
