export default function Testimonials() {
  const testimonials = [
    {
      text: "Mizili has revolutionized how I sell my produce. I now get fair prices and connect directly with buyers who value quality.",
      author: "John Kariuki",
      role: "Farmer, Nakuru",
      initials: "JK"
    },
    {
      text: "As a restaurant owner, finding fresh, quality produce was always challenging. Mizili connects me directly with trusted farmers.",
      author: "Sarah Mwangi",
      role: "Buyer, Nairobi",
      initials: "SM"
    },
    {
      text: "The extension services platform allows me to reach more farmers with modern agricultural techniques effectively.",
      author: "Dr. Omondi",
      role: "Agricultural Expert",
      initials: "DO"
    }
  ]

  return (
    <section className="testimonials" style={testimonialsStyle}>
      <div className="container">
        <div className="section-title" style={sectionTitleStyle}>
          <h2 style={h2Style}>What Our Users Say</h2>
          <p>Hear from farmers, buyers, and service providers who have transformed their agricultural practices with Mizili</p>
        </div>
        
        <div className="testimonial-grid" style={testimonialGridStyle}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={testimonialCardStyle}>
              <div className="testimonial-text" style={testimonialTextStyle}>
                {testimonial.text}
              </div>
              <div className="testimonial-author" style={testimonialAuthorStyle}>
                <div className="author-avatar" style={authorAvatarStyle}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonialsStyle = {
  padding: '100px 0',
  backgroundColor: 'var(--light)'
}

const testimonialGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px'
}

const testimonialCardStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
}

const testimonialTextStyle = {
  fontStyle: 'italic',
  marginBottom: '20px',
  position: 'relative',
  paddingLeft: '20px'
}

const testimonialAuthorStyle = {
  display: 'flex',
  alignItems: 'center'
}

const authorAvatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  marginRight: '15px'
}
