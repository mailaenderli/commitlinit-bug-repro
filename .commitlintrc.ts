const dummyGetScope = (ctx: any) => 'testScope'

const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': async (ctx: any) => [2, 'always', [...(await dummyGetScope(ctx)), 'your', 'other', 'scopes']]
  },
};

export default config;