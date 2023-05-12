import { FC, useState } from "react";
import { Register, Login, EventDetails, Organizer  ,Hosted ,Saved, Following , SettingsRouting}from './Pages/index';


const App: FC = () => {
  return <div className="App">
      {/* <Login />*/}
      {/* <Register />*/}
      {/* <EventDetails /> */}
      {/*<Organizer />*/}
      {/*<Saved />*/}
      {/*<Following />
      <Hosted />  */}
      <SettingsRouting/>


  </div>;
};

export default App;
