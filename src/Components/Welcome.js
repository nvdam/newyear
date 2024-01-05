import TextField from "@mui/material/TextField";
import Card from "./Card";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MainPage.module.css";
import Namevid from "./Videos/Name.mp4";

function Welcome(props) {
  const [nameError, setNameError] = useState("");
  const Name = props.name;
  const [videoViewing, setVideoViewing] = useState(true);

  const navigate = useNavigate();

  const NameClickHandler = (event) => {
    event.preventDefault();
    if (
      Name.trim().length >= 3 &&
      Name !== "Guest" &&
      Name.trim().length <= 25
    ) {
      navigate("/main-page");

      const postData = {
        user: Name,
      };

      fetch(
        "https://naga-project-ff79f-default-rtdb.firebaseio.com/newyearvisitnames.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Name entered");
        })
        .catch((error) => {
          console.log("Error while sending name");
        });
    } else {
      console.log("Name is invalid");
      setNameError("Name should be in 3-25 charecters");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setVideoViewing(false);
    }, 5000);
  });
  return (
    <Card>
      <h2> Name Enter Cheyy Mowa</h2>
      {videoViewing && (
        <video src={Namevid} className={classes.banner} autoPlay />
      )}
      <TextField
        id="standard-basic"
        label="Enter Your Name"
        variant="standard"
        onChange={props.writeName}
      />

      <br />
      <p className={classes.errortext}> {nameError}</p>
      <br />

      <Button variant="outlined" onClick={NameClickHandler}>
        Next
      </Button>
    </Card>
  );
}
export default Welcome;
