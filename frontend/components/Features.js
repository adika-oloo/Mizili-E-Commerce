export default function Features() {
  const features = [
    {
      icon: 'fas fa-tractor',
      title: 'For Farmers',
      description: 'List products, access weather alerts, market insights, and training services to maximize your yield and profits.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'For Buyers',
      description: 'Discover fresh produce, compare prices, order directly from farmers, and leave reviews for quality assurance.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Extension Services',
      description: 'Provide expert knowledge, training resources, and connect directly with farmers who need your expertise.'
    }
  ]

  return (
    <section className="features" style={featuresStyle}>
      <div className="container">
        <div className="section-title" style={sectionTitleStyle}>
          <h2 style={h2Style}>Why Choose Mizili?</h2>
          <p>Our platform offers comprehensive solutions for all stakeholders in the agricultural ecosystem</p>
        </div>
        
        <div className="features-grid" style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={featureCardStyle}>
              <div className="feature-icon" style={featureIconStyle}>
                <i className={feature.icon}></i>
              </div>
              <h3 style={h3Style}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const featuresStyle = {
  padding: '100px 0',
  backgroundColor: 'white'
}

const sectionTitleStyle = {
  textAlign: 'center',
  marginBottom: '60px'
}

const h2Style = {
  fontSize: '2.5rem',
  color: 'var(--primary-dark)',
  marginBottom: '15px'
}

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px'
}

const featureCardStyle = {
  background: 'white',
  borderRadius: '10px',
  padding: '30px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  transition: 'transform 
