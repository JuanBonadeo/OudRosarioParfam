import '../Footer/footer.css'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Logo } from '../Logo/Logo';


export const Footer = () => {
    return(
        <footer>
            <div className='footer1'>
                
                <div className='footerLinks'>
                    <Link to="https://wa.me/5493416845002"className="dark" label="Atencion al Cliente">Atencion al Cliente</Link>
                    <Link  to="/clientes" className="dark"label="Preguntas Frecuentes">Compras de clientes</Link>
                    <Link to="terminosycondiciones" className="dark" label="Terminos & Condiciones">Terminos & Condiciones</Link>
                    <Link to="/quienesSomos" className="dark" label="Quienes Somos">Sobre Nosotros</Link>
                </div>
                <Logo className='logo light' />
            </div>
            <div className='footer2'>
                <a href='https://www.instagram.com/oudrosario_parfam/'><InstagramIcon/></a>
                <a><FacebookIcon/></a>
                <a href='https://github.com/JuanBonadeo'><GitHubIcon/></a>
                <a><LinkedInIcon/></a>
            </div>
            <h5>© OudRosario   Copyright  todos los derechos reservados</h5>
            <h5>Develop by:   &nbsp; <a> JuanBonadeo</a></h5>

            
        </footer>
    )
}
