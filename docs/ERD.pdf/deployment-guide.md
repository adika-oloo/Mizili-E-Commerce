Mizili — Deployment Guide

This guide outlines steps to deploy the Mizili backend to a hosted platform such as Railway, Render, or Heroku. It assumes the project uses Django, Gunicorn, and PostgreSQL.

Pre-deployment Checklist




Environment Variables (example)

DATABASE_URL=postgres://user:pass@host:port/dbname

DJANGO_SECRET_KEY=your-secret-key

DEBUG=False

ALLOWED_HOSTS=.mizili.app,localhost

AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY (if using S3)

Steps (Railway / Render)

Push code to GitHub and connect repository to hosting provider.

Add environment variables on the hosting platform.

Provision a managed PostgreSQL instance and set DATABASE_URL.

Set the start command: gunicorn backend.src.wsgi:application --bind 0.0.0.0:$PORT

Run migrations: python manage.py migrate (use one-off command or CI step).

Collect static files: python manage.py collectstatic --noinput.

Re-deploy and test.

Static Files

For small projects, use whitenoise to serve static files.

For production-scale, use S3-compatible storage and set STATIC_URL to the storage bucket.

Database Migrations

Use python manage.py makemigrations and migrate.

Consider using Django's --fake-initial or custom migration strategies for complex deployments.

Background Jobs

Use Celery + Redis for background tasks like sending notifications, syncing prices, or heavy processing. Deploy Celery workers alongside the web process.

Monitoring & Logging

Configure Sentry for exception tracking.

Expose basic healthchecks (e.g., /health/) for uptime monitoring.

Post-Deployment

Test all endpoints and Swagger docs.

Run load tests (optional) to validate performance.

Set backups for your database.
