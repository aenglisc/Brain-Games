install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js
	npm run babel-node -- src/bin/brain-even.js
	npm run babel-node -- src/bin/brain-calc.js
	npm run babel-node -- src/bin/brain-gcd.js
	npm run babel-node -- src/bin/brain-balance.js
	npm run babel-node -- src/bin/brain-progression.js
	npm run babel-node -- src/bin/brain-prime.js

start-even:
	npm run babel-node -- src/bin/brain-even.js

start-calc:
	npm run babel-node -- src/bin/brain-calc.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd.js

start-balance:
	npm run babel-node -- src/bin/brain-balance.js

start-progression:
	npm run babel-node -- src/bin/brain-prime.js

start-prime:
	npm run babel-node -- src/bin/brain-prime.js

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
