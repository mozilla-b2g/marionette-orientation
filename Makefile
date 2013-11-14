TESTS?=$(shell find test -name *_test.js)
REPORTER?=spec
MOCHA_OPTS=--reporter $(REPORTER) \
					 $(TESTS)

.PHONY: default
default: lint test

package.json:
	npm install

b2g: package.json
	./node_modules/.bin/mozilla-download  \
		--verbose \
		--channel prerelease \
		--branch aurora \
		--product b2g $@

.PHONY: test
test: b2g
	./node_modules/.bin/marionette-mocha $(MOCHA_OPTS) --timeout 10s --verbose
