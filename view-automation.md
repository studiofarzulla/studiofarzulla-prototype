# 👁️ How to Monitor Your Automation

## Quick Commands

### 1. **Real-time Monitoring Script**
```powershell
# Run the monitoring script
.\automation-monitor.ps1
```

### 2. **Check Current Status**
```bash
# View deployments
vercel ls

# View running processes
vercel logs --follow

# Check GitHub Actions
gh run list --workflow=CI
gh run watch  # Interactive selection
```

### 3. **n8n Workflow Interface**
Open in browser: https://cghoqds6vit4nqjuoil6mtrg.hooks.n8n.cloud
- Username/Password: Set up on first access
- Import the `n8n-workflows.json` file
- View execution history
- See real-time workflow runs

### 4. **Daily Reports Location**
Check these files for automated reports:
- `./daily-reports/[DATE]-report.md` (will be created daily)
- `./CBH_PROJECT.md` (current status)

### 5. **Memory/Context Tracking**
```bash
# View what the system remembers
claude-code --command "mcp__memory__read_graph"
```

## Dashboard Links

| Service | URL | Purpose |
|---------|-----|---------|
| **Vercel Dashboard** | https://vercel.com/farzulla/studiofarzulla.github.cbh | Deployment status |
| **GitHub Actions** | https://github.com/studiofarzulla/studiofarzulla-prototype/actions | CI/CD pipelines |
| **n8n Workflows** | https://cghoqds6vit4nqjuoil6mtrg.hooks.n8n.cloud | Automation flows |
| **Live Site** | https://farzulla.org | Production website |

## Activity Notifications

The autonomous system will create notifications in these scenarios:

1. **Decision Required** - Check `./decisions-pending.md`
2. **Daily Summary** - Created at 6 PM in `./daily-reports/`
3. **Error Alerts** - Logged to `./error-log.txt`
4. **Performance Reports** - Weekly in `./performance/`

## Terminal Commands for Quick Checks

```bash
# See what's happening right now
vercel logs --follow

# Check if n8n is running
ps aux | grep n8n

# View recent git activity (what the automation changed)
git log --oneline -10

# Check deployment status
vercel inspect [deployment-url]

# View current build logs
vercel logs --output raw
```

## Setting Up Notifications

To get real-time notifications:

1. **Email Alerts** (via n8n):
   - Configure SMTP in n8n settings
   - Set up email node in workflows

2. **Desktop Notifications**:
   ```powershell
   # Windows notification when deployment completes
   vercel --prod && powershell -c "[System.Windows.Forms.MessageBox]::Show('Deployment Complete')"
   ```

3. **Slack/Discord** (if needed):
   - Add webhook URL to n8n workflows
   - Configure notification nodes

## Understanding the Logs

- ✅ **Green entries**: Successful operations
- ⚠️ **Yellow entries**: Warnings or pending decisions
- ❌ **Red entries**: Errors requiring attention
- 🔄 **Blue entries**: Ongoing processes

Run `.\automation-monitor.ps1` now to start monitoring!