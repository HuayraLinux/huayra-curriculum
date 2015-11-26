N=[0m
V=[01;32m

VERSION=0.0.11
NAME=huayra-curriculum
RELEASE_FOLDER=/Users/hugoruscitti/Dropbox/releases/huayra-curriculum

all:
	@echo "Comando disponibles"
	@echo ""
	@echo "  $(V)actualizar$(N)  Actualiza el repositorio e instala las dependencias."
	@echo ""
	@echo "  $(V)version$(N)     Genera la informacion de versión actualizada."
	@echo "  $(V)ver_sync$(N)    Sube la nueva version al servidor."
	@echo ""
	@echo "  $(V)server$(N)         Prueba la aplicación en el navegador."
	@echo "  $(V)build$(N)          Genera los archivos compilados."
	@echo "  $(V)watch$(N)          Genera los archivos compilados de forma contínua."
	@echo "  $(V)publicar$(N)       Genera los archivos compilados de forma contínua."
	@echo "  $(V)publicar_sync$(N)  Copia todo lo generado a dropbox."
	@echo ""
	@echo "  $(V)test_mac$(N)    Prueba la aplicación sobre OSX"
	@echo "  $(V)test_linux$(N)  Prueba la aplicación sobre Linux"
	@echo ""

build:
	./node_modules/ember-cli/bin/ember build

watch:
	./node_modules/ember-cli/bin/ember build --watch

actualizar:
	git pull
	npm install
	bower install

to_production:
	@echo "pasando a produccion"
	cp dist/package.production.json dist/package.json
	cp public/package.production.json public/package.json

to_develop:
	@echo "pasando a develop"
	cp dist/package.develop.json dist/package.json
	cp public/package.develop.json public/package.json

_compilar: to_production
	@echo "$(V)Limpiando el directorio destino: ./webkitbuilds ...$(N)"
	@rm -r -f ./webkitbuilds
	@./node_modules/grunt-cli/bin/grunt nodewebkit

publicar: _compilar
	@echo "Limpiando el directorio destino..."
	@rm -rf ${RELEASE_FOLDER}/huayra-curriculum_${VERSION}
	@echo "Copiando los archivos nuevamente."
	make to_develop

publicar_sync:
	@mkdir -p ${RELEASE_FOLDER}/${VERSION}
	@echo "Copiando el binario para osx de 32bits"
	@cp -r -f webkitbuilds/huayra-curriculum/osx64/huayra-curriculum.app ${RELEASE_FOLDER}/${VERSION}/huayra-curriculum-32bits.app
	@echo "Listo, los archivos están en dropbox ahora"
	@echo " URL: $(V)https://www.dropbox.com/sh/xysfmegi6o4bp5n/AABXfSJlOhFocrEWkahYodtYa?dl=0$(N)"

test_mac: build
	@echo "Cuidado - se está usando la version de nodewebkit del sistema."
	open -a /Applications/node-webkit.app --args /Users/hugoruscitti/proyectos/huayra-curriculum/dist

test_linux: build
	nw dist

version:
	# patch || minor
	@bumpversion minor --current-version ${VERSION} public/package.json public/package.develop.json public/package.production.json Makefile app/components/huayra-version.js --list 
	make build
	@echo "Es recomendable escribir el comando que genera los tags y sube todo a github:"
	@echo ""
	@echo "make ver_sync"

ver_sync:
	git tag '${VERSION}'
	make changelog
	git commit -am 'release ${VERSION}'
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

ejecutar_mac: test_mac

.PHONY: dist changelog
