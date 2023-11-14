import "@/styles/globals.css";
import { Geologica } from "next/font/google";

const geo = Geologica({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin", "latin-ext"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={geo.className}>
      <Component {...pageProps} />
    </div>
  );
}
