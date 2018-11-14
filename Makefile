.PHONY: lint
.PHONY: test

setup:
	./bin/setup.sh

start:
	./bin/start.sh

deploy:
	./bin/deploy.sh

test:
	./bin/test.sh

push:
	./bin/push.sh

pull:
	./bin/pull.sh

lint:
	./bin/lint.sh

snapshot:
	./bin/snapshot.sh

build:
	./bin/build.sh
