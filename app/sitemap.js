export default function sitemap() {
  const baseUrl = "https://labibkow.com";

  const routes = [
    { path: "", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/projects/reflow", priority: 0.8 },
    { path: "/projects/robot", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/resume", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
