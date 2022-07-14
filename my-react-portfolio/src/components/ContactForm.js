import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import mail from "./images/mail.gif";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const initialFormState = {
  senderName: "",
  senderEmail: "",
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    send(serviceID, templateID, { formState }, userID)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          backdrop: `
            rgba(0,0,123,0.4)
            url(${mail})
            left top
            no-repeat
            `,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Uh oh! We've encountered a problem",
          text: error.text,
          backdrop: `
            rgba(0,0,123,0.4)
            `,
        });
      });

    // clear input after submit
    setFormState({
      senderName: "",
      senderEmail: "",
      message: "",
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ mt: 3, mb: 6 }}
    >
      <Card
        style={{ maxWidth: 650, padding: "20px 5px", borderRadius: "16px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Name:
                </Typography>
                <TextField
                  placeholder="Enter your name"
                  fullWidth
                  required
                  name="senderName"
                  value={formState.senderName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Email address:
                </Typography>
                <TextField
                  placeholder="Enter email"
                  fullWidth
                  required
                  type="email"
                  name="senderEmail"
                  value={formState.senderEmail}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >
                  Message:
                </Typography>
                <TextField
                  placeholder="Type your message here"
                  fullWidth
                  required
                  multiline
                  rows={10}
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
