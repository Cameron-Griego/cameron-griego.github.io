import "./App.css";
import { FloatingDock } from "@/components/floatingDock/floatingDock";
import { HomeDockItems } from "@/components/floatingDock/HomeDock";
import { BackgroundGradientAnimation } from "@/components/aceternity/gradientAnimation";
import { AnimatedCursor } from "@/components/cursor/AnimatedCursor";
import Portfolio from "./Portfolio";
import usePageSize from "@/hooks/UsePageSize";

function App() {
	const { width } = usePageSize();
	return (
		<>
			{width >= 768 ? <AnimatedCursor /> : null}

			<BackgroundGradientAnimation>
				<div className="h-screen w-screen overflow-x-hidden overflow-y-auto scrollless bg-black/60">
					<Portfolio />
				</div>
			</BackgroundGradientAnimation>

			<FloatingDock
				desktopClassName="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
				mobileClassName="fixed bottom-5 right-5 z-50"
				items={HomeDockItems}
			/>
		</>
	);
}

export default App;
