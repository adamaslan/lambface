import "./globals.css";
import "@/styles/animations.css";
import "@/styles/glows.css";
import "@/styles/scanlines.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-cyan-300 font-mono circadian">
        {children}
      </body>
    </html>
  );
}