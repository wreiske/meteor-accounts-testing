Package.describe({
    summary: "Accounts drop-in for testing that allows logging in without a password."
});

Package.on_use( function(api) {
    api.use('accounts-base', ['client','server']);
    api.use('coffeescript', 'server');
    api.add_files('accounts_testing_server.coffee', 'server');
    api.add_files('accounts_testing_client.coffee', 'client');
});

