import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import img from "./bram-naus-n8Qb1ZAkK88-unsplash.jpg";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "3%",
    width: 365,
    borderRadius: "2%",
    minWidth: 200,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  media: {
    height: 50,
    paddingTop: "56.25%", // 16:9
  },
  header: {
    backgroundColor: "rgba(0,0,0,0.8)",
    opacity: 0.8,
    color: "white",
    fontWeight: "700",
  },
  avatar: {
    backgroundColor: red[500],
  },
  action: {
    marginTop: "0px",
    backgroundColor: "#eeeeee",
    paddingTop: "10px",
  },
  share: {},
});
const styles = {
  overlay: {
    display: "flex",
    position: "absolute",
    width: "100%",
    top: "0",
    paddingTop: "5%",
    paddingBottom: "2%",
    paddingLeft: "8%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
function EventCard() {
  return (
    <Card className={useStyles().root}>
      <CardActionArea>
        {/* <CardHeader
                    className={useStyles().header}
                    avatar={
                    
                }
                    title="PICT ACM"
                /> */}
        <CardMedia className={useStyles().media} image={img} title="bugoff" />
        <div style={styles.overlay}>
          <Avatar aria-label="recipe" className={useStyles().avatar}>
            P
          </Avatar>
          <a
            href="https://pict.acm.org/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              margin: "10px",
            }}
          >
            PICT ACM
          </a>
          <IconButton aria-label="share" className={useStyles().share}>
            <ShareIcon />
          </IconButton>
        </div>
        <CardContent>
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
      <CardActions className={useStyles().action}>
        <Button
          style={{
            textTransform: "none",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          variant="contained"
          color="primary"
          size="medium"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
