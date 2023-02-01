import Splash from "./pages/splash";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import Home from "./pages/home";
import Alarm from "./pages/alarm";
import Photo from "./pages/photo";
import Setting from "./pages/setting";
import AlarmForm from "./pages/alarm/form";
import AlarmList from "./pages/alarm/list";
import PhotoForm from "./pages/photo/form";


function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<Splash />}></Route>
				<Route path="/intro" element={<Intro />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/alarm" element={<Alarm />}></Route>
				<Route path="/alarm/form" element={<AlarmForm />}></Route>
				<Route path="/alarm/list" element={<AlarmList />}></Route>
				<Route path="/photo" element={<Photo />}></Route>
				<Route path="/photo/form" element={<PhotoForm />}></Route>
				<Route path="/setting" element={<Setting />}></Route>
				<Route path="/*" element={<div>Not found</div>}></Route>
			</Routes>
		</div>
	);
}

export default App;
