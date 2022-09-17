.PHONY: build dev

build:
	tweego -o index.html res

dev:
	tweego -w -o index.html res