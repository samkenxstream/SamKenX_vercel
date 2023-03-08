const ARG_COMMON = {
  '--help': Boolean,
  '-h': '--help',

  '--platform-version': Number,
  '-V': '--platform-version',

  '--debug': Boolean,
  '-d': '--debug',

  '--no-color': Boolean,

  '--token': String,
  '-t': '--token',

  '--scope': String,
  '-S': '--scope',

  '--team': String,
  '-T': '--team',

  '--local-config': String,
  '-A': '--local-config',

  '--global-config': String,
  '-Q': '--global-config',

  '--api': String,

  '--target': String,

  '--cwd': String,
};

export default () => ARG_COMMON;
