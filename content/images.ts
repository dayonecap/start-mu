/**
 * Image manifest. Each slot renders a placeholder until a file exists at `src`.
 * Drop the file into public/images with the name shown, keep the aspect ratio, and the site picks it up.
 * Alt text is written for screen readers and search; keep it factual.
 */
export type ImageSlot = {
  src: string;
  alt: string;
  caption?: string;
  /** width / height */
  aspect: number;
  /** Shown inside the placeholder to say what should go here */
  brief: string;
};

export const images: Record<string, ImageSlot> = {
  homeHero: {
    src: "/images/home-hero.jpg",
    alt: "The north coast of Mauritius seen from the lagoon in the early morning",
    aspect: 4 / 5,
    brief: "Portrait format. Mauritius as a place to live, not a resort. Morning light, a coastline or a lane, no people in the foreground. Not a drone shot of a hotel pool.",
  },
  homeMauritius: {
    src: "/images/home-mauritius.jpg",
    alt: "A residential street in Moka with the mountains behind",
    aspect: 3 / 2,
    brief: "Landscape. Everyday Mauritius: a street in Moka or Tamarin, a market, a school run. Shows life here, not tourism.",
  },
  residency: {
    src: "/images/residency.jpg",
    alt: "A view across the lagoon at Grand Baie",
    aspect: 3 / 2,
    brief: "Landscape. Quiet coastal view. This sits above the route comparison and should not compete with it.",
  },
  property: {
    src: "/images/property.jpg",
    alt: "A villa under construction in an approved development on the west coast",
    aspect: 3 / 2,
    brief: "Landscape. A real development, ideally one you have acted on, at the construction or completed stage. Not a developer rendering.",
  },
  about: {
    src: "/images/herman-suhirman.jpg",
    alt: "Herman Suhirman, General Manager of Intrasia Corporate Services",
    aspect: 4 / 5,
    brief: "Portrait format. Herman, photographed in daylight, plain background or the office. Looking at the camera. No stock-style handshake.",
  },
  lea: {
    src: "/images/lea-permal.jpg",
    alt: "Lea Permal, Senior Client Executive at start.mu",
    aspect: 4 / 5,
    brief: "Portrait format, shot to match Herman's: same daylight, same background, same distance. The pair should read as one set.",
  },
  concierge: {
    src: "/images/concierge.jpg",
    alt: "A family home in Mauritius with the veranda open to the garden",
    aspect: 3 / 2,
    brief: "Landscape. A house a family would live in: veranda, garden, ordinary. This is about settling in, not luxury.",
  },
};

/**
 * The home page film. Host the file off the repository (Vercel Blob, Cloudflare Stream, or similar)
 * and put the URLs here. Until `src` is set, the section shows the homeMauritius image slot instead.
 * Brief: 15 to 20 seconds, 1080p, no audio track, under 3 MB, loop-friendly. Poster: one still frame as JPEG.
 */
export const homeFilm: { src: string | null; poster: string; label: string } = {
  src: null,
  poster: "/images/home-film-poster.jpg",
  label: "Aerial film over the mountains of central Mauritius",
};
