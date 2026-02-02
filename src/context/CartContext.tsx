"use client";

import { useState, createContext, ReactNode, useMemo, useContext } from "react";

export interface CartItemType {
	id: number;
	image: string;
	name: string;
	price: number;
	qty: number;
}

export interface CartContextType {
	items: CartItemType[];
	totalPrice: number;
	totalQty: number;
	addToCart: (item: Omit<CartItemType, "qty">) => void;
	removeItem: (id: number) => void;
	decreaseQty: (id: number) => void;
	clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }): ReactNode => {
	const [items, setItems] = useState<CartItemType[]>([]);

	const addToCart = (product: Omit<CartItemType, "qty">) => {
		console.log("start addToCart");
		setItems((prevItems) => {
			console.log("checking existing item");
			const isExist = prevItems.find((item) => item.id === product.id);

			if (isExist) {
				return prevItems.map((item) => {
					console.log("status: change old item qty");
					return item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
				});
			} else {
				console.log("status: add new item to cart");
				return [...prevItems, { ...product, qty: 1 }];
			}
		});
	};

	const decreaseQty = (id: number) => {
		setItems((prevItems) => {
			const existingProduct = prevItems.find((item) => item.id === id);

			if (existingProduct?.qty === 1) {
				return prevItems.filter((item) => item.id !== id);
			}
			return prevItems.map((item) => {
				return item.id === id ? { ...item, qty: item.qty - 1 } : item;
			});
		});
	};

	const removeItem = (id: number) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id !== id);
		});
	};

	const clearCart = () => {
		setItems([]);
	};

	const { totalPrice, totalQty } = useMemo(() => {
		return items.reduce(
			(acc, item) => ({
				totalPrice: acc.totalPrice + item.price * item.qty,
				totalQty: acc.totalQty + item.qty,
			}),
			{ totalPrice: 0, totalQty: 0 },
		);
	}, [items]);

	return <CartContext.Provider value={{ items, totalPrice, totalQty, addToCart, removeItem, decreaseQty, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be use inside CartProvider!");
	}
	return context;
};
