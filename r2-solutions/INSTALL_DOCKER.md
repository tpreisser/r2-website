# Installing Docker for macOS

## Quick Installation Steps

1. **Download Docker Desktop**:
   - Visit: https://www.docker.com/products/docker-desktop
   - Click "Download for Mac"
   - Choose the correct version for your Mac (Intel or Apple Silicon)

2. **Install Docker Desktop**:
   - Open the downloaded `.dmg` file
   - Drag Docker to your Applications folder
   - Open Docker from Applications

3. **Start Docker Desktop**:
   - The first time you open it, you may need to enter your password
   - Wait for Docker to start (the whale icon in your menu bar will stop animating)

4. **Verify Installation**:
   ```bash
   docker --version
   docker compose version
   ```

5. **Build and Run Your Website**:
   ```bash
   cd r2-solutions
   docker compose up --build
   ```

## Alternative: Install via Homebrew

If you have Homebrew installed:
```bash
brew install --cask docker
```

Then open Docker Desktop from Applications.

## Troubleshooting

- **Docker won't start**: Make sure virtualization is enabled in your Mac's System Settings
- **Permission denied**: You may need to grant Docker access in System Settings > Privacy & Security
- **Port already in use**: If port 3000 is occupied, change it in `docker-compose.yml`
