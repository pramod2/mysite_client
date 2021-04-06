const config = {
  aws_project_region: process.env.PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
  aws_cognito_region: process.env.COGNITO_REGION,
  aws_user_pools_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
  aws_user_pools_web_client_id: process.env.VUE_APP_COGNITO_CLIENT_ID,
  oauth: {},
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  apiUrl: process.env.API_URL,
};

export default config;
