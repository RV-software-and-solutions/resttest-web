import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "production",
  api_url: 'https://localhost:7232/'
};

export const environment = { ...commonEnv, ...env };
