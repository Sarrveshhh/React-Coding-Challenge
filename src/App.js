import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => setItems(json))
  }, []);

  return(
    <>
      <div className="header">Users</div>
      <div className="card-grid">
        {items.map((item) => (
          <div className='card'>
            <div className='card-header'>Name: {item.name}</div>
            <div className='card-body'>Address: {JSON.stringify(item.address)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;


