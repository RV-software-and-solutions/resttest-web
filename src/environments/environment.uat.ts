import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "uat",
  api_url: 'https://localhost:7232/'
};

export const environment = { ...commonEnv, ...env };
