import { useEffect, useState } from "react";
import { useAfriStore } from "@/lib/store";

type Timing = { load: number; draw: number };

export function DeviceQr({
  token,
  caption,
  quiet = false,
}: {
  token: string;
  caption?: string;
  quiet?: boolean;
}) {
  const [svg, setSvg] = useState<string | null>(null);
  const [ms, setMs] = useState<Timing | null>(null);
  const [href, setHref] = useState(`/d/${token}`);
  const sw = useAfriStore((s) => s.locale) === "sw";

  useEffect(() => {
    let cancel = false;
    const path = `/d/${encodeURIComponent(token)}`;
    const url = `${window.location.origin}${path}`;
    setHref(url);
    const start = performance.now();
    import("qrcode").then(async (QR) => {
      const loaded = performance.now();
      const markup = await QR.toString(url, {
        type: "svg",
        margin: 1,
        width: quiet ? 112 : 196,
        errorCorrectionLevel: "M",
        color: { dark: "#0E3B34", light: "#F4F0E6" },
      });
      if (cancel) return;
      setMs({ load: Math.round(loaded - start), draw: Math.max(1, Math.round(performance.now() - loaded)) });
      setSvg(markup.startsWith("<svg") ? markup : null);
    });
    return () => {
      cancel = true;
    };
  }, [token]);

  return (
    <figure className="grid justify-items-center gap-2">
      <div
        className={`grid place-items-center rounded-xl bg-[#F4F0E6] p-2 ${quiet ? "size-28" : "size-52"}`}
        aria-label={caption ?? "Device passport QR"}
      >
        {svg ? (
          <div className={`${quiet ? "size-24" : "size-44"} [&>svg]:size-full`} dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <p className="px-2 text-center text-xs text-muted-ink">{sw ? "Inachorwa…" : "Drawing the mark…"}</p>
        )}
      </div>
      {quiet ? null : (
        <figcaption className="max-w-xs text-center text-xs text-muted-ink">
          {ms
            ? sw
              ? `Imechorewa hapa kwa ms ${ms.draw}. Kisomaji kiliingia kwa ms ${ms.load}. Hakuna kilichotumwa.`
              : `Drawn in this browser in ${ms.draw} ms. The encoder loaded in ${ms.load} ms. Nothing was sent.`
            : sw
              ? "Alama inachorwa hapa. Hakuna kinachotumwa."
              : "The mark is drawn here. Nothing is sent."}
          <span className="mt-1 block break-all font-mono text-[11px] text-teal-deep">{href}</span>
        </figcaption>
      )}
    </figure>
  );
}
