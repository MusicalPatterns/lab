Makefile.self:
	@:

build:
	@musical-patterns-cli build "webpack --config webpack.deploy.js"

deploy:
	@pushd ../..; make deploy; popd

publish:
	@:

test:
	@: