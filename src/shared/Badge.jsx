// Small tech / tag chip. Pass a `tone` for a coloured chip.
function Badge({ children, tone }) {
  if (tone) {
    return (
      <span
        className={`tone-${tone} clay-soft inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tone-text`}
      >
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-sunken px-3 py-1 text-xs font-semibold text-muted">
      {children}
    </span>
  );
}

export default Badge;
