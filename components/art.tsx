import Image, { type StaticImageData } from "next/image";
import { craftIcons, photos } from "@/data/images";
import { crafts } from "@/data/services";

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

/** Hero picture: a laptop full of code, with one floating card per craft. */
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
      {/* the cards repeat the three services listed below, so they are hidden from screen readers */}
      <ul className="hero-cards" aria-hidden>
        {crafts.map((craft, i) => (
          <li key={craft.id} className={`hero-card hero-card-${i + 1}`}>
            <Icon3D src={craftIcons[craft.id]} size={48} />
            <span>
              <strong>{craft.label}</strong>
              {craft.items[0].title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
