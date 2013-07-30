Package.describe({
    summary: "Accounts drop-in for testing that allows logging in without a password."
});

var both = ['client','server'];

Package.on_use( function(api) {
    api.use('accounts-base', both);
    api.use('coffeescript', both);

    api.add_files('accounts_testing_server.coffee', 'server');
    api.add_files('accounts_testing_client.coffee', 'client');
});

