import React from "react";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../../src/App.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#1E555C", opacity: 0.75, padding: "10px 1px" }}
        sx={{ width: "100vw" }}
      >
        <Container>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Grid item md={4}>
                <Typography
                  className="header"
                  variant="h4"
                  component="h3"
                  sx={{ flexGrow: 1, color: "white", fontSize: "3" }}
                >
                  <h4 className="header"> Christina Christiansen</h4>
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Navigation
                  link="#aboutMe"
                  page="AboutMe"
                  onClick={() => handlePageChange("AboutMe")}
                  status={currentPage === "AboutMe" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#portfolio"
                  page="Portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  status={currentPage === "Portfolio" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#contact"
                  page="Contact"
                  onClick={() => handlePageChange("Contact")}
                  status={currentPage === "Contact" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#resume"
                  page="Resume"
                  onClick={() => handlePageChange("Resume")}
                  status={currentPage === "Resume" ? "primary" : "inherit"}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
