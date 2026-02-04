import { Star } from "lucide-react";
import * as motion from "motion/react-client";

export default function Review() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<section className="py-20 px-6 bg-orange-50">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold text-gray-900 mb-12">Kata Mereka Tentang KueRaya</h2>
				<motion.div variants={containerVariants} viewport={{ amount: 0.5, once: true }} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
					{[1, 2, 3].map((i) => (
						<motion.div variants={itemVariants} key={i} className="bg-white p-8 rounded-2xl shadow-sm ">
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
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
