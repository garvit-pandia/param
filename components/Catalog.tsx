"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import { catalog } from "@/data/catalog";
import { tileIcons } from "@/data/images";
import { Icon3D } from "./art";
import { RequestButton } from "./RequestAccess";

// One picture per category id in data/catalog.ts. A new category falls back to the cube.
const icons: Record<string, StaticImageData> = tileIcons;

// How many products show before "View More" is pressed.
const PREVIEW = 10;

const everything = catalog.flatMap((category) =>
  category.products.map((product) => ({ ...product, category: category.title })),
);

export function Catalog() {
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const products =
    active === "all"
      ? everything
      : everything.filter(
          (product) => product.category === catalog.find((c) => c.id === active)?.title,
        );
  const visible = expanded ? products : products.slice(0, PREVIEW);

  function choose(id: string) {
    setActive(id);
    setExpanded(false);
  }

  const tiles = [
    { id: "all", label: "All Tools", icon: icons.all },
    ...catalog.map((category) => ({
      id: category.id,
      label: category.label,
      icon: icons[category.id] ?? icons.all,
    })),
  ];

  return (
    <section id="catalog" className="section">
      <div className="wrap">
        <h2 className="section-kicker">
          <span className="green">Premium</span> Tools
        </h2>

        <div className="tile-grid">
          {tiles.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={`tile${active === id ? " active" : ""}`}
              aria-pressed={active === id}
              onClick={() => choose(id)}
            >
              <span className="tile-art">
                <Icon3D src={icon} size={112} />
              </span>
              <span className="tile-label">{label}</span>
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <div key={`${product.category}-${product.name}`} className="product-card">
              <span className="pill-badge">{product.validity}</span>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <RequestButton
                className="btn btn-square btn-block"
                topic={`${product.name} (${product.validity})`}
              >
                Buy
              </RequestButton>
            </div>
          ))}
        </div>

        {products.length > PREVIEW && (
          <div className="center">
            <button
              type="button"
              className="btn"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "View Less" : `View More ... (${products.length - PREVIEW})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
