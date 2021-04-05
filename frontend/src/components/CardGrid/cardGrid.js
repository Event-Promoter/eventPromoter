import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EventCard from "../EventCard/EventCard";
// import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "3%",
  },
  header: {
    display: "flex",
    // margin: "auto",
    justifyContent: "center",
    marginTop: "3%",
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(4);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          {[10, 11, 12, 13].map((val) => (
            <Grid container justify="center" key={val} spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <EventCard />
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
