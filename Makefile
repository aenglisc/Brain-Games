install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .

publish:
	npm publish

.PHONY: test
