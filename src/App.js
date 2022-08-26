import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import NavBar from "./NavBar";
import Home from "./Home";
import GameList from "./GameList";
import NewGame from "./NewGame";
import PlayersList from "./PlayersList";
import CommentsList from "./CommentsList";
import FavoritesList from "./FavoritesList";
import Profile from "./Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({email: "", password: "", games: [], comments: []});

  useEffect(() => {
    fetch("https://play-up-back-end.herokuapp.com/me").then((res) => {
      console.log(res);
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  // if (!isAuthenticated) {
  //   return (
  //     <>
  //       <NavBar
  //         setCurrentUser={setCurrentUser}
  //         currentUser={currentUser}
  //         setIsAuthenticated={setIsAuthenticated}
  //         isAuthenticated={isAuthenticated}
  //       />
  //       <Switch>
  //         <Route path="/sign-up">
  //           <SignUp setCurrentUser={setCurrentUser} />
  //         </Route>
  //         <Route path="/">
  //           <Login
  //             setCurrentUser={setCurrentUser}
  //             setIsAuthenticated={setIsAuthenticated}
  //           />
  //         </Route>
  //       </Switch>
  //     </>
  //   );
  // }
  return (
    <div>
      {!isAuthenticated ?
          <>
          {/* <NavBar
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setIsAuthenticated={setIsAuthenticated}
            isAuthenticated={isAuthenticated}
          /> */}
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
        :

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
      }
    </div>
  );
}

export default App;
