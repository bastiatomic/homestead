export default {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageReporters: ["html"],
  collectCoverage: true,
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.app.json",
      diagnostics: false,
    },
  },
};
