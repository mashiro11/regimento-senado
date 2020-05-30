import pprint

linkConstituicao = "https://www.senado.leg.br/atividade/const/con1988/con1988_03.07.2019/art_${num}_.asp#conteudoConst"
def linkConstituicao(art):
	return "https://www.senado.leg.br/atividade/const/con1988/con1988_03.07.2019/art_{0}_.asp#conteudoConst".format(art)

def linesToArts(lines):
	arts = []
	i = 0
	while i < len(lines):
		content = lines[i].split(' ')
		art = []
		if(content[0] == 'Art.'):
			art.append(lines[i])
			i += 1
			content = lines[i].split(' ')
			if i < len(lines):	
				while content[0] != 'Art.':
					art.append(lines[i])
					i += 1
					if i < len(lines):
						content = lines[i].split(' ')
					else:
						content = ['Art.']
		arts.append(art)
	return arts

def readEnumerable(enumerableLines, enumerable=None, tipoAnterior=None, result=None):
	content = enumerableLines[0].split(' ')
	if enumerable == None:
		enumerable = {'tipo':None, 'lista':[], 'parent': None}
		result = [enumerable]

	tipo = ''
	text = ''
	if('I' in content[0] or 
		'V' in content[0] or 
		'X' in content[0] or 
		'L' in content[0] or 
		'C' in content[0] or 
		'M' in content[0]):
		tipo = 'inciso'

	elif(content[0]== 'Parágrafo'):
		tipo = 'paragrafo'
		
	elif(content[0] == '§'):
		tipo = 'paragrafo'

	elif(content[0] == 'a)'):
		tipo = 'letra'
	else:
		try:
			int(content[0][:len(content[0])-1])
			tipo = 'numero'
		except:
			pass
	
	if tipo == '':
		tipo = tipoAnterior

	text = ' '.join(content[2:])
	text = text[:len(text)-1]

	if tipo == tipoAnterior or tipoAnterior == None:
		if enumerable['tipo'] == None:
			enumerable['tipo'] = tipo
		enumerable['lista'].append({'text':text, 'enumerable': None})
		
	else:
		if (tipo == 'letra' and tipoAnterior == 'numero' or tipo == 'inciso' and tipoAnterior == 'letra' or tipo == 'paragrafo' and tipoAnterior == 'inciso'):
			if tipo == 'paragrafo' and tipoAnterior == 'inciso':
				if enumerable['parent'] == None:
					enumerable2 = {}
					enumerable2['lista'] = []
					enumerable2['tipo'] = tipo
					enumerable2['parent'] = None
					result.append(enumerable2)
					enumerable = enumerable2
			
			if enumerable['parent'] != None:
				enumerable = enumerable['parent']
			enumerable['lista'].append({'text':text, 'enumerable':None})
		else:
			enumerable['lista'][-1]['enumerable'] = [{
				'tipo':tipo, 
				'lista': [{'text':text, 'enumerable':None}], 
				'parent': enumerable
				}]
			enumerable = enumerable['lista'][-1]['enumerable'][0]
	if len(enumerableLines) > 1:
			readEnumerable(enumerableLines[1:], enumerable, tipo, result)

	return result

	
def parse(lines):
	arts = linesToArts(lines)
	artList = []
	for art in arts:
		content = art[0].split(' ')
		artObj = {}

		index = content[1][:len(content[1])-1]
		text = ' '.join(content[2:])
		text = text[:len(text) - 1]

		artObj = {'number': index, 'text':text, 'enumerable':None}

		if(len(art) > 1):
			content = art[1].split(' ')
			artObj['enumerable'] = readEnumerable(art[1:])
		artList.append(artObj)
	return artList
	
def getCitacoes(text):
	lista = []
	add = False
	frag = ''
	i = 0
	frags = text.split(' ')
	while i < len(frags):
		if '(Const.' in frags[i]:
			frag += frags[i]
			while not(')' in frag):
				i += 1
				frag += ' ' + frags[i]
		elif '§' in frags[i]:
			frag += frags[i]
			i += 1
			frag += ' ' + frags[i]
			i += 1
		elif 'art.' in frags[i]:
			frag += frags[i]
			i += 1
			frag += ' ' + frags[i]
			i += 1
		elif 'arts.' in frags[i]:
			frag += frags[i]
			i += 1
			frag += ' ' + frags[i]
			i += 1
		else:
			i+=1

		if frag != '':
			add = True
		
		if add:
			add = False
			lista.append(frag)
			frag = ''
		'''
		elif 'parágrafo' in frags[i].lower():
			frag += frags[i]
			i += 1
			frag += ' ' + frags[i]
			i += 1
		'''

	return lista


def writeArt(art, output, depth = 0, index=0):
	tabs = '	' * (depth+1)
	
	if 'number' in art:
		if art['number'] > '1':
			output.write(',')
		output.write('{0}\"{1}\":{{\n'.format(tabs, art['number']))
	else:
		if index > 1:
			output.write(',')
		output.write('{0}\"{1}\":{{\n'.format(tabs, index))
	
	output.write('{0}	\"caput\":\"{1}\"'.format(tabs, art['text'].replace('"', '\\\"')))

	citacoes = getCitacoes(art['text'])
	if len(citacoes) > 0:
		output.write(',\n')
		output.write('{0}	\"citacao\":['.format(tabs))
		
		for index, c in enumerate(citacoes):
			output.write('{{\"texto\":\"{0}\",'.format(c))
			if 'Const' in c:
				artString = c.split(' ')[2]
				artNum = int(''.join(filter(str.isdigit, artString)))
				output.write('\"link\":\"{0}\"}}'.format(linkConstituicao(artNum)))
			else:
				output.write('\"link\":\"\"}')
			if index != len(citacoes)-1:
				output.write(',')
		output.write(']')


	
	if art['enumerable'] != None:
		output.write(',\n')
		output.write('{0}	\"enumeravel\": [{{\n'.format(tabs))
		
		output.write('{0}		\"tipo\":'.format(tabs))
		output.write('\"{0}\",\n'.format(art['enumerable'][0]['tipo']))
		
		output.write('{0}		\"lista\":{{\n'.format(tabs))
		for index, intern in enumerate(art['enumerable'][0]['lista']):
			writeArt(intern, output, depth+4, index+1)
		
		output.write('{0}		}}\n'.format(tabs))
		output.write('{0}	}}]\n'.format(tabs))
	else:
		output.write('\n')
	output.write('{0}}}\n'.format(tabs))



def writeJson(artList):
	output = open("src/artigos.json", "w", encoding="utf-8")
	output.write('{\n')
	
	for index, art in enumerate(artList):
		writeArt(art, output)
		
	output.write('}')
	output.close()


def toLineList(file):
	lines = []
	for line in file:
		lines.append(line)

	return lines

