"use client";
import { useModal } from "@/context/ModalContext";

export default function Modal() {
	const { modalMsg, isOpen } = useModal();

	if (isOpen) {
		return (
			<div className="z-50 fixed bottom-56 left-1/2 -translate-x-1/2">
				<h2 className="p-4 bg-yellow-500 text-yellow-950 rounded-xl outline-1 z\"> {modalMsg}</h2>
			</div>
		);
	}
}
