module.exports = {
  'extends': ['eslint:recommended', 'google', 'plugin:react/recommended'],
  'env': {
    // For more environments, see here: http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,
    "jquery": true,
  },
  "parser": "babel-eslint",
  'rules': {
    // Insert custom rules here
    // For more rules, see here: http://eslint.org/docs/rules/
    "no-unused-vars": "off",
    "no-console": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use, default to "createReactClass"
      'pragma': 'React',  // Pragma to use, default to "React"
      'version': '15.0', // React version, default to the latest React stable release
      'flowVersion': '0.53' // Flow version
    },
    'propWrapperFunctions': [ 'forbidExtraProps' ] // The names of any functions used to wrap the
                                                    // propTypes object, e.g. `forbidExtraProps`.
                                                    // If this isn't set, any propTypes wrapped in
                                                    // a function will be skipped.
  },
  'plugins': [ 'react' ]
}
