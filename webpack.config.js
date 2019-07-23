module.exports = {
  mode: 'development',
  entry: './index.js',
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.watchRun.tapPromise('my-test', compilation => {
          return Promise.reject('this is an error')
        })
      }
    }
  ]
}
