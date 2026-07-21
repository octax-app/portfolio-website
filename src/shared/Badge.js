// Small tech / tag chip.
function Badge({ children, tone = "default" }) {
  const tones = {
    default:
      "bg-accent-200 dark:bg-accent-700/60 text-accent-600 dark:text-accent-300",
    primary:
      "bg-blue-500/10 dark:bg-primary/20 text-blue-600 dark:text-primary",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-semibold px-3 py-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export default Badge;
