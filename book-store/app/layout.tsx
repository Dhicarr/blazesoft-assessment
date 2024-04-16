import type { ReactNode } from "react";
import { StoreProvider } from "./redux/StoreProvider";
import type { Metadata } from "next";

import "./globals.scss";

interface Props {
  readonly children: ReactNode;
}
export const metadata: Metadata = {
  title: "Book Store",
};
export default function RootLayout({ children }: Props) {
  return (
      <html lang="en">
        <body>
          <StoreProvider>
            {children}
          </StoreProvider>
        </body>
      </html>
  );
}
