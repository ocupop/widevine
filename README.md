Client Name
================

##Getting Started
1. Install Bundler: `gem install bundler`
2. Install dependencies: `bundle install`
3. Install Node packages: `npm install`

##Adding Angular Application
1. Use angular-cli to create new application and pass in the appropriate prefix: `ng new <app-name> --prefix <client prefix>`

##Daily Startup
1. `cd` to project directory
2. Start environment: `gulp`
3. Navigate to [http://localhost:9999/](http://localhost:9999/)


============

###Mirror this template:
New repository must be created prior

https://help.github.com/articles/duplicating-a-repository/

Create a bare clone

`git clone --bare git@bitbucket.org:ocupop/jekyll-project.git`

Push mirror to new repository

```
cd jekyll-project.git
git push --mirror git@bitbucket.org:ocupop/<repo-name>
```

Remove temporary local instance

``` 
cd ../
rm -rf jekyll-project.git
git clone git@bitbucket.org:ocupop/<repo-name>
```