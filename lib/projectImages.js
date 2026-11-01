// Static image imports for the project grid. Static imports (instead of
// background-image URLs) let next/image generate responsive srcsets, lazy-load
// offscreen cards, and use the intrinsic size.
import pentoBig from "@/public/project/pentoBig.webp";
import pentoSmall from "@/public/project/pentoSmall.webp";
import nikaBig from "@/public/project/nikaBig.webp";
import nikaSmall from "@/public/project/nikaSmall.webp";
import worldBig from "@/public/project/worldBig.webp";
import worldSmall from "@/public/project/worldSmall.webp";
import webBig from "@/public/project/webBig.webp";
import webSmall from "@/public/project/webSmall.webp";
import reflowBig from "@/public/project/reflowBig.webp";
import reflowSmall from "@/public/project/reflowSmall.webp";
import robotBack from "@/public/project/robotBack.webp";
import magSmall from "@/public/project/magSmall.webp";

export const cardImages = {
  pento: pentoBig,
  nika: nikaBig,
  world: worldBig,
  website: webBig,
  reflow: reflowBig,
  robot: robotBack,
};

export const detailImages = {
  pento: pentoSmall,
  nika: nikaSmall,
  world: worldSmall,
  website: webSmall,
  reflow: reflowSmall,
  robot: magSmall,
};
