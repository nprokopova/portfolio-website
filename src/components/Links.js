import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function Links(props) {
  const items = [
    {
      name: "GitHub",
      image: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
      width: "100px",
      href: "https://github.com/nprokopova"
    },
    {
      name: "LinkedIn",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
      width: "100px",
      href: "https://www.linkedin.com/in/nikol-prokopova-019b35180/"
    },
    {
      name: "My CV",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png",
      width: "100px",
      href: "https://docs.google.com/document/d/1PBordiqD1vxbzMxmzFF_23V5cm41ben_S8AUOlBM9Xo/edit?usp=sharing"
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
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container={true} justifyContent="center">
            {items.map((item, index) => (
              <Grid item={true} xs={12} md="auto" key={index}>
                <Box py={2} px={3}>
                  <a href={item.href} target='_blank'><img src={item.image} width={item.width} alt={item.name} /></a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default Links;
