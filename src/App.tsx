import { FC, useState } from "react";
import { Register, Login, EventDetails, Organizer  ,Hosted ,Saved, Following}from './Pages/index';


const App: FC = () => {
  return <div className="App">
      {/* <Login />*/}
      {/* <Register />*/}
      {/*<EventDetails /> */}
      {/*<Organizer />*/}
      {/* <Saved />*/}
      {/* <Following />   */} 
      <Hosted />
   
    


  </div>;
};

export default App;
