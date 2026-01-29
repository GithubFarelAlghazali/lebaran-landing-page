export default function Features() {
	return (
		<section className="py-12 bg-white">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{[
						{ title: "Freshly Baked", icon: "🥖", desc: "Dibuat h-3 pengiriman" },
						{ title: "Bahan Premium", icon: "🧀", desc: "Butter wisman & keju edam" },
						{ title: "Pengiriman Aman", icon: "📦", desc: "Bubble wrap berlapis" },
						{ title: "Garansi Rasa", icon: "💖", desc: "Tidak enak, uang kembali" },
					].map((feature, idx) => (
						<div key={idx} className="flex flex-col items-center text-center p-4 hover:bg-orange-50 rounded-xl transition">
							<div className="text-4xl mb-3">{feature.icon}</div>
							<h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
							<p className="text-sm text-gray-500">{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
