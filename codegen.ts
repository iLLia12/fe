import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:3333/graphql': {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWUxMkBzb21lLmNvbSIsInN1YiI6MTUsImlhdCI6MTY4MDQ0NDgyM30.YIGjCADMX_96YpMCjydco_mWTPufkTgDsmU0JNQfCxU',
      },
    },
  },
  documents: 'operations/**/*.graphql',
  generates: {
    '@types/types.ts': { plugins: ['typescript'] },
    '@types/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
};

export default config;
