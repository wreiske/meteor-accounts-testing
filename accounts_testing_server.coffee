Accounts.registerLoginHandler (loginRequest) ->
  return unless loginRequest.username

  user = Meteor.users.findOne
    username: loginRequest.username

  unless user
    userId = Meteor.users.insert
      username: loginRequest.username
  else
    userId = user._id;

  return {
    userId: userId
  }
