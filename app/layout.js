import MainHeader from "../components/main-header";
import "./globals.css";

export const metadata = {
  title: "Next.js page Routing & Rendering",
  description: "How to route to different pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
