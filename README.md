# meteor-accounts-testing

accounts-testing allows you to test different users in your system before integrating with another accounts system.

## Install

```
$ mrt add accounts-testing
```

## Usage

Log in with `username`. If will be created if it doesn't already exist:

```
Meteor.insecureUserLogin(username);
```

Add `{{> loginButtons}}` to any template to see the currently logged-in user and get the button to logout.

Check out https://github.com/mizzao/meteor-user-status for a cool
plugin that keeps track of which users are online. This package is
used in the demo at http://user-status.meteor.com.
