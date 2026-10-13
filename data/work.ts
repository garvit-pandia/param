export type WorkItem = {
  id: "shivaay" | "umesh" | "photographer" | "architect" | "clinic";
  /** "live" is a real business's site; "concept" is a design made to show what we can do. */
  kind: "live" | "concept";
  title: string;
  /** The kind of business, shown under the title. */
  trade: string;
  text: string;
  url: string;
};

const concepts = "https://material-index-git-concept-sites-garvits-projects-1883ee4b.vercel.app";

// Websites we designed and built. Live sites come first; each one needs a
// screenshot in images/work/ with the same name as its id.
export const work: WorkItem[] = [
  {
    id: "shivaay",
    kind: "live",
    title: "Shivaay Logistics",
    trade: "Customs broker, Ludhiana",
    text: "A company website with every forwarding service, a coverage map of ports and offices, document checklists and an enquiry form.",
    url: "https://www.shivaaylogistics.in",
  },
  {
    id: "umesh",
    kind: "live",
    title: "Shri Umesh Son's",
    trade: "Restaurant, Ludhiana",
    text: "An ordering site for a malai chaap outlet: browse the menu, build a cart, split the bill and pay by UPI from the phone.",
    url: "https://umesh-sons.vercel.app",
  },
  {
    id: "photographer",
    kind: "concept",
    title: "Meera Kapoor",
    trade: "Wedding photographer",
    text: "A quiet, editorial portfolio with albums, packages and a date check.",
    url: `${concepts}/v19-photographer/index.html`,
  },
  {
    id: "architect",
    kind: "concept",
    title: "Arjun Sethi Architects",
    trade: "Architecture studio",
    text: "A drawing-sheet layout with projects to browse by type, year and size.",
    url: `${concepts}/v20-architect/index.html`,
  },
  {
    id: "clinic",
    kind: "concept",
    title: "Hitesh Clinic",
    trade: "Chemist and clinic",
    text: "A friendly booking site: build a test slip, hold a slot and track a report.",
    url: `${concepts}/v22-clinic/index.html`,
  },
];

export const workLabels = { live: "LIVE SITE", concept: "CONCEPT DESIGN" } as const;
