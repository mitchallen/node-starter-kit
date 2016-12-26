node-starter-kit 
==
node starter kit files used by a node-starter script.
--

## Usage

This kit is not meant to be used directly. Instead, it is cloned by a script that will use it to initialize __NodeJS__ projects. 

The script that uses this kit can be found here: 

* [https://bitbucket.org/snippets/mitchallen/jxdz4](https://bitbucket.org/snippets/mitchallen/jxdz4)
   
* * *

## Kit Files

### Template Files

* __kit/README.template__ - the starter script will copy this file as __README.md__ to the root of the new project and use __sed__ to replace inplace special vars in the the new file
* __kit/package.json__ - the starter script will copy this file to the root of the new project and use __sed__ to replace inplace special strings in the new file
* __kit/index.js__ - the starter script will copy this file to the root of the new project and use __sed__ to replace inplace special strings in the new file 
* __kit/index-factory.js__ - example for using a factory
* __kit/index-factory-derived.js__ - example for using a factory derived from another factory
* __kit/smoke-test.js__ - the starter script will copy this file to the __test__ folder of the new project and use __sed__ to replace inplace special strings in the new file
* __kit/smoke-test-factory.js__ - example for using a factory
* __kit/smoke-test-factory-derived.js__ - example for using a factory derived from another factory

### Copied Files

* __kit/npmignore.txt__ - the starter script will copy this file to the root of the project as to __.npmignore__ . The file will be hidden. To see it use __ls -la__ at the command line
* __kit/Gruntfile.js__ - the starter script will copy this file to the root of the new project without modification

* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/node-starter-kit.git](https://bitbucket.org/mitchallen/node-starter-kit.git)
* [github.com/mitchallen/node-starter-kit.git](https://github.com/mitchallen/node-starter-kit.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.10

* Removed __dist__ from .npmignre

#### Version 0.1.9

* Updated factory index-factory.js and smoke-test-factory.js to use arrow operator

#### Version 0.1.8

* Added templates index-factory-derived.js and smoke-test-factory-derived.js to kit

#### Version 0.1.7

* Added templates index-factory.js and smoke-test-factory.js to kit

#### Version 0.1.6

* Added templates index.js and smoke-test.js to kit

#### Version 0.1.5

* fixed another type-o in README.template

#### Version 0.1.4

* fixed type-o in README.template

#### Version 0.1.3

* for consistency all replacement vars now user underscores instead of hyphens

#### Version 0.1.2

* fixed issue in README.template

#### Version 0.1.1 

* updated templates to work with sed commands

#### Version 0.1.0 

* initial release

* * *
