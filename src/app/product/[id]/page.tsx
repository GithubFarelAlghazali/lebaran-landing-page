"use client";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { products } from "@/data";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailProduct() {
	const { id } = useParams();
	const [scrolled, setScrolled] = useState(false);

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

	const product = products.find((prod) => prod.id === Number(id));

	if (!product) {
		return (
			<>
				<Navbar />
				<div className="h-screen flex items-center justify-center">
					<h1 className="text-2xl font-bold text-gray-500">Produk tidak ditemukan :(</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="md:px-16 flex md:flex-row flex-col relative justify-between">
				<Link href="/#catalog" className={`size-12  rounded-full transition  flex justify-center items-center  left-2 md:left-10 z-10 ${scrolled ? "fixed bg-emerald-700 text-white top-20" : "absolute text-slate-900 top-14"}`}>
					<MoveLeft size={30} />
				</Link>
				<div className="md:w-1/2 p-5 mt-20 lg:mt-0">
					<img src={product.image} alt={product.name} className="w-[90%] rounded-2xl shadow-2xl -rotate-2 mx-auto aspect-square object-cover" />
				</div>
				<div className="relative p-10 md:w-1/2">
					<h1 className="md:text-5xl text-3xl font-semibold mb-5 text-emerald-900">{product.name}</h1>
					<p>{product.desc}</p>
					<div className="mt-5 md:mb-14 mb-5 *:bg-emerald-700 text-white *:px-3 *:py-2 flex gap-3 *:rounded-3xl">
						{product.tag && <span className="">{product.tag}</span>}
						{product.category && <span className="">{product.category}</span>}
					</div>
					<h2 className="md:text-5xl font-black text-3xl">{product.price}</h2>
					<div className="lg:absolute md:bottom-10 mt-5 flex md:gap-5 gap-2 *:md:p-5 *:p-3 *:rounded-2xl text-sm md:text-base">
						<button className="bg-emerald-900 text-white">Beli Sekarang</button>
						<button className="border border-emerald-900 text-slate-900">Tambah ke Keranjang</button>
					</div>
				</div>
			</main>
		</>
	);
}
