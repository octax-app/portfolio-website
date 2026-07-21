// Renders a store button for each available link. A button only appears when
// its corresponding URL is provided in the config, so apps can list any
// combination of App Store / Google Play / Huawei AppGallery.

function AppleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.7 2.2-3.99 2.3-4.06-1.25-1.83-3.2-2.08-3.9-2.11-1.66-.17-3.24.98-4.08.98-.84 0-2.14-.96-3.52-.93-1.81.03-3.48 1.05-4.41 2.67-1.88 3.26-.48 8.09 1.35 10.74.9 1.3 1.97 2.75 3.38 2.7 1.36-.05 1.87-.87 3.51-.87 1.64 0 2.1.87 3.53.84 1.46-.02 2.38-1.32 3.27-2.63 1.03-1.51 1.45-2.97 1.48-3.05-.03-.01-2.84-1.09-2.87-4.32M14.38 4.15c.74-.9 1.24-2.15 1.1-3.4-1.07.04-2.36.71-3.13 1.61-.69.8-1.29 2.07-1.13 3.29 1.19.09 2.42-.6 3.16-1.5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626-2.499-2.499 2.5-2.483zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
    </svg>
  );
}

function HuaweiIcon() {
  // Simplified "app tiles" glyph — recognizable as an app gallery/store.
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" className="fill-current" aria-hidden="true">
      <path d="M10 4H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9 0h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-9 9H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm9 0h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
    </svg>
  );
}

function StoreButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-accent-700 dark:bg-primary text-white text-sm font-semibold px-4 py-1.5 hover:opacity-90 transition-opacity"
    >
      {icon}
      {label}
    </a>
  );
}

function StoreLinks({ appStore, playStore, huaweiStore }) {
  if (!appStore && !playStore && !huaweiStore) return null;
  return (
    <>
      {appStore && <StoreButton href={appStore} icon={<AppleIcon />} label="App Store" />}
      {playStore && <StoreButton href={playStore} icon={<PlayIcon />} label="Google Play" />}
      {huaweiStore && (
        <StoreButton href={huaweiStore} icon={<HuaweiIcon />} label="AppGallery" />
      )}
    </>
  );
}

export default StoreLinks;
