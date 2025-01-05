SHELL:=/usr/bin/env bash
.DEFAULT_GOAL:=help

################################################################################
# dependencies

node_modules: package-lock.json
	npm ci
	touch -m node_modules

################################################################################
# tasks

.PHONY: help ## Display this help message
help:
	@echo "Makefile as a task runner for local development."
	@echo ""
	@echo "Targets:"
	@grep -E '^\.PHONY: [a-zA-Z_/-]+ ##' $(MAKEFILE_LIST) |\
		sed -r "s/\.PHONY: //" |\
		awk 'BEGIN {FS = " ## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: precommit ## Perform precommit check (type-check, test and lint)
precommit: node_modules
	npm run type-check
	npm run test -- --changed --run
	npm run fmt

.PHONY: wad-viewer/dev ## Start dev server of wad-viewer
wad-viewer/dev: node_modules
	npm run -w @~/wad-viewer dev

.PHONY: build ## Build static files for GitHub pages
build: node_modules
	rm -fr ./dist
	npm run -w @~/wad-viewer build
	mkdir -p ./dist
	mv ./packages/app-wad-viewer/dist ./dist/wad-viewer
