"use client";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { totalQty } = useCart();

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

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${scrolled ? " shadow-md py-3" : "bg-transparent py-5"}`}>
			<div className="container mx-auto px-6 flex justify-between items-center">
				{/* Logo */}
				<Link href={"/"} className="flex items-center gap-2">
					<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
					<span className={`text-2xl font-bold ${scrolled ? "text-emerald-800" : "text-emerald-900"}`}>
						Kue<span className="text-yellow-500">Raya</span>
					</span>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
					<Link href="/#home" className="hover:text-emerald-600 transition">
						Beranda
					</Link>
					<Link href="/#catalog" className="hover:text-emerald-600 transition">
						Katalog
					</Link>
					<Link href="/#hampers" className="hover:text-emerald-600 transition">
						Hampers
					</Link>
					<Link href="/#contact" className="hover:text-emerald-600 transition">
						Kontak
					</Link>
				</div>

				<div className="hidden md:flex items-center space-x-4">
					<button className="p-2 hover:bg-emerald-50 rounded-full transition text-gray-600">
						<Search size={20} />
					</button>
					<Link href={"/cart"} className="relative p-2 hover:bg-emerald-50 rounded-full transition text-gray-600">
						<ShoppingCart size={20} />
						{totalQty > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{totalQty}</span>}
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<div className="md:hidden bg-slate-50 shadow-xl absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t">
					<Link href="/#home" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
						Beranda
					</Link>
					<Link href="/#catalog" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
						Katalog
					</Link>
					<Link href="/#hampers" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
						Hampers
					</Link>
					<Link href="/#contact" className="text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
						Kontak
					</Link>
				</div>
			)}
		</nav>
	);
}
