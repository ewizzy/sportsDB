import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Result.module.css';
const Result = ({ date, team1, team2, result, stadium, team1img, team2img, team1id, team2id }) => {
	const homeTeamLink = '/team/'+team1id+'/'+team1.replace(/\s/g, '-');
	const awayTeamLink = '/team/'+team2id+'/'+team2.replace(/\s/g, '-');
	return (<>
		<div className={styles.resultWrap}>
		<Container>
		<Row>
		<Col md="2" lg="2" sm="12" xs="12" className={styles.dateWrap}>
		<img src="./calendar.svg" alt="calendar icon" /> {date}
		</Col>
		<Col md="3" lg="3" sm="5" xs="5" className={styles.team1Wrap}>
		<Link href={homeTeamLink}><a href={homeTeamLink}><img src={team1img} className={styles.teamIcon} alt="team icon" /> {team1}</a></Link>
		</Col>
		<Col md="1" lg="1" sm="2" xs="2" className={styles.scoreWrap}>
		{result}
		</Col>
		<Col md="3" lg="3" sm="5" xs="5" className={styles.team2Wrap}>
		<Link href={awayTeamLink}><a href={awayTeamLink}>{team2} <img src={team2img} className={styles.teamIcon} alt="team icon" /></a></Link>
		</Col>
		<Col md="3" lg="3" sm="12" xs="12" className={styles.stadiumWrap}>
		<img src="./stadium.png" alt="stadium icon" /> {stadium}
		</Col>
		</Row>
		</Container>
		</div>
		</>);
	}
	export default Result;	