import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kazemi Construction LLC",
  description: "Trusted general contractor for remodeling, renovations, additions, and outdoor spaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
