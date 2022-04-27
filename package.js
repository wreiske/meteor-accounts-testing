Package.describe({
    name: 'communitypackages:accounts-testing',
    summary: 'Accounts drop-in for testing that allows logging in without a password.',
    version: '0.1.1',
    git: 'https://github.com/Meteor-Community-Packages/meteor-accounts-testing.git'
});

Package.onUse((api) => {
    api.imply(['accounts-base', 'accounts-ui']);
    api.use(['accounts-base', 'coffeescript']);

    api.addFiles('accounts_testing_server.coffee', 'server');
    api.addFiles('accounts_testing_client.coffee', 'client');
});
