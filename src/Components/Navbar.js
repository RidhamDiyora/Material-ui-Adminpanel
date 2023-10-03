import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Components/Navbar.css';
import Button from '@mui/material/Button';

function Navbar() {
	const navRef = useRef();

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };

	return (
		<header>
			<h3 className="Logo">LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					// onClick={showNavbar}
					>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				// onClick={showNavbar}
				>
				<FaBars />
			</button>
			<header className="header">
				<div className="container">
				<div className="admin-title">
					<Navbar />
				</div>
				<div className="button-container">
					<Button variant="contained" color="primary">
					Login
					</Button>
					<Button variant="contained" color="secondary">
					Logout
					</Button>
				</div>
				</div>
			</header>
		</header>
	);
}

export default Navbar;