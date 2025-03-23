const style = {
  borderBottom: "2px solid transparent",
  borderImage: "linear-gradient(0.25turn, #00000000, var(--secondary), #00000000)",
  borderImageSlice: "1",
}

function FooterEnd({ copyRights, footerNote }) {
  return (
    <>
      <div className="mt-10" style={style}></div>
      <div className="my-5 text-md plus-font text-accent-500 flex flex-col items-center md:items-start gap-1 md:flex-row justify-between">
        <p>{copyRights + " ©" + new Date().getFullYear() + " "}</p>
        <p>{footerNote}</p>
      </div>
    </>
  );
}

export default FooterEnd;