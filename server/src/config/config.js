module.exports = {
  // [A] PORT ENVs
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  
  // [B] DATABASE ENVs
  db: {
    google_account_credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET_URL,

    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  },

  // [C] AUTH ENVs
  authentication: {
    //Application secret for creating a secure web token
    jwtSecret: process.env.JWT_SECRET,
  },

  // [D] Approved CORS root URLs
  corsAllowedOptions: [
    process.env.CORS_WHITELIST_1,
    process.env.CORS_WHITELIST_2
  ]  
}