const TOML = require("@ltd/j-toml");

const config = TOML.parse({ path: `${process.env.PWD}/netlify.toml` });

module.exports = JSON.stringify(
  config.redirects.reduce((o, { from, to }) => ({ ...o, [from]: to }), {})
);
