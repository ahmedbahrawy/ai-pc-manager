require('dotenv').config({ path: '.env.local' });

const { execSync } = require('child_process')
const fs = require('fs')

// Ensure we're in production mode
process.env.NODE_ENV = 'production'

// Validate environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_APP_URL',
  'NEXT_PUBLIC_APP_NAME',
  'NEXT_PUBLIC_FEATURE_FLAGS',
  'NEXT_PUBLIC_APP_ENV'
];

function validateEnv() {
  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingVars.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Missing required environment variables:');
    missingVars.forEach(envVar => {
      console.error('\x1b[31m%s\x1b[0m', `- ${envVar}`);
    });
    console.error('\x1b[33m%s\x1b[0m', '\nPlease set these variables in your Vercel project settings or .env file.');
    process.exit(1);
  }

  // Validate JSON format for FEATURE_FLAGS
  try {
    if (process.env.NEXT_PUBLIC_FEATURE_FLAGS) {
      JSON.parse(process.env.NEXT_PUBLIC_FEATURE_FLAGS);
    }
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: NEXT_PUBLIC_FEATURE_FLAGS must be valid JSON');
    process.exit(1);
  }

  console.log('\x1b[32m%s\x1b[0m', '✓ Environment variables validated successfully');
}

// Clean previous build
console.log('🧹 Cleaning previous build...');
try {
  fs.rmSync('.next', { recursive: true, force: true });
  fs.rmSync('out', { recursive: true, force: true });
} catch (error) {
  // Ignore errors if directories don't exist
}

// Validate environment variables
validateEnv();

// Run type checking
console.log('🔍 Running type check...');
execSync('tsc --noEmit', { stdio: 'inherit' });

// Run the production build
console.log('🏗️  Building for production...');
execSync('next build', { stdio: 'inherit' });

console.log('✅ Build complete!'); 