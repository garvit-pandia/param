import Image, { type StaticImageData } from "next/image";
import { accents, photos } from "@/data/images";

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
    <Image src={src} alt="" width={size} height={size} sizes={`${size}px`} className={className} />
  );
}

/** Hero picture: a laptop running green code, with floating icons. */
export function HeroArt() {
  return (
    <div className="hero-photo">
      <Image
        src={photos.laptopCode}
        alt="A laptop showing green code in a dark room"
        sizes="(max-width: 900px) 320px, 34vw"
        preload
        className="hero-photo-img"
      />
      <Icon3D src={accents.shield} size={120} className="hero-chip hero-chip-shield float f0" />
      <Icon3D src={accents.lock} size={84} className="hero-chip hero-chip-lock float f2" />
      <span className="scene-tag">
        <i aria-hidden /> System Secured
      </span>
    </div>
  );
}

/** "About us" picture: code on a screen with design wireframes laid over it. */
export function AboutArt() {
  return (
    <div className="collage">
      <Image
        src={photos.codeScreen}
        alt="Website code on a monitor"
        sizes="(max-width: 900px) 80vw, 460px"
        placeholder="blur"
        className="collage-main"
      />
      <Image
        src={photos.wireframes}
        alt="Hand-drawn website wireframes in a notebook"
        sizes="(max-width: 900px) 50vw, 290px"
        placeholder="blur"
        className="collage-inset"
      />
      <Icon3D src={accents.shield} size={130} className="collage-badge float f1" />
    </div>
  );
}

/** "Why choose us" picture: padlocks on a keyboard. */
export function GuardArt() {
  return (
    <div className="frame-photo">
      <Image
        src={photos.padlocks}
        alt="Two padlocks chained together on a laptop keyboard"
        sizes="(max-width: 900px) 86vw, 560px"
        placeholder="blur"
      />
      <Icon3D src={accents.tick} size={110} className="frame-badge float f0" />
    </div>
  );
}

/** Centre piece of "Our Services": a circuit board cut to a hexagon behind a shield. */
export function CoreArt() {
  return (
    <div className="core">
      <span className="core-ring" aria-hidden />
      <div className="core-glow">
        <div className="core-hex">
          <Image src={photos.circuit} alt="" sizes="260px" fill />
        </div>
      </div>
      <Icon3D src={accents.shield} size={150} className="core-icon float f1" />
    </div>
  );
}
