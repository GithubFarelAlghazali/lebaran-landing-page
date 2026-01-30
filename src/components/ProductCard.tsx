import { Heart } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ id, image, tag, name, desc, price }: { id: number; image: string; tag: any; name: string; desc: string; price: string }) {
	return (
		<Link href={`/product/${id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden flex flex-col">
			<div className="relative h-64 overflow-hidden">
				<img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
				{tag && <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>}
				<button className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full text-gray-500 hover:text-red-500 transition opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
					<Heart size={18} />
				</button>
			</div>

			<div className="p-6 flex flex-col grow">
				<div className="flex justify-between items-start mb-2">
					<h3 className="font-bold text-lg text-gray-900 line-clamp-1">{name}</h3>
				</div>
				<p className="text-gray-500 text-sm mb-4 line-clamp-2">{desc}</p>

				<div className="mt-auto flex items-center justify-between">
					<div>
						<p className="font-bold text-xl text-emerald-700">{price}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
