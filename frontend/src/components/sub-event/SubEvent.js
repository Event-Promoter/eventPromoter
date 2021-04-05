import React , {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import img from "../EventCard/bram-naus-n8Qb1ZAkK88-unsplash.jpg";
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import './SubEvent.css'
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
    action: {
      marginTop: "0px",
      backgroundColor: "#eeeeee",
      paddingTop: "10px",
    },
 });
function SubEvent() {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <Card className={useStyles().root}>
            <CardMedia className={useStyles().media} image={img} title="bugoff" />
            <CardActionArea>
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
            <CardActions>
                <Button
                        style={{
                        textTransform: "none",
                        marginLeft: "auto",
                        marginRight: "auto",
                        }}
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => setOpen(o => !o)}
                    >
                        View
                </Button>
            </CardActions>
            <Popup open={open} closeOnDocumentClick onClose={closeModal} >
                <div className="modal">
                    <CloseIcon onClick={closeModal}/>
                    <h1 style={{textAlign:"center"}}> BUG OFF</h1>
                    <h3>Where there is a code, there is a bug!</h3>
                    <p>Coders who don't get annoyed with bugs in their code probably don't exist! How about helping them debug their code?! Bug-off is a competition where participants are expected to remove bugs from a given set of codes and display the desired output within a given time limit. The contest also tests your basic programming knowledge. The participant with the highest number of error-free codes wins the BUG OFF. The contest would take place in the following rounds </p>
                    <p>
                        Round 1: In this round, the participants will have to answer a series of MCQs based on a basic understanding of programming languages and logic.
                        Round 2: The participants need to debug the given code by making minimal changes according to the given constraints. The participant with the maximum number of error-free codes in the least time wins the contest.
                    </p>
                    <h5>Rules and Regulation</h5>
                    <ul>
                        <li>1. Both groups, FE-SE and TE-BE would be given a maximum of 30 minutes to complete the questions of the first round.</li>
                        <li>2. Both the groups, FE-SE and TE-BE, will be given a maximum of 60 minutes to complete the questions of the second round.</li>
                        <li>Participants can choose any language amongst Python, C++ or C.</li>

                    </ul>
                    <p>
                        Event Leads:
                        - Kunal Raut: +91 9604990660
                        - Soumya Malgonde: +91 8999027977
                    </p>
                    <h5>Team Info</h5>
                    <ul>
                        <li>FE-SE (Junior Category): Individual participation</li>
                        <li>TE-BE (Senior Category): Individual participation</li>
                    </ul>
                    <Button
                        style={{
                        textTransform: "none",
                        marginLeft: "auto",
                        marginRight: "auto",
                        }}
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => setOpen(o => !o)}
                    >
                        Register 
                    </Button>
                    <Button
                        style={{
                        textTransform: "none",
                        marginLeft: "auto",
                        marginRight: "auto",
                        }}
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={() => history.push('SignUp')}
                    >
                        Sign In/ Up to Register 
                    </Button>
                </div>
            </Popup>
        </Card>
    )
}

export default SubEvent
