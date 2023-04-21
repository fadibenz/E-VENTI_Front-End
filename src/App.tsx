import { FC, useState } from "react";
import { Register, Login, EventDetails, Organizer } from './Pages/index';

const App: FC = () => {
  return <div className="App">
    {/* <Login /> */}
    {/* <Register /> */}
    <EventDetails />
    {/* <Organizer /> */}
  </div>;
};

export default App;
