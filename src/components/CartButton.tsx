"use client";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function CartButton() {
	const { totalQty } = useCart();
	const isCartPage = usePathname() === "/cart";

	return (
		<Link href={isCartPage ? "/" : "/cart"} className="bg-emerald-900 text-white size-12 flex justify-center items-center rounded-full fixed bottom-5 right-5 md:hidden z-50">
			{!isCartPage ? (
				<>
					<ShoppingCart size={20} />
					{totalQty > 0 && <span className="absolute size-8 bg-red-500 flex justify-center items-center rounded-full -top-2 -right-2">{totalQty}</span>}
				</>
			) : (
				<X size={20} />
			)}
		</Link>
	);
}
