import "./Home.css";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HeroImage from "../../Asset/images/banner_main.png";

export default function Home(){
    return(
        <>
            <HeroBanner bgImage={HeroImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through your fitness goals</h2>
            </HeroBanner>
                this is the home page
        </>
    )
}
