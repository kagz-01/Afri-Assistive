import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import { useAfriStore } from "@/lib/store";
import appCss from "../styles.css?url";

const APP_NAME = "AfriAssistive";

function DocumentShell() {
  const locale = useAfriStore((s) => s.locale);
  const textScale = useAfriStore((s) => s.textScale);
  const contrast = useAfriStore((s) => s.contrast);
  const fontSize = textScale === "xl" ? "1.1875rem" : textScale === "lg" ? "1.0625rem" : "1rem";

  return (
    <html lang={locale === "sw" ? "sw" : "en"} data-contrast={contrast ? "true" : "false"} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body style={{ ["--app-font-size" as string]: fontSize }}>
        <PreviewHostBridge />
        <AuthProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Outlet />
          <Toaster position="bottom-right" richColors />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "AfriAssistive — locally made assistive technology and the service chain that keeps devices in use across Kenya.",
      },
      { name: "theme-color", content: "#0E3B34" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap",
      },
    ],
  }),
  component: DocumentShell,
});
