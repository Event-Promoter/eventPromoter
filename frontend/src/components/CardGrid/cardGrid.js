import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EventCard from "../EventCard/EventCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
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
  );
}
