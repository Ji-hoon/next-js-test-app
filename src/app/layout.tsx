import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Controls } from "./Controls";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS tutorials",
  description: "Authored by jhkim",
};

export type TopicResponse = {
  id: number;
  title: string;
  content: string;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetch("http://localhost:9999/topics", {
    next: { revalidate: 1000 },
    //cache: "no-store",
  });
  const result = await response.json();

  return (
    <html>
      <body>
        <h1>
          <Link href="/">Home</Link>
        </h1>
        <ol>
          {result &&
            result.map((topic: TopicResponse, index: number) => {
              return (
                <li key={index}>
                  <Link href={`/read/${topic.id}`}>{topic.title}</Link>
                </li>
              );
            })}
        </ol>
        {children}
        <Controls />
      </body>
    </html>
  );
}
