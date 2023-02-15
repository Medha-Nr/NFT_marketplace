"use client";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <nav className="border-b p-6">
            <p className="text-4xl font-bold">Metaverse Marketplace</p>
            <div className="flex mt-4">
              <Link href="/" className="mr-6 font-semibold text-purple-900">
                Home
              </Link>

              <Link
                href="/create-item"
                className="mr-6 font-semibold text-purple-900"
              >
                Sell Digital Assets
              </Link>

              <Link
                href="/my-assets"
                className="mr-6 font-semibold text-purple-900"
              >
                My Digital Assets
              </Link>

              <Link
                href="/creator-dashboard"
                className="mr-6 font-semibold text-purple-900"
              >
                Creator Dashboard
              </Link>
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
