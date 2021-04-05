import React from 'react';
import './MainEvent.css'
import bg from "./bg1.jpg";
import img from "./1.png"
import { Box, Button, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MainEvent = () => {
    const classes = useStyles();

    return (
        <div>
            <header
                style={{
                    width: "100%",
                    height: "550px",
                    display: "block",
                    position: "relative",
                    backgroundSize: "100%",
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: " center",
                    backgroundRepeat: "no-repeat",

                }}
            >
            </header>
            <div className="side">
                <div className="company">
                    <img className="border-image" src={img}></img>
                </div>
                <div className="desc">
                   <h4 className="text-work">Registered Users : 5000  &emsp; &emsp; &emsp; &emsp; &emsp;Allowed Team Size: 1 to 4</h4>
                </div>
                <div className="desc2">
                <h3 className="text-work2">   Starts On : 12/2/2021    </h3>
                </div>
                <div className="desc2">
                <h3 className="text-work2">   Ends On : 15/5/2021      </h3>

                </div>
                <div className="button">
                    <button className="styling"><h4>REGISTER NOW</h4></button>
                </div>

            </div>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#f7cac9', height: '50vh',marginTop:"2%" }} >
                    {/* There is already an h1 in the page, let's not duplicate it. */}
                    <Typography align="center" variant="h3" component="h2" style={{marginBottom:'3%'}}>
                        Description
                    </Typography>
                    <Typography align="center" variant="subtitle1" paragraph={true} gutterBottom>
                    Pulzion is the annual technical fest organized by PICT ACM Student Chapter.
                            Pulzion has hosted multiple events including coding competition ranging from amateur
                            competitions two day-long as well as mock placements, business management based and quizzing
                            events.
                            It has become one of the most anticipated events taking place at PICT with participants from
                            colleges all over Pune. With high aspirations, backed with sincerity and dedication, the
                            PASC team
                            aims to add value to the college and all the people in it.
                            It has become one of the most anticipated events taking place at PICT with participants from
                            colleges all over Pune. With high aspirations, backed with sincerity and dedication, the
                            PASC team
                            aims to add value to the college and all the people in it.
                    </Typography>
                </Typography>
            </Container>
            <Container maxWidth="xl">
                <Typography component="div" style={{ backgroundColor: '#white', height: '60vh', marginTop: '5%' }} >
                    {/* There is already an h1 in the page, let's not duplicate it. */}
                    <Typography align="center" variant="h3" component="h2">
                        Sub Events
                    </Typography>
                    <Grid container spacing={3} style={{marginTop:"3%"}}>
                        <Grid item xs>
                            <Paper className={classes.paper}>Reverse coding</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Bug Off</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Fandom</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{marginTop:"3%"}}>
                        <Grid item xs>
                            <Paper className={classes.paper}>Dextrous</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Treasure Hunt</Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>Code in Go</Paper>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </div>
    );
}

export default MainEvent;
