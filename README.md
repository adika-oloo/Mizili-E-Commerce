Mizili E-Commerce Agricultural Platform

Mizili is designed as an AgriTech marketplace that empowers smallholder farmers and rural communities, directly supporting the mission of SDG 2: Zero Hunger. By giving farmers access to real-time weather updates, localized best farming practices, affordable inputs (seeds, fertilizers, pesticides, tools), and digital marketplaces for selling produce, Mizili helps to:

End hunger & malnutrition (SDG 2.1 & 2.2): Mizili improves food availability by linking farmers to broader markets, reducing post-harvest losses, and increasing the circulation of nutritious produce.

Double productivity & farmer income (SDG 2.3): Farmers gain fairer prices by cutting out middlemen and accessing data-driven insights that improve crop yields.

Promote sustainable agriculture (SDG 2.4): Mizili’s tailored recommendations encourage climate-smart practices, efficient water use, and soil health management.

Strengthen agricultural systems (SDG 2.A & 2.C): By connecting farmers with extension services, digital tools, and transparent pricing, Mizili contributes to more resilient local food systems.

Features

- Farmer product listing and management
- E-commerce functionality for agricultural products
- Real-time market prices and weather information
- Extension services and training resources
- Cooperative management
- Agricultural loan information
- Transportation logistics

Technology Stack

1.Backend
- Django & Django REST Framework
- PostgreSQL database
- JWT authentication

2.Frontend
- Next.js with React
- Tailwind CSS for styling

Getting Started

1.Prerequisites
- Docker and Docker Compose
- Node.js 16+ (for local development without Docker)
- Python 3.9+ (for local development without Docker)

2.Development with Docker (Recommended)

1. Clone the repository
2. Run `docker-compose up -d`
3. Access the application at http://localhost:3000
4. Access the API at http://localhost:8000
5. Access the admin panel at http://localhost:8000/admin

3.Local Development

Backend
1. Navigate to `backend/src`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Set up environment variables (copy `.env.example` to `.env` and configure)
6. Run migrations: `python manage.py migrate`
7. Create superuser: `python manage.py createsuperuser`
8. Run the server: `python manage.py runserver`

Frontend
1. Navigate to `frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the application at http://localhost:3000

License

This is an educational/training project developed for learning purposes. It may not be production-ready and should be adapted before use in real-world environments.
