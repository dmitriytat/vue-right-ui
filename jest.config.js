module.exports = {
  "verbose": true,
  "collectCoverage": true,
  "coverageReporters": [
    "lcov"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "snapshotSerializers": [
    "jest-serializer-vue"
  ],
  "testMatch": [
    "**/src/**/*.spec.(js|jsx|ts|tsx)"
  ],
  "testURL": "http://localhost/",
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  setupFiles: [
    "<rootDir>/jest.setup.js"
  ]
};
