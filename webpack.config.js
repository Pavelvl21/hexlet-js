{
  module: {
      exprContextCritical: false,
      rules: [{
          test: /_test\.js$/,
          use: [{
              loader: "webpack-espower-loader",
              options: {
                  patterns: [
                      'assert(value, [message])',
                      'assert.ok(value, [message])',
                      'assert.equal(actual, expected, [message])',
                      'assert.notEqual(actual, expected, [message])',
                      'assert.strictEqual(actual, expected, [message])',
                      'assert.notStrictEqual(actual, expected, [message])',
                      'assert.deepEqual(actual, expected, [message])',
                      'assert.notDeepEqual(actual, expected, [message])'
                  ]
              }
          }]
      }]
  }
}