import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import Result from '../components/result';
export default function Home() {
    const [roundResults, setRoundResults ] = useState();
    const [isLoading, setIsLoading] = useState(false);
	const [currentRound, setCurrentRound] = useState(28); //28 is latest round in premier league
	var selectValues = [];
	for(var i=28;i>0;i--){
		selectValues.push(<option value={i} key={i}>Round {i}</option>);
	}
	const changeRound = (event) => {
		setCurrentRound(event);
		getRound(event);
	}
    const getRound = async (currentRound) => {
	  setIsLoading(true);
      const response = await fetch(`/api/roundResults/${currentRound}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const currRound = await response.json();
      setRoundResults(currRound.data);
	  setIsLoading(false);
    }
    useEffect(() => {
		getRound(currentRound);
	}, []);
  return (
    <div className={styles.mainBg}>

      <main className={styles.main}>
		<Container>
		<Row>
		<Col>
        <h1 className={styles.mainTitle}>England Premier League</h1>
	    <span className={styles.subTitle}>Results for   
	  <Form.Select className={styles.select} onChange={e => changeRound(e.target.value)} value={currentRound}>
	  {selectValues}
	  </Form.Select>
	  </span>
	  
	  {!isLoading&&roundResults?(
		  roundResults.events.map(function(item){
		  	return <Result date={item.dateEvent} team1={item.strHomeTeam} team2={item.strAwayTeam} result={item.intHomeScore+'-'+item.intAwayScore} stadium={item.strVenue} team1img={item.homeTeamIcon} team2img={item.awayTeamIcon} team1id={item.idHomeTeam} team2id={item.idAwayTeam} />
		  })
	  ):(
		  <Spinner animation="border" variant="success" />
	  )}
		</Col>
	    </Row>	
	    </Container>
      </main>
    </div>
  )
}
