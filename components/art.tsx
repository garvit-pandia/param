import Image, { type StaticImageData } from "next/image";
import { areaIcons, photos } from "@/data/images";
import { areas } from "@/data/services";

/** A 3D icon at a fixed size. Decorative, so screen readers skip it. */
export function Icon3D({
  src,
  size,
  className,
}: {
  src: StaticImageData;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      sizes={`${size}px`}
      className={`icon3d${className ? ` ${className}` : ""}`}
    />
  );
}

// The short line under each floating card's title, keyed by service area.
const heroLines = {
  software: "Websites & web apps",
  ai: "Chatbots & workflows",
  security: "VAPT & cloud reviews",
} as const;

const heroAreas = areas.filter((area) => area.id in heroLines);

/** Hero picture: a laptop full of code, with floating cards for three of the service areas. */
export function HeroArt() {
  return (
    <div className="hero-art">
      <div className="hero-frame">
        <Image
          src={photos.laptopCode}
          alt="A laptop screen filled with lines of code"
          sizes="(max-width: 900px) 92vw, 560px"
          placeholder="blur"
          preload
        />
      </div>
      {/* the cards repeat the service areas listed below, so they are hidden from screen readers */}
      <ul className="hero-cards" aria-hidden>
        {heroAreas.map((area, i) => (
          <li key={area.id} className={`hero-card hero-card-${i + 1}`}>
            <Icon3D src={areaIcons[area.id]} size={48} />
            <span>
              <strong>{area.title}</strong>
              {heroLines[area.id as keyof typeof heroLines]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "About us" picture: code on a screen with design wireframes laid over it. */
export function AboutArt() {
  return (
    <div className="collage">
      <Image
        src={photos.codeScreen}
        alt="Lines of code on a screen"
        sizes="(max-width: 900px) 80vw, 460px"
        placeholder="blur"
        className="collage-main"
      />
      <Image
        src={photos.wireframes}
        alt="Hand-drawn website wireframes in a notebook"
        sizes="(max-width: 900px) 50vw, 280px"
        placeholder="blur"
        className="collage-inset"
      />
      <Icon3D src={areaIcons.security} size={120} className="collage-badge" />
    </div>
  );
}
