import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartButton from "@/components/CartButton";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TokoKueBerkah - Kue Lebaran & Hampers Premium",
	description: "Pusat oleh-oleh kue kering dan hampers lebaran premium. Halal, higienis, dan terpercaya.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body className={poppins.className}>
				<CartProvider>
					<Navbar />
					<CartButton />
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
