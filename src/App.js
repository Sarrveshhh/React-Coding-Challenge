import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => setUsers(json))
  }, []);
  return (
    <>
    {users.map((user) => (
      <div className="card">
        <p>{user.name}</p>
        <p>{user.userName}</p>
      </div>
    ))}
    </>
  );
}

export default App;
