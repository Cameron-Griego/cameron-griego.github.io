import { useState, useEffect } from "react";
import {
	Github,
	Mail,
	Briefcase,
	GraduationCap,
	Rocket,
	ExternalLink,
} from "lucide-react";

export default function Portfolio() {
	const [_scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const skills = [
		{ name: "Rust", level: 95 },
		{ name: "C++", level: 90 },
		{ name: "Typescript", level: 85 },
		{ name: "C#", level: 92 },
	];

	const experiences = [
		{
			title: "Software Engineer",
			company: "Aero Dynamics Development",
			period: "2025 - Present",
			description: "Building intricate embedded systems, and WASM graphics.",
		},
		{
			title: "Founder & CEO",
			company: "Infinity Simulations",
			period: "2025 - Present",
			description:
				"Building tooling and simulation software for the aviation industry.",
		},
		{
			title: "Lead Frontend Engineer",
			company: "Ouroboros Jets",
			period: "2022 - 2025",
			description:
				"Developed high-performance web applications for aviation clients, optimizing user experience and performance.",
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
			title: "Ouroboros Jets E-Series Aircraft",
			description:
				"Simulation of the Embraer E-Jet series with detailed systems and performance modeling.",
			tech: ["Typescript", "C++", "Rust", "PostgreSQL", "WASM"],
			link: "#",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
			{/* Animated background gradient */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ top: "20%", left: "10%", animationDuration: "7s" }}
				/>
				<div
					className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ top: "40%", right: "10%", animationDuration: "9s" }}
				/>
				<div
					className="absolute w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
					style={{ bottom: "20%", left: "30%", animationDuration: "11s" }}
				/>
			</div>

			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/60 border-b border-gray-800/50">
				<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
					<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
						Cameron Griego
					</div>
					<div className="flex gap-6">
						{["About", "Experience", "Projects", "Contact"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="hover:text-cyan-400 transition-colors duration-300"
							>
								{item}
							</a>
						))}
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id="hero"
				className="min-h-screen flex items-center justify-center relative px-6"
			>
				<div className="max-w-4xl text-center z-10">
					<div className="mb-6">
						<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 p-1 mb-4 overflow-hidden">
							<img
								src="/public/hero.jpg"
								alt="Cameron Griego"
								className="w-full h-full object-cover rounded-full border-4 border-gray-900"
								style={{ minHeight: "100%", minWidth: "100%" }}
							/>
						</div>
					</div>

					<h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 text-transparent bg-clip-text leading-loose">
						Cameron Griego
					</h1>
					<h2 className="text-3xl font-bold mb-2 text-white">
						{" "}
						Software Engineer & Full-Time Pilot
					</h2>

					<div className="flex gap-4 justify-center mb-12">
						<a
							href="https://github.com/tacotakedown"
							rel="noopener noreferrer"
							target="_blank"
							className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
						>
							<Github size={24} />
						</a>
						<a
							href="mailto:portfolio.chief702@passmail.net"
							className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
						>
							<Mail size={24} />
						</a>
					</div>
					<div className="flex gap-6 justify-center text-sm">
						<div className="flex items-center gap-2">
							<GraduationCap className="text-cyan-400" size={20} />
							<span>BS Computer Science</span>
						</div>
						<div className="flex items-center gap-2">
							<GraduationCap className="text-purple-400" size={20} />
							<span>MS Computer Science (in progress)</span>
						</div>
						<div className="flex items-center gap-2">
							<Briefcase className="text-purple-400" size={20} />
							<span>
								Airline Transport Pilot License, CFI/CFII/MEI, E170/E175 Type
								Ratings
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
						About Me
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
							<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
								<Briefcase className="text-cyan-400" />
								Professional
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Full-time pilot and flight instructor holding an Airline
								Transport Pilot License (ATPL), E170/E175 type ratings, and all
								instructor ratings (CFI, CFII, MEI). Holds a BS in Computer
								Science and is currently pursuing an MS in Computer Science
								while building advanced software for the aviation industry.
							</p>
						</div>
						<div className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
							<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
								<Rocket className="text-purple-400" />
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
						<h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">
							Technical Skills
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							{skills.map((skill) => (
								<div
									key={skill.name}
									className="backdrop-blur-sm bg-gray-800/20 rounded-xl p-6 border border-gray-700/30"
								>
									<div className="flex justify-between mb-3">
										<span className="font-semibold">{skill.name}</span>
										<span className="text-cyan-400">{skill.level}%</span>
									</div>
									<div className="w-full bg-gray-700/50 rounded-full h-2">
										<div
											className="bg-gradient-to-r from-blue-500 to-yellow-400 h-2 rounded-full transition-all duration-1000"
											style={{ width: `${skill.level}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
						Experience
					</h2>
					<div className="space-y-6">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
							>
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-2xl font-bold text-cyan-400">
											{exp.title}
										</h3>
										<p className="text-xl text-gray-300">{exp.company}</p>
									</div>
									<span className="text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
										{exp.period}
									</span>
								</div>
								<p className="text-gray-300">{exp.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 px-6 relative">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project, index) => (
							<div
								key={index}
								className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
							>
								<h3 className="text-xl font-bold mb-3 flex items-center justify-between">
									{project.title}
									<ExternalLink
										size={20}
										className="text-gray-400 group-hover:text-cyan-400 transition-colors"
									/>
								</h3>
								<p className="text-gray-300 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-400"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-6 relative">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
						Let's Build Something Amazing
					</h2>
					<p className="text-xl text-gray-300 mb-12">
						Open to new opportunities, collaborations, and interesting projects.
					</p>
					<a
						href="mailto:portfolio.chief702@passmail.net"
						className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
					>
						Get In Touch
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-6 border-t border-gray-800/50 backdrop-blur-sm bg-gray-900/60">
				<div className="max-w-6xl mx-auto text-center text-gray-400">
					<p>© 2025 All rights reserved. Built with React & Tailwind CSS</p>
				</div>
			</footer>
		</div>
	);
}