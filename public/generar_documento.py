import sys
import json

from odf import text, teletype
from odf.opendocument import load


print("Cargando el archivo" + sys.argv[1])
f = open(sys.argv[1], 'rb')

textdoc = load(f)
texts = textdoc.getElementsByType(text.P)
s = len(texts)

print("Cargando la plantilla desde" + sys.argv[2])

json_data=open(sys.argv[2])
data = json.load(json_data)

datos_filtrados = [(p.upper(), t) for (p, t) in data.items() if t]
print "los datos_filtrados son:", datos_filtrados
json_data.close()


for i in range(s):
    old_text = teletype.extractText(texts[i])
    new_text = old_text

    for (patron, texto) in datos_filtrados:
        new_text = new_text.replace(patron.upper(), texto)

    new_S = text.P()
    new_S.setAttribute("stylename",texts[i].getAttribute("stylename"))
    new_S.addText(new_text)

    texts[i].parentNode.insertBefore(new_S,texts[i])
    texts[i].parentNode.removeChild(texts[i])

w = open(sys.argv[3], 'wb')
print("Creando el archivo " + sys.argv[3])
textdoc.save(w)
w.close()

print("Terminando ...")
