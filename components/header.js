import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const AppHeader = ({ children }) => {
	return (<>
		<div className="bg-dark">
		<Container>
		<Row>
		<Col>
		<Navbar variant="dark" expand="lg" sticky="top">
		<Link href="/" passHref>
		<Navbar.Brand href="/">SportsDB</Navbar.Brand>
		</Link>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto">
		<Link href="/" passHref>
		<Nav.Link href="/">Home</Nav.Link>
		</Link>
		</Nav>
		</Navbar.Collapse>
		</Navbar>
		</Col>
		</Row>
		</Container>
		</div>
		</>);
	}
	export default AppHeader;	