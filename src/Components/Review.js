import { Button } from "@mui/material";
import Card from "./Card";
import classes from "./MainPage.module.css";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Link } from "react-router-dom";

function Review(props) {
  const [review, setReview] = useState("");
  const [res, setRes] = useState("");
  const name = props.name;
  const writeReview = (event) => {
    setReview(event.target.value);
  };
  const sendReviewToNet = (event) => {
    event.preventDefault();
    const postData = {
      user: name,
      message: review,
    };

    fetch(
      "https://naga-project-ff79f-default-rtdb.firebaseio.com/newyear.json",
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
        console.log("Response:", data);
        setRes("Your Review Has Been Submitted");
      })
      .catch((error) => {
        setRes("Review Rayatam Kuda Raadha Ra Unga");
      });
  };
  return (
    <Card>
      <h1>Review</h1>
      <textarea
        style={{ border: "2px solid black" }}
        placeholder="Eado Okati Raayi Mowa"
        className={classes.textareasize}
        onChange={writeReview}
      />
      <Button
        endIcon={<SendIcon />}
        color="success"
        variant="contained"
        size="large"
        onClick={sendReviewToNet}
      >
        Send
      </Button>
      <p>{res}</p>
      <Button variant="outlined">
        <Link
          to="/main-page"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          Go To Home
        </Link>
      </Button>
    </Card>
  );
}
export default Review;
