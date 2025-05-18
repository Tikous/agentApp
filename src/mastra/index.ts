
import { Mastra } from '@mastra/core/mastra';
import { CloudflareDeployer } from '@mastra/deployer-cloudflare';
import { codeReviewAgent } from './agents';

export const mastra = new Mastra({
  deployer: new CloudflareDeployer({
    scope: process.env.CLOUDFLARE_ACCOUNT_ID || '', // Cloudflare账户ID
    projectName: 'agentapp', // Worker项目名称
    routes: [],
    auth: {
      apiToken: process.env.CLOUDFLARE_API_TOKEN || '', // Cloudflare API令牌
      apiEmail: process.env.CLOUDFLARE_API_EMAIL, // 与Cloudflare账户关联的邮箱
    },
  }),
  agents: { codeReviewAgent },
});
