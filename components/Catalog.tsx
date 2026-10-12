"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { catalog } from "@/data/catalog";
import { RequestButton } from "./RequestAccess";

// How many tools show before "Show all" is pressed.
const PREVIEW = 12;

const everything = catalog.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    category: category.title,
  })),
);

export function Catalog() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const search = query.trim().toLowerCase();
  const matches = everything.filter(
    (product) =>
      (active === "all" || product.categoryId === active) &&
      (search === "" || product.name.toLowerCase().includes(search)),
  );
  // A search shows every match; otherwise the list starts short.
  const visible = expanded || search !== "" ? matches : matches.slice(0, PREVIEW);

  function choose(id: string) {
    setActive(id);
    setExpanded(false);
  }

  const filters = [
    { id: "all", label: "All tools" },
    ...catalog.map((category) => ({ id: category.id, label: category.label })),
  ];

  return (
    <div className="catalog">
      <div className="catalog-bar">
        <div className="search">
          <label htmlFor="tool-search" className="sr-only">
            Search tools by name
          </label>
          <Search aria-hidden />
          <input
            id="tool-search"
            type="search"
            placeholder="Search tools, e.g. Notion"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="chips" role="group" aria-label="Filter tools by category">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="chip"
              aria-pressed={active === filter.id}
              onClick={() => choose(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* tells screen reader users how the list changed after a search or filter */}
      <p className="catalog-count" role="status">
        {matches.length === 0
          ? "No tools match that search."
          : `Showing ${visible.length} of ${matches.length} ${matches.length === 1 ? "tool" : "tools"}`}
      </p>

      <ul className="product-grid">
        {visible.map((product) => (
          <li key={`${product.categoryId}-${product.name}`} className="product">
            <span className="pill">{product.validity}</span>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <RequestButton
              className="btn btn-ghost btn-small"
              topic={`${product.name} (${product.validity})`}
            >
              Request<span className="sr-only"> {product.name}</span>
            </RequestButton>
          </li>
        ))}
      </ul>

      {search === "" && matches.length > PREVIEW && (
        <div className="catalog-more">
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show fewer" : `Show all ${matches.length} tools`}
          </button>
        </div>
      )}
    </div>
  );
}
