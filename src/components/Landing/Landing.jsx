import "./Landing.css"
import landingFlashImage from "./../../assets/Flash-PNG-Pic.png"
import Typewriter from 'typewriter-effect';


const LandingPage = () => {
    return (
        <div className="landing">
            <div data-aos="fade-right" className="landing-text">
            <h1>Can you type ?</h1>
            <div className="typewriter">
                <Typewriter
                options={{
                    strings: ['Fast?', 'Accurately?' , 'Professionaly'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>
            </div>
            <div  data-aos="fade-left" className="landing-right">
                <img src={landingFlashImage} alt="" />
            </div>
        </div>
    );
}
 
export default LandingPage;