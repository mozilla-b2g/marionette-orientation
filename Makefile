.PHONY: default
default: test

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
	./node_modules/.bin/marionette-mocha \
		$(wildcard ./*_test.js) \
		$(wildcard ./lib/*_test.js)
