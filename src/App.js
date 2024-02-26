import { NavBar } from "./components/navbar";
import { Outlet } from "react-router";
import { PhoneMenu } from "./components/phoneMenu";
import { TabMenu } from "./components/tabMenu";
import { Overlay } from "./components/overlay";

const App = () => {
  return (
    <>
      <NavBar />
      <PhoneMenu />
      <TabMenu />
      <Overlay />
      <Outlet />
    </>
  );
};

export default App;
