import neostandard from 'neostandard'

const ignores = ['node_modules', 'temp', 'logs', 'data', 'dist', 'lib']

export default neostandard({
  ignores,
  ts: true,
  globals: {
    Bot: 'readonly',
    redis: 'readonly',
    plugin: 'readonly',
    segment: 'readonly',
    logger: 'readonly'
  }
})
