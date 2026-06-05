import type React from "react";
import { Fragment } from "react";

export type Lang = "rust" | "cpp" | "cs" | "ts";

// Per-language keyword sets — kept small, just what the snippets use.
const KEYWORDS: Record<Lang, string[]> = {
	rust: ["fn", "let", "mut", "const", "pub", "struct", "impl", "use", "return", "match", "for", "in", "if", "else", "as", "move"],
	cpp: ["void", "auto", "int", "return", "const", "class", "struct", "namespace", "using", "for", "if", "else", "new", "std"],
	cs: ["void", "var", "return", "public", "private", "class", "static", "using", "new", "string", "for", "if", "else", "null", "true", "false"],
	ts: ["function", "const", "let", "var", "return", "void", "string", "number", "boolean", "interface", "type", "for", "if", "else", "import", "export", "new", "null", "undefined", "true", "false"],
};

// One pass: comments, strings, numbers, identifiers (incl. macros), whitespace,
// punctuation. Identifiers are classified after the fact.
const TOKEN_RE =
	/(\/\/[^\n]*)|(`[^`]*`|"[^"]*"|'[^']*')|(\b\d+\.?\d*\b)|([A-Za-z_]\w*!?)|(\s+)|([^\sA-Za-z0-9_]+)/g;

export function CodeBlock({ code, lang }: { code: string; lang: Lang }) {
	const keywords = new Set(KEYWORDS[lang]);
	const nodes: React.ReactNode[] = [];
	let key = 0;
	let m: RegExpExecArray | null;
	TOKEN_RE.lastIndex = 0;

	while ((m = TOKEN_RE.exec(code)) !== null) {
		const [full, comment, str, num, ident, ws] = m;
		if (ws) {
			nodes.push(<Fragment key={key++}>{full}</Fragment>);
			continue;
		}
		let cls = "text-teal-200/70"; // punctuation default
		if (comment) cls = "text-gray-500 italic";
		else if (str) cls = "text-emerald-300";
		else if (num) cls = "text-amber-300";
		else if (ident) {
			if (ident.endsWith("!")) cls = "text-cyan-300";
			else if (keywords.has(ident)) cls = "text-teal-400";
			else {
				let i = TOKEN_RE.lastIndex;
				while (i < code.length && /\s/.test(code[i])) i++;
				cls = code[i] === "(" ? "text-cyan-300" : "text-emerald-100/90";
			}
		}
		nodes.push(
			<span key={key++} className={cls}>
				{full}
			</span>,
		);
	}

	return (
		<pre className="px-4 py-3 font-mono text-[13px] leading-relaxed overflow-x-auto scrollless">
			<code>{nodes}</code>
		</pre>
	);
}
