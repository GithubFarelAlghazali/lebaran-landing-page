import Link from "next/link";
import Image from "next/image";

export default function Recomended() {
	return (
		<section className="py-20 px-10">
			<h2 className="text-2xl font-semibold">Produk Unggulan</h2>
			<ul>
				<li>
					<Link href="">
						<Image src={"/products/nastar.webp"} alt="Nastar" width={100} height={100} />
					</Link>
				</li>
			</ul>
		</section>
	);
}
