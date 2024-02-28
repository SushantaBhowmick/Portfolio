import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/heme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Sushanta Bhowmick",
	authors: {
		name: "Sushanta Bhowmick",
	},

	description:
		"Based in India, I'm a Fullstack developer passionate about building modern web application that users love.",
	openGraph: {
		title: "Sushanta Bhowmick",
		description:
			"Based in India, I'm a Fullstack developer passionate about building modern web application that users love., powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "http://localhost:3000/",
		siteName: "Sushanta Bhowmick",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "Sushanta Bhowmick", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
