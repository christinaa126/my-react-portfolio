import React from "react";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ my: 7, minHeight: "70vh" }}>
        <Box
          sx={{
            bgcolor: "#DBEFF6",
            padding: "3px 20px",
            borderRadius: "10px",
            opacity: 0.95,
          }}
        >
          <h1>Contact</h1>
          {/* <div
            style={{
              maxHeight: "79vh",
              overflow: "auto",
            }}
          > */}
          <ContactForm />
          <div>
            <Alert
              icon={<ContactMailIcon />}
              severity="success"
              // sx={{ fontWeight: "bold", fontSize: "17px" }}
              sx={{
                fontSize: "17px",
                textAlignVertical: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <strong>Contact Information:</strong>
              {/* - scroll down to view more{" "} */}
              <IconButton
                color="info"
                aria-label="Phone"
                href={`tel:7603905147`}
                size="small"
              >
                <PhoneIphoneIcon /> 760.390.5147
              </IconButton>
              <IconButton
                color="info"
                aria-label="Email"
                href={`mailto:christinaa126@gmail.com`}
                size="small"
              >
                <AttachEmailIcon /> christinaa126@gmail.com
              </IconButton>
            </Alert>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
