# Jekyll Starter for Github Pages or Heroku #

This project uses Jekyll and Ruby. Styles are compiled with postcss, and javascript is compiled with rollup. It is meant for hosting on Cloudcannon and/or Github Pages.

## Getting Started ##
1. Install Node packages: `yarn install`
2. The "postinstall" script should automatically run `bundle install` after yarn has completed installing.

## Daily Startup ##
1. `cd` to project directory
2. Start environment: `yarn dev`
3. Navigate to [http://localhost:4000/](http://localhost:4000/)

## Pagefind Search ##
1. Create a search index by running `npx pagefind --site "_site" --serve`.
2. This will create the pagefind folder and necessary assets in the _site folder. The Pagefind server needs to be running for it to work locally. Currently it will not automatically detect changes to the search index. You will need to restart the server after making changes to the search index for them to show up in search results.
3. Start another terminal and run yarn dev
4. You should now have access to the search index and the searchbar in the header should produce search results
5. In the .cloudcannon folder there is a postbuild script that will add pagefind to your cloudcannon build

## Publishing to Github Pages? ##
1. in .github/jekyll, uncomment lines 6 and 7 to designate which branch to trigger the github action that will build to Github Pages.
## Upgrading to ruby 3.2.2 ##
If you need to upgrade to the lastest Ruby version, a simple rvm update may not work for you. Try the following steps using homebrew
1. Make sure the lastest SSL is installed. Versions greater than 1.1 will likely work as well:\
```
brew install openssl@1.1
```
2. Install Ruby 3.2.2 the following command:\
```
rvm install "ruby-3.2.2" --with-openssl-dir="$(brew --prefix)/opt/openssl@1.1/"
```
