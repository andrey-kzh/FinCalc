module.exports = {
    script: "FinCalc",
    env: {
      PM2_SERVE_PATH: './server/',
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: './frontend/prod/index.html'
    }
  }