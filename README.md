# flash-message-redux

[![Maintainability](https://api.codeclimate.com/v1/badges/663d53d7a1649aa9ab99/maintainability)](https://codeclimate.com/github/mbeauv/flash-message-redux/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/663d53d7a1649aa9ab99/test_coverage)](https://codeclimate.com/github/mbeauv/flash-message-redux/test_coverage)

Library defining Redux actions and a reducer to to store a global application level message.  This is akin to a toast message or a
flash message if you are familiar with Ruby on Rails.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing

flash-message-redux is an npm module and can be downloaded from the npm registry.

Using npm:

```
npm i --save flash-message-redux
```

Using yarn:

```
yarn add flash-message-redux
```
### Using it

Using the flash-message-redux library is fairly easy.  You first need to add the reducer to your combineReducers call.  Something like:

```
import { flashMessageReducer as flashMessage } from 'flash-message-redux';
const rootReducer = combineReducers({
  flashMessage,
});
```

Next you simple need to use one of the four actions defined:

- flashInfo
- flashWarning
- flashError
- clearFlash

Each one will create a flash message with the associated level.

Now the question is where do you use these methods.  The methods provided through the module do not prevent you using flash-messages at any level of your application.  You could use it in the actions, the reducers or the react components.  I would advise you to use it in the React components only. Flash messages are a UI construct and it wouldn't make much sense to put them in the action for example... though it might be tempting to do this as you have contextual information there too.

### And coding style tests

If submitting code, please ensure that your code follows the eslint rules we use. Thanks.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/mbeauv/214b791a2512201886e4833a3c64241f) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Martin Beauvais** - *Initial work* - [mbeauv](https://github.com/mbeauv)

See also the list of [contributors](https://github.com/mbeauv/media-gallery-redux/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
