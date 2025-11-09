#!/bin/bash
# Manus Deployment Script - Deterministic deployment wrapper
# This script is the SINGLE entry point for Manus to deploy the application
# Expected tokens: ~2K-5K per execution

set -e  # Exit on any error
set -u  # Exit on undefined variables
set -o pipefail  # Exit on pipe failures

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# Step 1: Verify environment
log_info "Step 1/5: Verifying environment..."
npm run verify || {
    log_error "Environment verification failed"
    exit 1
}
log_success "Environment verified"

# Step 2: Lint code
log_info "Step 2/5: Linting code..."
npm run lint || {
    log_error "Linting failed - code quality issues detected"
    exit 1
}
log_success "Linting passed"

# Step 3: Build application
log_info "Step 3/5: Building application..."
npm run build || {
    log_error "Build failed"
    exit 1
}
log_success "Build completed"

# Step 4: Verify build artifacts
log_info "Step 4/5: Verifying build artifacts..."
if [ ! -f "dist/index.html" ]; then
    log_error "dist/index.html not found"
    exit 1
fi

if [ ! -f "dist/_headers" ]; then
    log_warning "dist/_headers not found (security headers missing)"
fi

if [ ! -d "dist/assets" ]; then
    log_error "dist/assets directory not found"
    exit 1
fi

log_success "Build artifacts verified"

# Step 5: Deploy to Cloudflare Pages
log_info "Step 5/5: Deploying to Cloudflare Pages..."

# Check if running in CI (GitHub Actions)
if [ -n "${GITHUB_ACTIONS:-}" ]; then
    log_info "Running in GitHub Actions - deployment handled by workflow"
    log_success "Build ready for deployment"
else
    # Local deployment via wrangler
    if command -v wrangler &> /dev/null; then
        wrangler pages deploy dist || {
            log_error "Deployment failed"
            exit 1
        }
        log_success "Deployment completed"
    else
        log_warning "wrangler CLI not found - skipping deployment"
        log_info "To deploy manually, run: npm run deploy"
    fi
fi

# Final summary
echo ""
log_success "=== Deployment process completed successfully ==="
echo ""
log_info "Next steps:"
echo "  1. Verify deployment URL is accessible"
echo "  2. Check security headers: curl -I <deployment-url>"
echo "  3. Test application functionality"
echo "  4. Run Lighthouse audit (optional)"
echo ""

exit 0
