import { ButtonCta } from "./container";

const Navbar = () => {
    return (
        <nav style={{display: 'flex', justifyContent :'space-between', alignItems : 'center', color :'white', position : 'fixed', backdropFilter : 'blur(5px)', zIndex :"2", padding : '.1% 5%'}}>
            <h1 style={{width : '100px'}}>Navbar</h1>
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