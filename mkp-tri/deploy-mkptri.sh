#!/usr/bin/env bash
# mkptri.org — Build and deploy script
# Usage: ./deploy-mkptri.sh

set -euo pipefail

# ----------------------------
# 1. Configuration
# ----------------------------

# Change these if needed
PROJECT_NAME="mkptri-org"
BUILD_DIR="dist"

# Cloudflare Pages project name (must already exist in your account)
CF_PAGES_PROJECT="${CF_PAGES_PROJECT:-$PROJECT_NAME}"

# ----------------------------
# 2. Pre-flight checks
# ----------------------------

echo "🔱 mkptri.org — Build & Deploy"
echo "--------------------------------"

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed or not in PATH."
  exit 1
fi

if ! command -v npx >/dev/null 2>&1; then
  echo "Error: npx is not installed or not in PATH."
  exit 1
fi

if ! command -v wrangler >/dev/null 2>&1; then
  echo "Error: Cloudflare wrangler CLI is not installed."
  echo "Install with: npm install -g wrangler"
  exit 1
fi

if [ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]; then
  echo "Error: CLOUDFLARE_ACCOUNT_ID environment variable is not set."
  echo "Export it in your shell or set it in your CI environment."
  exit 1
fi

echo "✅ Environment checks passed."
echo

# ----------------------------
# 3. Install dependencies
# ----------------------------

echo "📦 Installing dependencies…"
npm install
echo "✅ Dependencies installed."
echo

# ----------------------------
# 4. Run tests (optional hook)
# ----------------------------

if npm run | grep -q "test"; then
  echo "🧪 Running tests…"
  npm test
  echo "✅ Tests passed."
  echo
else
  echo "ℹ️ No test script found in package.json, skipping tests."
  echo
fi

# ----------------------------
# 5. Build the site
# ----------------------------

echo "🏗  Building the site…"
if npm run | grep -q "build"; then
  npm run build
else
  echo "Error: No build script found in package.json."
  exit 1
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: Build directory '$BUILD_DIR' not found after build."
  exit 1
fi

echo "✅ Build completed. Output at: $BUILD_DIR"
echo

# ----------------------------
# 6. Deploy to Cloudflare Pages
# ----------------------------

echo "🚀 Deploying to Cloudflare Pages…"
echo "   Project: $CF_PAGES_PROJECT"
echo "   Account: $CLOUDFLARE_ACCOUNT_ID"
echo

# Uses wrangler pages deploy
# Make sure you have a wrangler.toml or are authenticated (wrangler login)
npx wrangler pages deploy "$BUILD_DIR" \
  --project-name "$CF_PAGES_PROJECT"

echo
echo "✅ Deployment complete."
echo "🔗 Check your Cloudflare Pages dashboard for deployment URL."