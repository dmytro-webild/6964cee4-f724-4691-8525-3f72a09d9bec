import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";
import Tag from "@/tag/Tag";



export const metadata: Metadata = {
  title: "Demo Pflegedienstseite | 1:1 Intensiv- & Ambulante Pflege | Ceociety",
  description: "Spezialisierte ambulante Intensivpflege in Hamburg. Wir bieten auch 1:1 Betreuung. ",
  openGraph: {
    "siteName": "Respiro Care Hamburg",
    "type": "website"
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        <Tag />
</body>
      </ServiceWrapper>
    </html>
  );
}
