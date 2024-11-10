import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nebulae-Soft|| HRRR",
  description: "Created and maintained by Hirok Roy Rahul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className='sticky top-0 left-0'/>
        {children}
      </body>
    </html>
  );
}
