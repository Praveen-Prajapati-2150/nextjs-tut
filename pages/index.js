import Head, { defaultHead } from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';
// import styles from '../styles/nav.module.css';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <h1>Welcome Home Baby</h1>
    </>
  );
}
