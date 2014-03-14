Package.describe({
    summary: "Accounts drop-in for testing that allows logging in without a password."
});

Package.on_use( function(api) {
    api.imply(['accounts-base', 'accounts-ui']);
    api.use(['accounts-base', 'coffeescript']);

    api.add_files('accounts_testing_server.coffee', 'server');
    api.add_files('accounts_testing_client.coffee', 'client');
});
