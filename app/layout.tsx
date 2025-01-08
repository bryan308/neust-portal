import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"

const robotoSans = Roboto({
	variable: "--font-roboto-sans",
	subsets: ["latin"],
	weight: ["400", "700"],
})

const robotoMono = Roboto_Mono({
	variable: "--font-roboto-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "NEUST Online Enrollment",
	description: "Nueva Ecija University of Science and Technology Online Enrollment System",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
