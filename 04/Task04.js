import React from "react";

import { Row, Col, Tabs as RBTabs, Tab as RBTab } from "react-bootstrap";
import Tabs from "./../src/components/Tabs";
import Tab from "./../src/components/Tabs";

const Task04 = () => {
	return (
		<Row>
			<Col>
				<RBTabs defaultActiveKey="profile" id="uncontrolled-tab-example">
					<RBTab eventKey="home" title="Home">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
							condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum
							primis in faucibus orci luctus et ultrices posuere cubilia Curae;{" "}
						</p>
					</RBTab>
					<RBTab eventKey="profile" title="Profile">
						<p>
							Donec dignissim ultricies felis, eu dictum eros congue in. In gravida
							lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus.
							Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.
						</p>
					</RBTab>
					<RBTab eventKey="contact" title="Contact" disabled>
						<p>
							Vivamus metus nulla, fermentum eget placerat vitae, mollis interdum
							elit. Pellentesque arcu augue, vulputate ut porttitor ut, suscipit non
							orci. Integer justo odio, suscipit eget tortor nec, molestie lobortis
							eros. Nullam commodo elit sit amet lacus blandit aliquet. Mauris at nibh
							eget nisl pulvinar dignissim.
						</p>
					</RBTab>
				</RBTabs>
			</Col>

			<Col>
				<Tabs>
					<Tab eventKey="home" title="Home">
						<p>
							Vivamus metus nulla. Pellentesque arcu augue, vulputate ut porttitor ut,
							suscipit non orci. Integer justo odio, suscipit eget tortor nec,
							molestie lobortis eros. Nullam commodo elit sit amet lacus blandit
							aliquet.
						</p>
					</Tab>
					<Tab eventKey="profile" title="Profile" active>
						<p>
							Nullam commodo elit sit amet lacus blandit aliquet. Mauris at nibh eget
							nisl pulvinar dignissim. Vivamus metus nulla, fermentum eget placerat
							vitae, mollis interdum elit. Mauris at nibh eget nisl pulvinar
							dignissim.
						</p>
					</Tab>
					<Tab eventKey="contact" title="Contact" disabled>
						<p>
							Integer justo odio, suscipit eget tortor nec, molestie lobortis eros.
							Nullam commodo elit sit amet lacus blandit aliquet. Mauris at nibh eget
							nisl pulvinar dignissim. Vivamus metus nulla.
						</p>
					</Tab>
				</Tabs>
			</Col>
		</Row>
	);
};

export default Task04;
