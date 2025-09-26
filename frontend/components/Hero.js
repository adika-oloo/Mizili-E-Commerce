export default function Hero() {
  return (
    <div className="hero" style={heroStyle}>
      <h1 style={h1Style}>Transforming Agriculture Together</h1>
      <p style={pStyle}>
        Connecting Farmers, Buyers, and Agricultural Services for a smarter, 
        transparent, and sustainable future.
      </p>
      <a href="#" className="cta-button" style={ctaButtonStyle}>
        Join Mizili Today
      </a>
    </div>
  )
}

const heroStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px'
}

const h1Style = {
  fontSize: '3.5rem',
  marginBottom: '20px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
}

const pStyle = {
  fontSize: '1.5rem',
  maxWidth: '800px',
  marginBottom: '30px'
}

const ctaButtonStyle = {
  display: 'inline-block',
  backgroundColor: 'var(--secondary)',
  color: 'white',
  padding: '15px 40px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.2rem',
  transition: 'all 0.3s',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
}
