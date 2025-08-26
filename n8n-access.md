# 🔧 n8n Access Instructions

## ✅ n8n is Currently Running!

### **Option 1: Local Access (Recommended)**
Open your browser and navigate to:
- **http://localhost:5678**
- Alternative: **http://127.0.0.1:5678**

### **Option 2: Setup Permanent Access**

#### For Always-Available Access:
1. **Use ngrok for stable tunneling:**
```bash
# Install ngrok
choco install ngrok

# Authenticate (get token from ngrok.com)
ngrok authtoken YOUR_TOKEN

# Create tunnel
ngrok http 5678
```

2. **Or use Cloudflare Tunnel:**
```bash
# Install cloudflared
winget install Cloudflare.cloudflared

# Create tunnel
cloudflared tunnel --url http://localhost:5678
```

### **Option 3: Docker with Persistent Storage**
```bash
docker run -d \
  --restart unless-stopped \
  --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_SECURE_COOKIE=false \
  n8nio/n8n
```

## 📝 First Time Setup

When you access n8n for the first time:

1. **Create Owner Account**
   - Email: your-email@example.com
   - Password: [Choose strong password]

2. **Import Workflow**
   - Click "Workflows" → "Import from File"
   - Select `n8n-workflows.json` from this project

3. **Configure Credentials**
   - GitHub: Add Personal Access Token
   - Vercel: Add API Token
   - Email: Configure SMTP for notifications

## 🔄 Managing n8n

### Check if n8n is running:
```bash
# Windows
tasklist | findstr n8n

# Check port
netstat -an | findstr 5678
```

### Stop n8n:
```bash
# Find process
tasklist | findstr node

# Kill process (replace PID with actual number)
taskkill /PID [PID] /F
```

### Restart n8n:
```bash
# Basic start
n8n start

# With tunnel (temporary URL)
n8n start --tunnel

# In background
start /b n8n start
```

## 🚀 Quick Start Right Now

**Just open your browser and go to:**
# http://localhost:5678

That's it! n8n is already running and waiting for you.