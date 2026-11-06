import { Link } from "react-router-dom";

import Logo, { Wordmark } from "../logo/Logo";
import { Container } from "../../shared/Section";
import { GithubGlyph, XGlyph } from "../../shared/Icon";
import { App as Config } from "../../config/AppConfig";

const top = () => window.scrollTo({ top: 0, left: 0 });

function Footer() {
  const products = Config.Catalog.filter((p) => p.kind === "platform");
  // One link per public repo (a project with a separate iOS repo gets two).
  const openSource = Config.Catalog.filter((p) => p.openSource === "public" && p.links?.repo).flatMap((p) =>
    p.links.repoIos
      ? [
          { id: p.id, name: p.name, href: p.links.repo },
          { id: `${p.id}-ios`, name: `${p.name} for iOS`, href: p.links.repoIos.href },
        ]
      : [{ id: p.id, name: p.name, href: p.links.repo }],
  );

  return (
    <footer className="relative z-10 mt-28 pb-8">
      <Container>
        <div className="clay !rounded-[40px] p-7 sm:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* About Octax + founder */}
            <div className="md:col-span-5">
              <div className="group flex items-center gap-2">
                <Logo size={44} />
                <Wordmark className="text-2xl" />
              </div>
              <p className="mt-4 max-w-sm text-muted">{Config.About.Blurb}</p>
              <p className="mt-4 text-sm text-muted">
                Founded by{" "}
                <Link to="/experience" onClickCapture={top} className="font-bold text-ink hover:text-brand">
                  {Config.Founder.Name}
                </Link>
              </p>
              <div className="mt-5 flex gap-2">
                <a href={Config.Twitter} target="_blank" rel="noreferrer" aria-label="Haitham on X" className="flex h-11 w-11 items-center justify-center rounded-full bg-sunken text-ink transition-transform duration-300 ease-spring hover:-translate-y-1">
                  <XGlyph size={20} />
                </a>
                <a href={Config.Github} target="_blank" rel="noreferrer" aria-label="Octax on GitHub" className="flex h-11 w-11 items-center justify-center rounded-full bg-sunken text-ink transition-transform duration-300 ease-spring hover:-translate-y-1">
                  <GithubGlyph size={22} />
                </a>
              </div>
            </div>

            <FooterColumn title="Products" className="md:col-span-2">
              {products.map((p) => (
                <Link key={p.id} to={`/work/${p.id}`} onClickCapture={top} className="hover:text-brand">
                  {p.name}
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title="Open source" className="md:col-span-3">
              {openSource.map((p) => (
                <a key={p.id} href={p.href} target="_blank" rel="noreferrer" className="hover:text-brand">
                  {p.name}
                </a>
              ))}
            </FooterColumn>

            <FooterColumn title="This site" className="md:col-span-2">
              {Config.NavLinks.map((link) => (
                <Link key={link.Path} to={link.Path} onClickCapture={top} className="hover:text-brand">
                  {link.Title}
                </Link>
              ))}
            </FooterColumn>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t-2 border-dashed border-line pt-6 text-sm text-muted md:flex-row md:justify-between">
            <p>
              <a href={Config.Website} className="font-bold text-ink hover:text-brand">
                {Config.CopyRights}
              </a>{" "}
              © {new Date().getFullYear()}
            </p>
            <p>{Config.FooterNote}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children, className = "" }) {
  return (
    <div className={className}>
      <p className="font-display text-lg font-black text-ink">{title}</p>
      <div className="mt-4 flex flex-col gap-2.5 text-muted [&>*]:w-fit [&>*]:transition-colors">
        {children}
      </div>
    </div>
  );
}

export default Footer;
