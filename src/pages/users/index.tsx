import { useState } from "react";
import Menu from "../../components/layout/menu";
import Button from "../../components/button";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [name, setName] = useState("");

  function onSubmit() {
    setUsers((prev) => [...prev, name]);
    setName('');
  }

  return (
    <>
      <Menu />
      <h1>Users</h1>
      <div>
        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => {
            setName(event?.target.value);
          }}
        />
        <Button text="Salvar" onClick={onSubmit} />
      </div>
      <div>
      <ul>
        {users.map(usr => (
          <li>{usr}</li>
        ))}
      </ul>
      </div>
    </>
  );
}
