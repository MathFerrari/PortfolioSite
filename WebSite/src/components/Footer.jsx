import { Link } from "react-router-dom"

import logoGithub from "../img/github.svg"
import logoMail from "../img/mail.svg"
import logoLinkedin from "../img/linkedin.svg"

import "../sass/components/footer.sass"

const Footer = () => {
  return (
    <div className="footer">
        <div className="icons-area">
            <Link to='https://github.com/MathFerrari'><img src={logoGithub} className="icon logoGit" alt="Logo" /></Link>
            <Link to='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrcXjSkLhbgMnwQVHQhbQpCKGgsbltQXMVKgHJRtQCTMgPrKcFZMSSzqtPxCxTCDHfhJq'><img src={logoMail} className="icon logoMail" alt="Logo" /></Link>
            <Link to='https://www.linkedin.com/in/mathferrari/'><img src={logoLinkedin} className="icon logoLinkedin" alt="Logo" /></Link>
        </div>
        <p className="copy-text">© Todos os Direitos Reservados - Matheus Ferrari</p>
    </div>
  )
}

export default Footer