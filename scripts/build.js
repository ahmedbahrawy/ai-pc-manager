const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

// Ensure we're in production mode
process.env.NODE_ENV = 'production'

// Clean previous build
console.log('🧹 Cleaning previous build...')
try {
  fs.rmSync('.next', { recursive: true, force: true })
  fs.rmSync('out', { recursive: true, force: true })
} catch (error) {
  // Ignore errors if directories don't exist
}

// Run type checking
console.log('🔍 Running type check...')
execSync('tsc --noEmit', { stdio: 'inherit' })

// Run linting
console.log('🎨 Running linter...')
execSync('next lint', { stdio: 'inherit' })

// Optimize images
console.log('🖼️  Optimizing images...')
execSync('next-image-export-optimizer', { stdio: 'inherit' })

// Run the production build
console.log('🏗️  Building for production...')
execSync('next build', { stdio: 'inherit' })

// Generate static files if needed
if (process.env.NEXT_EXPORT === 'true') {
  console.log('📦 Generating static files...')
  execSync('next export', { stdio: 'inherit' })
}

// Run post-build optimizations
console.log('✨ Running post-build optimizations...')

// Analyze bundle size
console.log('📊 Analyzing bundle size...')
execSync('next bundle-analyzer', { stdio: 'inherit' })

console.log('✅ Build complete!') 