import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const clickhandler = (event) => {
    event.preventDefault();
    navigate("/welcome");
  };
  return (
    <Button
      variant="contained"
      style={{ margin: "0 auto" }}
      onClick={clickhandler}
    >
      Click To Enter Name
    </Button>
  );
}
export default Main;
