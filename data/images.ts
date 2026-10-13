// Every picture on the site is imported here, so swapping one is a one-line change.
// Sources and licences are listed in docs/image-credits.md.
import bulb from "@/images/3d/bulb.png";
import chart from "@/images/3d/chart.png";
import computer from "@/images/3d/computer.png";
import cube from "@/images/3d/cube.png";
import flash from "@/images/3d/flash.png";
import folder from "@/images/3d/folder.png";
import lock from "@/images/3d/lock.png";
import medal from "@/images/3d/medal.png";
import mobile from "@/images/3d/mobile.png";
import notebook from "@/images/3d/notebook.png";
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
import architect from "@/images/work/architect.webp";
import clinic from "@/images/work/clinic.webp";
import photographer from "@/images/work/photographer.webp";
import shivaay from "@/images/work/shivaay.webp";
import umesh from "@/images/work/umesh.webp";

export const photos = { circuit, codeScreen, laptopCode, matrix, padlocks, wireframes };

/** Floating 3D icons used inside the large illustrations. */
export const accents = { shield, lock, tick };

/** Screenshots of the websites in "Our Work". The keys match the ids in data/work.ts. */
export const workShots = { shivaay, umesh, photographer, architect, clinic };

// The keys below match the ids in data/services.ts.
export const areaIcons = { software: computer, ai: flash, security: shield, saas: rocket };

export const statIcons = { areas: folder, sites: computer, checks: zoom, permission: tick };

export const reasonIcons = { permission: lock, reports: notebook, team: medal, price: rupee };

export const serviceIcons = {
  websites: mobile,
  software: chart,
  automation: bulb,
  testing: target,
  products: cube,
  branding: rollBrush,
};
