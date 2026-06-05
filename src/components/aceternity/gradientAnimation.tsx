// Static layered background, derived from the Infinity website's
// BackgroundGradientAnimation. The moving blobs were removed — what remains is
// the base diagonal gradient plus the fractal-noise dither (.gradient-dither)
// that prevents banding. Content renders on top at `relative z-10`.

import type React from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
	gradientBackgroundStart = "rgb(36, 48, 66)",
	gradientBackgroundEnd = "rgb(11, 18, 32)",
	children,
	className,
	containerClassName,
}: {
	gradientBackgroundStart?: string;
	gradientBackgroundEnd?: string;
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
}): React.JSX.Element => {
	useEffect(() => {
		document.body.style.setProperty(
			"--gradient-background-start",
			gradientBackgroundStart,
		);
		document.body.style.setProperty(
			"--gradient-background-end",
			gradientBackgroundEnd,
		);
	}, [gradientBackgroundStart, gradientBackgroundEnd]);

	return (
		<div
			className={cn(
				"h-screen w-screen relative overflow-hidden top-0 left-0 gradient-dither bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
				containerClassName,
			)}
		>
			<div className={cn("pointer-events-auto relative z-10", className)}>
				{children}
			</div>
		</div>
	);
};
