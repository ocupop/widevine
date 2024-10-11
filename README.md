# Widevine Website for Github Pages or Heroku #

This project uses Jekyll and Ruby. Styles are compiled with postcss, and javascript is compiled with rollup. It is meant for hosting on Cloudcannon and/or Github Pages.

## Getting Started ##
1. Install Node packages: `npm install`

## Daily Startup ##
1. `cd` to project directory
2. Start environment: `npm start`
3. Navigate to [http://localhost:4000/](http://localhost:4000/)


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
