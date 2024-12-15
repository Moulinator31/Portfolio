import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css" 


export const metadata: Metadata = {
  title: "Le Monde Digital d'Elsa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Raleway:wght@100..900&display=swap');
      </style>
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
