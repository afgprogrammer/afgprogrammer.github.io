.PHONY: generate gitpush deploy

gitpush:
	git add . ; git commit -am "Deploy" ; git push -u origin master ; git push origin `git subtree split --prefix dist master`:gh-pages --force ;

generate:
	npm run generate

deploy: generate gitpush
