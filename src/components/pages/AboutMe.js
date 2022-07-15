import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
// import "@fontsource/roboto/500.css";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.jpeg";
// import { Typography } from "@mui/material";
import "../../../src/App.css";

export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Container maxWidth="lg" sx={{ my: 7, minHeight: "70vh" }}>
          <Box
            sx={{
              bgcolor: "#DBEFF6",
              padding: "3px 20px",
              borderRadius: "10px",
              opacity: 0.95,
            }}
          >
            <div
              className="aboutMe"
              style={{
                textAlignVertical: "center",
                textAlign: "center",
              }}
            >
              <h1>About Me</h1>
              <Avatar
                className="avatar"
                sx={{
                  width: 150,
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                }}
                alt="Avatar"
                src={avatar}
              />

              <p>
                Hi, my name is Christina Christiansen and I am a San Diego based
                full stack web developer. I recently transitioned into this new
                role while looking to further utilize my problem solving skills
                and creativity. I have 6 years of experience managing a
                large-scale production kitchen and am ready to apply these
                skills to my new career. As a deeply motivated, fast learner- I
                am looking forward to joining a team of individuals to co-create
                with.
              </p>
            </div>
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
}
