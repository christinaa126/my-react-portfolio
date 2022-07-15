import React from "react";
import Project from "../Project";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import cryptoPunx from "../images/cryptoPunx1.png";
import unblockUnwind from "../images/unblockUnwind.png";
import handyTextEditor from "../images/handyTextEditor.png";
import theBowelMvmt from "../images/theBowelMvmt.png";
import "../../../src/App.css";

export default function Portfolio() {
  const projects = [
    {
      image: theBowelMvmt,
      name: "The Bowel Mvmt",
      skills: "Utilizing: React, JavaScript, Material UI, MongoDB",
      repo: "https://github.com/christinaa126/the-bowel-mvmt",
      link: "https://the-bowel-mvmt.herokuapp.com/",
      id: 1,
      description:
        "An application crowdsourcing data for nearby public restrooms populating their ammenities and reviews.",
    },
    {
      image: cryptoPunx,
      name: "CryptoPunx",
      skills: "Utilizing: JavaScript, Handlebars, CSS, CoinMarketCap API",
      repo: "https://github.com/christinaa126/CRYPTOPUNX-PRJ2",
      link: "https://guarded-scrubland-93446.herokuapp.com/",
      id: 2,
      description:
        "An application keeping new crypto users informed on coins and prices. Users can view and create posts.",
    },
    {
      image: unblockUnwind,
      name: "Unblock-Unwind",
      skills: "Utilizing: JavaScript, HTML, CSS, jQuery, Moment.js",
      repo: "https://github.com/christinaa126/unblock-unwind",
      link: "https://christinaa126.github.io/unblock-unwind/",
      id: 3,
      description:
        "An application that encourages software developers to take a break to cure their creative block and/or unwind from their current task.",
    },
    {
      image: handyTextEditor,
      name: "Handy Text Editor",
      skills: "Utilizing: Javascript, HTML, CSS, Express.js, Webpack",
      repo: "https://github.com/christinaa126/handy-text-editor",
      link: "https://protected-depths-94129.herokuapp.com/",
      id: 4,
      description:
        "A text-editor, single-page web application that helps users to create and save notes or code snippets. ",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 7, minHeight: "70vh" }}>
        <Box
          sx={{
            bgcolor: "#DBEFF6",
            padding: "3px 20px",
            borderRadius: "10px",
            opacity: 0.95,
          }}
        >
          <h1>Portfolio</h1>
          {/* for projects */}
          <Container maxWidth="md" sx={{ mb: 5 }}>
            <Grid container spacing={3}>
              {projects.map(
                ({ image, name, skills, repo, link, id, description }) => (
                  <Grid item xs={12} sm={6} key={id}>
                    <Project
                      image={image}
                      name={name}
                      skills={skills}
                      repo={repo}
                      link={link}
                      description={description}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}
