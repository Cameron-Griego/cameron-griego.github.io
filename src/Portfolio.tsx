import { Github, Mail, ExternalLink } from "lucide-react";

const techColors: Record<string, string> = {
	Rust: "border-orange-500/60 text-orange-300 bg-orange-950/40 font-semibold",
	"C++": "border-sky-600/50 text-sky-300/80 bg-sky-950/30",
	TypeScript: "border-blue-500/50 text-blue-300/80 bg-blue-950/30",
	"C#": "border-purple-500/50 text-purple-300/80 bg-purple-950/30",
	WASM: "border-violet-600/50 text-violet-300/80 bg-violet-950/30",
	PostgreSQL: "border-cyan-600/50 text-cyan-300/80 bg-cyan-950/30",
	AWS: "border-amber-500/50 text-amber-300/80 bg-amber-950/30",
	React: "border-teal-500/50 text-teal-300/80 bg-teal-950/30",
	ReScript: "border-rose-500/50 text-rose-300/80 bg-rose-950/30",
};

const tagClass = (name: string, base: string) =>
	`${base} ${techColors[name] ?? "border-zinc-700 text-zinc-400 bg-zinc-800/40"}`;

const experiences = [
	{
		title: "Software Engineer",
		company: "Aero Dynamics Development",
		period: "2025 - Present",
		description: "Building safe, fast, and intricate embedded systems.",
	},
	{
		title: "Founder & CEO",
		company: "Infinity Simulations",
		period: "2024 - Present",
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
		title: "Aero Dynamics T-38",
		description:
			"High-fidelity T-38 simulation model with realistic flight dynamics and systems.",
		tech: ["C++", "Rust", "PostgreSQL", "WASM"],
		link: "https://www.infinity-simulations.com/#/aircraft",
	},
	{
		title: "Aero Dynamics DC-10",
		description:
			"Highly detailed DC-10 simulation model with accurate flight dynamics and systems.",
		tech: ["Rust", "ReScript", "PostgreSQL", "WASM"],
		link: "https://www.infinity-simulations.com/#/aircraft",
	},
	{
		title: "TacLink",
		description:
			"Full fledged multiplayer combat simulation built on Infinity's custom physics and networking engine. Full integration with MSFS and X-Plane simultaneously.",
		tech: ["Rust", "ReScript", "WASM"],
		link: "https://www.infinity-simulations.com/",
	},
];

const skills = [
	"Rust",
	"C++",
	"TypeScript",
	"C#",
	"WASM",
	"PostgreSQL",
	"AWS",
	"React",
	"ReScript",
];

export default function Portfolio() {
	return (
		<div className="min-h-screen bg-[#080809] text-zinc-200 font-sans antialiased">
			{/* Background glows */}
			<div
				className="fixed top-0 left-0 w-200 h-200 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 65%)",
				}}
			/>
			<div
				className="fixed bottom-0 right-0 w-200 h-200 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
				}}
			/>
			<div
				className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
				style={{
					background:
						"radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
				}}
			/>

			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/60 bg-[#080809]/80 backdrop-blur-md">
				<div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
					<span className="text-sm font-semibold tracking-widest uppercase bg-linear-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
						Cameron
					</span>
					<div className="flex gap-8 text-sm text-zinc-500">
						{["about", "experience", "projects", "contact"].map((item) => (
							<a
								key={item}
								href={`#${item}`}
								className="hover:text-zinc-200 transition-colors duration-200 capitalize"
							>
								{item}
							</a>
						))}
					</div>
				</div>
			</nav>

			{/* Hero */}
			<section className="min-h-screen flex items-center px-6 pt-24">
				<div className="max-w-5xl mx-auto w-full">
					<div className="mb-8">
						<div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-zinc-700 mb-8">
							<img
								src="https://github.com/Cameron-Griego/cameron-griego.github.io/blob/master/public/hero.jpg?raw=true"
								alt="Cameron"
								className="w-full h-full object-cover"
							/>
						</div>
						<p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">
							Software Engineer & Pilot
						</p>
						<h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
							<span className="bg-linear-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
								Cameron
							</span>
						</h1>
						<p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
							Building low-level systems and simulation software for aviation.
							Airline Transport Pilot · CFI/CFII/MEI · E170/E175 Type Ratings.
						</p>
					</div>

					<div className="flex gap-3 mt-8">
						<a
							href="https://github.com/camerongr"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200"
						>
							<Github size={16} />
							GitHub
						</a>
						<a
							href="mailto:portfolio.chief702@passmail.net"
							className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 text-zinc-400 text-sm hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200"
						>
							<Mail size={16} />
							Email
						</a>
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" className="py-24 px-6">
				<div className="max-w-5xl mx-auto">
					<p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">
						About
					</p>
					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-2xl font-semibold text-zinc-100 mb-4">
								Background
							</h2>
							<p className="text-zinc-400 leading-relaxed">
								Full-time pilot and flight instructor holding an Airline
								Transport Pilot License, E170/E175 type ratings, and all
								instructor ratings (CFI, CFII, MEI). Holds a BS in Computer
								Science from ASU and is currently pursuing an MS while building
								advanced software for the aviation industry. Passionate about
								creating fast and safe software that pushes the limits of
								aviation training using Rust and C++.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-semibold text-zinc-100 mb-4">
								Stack
							</h2>
							<div className="flex flex-wrap gap-2">
								{skills.map((s) => (
									<span
										key={s}
										className={tagClass(
											s,
											"px-3 py-1 text-xs rounded-md border",
										)}
									>
										{s}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="max-w-5xl mx-auto px-6">
				<div className="border-t border-zinc-800" />
			</div>

			{/* Experience */}
			<section id="experience" className="py-24 px-6">
				<div className="max-w-5xl mx-auto">
					<p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-10">
						Experience
					</p>
					<div className="space-y-1">
						{experiences.map((exp) => (
							<div
								key={exp.company}
								className="grid md:grid-cols-[1fr_auto] gap-4 py-6 border-b border-zinc-800/60 last:border-0 group"
							>
								<div>
									<h3 className="text-zinc-100 font-semibold text-lg mb-1">
										{exp.title}
										<span className="text-blue-400/70 font-normal">
											{" "}
											· {exp.company}
										</span>
									</h3>
									<p className="text-zinc-500 text-sm leading-relaxed">
										{exp.description}
									</p>
								</div>
								<span className="text-zinc-600 text-sm whitespace-nowrap mt-1">
									{exp.period}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="max-w-5xl mx-auto px-6">
				<div className="border-t border-zinc-800" />
			</div>

			{/* Projects */}
			<section id="projects" className="py-24 px-6">
				<div className="max-w-5xl mx-auto">
					<p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-10">
						Projects
					</p>
					<div className="grid sm:grid-cols-2 gap-6">
						{projects.map((project) => (
							<a
								key={project.title}
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="group block p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-blue-700/60 hover:bg-blue-950/20 transition-all duration-200"
							>
								<div className="flex items-start justify-between mb-3">
									<h3 className="text-zinc-100 font-semibold">
										{project.title}
									</h3>
									<ExternalLink
										size={14}
										className="text-zinc-600 group-hover:text-blue-400 transition-colors mt-0.5 shrink-0 ml-3"
									/>
								</div>
								<p className="text-zinc-500 text-sm leading-relaxed mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((t) => (
										<span
											key={t}
											className={tagClass(
												t,
												"px-2 py-0.5 text-xs rounded border",
											)}
										>
											{t}
										</span>
									))}
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="max-w-5xl mx-auto px-6">
				<div className="border-t border-zinc-800" />
			</div>

			{/* Contact */}
			<section id="contact" className="py-24 px-6">
				<div className="max-w-5xl mx-auto">
					<p className="text-blue-500 text-xs font-medium tracking-widest uppercase mb-4">
						Contact
					</p>
					<h2 className="text-3xl font-semibold text-zinc-100 mb-4">
						Let's work together
					</h2>
					<p className="text-zinc-500 mb-8 max-w-md">
						Open to new opportunities, collaborations, and interesting projects.
					</p>
					<a
						href="mailto:portfolio.chief702@passmail.net"
						className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200"
					>
						<Mail size={16} />
						Get in touch
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-zinc-800/60 py-8 px-6">
				<div className="max-w-5xl mx-auto flex justify-between items-center text-zinc-600 text-xs">
					<span>© 2026 Cameron</span>
					<span>Built with React & Tailwind</span>
				</div>
			</footer>
		</div>
	);
}
