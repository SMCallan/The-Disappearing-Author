"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const promptText = `You are an expert subject matter expert and senior British technical writer. Your directive is to execute the user's task with flawless factual accuracy while writing in authentic, natural UK English prose.

You are bound by the following strict rules:

── BANNED WORDS (NEGATIVE PROMPTING) ──
You are strictly forbidden from using the following words or their derivatives:
delve, tapestry, multifaceted, nuanced, landscape, robust, crucial, pivotal, leverage,
realm, seamless, underscore, showcase, vibrant, testament, foster, navigate, catalyst,
embark, align with, serves as, marks the, boasts.

── BANNED PHRASES (HEDGING / PADDING) ──
Never use:
"It is worth noting", "It is important to note", "In today's digital age",
"It is important to understand", "At the end of the day",
"Furthermore", "Moreover", "Additionally", "In conclusion", "Ultimately", "In summary".

── STRUCTURAL RULES ──
- Break the Rule of Three. Never list exactly three items in a row.
  Use one hyper-specific example, or a list of four to five items.
- Create dramatic sentence length variation. Mix fragments (2-5 words) with long,
  winding sentences (25+ words). Vary paragraph lengths. Use single-line paragraphs
  for rhetorical emphasis.
- Do not use contrastive parallelisms: no "Not just X, but also Y" or
  "It is not merely A; it is B" constructions.
- Never end with a summary paragraph. Do not "wrap things up". End abruptly
  or on an unresolved implication.
- Use natural pronouns rather than cycling through synonyms (elegant variation).

── LANGUAGE AND VOICE ──
- Write in authentic UK English. Correct spellings: synthesise, programme, behaviour,
  organise, colour, recognise, licence (noun), practice (noun).
- Use basic copulatives naturally. Write "is" and "are", not "serves as" or "marks the".
- Use standard contractions freely (it's, there's, don't, won't).
- Start sentences with conjunctions occasionally (And, But, Because).
- Occasionally use a UK English idiom — e.g. "snowed under", "storm in a teacup",
  "takes the biscuit" — but sparingly. One per piece at most.
- Do not over-bold text. Do not use vertical bullet lists with bolded inline headers.
  Integrate information into flowing prose.

── THINGS TO NEVER DO ──
- Never begin or end with conversational bleed-through:
  no "I hope this helps!", no "As an AI...", no "Certainly!", no "Of course!".
- Never hallucinate URLs, DOIs, ISBNs, statistics, or citations.
  If you cite a book, include real, verifiable page numbers or do not cite it.
- Never include markdown artifacts, tracking parameters, or system tags.
- Never mention your training, knowledge cutoff, or limitations unprompted.

── NOW: process the user's request following these exact rules. ──`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* ── MASTHEAD ── */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center border-b border-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10 max-w-3xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-zinc-800"></span>
            Prompt Engineering Reference
            <span className="h-px w-8 bg-zinc-800"></span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
            The <span className="italic font-serif text-zinc-400">Disappearing</span> Author
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            A practitioner's guide to stripping AI linguistic fingerprints — with a master system prompt ready to copy straight into any chat interface.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* ── NAV PILLS ── */}
        <nav className="flex flex-wrap gap-3 mb-24 pb-12 border-b border-zinc-900">
          {[
            { id: "why", label: "Why It Matters" },
            { id: "banned-words", label: "Banned Words" },
            { id: "hedging", label: "Hedging Phrases" },
            { id: "structure", label: "Structure" },
            { id: "idioms", label: "UK Idioms" },
            { id: "strategies", label: "Strategies" },
            { id: "master-prompt", label: "↳ Master Prompt" },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-zinc-800 rounded-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-32 pb-32">
          
          {/* ── THE PROBLEM ── */}
          <section id="why" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">The Problem</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">Why AI Text Sounds Like AI Text</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>Language models are trained to minimise loss across billions of parameters. The result is prose that is grammatically clean but statistically predictable — a narrow, measurably repetitive pattern that detection systems now identify with high accuracy.</p>
              <p>Two metrics expose this most clearly. <strong className="text-zinc-200 font-medium">Perplexity</strong> measures how predictable a word sequence is; AI defaults to low perplexity because it always reaches for the most probable next token. <strong className="text-zinc-200 font-medium">Burstiness</strong> measures sentence-length variation; humans mix two-word fragments with sprawling 40-word constructions, while AI settles into uniform, mid-length blocks.</p>
              
              <Card className="bg-zinc-900/30 border-l-2 border-l-zinc-500 border-y-0 border-r-0 rounded-none p-8 my-10 relative overflow-hidden">
                <div className="absolute top-0 left-4 text-9xl font-serif text-zinc-800/40 leading-none select-none">"</div>
                <p className="relative z-10 text-xl text-zinc-300 italic font-serif">
                  The distinction between human and artificial text is no longer evaluated through the presence of grammatical errors — it is through the absence of human imperfection.
                </p>
              </Card>
              
              <p>The guide below is split into reference tables (what to ban, what to inject) and a single master system prompt you can copy straight into any AI chat interface. Paste it before your actual request and the output shifts noticeably.</p>
            </div>
          </section>

          {/* ── BANNED WORDS ── */}
          <section id="banned-words" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">Lexical Markers</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">The Banned Words List</h2>
            <p className="text-zinc-400 mb-8 text-lg">These words appear in AI output at rates ranging from 10× to 48× their natural frequency. Every one of them should be struck from your prompt's output vocabulary.</p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {["delve", "tapestry", "multifaceted", "nuanced", "landscape", "robust", "crucial", "pivotal", "leverage", "realm", "seamless", "underscore", "showcase", "vibrant", "testament", "foster", "navigate", "align with", "catalyst", "embark", "serves as", "marks the", "boasts", "streamline"].map((word) => (
                <Badge key={word} variant="outline" className="bg-[#1a0f0f] border-red-900/30 text-red-400/80 line-through hover:bg-red-950/50 hover:text-red-300 hover:no-underline transition-all py-1.5 px-3 font-mono text-xs font-normal">
                  {word}
                </Badge>
              ))}
            </div>

            <div className="overflow-x-auto border border-zinc-800 rounded-lg mb-12 bg-zinc-950/50">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-800 font-mono text-xs uppercase text-zinc-500 bg-zinc-900/50">
                  <tr>
                    <th className="p-4 font-medium">Banned Term</th>
                    <th className="p-4 font-medium">Type</th>
                    <th className="p-4 font-medium text-red-400/80">Freq</th>
                    <th className="p-4 font-medium">Human Alternatives</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50 text-zinc-400">
                  {[
                    ["delve", "Verb", "48×", "dig into, examine, look at, investigate"],
                    ["tapestry", "Noun (metaphor)", "35×", "mix, combination, collection"],
                    ["multifaceted", "Adjective", "28×", "complex, layered, varied"],
                    ["nuanced", "Adjective", "22×", "subtle, detailed, fine-grained"],
                    ["landscape", "Noun (metaphor)", "19×", "field, space, world, situation"],
                    ["pivotal", "Adjective", "16×", "key, critical, decisive"],
                    ["leverage", "Verb", "13×", "use, apply, take advantage of"],
                    ["robust", "Adjective", "12×", "strong, solid, reliable"],
                    ["streamline", "Verb", "11×", "simplify, speed up, cut down"],
                  ].map(([term, type, freq, alt]) => (
                    <tr key={term} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="p-4 font-mono text-zinc-300">{term}</td>
                      <td className="p-4">{type}</td>
                      <td className="p-4 font-mono text-red-400/80">{freq}</td>
                      <td className="p-4">{alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-serif text-white mb-4 italic">Artificial Copulatives</h3>
            <p className="text-zinc-400 text-lg">AI avoids simple "is" and "are" in favour of elevated substitutes. Instruct it to stop. The phrasing "serves as," "marks the," and "boasts" should be replaced with basic English.</p>
          </section>

          {/* ── HEDGING ── */}
          <section id="hedging" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">Algorithmic Padding</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">Hedging Phrases to Eliminate</h2>
            <p className="text-zinc-400 mb-8 text-lg">RLHF training conditions models to soften every assertion. The result is filler that signals artificial caution rather than human thought.</p>

            <div className="overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-950/50">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-zinc-800 font-mono text-xs uppercase text-zinc-500 bg-zinc-900/50">
                  <tr>
                    <th className="p-4 font-medium">Phrase</th>
                    <th className="p-4 font-medium text-red-400/80 whitespace-nowrap">Freq vs. Human</th>
                    <th className="p-4 font-medium">What It Actually Does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50 text-zinc-400">
                  {[
                    ["It's worth noting that", "31×", "Padding to introduce a secondary point without committing to it"],
                    ["It's important to note", "27×", "Simulates authority whilst avoiding any definitive claim"],
                    ["In today's digital age", "24×", "Vacuous temporal anchor — context-free and meaningless"],
                    ["It is important to understand", "20×", "Patronising framing for a point the reader already grasps"],
                    ["At the end of the day", "12×", "Cliché deployed to force a tidy summarisation"],
                    ["Furthermore / Moreover", "15×", "Mechanical connectives that replace natural prose flow"],
                    ["In conclusion / Ultimately", "—", "The 'neat bow' conclusion — a dead giveaway of AI generation"],
                  ].map(([phrase, freq, desc]) => (
                    <tr key={phrase} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="p-4 font-mono text-zinc-300">"{phrase}"</td>
                      <td className="p-4 font-mono text-red-400/80">{freq}</td>
                      <td className="p-4">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── STRUCTURE ── */}
          <section id="structure" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">Structural Tells</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">Breaking AI Symmetry</h2>
            <p className="text-zinc-400 mb-10 text-lg">Beyond individual words, AI text is identifiable by its <em>architecture</em>. These patterns need to be explicitly broken.</p>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-serif text-white mb-3 italic">The Rule of Three</h3>
                <p className="text-zinc-400">AI defaults to tripartite lists — "efficient, cost-effective, and innovative." Instruct it to provide one hyper-specific detail instead, or an asymmetric list of four or five items.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-3 italic">Sentence Burstiness</h3>
                <p className="text-zinc-400">Humans write like this. Short. Then something longer comes along, something with a subordinate clause or two... AI clusters around a mean length. You must mandate variation.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-3 italic">Contrastive Parallelism</h3>
                <p className="text-zinc-400">The structure "Not just X, but also Y" is an AI shortcut for simulated nuance. It performs analysis without executing it. Ban it explicitly.</p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-3 italic">Elegant Variation</h3>
                <p className="text-zinc-400">Because models carry an internal repetition penalty, they cycle awkwardly through synonyms. Instruct the model to use natural pronouns instead.</p>
              </div>
            </div>
          </section>

          {/* ── UK IDIOMS ── */}
          <section id="idioms" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">Authenticity Markers</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">UK English Idioms to Inject</h2>
            <p className="text-zinc-400 mb-8 text-lg">Sparingly used, these phrases ground the text in a physical, cultural reality that AI output lacks. The operative word is <em>sparingly</em> — one or two per piece, never clustered.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["Takes the biscuit", "Something is particularly bad or absurd. Good for expressing genuine frustration."],
                ["Snowed under", "Overwhelmed with work. Simulates authentic professional pressure."],
                ["Storm in a teacup", "Making a large issue out of something minor. Naturally dismisses overblown concerns."],
                ["Chucked it down", "Rained heavily. An environmental anchor that places the writer in a physical UK reality."],
                ["Bodge job", "A makeshift, poor-quality repair or solution. Excellent for technical writing."],
                ["Couldn't care less", "Total indifference. The correct British form — not the American 'could care less'."],
              ].map(([idiom, def]) => (
                <Card key={idiom} className="bg-zinc-900/20 border-zinc-800 p-6 flex flex-col justify-center">
                  <span className="font-serif italic font-bold text-lg text-white mb-2">"{idiom}"</span>
                  <span className="text-sm text-zinc-400 leading-relaxed">{def}</span>
                </Card>
              ))}
            </div>
          </section>

          {/* ── STRATEGIES ── */}
          <section id="strategies" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">Prompt Engineering</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">Four Core Strategies</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                ["1", "Negative Prompting", "Explicitly forbid the model's highest-probability pathways. Banning its preferred vocabulary forces it into lower-probability token sequences."],
                ["2", "Asymmetry Mandate", "Instruct the model to break the Rule of Three, vary paragraph length dramatically, and include single-line paragraphs."],
                ["3", "Mild Rule-Breaking", "Permit contractions. Allow sentence-initial conjunctions. Loosen grammatical rigidity. Imperfection is the feature."],
                ["4", "Factuality First", "Stylistic humanisation must not introduce hallucination. Have the model gather real data first, then apply the style filter."],
              ].map(([num, title, desc]) => (
                <Card key={num} className="bg-zinc-950 border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                  <div className="absolute -top-4 -right-2 text-8xl font-serif font-black text-zinc-900/50 select-none transition-transform group-hover:scale-110">{num}</div>
                  <h4 className="relative z-10 font-serif text-xl font-bold text-white mb-3">{title}</h4>
                  <p className="relative z-10 text-sm text-zinc-400 leading-relaxed">{desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* ── THE MASTER PROMPT ── */}
          <section id="master-prompt" className="scroll-mt-32">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500 block mb-4">The Masterwork</span>
            <h2 className="text-3xl font-semibold mb-8 pb-4 border-b border-zinc-900 text-white font-serif">The Master System Prompt</h2>
            <p className="text-zinc-400 mb-8 text-lg">Copy the entire block below and paste it at the start of any conversation with an AI. It systematically disables the most common AI tells, mandates structural asymmetry, enforces UK English, and demands factual rigour.</p>

            <Card className="bg-[#050505] border-zinc-800 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                <span className="font-mono text-xs text-zinc-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                  system_prompt.txt
                </span>
                <Button 
                  onClick={copyToClipboard} 
                  variant="outline" 
                  size="sm"
                  className={`h-8 text-xs font-mono transition-all duration-300 ${
                    copied ? "bg-green-950 border-green-900 text-green-400 hover:bg-green-950 hover:text-green-400" : "bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {copied ? <><Check className="w-3.5 h-3.5 mr-2" /> Copied</> : <><Copy className="w-3.5 h-3.5 mr-2" /> Copy to Clipboard</>}
                </Button>
              </div>
              
              <div className="p-6 md:p-8 overflow-x-auto text-sm">
                <pre className="font-mono text-zinc-300 leading-relaxed">
                  You are an expert subject matter expert and senior British technical writer. Your directive is to execute the user's task with flawless factual accuracy while writing in authentic, natural UK English prose.
                  <br /><br />
                  You are bound by the following strict rules:
                  <br /><br />
                  <span className="text-blue-400/80 font-semibold">── BANNED WORDS (NEGATIVE PROMPTING) ──</span><br />
                  <span className="text-red-400/80">You are strictly forbidden from using the following words or their derivatives:<br />
                  delve, tapestry, multifaceted, nuanced, landscape, robust, crucial, pivotal, leverage,<br />
                  realm, seamless, underscore, showcase, vibrant, testament, foster, navigate, catalyst,<br />
                  embark, align with, serves as, marks the, boasts.</span>
                  <br /><br />
                  <span className="text-blue-400/80 font-semibold">── BANNED PHRASES (HEDGING / PADDING) ──</span><br />
                  <span className="text-red-400/80">Never use:<br />
                  "It is worth noting", "It is important to note", "In today's digital age",<br />
                  "It is important to understand", "At the end of the day",<br />
                  "Furthermore", "Moreover", "Additionally", "In conclusion", "Ultimately", "In summary".</span>
                  <br /><br />
                  <span className="text-blue-400/80 font-semibold">── STRUCTURAL RULES ──</span><br />
                  - Break the Rule of Three. Never list exactly three items in a row.<br />
                  &nbsp;&nbsp;Use one hyper-specific example, or a list of four to five items.<br />
                  - Create dramatic sentence length variation. Mix fragments (2-5 words) with long,<br />
                  &nbsp;&nbsp;winding sentences (25+ words). Vary paragraph lengths. Use single-line paragraphs<br />
                  &nbsp;&nbsp;for rhetorical emphasis.<br />
                  - Do not use contrastive parallelisms: no "Not just X, but also Y" or<br />
                  &nbsp;&nbsp;"It is not merely A; it is B" constructions.<br />
                  - Never end with a summary paragraph. Do not "wrap things up". End abruptly<br />
                  &nbsp;&nbsp;or on an unresolved implication.<br />
                  - Use natural pronouns rather than cycling through synonyms (elegant variation).
                  <br /><br />
                  <span className="text-blue-400/80 font-semibold">── LANGUAGE AND VOICE ──</span><br />
                  - Write in authentic UK English. Correct spellings: synthesise, programme, behaviour,<br />
                  &nbsp;&nbsp;organise, colour, recognise, licence (noun), practice (noun).<br />
                  - Use basic copulatives naturally. Write "is" and "are", not "serves as" or "marks the".<br />
                  - Use standard contractions freely (it's, there's, don't, won't).<br />
                  - Start sentences with conjunctions occasionally (And, But, Because).<br />
                  - Occasionally use a UK English idiom — e.g. "snowed under", "storm in a teacup",<br />
                  &nbsp;&nbsp;"takes the biscuit" — but sparingly. One per piece at most.<br />
                  - Do not over-bold text. Do not use vertical bullet lists with bolded inline headers.<br />
                  &nbsp;&nbsp;Integrate information into flowing prose.
                  <br /><br />
                  <span className="text-blue-400/80 font-semibold">── THINGS TO NEVER DO ──</span><br />
                  - Never begin or end with conversational bleed-through:<br />
                  &nbsp;&nbsp;no "I hope this helps!", no "As an AI...", no "Certainly!", no "Of course!".<br />
                  - Never hallucinate URLs, DOIs, ISBNs, statistics, or citations.<br />
                  &nbsp;&nbsp;If you cite a book, include real, verifiable page numbers or do not cite it.<br />
                  - Never include markdown artifacts, tracking parameters, or system tags.<br />
                  - Never mention your training, knowledge cutoff, or limitations unprompted.
                  <br /><br />
                  <span className="text-zinc-500">── NOW: process the user's request following these exact rules. ──</span>
                </pre>
              </div>
            </Card>
            
            <p className="mt-6 text-sm text-zinc-500 font-mono">
              * The prompt is intentionally directive. Think of it as friction engineering.
            </p>
          </section>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-600 font-mono text-xs uppercase tracking-widest">
        <p>The Disappearing Author · UK English Edition</p>
      </footer>
    </main>
  );
}