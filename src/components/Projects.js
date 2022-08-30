import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import IframeResizer from "iframe-resizer-react";



const useStyles = makeStyles((theme) => ({
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
      marginBottom: `${theme.spacing(3)}px`,
    },
    
    
  },
  figure: {
    margin: "30px auto",
    height: "600px",


  },
  iframe: {
    border: "1px #ffffff none",
    display: 'inherit',
    height: "100%",
    width: "100%",
    overflow: "hidden",
    
    
  },
  
}));

function Projects(props) {
  const classes = useStyles();
  
  const items = [
    {
      title: "React Calculator",
      description:
        "This is a formula logic calculator app. The app was created using Next.js as a framework and the styled-components library.",
      src: "https://react-calculator-two-chi.vercel.app/",
    },
    {
      title: "Pomodoro Clock",
      description:
        "This is a Pomodoro clock where the Session and Break length can be set by the user. Once a Session ends, a new Break starts and the two alternate until the Clock is Reset or Paused. An alarm sounds at the end of each Session and Break. The app was created using Gatsby.js and the styled-components library.",
      src: "https://nprokopova.github.io/pomodoro-clock/",
    },
    {
      title: "Drum Machine",
      description:
        "A drum machine with 9 clickable drum pad elements. A button click plays an audio clip and displays its description. Drum pads can also be trigged by associated keyboard keys.",
      src: "https://codepen.io/nikol-prokopova/full/ZEaJmMG",
    },
    {
      title: "Random Quote Generator",
      description:
        "A random quote machine build with React using the 'Quotable' API (https://github.com/lukePeavey/quotable) to fetch random quotes and their authors. A random background colour is generated once the 'New Quote' button is clicked.",
      src: "https://codepen.io/nikol-prokopova/full/LYOLPPY",
    },
  ];

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
          {items.map((item, index) => (
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
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                <IframeResizer src={item.src} autoResize={true} className={classes.iframe} scrolling="no" allowfullscreen frameBorder="0" ></IframeResizer>
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default Projects;
