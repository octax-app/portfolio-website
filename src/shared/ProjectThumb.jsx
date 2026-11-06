import Icon from "./Icon";
import FallbackImage from "./FallbackImage";
import useIsDark from "./useIsDark";

export const shotSrc = (id, i, dark) =>
  `/static/images/work/apps/${id}/screenshot_${i}_${dark ? "dark" : "light"}.webp`;

// The coloured preview panel at the top of a catalog card.
//  - mobile apps with screenshots → two fanned phone screens
//  - "*-icon.png" images          → app icon on a clay tile
//  - first desktop gallery shot / other images → website / dashboard screenshot
//  - otherwise                     → named icon on a clay tile
function ProjectThumb({ project, height = "h-48" }) {
  const isDark = useIsDark();
  const { id, name, tone, screenshots, hasDark, icon } = project;
  const dark = hasDark && isDark;
  const shot = (project.gallery || []).find((g) => !g.device || g.device === "desktop");
  const image = shot ? shot.src : project.image;

  let content;
  if (screenshots) {
    content = (
      <div className="relative flex h-full w-full items-end justify-center gap-3 pt-6">
        <img
          src={shotSrc(id, 1, dark)}
          alt={`${name} screenshot`}
          loading="lazy"
          className="w-[34%] max-w-[120px] -rotate-6 translate-y-8 rounded-[18px] shadow-xl transition-transform duration-500 ease-spring group-hover:-rotate-3 group-hover:translate-y-5"
        />
        {screenshots > 1 && (
          <img
            src={shotSrc(id, 2, dark)}
            alt=""
            loading="lazy"
            className="w-[34%] max-w-[120px] rotate-6 translate-y-12 rounded-[18px] shadow-xl transition-transform duration-500 ease-spring group-hover:rotate-3 group-hover:translate-y-8"
          />
        )}
      </div>
    );
  } else if (image && image.includes("-icon")) {
    content = (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={`/static/images/work/${image}`}
          alt={`${name} icon`}
          loading="lazy"
          className="h-24 w-24 rounded-[28px] shadow-xl transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110"
        />
      </div>
    );
  } else if (image) {
    content = (
      <div className="flex h-full w-full items-end justify-center px-6 pt-6">
        <FallbackImage
          src={`/static/images/work/${image}`}
          alt={`${name} preview`}
          label={name}
          className="h-full w-full rounded-t-2xl object-cover object-top shadow-xl transition-transform duration-500 ease-spring group-hover:-translate-y-1.5"
          wrapperClassName="h-full w-full rounded-b-none"
        />
      </div>
    );
  } else {
    content = (
      <div className="flex h-full w-full items-center justify-center">
        <span className="clay-tone flex h-24 w-24 items-center justify-center !rounded-[28px] transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110">
          <Icon name={icon || "sparkle"} size={44} strokeWidth={2.2} />
        </span>
      </div>
    );
  }

  return (
    <div className={`tone-${tone} clay-soft relative overflow-hidden !rounded-[24px] ${height}`}>
      {/* decorative bubbles */}
      <span className="tone-bg absolute -right-6 -top-8 h-24 w-24 rounded-full opacity-20" />
      <span className="tone-bg absolute -bottom-6 left-4 h-14 w-14 rounded-full opacity-10" />
      {content}
    </div>
  );
}

export default ProjectThumb;
