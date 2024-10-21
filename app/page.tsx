import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./krmn-style.css";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";



 export default function MyApp() {
   return (
      <section>
    <Hero/>
    <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <FavColor/>
  </section>
 );
 }



 