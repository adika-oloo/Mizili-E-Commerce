export default function HowItWorks() {
  const steps = [
    { number: '1', title: 'Sign Up', description: 'Create an account as a farmer, buyer, or service provider' },
    { number: '2', title: 'Connect', description: 'Find relevant partners and services in the agricultural ecosystem' },
    { number: '3', title: 'Transact & Grow', description: 'Engage in transactions, share knowledge, and grow together' }
  ]

  return (
    <section className="how-it-works" style={howItWorksStyle}>
      <div className="container">
        <div className="section-title" style={sectionTitleStyle}>
          <h2 style={h2Style}>How Mizili Works</h2>
          <p>Our simple three-step process connects the agricultural community</p>
        </div>
        
        <div className="steps" style={stepsStyle}>
          {steps.map((step, index) => (
            <div key={index} className="step" style={stepStyle}>
              <div className="step-number" style={stepNumberStyle}>{step.number}</div>
              <h3 style={stepH3Style}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const howItWorksStyle = {
  padding: '100px 0',
  background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
}

const stepsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: '50px'
}

const stepStyle = {
  flex: '1',
  minWidth: '250px',
  textAlign: 'center',
  padding: '20px',
  position: 'relative'
}

const stepNumberStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: 'var(--primary)',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  margin: '0 auto 20px'
}

const stepH3Style = {
  fontSize: '1.3rem',
  marginBottom: '15px',
  color: 'var(--primary-dark)'
}
