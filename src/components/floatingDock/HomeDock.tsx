import { IoIosHome } from "react-icons/io";
import {
	FaGithub,
	FaEnvelope,
	FaUser,
	FaBriefcase,
	FaLaptopCode,
} from "react-icons/fa";

import type { FloatingDockItems } from "./floatingDock";

const glow = { filter: "drop-shadow(0px 0px 7px rgba(16,185,129,0.7))" };
const cls = "text-emerald-400 w-full h-full";

export const HomeDockItems: FloatingDockItems[] = [
	{
		title: "Home",
		icon: <IoIosHome className={cls} style={glow} />,
		href: "hero",
		external: false,
	},
	{
		title: "About",
		icon: <FaUser className={cls} style={glow} />,
		href: "about",
		external: false,
	},
	{
		title: "Experience",
		icon: <FaBriefcase className={cls} style={glow} />,
		href: "experience",
		external: false,
	},
	{
		title: "Projects",
		icon: <FaLaptopCode className={cls} style={glow} />,
		href: "projects",
		external: false,
	},
	{
		title: "GitHub",
		icon: <FaGithub className={cls} style={glow} />,
		href: "https://github.com/CameronGr",
		external: true,
	},
	{
		title: "Email",
		icon: <FaEnvelope className={cls} style={glow} />,
		href: "mailto:portfolio.chief702@passmail.net",
		external: true,
	},
];
