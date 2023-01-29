import Splash from "./pages/splash";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import Home from "./pages/home";
import Alarm from "./pages/alarm";
import Photo from "./pages/photo";
import Setting from "./pages/setting";
import AlarmForm from "./pages/alarm/form";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<Splash />} />
				<Route path="/intro" element={<Intro />} />
				<Route path="/home" element={<Home />} />
				<Route path="/alarm" element={<Alarm />} />
				<Route path="/alarm/form" element={<AlarmForm />} />
				<Route path="/photo" element={<Photo />} />
				<Route path="/setting" element={<Setting />} />
				<Route path="*" element={<div>Error</div>} />
			</Routes>
		</div>
	);
}

export default App;
