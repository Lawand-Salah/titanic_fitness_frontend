import "./Home.css";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HeroImage from "../../Asset/images/banner_main.png";
import Wave from "../../Components/Wave/Wave.js";
import Treadmill from "../../Asset/images/treadmill.png";

export default function Home(){
    return(
        <>
            <HeroBanner bgImage={HeroImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through your fitness goals</h2>
            </HeroBanner>
            <Wave text="LET THESE BENEFITS SINK IN"/>
            <section className="feature-grid">
                <div className="feature-container">
                    <img src={Treadmill} alt="Treadmill 1"/>
                    <span>State of the art equipment</span>
                </div>
                <div className="feature-container">
                    <img src={Treadmill} alt="Treadmill 2"/>
                    <span>State of the art equipment</span>
                </div>
                <div className="feature-container wide">
                    <img src={Treadmill} alt="Treadmill 3"/>
                    <span>State of the art equipment</span>
                </div>
            </section>

            <section className="articles-section">
                <h2>Gym is just the tip of the iceberg</h2>
                <h3>Hit the books</h3>
                <div className="articles-container">
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </section>
        </>
    )
}
