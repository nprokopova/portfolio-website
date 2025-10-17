import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "EPI2ME Desktop",
    description:
      "An Electron application that enabled users to run bioinformatics workflows. The app was built using React, TypeScript, Node.js and Electron.",
    additionalInfo:
      "Tailwind was used for the styling of the application. The backend APIs were written with TRPC router. The application allows you to run bioinformatics workflows on your device or in the cloud. The application can be run on Mac, Windows and Linux. Behind the scenes, the app runs Nextflow and Docker to run the workflows.",
    src: "https://epi2me.nanoporetech.com",
  },
  {
    title: "Future Lions",
    description:
      "An interactive, animated React app to demonstrate the creative concept of that year's Future Lions student competition. Parallax scrolling effects and lottie animations were implemented.",
    additionalInfo:
      "The web app was built using React, TypeScript and SCSS. The animations were created using the Lottie library. It utilises responsive design and the parralax effect differs in the mobile version.",
    src: "https://futurelions.com",
    desktopVideo: "/videos/future_lions_desktop_1.mov",
    mobileVideo: "/videos/future_lions_mobile_1.mov",
    codeLink: "",
  },
  {
    title: "AKQA.com",
    description:
      "I was the lead developer for AKQA.com, the company's main website. Its tech stack includes HTML, SCSS, Vanilla JavaScript, jQuery, Nunjucks and Contentful CMS.",
    src: "https://akqa.com",
    additionalInfo:
      "I was responsible for mainintaining the codebase, adding new features and fixing bugs. I was also responsible for deployment and peer review, as well as writing Jira tickets.",
    codeLink: "",
  },
  // {
  //   title: "Dose Response App",
  //   description:
  //     "This app calculated EC50, which represents the concentration at which a drug achieves 50% of its maximum effect.",
  //   heroImage: "/images/dose-response-app.png",
  //   additionalInfo: `The simplest method to estimate EC50 is by fitting a straight line to the data using linear regression.However, dose-response curves are often nonlinear. A better approach is to apply a logarithmic transformation to the concentration values, which usually results in a curve that can be more accurately modeled using linear regression. This app allows scientists to analyse dose-response data.
  //   You can upload a CSV file containing dose-response data
  //   A scatter plot showing concentration on the x-axis and tumour cell killing on the y-axis will be generated
  //   A liner regression line will be shown on the plot
  //   The EC50 value will be displayed
  //   Users can manually exclude/include points on the plot by clicking. When a point is removed or re-added the regression line and -EC50 value will be automatically be re-generated
  //   The current state is saved so that it can be reloaded when a new browser session is opened.`,
  //   codeLink: "https://github.com/nprokopova/dose-response-app",
  // },
  {
    title: "Github Repos",
    description:
      "This is a Next.js app that fetches and displays my GitHub repositories using the GitHub API. ",
    heroImage: "/images/github-repos-app.png",
    additionalInfo:
      "This project used Next.js api routes and was styled using Tailwind CSS. The app fetches my public GitHub repositories and displays them in a list format, showing the repository name, description, and a link to the repository on GitHub.",
    codeLink: "https://github.com/nprokopova/github-repos",
  },
  {
    title: "React Calculator",
    description:
      "This is a formula logic calculator app. The app was created using Next.js as a framework and the styled-components library.",
    src: "https://react-calculator-two-chi.vercel.app/",
    additionalInfo:
      "This project was done as part of the FreeCodeCamp course. It is hosted on Vercel. It is one of my first projects that I have done while learning. I focused on the design and the logic of the calculator.",
    codeLink: "",
  },
  {
    title: "Pomodoro Clock",
    description:
      "This is a Pomodoro clock where the Session and Break length can be set by the user. The app was created using Gatsby.js and the styled-components library.",
    src: "https://nprokopova.github.io/pomodoro-clock/",
    additionalInfo:
      "The app was created using Gatsby.js and the styled-components library. It was done as part of the FreeCodeCamp course. It is hosted on GitHub pages.Once a Session ends, a new Break starts and the two alternate until the Clock is Reset or Paused. An alarm sounds at the end of each Session and Break. ",
    codeLink: "",
  },
];
