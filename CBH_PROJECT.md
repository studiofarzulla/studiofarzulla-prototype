# CBH Hotel Website - Autonomous Development Framework

## Project Identity
- **Name**: Crystal Beach Hotel (CBH) Luxury Resort Website
- **Domain**: farzulla.org  
- **Repository**: studiofarzulla.github.cbh
- **Deployment**: Vercel (Production)
- **Framework**: Next.js 14 with App Router

## Autonomous Workflow Architecture

### Decision Escalation Framework
Only ping user for:
1. **Design decisions** affecting user experience
2. **Financial decisions** (payment integrations, service costs)
3. **Content approval** (final copy, brand messaging)
4. **Security matters** requiring credentials
5. **Major architectural changes** to the codebase

### Autonomous Operations (Full Permission)
- Code refactoring and optimization
- Performance improvements
- Bug fixes and error resolution
- Test creation and maintenance
- Documentation updates
- Dependency updates (non-breaking)
- CI/CD pipeline improvements
- SEO enhancements
- Accessibility improvements

## Multi-Agent Workflow System

### Daily Autonomous Tasks
```yaml
Morning (9 AM):
  - github-actions-expert: Check CI status
  - testing-expert: Run test suite
  - devops-expert: Monitor deployment health
  
Midday (12 PM):
  - code-review-expert: Review recent changes
  - nodejs-expert: Optimize performance
  - linting-expert: Code quality check
  
Evening (5 PM):
  - general-purpose: Generate progress report
  - memory: Update knowledge graph
  - git-expert: Clean up branches
```

### N8N Workflow Integrations
1. **Content Sync Pipeline**
   - Monitor hotel updates from external APIs
   - Auto-update room availability
   - Sync amenities and services
   
2. **Performance Monitor**
   - Lighthouse scores tracking
   - Core Web Vitals monitoring
   - Alert on degradation
   
3. **Customer Feedback Loop**
   - Collect form submissions
   - Categorize feedback
   - Auto-create improvement tasks

## Current Technical Stack

### Core Technologies
- **Framework**: Next.js 14.2.5
- **Styling**: Tailwind CSS + Framer Motion
- **Internationalization**: next-intl
- **Maps**: Leaflet
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Next.js built-in
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Testing**: [To be configured]

## Vercel Authentication

To authenticate with Vercel:
```bash
# Option 1: Interactive login (browser-based)
vercel login

# Option 2: Token-based (for CI/CD)
vercel --token YOUR_TOKEN

# Option 3: Environment variable
export VERCEL_TOKEN=YOUR_TOKEN
```

After authentication:
```bash
vercel link  # Link to existing project
vercel pull  # Pull environment variables
```

## MCP Server Configuration

### Active Servers
- ✅ filesystem - File operations
- ✅ memory - Context persistence
- ✅ sequential-thinking - Problem solving
- ✅ ide - VS Code integration

### Failed Servers (Need fixing)
- ❌ fetch - Web scraping capability
- ❌ git - Advanced git operations

To fix: These servers may need custom installation or aren't available yet.

## Immediate Action Items

### Phase 1: Foundation (Today)
1. Complete Vercel authentication
2. Set up n8n automation server
3. Configure decision escalation rules
4. Create automated testing framework

### Phase 2: Automation (Week 1)
1. Deploy multi-agent scheduling system
2. Implement content sync workflows
3. Set up performance monitoring
4. Create customer feedback pipeline

### Phase 3: Optimization (Week 2)
1. Implement ISR for dynamic content
2. Add edge functions for personalization
3. Optimize image delivery
4. Enhance SEO meta generation

## Customer Requirements Tracking

### Priority Features
- [ ] Multi-language support (EN, AZ, RU)
- [ ] Booking integration
- [ ] Virtual tour functionality
- [ ] Event calendar
- [ ] Restaurant menu system
- [ ] Spa booking system
- [ ] Loyalty program integration

### Design Preferences
- Luxury aesthetic
- Mobile-first approach
- Fast loading times
- Smooth animations
- High-quality imagery
- Intuitive navigation

## Autonomous Reporting

### Daily Report Structure
```markdown
## CBH Development Report - [DATE]

### Completed Tasks
- [List of autonomous completions]

### Decisions Required
- [User input needed items]

### Performance Metrics
- Lighthouse Score: XX
- Build Time: XXs
- Deploy Status: ✅

### Tomorrow's Plan
- [Scheduled autonomous tasks]
```

## Emergency Contacts
- **Vercel Issues**: Check status.vercel.com
- **GitHub Actions**: Review .github/workflows/
- **Critical Errors**: Escalate immediately to user

## Security Protocols
- Never commit .env files
- Rotate API keys monthly
- Use environment variables for secrets
- Implement rate limiting on forms
- Regular dependency audits

---
*Autonomous System Active*
*Last Manual Review: 2025-08-26*
*Next Scheduled Review: Weekly*