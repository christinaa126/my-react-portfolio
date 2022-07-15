import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Resume() {
  const fESkills = [
    {
      id: 1,
      skill: "HTML",
    },
    {
      id: 2,
      skill: "CSS",
    },
    {
      id: 3,
      skill: "JavaScript",
    },
    {
      id: 4,
      skill: "jQuery",
    },
    {
      id: 5,
      skill: "Responsive design",
    },
    {
      id: 6,
      skill: "React",
    },
    {
      id: 7,
      skill: "Bootstrap",
    },
  ];

  const bESkills = [
    {
      id: 1,
      skill: "APIs",
    },
    {
      id: 2,
      skill: "Node",
    },
    {
      id: 3,
      skill: "Express",
    },
    {
      id: 4,
      skill: "MySQL, Sequelize",
    },
    {
      id: 5,
      skill: "MongoDB, Mongoose",
    },
    {
      id: 6,
      skill: "REST",
    },
    {
      id: 7,
      skill: "GraphQL",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ my: 7, minHeight: "70vh" }}>
        <Box
          sx={{
            bgcolor: "#DBEFF6",
            padding: "3px 20px",
            borderRadius: "10px",
            opacity: 0.95,
          }}
        >
          <h1>Resume</h1>
          <p>
            Download my{" "}
            <a href="https://drive.google.com/file/d/19eHCRexRaFWOho8ZnBEJmv1OzkGi2dbB/view?usp=sharing">
              resume
            </a>
          </p>
          <Card>
            <CardContent>
              <h2>Front-end Proficiencies</h2>
              <ul>
                {fESkills.map(({ id, skill }) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2>Back-end Proficiencies</h2>
              <ul>
                {bESkills.map(({ id, skill }) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
