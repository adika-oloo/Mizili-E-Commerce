Mizili — API Documentation (Overview)


Base URL: `https://api.mizili-host.com/api/`


Authentication
- **POST /auth/register/**
- Request: `{ "name", "email", "password", "role", "location" }`
- Response: `201 Created` + user object


- **POST /auth/login/**
- Request: `{ "email", "password" }`
- Response: `{ "access": "<jwt>", "refresh": "<jwt>" }`


Users
- **GET /users/me/** — Get current user profile (auth required)
- **PUT /users/me/** — Update profile


Categories
- **GET /categories/** — List categories
- **POST /categories/** — Create (admin)


Products
- **GET /products/** — List products
- Query params: `?category=inputs&ordering=price&page=1&page_size=20&search=maize`
- **POST /products/** — Create product (farmer)
- **GET /products/{id}/** — Retrieve product
- **PUT /products/{id}/** — Update (owner)
- **DELETE /products/{id}/** — Delete (owner/admin)


Orders
- **POST /orders/** — Create order `{ product_id, quantity }`
- **GET /orders/{id}/** — Retrieve order
- **GET /orders/?buyer_id=...** — List orders for buyer


Market Prices
- **GET /market-prices/** — Latest prices by commodity and location
- **POST /market-prices/** — Admin endpoint to add/update prices


Weather
- **GET /weather/?location=Embu** — Get latest weather advisory for location


Extension Services
- **GET /services/** — List services
- **POST /services/** — Create service (agent)
- **POST /services/{id}/subscribe/** — Farmer subscribes to service


Reviews
- **POST /products/{id}/reviews/** — Submit review `{ rating, comment }`
- **GET /products/{id}/reviews/** — List reviews


Notifications
- **GET /notifications/** — List current user notifications
- **POST /notifications/mark-read/** — Mark read


Error Handling
- Standard HTTP status codes are used (200, 201, 400, 401, 403, 404, 500).
- Validation errors return 400 with `{ field: ["error message"] }` payload.


Rate Limiting
- Public endpoints: limit to X requests/min (configurable). Authenticated higher limits.


Examples
- **Example: List products (curl)**
```bash
curl "https://api.mizili-host.com/api/products/?category=Produce&ordering=-price&page=1" \
-H "Authorization: Bearer <TOKEN>"
