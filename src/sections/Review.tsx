import { Star } from "lucide-react";

export default function Review() {
	return (
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
	);
}
