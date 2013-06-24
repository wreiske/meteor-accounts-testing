Accounts.registerLoginHandler (loginRequest) ->
  return unless loginRequest.username

  user = Meteor.users.findOne
    username: loginRequest.username

  unless user
    userId = Meteor.users.insert
      username: loginRequest.username
  else
    userId = user._id;

  stampedToken = Accounts._generateStampedLoginToken();
  Meteor.users.update userId,
    $push: {'services.resume.loginTokens': stampedToken}

  # Delete old resume tokens so they don't clog up the db
  cutoff = +(new Date) - (24*60*60)*1000
  Meteor.users.update userId, {
    $pull:
      'services.resume.loginTokens':
        when: {$lt: cutoff}
  },
  {multi : true}

  return {
    id: userId,
    token: stampedToken.token
  }
