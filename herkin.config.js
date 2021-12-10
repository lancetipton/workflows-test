const path = require('path')

module.exports = {
  paths: {
    repoRoot: path.join(__dirname),
    workDir: 'herkin',
    reportsDir: 'reports',
    artifactsDir: 'artifacts',
    featuresDir: 'bdd/features',
    supportDir: 'bdd/support',
    world: 'bdd/support/world.js',
    stepsDir: 'bdd/steps',
    unitDir: 'unit',
    waypointDir: 'waypoint'
  },
  world: {
    app: {
      url: `https://github.com/lancetipton/workflows-test`,
    },
    alias: {
      search: `element ".gLFyf"`,
    },
    settings: {
      browser: {
        slowMo: 500
      },
      tests: {
        timeout: 5000
      }
    }
  }
}