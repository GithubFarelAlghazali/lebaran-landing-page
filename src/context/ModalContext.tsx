"use client";
import React, { createContext, useContext, useState } from "react";

export interface ModalContextType {
	isOpen: boolean;
	modalMsg: string;
	showModal: (msg: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setOpen] = useState(false);
	const [modalMsg, setMsg] = useState("Halo!");

	const showModal = (msg: string) => {
		setMsg(msg);
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 3000);
	};

	return <ModalContext.Provider value={{ showModal, isOpen, modalMsg }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be use inside CartProvider!");
	}
	return context;
};
