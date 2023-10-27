import { useRouter } from 'next/router';
import React from "react";
import Container from "@material-ui/core/Container";
import MuiLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import IframeResizer from "iframe-resizer-react";
import { projects } from "../data/projects";
import slugify from 'react-slugify';

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
        height: "auto",
        width: "100%",
        opacity: 0.9,
    },
    title: {
        fontSize: "1.8rem",
    },
}));

const DynamicPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const classes = useStyles();
    let title, description, src, codeLink, additionalInfo;

    projects.map((item) => {
        if (slugify(item.title) === slug) {
            title = item.title;
            description = item.description;
            src = item.src;
            codeLink = item.codeLink;
            additionalInfo = item.additionalInfo;
        }
    });

    return (
        <Section>
            <Container>
                <MuiLink href={src} color="inherit" underline="none">
                    <SectionHeader
                        title={title}
                        size={4}
                        textAlign="center"
                    />
                </MuiLink>
                <Container
                    maxWidth="md"
                    disableGutters={true}
                    className={classes.itemsContainer}
                >
                    <Box
                        textAlign={{
                            xs: "center",
                            md: "left",
                        }}
                    >
                        <Typography variant="subtitle1">
                            {description}
                        </Typography>
                        { additionalInfo && <Typography variant="subtitle1">
                            {additionalInfo}
                        </Typography> }
                        <Typography variant="subtitle1">
                            { codeLink && <MuiLink href={codeLink} underline="hover">Code link</MuiLink> }
                        </Typography>
                    </Box>
                    <figure className={classes.figure}>
                        <IframeResizer
                            src={src}
                            autoResize={true}
                            className={classes.iframe}
                            scrolling="no"
                            allowFullScreen
                            frameBorder="0"
                        ></IframeResizer>
                    </figure>
                </Container>
            </Container>
        </Section>
    );
};

export default DynamicPage;
