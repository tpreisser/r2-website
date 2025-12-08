# Quick Start Guide - Docker Setup

## After Installing Docker Desktop

1. **Open Docker Desktop**:
   - Open Docker.app from your Applications folder
   - Wait for it to fully start (check the menu bar for the whale icon)

2. **Verify Docker is working**:
   ```bash
   docker --version
   docker compose version
   ```

3. **Navigate to project directory**:
   ```bash
   cd "/Users/tylerpreisser/Desktop/R² Website/r2-solutions"
   ```

4. **Build and run the container**:
   ```bash
   docker compose up --build
   ```

5. **Access your website**:
   Open your browser and go to: http://localhost:3000

6. **Stop the container** (when done):
   Press `Ctrl+C` in the terminal, or run:
   ```bash
   docker compose down
   ```

## Troubleshooting

- **"docker: command not found"**: Make sure Docker Desktop is running
- **Port 3000 already in use**: Change the port in `docker-compose.yml` from `3000:80` to `8080:80` (or any other available port)
- **Permission denied**: Make sure Docker Desktop has proper permissions in System Settings > Privacy & Security

## Useful Commands

```bash
# View running containers
docker ps

# View container logs
docker compose logs

# Rebuild and restart
docker compose up --build

# Stop and remove containers
docker compose down

# Remove everything including images
docker compose down --rmi all
```
