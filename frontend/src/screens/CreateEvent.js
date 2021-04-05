import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#fff0a4",
    backgroundColor: "#020438",

    "&:hover": {
      backgroundColor: "#fff0a4",
      color: "#020438",
    },
  },
  header: {
    fontFamily: "Montserrat",
    marginTop: "2%",
  },
}));

export default function CreateEvent() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h4" gutterBottom className={classes.header}>
          Create Event Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="eventName"
                name="eventName"
                variant="outlined"
                required
                fullWidth
                id="eventName"
                label="Event Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="orgnName"
                label="Organization Name"
                name="orgName"
                autoComplete="orgName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="desc"
                label="Event Description"
                type="desc"
                id="desc"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="regFees"
                label="Registration Fees(in Rs)"
                type="string"
                id="regFees"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="datetime-local"
                label="Start date and time"
                type="datetime-local"
                defaultValue="2021-03-21T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="datetime-local"
                label="End Date and time"
                type="datetime-local"
                defaultValue="2021-05-21T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color=""
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
