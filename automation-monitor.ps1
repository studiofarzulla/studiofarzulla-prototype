# Automation Monitoring Script for CBH Project
# Run this to see real-time activity

Write-Host "🤖 CBH Automation Monitor" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan

# Monitor Vercel deployments
Write-Host "`n📦 Recent Deployments:" -ForegroundColor Yellow
vercel ls --meta

# Check GitHub Actions
Write-Host "`n⚙️ GitHub Actions Status:" -ForegroundColor Yellow
gh run list --workflow=CI --limit=5

# Check n8n status (if running locally)
Write-Host "`n🔄 n8n Workflow Status:" -ForegroundColor Yellow
$n8nProcess = Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {$_.CommandLine -like "*n8n*"}
if ($n8nProcess) {
    Write-Host "✅ n8n is running (PID: $($n8nProcess.Id))" -ForegroundColor Green
    Write-Host "Access at: https://cghoqds6vit4nqjuoil6mtrg.hooks.n8n.cloud" -ForegroundColor Gray
} else {
    Write-Host "⚠️ n8n is not running locally" -ForegroundColor Yellow
}

# Show recent git commits
Write-Host "`n📝 Recent Changes:" -ForegroundColor Yellow
git log --oneline -5

# Monitor file changes
Write-Host "`n👀 Watching for changes..." -ForegroundColor Green
Write-Host "Press Ctrl+C to stop monitoring" -ForegroundColor Gray

# Keep updating every 30 seconds
while ($true) {
    Start-Sleep -Seconds 30
    Write-Host "`n🔄 Update at $(Get-Date -Format 'HH:mm:ss'):" -ForegroundColor Cyan
    
    # Quick deployment check
    $latestDeploy = vercel ls --meta --json | ConvertFrom-Json | Select-Object -First 1
    if ($latestDeploy) {
        Write-Host "Latest: $($latestDeploy.url) - $($latestDeploy.state)" -ForegroundColor White
    }
}