// Every picture on the site is imported here, so swapping one is a one-line change.
// Sources and licences are listed in docs/image-credits.md.
import bulb from "@/images/3d/bulb.png";
import chart from "@/images/3d/chart.png";
import chatBubble from "@/images/3d/chat-bubble.png";
import computer from "@/images/3d/computer.png";
import cube from "@/images/3d/cube.png";
import fileText from "@/images/3d/file-text.png";
import flash from "@/images/3d/flash.png";
import lock from "@/images/3d/lock.png";
import medal from "@/images/3d/medal.png";
import mobile from "@/images/3d/mobile.png";
import notebook from "@/images/3d/notebook.png";
import paintKit from "@/images/3d/paint-kit.png";
import rocket from "@/images/3d/rocket.png";
import rupee from "@/images/3d/rupee.png";
import shield from "@/images/3d/shield.png";
import target from "@/images/3d/target.png";
import thumbUp from "@/images/3d/thumb-up.png";
import zoom from "@/images/3d/zoom.png";
import circuitChip from "@/images/photos/circuit-chip.webp";
import codeScreen from "@/images/photos/code-screen.webp";
import laptopCode from "@/images/photos/laptop-code.webp";
import serverRoom from "@/images/photos/server-room.webp";
import wireframes from "@/images/photos/wireframes.webp";
import architect from "@/images/work/architect.webp";
import clinic from "@/images/work/clinic.webp";
import photographer from "@/images/work/photographer.webp";
import shivaay from "@/images/work/shivaay.webp";
import umesh from "@/images/work/umesh.webp";

export const photos = { circuitChip, codeScreen, laptopCode, serverRoom, wireframes };

/** Screenshots of the websites in "Our Work". The keys match the ids in data/work.ts. */
export const workShots = { shivaay, umesh, photographer, architect, clinic };

// The keys below match the ids in data/services.ts.
export const areaIcons = { software: computer, ai: flash, security: shield, saas: rocket };

export const securityIcons = { vapt: target, osint: zoom, cloud: lock };

export const serviceIcons = {
  websites: mobile,
  software: chart,
  automation: bulb,
  testing: shield,
  products: cube,
  branding: paintKit,
};

export const stepIcons = { brief: chatBubble, plan: fileText, work: rocket, handover: thumbUp };

export const reasonIcons = { permission: lock, reports: notebook, team: medal, price: rupee };
