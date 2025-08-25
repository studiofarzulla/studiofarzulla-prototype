# AGENT.md

This file provides guidance to AI coding assistants working in this repository.

**Note:** CLAUDE.md, .clinerules, .cursorrules, .windsurfrules, GEMINI.md, .github/copilot-instructions.md, .idx/airules.md, and .replit.md are symlinks to AGENT.md in this project.

# Studio Farzulla - Web Development Prototype

This is a prototype web development repository for a private business. The project is currently in its initial setup phase and will evolve into a full-featured web application.

## Build & Commands

### Current Status

⚠️ **Project Setup Required**: This repository needs initial configuration before development can begin.

### Recommended Initial Setup

```bash
# Initialize Node.js project
npm init -y

# Install a web framework (choose one):
npm install --save-dev vite  # For vanilla JS/framework-agnostic
npm install react react-dom  # For React
npm install vue              # For Vue
npm install next             # For Next.js

# Install development tools
npm install --save-dev eslint prettier typescript
npm install --save-dev jest @testing-library/react  # For testing
```

### Future Commands (to be configured in package.json)

Once the project is initialized, configure these standard scripts:

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production
- **Test**: `npm test` - Run test suite
- **Lint**: `npm run lint` - Check code quality
- **Format**: `npm run format` - Format code with Prettier
- **Type Check**: `npm run typecheck` - Run TypeScript compiler checks

### Script Command Consistency

**Important**: When adding npm scripts to package.json, ensure all references are updated:

- GitHub Actions workflows (.github/workflows/\*.yml)
- README.md documentation
- This AGENT.md file
- Any Docker configuration files
- Setup/installation scripts

## Code Style

### General Guidelines

- **Language**: JavaScript/TypeScript for web development
- **Framework**: To be determined (React, Vue, or vanilla JS)
- **Module System**: ES6 modules (import/export)
- **File Naming**: Use kebab-case for files (e.g., `user-profile.js`)
- **Component Naming**: Use PascalCase for components (e.g., `UserProfile`)
- **Variable Naming**: Use camelCase for variables and functions

### Import Conventions

```javascript
// Third-party imports first
import React from 'react';
import { useState } from 'react';

// Local imports second
import { Button } from './components/Button';
import { utils } from './utils';

// Style imports last
import './styles.css';
```

### Best Practices

- Use async/await over promises when possible
- Implement proper error handling with try/catch blocks
- Add meaningful variable and function names
- Keep functions small and focused (single responsibility)
- Use const by default, let when reassignment is needed, avoid var

## Testing

### Testing Philosophy

**When tests fail, fix the code, not the test.**

Key principles:

- **Tests should be meaningful** - Avoid tests that always pass regardless of behavior
- **Test actual functionality** - Call the functions being tested, don't just check side effects
- **Failing tests are valuable** - They reveal bugs or missing features
- **Fix the root cause** - When a test fails, fix the underlying issue, don't hide the test
- **Test edge cases** - Tests that reveal limitations help improve the code
- **Document test purpose** - Each test should include a comment explaining why it exists and what it validates

### Future Testing Setup

- **Framework**: Jest (recommended for JavaScript projects)
- **Testing Library**: @testing-library/react (for React) or @testing-library/vue (for Vue)
- **Test File Pattern**: `*.test.js` or `*.spec.js`
- **Coverage Target**: Aim for 80% code coverage

## Security

### Data Protection Guidelines

- Never commit sensitive data (API keys, passwords, tokens)
- Use environment variables for configuration
- Validate all user inputs
- Implement proper authentication and authorization
- Use HTTPS for all production deployments
- Keep dependencies updated regularly

### Environment Variables

Create a `.env.example` file documenting required variables:

```
API_URL=https://api.example.com
NODE_ENV=development
```

## Directory Structure & File Organization

### Reports Directory

ALL project reports and documentation should be saved to the `reports/` directory:

```
studiofarzulla.github.cbh/
├── reports/              # All project reports and documentation
│   └── *.md             # Various report types
├── temp/                # Temporary files and debugging
└── [other directories]
```

### Report Generation Guidelines

**Important**: ALL reports should be saved to the `reports/` directory with descriptive names:

**Implementation Reports:**

- Phase validation: `PHASE_X_VALIDATION_REPORT.md`
- Implementation summaries: `IMPLEMENTATION_SUMMARY_[FEATURE].md`
- Feature completion: `FEATURE_[NAME]_REPORT.md`

**Testing & Analysis Reports:**

- Test results: `TEST_RESULTS_[DATE].md`
- Coverage reports: `COVERAGE_REPORT_[DATE].md`
- Performance analysis: `PERFORMANCE_ANALYSIS_[SCENARIO].md`
- Security scans: `SECURITY_SCAN_[DATE].md`

**Quality & Validation:**

- Code quality: `CODE_QUALITY_REPORT.md`
- Dependency analysis: `DEPENDENCY_REPORT.md`
- API compatibility: `API_COMPATIBILITY_REPORT.md`

**Report Naming Conventions:**

- Use descriptive names: `[TYPE]_[SCOPE]_[DATE].md`
- Include dates: `YYYY-MM-DD` format
- Group with prefixes: `TEST_`, `PERFORMANCE_`, `SECURITY_`
- Markdown format: All reports end in `.md`

### Temporary Files & Debugging

All temporary files, debugging scripts, and test artifacts should be organized in a `/temp` folder:

**Temporary File Organization:**

- **Debug scripts**: `temp/debug-*.js`, `temp/analyze-*.py`
- **Test artifacts**: `temp/test-results/`, `temp/coverage/`
- **Generated files**: `temp/generated/`, `temp/build-artifacts/`
- **Logs**: `temp/logs/debug.log`, `temp/logs/error.log`

**Guidelines:**

- Never commit files from `/temp` directory
- Use `/temp` for all debugging and analysis scripts created during development
- Clean up `/temp` directory regularly or use automated cleanup
- Include `/temp/` in `.gitignore` to prevent accidental commits

### Example `.gitignore` patterns

```
# Temporary files and debugging
/temp/
temp/
**/temp/
debug-*.js
test-*.py
analyze-*.sh
*-debug.*
*.debug

# Claude settings
.claude/settings.local.json

# Don't ignore reports directory
!reports/
!reports/**
```

### Claude Code Settings (.claude Directory)

The `.claude` directory contains Claude Code configuration files with specific version control rules:

#### Version Controlled Files (commit these):

- `.claude/settings.json` - Shared team settings for hooks, tools, and environment
- `.claude/commands/*.md` - Custom slash commands available to all team members
- `.claude/hooks/*.sh` - Hook scripts for automated validations and actions

#### Ignored Files (do NOT commit):

- `.claude/settings.local.json` - Personal preferences and local overrides
- Any `*.local.json` files - Personal configuration not meant for sharing

**Important Notes:**

- Claude Code automatically adds `.claude/settings.local.json` to `.gitignore`
- The shared `settings.json` should contain team-wide standards (linting, type checking, etc.)
- Personal preferences or experimental settings belong in `settings.local.json`
- Hook scripts in `.claude/hooks/` should be executable (`chmod +x`)

## Configuration

### Development Environment Setup

1. **Node.js**: Install Node.js 18+ and npm
2. **Git**: Ensure Git is configured with proper user credentials
3. **IDE**: Use VS Code or similar with appropriate extensions
4. **Claude Code**: Already configured via GitHub Actions

### Recommended VS Code Extensions

- ESLint
- Prettier
- JavaScript/TypeScript language support
- Framework-specific extensions (React, Vue, etc.)

## GitHub Integration

### Claude Code GitHub Action

This repository has Claude Code integration configured:

- **Trigger**: Use "@claude-code" in issues, comments, or pull requests
- **Capabilities**: Can read, write, and modify repository content
- **Workflow File**: `.github/workflows/claude-code.yml`

### Git Workflow

1. Create feature branches from main
2. Make changes and test locally
3. Create pull request with clear description
4. Request Claude Code assistance with "@claude-code" if needed
5. Merge after review and tests pass

## Using Specialized Agents

### ⚠️ IMPORTANT: Always Delegate to Specialists

**When specialized agents are available, you MUST use them instead of attempting tasks yourself.**

Specialized agents provide deep expertise in specific domains. They have been trained on best practices, common pitfalls, and advanced patterns that general-purpose assistants might miss.

**Key Principles:**

- Always check if a specialized agent exists for your task domain
- Delegate complex technical problems to domain experts
- Use diagnostic agents first when the problem scope is unclear
- Leverage specialists for architecture decisions and optimizations

**Why This Matters:**

- Specialists have deeper, more focused knowledge
- They're aware of edge cases and subtle bugs
- They follow established patterns and best practices
- They can provide more comprehensive solutions

**Discovering Available Agents:**

```bash
# Quick check: List agents if claudekit is installed
command -v claudekit >/dev/null 2>&1 && claudekit list agents || echo "claudekit not installed"

# If claudekit is installed, you can explore available agents:
claudekit list agents
```

Remember: If a specialist exists for the task at hand, delegation is not optional—it's required for optimal results.

## Next Steps

This repository is ready for initial development. Recommended immediate actions:

1. **Initialize the project**: Run `npm init -y` to create package.json
2. **Choose a framework**: Decide on React, Vue, or vanilla JavaScript
3. **Set up development tools**: Install ESLint, Prettier, and TypeScript
4. **Create project structure**: Set up src/, public/, and components/ directories
5. **Configure build system**: Set up Vite, Webpack, or Next.js
6. **Update this file**: Document chosen technologies and actual commands

## License

This project is licensed under the MIT License - see the LICENSE file for details.
Copyright (c) 2025 Farzulla
