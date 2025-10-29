#!/bin/bash

echo "🧹 Cleaning up Next.js development server..."

# Kill any running Next.js processes
pkill -f "next dev" || echo "No Next.js dev processes found"

# Remove Next.js cache and lock files
rm -rf .next

echo "✅ Cleanup complete! Starting fresh dev server..."
npm run dev
