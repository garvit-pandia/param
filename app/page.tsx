import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Mail, ShieldCheck } from "lucide-react";
import { AboutArt, HeroArt, Icon3D } from "@/components/art";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { RequestButton, RequestProvider } from "@/components/RequestAccess";
import { LogoMark } from "@/components/graphics";
import { faq } from "@/data/faq";
import {
  areaIcons,
  photos,
  reasonIcons,
  securityIcons,
  serviceIcons,
  stepIcons,
  workShots,
} from "@/data/images";
import {
  areas,
  highlights,
  reasons,
  securityServices,
  serviceItems,
  stats,
  steps,
} from "@/data/services";
import { contactEmails, credit, navLinks, site, siteName } from "@/data/site";
import { work, workLabels } from "@/data/work";

// Short promises shown under the hero buttons.
const assurances = ["Written permission first", "Fixes ranked by risk", "A quote before work starts"];

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
              <p className="eyebrow">Software · AI automation · Security</p>
              <h1 id="hero-title">
                <span className="grad">Building</span>,{" "}
                <span className="grad">automating</span> and{" "}
                <span className="grad">securing</span> your digital presence.
              </h1>
              <p className="lead">
                At {siteName}, we build custom software, automate the busywork
                with AI and test your defences the way an attacker would, all
                under one roof.
              </p>
              <div className="hero-actions">
                <RequestButton className="btn btn-primary btn-large">
                  Start a project <ArrowRight aria-hidden />
                </RequestButton>
                <a href="#work" className="btn btn-ghost btn-large">
                  See our work
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
            <SectionHead id="services-title" eyebrow="What we do" title="Four areas. One team.">
              Pick one or combine them. Either way you deal with the same
              people from the first message to the final handover.
            </SectionHead>

            <ul className="area-grid">
              {areas.map((area, i) => (
                <li key={area.id} className="area card reveal">
                  <Icon3D src={areaIcons[area.id]} size={76} />
                  <p className="eyebrow">0{i + 1}</p>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="security" className="section section-tint" aria-labelledby="security-title">
          <div className="wrap">
            <SectionHead
              id="security-title"
              eyebrow="Security services"
              title="Find the weak points before someone else does"
            >
              Three ways we test your business from the outside in, always for
              the owner of the systems and only with written permission.
            </SectionHead>

            <div className="security-grid">
              {securityServices.map((service) => (
                <article
                  key={service.id}
                  className={`security card reveal${service.featured ? " security-featured" : ""}`}
                >
                  <div className="security-top">
                    <Icon3D src={securityIcons[service.id]} size={64} />
                    <span className="pill">{service.badge}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="check-list">
                    {service.checks.map((check) => (
                      <li key={check}>
                        <Check aria-hidden />
                        {check}
                      </li>
                    ))}
                  </ul>
                  <RequestButton
                    className={`btn ${service.featured ? "btn-primary" : "btn-ghost"}`}
                    topic={service.title}
                  >
                    Get a quote
                    <span className="sr-only"> for {service.title}</span>
                    <ArrowRight aria-hidden />
                  </RequestButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="all-services" className="section" aria-labelledby="all-services-title">
          <div className="wrap">
            <SectionHead
              id="all-services-title"
              eyebrow="Our services"
              title="Everything your business needs online"
            >
              From a first website to a full penetration test, pick what you
              need and we handle the rest.
            </SectionHead>

            <ul className="service-grid">
              {serviceItems.map((item) => (
                <li key={item.id} className="service reveal">
                  <Icon3D src={serviceIcons[item.id]} size={64} />
                  <div className="service-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <RequestButton className="text-link" topic={item.title}>
                      Get a quote<span className="sr-only"> for {item.title}</span>
                      <ArrowRight aria-hidden />
                    </RequestButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="wrap">
            <SectionHead id="work-title" eyebrow="Our work" title="Websites we designed and built">
              Two sites running for real businesses and three concept designs,
              all designed and coded in-house. Open any of them and click
              around.
            </SectionHead>

            <ul className="work-grid">
              {work.map((item) => (
                <li key={item.id} className={`work card reveal work-${item.kind}`}>
                  <div className="work-shot">
                    <Image
                      src={workShots[item.id]}
                      alt={`Home page of the ${item.title} website`}
                      sizes="(max-width: 900px) 92vw, (max-width: 1100px) 46vw, 600px"
                      placeholder="blur"
                    />
                  </div>
                  <div className="work-body">
                    <p className="work-meta">
                      <span className="pill">{workLabels[item.kind]}</span>
                      {item.trade}
                    </p>
                    <h3>
                      {/* the link stretches over the whole card, so the card is one tap target */}
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="work-link">
                        {item.title}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </h3>
                    <p>{item.text}</p>
                    <span className="work-visit" aria-hidden>
                      Visit site <ArrowUpRight />
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="section-more">
              <RequestButton className="btn btn-ghost" topic="A new website">
                Get a website like these <ArrowRight aria-hidden />
              </RequestButton>
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

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="wrap split">
            <div className="reveal">
              <AboutArt />
            </div>
            <div className="split-copy reveal">
              <p className="eyebrow">About us</p>
              <h2 id="about-title">Get to know who we are</h2>
              <p className="lead">
                {siteName} is a small team that builds software, automates
                business work and secures both. We build the websites, apps and
                dashboards your business runs on, and wire in AI where it saves
                your team real time. Then we test all of it the way an attacker
                would, check what the open internet already reveals about you,
                and help you fix what we find.
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
                <div key={stat.id} className="stat">
                  <dt>{stat.label}</dt>
                  <dd>
                    {stat.value}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="why" className="section" aria-labelledby="why-title">
          <div className="wrap split split-reverse">
            <div className="split-copy reveal">
              <p className="eyebrow">Why choose us</p>
              <h2 id="why-title">Build, automate and secure under one roof</h2>
              <p className="lead">
                One team for your software, your automation and your security,
                so nothing gets lost between vendors.
              </p>
              <ul className="reason-list">
                {reasons.map((reason) => (
                  <li key={reason.id} className="reason">
                    <Icon3D src={reasonIcons[reason.id]} size={56} />
                    <div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="photo-frame reveal">
              <Image
                src={photos.serverRoom}
                alt="Rows of server racks lit in blue"
                sizes="(max-width: 900px) 92vw, 560px"
                placeholder="blur"
              />
            </figure>
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
              <Image src={photos.circuitChip} alt="" fill sizes="(max-width: 1240px) 100vw, 1216px" className="cta-bg" />
              <div className="cta-content">
                <h2 id="cta-title">
                  <span>Build it.</span> <span>Automate it.</span> <span>Secure it.</span>
                </h2>
                <p className="lead">
                  Tell us what you need, whether it is a website, an automation,
                  a security test or a product idea, and we will come back to
                  you with a plan and a price.
                </p>
                <div className="hero-actions">
                  <RequestButton className="btn btn-primary btn-large">
                    Start a project <ArrowRight aria-hidden />
                  </RequestButton>
                  <a href="#services" className="btn btn-ghost btn-large">
                    See our services
                  </a>
                </div>
                <p className="cta-mail">
                  Prefer email? Write to{" "}
                  <a href={`mailto:${contactEmails[0]}`}>{contactEmails[0]}</a> or{" "}
                  <a href={`mailto:${contactEmails[1]}`}>{contactEmails[1]}</a>.
                </p>
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
            <h2 className="footer-mail-title">Email us</h2>
            <ul className="footer-mail">
              {contactEmails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>
                    <Mail aria-hidden />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
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
              {areas.map((area) => (
                <li key={area.id}>
                  <a href={area.id === "security" ? "#security" : "#services"}>{area.title}</a>
                </li>
              ))}
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

        <div className="wrap">
          <aside className="footer-credit" aria-label="Website credits">
            <p className="footer-credit-title">
              Website designed and built by{" "}
              <a href={credit.portfolio} target="_blank" rel="noopener">
                {credit.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
            <p>
              Want a website like this one? Write to me at{" "}
              <a href={`mailto:${credit.email}`}>{credit.email}</a>. You can see more
              of my work at{" "}
              <a href={credit.portfolio} target="_blank" rel="noopener">
                {credit.portfolioLabel}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </aside>
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
