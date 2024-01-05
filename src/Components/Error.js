import { Link } from "react-router-dom";
import errorImage from "./Gallery/error.jpg";
import { useLocation } from "react-router-dom";
import classes from "./MainPage.module.css";
function Error() {
  const location = useLocation();
  return (
    <>
      <h1>
        <span style={{ color: "red" }}>{location.pathname}</span> PATH DOES NOT
        EXIST
      </h1>

      <h3> Click on the Image to Navigate to Home Page </h3>
      <Link to="/main-page" className={classes.errorlink}>
        <img src={errorImage} alt="No pic" className={classes.errorimg} />
      </Link>
    </>
  );
}
export default Error;
