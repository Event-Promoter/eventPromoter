import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import think from "./think.jpg";
import image2 from "./pitch.jpg";
import image1 from "./image1.gif";
import business from "./business.jpg";
import "./random.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#eeeeee",
    top: "0%",
    paddingBottom: "5%",
  },
  gridList: {
    width: 900,
    height: 700,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

const tileData = [
  {
    img: think,
    title: "Non-Tech",
    author: "author",
    featured: true,
  },
  {
    img: business,
    title: "Business Events",
    author: "author",
  },
  {
    img: image1,
    title: "Hackathons",
    author: "author",
  },
  {
    img: image2,
    title: "Beta-Pitches",
    author: "author",
    featured: true,
  },
];

export default function Random() {
  const classes = useStyles();

  return (
    <div className="section2">
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={8} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 1.3 : 1}
            >
              <img className="image" src={tile.img} alt={tile.title} />
              <div class="overlay">
                <div class="text">{tile.title}</div>
              </div>
              {/* <Link to="/"> */}
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton
                    aria-label={`star ${tile.title}`}
                    className={classes.icon}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
              {/* </Link> */}
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
