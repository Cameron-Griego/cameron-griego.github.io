import { useEffect, useRef, type ReactNode } from "react";

const GITHUB = "https://github.com/CameronGr";
const EMAIL = "portfolio.chief702@passmail.net";

const facts: { label: string; values: string[] }[] = [
	{
		label: "education",
		values: [
			"BS Computer Science — Arizona State University",
			"MS Computer Science — in progress",
		],
	},

	{
		label: "focus",
		values: [
			"Systems programming",
			"Simulation & avionics",
			"Developer tooling",
			"Code quality & maintainability",
		],
	},
];

const projects: {
	name: string;
	year: string;
	description: string;
	tech: string[];
	link: string;
	flagship?: boolean;
}[] = [
	{
		name: "aero dynamics dc-10",
		year: "2026",
		description:
			"Full-depth DC-10 systems and flight model — written entirely in Rust, compiled to WASM. No C++ anywhere in the aircraft. The most complete simulation of a DC-10 in any flight simulator ever.",
		tech: ["Rust", "WASM", "SQL"],
		link: "https://www.infinity-simulations.com/#/aircraft",
		flagship: true,
	},
	{
		name: "kivro",
		year: "2026",
		description:
			"Secrets manager that keeps credentials in the OS keyring and injects them into a process on demand — a drop-in replacement for .env files. A committed manifest declares what a project needs; sharing happens through age-encrypted bundles instead of pasted plaintext.",
		tech: ["Rust", "age", "CLI", "Keyring"],
		link: "https://kivro.xyz/",
	},
	{
		name: "infinity ecosystem",
		year: "2025",
		description:
			"Suite for creating and distributing paid flight simulation content efficiently and securely — the platform the rest of the work ships on.",
		tech: ["Rust", "C++", "WASM", "AWS", "PostgreSQL", "React"],
		link: "https://www.infinity-simulations.com/#/about",
		flagship: true,
	},
	{
		name: "aero dynamics t-38",
		year: "2025",
		description:
			"High fidelity T-38 simulation model with realistic flight dynamics and systems.",
		tech: ["C++", "Rust", "WASM", "PostgreSQL"],
		link: "https://www.infinity-simulations.com/#/aircraft",
	},
	{
		name: "crosshairz",
		year: "2024",
		description:
			"Crosshair overlay that runs inside the Xbox Game Bar. Custom drawn crosshairs, community uploads, and animation support.",
		tech: ["Rust", "C#"],
		link: "https://github.com/CameronGr/CrosshairZ",
	},
];

const experience: {
	role: string;
	company: string;
	period: string;
	description: string;
}[] = [
	{
		role: "Software Engineer",
		company: "Aero Dynamics Development",
		period: "2025 — present",
		description:
			"Building intricate embedded systems, tooling, and simulations.",
	},
	{
		role: "Founder & CEO",
		company: "Infinity Simulations",
		period: "2025 — present",
		description:
			"Building tooling and simulation software for the aviation industry.",
	},
];

const stack: {
	group: string;
	items: { name: string; level?: string; areas?: string; daily?: boolean }[];
}[] = [
	{
		group: "languages",
		items: [
			{
				name: "rust",
				level: "expert",
				areas: "systems, wasm, tooling",
				daily: true,
			},
			{
				name: "c++",
				level: "expert",
				areas: "engines, avionics, wasm",
				daily: true,
			},
			{ name: "c#", level: "advanced", areas: "desktop, tooling, .net" },
			{ name: "typescript", level: "advanced", areas: "web, react, tauri" },
		],
	},
	{
		group: "domains",
		items: [
			{ name: "embedded systems" },
			{ name: "flight simulation" },
			{ name: "avionics" },
			{ name: "developer tooling" },
		],
	},
	{
		group: "infra",
		items: [{ name: "aws" }, { name: "postgresql" }, { name: "wasm" }],
	},
];

const nav = [
	{ id: "about", label: "about" },
	{ id: "work", label: "work" },
	{ id: "experience", label: "experience" },
	{ id: "stack", label: "stack" },
	{ id: "contact", label: "contact" },
];

function useReveal<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const root = ref.current;
		if (!root) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("in");
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
		);

		root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
			observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return ref;
}

function Section({
	id,
	index,
	title,
	children,
}: {
	id: string;
	index: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<section id={id} className="reveal border-t border-line py-20">
			<h2 className="mb-10 flex items-center gap-4 text-xs tracking-[0.25em] text-muted uppercase">
				<span className="text-accent">{index}</span>
				<span>{title}</span>
				<span className="h-px flex-1 bg-line" />
			</h2>
			{children}
		</section>
	);
}

function StackTree() {
	return (
		<div className="-mx-6 overflow-x-auto px-6">
			<div className="min-w-max text-xs leading-[1.45] whitespace-pre sm:text-sm">
				<p className="mb-3 text-dim">
					<span className="text-accent">$</span> tree ~/stack
				</p>
				{stack.map((group, g) => {
					const lastGroup = g === stack.length - 1;
					const label = (item: (typeof group.items)[number]) =>
						item.name + (item.daily ? "*" : "");
					const width =
						Math.max(...group.items.map((i) => label(i).length)) + 3;

					return (
						<div key={group.group}>
							<p>
								<span className="text-line-2">
									{lastGroup ? "└── " : "├── "}
								</span>
								<span className="text-muted">{group.group}/</span>
							</p>
							{group.items.map((item, i) => (
								<p key={item.name}>
									<span className="text-line-2">
										{(lastGroup ? "    " : "│   ") +
											(i === group.items.length - 1 ? "└── " : "├── ")}
									</span>
									<span className={item.daily ? "text-accent" : "text-fg"}>
										{item.areas ? label(item).padEnd(width) : label(item)}
									</span>
									{item.level && (
										<span className="text-dim">{item.level.padEnd(11)}</span>
									)}
									{item.areas && (
										<span className="text-muted">{item.areas}</span>
									)}
								</p>
							))}
						</div>
					);
				})}
				<p className="mt-3 text-xs text-dim">
					<span className="text-line-2"># </span>
					<span className="text-accent">*</span> daily driver
				</p>
			</div>
		</div>
	);
}

function Tech({ items }: { items: string[] }) {
	return (
		<p className="mt-3 text-xs text-dim">
			{items.map((t, i) => (
				<span key={t}>
					{i > 0 && <span className="px-2 text-line-2">·</span>}
					{t.toLowerCase()}
				</span>
			))}
		</p>
	);
}

export default function Portfolio() {
	const ref = useReveal<HTMLDivElement>();

	return (
		<div ref={ref} className="scanlines relative">
			<header className="sticky top-0 z-20 border-b border-line bg-ink/95">
				<div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
					<a
						href="#top"
						className="text-sm text-fg transition-colors hover:text-accent"
					>
						<span className="text-accent">~</span>/cameron
					</a>
					<nav className="hidden gap-6 text-xs text-muted sm:flex">
						{nav.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="transition-colors hover:text-accent"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</header>

			<main className="mx-auto max-w-3xl px-6">
				{/* Hero */}
				<section
					id="top"
					className="flex min-h-[78vh] flex-col justify-center py-24"
				>
					<p className="mb-6 text-xs tracking-[0.25em] text-dim uppercase">
						portfolio / 2026
					</p>
					<h1 className="text-4xl font-medium tracking-tight text-fg sm:text-6xl">
						Cameron
						<span className="caret ml-1 text-accent">▌</span>
					</h1>
					<p className="mt-4 text-sm text-muted sm:text-base">
						software engineer
						<span className="px-2 text-line-2">·</span>
						pilot & flight instructor
					</p>
					<p className="mt-8 max-w-xl leading-relaxed text-muted">
						I build systems software — simulation, avionics, and developer
						tooling — mostly in Rust and C++. Full-time pilot and flight
						instructor writing software that progresses the industry.
					</p>
					<div className="mt-10 flex gap-6 text-sm">
						<a
							href={GITHUB}
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent transition-colors hover:text-fg"
						>
							[github]
						</a>
						<a
							href={`mailto:${EMAIL}`}
							className="text-accent transition-colors hover:text-fg"
						>
							[email]
						</a>
					</div>
				</section>

				{/* About */}
				<Section id="about" index="01" title="about">
					<dl className="space-y-6">
						{facts.map((fact) => (
							<div
								key={fact.label}
								className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
							>
								<dt className="text-xs tracking-widest text-dim uppercase sm:pt-1">
									{fact.label}
								</dt>
								<dd className="space-y-1">
									{fact.values.map((value) => (
										<p key={value} className="text-fg">
											{value}
										</p>
									))}
								</dd>
							</div>
						))}
					</dl>
				</Section>

				{/* Work */}
				<Section id="work" index="02" title="work">
					<ul>
						{projects.map((project, i) => (
							<li key={project.name}>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`group block py-8 ${
										i > 0 ? "border-t border-line" : "pt-0"
									}`}
								>
									<div className="flex items-baseline justify-between gap-4">
										<h3 className="text-lg text-fg transition-colors group-hover:text-accent">
											{project.name}
											<span className="ml-2 inline-block text-sm text-dim transition-all group-hover:translate-x-1 group-hover:text-accent">
												↗
											</span>
										</h3>
										<span className="shrink-0 text-xs text-dim">
											{project.flagship && (
												<>
													<span className="tracking-widest text-accent uppercase">
														flagship
													</span>
													<span className="px-2 text-line-2">·</span>
												</>
											)}
											{project.year}
										</span>
									</div>
									<p className="mt-2 max-w-2xl leading-relaxed text-muted">
										{project.description}
									</p>
									<Tech items={project.tech} />
								</a>
							</li>
						))}
					</ul>
					<p className="mt-8 border-t border-line pt-6 text-xs text-dim">
						<span className="text-line-2"># </span>
						<span className="tracking-widest text-accent uppercase">
							flagship
						</span>{" "}
						— my most significant work, projects that best represent my skills
						and interests.
					</p>
				</Section>

				{/* Experience */}
				<Section id="experience" index="03" title="experience">
					<ul>
						{experience.map((job, i) => (
							<li
								key={job.role + job.company}
								className={i > 0 ? "mt-8 border-t border-line pt-8" : ""}
							>
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="text-lg text-fg">{job.role}</h3>
									<span className="shrink-0 text-xs text-dim">
										{job.period}
									</span>
								</div>
								<p className="mt-1 text-sm text-accent">{job.company}</p>
								<p className="mt-2 leading-relaxed text-muted">
									{job.description}
								</p>
							</li>
						))}
					</ul>
				</Section>

				{/* Stack */}
				<Section id="stack" index="04" title="stack">
					<StackTree />
				</Section>

				{/* Contact */}
				<Section id="contact" index="05" title="contact">
					<ul className="space-y-3">
						<li className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6">
							<span className="text-xs tracking-widest text-dim uppercase sm:pt-1">
								email
							</span>
							<a
								href={`mailto:${EMAIL}`}
								className="text-fg transition-colors hover:text-accent"
							>
								{EMAIL}
							</a>
						</li>
						<li className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6">
							<span className="text-xs tracking-widest text-dim uppercase sm:pt-1">
								github
							</span>
							<a
								href={GITHUB}
								target="_blank"
								rel="noopener noreferrer"
								className="text-fg transition-colors hover:text-accent"
							>
								github.com/CameronGr
							</a>
						</li>
					</ul>
				</Section>

				<footer className="border-t border-line py-10 text-xs text-dim">
					<p>
						© 2026 cameron
						<span className="px-2 text-line-2">·</span>
						react + tailwind
					</p>
				</footer>
			</main>
		</div>
	);
}
