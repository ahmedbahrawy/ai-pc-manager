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

validateEnv(); 