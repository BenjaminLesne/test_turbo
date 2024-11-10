import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FeedbackForm } from "@/features/feedback/components/feedback-form";
import { PROJECT_NAME } from "@/lib/constants";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: "Résumé des offres des marchés public",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const FeedbackButton = () => {
  return (
    <Popover>
      <PopoverTrigger>Feedback</PopoverTrigger>
      <PopoverContent>
        <FeedbackForm />
      </PopoverContent>
    </Popover>
  );
};

const Header = () => {
  return (
    <header>
      <FeedbackButton />
    </header>
  );
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${GeistSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
