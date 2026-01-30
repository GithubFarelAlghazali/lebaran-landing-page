"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data";

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
						<ProductCard name={product.name} id={product.id} image={product.image} desc={product.desc} price={product.price} tag={product.tag} key={product.id} />
					))}
				</div>
			</div>
		</section>
	);
}
