import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
     <p>
        Developed by{' '}
        <a
            href="https://github.com/SakethUpparagoni"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', textDecoration: 'none' }}>
           <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
          <strong>SAKETH</strong>
        </a>
    </p>
     <p>© 2025 Bloging Site. All rights reserved.</p>
    </footer>
  );
}

export default Footer;