N=[0m
V=[01;32m

VERSION=0.0.1

all:
	@echo "Comando disponibles"
	@echo ""
	@echo "  $(V)actualizar$(N)  Actualiza el repositorio y pilas-engine."
	@echo ""
	@echo "  $(V)version$(N)     Genera la informacion de versión actualizada."
	@echo "  $(V)ver_sync$(N)    Sube la nueva version al servidor."
	@echo ""
	@echo "  $(V)server$(N)      Prueba la aplicación en el navegador."
	@echo "  $(V)build$(N)       Genera los archivos compilados."
	@echo "  $(V)watch$(N)       Genera los archivos compilados de forma contínua."
	@echo ""
	@echo "  $(V)test_mac$(N)    Prueba la aplicación sobre OSX"
	@echo ""

build:
	ember build

watch:
	ember build --watch

actualizar:
	git pull
	npm install

test_mac: build
	@echo "Cuidado - se está usando la version de nodewebkit del sistema."
	open -a /Applications/node-webkit.app dist

version:
	# patch || minor
	@bumpversion patch --current-version ${VERSION} package.json public/package.json Makefile --list
	make build
	@echo "Es recomendable escribir el comando que genera los tags y sube todo a github:"
	@echo ""
	@echo "make ver_sync"

ver_sync:
	git commit -am 'release ${VERSION}'
	git tag '${VERSION}'
	git push
	git push --all
	git push --tags

server:
	ember server

.PHONY: dist
