import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'OpsPilot AI - Automate & Scale Your Business with AI',
  description: 'OpsPilot AI builds intelligent automation systems to streamline workflows, capture leads, and scale your operations efficiently for a premium business experience. Book a free strategy call.',
  keywords: ["AI automation, business operations, lead capture, workflow optimization, AI systems, business scaling, OpsPilot AI, artificial intelligence, SaaS automation, B2B AI solutions"],
  openGraph: {
    "title": "OpsPilot AI - Automate & Scale Your Business with AI",
    "description": "OpsPilot AI builds intelligent automation systems to streamline workflows, capture leads, and scale your operations efficiently for a premium business experience.",
    "url": "https://www.opspilotai.co.uk",
    "siteName": "OpsPilot AI",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eu7XtVoAq5aQNPhSuBTtJ7PQYQ/uploaded-1781017061711-viofnidk.png",
        "alt": "OpsPilot AI Logo"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "OpsPilot AI - Automate & Scale Your Business with AI",
    "description": "OpsPilot AI builds intelligent automation systems to streamline workflows, capture leads, and scale your operations efficiently for a premium business experience.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eu7XtVoAq5aQNPhSuBTtJ7PQYQ/uploaded-1781017061711-viofnidk.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
