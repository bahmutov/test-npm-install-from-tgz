console.log('post install environment')
console.log(process.env)

const getOriginalArg = (npmConfigArgv) =>
  npmConfigArgv.original[1]

const getOriginalPath = () =>
  process.env.npm_config_argv ? getOriginalArg(JSON.parse(process.env.npm_config_argv)) : null

console.log('original tgz archive filename', getOriginalPath())
