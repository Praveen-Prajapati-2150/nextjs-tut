import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function index({ data }) {
  return (
    <>
      <Navbar />
      <div className="conta">
        {data.slice(0, 5).map((e) => {
          return (
            <div key={e.id} className="main">
              <h3>{e.id}.</h3>
              <Link href={`/blog/${e.id}`}>
                <h2>{e.title}.</h2>
              </Link>
            </div>
          );
        })}
        <style jsx>
          {`
            .conta {
              height: calc(100vh - 60px);
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            .main {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              // height: 60px;
              max-height: 120px;
              width: 60%;
              margin: 5px 20px;
              // border-radius: 50px;
              padding: 20px 20px;
              box-shadow: 8px 8px 6px 2px lightgrey;
              transition: 0.8s;
            }
            .main:hover {
              transform: translateX(15px);
              box-shadow: 8px 8px 6px 2px lightblue;
              // transform: translateX(10px) scale(1.02);
              // transform: scale(1.02);
              // transform: scale(1.01);
            }
            .main h3 {
              padding: 0px 10px;
            }
            .main h2 {
              cursor: pointer;
            }
            .main h2::first-letter {
              color: red;
              font-size: 100%;
              text-transform: uppercase;
            }
          `}
        </style>
      </div>
    </>
  );
}
