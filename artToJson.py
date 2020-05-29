from artToJson_core import *

file = open("artigos.txt", "r", encoding="utf-8")
lines = toLineList(file)
file.close()
writeJson(parse(lines))