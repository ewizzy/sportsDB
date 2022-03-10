import { useEffect, useState } from "react";
import Image from 'next/image';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import styles from '../../../styles/Home.module.css';
export default function Team(teamData) {
  return (
    <div className={styles.mainBg}>

      <main className={styles.mainTeam}>
		<Container>
		<Row>
		<Col>
	    <img src={teamData.currentTeam.strTeamBadge} className={styles.teamLogo} alt="team logo" />
        <h1 className={styles.mainTitleWithLogo}>{teamData.currentTeam.strAlternate}</h1>
	    </Col>
	    <Col md="12" lg="12">
	  <img src={teamData.currentTeam.strTeamBanner} className={styles.teamBanner} alt="" />
	  </Col>
	  <Col md="12" lg="12">
	  <div className={styles.teamDesc}>
	  <h4>Description</h4>
	  <p>{teamData.currentTeam.strDescriptionEN}</p>
	  </div>
	  </Col>
	  <Col md="12" lg="12">
	  <div className={styles.bgFix}>
	  <div className={styles.max40}>
	  <div className={styles.teamDesc}>
	  <h4>Stadium</h4>
	  <img src="https://www.thesportsdb.com/images/media/team/stadium/ywsxxp1420245335.jpg" alt="stadium image" className={styles.teamStadium} />
	  <p><em>{teamData.currentTeam.strStadium} ({teamData.currentTeam.strStadiumLocation})</em></p>
	  <p>{teamData.currentTeam.strStadiumDescription}</p>
	  </div>
	  </div>
	  <div className={styles.max60}>
	  <div className={styles.teamDesc}>
	  <h4>Fan Art</h4>
	  <img src={teamData.currentTeam.strTeamFanart1} alt="fan art" className={styles.teamFanArt} />
	  <img src={teamData.currentTeam.strTeamFanart2} alt="fan art" className={styles.teamFanArt} />
	  <img src={teamData.currentTeam.strTeamFanart3} alt="fan art" className={styles.teamFanArt} />
	  <img src={teamData.currentTeam.strTeamFanart4} alt="fan art" className={styles.teamFanArt} />
	  </div>
	  </div>
	  </div>
	  </Col>
	    </Row>	
	    </Container>
      </main>
    </div>
  )
}
export async function getServerSideProps({params,req, context, res,query}) {
    const teamsUrl = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League`;
    //since there is no free API route to get the team data, we will get it from above url and extract
    const allTeamsData = await fetch(teamsUrl).then((response) => response.text()).then(result => JSON.parse(result));
    //we will extract current team data into new array
	var currentTeam = allTeamsData.teams.find(function(team){
        return parseInt(team.idTeam) === parseInt(query.id);
      });  
  return { props: { currentTeam } }
}