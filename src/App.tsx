import { FC, useState, useEffect } from 'react';
import { Register, Login, EventDetails, Organizer } from './Pages/index';
import { getCookie } from 'typescript-cookie';
import { getUserDetails } from './Services/Users';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
const App: FC = () => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState('');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const Token = getCookie('Token');
    const UserID = getCookie('UserID');
    if (Token) {
      console.log(Token);
      setToken(Token);
    }

    const getUser = async () => {
      if (UserID) {
        const User = await getUserDetails(UserID, config);
        setUser(User);
        console.log(User);
      }
    };
    getUser();
  }, [token]);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Login setToken={setToken} setUser={setUser} />}
        />
        <Route
          path='/Login'
          element={<Login setToken={setToken} setUser={setUser} />}
        />
        <Route
          path='/Register'
          element={<Register setToken={setToken} />}
        />
        <Route path='/' element={<Layout user={user} />}>
          <Route
            path='/EventDetails/:id'
            element={<EventDetails user={user} token={token} config={config} />}
          />
          <Route
            path='/Organizer/:id'
            element={<Organizer user={user} config={config} />}
          />
        </Route>
      </Routes>
      {/* <Login setToken={setToken} setUser={setUser} /> */}
      {/* <Register setToken={setToken} setUser={setUser} /> */}
      {/* <EventDetails config={config} token={token} user={user} /> */}
      {/* <Organizer config={config} user={user} /> */}
    </div>
  );
};

export default App;
