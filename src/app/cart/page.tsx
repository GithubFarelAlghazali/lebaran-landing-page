"use client";
import { useCart } from "@/context/CartContext";
import formatRp from "@/helper/formatRp";
import Link from "next/link";
import greetingTime from "@/helper/greetingTime";
import { CircleMinus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "@/components/Modal";
import { useModal } from "@/context/ModalContext";

export default function CartPage() {
	const { items, totalPrice, totalQty, clearCart, removeItem } = useCart();
	const { showModal } = useModal();

	const number = "6283831071092";

	const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const nama = form.get("name") as string;
		const alamat = form.get("alamat") as string;

		const message = `${greetingTime()} kak, kenalin aku ${nama} mau pesan produk dari KueRaya dengan rincian berikut:\n-------------- ${items.map((item) => `\n- ${item.name} - ${item.qty} buah`)}\n--------------\nTotal jumlah barang: ${totalQty} buah\nTotal harga: ${formatRp(totalPrice)}(belum termasuk ongkir)\nKirim ke alamat ini: ${alamat}\nAtas perhatiannya terimakasih kak`;
		const formattedNumber = number.replace(/\D/g, "");

		const encodedMessage = encodeURIComponent(message);

		const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

		window.open(url, "_blank");
	};

	return (
		<>
			<main className="px-5 lg:pt-20 pb-10 flex lg:flex-row flex-col relative justify-between">
				<Modal />
				<div className="flex lg:flex-row flex-col gap-10 max-w-6xl mx-auto mt-20">
					<div className="md:w-1/2 order-2 md:order-1">
						<h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Data Pemesan</h2>
						<form onSubmit={(e) => handleCreateOrder(e)} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
								<input required type="text" id="name" name="name" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Masukkan nama anda" />
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">Alamat Pengiriman</label>
								<textarea
									required
									rows={4}
									id="alamat"
									name="alamat"
									className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
									placeholder="Alamat lengkap (Jalan, No. Rumah, Kecamatan...)"
								></textarea>
							</div>
							<button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md cursor-pointer flex justify-center items-center gap-2">
								Pesan via WhatsApp
								<FaWhatsapp size={20} />
							</button>
						</form>
					</div>

					<div className="md:w-1/2 order-1 md:order-2">
						<div className="bg-slate-50 md:p-6 rounded-xl border border-slate-100 flex justify-center flex-col">
							{items.length > 0 ? (
								<>
									<h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Ringkasan Pesanan</h2>

									{items.map((item, i) => {
										return (
											<div key={i} className="flex flex-col gap-4 mb-6 max-h-100 overflow-y-auto">
												<div className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm border border-slate-200">
													<div className="h-16 w-16 bg-slate-200 rounded-md overflow-hidden shrink-0 flex items-center justify-center text-xs text-slate-400">
														<img src={item.image} alt="" />
													</div>

													<Link href={`/product/${item.id}`} className="flex-1">
														<h3 className="font-semibold text-slate-800">{item.name}</h3>
														<p className="text-sm text-slate-500">
															{item.qty} x {formatRp(item.price)}
														</p>
													</Link>
													<button
														onClick={() => {
															removeItem(item.id);
															showModal("Produk dihapus dari keranjang");
														}}
													>
														<CircleMinus />
													</button>
												</div>
											</div>
										);
									})}
									<div className="border-t pt-4">
										<div className="flex justify-between items-center mb-6">
											<span className="text-lg font-medium text-slate-600">Total Harga(belum termasuk ongkir)</span>
											<span className="text-2xl font-bold text-emerald-700">{formatRp(totalPrice)}</span>
										</div>
										<button className="-mt-3 p-5 bg-emerald-700 cursor-pointer text-white font-semibold rounded-md hover:bg-emerald-800 " onClick={clearCart}>
											Kosongkan Keranjang
										</button>
									</div>
								</>
							) : (
								<Link className="w-full p-2 md:p-5 rounded-xl  outline-1 outline-black/15" href="/#catalog ">
									Keranjang masih kosong, yuk cek katalog
								</Link>
							)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
