Meteor.insecureUserLogin = (username, callback) ->
  Accounts.callLoginMethod
    methodArguments: [{username: username}],
    userCallback: callback
