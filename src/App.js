import { NavBar } from "./components/navbar";
import { Outlet } from "react-router";

const App = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default App;
