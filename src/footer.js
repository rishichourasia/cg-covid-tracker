import React from "react";
import styles from "./footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Footer() {
	return (
		<Container fluid className={styles.foot}>
			<p className={styles.fotext}>© Copyright 2020</p>
			<p>
				<a href="https://github.com/rishichourasia/cg-covid-tracker">
					<p>
						<img
							src="/github.svg"
							width="40"
							alt="github svg"
							height="40"
							className={styles.git}
						></img>
					</p>
				</a>
			</p>
		</Container>
	);
}

export default Footer;
