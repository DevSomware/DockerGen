import type { Metadata } from "next";



export const metadata = {
    title: "DockerGen Features | Automate Dockerfile Creation with Best Practices",
    description:
      "Discover DockerGen's powerful features for generating Dockerfiles automatically, using best practices like lightweight images, minimizing image layers, and optimizing caching for faster builds.",
    keywords:
      "Docker, DockerGen features, Dockerfile automation, best practices, lightweight base images, Docker automation, GitHub commit, containerization",
    openGraph: {
      title: "DockerGen Features | Automate Dockerfile Creation with Best Practices",
      description:
        "Explore how DockerGen automates Dockerfile creation with best practices like using lightweight images, minimizing layers, and optimizing caching. Save time and improve efficiency.",
      url: "https://dockergen.devsomeware.com/features",
      siteName: "DockerGen",
      images: [
        {
          url: "https://dockergen.devsomeware.com/dockergen.png",
          width: 1200,
          height: 630,
          alt: "DockerGen - Automate Dockerfile Creation",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "DockerGen Features | Automate Dockerfile Creation",
      description:
        "Learn about DockerGen's powerful features for Dockerfile generation, including best practices, optimized caching, and one-click GitHub commits. Improve your containerization workflow.",
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
