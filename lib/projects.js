// Project content for /projects. `summary` is trusted, hand-written HTML.
// `slug` links an entry to its card metadata in ./projectImages.js and to the
// section list at the bottom of this file.
export const contentArr = [
  {
    slug: "pento",
    tags: ["platformer game", "python", "pygame"],
    theme: "#27ae60",
    text: "Pento’s Pledge is a short platformer game I made in highschool using Pygame as my final project for my Programming 12 class. This was my first introduction to Object Oriented Programming, and boy was it a game-changer (pun intended)! While the game itself isn’t technically very impressive, it taught me a lot in terms of how game mechanics are designed, how animations are made through sprite sheets, and how we can create a world of our own and code our set of laws of Physics. <br /><br />Initially, I wanted to make a 10 level game, but time constraints only allowed me to make it to only 2 levels! I had spent more than 60+ hours making this game, and I learned the hard way that most of the time isn’t spent coding/debugging, but in designing the game and creating digital assets for. Nevertheless, I am still very proud of what I made.<br /><br /><b>Key takeaways from the project</b><ul><li>Become with comfortable with OOP principles and coding structure</li><li>Learned the basics of sprite animation and game design</li><li>Learned to manipulate UI elements in pygame and the essentials of color theory </li></ul>",
    hover: "#2ecc71",
    title: "Pento's Pledge",
    btnLink: "https://github.com/camelNotationsdjkh/Pento-s-Pledge",
    theWin: true,
  },
  {
    slug: "nika",
    tags: ["discord Bot", "discord.js", "javascript", "google sheets"],
    theme: "#2980b9",
    text: "UBC confession's Facebook page, a historic place where students went to anonymously send in their secrets/crushes/rants, was closing down after years of operation. I couldn't let the legacy of such an integral part of UBC history die so I suggested that we create a similar confessions channel on our year's engineering channel. While the moderators and admin were receptive, they were rightfully worried about the implications of letting users send in whatever they want. The bots that were available didn't have (good) moderation features and so the idea would likely go no where — useless I made it myself. <br /> <br /><b>Key takeaways from the project</b><ul><li>Further mastered OOP fundamentals through discord.js which heavily relies on class methods and the library itself is entirely object oriented</li><li>Collaborated with others to test bugs on the prototypes and use their feedback to implement new features. </li><li>Learned about the terrors of trying to host for free! Eventually I had to opt with a paid option to reduce downtime of the bot.</li></ul><br />",
    hover: "#3498db",
    title: "Nika | Confession bot",
    btnLink: "https://github.com/camelNotationsdjkh/Nika-confessions",
    theWin: true,
  },
  {
    slug: "world",
    tags: ["history", "website", "javascript"],
    theme: "#c0392b",
    text: "This was the product of one of my assignments from History 12, where Mr. Mergens (one of my all time favourite teachers from highschool), told us to make a timeline with annotations of the 40 most important dates/events of WW2. I really wanted to impress, and rather than doing a Powerpoint presentation like most, I opted to utlize my experience in web development and make a website! With an extra X factor of it being horizontally scrolling. <br /><br />The problem was that it was much more technically challenging than I had expected, as I learned the hard way that HTML and CSS was built around vertically scrolling and as a result getting things to align perfectly was nothing short of a nightmare. And perhaps my biggest regret is that making it horizontally scrolling also makes it almost impossible to make responsive and fit onto a phone screen. Yet despite all the adversity, when I look at how beautiful the final product is I can condifidently say the 70+ hours I put into it was worth it.",
    hover: "#e74c3c",
    title: "WW2 - The War to end all Wars - Timeline",
    btnLink: "https://github.com/camelNotationsdjkh/WW2-timeline",
    theWin: true,
  },
  {
    slug: "reflow",
    tags: ["assembly", "AT89LP51RC2 microcontroller", "group work"],
    theme: "#2c3e50",
    text: "<b>Group members:</b> Charles Surianto (Head chef), Musa Charara, Peter Woolsey, Nathan Roorda, Lingxiao Tian<br /><br />In this group project, we designed a reflow oven controller. Reflow soldering is a technique to precisely solder surface mount components to a PCB and is often used in industry. The goal of this project was to create a control system that would control the temperature inside the oven with the PCB inside and achieve a user-set temperature profile. For this purpose, we used the AT89LP51RC2 microcontroller and in the controller we implemented  a user interface for setting the temperature profile, as well as temperature sensors for monitoring the temperature of the oven and the PCB. The project involves designing the hardware and software for the reflow oven controller, as well as testing and validating the controller to ensure that it meets the required specifications. <br /> <br />Additionally, we had a PID feedback loop for the temperature inside to minimize error and a graphical Python interface that would chart the real-time temperature inside the oven to the ideal reflow profile. We also had a sound system and LEDs for alerting the user when it was safe to remove the PCB.",
    hover: "#34495e",
    title: "Reflow oven controller",
    btnLink: "/projects/reflow",
    theWin: false,
  },
  {
    slug: "robot",
    tags: ["C", "EFM8 & STM32 microcontrollers", "group work"],
    theme: "#8e44ad",
    text: "<b>Group members:</b> Charles Surianto (Head chef), Musa Charara, Peter Woolsey, Nathan Roorda, Lingxiao Tian <br /><br />For our last project in our design class, me and my team built a wirelessly controlled robot car using low-frequency magnetic waves. The project consists of two parts: a robot and a remote controller. The robot is based on the STM32L051 microcontroller and has two modes of operation: beacon/tracking mode and controller mode. In the tracking mode, the robot would maintain its angle and distance away from the remote. When toggled into the controller mode, the robot follows the directional commands sent by the joystick in the remote; directions such as North (relative to the robot), East, Southwest, etc.<br /> <br />Our final product is a multi-directional, fine motor controllable robot outfitted with multi-colored RGB headlights, and a sonar powered obstacle detection and alarm system.",
    hover: "#9b59b6",
    title: "Magnetically controlled robot car",
    btnLink: "/projects/robot",
    theWin: false,
  },
  {
    slug: "website",
    tags: ["React", "Next.js", "JavaScript"],
    theme: "#EAB543",
    text: "This website has been one of my biggest projects of the year. I was inspired to make one after watching a video by Fireship.io on Next.js, a revolutionary React based framework, and all the cool things you could do with it. However, what really pushed me was seeing a stunning personal website my friends made using React and Angular. I knew there would be a learning curve for using a framework, but I am really glad that I did because the structure and background power of a framework is almost essential to create any large and complex web application. In some sense, I was playing on hard mode by insisting on using vanilla HTML, CSS and Javascript!<br /><br /><b>Key Takewaways from the project</b><br /><ul><li>Learned React and Next.js structure: JSX, Hooks, routing, React componenets, mounting and unmounting, and componenet lifecycles.</li><li>Implemented a style module per compoenent to decrease CSS cluttering</li><li>Employed media queries to make the application fully responsive</li></ul><br />Unfortunately, I haven't gotten the chance to use one of Next.js's most powerful tool: Server-side rendering! I hope do so soon either with this site or with my next web app.",
    hover: "#f1c40f",
    title: "Personal Website",
    btnLink: "https://github.com/camelNotationsdjkh/labibkow",
    theWin: false,
  },
];

// Card copy + accent colour for the grid, keyed by the entry's `slug`.
// Card images live in ./projectImages.js.
export const cardMeta = {
  pento: { label: "Pento's Pledge", color: "#16a085" },
  nika: { label: "Nika: Discord Confessions Bot", color: "#2980b9" },
  world: { label: "WW2 Timeline Website", color: "#c0392b" },
  website: { label: "Personal Website", color: "#EAB543" },
  reflow: { label: "Reflow Oven Controller", color: "#2d3436" },
  robot: { label: "Magnetically controlled Robot", color: "#8e44ad" },
};

export const sections = [
  { heading: "Software 💻", slugs: ["pento", "nika", "world", "website"] },
  { heading: "Hardware 🤖", slugs: ["reflow", "robot"] },
];

export const projectsBySlug = Object.fromEntries(
  contentArr.map((project) => [project.slug, project])
);

