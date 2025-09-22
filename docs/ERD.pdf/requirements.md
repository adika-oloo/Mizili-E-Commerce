Mizili — Requirements


Functional Requirements
1. User Authentication
- Register and login using JWT.
- Roles: farmer, buyer, extension_agent, ngo_partner.
2. Product Management
- CRUD for products and categories.
- Products linked to farmers (owners).
3. Marketplace Features
- Browse, filter (by category, location), sort (by price, newest), and paginate products.
- Place orders and track status.
4. Extension Services
- Publish services and training resources.
- Farmers subscribe to services.
5. Market & Weather Data
- Store and serve market price snapshots.
- Store and serve weather updates by location.
6. Community Features
- Cooperatives management and membership.
- Product reviews and ratings.
7. Notifications
- In-app notifications for orders, weather alerts, and price updates.


Non-Functional Requirements
- **Performance**: Product listing queries should respond within 300ms for typical page sizes.
- **Scalability**: Support at least 10k users in year 1; design for horizontal scale.
- **Availability**: Aim for 99.5% uptime for core APIs.
- **Security**: Use HTTPS, JWT, and secure storage of secrets.
- **Localization**: Support English and Swahili content fields.


Technical Requirements
- Python 3.10+ , Django 4.x, Django REST Framework
- PostgreSQL 12+
- Redis (optional) for caching and background jobs
- Docker for containerization (recommended)


Data Privacy & Compliance
- Do not store sensitive payment details in plain text.
- Follow GDPR-like consent for user data where applicable.
