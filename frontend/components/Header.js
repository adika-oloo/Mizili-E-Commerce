import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Add scroll animations
    const featureCards = document.querySelectorAll('.feature-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
      });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });
    
    testimonialCards.forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });

    // Add hover effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div className="logo" style={logoStyle}>
          <i className="fas fa-seedling"></i>
          <span>Mizili</span>
        </div>
        <ul className="nav-links" style={navLinksStyle}>
          <li><a href="#">Home</a></li>
          <li><a href="#">For Farmers</a></li>
          <li><a href="#">For Buyers</a></li>
          <li><a href="#">Extension Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const headerStyle = {
  background: 'linear-gradient(rgba(46, 125, 50, 0.9), rgba(46, 125, 50, 0.9)), url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  padding: '20px 0',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px'
}

const logoStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center'
}

const navLinksStyle = {
  display: 'flex',
  listStyle: 'none'
}
