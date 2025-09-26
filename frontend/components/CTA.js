export default function CTA() {
  return (
    <section className="cta-section" style={ctaSectionStyle}>
      <div className="container">
        <h2 style={h2Style}>Ready to Transform Agriculture?</h2>
        <p style={pStyle}>
          Join thousands of farmers, buyers, and service providers who are already 
          benefiting from Mizili's innovative platform.
        </p>
        <a href="#" className="cta-button" style={ctaButtonStyle}>
          Join Mizili Today
        </a>
      </div>
    </section>
  )
}

const ctaSectionStyle = {
  padding: '100px 0',
  background: 'linear-gradient(rgba(46, 125, 50, 0.9), rgba(46, 125, 50, 0.9)), url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center'
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
