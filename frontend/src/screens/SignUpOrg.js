import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import orgbg from "./orgbg.jpg";
import validator from "validator";

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
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(https://cdn.dribbble.com/users/992274/screenshots/15336814/media/c8ae8e3b3040f03d7e65676b7abe185c.jpg?compress=1&resize=1000x750)`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Montserrat",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
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
    marginTop: "-5%",
  },
  gBtn: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

export default function SignUpOrg() {
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
        setMessage('Passwords do not match')
    } 
  }
  const validateEmail = (e) => {
    var email = e.target.value;

    if (!validator.isEmail(email)) {
      setEmailError("Enter valid Email!");
    }
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h4" gutterBottom className={classes.header}>
            Event Promoter
          </Typography>

          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: "4%" }}
          >
            Sign Up for Organizations
          </Typography>

          <form
            className={classes.form}
            noValidate
            onSubmit={submitHandler}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="oname"
                  name="orgName"
                  variant="outlined"
                  required
                  fullWidth
                  id="orgName"
                  label="Organization Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="clgname"
                  name="clgName"
                  variant="outlined"
                  required
                  fullWidth
                  id="clgName"
                  label="College Name"
                  autoFocus
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
                <span>{emailError}</span>
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
                  onChange={(e)=>setPassword(e.target.value)}
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

            <Grid container>
              <Grid item xs>
                <Link href="/SignUp" variant="body2">
                  {"Sign Up as a user"}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
              <span>{message}</span>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
        
      </Grid>
    </Grid>
  );
}
