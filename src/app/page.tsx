import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Hello, NextJS</h2>
      <Image alt="john" width="300" height="200" src="/tenor.gif" unoptimized />
    </>
  );
}
