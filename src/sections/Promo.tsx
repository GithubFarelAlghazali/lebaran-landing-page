export default function Promo() {
	return (
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
						<div className="h-64 md:h-full min-h-100">
							<img src="https://images.unsplash.com/photo-1549590143-d586bc341c4d?auto=format&fit=crop&w=800&q=80" alt="Hampers Lebaran" className="w-full h-full object-cover md:rounded-l-full border-l-8 border-yellow-500/20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
