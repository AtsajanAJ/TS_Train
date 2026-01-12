import { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post('http://localhost:8000/api-token-auth/', { username, password })
      .then(response => {
        props.onLoginSuccess(response.data.token);
      })
      .catch(err => alert("Login failed"));
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
