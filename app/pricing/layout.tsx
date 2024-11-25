import type { Metadata } from "next";

    export const metadata = {
        title: "DockerGen Pricing | Free for Everyone",
        description:
          "DockerGen offers all features for free. Automate Dockerfile generation with no hidden fees or costs. Start improving your containerization workflow today, for free.",
        keywords:
          "DockerGen pricing, free Dockerfile generator, free Docker tools, Docker automation, DevOps tools, free containerization tools, pricing",
        openGraph: {
          title: "DockerGen Pricing | Free for Everyone",
          description:
            "DockerGen provides free Dockerfile generation and containerization tools. No hidden fees, just efficient Docker automation. Available to everyone, for free.",
          url: "https://dockergen.devsomeware.com/pricing",
          siteName: "DockerGen",
          images: [
            {
              url: "https://dockergen.devsomeware.com/dockergen.png",
              width: 1200,
              height: 630,
              alt: "DockerGen - Free Dockerfile Generation",
            },
          ],
          type: "website",
          locale: "en_US",
        },
        twitter: {
          card: "summary_large_image",
          title: "DockerGen Pricing | Free for Everyone",
          description:
            "Use DockerGen's Dockerfile automation tools for free. No hidden fees, just powerful containerization efficiency available for all.",
          images: "https://dockergen.devsomeware.com/dockergen.png",
          creator: "@Basirkhan_786",
        },
        robots: "index, follow",
        viewport: "width=device-width, initial-scale=1.0",
      };
      
  



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       >
    
        {children}
       
      </body>
    </html>
  );
}
