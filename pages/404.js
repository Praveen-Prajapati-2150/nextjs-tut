import Link from 'next/link';
import Home from '.';
import styles from '../styles/404.module.css';
import index from './blog';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from './components/Navbar';

const Errorpage = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push('/');
  };

  useEffect(() => {
    const timeout = setTimeout(getout, 5000);

    function getout() {
      router.push('/');
    }

    // setTimeout(() => {
    //   router.push("/")
    // }, 3000)
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.main2}>
          <div className={styles.heading}>
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          {/* <Link href="/">Back To Homepage</Link> */}
          {/* <a onClick={() => router.push('/')}>Back To Homepage</a> */}
          <a onClick={handleInput}>Back To Homepage</a>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
