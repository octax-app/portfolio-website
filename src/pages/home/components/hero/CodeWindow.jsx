import { motion } from "framer-motion";

// A stylized "code editor" card — replaces the old screenshot image with a
// crisp, theme-aware CSS/JSX visual that scales at any size.
const K = "text-[#c586c0]"; // keyword
const S = "text-[#ce9178]"; // string
const T = "text-[#4ec9b0]"; // type
const P = "text-[#9cdcfe]"; // property / name
const F = "text-[#dcdcaa]"; // function
const C = "text-accent-500"; // comment / muted

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl overflow-hidden border border-accent-700/40 bg-[#1e293b] dark:bg-accent-950 shadow-2xl shadow-black/20"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/20">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 code text-xs text-accent-400">developer.dart</span>
      </div>

      {/* Code body */}
      <pre className="code text-[12.5px] md:text-[13px] leading-relaxed p-5 overflow-x-auto text-accent-300">
        <div>
          <span className={K}>class </span>
          <span className={T}>Developer </span>
          <span>{"{"}</span>
        </div>
        <div className="pl-4">
          <span className={K}>final </span>
          <span className={T}>String </span>
          <span className={P}>name </span>
          <span>= </span>
          <span className={S}>'Haitham'</span>
          <span>;</span>
        </div>
        <div className="pl-4">
          <span className={K}>final </span>
          <span className={T}>List</span>
          <span>{"<"}</span>
          <span className={T}>String</span>
          <span>{"> "}</span>
          <span className={P}>stack </span>
          <span>= [</span>
        </div>
        <div className="pl-8">
          <span className={S}>'Flutter'</span>, <span className={S}>'Laravel'</span>,{" "}
          <span className={S}>'React'</span>,
        </div>
        <div className="pl-4">
          <span>];</span>
        </div>
        <div>&nbsp;</div>
        <div className="pl-4">
          <span className={T}>App </span>
          <span className={F}>build</span>
          <span>(</span>
          <span className={T}>Idea </span>
          <span className={P}>idea</span>
          <span>) {"=>"}</span>
        </div>
        <div className="pl-8">
          <span className={P}>idea</span>
          <span>.</span>
          <span className={F}>make</span>
          <span>(</span>
          <span className={P}>clean</span>: <span className={K}>true</span>,
        </div>
        <div className="pl-16">
          <span className={P}>elegant</span>: <span className={K}>true</span>,{" "}
          <span className={P}>efficient</span>: <span className={K}>true</span>);
        </div>
        <div>
          <span>{"}"}</span>
          <span className={C}> // ship it ✨</span>
        </div>
      </pre>
    </motion.div>
  );
}

export default CodeWindow;
