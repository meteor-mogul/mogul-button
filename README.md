# Meteor Mogul mogul-button

Re-write of default Meteor app using VueJS as the front end to
demonstrate how VueJS works.

You can run it:

```
$ git clone https://github.com/meteor-mogul/mogul-button.git
$ cd mogul-button
$ meteor npm install
$ meteor
```

## Upstream

This app is based on mogul-helloworld.

GitHub makes it very easy to fork other people's repos, which creates a new repo of the same name under your own namespace.  But forking your own repo is a little trickier, since you can't have two repos with the same name.  See [How To Fork Your Own GitHub Repository](https://medium.com/@mikezrimsek/fork-your-own-github-repository-19ad4582b50a).

Here are the steps I took to fork mogul-helloworld to mogul-button:

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
