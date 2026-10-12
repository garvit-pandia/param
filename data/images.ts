// Every picture on the site is imported here, so swapping one is a one-line change.
// Sources and licences are listed in docs/image-credits.md.
import bag from "@/images/3d/bag.png";
import bulb from "@/images/3d/bulb.png";
import chart from "@/images/3d/chart.png";
import clock from "@/images/3d/clock.png";
import colorPalette from "@/images/3d/color-palette.png";
import computer from "@/images/3d/computer.png";
import cube from "@/images/3d/cube.png";
import flash from "@/images/3d/flash.png";
import folder from "@/images/3d/folder.png";
import key from "@/images/3d/key.png";
import lock from "@/images/3d/lock.png";
import locker from "@/images/3d/locker.png";
import medal from "@/images/3d/medal.png";
import megaphone from "@/images/3d/megaphone.png";
import mobile from "@/images/3d/mobile.png";
import notebook from "@/images/3d/notebook.png";
import paintKit from "@/images/3d/paint-kit.png";
import pencil from "@/images/3d/pencil.png";
import rocket from "@/images/3d/rocket.png";
import rollBrush from "@/images/3d/roll-brush.png";
import rupee from "@/images/3d/rupee.png";
import shield from "@/images/3d/shield.png";
import target from "@/images/3d/target.png";
import tick from "@/images/3d/tick.png";
import zoom from "@/images/3d/zoom.png";
import circuit from "@/images/photos/circuit.webp";
import codeScreen from "@/images/photos/code-screen.webp";
import laptopCode from "@/images/photos/laptop-code.jpg";
import matrix from "@/images/photos/matrix.webp";
import padlocks from "@/images/photos/padlocks.webp";
import wireframes from "@/images/photos/wireframes.webp";

export const photos = { circuit, codeScreen, laptopCode, matrix, padlocks, wireframes };

/** Floating 3D icons used inside the large illustrations. */
export const accents = { shield, lock, tick };

// The keys below match the ids in data/services.ts and data/catalog.ts.
export const pillarIcons = { security: shield, design: paintKit, web: computer };

export const statIcons = { tools: bag, categories: folder, genuine: tick, delivery: flash };

export const reasonIcons = { instant: rocket, private: lock, price: rupee, trusted: medal };

export const serviceIcons = {
  vapt: target,
  "web-security": zoom,
  hardening: locker,
  branding: rollBrush,
  creatives: megaphone,
  websites: mobile,
};

export const tileIcons = {
  all: cube,
  "ai-dev": bulb,
  design: colorPalette,
  content: pencil,
  business: chart,
  edu: notebook,
  "short-term": clock,
  lifetime: key,
};
