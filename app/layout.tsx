import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from 'nextjs-toploader';
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
  title: "Docker File Generator App | Automate Dockerfile Creation Effortlessly",
  description:
    "DockerGen is a powerful tool that automates Dockerfile generation for your applications. Streamline containerization with our intuitive, fast, and efficient solution built using Next.js.",
  keywords:
    "Docker, Dockerfile generator, containerization, DevOps, automation, Docker tools, Next.js, DeployLite",
  authors: [{ name: "Basir Khan" }],
  openGraph: {
    title: "DockerGen | The Ultimate Dockerfile Generator Tool",
    description:
      "Automate Dockerfile creation effortlessly with DockerGen, the powerful Docker file generator app built with Next.js. Ideal for developers and DevOps teams.",
    url: "https://dockergen.devsomeware.com",
    siteName: "DockerGen",
    images: [
      {
        url: "https://dockergen.devsomeware.com/dockergen.png",
        width: 1200,
        height: 630,
        alt: "DockerGen - Docker File Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DockerGen | Automate Dockerfile Creation Effortlessly",
    description:
      "DockerGen simplifies Dockerfile generation, improving efficiency for developers and DevOps teams. Try it now!",
    creator: "@Basirkhan_786",
    images: "https://dockergen.devsomeware.com/dockergen.png",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
  color="#2299DD"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
