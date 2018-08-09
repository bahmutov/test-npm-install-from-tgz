# test-npm-install-from-tgz

> Test if NPM postinstall script can access the original TGZ filename from npm i .../foo.tgz

This package just prints `process.env` from its `postinstall` script.

- pack this package into archive using `npm pack` command and rename this file to `foo.tgz` for realistic testing (use `npm run archive` command)
- try installing from another folder with command `npm i ~/git/test-npm-install-from-tgz/foo.tgz`

you should see the _original_ npm argument (I am using npm v6)

```text
$ npm i ~/git/test-npm-install-from-tgz/foo.tgz | grep foo.tgz
npm_config_argv: '{"remain":["/Users/gleb/git/test-npm-install-from-tgz/foo.tgz"],"cooked":["i","/Users/gleb/git/test-npm-install-from-tgz/foo.tgz"],"original":["i","/Users/gleb/git/test-npm-install-from-tgz/foo.tgz"]}',
```

as you can see the original installation filepath is available in `npm_config_argv` object

- start local http server

```text
$ http-server -c-1 -p 4500
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:4500
  http://10.130.4.201:4500
Hit CTRL-C to stop the server
```

and install `foo.tgz` from static server

```text
$ npm i http://localhost:4500/foo.tgz | grep foo.tgz
npm_config_argv: '{"remain":["http://localhost:4500/foo.tgz"],"cooked":["i","http://localhost:4500/foo.tgz"],"original":["i","http://localhost:4500/foo.tgz"]}'
```

again, the original URL is available from `npm_config_argv` object
