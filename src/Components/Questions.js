import Card from "./Card";
import QuestionVideo from "./Videos/doubt.mp4";
import classes from "./MainPage.module.css";
import { Link, useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  return (
    <Card>
      <video src={QuestionVideo} autoPlay className={classes.banner} />
      <Link
        to="."
        style={{ textDecoration: "none", cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Link>
    </Card>
  );
}
export default Questions;
