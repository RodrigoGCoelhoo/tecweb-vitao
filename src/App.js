import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Quote from "./components/Quote";
import Likes from "./components/Likes";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [page, setPage] = useState("quote");

  return (
    <div className="App">
      <Header loggedIn={loggedIn} email={email} setPage={setPage} />
      {loggedIn ? (
        page === "quote" ? (
          <Quote setPage={setPage} />
        ) : (
          <Likes />
        )
      ) : (
        <Login setLoggedIn={setLoggedIn} setEmail={setEmail} />
      )}
    </div>
  );
}

export default App;
