import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Minimal custom cursor: a solid inner dot that tracks the pointer exactly and
 * a hollow outer ring that lags behind via a spring. The ring grows when the
 * pointer is over anything marked `.clickable` (or a link/button).
 */
export const AnimatedCursor = () => {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const ringX = useSpring(x, { mass: 0.1, stiffness: 150, damping: 12 });
	const ringY = useSpring(y, { mass: 0.1, stiffness: 150, damping: 12 });
	const [active, setActive] = useState(false);

	useEffect(() => {
		const move = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const target = e.target as HTMLElement | null;
			setActive(
				!!target?.closest("a, button, .clickable, [role='button']"),
			);
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, [x, y]);

	const color = "var(--cursor-color)";

	return (
		<>
			<motion.div
				className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
				style={{
					x,
					y,
					width: 8,
					height: 8,
					backgroundColor: color,
					translateX: "-50%",
					translateY: "-50%",
				}}
			/>
			<motion.div
				className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
				animate={{ scale: active ? 2 : 1 }}
				transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 12 }}
				style={{
					x: ringX,
					y: ringY,
					width: 35,
					height: 35,
					border: `3px solid ${color}`,
					translateX: "-50%",
					translateY: "-50%",
				}}
			/>
		</>
	);
};
