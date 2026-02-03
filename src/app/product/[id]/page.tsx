"use client";

import { useParams } from "next/navigation";
import { products } from "@/data";
import Link from "next/link";
import formatRp from "@/helper/formatRp";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import Modal from "@/components/Modal";

export default function DetailProduct() {
	const { id } = useParams();
	const { addToCart, decreaseQty, items } = useCart();
	const { showModal } = useModal();
	const thisItem = items.find((item) => item.id === Number(id));
	const product = products.find((prod) => prod.id === Number(id));
	const router = useRouter();

	const handleAddToCart = () => {
		if (product) {
			addToCart(product);
			showModal("Produk ditambahkan ke keranjang");
		}
	};

	const handleBuyNow = () => {
		if (product) {
			addToCart(product);
			showModal("Produk ditambahkan ke keranjang");
			router.push("/cart");
		}
	};

	const handleDecreaseQty = () => {
		if (product) {
			decreaseQty(product.id);
		}
	};

	const handleAddQty = () => {
		if (product) {
			addToCart(product);
		}
	};

	if (!product) {
		return (
			<>
				<div className="h-screen flex items-center justify-center">
					<h1 className="text-2xl font-bold text-gray-500">Produk tidak ditemukan :(</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<main className=" md:px-16 lg:pt-20 flex lg:flex-row flex-col relative justify-between z-0">
				<Modal />
				<div className="lg:w-1/2 p-5 mt-20 lg:mt-0">
					<img src={product.image} alt={product.name} className="w-[90%] rounded-2xl shadow-2xl -rotate-2 mx-auto aspect-square object-cover" />
				</div>
				<div className="relative p-10 lg:w-1/2">
					<h1 className="md:text-5xl text-3xl font-semibold mb-5 text-emerald-900">{product.name}</h1>
					<p>{product.desc}</p>
					<div className="mt-5 md:mb-14 mb-5 *:bg-emerald-700 text-white *:px-3 *:py-2 flex gap-3 *:rounded-3xl">
						{product.tag && <span className="">{product.tag}</span>}
						{product.category && <span className="">{product.category}</span>}
					</div>
					<h2 className="md:text-5xl font-black text-3xl">{formatRp(product.price)}</h2>
					{thisItem?.qty ? (
						<div className="lg:absolute md:bottom-10 mt-5 grid grid-cols-3 grid-rows-2 md:gap-5 gap-2 *:md:p-5 *:p-3 *:rounded-2xl text-sm md:text-base md:w-1/2 h-32 text-center *:flex *:items-center *:justify-center">
							<button className="bg-emerald-900 text-white cursor-pointer" onClick={handleDecreaseQty}>
								-
							</button>
							<button className="outline-1 outline-emerald-900">{thisItem?.qty}</button>
							<button className="bg-emerald-900 text-white cursor-pointer" onClick={handleAddQty}>
								+
							</button>
							<Link href="/cart" className="bg-emerald-800 text-white rounded-2xl col-span-3 ">
								Lihat Keranjang
							</Link>
						</div>
					) : (
						<div className="lg:absolute md:bottom-10 mt-5 flex md:gap-5 gap-2 *:md:p-5 *:p-3 *:rounded-2xl text-sm md:text-base">
							<button className="bg-emerald-900 text-white" onClick={handleBuyNow}>
								Beli Sekarang
							</button>
							<button className="border border-emerald-900 text-slate-900" onClick={handleAddToCart}>
								Tambah ke Keranjang
							</button>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
