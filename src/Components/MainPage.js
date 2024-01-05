import { useEffect, useState } from "react";
import Banner from "./Gallery/New Year Theme";
import RaraBhattu from "./Videos/rara bhattu.mp4";
import classes from "./MainPage.module.css";
import Menu from "./Menu";
function MainPage(props) {
  const [videoViewing, setVideoViewing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVideoViewing(false);
    }, 2000);
  });

  return (
    <>
      <Menu name={props.name} />
      {videoViewing && (
        <video src={RaraBhattu} controls className={classes.banner} autoPlay />
      )}
      <img src={Banner} alt="banner-browse" className={classes.banner} />
    </>
  );
}
export default MainPage;
