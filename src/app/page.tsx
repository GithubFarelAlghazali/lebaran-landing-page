import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Catalog from "@/sections/Catalog";
import Promo from "@/sections/Promo";
import Review from "@/sections/Review";
import Footer from "@/sections/Footer";

export default function Home() {
	return (
		<div className="font-sans text-gray-800 bg-orange-50/30 min-h-screen">
			<Hero />
			<Features />
			<Catalog />
			<Promo />
			<Review />
			<Footer />
		</div>
	);
}
