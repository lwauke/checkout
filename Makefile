.PHONY: build dev

build-dev:
	DOCKER_BUILDKIT=1 docker build --network=host --target dev --tag checkout .

dev: build-dev
	docker run -it -p 3000:3000 \
	--mount type=bind,source=$(CURDIR)/src,target=/opt/checkout/src \
	checkout
