.PHONY: generate gitpush deploy

gitpush:
	git add . ; git commit -am "Deploy" ; git push -u origin master ; git subtree push --prefix dist origin gh-pages -f ;

generate:
	npm run generate

deploy: generate gitpush
