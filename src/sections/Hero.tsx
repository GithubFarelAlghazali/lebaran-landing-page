import Link from "next/link";

export default function Hero() {
	return (
		<main className="w-full h-screen relative overflow-hidden flex justify-center items-center flex-col bg-slate-100">
			<img src="/products/nastar.webp" alt="Nastar" className="rounded-xl shadow-xl -rotate-6 w-40 absolute lg:bottom-10 lg:top-auto top-20 left-10" />
			<img src="/products/kastangel.webp" alt="Kastengel" className="rotate-6 rounded-xl shadow-xl w-40 absolute lg:top-10 top-20 right-10" />

			<h1 className="text-center font-semibold lg:text-6xl text-xl z-50">
				Rayakan manisnya kebersamaan <br /> dengan lezatnya kue lebaran
			</h1>
			<Link href="" className="bg-amber-800 py-2 px-8 rounded-xl mt-14 text-white font-semibold">
				Cek Produk Kami
			</Link>
		</main>
	);
}
