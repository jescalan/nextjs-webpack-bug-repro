module.exports = {
  webpack(config) {
    config.plugins.push({
      apply(compiler) {
        compiler.hooks.watchRun.tapAsync('my-test', (compilation, cb) => {
          console.log(`plugin running for compilation ${compilation.name}`)
          return cb('error!')
        })
      }
    })
    return config
  }
}
