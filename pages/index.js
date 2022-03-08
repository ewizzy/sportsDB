import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="bg-secondary">

      <main className={styles.main}>
		<Container>
		<Row>
		<Col>
        <h1 className={styles.mainTitle}>England Premier League</h1>
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
