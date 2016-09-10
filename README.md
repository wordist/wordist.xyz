# wordist.xyz

[![Build Status](https://travis-ci.org/wordist/wordist.xyz.svg?branch=master)](https://travis-ci.org/wordist/wordist.xyz)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/wordist/Lobby)
[![Dependency Status](https://david-dm.org/wordist/wordist.xyz.svg)](https://david-dm.org/wordist/wordist.xyz)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wordist/wordist.xyz/master/LICENSE)
[![Docker Pulls](https://img.shields.io/docker/pulls/scriptnull/wordist.xyz.svg?maxAge=2592000)](https://hub.docker.com/r/scriptnull/wordist.xyz/)

Unblock words. Continue conversations.

### Development workflow

- Get source code and dependencies.
```bash
# via ssh
git@github.com:wordist/wordist.xyz.git

# via https
https://github.com/wordist/wordist.xyz.git

npm install
```

- Install [rethinkdb](https://www.rethinkdb.com/). If you fancy using docker, you could use
```bash
npm run docker-rethink
```

- Initialize database and tables
```bash
npm run init-db
npm run init-tables
```

- Start Server
```bash
npm start

# The http server should be running now at http://localhost:8081
```

- Run tests. Tests use superagent to check API, so server must be live prior to running tests.
```bash
npm test
```

Check the issue tracker, if you would like to contribute on things. Write tests for your code, if applicable.

### Thanks
Thanks for taking time to look at wordist. We really appreciate it. :heart:
