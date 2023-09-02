import './footer.scss'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return(

        <div className="footer">
            <div className='footerSections'>
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Jobs</a>
                <a href="#">For the Record</a>
            </div>
            <div className='footerSections'>
                <h4>Communities</h4>
                <a href="#">For Artists</a>
                <a href="#">Developers</a>
                <a href="#">Advertising</a>
            </div>
            <div className='footerSections'>
                <h4>UseFule Links</h4>
                <a href="#">Support</a>
                <a href="#">Free Mobile App</a>
            </div>
            <div className='footerSections'>
                <div className="footerIcons">
                    <div className='footerIconsItems'>
                        <AiFillInstagram/>
                    </div>
                    <div className='footerIconsItems'>
                        <BsFacebook/>
                    </div>
                    <div className='footerIconsItems'>
                        <AiFillTwitterCircle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer