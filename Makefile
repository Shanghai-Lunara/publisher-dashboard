.PHONY: web

HARBOR_DOMAIN := $(shell echo ${HARBOR})
PROJECT := lunara-common
DASHBOARD_IMAGE := "$(HARBOR_DOMAIN)/$(PROJECT)/publisher-dashboard:latest"

env:
	npm install yarn
	yarn global add @vue/cli
	yarn add jquery
	
web:
	yarn build
	docker build -t $(DASHBOARD_IMAGE) .
	docker push $(DASHBOARD_IMAGE)
	rm -rf dist

clean:
	echo $(shell docker images | grep none | awk '{print $3}' | xargs docker image rm -f)