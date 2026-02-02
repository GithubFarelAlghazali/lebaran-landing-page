"use client";
import { useCart } from "@/context/CartContext";
import formatRp from "@/helper/formatRp";
import Link from "next/link";

export default function CartPage() {
	const { items, totalPrice } = useCart();

	return (
		<>
			<main className="md:px-16 lg:pt-20 flex lg:flex-row flex-col relative justify-between">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-20">
					<div className="w-full">
						<h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Data Pemesan</h2>
						<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
								<input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Masukkan nama anda" />
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon / WhatsApp</label>
								<input type="tel" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="0812xxxx" />
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">Alamat Pengiriman</label>
								<textarea
									rows={4}
									className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
									placeholder="Alamat lengkap (Jalan, No. Rumah, Kecamatan...)"
								></textarea>
							</div>
						</form>
					</div>

					<div className="w-full">
						<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sticky top-28">
							{items.length > 0 ? (
								<>
									<h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Ringkasan Pesanan</h2>

									{items.map((item, i) => {
										return (
											<Link href={`/product/${item.id}`} key={i} className="flex flex-col gap-4 mb-6 max-h-100 overflow-y-auto">
												<div className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm border border-slate-200">
													<div className="h-16 w-16 bg-slate-200 rounded-md overflow-hidden shrink-0 flex items-center justify-center text-xs text-slate-400">
														<img src={item.image} alt="" />
													</div>

													<div className="flex-1">
														<h3 className="font-semibold text-slate-800">{item.name}</h3>
														<p className="text-sm text-slate-500">
															{item.qty} x {formatRp(item.price)}
														</p>
													</div>
												</div>
											</Link>
										);
									})}
									<div className="border-t pt-4">
										<div className="flex justify-between items-center mb-6">
											<span className="text-lg font-medium text-slate-600">Total Harga</span>
											<span className="text-2xl font-bold text-emerald-700">{formatRp(totalPrice)}</span>
										</div>
										<button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">Pesan Sekarang</button>
									</div>
								</>
							) : (
								<Link className="bg-white p-5 rounded-xl  outline-1 outline-black/15" href="/#catalog">
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
