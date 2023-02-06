import { useNavigate } from "react-router-dom";

function TopNav() {
	let navigate = useNavigate();

	const handleHomeClick = () => {
		navigate("/home");
	};
	return (
		<nav className="navbar">
			<h1 className="navbar_brand" onClick={handleHomeClick}>
				<img
					src={process.env.PUBLIC_URL + "/static/images/logo.png"}
					alt="handimedi"
				/>
			</h1>
		</nav>
	);
}

export default TopNav;
