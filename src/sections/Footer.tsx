import { Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
	return (
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
	);
}
