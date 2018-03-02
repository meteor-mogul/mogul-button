# Meteor Mogul mogul-button

## What

Re-write of default Meteor app using VueJS as the front end.

## Why

To demonstrate how VueJS works.

## How

You can run it:

```
$ git clone https://github.com/meteor-mogul/mogul-button.git
$ cd mogul-button
$ meteor npm install
$ meteor
```

If you're updating from an older version to Meteor 1.6.1, you might also have to do:

```
$ meteor npm install --save @babel/runtime
```

## Upstream

This app is based on mogul-helloworld.

GitHub makes it very easy to fork other people's repos, which creates a new repo of the same name under your own namespace.  But forking your own repo is a little trickier, since you can't have two repos with the same name.  See [How To Fork Your Own GitHub Repository](https://medium.com/@mikezrimsek/fork-your-own-github-repository-19ad4582b50a).

Here are the steps I took to fork my own repo mogul-helloworld to another repo of mine called mogul-button:

1. Create new mogul-button repo on GitHub.  Leave empty.
1. Clone mogul-helloword, point git to new repo, and push to new repo.

   ```
   $ git clone https://github.com/meteor-mogul/mogul-helloworld.git mogul-button
   $ cd mogul-button
   $ git remote rename origin upstream
   $ git remote add origin https://github.com/meteor-mogul/mogul-button.git
   $ git push -u origin --all
   $ git push -u origin --tags
   ```
