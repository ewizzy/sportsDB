import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Result from '../components/result';
export default function Home() {
    const [ roundResults, setRoundResults ] = useState();
    const [isLoading, setIsLoading] = useState(false);
	const [currentRound, setCurrentRound] = useState(28); //28 is latest round in premier league
    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/roundResults/${currentRound}`)
            .then(response => response.json())
            .then(data => {
                setRoundResults(data);
                setIsLoading(false);
            })
    }, []);
  return (
    <div className={styles.mainBg}>

      <main className={styles.main}>
		<Container>
		<Row>
		<Col>
        <h1 className={styles.mainTitle}>England Premier League</h1>
	    <span className={styles.subTitle}>Latest results</span>
	  {!isLoading?(
	    <Result date="21 Sep 21" team1="Arsenal" team2="Man City" result="2-2" stadium="Etihad Stadium" team1img="" team2img="" />
	  ):(
		  <Spinner animation="border" variant="success" />
	  )}
		</Col>
	    </Row>	
	    </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
