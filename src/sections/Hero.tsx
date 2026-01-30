import { Star, ChevronRight } from "lucide-react";

export default function Hero() {
	return (
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
							<img src="/bg.jfif" alt="Kue Kering Lebaran" className="rounded-2xl w-full h-[400px] object-cover" />
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
	);
}

// https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80
