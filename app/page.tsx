import Image from "next/image";
import { ArrowUpRight, Check, CircleCheck, ShieldCheck } from "lucide-react";
import { AboutArt, CoreArt, GuardArt, HeroArt, Icon3D } from "@/components/art";
import { CountUp } from "@/components/CountUp";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { RequestButton, RequestProvider } from "@/components/RequestAccess";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/graphics";
import { faq } from "@/data/faq";
import {
  areaIcons,
  photos,
  reasonIcons,
  serviceIcons,
  statIcons,
  workShots,
} from "@/data/images";
import {
  areas,
  highlights,
  reasons,
  securityServices,
  serviceItems,
  stats,
  type ServiceItem,
} from "@/data/services";
import { navLinks, site, siteName } from "@/data/site";
import { work, workLabels } from "@/data/work";

// Short promises shown under the hero button.
const promises = ["Written permission first", "Fixes ranked by risk", "A quote before work starts"];

function ServiceColumn({ items, side }: { items: ServiceItem[]; side: "left" | "right" }) {
  return (
    <div className={`service-col service-col-${side}`}>
      {items.map((item, i) => {
        const icon = serviceIcons[item.id as keyof typeof serviceIcons];
        return (
          <Reveal key={item.id} variant={side} delay={i * 200} className="service-item">
            <div className="service-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <RequestButton className="text-link" topic={item.title}>
                Get a Quote →
              </RequestButton>
            </div>
            <Icon3D src={icon} size={92} className="service-art" />
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Home() {
  const brand = siteName.toUpperCase();

  return (
    <RequestProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section id="home" className="hero">
          <div className="wrap hero-grid">
            <h1 className="hero-title">
              Building, Automating &amp; Securing
              <br />
              <span className="green">Your Digital Presence</span>
            </h1>
            <div className="hero-copy">
              <p>
                At <span className="green">{brand}</span>, we build custom
                software, automate the busywork with AI and test your defences
                the way an attacker would, all under one roof.
              </p>
              <RequestButton className="btn btn-lg">
                Get Started <span className="arrow">→</span>
              </RequestButton>
              <ul className="promise-row">
                {promises.map((promise) => (
                  <li key={promise}>
                    <Check aria-hidden />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-art">
              <HeroArt />
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="wrap pillar-grid">
            {areas.map((area, i) => {
              return (
                <Reveal key={area.id} delay={i * 150} className="pillar">
                  <Icon3D src={areaIcons[area.id]} size={84} className="pillar-art" />
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="security" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-kicker">
                <span className="green">Security</span> Services
              </h2>
              <p>
                Three ways we find the weak points in your business before
                someone else does.
              </p>
            </div>
            <div className="plan-grid">
              {securityServices.map((service) => (
                <div
                  key={service.id}
                  className={`plan-card${service.featured ? " plan-featured" : ""}`}
                >
                  <span className="pill-badge">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p className="plan-summary">{service.summary}</p>
                  <ul className="check-list">
                    {service.checks.map((check) => (
                      <li key={check}>
                        <Check aria-hidden />
                        {check}
                      </li>
                    ))}
                  </ul>
                  <RequestButton className="btn btn-square btn-block" topic={service.title}>
                    Get a Quote
                  </RequestButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap split">
            <div className="split-art">
              <AboutArt />
            </div>
            <div className="split-copy">
              <h2 className="display">About us</h2>
              <h3 className="sub-display">Get To Know Who We Are</h3>
              <Reveal>
                <p>
                  {siteName} is a small team that builds software, automates
                  business work and secures both. We build the websites, apps
                  and dashboards your business runs on, and wire in AI where it
                  saves your team real time. Then we test all of it the way an
                  attacker would, check what the open internet already reveals
                  about you, and help you fix what we find.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <ul className="tick-grid">
                  {highlights.map((item) => (
                    <li key={item}>
                      <CircleCheck aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <RequestButton className="btn">Work With Us</RequestButton>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="wrap stat-grid">
            {stats.map((stat) => {
              return (
                <div key={stat.id} className="stat">
                  <Icon3D src={statIcons[stat.id]} size={104} className="stat-art" />
                  <div>
                    <p className="stat-value">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="wrap split split-reverse">
            <div className="split-copy">
              <h2 className="display">Why choose us</h2>
              <h3 className="sub-display">
                Build, Automate &amp; Secure Under One Roof
              </h3>
              <Reveal>
                <p>
                  One team for your software, your automation and your
                  security, so nothing gets lost between vendors.
                </p>
              </Reveal>
              {reasons.map((reason, i) => {
                return (
                  <Reveal key={reason.id} delay={200 + i * 150} className="reason">
                    <span className="reason-art">
                      <Icon3D src={reasonIcons[reason.id]} size={76} />
                    </span>
                    <div>
                      <h4>✔ {reason.title}</h4>
                      <p>{reason.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="split-art">
              <GuardArt />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="display">Our Services</h2>
              <h3 className="sub-display">Everything Your Business Needs Online</h3>
              <p>
                From a first website to a full penetration test, pick what
                you need and we handle the rest.
              </p>
            </div>
            <div className="service-layout">
              <ServiceColumn items={serviceItems.slice(0, 3)} side="left" />
              <div className="service-core">
                <CoreArt />
              </div>
              <ServiceColumn items={serviceItems.slice(3)} side="right" />
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="wrap">
            <div className="section-head">
              <h2 className="display">Our Work</h2>
              <h3 className="sub-display">Websites We Designed &amp; Built</h3>
              <p>
                Two sites running for real businesses and three concept
                designs, all designed and coded in-house. Open any of them and
                click around.
              </p>
            </div>
            <div className="work-grid">
              {work.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work-card work-${item.kind}`}
                >
                  <span className="pill-badge">{workLabels[item.kind]}</span>
                  <div className="work-shot">
                    <Image
                      src={workShots[item.id]}
                      alt={`Home page of the ${item.title} website`}
                      sizes="(max-width: 900px) 92vw, (max-width: 1100px) 46vw, 640px"
                      placeholder="blur"
                    />
                  </div>
                  <div className="work-body">
                    <span className="work-trade">{item.trade}</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <span className="work-link">
                      Visit Site <ArrowUpRight aria-hidden />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="work-cta">
              <RequestButton className="btn" topic="A new website">
                Get a Website Like These
              </RequestButton>
            </div>
          </div>
        </section>

        <section className="section cta-band">
          <Image src={photos.matrix} alt="" fill sizes="100vw" className="cta-bg" />
          <div className="wrap">
            <h2>Build It. Automate It. Secure It. Start Today!</h2>
            <p>
              Tell us what you need, whether it is a website, an automation,
              a security test or a product idea, and we will come back to you
              with a plan and a price.
            </p>
            <RequestButton className="btn">Contact Us</RequestButton>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="wrap">
            <h2 className="section-kicker">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faq.map((item, i) => (
                <details key={item.question} className="faq-item">
                  <summary>
                    Q{i + 1}: {item.question}
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-callout">
            <div>
              <h3>Have A Project In Mind?</h3>
              <p>
                Send us a short note about what you need and we will take it
                from there.
              </p>
            </div>
            <RequestButton className="btn">Contact Us</RequestButton>
          </div>

          <div className="footer-grid">
            <div>
              <a href="#home" className="logo">
                <LogoMark className="logo-mark" />
                <span>
                  {site.nameFirst.toUpperCase()}
                  <span className="logo-accent">{site.nameAccent.toUpperCase()}</span>
                </span>
              </a>
              <p className="footer-about">{site.tagline}</p>
            </div>
            <div>
              <h5>Quick Links</h5>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                {areas.map((area) => (
                  <li key={area.id}>
                    <a href={area.id === "security" ? "#security" : "#services"}>{area.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Important Notes</h5>
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

          <div className="footer-bottom">
            <p>{site.copyright}</p>
          </div>
        </div>
      </footer>

      <MobileCta />
    </RequestProvider>
  );
}
