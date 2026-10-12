import Image from "next/image";
import { Check, CircleCheck, ShieldCheck } from "lucide-react";
import { AboutArt, CoreArt, GuardArt, HeroArt, Icon3D } from "@/components/art";
import { Catalog } from "@/components/Catalog";
import { CountUp } from "@/components/CountUp";
import { Header } from "@/components/Header";
import { MobileCta } from "@/components/MobileCta";
import { RequestButton, RequestProvider } from "@/components/RequestAccess";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/graphics";
import { faq } from "@/data/faq";
import {
  photos,
  pillarIcons,
  reasonIcons,
  serviceIcons,
  statIcons,
} from "@/data/images";
import {
  highlights,
  pillars,
  reasons,
  serviceItems,
  stats,
  tracks,
  type ServiceItem,
} from "@/data/services";
import { navLinks, site, siteName } from "@/data/site";

// Short promises shown under the hero button.
const promises = ["Genuine activations", "Instant delivery", "Best price guarantee"];

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
              Securing, Designing &amp; Building
              <br />
              <span className="green">Your Digital Presence</span>
            </h1>
            <div className="hero-copy">
              <p>
                At <span className="green">{brand}</span>, we bring
                cybersecurity, graphic design and website development together
                under one roof, and supply premium tools and subscriptions at
                the best prices.
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
            {pillars.map((pillar, i) => {
              return (
                <Reveal key={pillar.id} delay={i * 150} className="pillar">
                  <Icon3D src={pillarIcons[pillar.id]} size={84} className="pillar-art" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section section-tight">
          <div className="track-grid">
            {tracks.map((track) => (
              <div key={track.id} className={`plan-card plan-${track.id}`}>
                <span className="pill-badge">{track.badge}</span>
                <h2>{track.title}</h2>
                <p className="plan-price">
                  <strong>{track.price}</strong> <span>{track.priceNote}</span>
                </p>
                <p className="plan-summary">{track.summary}</p>
                <ul className="check-list">
                  {track.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                {track.id === "catalog" ? (
                  <a href="#catalog" className="btn btn-square btn-block">
                    {track.cta}
                  </a>
                ) : (
                  <RequestButton className="btn btn-square btn-block" topic="A project quote">
                    {track.cta}
                  </RequestButton>
                )}
              </div>
            ))}
          </div>
        </section>

        <Catalog />

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
                  {siteName} is a small team that secures businesses, designs
                  their brands and builds their websites. We test your systems
                  the way an attacker would, then help you fix what we find. We
                  design the visuals your customers see, and we build the sites
                  they land on. Alongside that work, we supply the premium
                  tools professionals rely on, activated on your own account at
                  the best price.
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
                Security, Design &amp; Development Under One Roof
              </h3>
              <Reveal>
                <p>
                  One team for your security, your brand and your website, with
                  premium tools on top.
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
                From finding security holes to designing your brand and
                launching your website, pick what you need and we handle the
                rest.
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

        <section className="section cta-band">
          <Image src={photos.matrix} alt="" fill sizes="100vw" className="cta-bg" />
          <div className="wrap">
            <h2>Secure It. Design It. Build It. Start Today!</h2>
            <p>
              Tell us what you need, whether it is a security test, a new
              logo, a website or a premium tool, and we will come back to you
              with a plan and a price.
            </p>
            <RequestButton className="btn">Request Access</RequestButton>
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
            <RequestButton className="btn">Request Access</RequestButton>
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
                {pillars.map((pillar) => (
                  <li key={pillar.id}>
                    <a href="#services">{pillar.title}</a>
                  </li>
                ))}
                <li>
                  <a href="#catalog">Premium Tools</a>
                </li>
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
