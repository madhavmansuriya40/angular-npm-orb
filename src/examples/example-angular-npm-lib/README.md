# Angular2+ NPM Library Template

This repo can be used as a base for creating NPM packages that are built with angular.

# Build tools

The tools I used and recommended tools to build are [VS Code][vscode-link]

# Usage

To make use of this template and get started follow these steps:

* Clone the repo
* Navigate to the location
* Run `ng g library my-lib-name`
  * this will generate a new library project for you in `projects/my-lib-name`

You now have your first angular library 😊

## Creating your library

Now that you've generated your template library code, you can navigate into `projects/my-lib-name` and make the library how you want/need to.

### IMPORTANT UPDATE

Remember to make the changes to the `package.json` in `my-lib-name` folder, as this is what will be used for the NPM package information once published.

To see an example of a `package.json` you can find one [here][package.json-example]

## Publishing To NPM

> You need to have a npm account in order to publish to npm.
> Make sure to run `npm login` first before continuing.
> You will login with your NPM details and this will be remembered on your computer until you logout.

Once you are happy with the library and want to publish the package to NPM you'll need to do the following:

* Navigate to the root directory
* Run `ng build my-lib-name`
  * This will generate a dist folder from the root like `dist/my-lib-name`
* You can now navigate into `dist/my-lib-name`
* Now run `npm publish`

# Small change to make

There is one small `gotcha` here that you will need to change.

In the `root directory` (outside of the projects location), make sure to update the `package.json` file.

Please provide your own name here for the package.json as required.

This does not affect the package that you push to NPM, but simply the package information for your repo.

[package.json-example]: https://gist.github.com/NewteqDeveloper/9a10a19b6c363d486aa67e2562b648a3
[vscode-link]: https://code.visualstudio.com/
