# How to reproduce the error
1. run `npm install`
2. run `"not a conventional commit" | npx commitlint`
3. TSError is thrown: 
   ```
    return new TSError(diagnosticText, diagnosticCodes, diagnostics);
           ^
    TSError: ⨯ Unable to compile TypeScript:
    .commitlintrc.ts:3:24 - error TS7006: Parameter 'ctx' implicitly has an 'any' type.

    3 const dummyGetScope = (ctx) => 'testScope';
                            ~~~
    .commitlintrc.ts:7:30 - error TS7006: Parameter 'ctx' implicitly has an 'any' type.

    7         'scope-enum': async (ctx) => [2, 'always', [...(await dummyGetScope(ctx)), 'your', 'other', 'scopes']]
   ```
4. expected output
   ```
    ⧗   input: not a conventional commit
    ✖   subject may not be empty [subject-empty]
    ✖   type may not be empty [type-empty]

    ✖   found 2 problems, 0 warnings
    ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
   ```