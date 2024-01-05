import Welcome from "./Components/Welcome";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Questions from "./Components/Questions";
import Review from "./Components/Review";
import Error from "./Components/Error";
import Main from "./Components/Main";

function App() {
  const [Name, SetName] = useState("Guest");

  const nameChangeHandler = (event) => {
    SetName(event.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/welcome"
          element={<Welcome writeName={nameChangeHandler} name={Name} />}
        />

        <Route path="/main-page" element={<MainPage name={Name} />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/review" element={<Review name={Name} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
