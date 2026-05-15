import "./globals.css";

export const metadata = {
  title: "PaSakay | Rides, Food, and Essentials",
  description:
    "Book rides, order from nearby merchants, and track every trip with PaSakay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
