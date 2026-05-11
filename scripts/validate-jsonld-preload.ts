/**
 * Preloaded plugins for the JSON-LD build-time validator.
 * Registered via `bun --preload` so the stubs intercept module resolution
 * BEFORE any route imports run.
 */
import { plugin } from "bun";

plugin({
  name: "asset-stub",
  setup(build) {
    build.onLoad(
      { filter: /\.(png|jpe?g|webp|avif|gif|svg)(\?.*)?$/ },
      () => ({
        contents:
          'export default "";\n' +
          'export const sources = { avif: "", webp: "", png: "" };\n' +
          'export const img = { src: "", w: 1, h: 1 };\n',
        loader: "js",
      }),
    );
  },
});

plugin({
  name: "component-stub",
  setup(build) {
    build.onLoad(
      { filter: /\/components\/site\/.+\.tsx?$/ },
      () => ({
        contents:
          "const s = () => null;\n" +
          "export const Nav = s; export const Footer = s; export const Hero = s;\n" +
          "export const Intro = s; export const Featured = s; export const Services = s;\n" +
          "export const ImageBreak = s; export const Stories = s; export const WhyChoose = s;\n" +
          "export const Faqs = s; export const TalkContact = s; export const PixelIntro = s;\n" +
          "export const CurvedHeroCarousel = s; export const Pricing = s; export const Locations = s;\n" +
          "export const TrustBlock = s; export const LongForm = s; export const CelebrityCarousel = s;\n" +
          "export const Srk3DCarousel = s; export const ActressCoverflow = s;\n" +
          "export const CategoryPageLayout = s;\n" +
          "export default s;\n",
        loader: "js",
      }),
    );
  },
});

plugin({
  name: "tanstack-stub",
  setup(build) {
    build.onResolve({ filter: /^@tanstack\/react-router$/ }, () => ({
      path: "tanstack-router-stub",
      namespace: "stub",
    }));
    build.onLoad({ filter: /^tanstack-router-stub$/, namespace: "stub" }, () => ({
      contents:
        "const s = () => null;\n" +
        "export const createFileRoute = (path) => (cfg) => {\n" +
        "  if (typeof cfg.head === 'function') {\n" +
        "    try { cfg.head({ loaderData: {}, params: {}, match: {} }); }\n" +
        "    catch (e) { console.warn('[validate-jsonld] head() threw for', path, e?.message); }\n" +
        "  }\n" +
        "  return { ...cfg, fullPath: path };\n" +
        "};\n" +
        "export const createRootRoute = (cfg) => cfg;\n" +
        "export const Link = s; export const Outlet = s;\n" +
        "export const HeadContent = s; export const Scripts = s;\n" +
        "export const useNavigate = () => s;\n" +
        "export const useRouter = () => ({});\n" +
        "export const useLocation = () => ({ pathname: '/' });\n",
      loader: "js",
    }));
  },
});