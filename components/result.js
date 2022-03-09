import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Result.module.css';
const Result = ({ date, team1, team2, result, stadium, team1img, team2img }) => {
	return (<>
		<div className={styles.resultWrap}>
		<Container>
		<Row>
		<Col md="2" lg="2" className={styles.dateWrap}>
		<img src="./calendar.svg" alt="calendar icon" /> 23 Nov 21
		</Col>
		<Col md="3" lg="3" className={styles.team1Wrap}>
		<Link href="/team/totenham-hotspur"><a href="/team/totenham-hotspur">Totenham Hotspur</a></Link>
		</Col>
		<Col md="1" lg="1" className={styles.scoreWrap}>
		2-2
		</Col>
		<Col md="3" lg="3" className={styles.team2Wrap}>
		<Link href="/team/totenham-hotspur"><a href="/team/totenham-hotspur">Manchester City</a></Link>
		</Col>
		<Col md="3" lg="3" className={styles.stadiumWrap}>
		<img src="./stadium.png" alt="stadium icon" /> Etihad Stadium
		</Col>
		</Row>
		</Container>
		</div>
		</>);
	}
	export default Result;	