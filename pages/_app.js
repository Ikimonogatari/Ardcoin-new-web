import "@/styles/globals.css";
import { Geologica } from "next/font/google";
import Script from "next/script";

const geo = Geologica({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin", "latin-ext"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={geo.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HCR5VHKTTP " />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HCR5VHKTTP ');
        `}
      </Script>
      <Component {...pageProps} />
    </div>
  );
}
