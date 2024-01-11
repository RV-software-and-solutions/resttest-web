import { commonEnv } from "./environment.common";

const env: Partial<typeof commonEnv> = {
  production: true,
  environmentName: "qa",
  api_url: 'https://localhost:7232/'
};

export const environment = { ...commonEnv, ...env };
