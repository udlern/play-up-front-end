import Player from "../../components/Player";
import { useEffect, useState } from "react";

function PlayersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
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
