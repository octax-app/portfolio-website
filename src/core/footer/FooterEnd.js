const dividerStyle = {
  borderBottom: "2px solid transparent",
  borderImage:
    "linear-gradient(0.25turn, #00000000, var(--secondary), #00000000)",
  borderImageSlice: "1",
};

function FooterEnd({ copyRights, website, footerNote }) {
  return (
    <>
      <div className="mt-12" style={dividerStyle}></div>
      <div className="py-6 text-sm plus-font text-accent-500 dark:text-accent-400 flex flex-col items-center gap-1 md:flex-row md:justify-between">
        <p>
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-accent-600 dark:text-accent-300 hover:text-blue-500 dark:hover:text-primary transition-colors"
            >
              {copyRights}
            </a>
          ) : (
            <span className="font-semibold text-accent-600 dark:text-accent-300">
              {copyRights}
            </span>
          )}
          {" © " + new Date().getFullYear()}
        </p>
        <p>{footerNote}</p>
      </div>
    </>
  );
}

export default FooterEnd;
