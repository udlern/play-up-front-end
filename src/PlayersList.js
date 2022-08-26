import Player from "./Player";
import { useEffect, useState } from "react";
import playUpFetch from "./services/fetch";

function PlayersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    playUpFetch("/users")
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <Player users={users} setUsers={setUsers} />
    </div>
  );
}

export default PlayersList;
