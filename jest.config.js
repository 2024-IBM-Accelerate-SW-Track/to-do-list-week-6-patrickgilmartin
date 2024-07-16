module.exports = {
    verbose: true,
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios).+\\.js$"
    ],
  };
  