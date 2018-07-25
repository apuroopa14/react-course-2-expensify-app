#about project
Developed an expense manager application using React.js
Tested using jest framework.Used Redux Store for state management.
Deployed the app on heroku.Firebase framework is used for data storage.

#git commands

git init -create a new git repo
git status -view the changes to your project code
git add-add files to staginfg area
git commit-creates a new commit with files from staging area
git log-view recent commits


#flow for react:

componetn calls action generator
action generator returns object
component dispatches object
redux store changes


components calls action generator
action generator returns function
component dispatches function(?)
function runs (has the ability to dispatch other actions and do whatever it wants)
