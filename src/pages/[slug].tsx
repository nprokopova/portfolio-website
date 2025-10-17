import { useRouter } from "next/router";
import React from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import IframeResizer from "iframe-resizer-react";
import { projects } from "../data/projects";
import slugify from "react-slugify";

const useStyles = makeStyles((theme: Theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    flexDirection: "row",
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
  description: {
    margin: "auto",
    fontSize: "1.2rem",
  },
  figure: {
    margin: "30px auto",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  video: {
    width: "100%",
  },
  mobileVideoWrapper: {
    maxWidth: "300px",
    margin: "auto",
    marginTop: "80px",
  },
  mobileVideoTitle: {
    marginBottom: "20px",
    textAlign: "center",
  },
  iframe: {
    border: "1px #ffffff none",
    display: "inherit",
    width: "100%",
    height: "600px",
  },
  image: {
    margin: "100px auto",
    maxWidth: "870px",
    display: "block",
    height: "auto",
    width: "100%",
    opacity: 0.9,
    [theme.breakpoints.down("md")]: {
      margin: "0px",
      height: "600px",
      objectFit: "cover",
    },
  },
  title: {
    fontSize: "1.8rem",
  },
}));

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const classes = useStyles();
  const project = projects.find((item) => slugify(item.title) === slug);
  const {
    title,
    description,
    src,
    codeLink,
    additionalInfo,
    heroImage,
    mobileVideo,
    desktopVideo,
  } = project ?? {};

  return (
    <Section>
      <Container>
        <MuiLink href={src} color="inherit" underline="none">
          <SectionHeader title={title} size={4} textAlign="center" />
        </MuiLink>
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          <Box
            textAlign={{
              xs: "center",
              md: "center",
            }}
          >
            <Typography
              variant="body1"
              align="left"
              className={classes.description}
            >
              {description} {additionalInfo}
            </Typography>

            <Typography variant="subtitle1">
              {codeLink && (
                <MuiLink href={codeLink} underline="hover">
                  Code link
                </MuiLink>
              )}
            </Typography>
          </Box>

          <figure className={classes.figure}>
            {desktopVideo ? (
              <video
                className={classes.video}
                autoPlay={true}
                loop
                muted
                src={desktopVideo}
              ></video>
            ) : src ? (
              <IframeResizer
                src={src}
                className={classes.iframe}
                allowFullScreen
              ></IframeResizer>
            ) : (
              <img src={heroImage} alt={title} className={classes.image} />
            )}
          </figure>

          {mobileVideo && (
            <figure className={classes.mobileVideoWrapper}>
              <Typography
                variant="subtitle1"
                className={classes.mobileVideoTitle}
              >
                The mobile version of the website.
              </Typography>
              <video
                className={classes.video}
                autoPlay={true}
                loop
                muted
                src={mobileVideo}
              ></video>
            </figure>
          )}
        </Container>
      </Container>
    </Section>
  );
};

export default DynamicPage;
