"use client";
import { useState } from "react";
import { ShoppingBag, ChevronRight, Heart } from "lucide-react";

const products = [
	{
		id: 1,
		name: "Nastar Wisman Premium",
		price: "Rp 145.000",
		rating: 4.9,
		category: "Best Seller",
		image: "/products/nastar.webp",
		desc: "Butter wisman asli dengan selai nanas buatan sendiri.",
		tag: "Terlaris",
	},
	{
		id: 2,
		name: "Kastengel Keju Edam",
		price: "Rp 155.000",
		rating: 4.8,
		category: "Premium",
		image: "/products/kastangel.webp",
		desc: "Gurihnya keju edam melimpah di setiap gigitan.",
		tag: "Baru",
	},
	{
		id: 3,
		name: "Kue Kacang Mete",
		price: "Rp 135.000",
		rating: 4.7,
		category: "Best Seller",
		image: "/products/kacang-mete.webp",
		desc: "Lumer di mulut dengan sensasi kacang mede renyah.",
		tag: "Terlaris",
	},
	{
		id: 4,
		name: "Choco Chips",
		price: "Rp 125.000",
		rating: 4.5,
		category: "Best Seller",
		image: "/products/choco-chips.webp",
		desc: "Manisnya coklat dalam setiap gigitan",
		tag: "Terlaris",
	},
	{
		id: 5,
		name: "Kembang Goyang Harum",
		price: "Rp 100.000",
		rating: 4.8,
		category: "Best Seller",
		image: "/products/kembang-goyang.webp",
		desc: "Renyah dan manis dalam tiap kerenyahan.",
		tag: null,
	},
	{
		id: 6,
		name: "Kue Batang Cokelat",
		price: "Rp 135.000",
		rating: 4.7,
		category: "Premium",
		image: "/products/kering-cokelat-batang.webp",
		desc: "Renyah dan manisnya cokelat dalam satu gigitan.",
		tag: "Terlaris",
	},
	{
		id: 7,
		name: "Kuping Gajah",
		price: "Rp 90.000",
		rating: 4.7,
		category: "Best Seller",
		image: "/products/kuping-gajah.webp",
		desc: "Renyah dan manis",
		tag: "Terlaris",
	},
	{
		id: 8,
		name: "Tumbrint Cokelat",
		price: "Rp 150.000",
		rating: 4.7,
		category: "Premium",
		image: "/products/tumbrint-cokelat.webp",
		desc: "Sensasi manisnya cokelat premium.",
		tag: null,
	},
	{
		id: 9,
		name: "Hampers Berkah 1",
		price: "Rp 400.000",
		rating: 4.7,
		category: "Hampers",
		image: "/hampers/hampers2.webp",
		desc: "Paket Hemat: Nastar, Kastengel, Tumbrint Cokelat.",
		tag: "Promo",
	},
	{
		id: 10,
		name: "Hampers Berkah 2",
		price: "Rp 400.000",
		rating: 4.7,
		category: "Hampers",
		image: "/hampers/hampers3.webp",
		desc: "Paket Hemat: Nastar, Choco Chips, Kastangel",
		tag: "Promo",
	},
];

export default function Catalog() {
	const [activeCategory, setActiveCategory] = useState("All");
	const categories = ["All", "Best Seller", "Premium", "Hampers"];

	const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory || (activeCategory === "Best Seller" && p.category === "Best Seller"));

	return (
		<section id="catalog" className="py-20 px-6">
			<div className="container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Favorit Keluarga</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">Pilihan kue kering klasik dan modern yang selalu hadir menghangatkan suasana Idul Fitri.</p>
				</div>

				{/* Filter Tabs */}
				<div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Product Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{filteredProducts.map((product) => (
						<div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden flex flex-col">
							<div className="relative h-64 overflow-hidden">
								<img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
								{product.tag && <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{product.tag}</span>}
								<button className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full text-gray-500 hover:text-red-500 transition opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
									<Heart size={18} />
								</button>
							</div>

							<div className="p-6 flex flex-col flex-grow">
								<div className="flex justify-between items-start mb-2">
									<h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
								</div>
								<p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.desc}</p>

								<div className="mt-auto flex items-center justify-between">
									<div>
										<p className="text-xs text-gray-400 line-through">Rp {parseInt(product.price.replace(/\D/g, "")) * 1.1}</p>
										<p className="font-bold text-xl text-emerald-700">{product.price}</p>
									</div>
									<button className="bg-gray-900 text-white p-3 rounded-xl hover:bg-emerald-600 transition shadow-lg">
										<ShoppingBag size={20} />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
