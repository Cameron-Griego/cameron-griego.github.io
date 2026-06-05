import { useEffect, useState } from "react";
import {
	FaGithub,
	FaEnvelope,
	FaBriefcase,
	FaRocket,
	FaGraduationCap,
	FaExternalLinkAlt,
} from "react-icons/fa";
import { TextHoverEffect } from "@/components/textHover/TextHover";
import { CodeBlock, type Lang } from "@/components/codeBlock/CodeBlock";
import usePageSize from "@/hooks/UsePageSize";

const skills: { file: string; lang: Lang; code: string }[] = [
	{
		file: "skills.rs",
		lang: "rust",
		code: [
			"fn cameron() {",
			'    let experience_level = "Expert";',
			'    let uses: [&str; 3] = ["systems", "WASM", "tooling"];',
			'    println!("{experience_level} - {}", uses.join(", "));',
			"}",
		].join("\n"),
	},
	{
		file: "skills.cpp",
		lang: "cpp",
		code: [
			"void cameron() {",
			'    auto experience_level = "Expert";',
			'    std::vector<std::string> uses = {"engines", "avionics", "WASM"};',
			'    std::cout << experience_level << " - " << join(uses, ", ");',
			"}",
		].join("\n"),
	},
	{
		file: "Skills.cs",
		lang: "cs",
		code: [
			"void Cameron() {",
			'    var experience_level = "Advanced";',
			'    var uses = ["desktop", "tooling", ".NET"];',
			'    Console.WriteLine($"{experience_level} - {string.Join(", ", uses)}");',
			"}",
		].join("\n"),
	},
	{
		file: "skills.ts",
		lang: "ts",
		code: [
			"function cameron(): void {",
			'    const experience_level = "Advanced";',
			'    const uses = ["web", "React", "Tauri"];',
			'    console.log(`${experience_level} - ${uses.join(", ")}`);',
			"}",
		].join("\n"),
	},
];

const experiences = [
	{
		title: "Software Engineer",
		company: "Aero Dynamics Development",
		period: "2025 - Present",
		description:
			"Building intricate embedded systems, tooling, and simulations.",
	},
	{
		title: "Founder & CEO",
		company: "Infinity Simulations",
		period: "2025 - Present",
		description:
			"Building tooling and simulation software for the aviation industry.",
	},
];

const projects = [
	{
		title: "Infinity Ecosystem",
		description:
			"Comprehensive suite for creating and distributing paid flight simulation content efficiently and securely.",
		tech: ["Rust", "C++", "WASM", "AWS", "PostgreSQL", "React"],
		link: "https://www.infinity-simulations.com/#/about",
	},
	{
		title: "Aero Dynamics T-38 Aircraft",
		description:
			"High fidelity T-38 simulation model with realistic flight dynamics and systems.",
		tech: ["C++", "Rust", "PostgreSQL", "WASM"],
		link: "https://www.infinity-simulations.com/#/aircraft",
	},
	{
		title: "CrosshairZ",
		description:
			"Crosshair overlay program that runs inside the Xbox Game Bar, Supports custom drawn crosshairs, community uploads, animations, and more.",
		tech: ["Rust", "C#"],
		link: "https://github.com/CameronGr/CrosshairZ",
	},
];

// Faint translucent fill so the blurred background shows through the cards
// (glass) instead of each card carrying its own teal gradient.
const cardBg = {
	background: "rgba(255, 255, 255, 0.04)",
};

export default function Portfolio() {
	const size = usePageSize();
	const [intro, setIntro] = useState("hide-description");

	useEffect(() => {
		const t = setTimeout(() => setIntro("text-appear"), 1000);
		return () => clearTimeout(t);
	}, []);

export default function Portfolio() {
	return (
		<div className="w-full text-teal-50">
			{/* Hero */}
			<section
				id="hero"
				className="min-h-screen flex flex-col items-center justify-center relative px-6"
			>
				<div className="w-full max-w-5xl aspect-[3/1] flex items-center justify-center">
					{size.width > 768 ? (
						<TextHoverEffect wrap={false} text="Cameron" />
					) : (
						<TextHoverEffect wrap text="Cameron" />
					)}
				</div>

				<h2
					className={`text-2xl md:text-3xl font-bold text-center mt-2 mb-6 ${intro}`}
				>
					<span className="text-teal-400">Software Engineer</span>{" "}
					<span className="text-gray-300">& Full-Time Pilot</span>
				</h2>

				<div className={`flex gap-4 justify-center mb-10 ${intro}`}>
					<a
						href="https://github.com/CameronGr"
						rel="noopener noreferrer"
						target="_blank"
						className="clickable p-3 rounded-full border border-teal-500/40 bg-teal-900/20 hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-300 hover:scale-110"
						style={cardBg}
					>
						<FaGithub size={22} className="text-teal-300" />
					</a>
					<a
						href="mailto:portfolio.chief702@passmail.net"
						className="clickable p-3 rounded-full border border-teal-500/40 bg-teal-900/20 hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-300 hover:scale-110"
						style={cardBg}
					>
						<FaEnvelope size={22} className="text-teal-300" />
					</a>
				</div>

				<div
					className={`flex flex-wrap gap-x-6 gap-y-3 justify-center text-sm max-w-3xl text-center ${intro}`}
				>
					<div className="flex items-center gap-2">
						<FaGraduationCap className="text-teal-400" size={18} />
						<span>BS Computer Science</span>
					</div>
					<div className="flex items-center gap-2">
						<FaGraduationCap className="text-emerald-400" size={18} />
						<span>MS Computer Science (in progress)</span>
					</div>
					<div className="flex items-center gap-2">
						<FaBriefcase className="text-emerald-400" size={18} />
						<span>
							Airline Transport Pilot License, CFI/CFII/MEI, E170/E175 Type
							Ratings
						</span>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
						About Me
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div
							className="rounded-2xl p-8 border border-teal-500/40 backdrop-blur-md hover:border-teal-400 transition-all duration-300"
							style={cardBg}
						>
							<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
								<FaBriefcase className="text-teal-400" />
								Professional
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Full-time pilot and flight instructor holding an Airline
								Transport Pilot License, E170/E175 type ratings, and all
								instructor ratings (CFI, CFII, MEI). Holds a BS in Computer
								Science from ASU and is currently pursuing an MS while building
								advanced software for the aviation industry. Passionate about
								creating fast and safe software that pushes the limits of
								aviation training using Rust and C++.
							</p>
						</div>
						<div
							className="rounded-2xl p-8 border border-teal-500/40 backdrop-blur-md hover:border-emerald-400 transition-all duration-300"
							style={cardBg}
						>
							<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
								<FaRocket className="text-emerald-400" />
								Technical
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Experienced software engineer with a passion for aviation
								technology. Skilled in low-level programming, simulation, and
								building tools that empower pilots and aviation professionals.
							</p>
						</div>
					</div>

					{/* Skills */}
					<div className="mt-16">
						<h3 className="text-3xl font-bold mb-8 text-center text-emerald-400">
							Technical Skills
						</h3>
						<div className="grid sm:grid-cols-2 gap-6">
							{skills.map((skill) => (
								<div
									key={skill.file}
									className="group rounded-xl border border-teal-500/30 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-teal-400 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10"
									style={cardBg}
								>
									{/* editor chrome */}
									<div className="flex items-center gap-2 px-4 py-2.5 bg-black/40 border-b border-teal-800/40">
										<span className="w-3 h-3 rounded-full bg-red-400/70" />
										<span className="w-3 h-3 rounded-full bg-yellow-400/70" />
										<span className="w-3 h-3 rounded-full bg-green-400/70" />
										<span className="ml-2 text-xs text-teal-400/70 font-mono">
											{skill.file}
										</span>
									</div>
									<CodeBlock code={skill.code} lang={skill.lang} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Experience */}
			<section id="experience" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
						Experience
					</h2>
					<div className="space-y-6">
						{experiences.map((exp) => (
							<div
								key={exp.title + exp.company}
								className="rounded-2xl p-8 border border-teal-500/40 backdrop-blur-md hover:border-teal-400 transition-all duration-300 hover:scale-[1.02]"
								style={cardBg}
							>
								<div className="flex flex-wrap justify-between items-start gap-3 mb-4">
									<div>
										<h3 className="text-2xl font-bold text-teal-400">
											{exp.title}
										</h3>
										<p className="text-xl text-gray-300">{exp.company}</p>
									</div>
									<span className="text-teal-200 bg-teal-900/40 border border-teal-700/50 px-4 py-2 rounded-full text-sm">
										{exp.period}
									</span>
								</div>
								<p className="text-gray-300">{exp.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section id="projects" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
							<a
								key={project.title}
								href={project.link}
								target={project.link === "#" ? undefined : "_blank"}
								rel="noopener noreferrer"
								className="clickable group rounded-2xl p-6 border border-teal-500/40 backdrop-blur-md hover:border-emerald-400 transition-all duration-300 hover:scale-[1.02] block"
								style={cardBg}
							>
								<h3 className="text-xl font-bold mb-3 flex items-center justify-between text-teal-300">
									{project.title}
									<FaExternalLinkAlt
										size={16}
										className="text-gray-400 group-hover:text-teal-400 transition-colors"
									/>
								</div>
								<p className="text-zinc-500 text-sm leading-relaxed mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((t) => (
										<span
											key={tech}
											className="px-3 py-1 bg-teal-900/40 border border-teal-700/50 rounded-full text-sm text-teal-300"
										>
											{t}
										</span>
									))}
								</div>
							</a>
							</a>
						))}
					</div>
				</div>
			</section>

			<footer className="py-8 px-6 border-t border-teal-800/50 backdrop-blur-sm">
				<div className="max-w-6xl mx-auto text-center text-gray-400">
					<p>© 2025 All rights reserved. Built with React & Tailwind CSS</p>
				</div>
			</footer>

			{/* bottom padding so content clears the floating dock */}
			<div className="h-24" />
		</div>
	);
}

