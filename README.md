# Widevine

This project uses Gulp, Webpack, Jekyll, React

## Getting Started

1. Install Bundler: `gem install bundler`
2. Install dependencies: `bundle install`
3. Install Node packages: `npm install`

## Local Startup

1. `cd` to project directory
2. Start environment: `npm start`
3. Navigate to [http://localhost:9999/](http://localhost:9999/)

## Deploy

1. `cd` to project directory
2. Deploy site to Firebase: `npm run deploy`



If you need to have v8@3.15 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/v8@3.15/bin:$PATH"' >> /Users/pgrover/.bash_profile

For compilers to find v8@3.15 you may need to set:
  export LDFLAGS="-L/usr/local/opt/v8@3.15/lib"
  export CPPFLAGS="-I/usr/local/opt/v8@3.15/include"
