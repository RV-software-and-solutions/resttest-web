import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "production",
  api_url: 'https://w8-be.rvs.cloudns.biz/'
};

export const environment = { ...commonEnv, ...env };
