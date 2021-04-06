const config = {
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: process.env.VUE_APP_COGNITO_USERPOOL_ID,
  aws_user_pools_web_client_id: process.env.VUE_APP_COGNITO_CLIENT_ID,
  oauth: {},
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  apiUrl: 'https://w7fhktx3j4.execute-api.us-east-1.amazonaws.com/latest',
};

export default config;
