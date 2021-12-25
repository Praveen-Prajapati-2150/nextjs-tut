import Image from 'next/image';
import React from 'react';
import Navbar from './components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>Hello world My About </h1>
      <Image
        src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        height="600"
        width="400"
      ></Image>
    </div>
  );
}
