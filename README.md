accounts-testing allows you to test different users in your system before integrating with another accounts system.

# Install

```
mrt install accounts-testing
```

# Usage

Log in with `username`. If will be created if it doesn't already exist:

```
Meteor.insecureUserLogin(username);
```

Add `{{loginButtons}}` to a page to see the currently logged-in user and get the button to logout.

Check out mizzao/meteor-user-status for a cool plugin that keeps track of which users are online.
