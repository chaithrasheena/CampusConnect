
import "./globals.css";
import { ItemProvider } from "../context/ItemContext";

export const metadata = {
  title: "CampusConnect",
  description: "A College Lost and Found Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemProvider>
          {children}
        </ItemProvider>
      </body>
    </html>
  );
}
