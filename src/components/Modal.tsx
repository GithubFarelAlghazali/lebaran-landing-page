"use client";
import { useModal } from "@/context/ModalContext";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function Modal() {
	const { modalMsg, isOpen } = useModal();

	return (
		<div className="z-50 fixed bottom-56 left-1/2 -translate-x-1/2">
			{isOpen && (
				<AnimatePresence>
					<motion.h2
						initial={{ y: "10%", opacity: 0 }}
						exit={{ y: "10%", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeIn", type: "spring", bounce: 0.5 }}
						className="text-sm p-4 shadow-2xl bg-emerald-100 text-emerald-950 rounded-xl outline-1 z\"
					>
						{modalMsg}
					</motion.h2>
				</AnimatePresence>
			)}
		</div>
	);
}
