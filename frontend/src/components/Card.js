import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import img from "./bram-naus-n8Qb1ZAkK88-unsplash.jpg";
import ShareIcon from "@material-ui/icons/Share";
import { red } from "@material-ui/core/colors";
import "./Card.css";
import font from "fontsource-roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    fontFamily: { font },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  header: {
    backgroundColor: "#000000",
    opacity: 0.8,
    color: "#ffffff",
  },
  content: {
    backgroundColor: "#eeeeee",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
  action: {
    marginTop: "0px",
    backgroundColor: "#eeeeee",
    paddingTop: "10px",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        title="PICT ACM"
      />
      <CardActionArea>
        <CardMedia
          component="img"
          alt="BugOff"
          height="140"
          image={img}
          title="BugOff"
        ></CardMedia>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="sronly"
            component="h3"
            align="center"
            color="secondary"
          >
            Competitive
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" align="center">
            Bug Off
          </Typography>

          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            align="center"
            style={{
              marginBottom: "0px",
              paddingBottom: "0px",
            }}
          >
            April 11 2021,4:00 pm
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <div className="btn">
          <Button
            style={{ textTransform: "none" }}
            variant="contained"
            color="primary"
            size="medium"
          >
            Register
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
