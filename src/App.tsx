import { FC, useState, useEffect } from 'react';
import {
  Register,
  Login,
  EventDetails,
  Organizer,
  Following,
  Hosted,
  Saved,
  CreateForm,
  Home
} from './Pages/index';
import { SettingsRouting } from './Pages/index';
import { getCookie } from 'typescript-cookie';
import { getUserDetails } from './Services/Users';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import ScrollToTop from './Pages/ScrollToTop';
import Profile from './Pages/Settings/Profile/Profile';

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
      setToken(Token);
    }

    const getUser = async () => {
      if (UserID) {
        const User = await getUserDetails(UserID, config);
        setUser(User);
        console.log("Look: ", User);
      }
    };
    getUser();
  }, [token]);

  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route
            path='/Login'
            element={<Login setToken={setToken} setUser={setUser} />}
          />
          <Route path='/Register' element={<Register setToken={setToken} />} />

          <Route path='/' element={<Layout user={user} />}>
            <Route
              path='/'
              element={<Home user={user} token={token} config={config} />}
            />
            <Route
              path='/EventDetails/:id'
              element={
                <EventDetails user={user} token={token} config={config} />
              }
            />
            <Route
              path='/Organizer/:id'
              element={<Organizer user={user} config={config} />}
            />
            <Route
              path='/Create'
              element={<CreateForm config={config} user={user} />}
            />
          </Route>
          <Route path='/Dashboard' element={<SettingsRouting user={user} />}>
            <Route
              path='/Dashboard/Profile'
              element={<Profile config={config} user={user} setToken={setToken} />}
            />
            <Route
              path='/Dashboard/Following'
              element={<Following config={config} user={user?.id} />}
            />
            <Route
              path='/Dashboard/Saved'
              element={<Saved config={config} />}
            />
            <Route
              path='/Dashboard/Hosted'
              element={<Hosted config={config} user={user?.id} />}
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
