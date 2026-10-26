import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { C as useAfriStore } from "./router-B113j5pF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/device-qr-BxMMfjE6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DeviceQr({ token, caption, quiet = false }) {
	const [svg, setSvg] = (0, import_react.useState)(null);
	const [ms, setMs] = (0, import_react.useState)(null);
	const [href, setHref] = (0, import_react.useState)(`/d/${token}`);
	const sw = useAfriStore((s) => s.locale) === "sw";
	(0, import_react.useEffect)(() => {
		let cancel = false;
		const path = `/d/${encodeURIComponent(token)}`;
		const url = `${window.location.origin}${path}`;
		setHref(url);
		const start = performance.now();
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then(async (QR) => {
			const loaded = performance.now();
			const markup = await QR.toString(url, {
				type: "svg",
				margin: 1,
				width: quiet ? 112 : 196,
				errorCorrectionLevel: "M",
				color: {
					dark: "#0E3B34",
					light: "#F4F0E6"
				}
			});
			if (cancel) return;
			setMs({
				load: Math.round(loaded - start),
				draw: Math.max(1, Math.round(performance.now() - loaded))
			});
			setSvg(markup.startsWith("<svg") ? markup : null);
		});
		return () => {
			cancel = true;
		};
	}, [token]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "grid justify-items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid place-items-center rounded-xl bg-[#F4F0E6] p-2 ${quiet ? "size-28" : "size-52"}`,
			"aria-label": caption ?? "Device passport QR",
			children: svg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `${quiet ? "size-24" : "size-44"} [&>svg]:size-full`,
				dangerouslySetInnerHTML: { __html: svg }
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-2 text-center text-xs text-muted-ink",
				children: sw ? "Inachorwa…" : "Drawing the mark…"
			})
		}), quiet ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "max-w-xs text-center text-xs text-muted-ink",
			children: [ms ? sw ? `Imechorewa hapa kwa ms ${ms.draw}. Kisomaji kiliingia kwa ms ${ms.load}. Hakuna kilichotumwa.` : `Drawn in this browser in ${ms.draw} ms. The encoder loaded in ${ms.load} ms. Nothing was sent.` : sw ? "Alama inachorwa hapa. Hakuna kinachotumwa." : "The mark is drawn here. Nothing is sent.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block break-all font-mono text-[11px] text-teal-deep",
				children: href
			})]
		})]
	});
}
//#endregion
export { DeviceQr as t };
