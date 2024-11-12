import "./HeroBanner.css";

export default function HeroBanner({bgImage, children}){
    return(
        <div className="hero-banner" style={{
            backgroundImage: `url(${bgImage})`
        }}>
            {children}
        </div>
    )
}