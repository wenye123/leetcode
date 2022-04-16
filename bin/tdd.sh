#!/bin/sh
cd $(pwd)
./node_modules/.bin/mocha --watch-files "**/*.ts" --watch "test/$1/test-$2.ts"
