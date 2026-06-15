import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MuslimKids - Perpustakaan Digital Anak Islam Terlengkap",
  description: "Dapatkan akses ke 100+ koleksi buku & worksheet anak Islam dengan ilustrasi full-color untuk belajar seru setiap hari. Hanya Rp 20.000!",
  keywords: "buku anak islam, worksheet ramadhan, belajar islam anak, ebook anak muslim, muslimkids",
  authors: [{ name: "MuslimKids" }],
  openGraph: {
    title: "MuslimKids - Perpustakaan Digital Anak Islam Terlengkap",
    description: "Dapatkan akses ke 100+ koleksi buku & worksheet anak Islam dengan ilustrasi full-color untuk belajar seru setiap hari. Hanya Rp 20.000!",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1372981054736242');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1372981054736242&ev=PageView&noscript=1"
            alt="meta pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
