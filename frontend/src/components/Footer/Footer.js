import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="primary" href="/">
        Event Promoter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <a href="https://www.facebook.com/">
            <FacebookIcon
              style={{
                color: "white",
                scale: "1.5",
                marginBottom: "2.2%",
                marginTop: "1%",
                marginLeft: "1.2%",
                marginRight: "1.2%",
              }}
            />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon
              style={{
                color: "white",
                scale: "1.5",
                marginBottom: "2.2%",
                marginTop: "1%",
                marginLeft: "1.2%",
                marginRight: "1.2%",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon
              style={{
                color: "white",
                scale: "1.5",
                marginBottom: "2.2%",
                marginTop: "1%",
                marginLeft: "1.2%",
                marginRight: "1.2%",
              }}
            />
          </a>
          <a href="https://github.com/">
            <GitHubIcon
              style={{
                color: "white",
                scale: "1.5",
                marginTop: "1%",
                marginBottom: "2.2%",
                marginLeft: "1.2%",
                marginRight: "1.2%",
              }}
            />
          </a>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="/">
            <ExpandLessIcon style={{ scale: "1.5" }} />
          </a>
        </div>
        <Box mt={10}>
          <Copyright />
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
