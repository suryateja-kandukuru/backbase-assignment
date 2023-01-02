module.exports = {
  name: 'application-b',
  exposes: {
    './Module': 'apps/application-b/src/app/remote-entry/entry.module.ts',
  },
};
