import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { HeroArt, Icon3D } from "@/components/art";
import { Catalog } from "@/components/Catalog";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { RequestButton, RequestProvider } from "@/components/RequestAccess";
import { LogoMark } from "@/components/graphics";
import { catalog } from "@/data/catalog";
import { faq } from "@/data/faq";
import { craftIcons, craftPhotos, photos, promiseIcons, stepIcons } from "@/data/images";
import { crafts, highlights, productCount, promises, stats, steps } from "@/data/services";
import { navLinks, site, siteName } from "@/data/site";

// Short reassurances shown under the hero buttons.
const assurances = [
  "One team from brief to handover",
  "Tools activated on your own account",
  "Security tests only with written permission",
];

function SectionHead({
  id,
  eyebrow,
  title,
  children,
}: {
  /** Also used by the section's aria-labelledby, so screen readers can name the region. */
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </header>
  );
}

export default function Home() {
  return (
    <RequestProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Security · Design · Web</p>
              <h1 id="hero-title">
                One team to <span className="grad">secure</span>,{" "}
                <span className="grad">design</span> and{" "}
                <span className="grad">build</span> your business online.
              </h1>
              <p className="lead">
                {siteName} brings penetration testing, brand design and website
                development under one roof, and supplies the premium tools
                professionals rely on at the best prices.
              </p>
              <div className="hero-actions">
                <RequestButton className="btn btn-primary btn-large">
                  Start a project <ArrowRight aria-hidden />
                </RequestButton>
                <a href="#tools" className="btn btn-ghost btn-large">
                  Browse premium tools
                </a>
              </div>
              <ul className="assurances">
                {assurances.map((item) => (
                  <li key={item}>
                    <Check aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <HeroArt />
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="wrap">
            <SectionHead id="services-title" eyebrow="What we do" title="Three crafts. One team.">
              Pick one service or combine them. Either way you deal with the
              same people from the first message to the final handover.
            </SectionHead>

            <div className="craft-grid">
              {crafts.map((craft, i) => (
                <article key={craft.id} className="craft card reveal">
                  <div className="craft-media">
                    <Image
                      src={craftPhotos[craft.id].src}
                      alt={craftPhotos[craft.id].alt}
                      sizes="(max-width: 900px) 92vw, 380px"
                      placeholder="blur"
                    />
                    <Icon3D src={craftIcons[craft.id]} size={88} className="craft-icon" />
                  </div>
                  <div className="craft-body">
                    <p className="eyebrow">
                      0{i + 1} · {craft.label}
                    </p>
                    <h3>{craft.title}</h3>
                    <p>{craft.summary}</p>
                    <ul className="craft-list">
                      {craft.items.map((item) => (
                        <li key={item.title}>
                          <Check aria-hidden />
                          <span>
                            <strong>{item.title}</strong>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <RequestButton className="btn btn-ghost" topic={craft.label}>
                      Get a quote
                      <span className="sr-only"> for {craft.label}</span>
                      <ArrowRight aria-hidden />
                    </RequestButton>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section" aria-labelledby="process-title">
          <div className="wrap">
            <SectionHead id="process-title" eyebrow="How it works" title="From first message to handover">
              Four steps, with a clear price before any work starts.
            </SectionHead>

            <ol className="steps">
              {steps.map((step, i) => (
                <li key={step.id} className="step card reveal">
                  <span className="step-number" aria-hidden>
                    0{i + 1}
                  </span>
                  <Icon3D src={stepIcons[step.id]} size={72} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tools" className="section section-tint" aria-labelledby="tools-title">
          <div className="wrap">
            <SectionHead
              id="tools-title"
              eyebrow="Premium tools"
              title="The tools professionals use, on your own account"
            >
              {productCount} tools and subscriptions across {catalog.length}{" "}
              categories. Search for one by name, or filter by what you do.
            </SectionHead>

            <ul className="promise-grid">
              {promises.map((promise) => (
                <li key={promise.id} className="promise reveal">
                  <Icon3D src={promiseIcons[promise.id]} size={60} />
                  <div>
                    <h3>{promise.title}</h3>
                    <p>{promise.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Catalog />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="wrap split">
            <figure className="about-photo reveal">
              <Image
                src={photos.serverRoom}
                alt="Rows of server racks lit in blue"
                sizes="(max-width: 900px) 92vw, 560px"
                placeholder="blur"
              />
            </figure>
            <div className="split-copy reveal">
              <p className="eyebrow">About us</p>
              <h2 id="about-title">A small team with three specialities</h2>
              <p className="lead">
                {siteName} secures businesses, designs their brands and builds
                their websites. We test your systems the way an attacker would,
                then help you fix what we find. We design the visuals your
                customers see, and we build the sites they land on.
              </p>
              <ul className="tick-grid">
                {highlights.map((item) => (
                  <li key={item}>
                    <Check aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="wrap">
            <dl className="stats reveal">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-title">
          <div className="wrap faq-layout">
            <header className="section-head section-head-left reveal">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Questions, answered</h2>
              <p className="lead">
                Can&apos;t find what you are looking for? Send us a note and we
                will reply directly.
              </p>
              <RequestButton className="btn btn-ghost" topic="A question">
                Ask a question <ArrowRight aria-hidden />
              </RequestButton>
            </header>

            <div className="faq-list">
              {faq.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>
                    <h3>{item.question}</h3>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="wrap">
            <div className="cta-panel reveal">
              <Image src={photos.codeScreen} alt="" fill sizes="100vw" className="cta-bg" />
              <div className="cta-content">
                <h2 id="cta-title">Ready when you are</h2>
                <p className="lead">
                  Tell us what you need, whether it is a security test, a new
                  logo, a website or a premium tool. We will come back with a
                  plan and a price.
                </p>
                <div className="hero-actions">
                  <RequestButton className="btn btn-primary btn-large">
                    Start a project <ArrowRight aria-hidden />
                  </RequestButton>
                  <a href="#services" className="btn btn-ghost btn-large">
                    See our services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <LogoMark className="logo-mark" />
              <span>
                {site.nameFirst} <span className="logo-accent">{site.nameAccent}</span>
              </span>
            </a>
            <p>{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>Services</h2>
            <ul>
              {crafts.map((craft) => (
                <li key={craft.id}>
                  <a href="#services">{craft.label}</a>
                </li>
              ))}
              <li>
                <a href="#tools">Premium tools</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Good to know</h2>
            <ul className="footer-notes">
              {site.notes.map((note) => (
                <li key={note}>
                  <ShieldCheck aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <p>{site.copyright}</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <MobileCta />
    </RequestProvider>
  );
}
