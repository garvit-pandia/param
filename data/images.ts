// Every picture on the site is imported here, so swapping one is a one-line change.
// Sources and licences are listed in docs/image-credits.md.
import chatBubble from "@/images/3d/chat-bubble.png";
import computer from "@/images/3d/computer.png";
import fileText from "@/images/3d/file-text.png";
import flash from "@/images/3d/flash.png";
import lock from "@/images/3d/lock.png";
import paintKit from "@/images/3d/paint-kit.png";
import rocket from "@/images/3d/rocket.png";
import rupee from "@/images/3d/rupee.png";
import shield from "@/images/3d/shield.png";
import thumbUp from "@/images/3d/thumb-up.png";
import circuitChip from "@/images/photos/circuit-chip.webp";
import codeScreen from "@/images/photos/code-screen.webp";
import laptopCode from "@/images/photos/laptop-code.webp";
import serverRoom from "@/images/photos/server-room.webp";
import wireframes from "@/images/photos/wireframes.webp";

export const photos = { circuitChip, codeScreen, laptopCode, serverRoom, wireframes };

// The keys below match the ids in data/services.ts.
export const craftIcons = { security: shield, design: paintKit, web: computer };

export const craftPhotos = {
  security: {
    src: circuitChip,
    alt: "Close-up of a computer chip on a blue circuit board",
  },
  design: {
    src: wireframes,
    alt: "Hand-drawn website wireframes in a notebook",
  },
  web: {
    src: codeScreen,
    alt: "Lines of code on a screen",
  },
};

export const stepIcons = { brief: chatBubble, plan: fileText, work: rocket, handover: thumbUp };

export const promiseIcons = { instant: flash, private: lock, price: rupee };
