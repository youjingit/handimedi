import { FaBars } from "react-icons/fa";

function TopNav() {
	return (
		<header>
			<nav className="navbar">
				<button type="button" className="navbar_toggle">
					<FaBars />
				</button>
				<h1 className="navbar_brand">
					<img src="/static/images/logo.png" alt="handimedi" />
				</h1>
			</nav>
		</header>
	);
}

export default TopNav;
