import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all";

export const metadata: Metadata = {
    title: "Cal Parli",
    description: "UC Berkeley's premier debate organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(SplitText)
    gsap.registerPlugin(ScrollTrigger)

    return (
        <html lang="en">
            <head>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></Script>
                <link rel="stylesheet" href="https://use.typekit.net/lwx5zwz.css" />
                <link rel="stylesheet" href="https://use.typekit.net/bsk0vur.css" />
            </head>
            <body className={`body`}>
                {children}
            </body>
        </html>
  );
}
