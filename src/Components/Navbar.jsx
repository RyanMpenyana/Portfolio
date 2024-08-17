import { ButtonCta } from "./container";
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav style={{display: 'flex', justifyContent :'space-between', alignItems : 'center', color :'white', position : 'fixed', backdropFilter : 'blur(5px)', zIndex :"2", padding : '.5% 5%'}}>
            <h1 style={{width : '100px'}}>
                <img style={{borderRadius : 50, width : 60, height : 60}} src={Logo} alt="" />
            </h1>
            <ul style={{display : 'flex', width : '200px', textAlign : 'center', listStyle : 'none'}}>
                <li>Hire</li>
                <li>Projects</li>
            </ul>
            <div style={{width : '130px'}}>
                <ButtonCta>Contact</ButtonCta>
            </div>
        </nav>
    )
}
export default Navbar;