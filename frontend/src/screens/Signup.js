import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleButton from "react-google-button";
import validator from "validator";
import Alert from "@material-ui/lab/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Event Promoter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
    marginTop: "-8%",
  },
  gBtn: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

export default function SignUp() {
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match !");
    } else setMessage("");
  };
  const validateEmail = (e) => {
    var email = e.target.value;

    if (!validator.isEmail(email)) {
      setEmailError("Enter valid Email!");
    } else {
      setEmailError("");
    }
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h4" gutterBottom className={classes.header}>
          Event Promoter
        </Typography>
        <div className={classes.gBtn}>
          <GoogleButton
            label="Continue with Google"
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
        <Typography component="subtitle" variant="subtitile">
          or
        </Typography>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submitHandler} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => validateEmail(e)}
              />
              {/* <span style={{ color: "#FF0000" }}>{emailError}</span> */}
              {emailError && (
                <Alert variant="filled" severity="error">
                  {emailError}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Confirm password"
                label="Confirm Password"
                type="password"
                id="password2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <span style={{ color: "#FF0000" }}>{message}</span>
               */}
              {message && (
                <Alert variant="filled" severity="warning">
                  {message}
                </Alert>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color=""
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid item>
            <Link href="/SignUpOrg" variant="body2">
              {"Sign Up as an Organization"}
            </Link>
          </Grid>
          <Grid item>
            <Link href="/SignIn" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
