# Docker Setup for R² Solutions Website

This directory contains Docker configuration files to containerize and run the R² Solutions website.

## Files

- `Dockerfile` - Multi-stage build that creates a production-ready container
- `docker-compose.yml` - Docker Compose configuration for easy container management
- `.dockerignore` - Files to exclude from Docker build context
- `nginx.conf` - Nginx configuration for serving the static Next.js build

## Prerequisites

Docker must be installed on your system. For macOS:

1. **Install Docker Desktop for Mac**: Download from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. **Start Docker Desktop**: Open Docker Desktop application and wait for it to start
3. **Verify installation**: Run `docker --version` in your terminal

## Quick Start

### Using Docker Compose (Recommended)

1. Build and start the container:
   ```bash
   docker compose up --build
   ```
   
   **Note**: Modern Docker uses `docker compose` (with a space) instead of `docker-compose` (with a hyphen)

2. Access the website at: http://localhost:3000

3. Stop the container:
   ```bash
   docker compose down
   ```

### Using Docker directly

1. Build the Docker image:
   ```bash
   docker build -t r2-solutions-website .
   ```

2. Run the container:
   ```bash
   docker run -d -p 3000:80 --name r2-solutions-website r2-solutions-website
   ```

3. Access the website at: http://localhost:3000

4. Stop the container:
   ```bash
   docker stop r2-solutions-website
   docker rm r2-solutions-website
   ```

## How It Works

1. **Build Stage**: Uses Node.js to install dependencies and build the Next.js static export
2. **Production Stage**: Uses nginx to serve the static files from the `/out` directory
3. **Port Mapping**: The container's port 80 is mapped to your host's port 3000

## Customization

### Change Port

Edit `docker-compose.yml` and change the port mapping:
```yaml
ports:
  - "8080:80"  # Change 3000 to your desired port
```

### Environment Variables

Add environment variables to `docker-compose.yml`:
```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

## Production Deployment

For production deployment, consider:

1. Using a specific Node.js version in the Dockerfile
2. Adding SSL/TLS certificates and configuring HTTPS in nginx
3. Setting up proper logging and monitoring
4. Using environment-specific configurations
5. Implementing proper backup strategies

## Troubleshooting

### Container won't start
- Check if port 3000 is already in use: `lsof -i :3000`
- View container logs: `docker compose logs` or `docker logs r2-solutions-website`
- Ensure Docker Desktop is running: Check the Docker icon in your menu bar

### Build fails
- Ensure you have sufficient disk space
- Clear Docker cache: `docker system prune -a`
- Check that all dependencies are listed in `package.json`

### Website not accessible
- Verify the container is running: `docker ps`
- Check nginx is serving files correctly: `docker exec -it r2-solutions-website ls /usr/share/nginx/html`
