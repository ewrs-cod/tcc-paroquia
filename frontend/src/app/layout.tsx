import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";

// Fonte para Títulos (Sacra/Clássica)
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"], // Regular e Negrito
});

// Fonte para Texto Corrido (Leitura)
const lato = Lato({ 
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Paróquia Imaculado Coração de Maria",
  description: "Website Oficial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cinzel.variable} ${lato.variable} font-sans`}>{children}</body>
    </html>
  );
}