module.exports = {
  source: 'src',
  output: 'lib',
  targets: [
    'commonjs', // for Node and Jest
    'module',   // for Metro and bundlers
    'typescript', // optional but recommended for type definitions
  ],
};
