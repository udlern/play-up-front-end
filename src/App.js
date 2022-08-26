import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../src/css/App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import GameList from "./pages/games/GameList";
import NewGame from "./components/NewGame";
import PlayersList from "./pages/players/PlayersList";
import CommentsList from "./pages/comments/CommentsList";
import FavoritesList from "./pages/games/FavoritesList";
import Profile from "./pages/players/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    games: [],
    comments: [],
  });

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <Switch>
            <Route path="/sign-up">
              <SignUp setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/">
              <Login
                setCurrentUser={setCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            </Route>
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/home">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/new-game">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <NewGame />
          </Route>
          <Route path="/game-list">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <GameList currentUser={currentUser} />
          </Route>
          <Route path="/players-list">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <PlayersList />
          </Route>
          <Route path="/comments-list">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <CommentsList currentUser={currentUser} />
          </Route>
          <Route path="/favorites-list">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <FavoritesList currentUser={currentUser} />
          </Route>
          <Route path="/profile">
            <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
            <Profile currentUser={currentUser} />
          </Route>
          <Route path="/">
            <Login
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
