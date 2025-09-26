export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="footer-content" style={footerContentStyle}>
          <div className="footer-column">
            <h3 style={h3Style}>Mizili</h3>
            <p>Connecting the agricultural community for a sustainable future.</p>
            <div className="social-links" style={socialLinksStyle}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 style={h3Style}>Quick Links</h3>
            <ul className="footer-links" style={footerLinksStyle}>
              <li><a href="#">Home</a></li>
              <li><a href="#">For Farmers</a></li>
              <li><a href="#">For Buyers</a></li>
              <li><a href="#">Extension Services</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 style={h3Style}>Resources</h3>
            <ul className="footer-links" style={footerLinksStyle}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 style={h3Style}>Contact Us</h3>
            <ul className="footer-links" style={footerLinksStyle}>
              <li><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
              <li><i className="fas fa-phone"></i> +254 700 000 000</li>
              <li><i className="fas fa-envelope"></i> info@mizili.com</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright" style={copyrightStyle}>
          <p>&copy; 2025 Mizili. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = {
  backgroundColor: 'var(--dark)',
  color: 'white',
  padding: '60px 0 30px'
}

const footerContentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '40px',
  marginBottom: '40px'
}

const h3Style = {
  fontSize: '1.3rem',
  marginBottom: '20px',
  color: 'var(--secondary)'
}

const footerLinksStyle = {
  listStyle: 'none'
}

const socialLinksStyle = {
  display: 'flex',
  marginTop: '20px'
}

const copyrightStyle = {
  textAlign: 'center',
  paddingTop: '30px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  fontSize: '0.9rem',
  color: '#aaa'
}
