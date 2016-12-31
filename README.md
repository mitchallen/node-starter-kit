node-starter-kit 
==
node starter kit files used by a node-starter script.
--

## Usage

This kit is not meant to be used directly. Instead, it is cloned by a script that will use it to initialize __NodeJS__ projects. 
   
* * *

## Kit Files

A starter kit should copy these files to the root or subfolder of a new project and use sed to replace values.

### Template Files

* __kit/README.template__ - copy to root the root of your project as README.md 
* __kit/package.json__ - copy to the root of the project
* __kit/index-factory.js__ - copy to modules/index.js
* __kit/smoke-test-factory.js__ - copy to test/smoke-test.js
* __kit/npmignore.txt__ - copy this file to the root of the project as to __.npmignore__. The file will be hidden. To see it use __ls -la__ at the command line
* __kit/Gruntfile.js__ - copy to the root of the new project 
* __kit/browser.js__ - copy to the root of the new project
* __kit/example-browser.html__ - copy to examples/client-example

### Setting Up Subfolders

Example bash script:

    function CreateSubfolders {

  	  echo "*** $FUNCNAME"

	  # Create subfolders

	  echo "... Creating subfolder 'dist'"
	  mkdir dist

	  echo "... Creating subfolder 'modules'"
	  mkdir modules

	  echo "... Creating subfolder 'test'"
	  mkdir test

	  echo "... Creating subfolder 'examples'"
	  mkdir examples

	  echo "... Creating subfolder 'examples/client-example'"
	  mkdir examples/client-example
    }

### Copying from Clone

Example script:

    function CopyCloneFiles {

	  echo "*** $FUNCNAME $1"

	  if [[ $# -ne 1 ]]; then
		echo "!!! Usage: $FUNCNAME clone-folder "
		exit 1
	  fi

	  __cloneFolder=$1

	  if [ -d $__cloneFolder ]; then
		echo "... VERIFYING: found clone folder '$__cloneFolder'"
	  else
		echo "!!! ERROR: Clone folder '$__cloneFolder' does not exist!"
		exit 1
	  fi

	  echo "... Copying clone files"

	  # copy files from clones kit folder
	  cp $__cloneFolder/kit/Gruntfile.js .
	  cp $__cloneFolder/kit/package.json .
	  cp $__cloneFolder/kit/index-factory.js modules/index.js
	  cp $__cloneFolder/kit/smoke-test-factory.js test/smoke-test.js
	  cp $__cloneFolder/kit/npmignore.txt .npmignore
	  cp $__cloneFolder/kit/README.template README.md
	  cp $__cloneFolder/kit/browser.js .
	  cp $__cloneFolder/kit/example-browser.html examples/client-example/index.html

	  # remove clone folder
	  echo "... Removing clone folder '$__cloneFolder'"
	  rm -rf $__cloneFolder
    }
    
### DemandFile 

Useful in bash scripts to make sure a file exists

    function DemandFile {

	  echo "*** $FUNCNAME $1"

	  if [[ $# -ne 1 ]]; then
		echo "!!! Usage: $FUNCNAME file"
		exit 1
	  fi

	  __demandFile=$1

	  if [ ! -f $__demandFile ]; then
    	echo "!!! ERROR: Can't find file: $__demandFile"
    	exit 1
	  fi
    }
    
### Use SED

Use sed to replace strings in files:

Any variable that starts with a __$__ must be supplied by the script or the environment.

    function FillTemplates {

	  echo "*** $FUNCNAME"

	  # Update fields in cloned files

	  #  File: index.js

	  DemandFile "modules/index.js"

	  echo "... Updating modules/index.js"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" modules/index.js
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" modules/index.js
	  sed -i .bak "s/AUTHOR_NAME/$AUTHOR_NAME/g" modules/index.js

	  cat modules/$packageName.js

	  #  File: test/smoke-test.js

	  DemandFile "test/smoke-test.js"

	  echo "... updating test/smoke-test.js"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" test/smoke-test.js
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" test/smoke-test.js
	  sed -i .bak "s/AUTHOR_NAME/$AUTHOR_NAME/g" test/smoke-test.js

	  cat test/smoke-test.js

	  #  File: package.json

	  DemandFile "package.json"

	  echo "... Updating package.json"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" package.json
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" package.json
	  sed -i .bak "s/BITBUCKET_USER/$BITBUCKET_USER/g" package.json
	  sed -i .bak "s/GITHUB_USER/$GITHUB_USER/g" package.json
	  sed -i .bak "s/NPM_AUTHOR/$npmAuthor/g" package.json

	  cat package.json

	  #  File: Gruntfile.js

	  DemandFile "Gruntfile.js"

	  echo "... updating Gruntfile.js"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" Gruntfile.js
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" Gruntfile.js

	  cat Gruntfile.js

	  #  File: README.md

	  DemandFile "README.md"

	  echo "... Updating README.md"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" README.md
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" README.md
	  sed -i .bak "s/BITBUCKET_USER/$BITBUCKET_USER/g" README.md
	  sed -i .bak "s/GITHUB_USER/$GITHUB_USER/g" README.md
	  sed -i .bak "s/NPM_AUTHOR/$npmAuthor/g" README.md

	  cat README.md

	  # Examples 

	  DemandFile "examples/client-example/index.html"

	  echo "... Updating examples/client-example/index.html"

	  sed -i .bak "s/NPM_SCOPE/$NPM_SCOPE/g" examples/client-example/index.html
	  sed -i .bak "s/PACKAGE_NAME/$packageName/g" examples/client-example/index.html
	  sed -i .bak "s/GITHUB_USER/$GITHUB_USER/g" examples/client-example/index.html

	  echo "... Removing sed backup files"

	  rm *.bak
	  rm test/*.bak
	  rm modules/*.bak
	  rm examples/client-example/*.bak
    }


### Old Files

These files were moved out of the kit:

* __old/index-factory-derived.js__ - example for using a factory derived from another factory
* __old/index.js__ - original root
* __old/smoke-test-factory-derived.js__ - example for using a factory derived from another factory
* __kit/smoke-test.js__ - original smoke test
 

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

#### Version 0.1.11

* updated Gruntfile.js
* moved some index* and test* files out of __kit__ to __old__ folder
* added browser.js and example-browser.html for client support

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
