//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

function Footer() {
	const myName = "Rafy";
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				Created by {myName}. &copy; Copyright {currentYear}
			</p>
		</footer>
	);
}
export default Footer;
