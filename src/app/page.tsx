"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Star, Menu, X, ChevronRight, Heart, Phone, MapPin, Instagram, Search } from "lucide-react";

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");
	const [cartCount, setCartCount] = useState(0);
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll for navbar styling
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const categories = ["All", "Best Seller", "Premium", "Hampers"];

	const products = [
		{
			id: 1,
			name: "Nastar Wisman Premium",
			price: "Rp 145.000",
			rating: 4.9,
			category: "Best Seller",
			image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&w=600&q=80",
			desc: "Butter wisman asli dengan selai nanas buatan sendiri.",
			tag: "Terlaris",
		},
		{
			id: 2,
			name: "Kastengel Keju Edam",
			price: "Rp 155.000",
			rating: 4.8,
			category: "Premium",
			image: "https://images.unsplash.com/photo-1621236378699-8597fe2115f4?auto=format&fit=crop&w=600&q=80",
			desc: "Gurihnya keju edam melimpah di setiap gigitan.",
			tag: "Baru",
		},
		{
			id: 3,
			name: "Putri Salju Mede",
			price: "Rp 135.000",
			rating: 4.7,
			category: "Best Seller",
			image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
			desc: "Lumer di mulut dengan sensasi kacang mede renyah.",
			tag: null,
		},
		{
			id: 4,
			name: "Hampers Berkah (Isi 3)",
			price: "Rp 399.000",
			rating: 5.0,
			category: "Hampers",
			image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=600&q=80",
			desc: "Paket lengkap Nastar, Kastengel, dan Putri Salju + Box Eksklusif.",
			tag: "Promo",
		},
		{
			id: 5,
			name: "Lidah Kucing Rainbow",
			price: "Rp 110.000",
			rating: 4.5,
			category: "All",
			image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
			desc: "Renyah, manis, dan cantik untuk meja tamu Anda.",
			tag: null,
		},
		{
			id: 6,
			name: "Sagu Keju Lumer",
			price: "Rp 120.000",
			rating: 4.6,
			category: "Premium",
			image: "https://images.unsplash.com/photo-1618608889396-932d207d5c58?auto=format&fit=crop&w=600&q=80",
			desc: "Tekstur lembut santan dan keju yang menyatu sempurna.",
			tag: null,
		},
	];

	const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory || (activeCategory === "Best Seller" && p.category === "Best Seller"));

	const addToCart = () => {
		setCartCount((prev) => prev + 1);
	};

	return (
		<div className="font-sans text-gray-800 bg-orange-50/30 min-h-screen">
			{/* --- NAVBAR --- */}
			<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
				<div className="container mx-auto px-6 flex justify-between items-center">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
						<span className={`text-2xl font-bold ${scrolled ? "text-emerald-800" : "text-emerald-900"}`}>
							Kue<span className="text-yellow-500">Raya</span>
						</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
						<a href="#home" className="hover:text-emerald-600 transition">
							Beranda
						</a>
						<a href="#catalog" className="hover:text-emerald-600 transition">
							Katalog
						</a>
						<a href="#hampers" className="hover:text-emerald-600 transition">
							Hampers
						</a>
						<a href="#contact" className="hover:text-emerald-600 transition">
							Kontak
						</a>
					</div>

					{/* Icons */}
					<div className="hidden md:flex items-center space-x-4">
						<button className="p-2 hover:bg-emerald-50 rounded-full transition text-gray-600">
							<Search size={20} />
						</button>
						<button className="relative p-2 hover:bg-emerald-50 rounded-full transition text-gray-600">
							<ShoppingBag size={20} />
							{cartCount > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
						</button>
						<button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">Login</button>
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				{isMenuOpen && (
					<div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t">
						<a href="#home" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
							Beranda
						</a>
						<a href="#catalog" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
							Katalog
						</a>
						<a href="#hampers" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
							Hampers
						</a>
						<a href="#contact" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
							Kontak
						</a>
						<hr />
						<button className="bg-emerald-600 text-white py-3 rounded-lg w-full font-bold">Login / Daftar</button>
					</div>
				)}
			</nav>

			{/* --- HERO SECTION --- */}
			<header id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 bg-gradient-to-r from-yellow-50 to-orange-50 overflow-hidden">
				<div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
					{/* Text Content */}
					<div className="space-y-6 text-center lg:text-left animate-fade-in-up">
						<span className="inline-block px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-bold tracking-wide uppercase mb-2">✨ Pre-Order Lebaran Dibuka</span>
						<h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
							Sajian Manis <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hari Raya</span>
						</h1>
						<p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">Rayakan kemenangan dengan kelembutan kue kering premium. Dibuat dari bahan butter wisman asli dan resep warisan keluarga turun-temurun.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
							<button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition shadow-xl shadow-emerald-200 transform hover:-translate-y-1">Pesan Sekarang</button>
							<button className="bg-white text-emerald-800 border-2 border-emerald-100 px-8 py-4 rounded-full font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition flex items-center justify-center gap-2">
								Lihat Katalog <ChevronRight size={20} />
							</button>
						</div>

						{/* Trust Badges */}
						<div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm font-medium text-gray-500">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div> 100% Halal
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div> Tanpa Pengawet
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div> Butter Premium
							</div>
						</div>
					</div>

					{/* Hero Image / Visual */}
					<div className="relative">
						{/* Decorative Blobs */}
						<div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
						<div className="absolute -bottom-8 left-0 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

						<div className="relative z-10 transform hover:scale-105 transition duration-500">
							{/* Main Hero Image Frame */}
							<div className="bg-white p-4 rounded-3xl shadow-2xl rotate-2">
								<img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80" alt="Kue Kering Lebaran" className="rounded-2xl w-full h-[400px] object-cover" />
								<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
									<div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
										<Star fill="currentColor" size={24} />
									</div>
									<div>
										<p className="font-bold text-gray-900">4.9/5.0 Rating</p>
										<p className="text-xs text-gray-500">Dari 1000+ Pelanggan</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* --- FEATURES SECTION --- */}
			<section className="py-12 bg-white">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ title: "Freshly Baked", icon: "🥖", desc: "Dibuat h-3 pengiriman" },
							{ title: "Bahan Premium", icon: "🧀", desc: "Butter wisman & keju edam" },
							{ title: "Pengiriman Aman", icon: "📦", desc: "Bubble wrap berlapis" },
							{ title: "Garansi Rasa", icon: "💖", desc: "Tidak enak, uang kembali" },
						].map((feature, idx) => (
							<div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-orange-50 rounded-xl transition">
								<div className="text-4xl mb-3">{feature.icon}</div>
								<h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
								<p className="text-sm text-gray-500">{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- CATALOG SECTION --- */}
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
								className={`px-6 py-2 rounded-full font-medium transition ${
									activeCategory === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
								}`}
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
										<button onClick={addToCart} className="bg-gray-900 text-white p-3 rounded-xl hover:bg-emerald-600 transition shadow-lg">
											<ShoppingBag size={20} />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<button className="inline-flex items-center gap-2 text-emerald-700 font-bold border-b-2 border-emerald-700 hover:text-emerald-900 transition pb-1">
							Lihat Semua Menu <ChevronRight size={18} />
						</button>
					</div>
				</div>
			</section>

			{/* --- PROMO / CTA BANNER --- */}
			<section id="hampers" className="py-10 px-6">
				<div className="container mx-auto">
					<div className="bg-emerald-900 rounded-3xl overflow-hidden relative text-white shadow-2xl">
						<div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500 opacity-10 transform skew-x-12"></div>

						<div className="grid md:grid-cols-2 items-center">
							<div className="p-10 md:p-16 relative z-10">
								<span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-2 block">Spesial Idul Fitri</span>
								<h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
									Kirim Kebahagiaan, <br />
									<span className="text-yellow-400">Hampers Eksklusif</span>
								</h2>
								<p className="text-emerald-100 text-lg mb-8 max-w-md">Bingkisan cantik berisi kue kering pilihan dengan kartu ucapan personal. Cocok untuk kerabat dan rekan kerja.</p>
								<div className="flex gap-4">
									<button className="bg-yellow-500 text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition">Pesan Hampers</button>
								</div>
							</div>
							<div className="h-64 md:h-full min-h-[400px]">
								<img
									src="https://images.unsplash.com/photo-1549590143-d586bc341c4d?auto=format&fit=crop&w=800&q=80"
									alt="Hampers Lebaran"
									className="w-full h-full object-cover md:rounded-l-full border-l-8 border-yellow-500/20"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- TESTIMONIALS --- */}
			<section className="py-20 px-6 bg-orange-50">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-12">Kata Mereka Tentang KueRaya</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
								<div className="flex justify-center text-yellow-400 mb-4">
									{[...Array(5)].map((_, star) => (
										<Star key={star} size={16} fill="currentColor" />
									))}
								</div>
								<p className="text-gray-600 mb-6 italic">"Rasanya benar-benar seperti kue buatan nenek. Nastarnya lumer, selainya manis pas gak bikin eneg. Pasti pesan lagi tahun depan!"</p>
								<div className="flex items-center justify-center gap-3">
									<div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
										<img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" />
									</div>
									<div className="text-left">
										<p className="font-bold text-gray-900 text-sm">Siti Aminah</p>
										<p className="text-xs text-gray-500">Pelanggan Setia</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- FOOTER --- */}
			<footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 px-6">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-4 gap-12 mb-16">
						<div className="col-span-1 md:col-span-1">
							<div className="text-2xl font-bold mb-6 flex items-center gap-2">
								<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">K</div>
								Kue<span className="text-yellow-500">Raya</span>
							</div>
							<p className="text-gray-400 leading-relaxed mb-6">Menghadirkan kehangatan di setiap gigitan. Spesialis kue kering premium sejak 2015.</p>
							<div className="flex gap-4">
								<div className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition cursor-pointer">
									<Instagram size={20} />
								</div>
								<div className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition cursor-pointer">
									<Phone size={20} />
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-bold text-lg mb-6 text-emerald-500">Belanja</h4>
							<ul className="space-y-3 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition">
										Semua Produk
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										Paket Hampers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										Promo Spesial
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										Cara Pemesanan
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-bold text-lg mb-6 text-emerald-500">Bantuan</h4>
							<ul className="space-y-3 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition">
										Cek Resi
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										FAQ
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										Ketentuan Pengiriman
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition">
										Kontak Kami
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-bold text-lg mb-6 text-emerald-500">Toko Kami</h4>
							<ul className="space-y-4 text-gray-400">
								<li className="flex gap-3">
									<MapPin className="flex-shrink-0 text-emerald-600" size={20} />
									<span>Jl. Lebaran Bahagia No. 1445 H, Jakarta Selatan, Indonesia</span>
								</li>
								<li className="flex gap-3">
									<Phone className="flex-shrink-0 text-emerald-600" size={20} />
									<span>+62 812 3456 7890</span>
								</li>
								<li className="flex items-center gap-3">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									<span className="text-green-400">Buka • 08.00 - 17.00</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
						<p>&copy; 2026 KueRaya Indonesia. All rights reserved.</p>
						<div className="flex gap-6 mt-4 md:mt-0">
							<span>Privacy Policy</span>
							<span>Terms of Service</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
