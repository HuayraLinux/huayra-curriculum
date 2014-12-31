N=[0m
V=[01;32m

VERSION=0.0.4
NAME=huayra-curriculum

all:
	@echo "Comando disponibles"
	@echo ""
	@echo "  $(V)actualizar$(N)  Actualiza el repositorio e instala las dependencias."
	@echo ""
	@echo "  $(V)version$(N)     Genera la informacion de versión actualizada."
	@echo "  $(V)ver_sync$(N)    Sube la nueva version al servidor."
	@echo ""
	@echo "  $(V)server$(N)      Prueba la aplicación en el navegador."
	@echo "  $(V)build$(N)       Genera los archivos compilados."
	@echo "  $(V)watch$(N)       Genera los archivos compilados de forma contínua."
	@echo ""
	@echo "  $(V)test_mac$(N)    Prueba la aplicación sobre OSX"
	@echo "  $(V)test_linux$(N)  Prueba la aplicación sobre Linux"
	@echo ""

build:
	./node_modules/ember-cli/bin/ember build

watch:
	ember build --watch

actualizar:
	git pull
	npm install
	bower install

test_mac: build
	@echo "Cuidado - se está usando la version de nodewebkit del sistema."
	open -a /Applications/node-webkit.app dist

test_linux: build
	nw dist

version:
	# patch || minor
	@bumpversion patch --current-version ${VERSION} public/package.json Makefile --list app/components/huayra-version.js
	make build
	@echo "Es recomendable escribir el comando que genera los tags y sube todo a github:"
	@echo ""
	@echo "make ver_sync"

ver_sync:
	make changelog
	git commit -am 'release ${VERSION}'
	git tag '${VERSION}'
	git push
	git push --all
	git push --tags

changelog:
	gitchangelog > CHANGELOG

server:
	ember server

rename:
	@echo ""
	@echo "$(V)Renaming from 'huayra-curriculum' to '${NAME}' $(N)"
	@echo ""
	sed 's/huayra-curriculum/${NAME}/g' public/package.json > __tmp; mv __tmp public/package.json
	sed 's/huayra-curriculum/${NAME}/g' bower.json > __tmp; mv __tmp bower.json
	sed 's/huayra-curriculum/${NAME}/g' app/index.html > __tmp; mv __tmp app/index.html
	sed 's/huayra-curriculum/${NAME}/g' config/environment.js > __tmp; mv __tmp config/environment.js
	sed 's/huayra-curriculum/${NAME}/g' tests/index.html > __tmp; mv __tmp tests/index.html


.PHONY: dist changelog
