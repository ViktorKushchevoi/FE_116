import { NavLink } from "react-router-dom";
import phoneIcon from '../../assets/img/phone-icon.png';
import tabletIcon from '../../assets/img/tablet-icon.png';
import smarttvIcon from '../../assets/img/smarttv-icon.png';
import laptopIcon from '../../assets/img/laptop-icon.png';
import consoleIcon from '../../assets/img/console-icon.png';
import headsetIcon from '../../assets/img/headset-icon.png';
import '../../assets/scss/home.scss';

function Home() {
    return (
        <>
            <section className='main-screen'>
                <h1>The Best Streaming Experience</h1>
                <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                    With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.
                    You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <NavLink to={"movies"}><button>Start watching</button></NavLink>
            </section>
            <section className='devices container'>
                <h1  className="main-title">We Provide you streaming experience across various devices.</h1>
                <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of
                    devices, ensuring that you never miss a moment of entertainment.</p>
                <div className="devices-list">
                    <div className="device">
                        <div className="device-title">
                            <img src={phoneIcon} alt="logo" />
                            <h3>Smartphones</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="device">
                        <div className="device-title">
                            <img src={tabletIcon} alt="logo" />
                            <h3>Tablet</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="device">
                        <div className="device-title">
                            <img src={smarttvIcon} alt="logo" />
                            <h3>Smart TV</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="device">
                        <div className="device-title">
                            <img src={laptopIcon} alt="logo" />
                            <h3>Laptops</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="device">
                        <div className="device-title">
                            <img src={consoleIcon} alt="logo" />
                            <h3>Gaming Consoles</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="device">
                        <div className="device-title">
                            <img src={headsetIcon} alt="logo" />
                            <h3>VR Headsets</h3>
                        </div>
                        <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Home;