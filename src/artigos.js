import {artLink} from './constituicao.js'

const artigos = {
  1:{
    caput:'O Senado Federal tem sede no Palácio do Congresso Nacional, em Brasília.',
    enumeravel:[
      {
        tipo: 'paragrafo',
        lista:{
          1:{
            caput:'Em Caso de guerra, de comoção intestina, de calamidade pública ou de ocorrência que impossibilite o seu funcionamento na sede, o Senado poderá reunir-se, eventualmente, em qualquer outro local, por determinação da Mesa, a requerimento da maioria dos Senadores.'
          }
        }
      }
    ]
  },
  2:{
    caput:'O senado federal reunir-se-á:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'anualmente, de 2 de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro, durante as sessões legislativas ordinárias, observando o disposto no art.57 da Constituição;',
            citacao: [{
              texto: 'art.57 da Constituição',
              link: artLink(57)
            }]
          }
          ,
          2:{
            caput:'quando convocado extaordinariamente o Congresso Nacional (Const, art 57 §§ 6º a 8º).',
            citacao: [{
              texto: '(Const, art 57 §§ 6º a 8º)',
              link: artLink(57)
            }]
          }
        }
      },
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'Nos sessenta dias anteriores às eleições gerais, o Senado Federal funcionará de acordo com o disposto no Regimento Comum.'
          }
        }
      }
    ]
  },
  3:{
    caput: 'A primeira e a terceira sessões legislativas ordinárias de cada legislatura serão precedidas de reuniões preparatórias, que obedecerão às seguintes normas:',
    enumeravel:[
      {
        tipo: 'inciso',
        lista:{
          1:{
            caput:'iniciar-se-ão com o quorum mínimo de um sexto da composição do Senado, em horário fixado pela Presidência, observando-se, nas deliberações, o disposto no art. 288;'
          },
          2:{
            caput:'a direção dos trabalhos caberá à Mesa anterior, dela excluídos, no início de legislatura, aqueles cujos mandatos com ela houverem terminado, ainda que reeleitos;'
          },
          3:{
            caput:'na falta dos membros da Mesa anterior, assumirá a Presidência o mais idoso dentre os presentes, o qual convidará, para os quatro lugares de Secretários, Senadores pertencentes às representações partidárias mais numerosas;'
          },
          4:{
            caput:'a primeira reunião preparatória realizar-se-á:',
            enumeravel:[
              {
                tipo: 'letra',
                lista: {
                  1:{
                    caput:'no início de legislatura, a partir do dia 1º de fevereiro;'
                  },
                  2:{
                    caput:'na terceira sessão legislativa ordinária, no dia 1º de fevereiro;'
                  }
                }
              }
            ]
          },
          5:{
            caput:'no início de legislatura, os Senadores eleitos prestarão o compromisso regimental na primeira reunião preparatória; em reunião seguinte, será realizada a eleição do Presidente e, na terceira, a dos demais membros da Mesa;'
          },
          6:{
            caput:'na terceira sessão legislativa ordinária, far-se-á a eleição do Presidente da Mesa na primeira reunião preparatória e a dos demais membros, na reunião seguinte;'
          },
          7:{
            caput:'nas reuniões preparatórias, não será lícito o uso da palavra, salvo para declaração pertinente à matéria que nelas deva ser tratada.'
          }
        }
      }
    ]
  },
  4:{
    caput: 'A posse, ato público por meio do qual o Senador se investe no mandato, realizar-se-á perante o Senado, durante reunião preparatória, sessão deliberativa ou não deliberativa, precedida da apresentação à Mesa do diploma expedido pela Justiça Eleitoral, o qual será publicado no Diário do Senado Federal.',
    enumeravel:[
      {
        tipo: 'paragrafo',
        lista:{
          1:{
            caput:'A apresentação do diploma poderá ser feita pelo diplomado, pessoalmente, por ofício ao Primeiro-Secretário, por intermédio do seu Partido ou de qualquer Senador.'
          },
          2:{
            caput:'Presente o diplomado, o Presidente designará três Senadores para recebê-lo, introduzi-lo no plenário e conduzi-lo até a Mesa, onde, estando todos de pé, prestará o seguinte compromisso: “Prometo guardar a Constituição Federal e as leis do País, desempenhar fiel e lealmente o mandato de Senador que o povo me conferiu e sustentar a união, a integridade e a independência do Brasil”.'
          },
          3:{
            caput:'Quando forem diversos os Senadores a prestar o compromisso a que se refere o § 2º, somente um o pronunciará e os demais, ao serem chamados, dirão: “Assim o prometo”.'
          },
          4:{
            caput:'Durante o recesso, a posse realizar-se-á perante o Presidente, em solenidade pública em seu gabinete, observada a exigência da apresentação do diploma e da prestação do compromisso, devendo o fato ser noticiado no Diário do Senado Federal.'
          },
          5:{
            caput:'O Senador deverá tomar posse dentro de noventa dias, contados da instalação da sessão legislativa, ou, se eleito durante esta, contados da diplomação, podendo o prazo ser prorrogado, por motivo justificado, a requerimento do interessado, por mais trinta dias.'
          },
          6:{
            caput:'Findo o prazo de noventa dias, se o Senador não tomar posse nem requerer sua prorrogação, considerar-se-á como tendo renunciado ao mandato, convocando-se o primeiro Suplente.'
          },
        }
      }
    ]
  },
  5:{
    caput: 'O primeiro Suplente, convocado para a substituição de Senador licenciado, terá o prazo de trinta dias improrrogáveis para prestar o compromisso, e, nos casos de vaga ou de afastamento nos termos do art. 39, II, de sessenta dias, que poderá ser prorrogado, por motivo justificado, a requerimento do interessado, por mais trinta dias.',
    enumeravel:[
      {
        tipo: 'paragrafo',
        lista:{
          1:{
            caput:'Se, dentro dos prazos estabelecidos neste artigo, o Suplente não tomar posse e nem requerer sua prorrogação, considerar-se-á como tendo renunciado ao mandato, convocando-se o segundo Suplente, que terá, em qualquer hipótese, trinta dias para prestar o compromisso.'
          },
          2:{
            caput:'O Suplente, por ocasião da primeira convocação, deverá prestar o compromisso na forma do art. 4º e, nas seguintes, o Presidente comunicará à Casa a sua volta ao exercício do mandato.'
          }
        }
      }
    ]
  },
  6:{
    caput: 'Nos casos dos arts. 4º, § 5º, e 5º, § 1º, havendo requerimento e findo o prazo sem ter sido votado, considerar-se-á como concedida a prorrogação.'
  },
  7:{
    caput: 'Por ocasião da posse, o Senador ou Suplente convocado comunicará à Mesa, por escrito, o nome parlamentar com que deverá figurar nas publicações e registros da Casa e a sua filiação partidária, observando o disposto no art. 78, parágrafo único.',
    enumeravel:[
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput: 'Do nome parlamentar não constarão mais de duas palavras, não computadas nesse número as preposições.'
          },
          2:{
            caput: 'A alteração do nome parlamentar ou da filiação partidária deverá ser comunicada, por escrito, à Mesa, vigorando a partir da publicação no Diário do Senado Federal.'
          }
        }
      }
    ]
  },
  8:{
    caput: 'O Senador deve apresentar-se no edifício do Senado à hora regimental, para tomar parte nas sessões do Plenário, bem como à hora de reunião da comissão de que seja membro, cabendo-lhe:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'oferecer proposições, discutir, votar e ser votado;'
          },
          2:{
            caput:'solicitar, de acordo com o disposto no art. 216, informações às autoridades sobre fatos relativos ao serviço público ou úteis à elaboração legislativa;'
          },
          3:{
            caput:'usar da palavra, observadas as disposições deste Regimento.'
          }
        }
      }
    ]
  },
  9:{
    caput: 'É facultado ao Senador, uma vez empossado:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'examinar quaisquer documentos existentes no Arquivo;'
          },
          2:{
            caput:'requisitar da autoridade competente, por intermédio da Mesa ou diretamente, providências para garantia das suas imunidades e informações para sua defesa;'
          },
          3:{
            caput:'frequentar a Biblioteca e utilizar os seus livros e publicações, podendo requisitá-los para consulta, fora das dependências do Senado, desde que não se trate de obras raras, assim classificadas pela Comissão Diretora;'
          },
          4:{
            caput:'frequentar o edifício do Senado e as respectivas dependências, só ou acompanhado, vedado ao acompanhante o ingresso no plenário, durante as sessões, e nos locais privativos dos Senadores;'
          },
          5:{
            caput:'utilizar-se dos diversos serviços do Senado, desde que para fins relacionados com as suas funções;'
          },
          6:{
            caput:'receber em sua residência o Diário do Senado Federal, o do Congresso Nacional e o Diário Oficial da União.'
          }
        }
      },
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'O Senador substituído pelo Suplente continuará com os direitos previstos neste artigo.'
          }
        }
      }
    ]
  },
  10:{
    caput: 'O Senador ou Suplente, por ocasião da posse, inscreverá, em livro específico, de próprio punho, seu nome, o nome parlamentar, a respectiva rubrica, filiação partidária, idade, estado civil e outras declarações que julgue conveniente fazer.'
  },
  11:{
    caput: 'Com base nos dados referidos no art. 10, o Primeiro-Secretário expedirá as respectivas carteiras de identidade.'
  },
  12:{
    caput: 'A remuneração do Senador é devida:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'a partir do início da legislatura, ao diplomado antes da instalação da primeira sessão legislativa ordinária;'
          },
          2:{
            caput:'a partir da expedição do diploma, ao diplomado posteriormente à instalação;'
          },
          3:{
            caput:'a partir da posse, ao Suplente em exercício.'
          },
        }
      },
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'Na hipótese do art. 39, II, o Senador poderá optar pela remuneração do mandato (Const., art. 56, § 3º).'
          }
        }
      }
    ]
  },
  13:{
    caput: 'Será considerado ausente o Senador cujo nome não conste da lista de comparecimento, salvo se em licença, ou em representação a serviço da Casa ou, ainda, em missão política ou cultural de interesse parlamentar, previamente aprovada pela Mesa, obedecido o disposto no art. 40.',
    enumeravel:[
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'O painel do plenário será acionado nas sessões deliberativas.'
          },
          2:{
            caput:'Considerar-se-á ainda ausente o Senador que, embora conste da lista de presença das sessões deliberativas, deixar de comparecer às votações, salvo se em obstrução declarada por líder partidário ou de bloco parlamentar.'
          }
        }
      }
    ]
  },
  14:{
    caput: 'O Senador poderá fazer uso da palavra:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'nos cento e vinte minutos que antecedem a Ordem do Dia, por dez minutos, nas sessões deliberativas, e por vinte minutos, nas sessões não deliberativas;'
          },
          2:{
            caput:'se líder, uma vez por sessão:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'por cinco minutos, em qualquer fase da sessão, exceto durante a Ordem do Dia, para comunicação urgente de interesse partidário; ou'
                  },
                  2:{
                    caput:'por vinte minutos, após a Ordem do Dia, com preferência sobre os oradores inscritos;'
                  }
                }
              }
            ]
          },
          3:{
            caput:'na discussão de qualquer proposição (art. 273), uma só vez, por dez minutos;'
          },
          4:{
            caput:'na discussão da proposição em regime de urgência (art. 336), uma só vez, por dez minutos, limitada a palavra a cinco Senadores a favor e cinco contra;'
          },
          5:{
            caput:'na discussão da redação final (art. 321), uma só vez, por cinco minutos, o relator e um Senador de cada partido;'
          },
          6:{
            caput:'no encaminhamento de votação (art. 308 e parágrafo único do art. 310), uma só vez, por cinco minutos;'
          },
          7:{
            caput:'no encaminhamento de votação de proposição em regime de urgência (art. 336), uma só vez, por cinco minutos, o relator da comissão de mérito e os líderes de partido ou bloco parlamentar ou Senadores por eles designados;'
          },
          8:{
            caput:'para explicação pessoal, em qualquer fase da sessão, por cinco minutos, se nominalmente citado na ocasião, para esclarecimento de ato ou fato que lhe tenha sido atribuído em discurso ou aparte, não sendo a palavra dada, com essa finalidade, a mais de dois oradores na mesma sessão;'
          },
          9:{
            caput:'para comunicação inadiável, manifestação de aplauso ou semelhante, homenagem de pesar, uma só vez, por cinco minutos;'
          },
          10:{
            caput:'em qualquer fase da sessão, por cinco minutos:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'pela ordem, para indagação sobre andamento dos trabalhos, reclamação quanto à observância do Regimento, indicação de falha ou equívoco em relação à matéria da Ordem do Dia, vedado, porém, abordar assunto já resolvido pela Presidência;'
                  },
                  2:{
                    caput:'para suscitar questão de ordem, nos termos do art. 403;'
                  },
                  3:{
                    caput:'para contraditar questão de ordem, limitada a palavra a um só Senador;'
                  }
                }
              }
            ]
          },
          11:{
            caput:'após a Ordem do Dia, pelo prazo de vinte minutos, para as considerações que entender (art. 176);'
          },
          12:{
            caput:'para apartear, por dois minutos, obedecidas as seguintes normas:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'o aparte dependerá de permissão do orador, subordinando-se, em tudo que lhe for aplicável, às disposições referentes aos debates;'
                  },
                  2:{
                    caput:'não serão permitidos apartes:',
                    enumeravel:[
                      {
                        tipo: 'numero',
                        lista:{
                          1:{
                            caput:'ao Presidente;'
                          },
                          2:{
                            caput:'a parecer oral;'
                          },
                          3:{
                            caput:'a encaminhamento de votação, salvo nos casos de requerimento de homenagem de pesar ou de voto de aplauso ou semelhante;'
                          },
                          4:{
                            caput:'a explicação pessoal;'
                          },
                          5:{
                            caput:'a questão de ordem;'
                          },
                          6:{
                            caput:'a contradita a questão de ordem;'
                          },
                          7:{
                            caput:'a uso da palavra por cinco minutos;'
                          },
                        }
                      }
                    ]
                  },
                  3:{
                    caput:'a recusa de permissão para apartear será sempre compreendida em caráter geral, ainda que proferida em relação a um só Senador;'
                  },
                  4:{
                    caput:'o aparte proferido sem permissão do orador não será publicado;'
                  },
                  5:{
                    caput:'ao apartear, o Senador conservar-se-á sentado e falará ao microfone;'
                  }
                }
              }
            ]
          },
          13:{
            caput:'para interpelar Ministro de Estado, por cinco minutos, e para a réplica, por dois minutos (art. 398, X).'
          },
          14:{
            caput:'por delegação de sua liderança partidária, por cinco minutos, observado o disposto na alínea a do inciso II e do § 3º deste artigo.'
          }
        }
      },
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'É vedado ao orador tratar de assunto estranho à finalidade do dispositivo em que se baseia para a concessão da palavra.'
          },
          2:{
            caput:'(Revogado).'
          },
          3:{
            caput:'O líder que acumular lideranças de partido e de bloco parlamentar poderá usar da palavra com base no inciso II uma única vez numa mesma sessão.'
          },
          4:{
            caput:'Os vice-líderes, na ordem em que forem indicados, poderão usar da palavra com base no inciso II do caput se o líder lhes ceder a palavra, estiver ausente ou impedido nos termos do art. 13.'
          },
          5:{
            caput:'O uso da palavra, por delegação de liderança, poderá ocorrer uma única vez em uma mesma sessão e não poderá ser exercido na mesma fase da sessão utilizada pelo líder para falar nos termos do inciso II do caput.'
          },
          6:{
            caput:'O Senador que fizer uso da palavra por delegação de liderança, ou para comunicação inadiável não poderá, na mesma sessão, solicitar a palavra como orador inscrito.'
          },
          7:{
            caput:'Aplica-se o disposto no § 1º do art. 17 aos Senadores que fizerem uso da palavra com base no que dispõem os incisos I, IX, XI e XIV.'
          },
          8:{
            caput:'Aos membros de representação partidária com menos de um décimo da composição do Senado será permitido o uso da palavra, nos termos dos incisos I, II e XIV, uma única vez em cada sessão.'
          }
        }
      }
    ]
  },
  15:{
    caput: 'Os prazos previstos no art. 14 só poderão ser prorrogados, pelo Presidente, por um ou dois minutos, para permitir o encerramento do pronunciamento, após o que o som do orador será cortado, não sendo lícito ao Senador utilizar-se do tempo destinado a outro, em acréscimo ao de que disponha.'
  },
  16:{
    caput: 'A palavra será dada na ordem em que for pedida, salvo inscrição.'
  },
  17:{
    caput: 'Haverá, sobre a mesa, no plenário, livro especial no qual se inscreverão os Senadores que quiserem usar da palavra, nas diversas fases da sessão, devendo ser rigorosamente observada a ordem de inscrição.',
    enumeravel:[
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'O Senador só poderá usar da palavra mais de duas vezes por semana se não houver outro orador inscrito que pretenda ocupar a tribuna.'
          },
          2:{
            caput:'A inscrição será para cada sessão, podendo ser aceita com antecedência não superior a duas sessões deliberativas ordinárias ou não deliberativas.'
          }
        }
      }
    ]
  },
  18:{
    caput: 'O Senador, no uso da palavra, poderá ser interrompido:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'pelo Presidente:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'para leitura e votação de requerimento de urgência, no caso do art. 336, I, e deliberação sobre a matéria correspondente;'
                  },
                  2:{
                    caput:'para votação não realizada no momento oportuno, por falta de número (arts. 304 e 305);'
                  },
                  3:{
                    caput:'para comunicação importante;'
                  },
                  4:{
                    caput:'para recepção de visitante (art. 199);'
                  },
                  5:{
                    caput:'para votação de requerimento de prorrogação da sessão;'
                  },
                  6:{
                    caput:'para suspender a sessão, em caso de tumulto no recinto ou ocorrência grave no edifício do Senado;'
                  },
                  7:{
                    caput:'para adverti-lo quanto à observância do Regimento;'
                  },
                  8:{
                    caput:'para prestar esclarecimentos que interessem à boa ordem dos trabalhos;'
                  }
                }
              }
            ]
          },
          2:{
            caput:'por outro Senador:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'com o seu consentimento, para aparteá-lo;'
                  },
                  2:{
                    caput:'independentemente de seu consentimento, para formular à Presidência reclamação quanto à observância do Regimento.'
                  }
                }
              }
            ]
          }
        }
      },
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'O tempo de interrupção previsto neste artigo será descontado em favor do orador, salvo quanto ao disposto no inciso II, a.'
          }
        }
      }
    ]
  },
  19:{
    caput: 'Ao Senador é vedado:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'usar de expressões descorteses ou insultuosas;'
          },
          2:{
            caput:'falar sobre resultado de deliberação definitiva do Plenário, salvo em explicação pessoal.'
          }
        }
      }
    ]
  },
  20:{
    caput: 'Não será lícito ler da tribuna ou incluir em discurso, aparte, declaração de voto ou em qualquer outra manifestação pública, documento de natureza sigilosa.'
  },
  21:{
    caput: 'O Senador, ao fazer uso da palavra, manter-se-á de pé, salvo licença para se conservar sentado, por motivo de saúde, e dirigir-se-á ao Presidente ou a este e aos Senadores, não lhe sendo lícito permanecer de costas para a Mesa.'
  },
  22:{
    caput: 'Em caso de infração do art. 19, I, proceder-se-á da seguinte maneira:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'o Presidente advertirá o Senador, usando da expressão “Atenção!”;'
          },
          2:{
            caput:'se essa observação não for suficiente, o Presidente dirá “Senador F..., atenção!”;'
          },
          3:{
            caput:'não bastando o aviso nominal, o Presidente retirar-lhe-á a palavra;'
          },
          4:{
            caput:'insistindo o Senador em desatender às advertências, o Presidente determinará sua saída do recinto, o que deverá ser feito imediatamente;'
          },
          5:{
            caput:'em caso de recusa, o Presidente suspenderá a sessão, que não será reaberta até que seja obedecida sua determinação.'
          },
        }
      }
    ]
  },
  23:{
    caput: 'Constituirá desacato ao Senado:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'reincidir na desobediência à medida disciplinar prevista no art. 22, IV;'
          },
          2:{
            caput:'agressão, por atos ou palavras, praticada por Senador contra a Mesa ou contra outro Senador, nas dependências da Casa.'
          }
        }
      }
    ]
  },
  24:{
    caput: 'Em caso de desacato ao Senado, proceder-se-á de acordo com as seguintes normas:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'o Segundo-Secretário, por determinação da Presidência, lavrará relatório pormenorizado do ocorrido;'
          },
          2:{
            caput:'cópias autenticadas do relatório serão encaminhadas aos demais membros da Mesa e aos líderes que, em reunião convocada pelo Presidente, deliberarão:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'pelo arquivamento do relatório;'
                  },
                  2:{
                    caput:'pela constituição de comissão para, sobre o fato, se manifestar;'
                  }
                }
              }
            ]
          },
          3:{
            caput:'na hipótese prevista na alínea b do inciso II, a comissão, de posse do relatório, reunir-se-á, no prazo de duas horas, a partir de sua constituição, a fim de eleger o Presidente, que designará relator para a matéria;',
          },
          4:{
            caput:'a comissão poderá ouvir as pessoas envolvidas no caso e as testemunhas que entender;'
          },
          5:{
            caput:'a comissão terá o prazo de dois dias úteis para emitir parecer, que será conclusivo, podendo propor uma das seguintes medidas:',
            enumeravel:[
              {
                tipo:'letra',
                lista:{
                  1:{
                    caput:'censura pública ao Senador;',
                  },
                  2:{
                    caput:'instauração de processo de perda de mandato (Const., art. 55, II);'
                  }
                }
              }
            ]
          },
          6:{
            caput:'aprovado pela comissão, o parecer será encaminhado à Mesa para o procedimento cabível no caso.'
          }
        }
      }
    ]
  },
  25:{
    caput: 'Se algum Senador praticar, dentro do edifício do Senado, ato incompatível com o decoro parlamentar ou com a compostura pessoal, a Mesa dele conhecerá e abrirá inquérito, submetendo o caso ao Plenário, que sobre ele deliberará, no prazo improrrogável de dez dias úteis.'
  },
  26:{
    caput: 'Falecendo algum Senador em período de funcionamento do Senado, o Presidente comunicará o fato à Casa e proporá seja a sessão do dia dedicada a reverenciar a memória do extinto, deliberando o Plenário com qualquer número.'
  },
  27:{
    caput: 'O Senado far-se-á representar, nas cerimônias fúnebres que se realizarem pelo falecimento de qualquer dos seus membros, por uma comissão constituída, no mínimo, de três Senadores, designados pelo Presidente, de ofício ou mediante deliberação do Plenário, sem embargo de outras homenagens aprovadas.',
    enumeravel:[
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'Na hipótese de ser a comissão designada de ofício, o fato será comunicado ao Plenário, pelo Presidente.'
          }
        }
      }
    ]
  },
  28:{
    caput: 'As vagas, no Senado, verificar-se-ão em virtude de:',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'falecimento;'
          },
          2:{
            caput:'renúncia;'
          },
          3:{
            caput:'perda de mandato.'
          }
        }
      }
    ]
  },
  29:{
    caput: 'A comunicação de renúncia à senatória ou à suplência deve ser dirigida por escrito à Mesa, com firma reconhecida, e independe da aprovação do Senado, mas somente tornar-se-á efetiva e irretratável depois de lida no Período do Expediente e publicada no Diário do Senado Federal.',
    enumeravel:[
      {
        tipo:'paragrafo',
        lista:{
          1:{
            caput:'É lícito ao Senador, ou ao Suplente em exercício, fazer em plenário, oralmente, a renúncia ao mandato, a qual tornar-se-á efetiva e irretratável depois da sua publicação no Diário do Senado Federal.'
          }
        }
      }
    ]
  },
  30:{
    caput: 'Considerar-se-á como tendo renunciado (arts. 4º, § 6º, e 5º, § 1º):',
    enumeravel:[
      {
        tipo:'inciso',
        lista:{
          1:{
            caput:'o Senador que não prestar o compromisso no prazo estabelecido neste Regimento;'
          },
          2:{
            caput:'o Suplente que, convocado, não se apresentar para entrar em exercício no prazo estabelecido neste Regimento.'
          }
        }
      }
    ]
  },
  31:{
    caput: 'A ocorrência de vacância, em qualquer hipótese, será comunicada pelo Presidente ao Plenário.'
    /*Parágrafo único. Nos casos do art. 30, até o dia útil que se seguir à publicação da comunicação de vacância, qualquer Senador dela poderá interpor recurso para o Plenário, que deliberará, ouvida a Comissão de Constituição, Justiça e Cidadania.
    */
  },
  32:{
    caput: 'Perde o mandato o Senador (Const., art. 55):'
    /*
I - que infringir qualquer das proibições constantes do art. 54 da Constituição;
II - cujo procedimento for declarado incompatível com o decoro parlamentar;
III - que deixar de comparecer à terça parte das sessões deliberativas ordinárias do Senado, em cada sessão legislativa anual, salvo licença ou missão autorizada;
IV - que perder ou tiver suspensos os direitos políticos;
V - quando o decretar a Justiça Eleitoral;
VI - que sofrer condenação criminal em sentença definitiva e irrecorrível.
§ 1º É incompatível com o decoro parlamentar o abuso das prerrogativas asseguradas ao Senador e a percepção de vantagens indevidas (Const., art. 55, § 1º).
§ 2º Nos casos dos incisos I, II e VI, a perda do mandato será decidida pelo Senado Federal, por maioria absoluta, mediante provocação da Mesa ou de partido político representado no Congresso Nacional (Const., art. 55, § 2º).
§ 3º Nos casos dos incisos III a V, a perda do mandato será declarada pela Mesa, de ofício ou mediante provocação de qualquer Senador, ou de partido político representado no Congresso Nacional, assegurada ampla defesa (Const., art. 55, § 3º).
§ 4º A representação será encaminhada à Comissão de Constituição, Justiça e Cidadania, que proferirá seu parecer em quinze dias úteis, concluindo:
I - nos casos dos incisos I, II e VI, do caput, pela aceitação da representação para exame ou pelo seu arquivamento;
II - no caso do inciso III, do caput, pela procedência, ou não, da representação.
§ 5º O parecer da Comissão de Constituição, Justiça e Cidadania, lido e publicado no Diário do Senado Federal e em avulso eletrônico, será:
I - nos casos dos incisos I, II e VI, do caput, incluído na Ordem do Dia após o interstício regimental;
II - no caso do inciso III, do caput, encaminhado à Mesa para decisão.
    */
  },
  33:{
    caput: 'Admitida a representação pelo voto do Plenário, o Presidente designará comissão composta de nove membros para instrução da matéria.'
    /*
    § 1º Recebida e processada, será fornecida cópia da representação ao acusado, que terá o prazo de quinze dias úteis, prorrogável por igual período, para apresentar, à comissão, sua defesa escrita.
§ 2º Apresentada ou não a defesa, a comissão, após proceder às diligências que entender necessárias, emitirá parecer, concluindo por projeto de resolução, no sentido da perda do mandato ou do arquivamento definitivo do processo.
§ 3º Para falar sobre o parecer, será concedida vista do processo ao acusado pelo prazo de dez dias úteis.
    */
  },
  34:{
    caput: 'O acusado poderá assistir, pessoalmente ou por procurador, a todos os atos e diligências, e requerer o que julgar conveniente aos interesses da defesa.'
  },
  35:{
    caput: 'O projeto de resolução, depois de lido no Período do Expediente, publicado no Diário do Senado Federal em avulso eletrônico, será incluído em Ordem do Dia e submetido à votação.'
  },
  36:{
    caput: 'As imunidades dos Senadores subsistirão durante o estado de sítio, só podendo ser suspensas mediante voto de dois terços dos membros da Casa, nos casos de atos praticados fora do recinto do Congresso Nacional, que sejam incompatíveis com a execução da medida (Const., art. 53, § 8º).'
  },
  37:{
    caput: 'Serão observadas, na decretação da suspensão das imunidades, as disposições do capítulo VIII no que forem aplicáveis.'
  },
  38:{
    caput: '38. Considerar-se-á como ausente, para efeito do disposto no art. 55, III, da Constituição, o Senador cujo nome não conste das listas de comparecimento das sessões deliberativas ordinárias.'
    /*
    Parágrafo único. Para os efeitos deste artigo, aplica-se o disposto no art. 13, não sendo, ainda, considerada a ausência do Senador nos sessenta dias anteriores às eleições gerais.
    */
  },
  39:{
    caput: 'O Senador deverá comunicar ao Presidente sempre que:'
    /*
    I - ausentar-se do País;
II - assumir cargo de Ministro de Estado, de Governador de Território, de Secretário de Estado, do Distrito Federal, de Território, de Prefeitura de Capital ou de chefe de missão diplomática temporária (Const., art. 56, I).
Parágrafo único. Ao comunicar o seu afastamento, no caso do inciso I, o Senador deverá mencionar o respectivo prazo.
    */
  },
  40:{
    caput: 'A ausência do Senador, quando incumbido de representação da Casa ou, ainda, no desempenho de missão no País ou no exterior, deverá ser autorizada mediante deliberação do Plenário, se houver ônus para o Senado.'
    /*§ 1º A autorização poderá ser:
I - solicitada pelo interessado;
II - proposta:
a) pela Presidência, quando de sua autoria a indicação;
b) pela Comissão de Relações Exteriores e Defesa Nacional, no caso de missão a realizar-se no estrangeiro;
c) pela comissão que tiver maior pertinência, no caso de missão a realizar-se no País;
d) pelo líder do bloco parlamentar ou do partido a que pertença o interessado.
§ 2º Na solicitação ou na proposta deverá ser mencionado o prazo de afastamento do Senador.
§ 3º A solicitação ou proposta será lida no Período do Expediente e votada em seguida à Ordem do Dia da mesma sessão.
§ 4º No caso do § 1º, I e II, d, será ouvida a Comissão de Relações Exteriores e Defesa Nacional ou a que tiver maior pertinência, sendo o parecer oferecido, imediatamente, por escrito ou oralmente, podendo o relator solicitar prazo não excedente a duas horas.
§ 5º Os casos de licença serão decididos pela Mesa com recurso para o Plenário.
    */
  },
  41:{
    caput: 'Nos casos do art. 40, se não for possível, por falta de número, realizar-se a votação em duas sessões deliberativas ordinárias consecutivas, ou se o Senado estiver em recesso, o pedido será despachado pelo Presidente, retroagindo os efeitos da licença à data do requerimento.'
  },
  42:{
    caput: 'O Senador afastado do exercício do mandato não poderá ser incumbido de representação da Casa, de comissão, ou de grupo parlamentar.'
  },
  43:{
    caput: 'Para os efeitos do disposto no art. 55, III, da Constituição, o Senador poderá:'
    /*
I - quando, por motivo de doença, se encontre impossibilitado de comparecer às sessões do Senado, requerer licença, instruída com laudo de inspeção de saúde (Const., art. 56, II);
II - solicitar licença para tratar de interesses particulares, desde que o afastamento não ultrapasse cento e vinte dias por sessão legislativa (Const., art. 56, II).
§ 1º (Revogado).
§ 2º (Revogado).
§ 3º É permitido ao Senador desistir a qualquer tempo de licença que lhe tenha sido concedida, salvo se, em virtude dela, haja sido convocado Suplente, quando a desistência somente poderá ocorrer uma vez decorrido prazo superior a cento e vinte dias.
§ 4º A licença à gestante, a licença ao adotante e a licença paternidade, todas remuneradas, equivalem à licença por motivo de saúde de que trata o art. 56, II, da Constituição Federal.
§ 5º Será concedida à Senadora gestante licença de cento e vinte dias, nos termos dos arts. 7º, XVIII, e 39, § 3º, ambos da Constituição Federal.
§ 6º A licença à adotante, concedida à Senadora que adotar ou obtiver guarda judicial de criança, será:
I - de cento e vinte dias, se a criança tiver até um ano de idade;
II - de sessenta dias, se a criança tiver mais de um ano de idade;
III - de trinta dias, se a criança tiver mais de quatro anos e até oito anos de idade.
§ 7º Será concedida licença paternidade ou licença ao adotante de cinco dias ao Senador, respectivamente, pelo nascimento ou adoção de filho, nos termos dos arts. 7º, XIX, e 39, § 3º, e 10, § 1º, este último constante do Ato das Disposições Constitucionais Transitórias, todos da Constituição Federal.
    */
  },
  44:{
    caput: 'Considerar-se-á como licença concedida, para os efeitos do art. 55, III, da Constituição, o não comparecimento às sessões do Senador temporariamente privado da liberdade, em virtude de processo criminal em curso.'
    /*
Art. 44-A. Considerar-se-á como licença autorizada, para os fins do disposto no art. 55, III, da Constituição, e no art. 38, parágrafo único, deste Regimento, a ausência às sessões de Senador candidato à Presidência ou Vice-Presidência da República, no período compreendido entre o registro da candidatura no Tribunal Superior Eleitoral e a apuração do respectivo pleito.
§ 1º O disposto neste artigo aplica-se aos candidatos que concorrerem ao segundo turno.
§ 2º Para os fins do disposto neste artigo o Senador deverá encaminhar à Mesa certidão comprobatória do registro de sua candidatura perante a Justiça Eleitoral.
    */
  },
  45:{
    caput: 'Dar-se-á a convocação de Suplente nos casos de vaga, de afastamento do exercício do mandato para investidura nos cargos referidos no art. 39, II, ou de licença por prazo superior a cento e vinte dias (Const., art. 56, § 1º).'
  },
  46:{
    caput: 'A Mesa se compõe de Presidente, dois Vice-Presidentes e quatro Secretários.'
    /*§ 1º Os Secretários substituir-se-ão conforme a numeração ordinal e, nesta ordem, substituirão o Presidente, na falta dos Vice-Presidentes.
§ 2º Os Secretários serão substituídos, em seus impedimentos, por Suplentes em número de quatro.
§ 3º O Presidente convidará quaisquer Senadores para substituírem, em sessão, os Secretários, na ausência destes e dos Suplentes.
§ 4º Não se achando presentes o Presidente e seus substitutos legais, inclusive os Suplentes, assumirá a Presidência o Senador mais idoso.
    */
  },
  47:{
    caput: 'A assunção a cargo de Ministro de Estado, de Governador de Território e de Secretário de Estado, do Distrito Federal, de Território, de Prefeitura de Capital, ou de chefe de missão diplomática temporária, implica renúncia ao cargo que o Senador exerça na Mesa.'
  },
  48:{
    caput: 'Ao Presidente compete:'
    /*
    I - exercer as atribuições previstas nos arts. 57, § 6º, I e II, 66, § 7º, e 80 da Constituição;
II - velar pelo respeito às prerrogativas do Senado e às imunidades dos Senadores;
III - convocar e presidir as sessões do Senado e as sessões conjuntas do Congresso Nacional;
IV - propor a transformação de sessão pública em secreta;
V - propor a prorrogação da sessão;
VI - designar a Ordem do Dia das sessões deliberativas e retirar matéria da pauta para cumprimento de despacho, correção de erro ou omissão no avulso eletrônico e para sanar falhas da instrução;
VII - fazer ao Plenário, em qualquer momento, comunicação de interesse do Senado e do País;
VIII - fazer observar na sessão a Constituição, as leis e este Regimento;
IX - assinar as atas das sessões secretas, uma vez aprovadas;
X - determinar o destino do expediente lido e distribuir as matérias às comissões;
XI - impugnar as proposições que lhe pareçam contrárias à Constituição, às leis, ou a este Regimento, ressalvado ao autor recurso para o Plenário, que decidirá após audiência da Comissão de Constituição, Justiça e Cidadania;
XII - declarar prejudicada proposição que assim deva ser considerada, na conformidade regimental;
XIII - decidir as questões de ordem;
XIV - orientar as discussões e fixar os pontos sobre que devam versar, podendo, quando conveniente, dividir as proposições para fins de votação;
XV - dar posse aos Senadores;
XVI - convocar Suplente de Senador;
XVII - comunicar ao Tribunal Superior Eleitoral a ocorrência de vaga de Senador, quando não haja Suplente a convocar e faltarem mais de quinze meses para o término do mandato (Const., art. 56, II, § 2º);
XVIII - propor ao Plenário a indicação de Senador para desempenhar missão temporária no País ou no exterior;
XIX - propor ao Plenário a constituição de comissão para a representação externa do Senado;
XX - designar oradores para as sessões especiais do Senado e sessões solenes do Congresso Nacional;
XXI - designar substitutos de membros das comissões e nomear relator em plenário;
XXII - convidar, se necessário, o relator ou o Presidente da comissão a explicar as conclusões de seu parecer;
XXIII - desempatar as votações, quando ostensivas;
XXIV - proclamar o resultado das votações;
XXV - despachar, de acordo com o disposto no art. 41, requerimento de licença de Senador;
XXVI - despachar os requerimentos constantes do parágrafo único do art. 214 e do inciso II do art. 215;
XXVII - assinar os autógrafos dos projetos e emendas a serem remetidos à Câmara dos Deputados, e dos projetos destinados à sanção;
XXVIII - promulgar as resoluções do Senado e os decretos legislativos;
XXIX - assinar a correspondência dirigida pelo Senado às seguintes autoridades:
a) Presidente da República;
b) Vice-Presidente da República;
c) Presidente da Câmara dos Deputados;
d) Presidentes do Supremo Tribunal Federal, dos Tribunais Superiores do País e do Tribunal de Contas da União;
e) Chefes de Governos estrangeiros e seus representantes no Brasil;
f) Presidentes das Casas de Parlamento estrangeiro;
g) Governadores dos Estados, do Distrito Federal e dos Territórios Federais;
h) Presidentes das Assembleias Legislativas dos Estados;
i) Autoridades judiciárias, em resposta a pedidos de informações sobre assuntos pertinentes ao Senado, no curso de feitos judiciais;
XXX - autorizar a divulgação das sessões, nos termos do disposto no art. 186;
XXXI - promover a publicação dos debates e de todos os trabalhos e atos do Senado, impedindo a de expressões vedadas por este Regimento, inclusive quando constantes de documento lido pelo orador;
XXXII - avocar a representação do Senado quando se trate de atos públicos de especial relevância, e não seja possível designar comissão ou Senador para esse fim;
XXXIII - resolver, ouvido o Plenário, qualquer caso não previsto neste Regimento;
XXXIV - presidir as reuniões da Mesa e da Comissão Diretora, podendo discutir e votar;
XXXV - exercer a competência fixada no Regulamento Administrativo do Senado Federal.
§ 1º Após a leitura da proposição, o Presidente verificará a existência de matéria análoga ou conexa em tramitação na Casa, hipótese em que determinará a tramitação conjunta dessas matérias.
§ 2º O disposto no § 1º não se aplica à proposição sobre a qual já exista parecer aprovado em comissão ou que conste da Ordem do Dia (art. 258).
§ 3º Da decisão do Presidente, prevista no § 1º, caberá recurso para a Mesa, no prazo de cinco dias úteis, contado da sua publicação.
    */
  },
  49:{
    caput: 'Na distribuição das matérias subordinadas, na forma do art. 91, à apreciação terminativa das comissões, o Presidente do Senado, quando a proposição tiver seu mérito vinculado a mais de uma comissão, poderá:'
    /*
    I - definir qual a comissão de maior pertinência que deva sobre ela decidir;
II - determinar que o seu estudo seja feito em reunião conjunta das comissões, observado, no que couber, o disposto no art. 113.
    */
  },
  50:{
    caput: 'O Presidente somente se dirigirá ao Plenário da cadeira presidencial, não lhe sendo lícito dialogar com os Senadores nem os apartear, podendo, entretanto, interrompê-los nos casos previstos no art. 18, I.'
    /*
Parágrafo único. O Presidente deixará a cadeira presidencial sempre que, como Senador, quiser participar ativamente dos trabalhos da sessão.
    */
  },
  51:{
    caput: 'O Presidente terá apenas voto de desempate nas votações ostensivas, contando-se, porém, a sua presença para efeito de quorum e podendo, em escrutínio secreto, votar como qualquer Senador.'
  },
  52:{
    caput: 'Ao Primeiro Vice-Presidente compete:'
    /*
I - substituir o Presidente nas suas faltas ou impedimentos;
II - exercer as atribuições estabelecidas no art. 66, § 7º, da Constituição, quando não as tenha exercido o Presidente.
    */
  },
  53:{
    caput: 'Ao Segundo Vice-Presidente compete substituir o Primeiro Vice-Presidente nas suas faltas ou impedimentos.'
  },
  54:{
    caput: 'Ao Primeiro-Secretário compete:'
    /*I - ler em plenário, na íntegra ou em resumo, a correspondência oficial recebida pelo Senado, os pareceres das comissões, as proposições apresentadas quando os seus autores não as tiverem lido, e quaisquer outros documentos que devam constar do expediente da sessão;
II - despachar a matéria do expediente que lhe for distribuída pelo Presidente;
III - assinar a correspondência do Senado Federal, salvo nas hipóteses do art. 48, inciso XXIX, e fornecer certidões;
IV - receber a correspondência dirigida ao Senado e tomar as providências dela decorrentes;
V - assinar, depois do Presidente, as atas das sessões secretas;
VI - rubricar a listagem especial com o resultado da votação realizada através do sistema eletrônico, e determinar sua anexação ao processo da matéria respectiva;
VII - promover a guarda das proposições em curso;
VIII - determinar a entrega aos Senadores dos avulsos eletrônicos relativos à matéria da Ordem do Dia;
IX - encaminhar os papéis distribuídos às comissões;
X - expedir as carteiras de identidade dos Senadores (art. 11).
    */
  },
  55:{
    caput: 'Ao Segundo-Secretário compete lavrar as atas das sessões secretas, proceder-lhes a leitura e assiná-las depois do Primeiro-Secretário.'
    /*
    */
  },
  56:{
    caput: 'Ao Terceiro e Quarto-Secretários compete:'
    /*
I - fazer a chamada dos Senadores, nos casos determinados neste Regimento;
II - contar os votos, em verificação de votação;
III - auxiliar o Presidente na apuração das eleições, anotando os nomes dos votados e organizando as listas respectivas.
    */
  },
  57:{
    caput: 'Os Secretários, ao lerem qualquer documento, conservar-se-ão de pé e permanecerão sentados ao procederem à chamada dos Senadores.'
  },
  58:{
    caput: 'Ao integrarem a Mesa, os Secretários não poderão usar da palavra senão para a chamada dos Senadores ou para a leitura de documentos, ordenada pelo Presidente.'
  },
  59:{
    caput: '59. Os membros da Mesa serão eleitos para mandato de dois anos, vedada a reeleição para o período imediatamente subsequente (Const., art. 57, § 4º).'
    /*
  § 1º Na constituição da Mesa é assegurada, tanto quanto possível, a representação proporcional dos partidos e blocos parlamentares que participam do Senado (Const., art. 58, § 1º).
§ 2º Para os fins do cálculo de proporcionalidade, as bancadas partidárias são consideradas pelos seus quantitativos à data da diplomação.
§ 3º No caso de vaga definitiva, o preenchimento far-se-á, dentro de cinco dias úteis, pela forma estabelecida no art. 60, salvo se faltarem menos de cento e vinte dias para o término do mandato da Mesa.
§ 4º Enquanto não eleito o novo Presidente, os trabalhos do Senado serão dirigidos pela Mesa do período anterior.
    */
  },
  60:{
    caput: 'A eleição dos membros da Mesa será feita em escrutínio secreto, exigida maioria de votos, presente a maioria da composição do Senado e assegurada, tanto quanto possível, a participação proporcional das representações partidárias ou dos blocos parlamentares com atuação no Senado.'
    /*
§ 1º A eleição far-se-á em quatro escrutínios, na seguinte ordem, para:
I - o Presidente;
II - os Vice-Presidentes;
III - os Secretários;
IV - os Suplentes de Secretários.
§ 2º A eleição, para os cargos constantes dos incisos II a IV do § 1º, far-se-á com cédulas uninominais, contendo a indicação do cargo a preencher, e colocadas, as referentes a cada escrutínio, na mesma sobrecarta.
§ 3º Na apuração, o Presidente fará, preliminarmente, a separação das cédulas referentes ao mesmo cargo, lendo-as, em seguida, uma a uma, e passando-as ao Segundo-Secretário, que anotará o resultado.
§ 4º Por proposta de um terço dos Senadores ou de líder que represente este número, a eleição para o preenchimento dos cargos constantes do § 1º, II e III, poderá ser feita em um único escrutínio, obedecido o disposto nos §§ 2º e 3º.
    */
  },
  61:{
    caput: 'As representações partidárias poderão constituir bloco parlamentar.'
    /*
    Parágrafo único. Somente será admitida a formação de bloco parlamentar que represente, no mínimo, um décimo da composição do Senado.
    */
  },
  62:{
    caput: 'O bloco parlamentar terá líder, a ser indicado dentre os líderes das representações partidárias que o compõem.'
    /*
§ 1º Os demais líderes assumirão, preferencialmente, as funções de vice-líderes do bloco parlamentar, na ordem indicada pelo titular da liderança.
§ 2º As lideranças dos partidos que se coligarem em bloco parlamentar perdem suas atribuições e prerrogativas regimentais.
    */
  },
  63:{
    caput: '(Revogado).'
  },
  64:{
    caput: 'Aplica-se ao líder de bloco parlamentar o disposto no art. 66.'
  },
  65:{
    caput: 'A Maioria, a Minoria e as representações partidárias terão líderes e vice-líderes.'
    /*
§ 1º A Maioria é integrada por bloco parlamentar ou representação partidária que represente a maioria absoluta da Casa.
§ 2º Formada a Maioria, a Minoria será aquela integrada pelo maior bloco parlamentar ou representação partidária que se lhe opuser.
§ 3º A constituição da Maioria e da Minoria será comunicada à Mesa pelos líderes dos blocos parlamentares ou das representações partidárias que as compõem.
§ 4º O líder da maioria e o da minoria serão os líderes dos blocos parlamentares ou das representações partidárias que as compõem, e as funções de vice-liderança serão exercidas pelos demais líderes das representações partidárias que integrem os respectivos blocos parlamentares.
§ 4º-A As vantagens administrativas adicionais estabelecidas para os gabinetes das lideranças somente serão admitidas às representações partidárias que tiverem, no mínimo, um vinte e sete avos da composição do Senado Federal.
§ 5º Na hipótese de nenhum bloco parlamentar alcançar maioria absoluta, assume as funções constitucionais e regimentais da maioria o líder do bloco parlamentar ou representação partidária que tiver o maior número de integrantes, e da minoria, o líder do bloco parlamentar ou representação partidária que se lhe seguir em número de integrantes e que se lhe opuser.
§ 6º A indicação dos líderes partidários será feita no início da primeira e da terceira sessões legislativas de cada legislatura, e comunicada à Mesa em documento subscrito pela maioria dos membros da respectiva bancada, podendo a mesma maioria substituí-los em qualquer oportunidade.
§ 7º Os vice-líderes das representações partidárias serão indicados pelos respectivos líderes, na proporção de um vice-líder para cada grupo de três integrantes de bloco parlamentar ou representação partidária, assegurado pelo menos um vice-líder e não computada a fração inferior a três.
    */
  },
  66:{
    caput: 'É da competência dos líderes das representações partidárias, além de outras atribuições regimentais, indicar os representantes das respectivas agremiações nas comissões.'
    /*
    Parágrafo único. Ausente ou impedido o líder, as suas atribuições serão exercidas pelo vice-líder.

    Art. 66-A. O Presidente da República poderá indicar Senador para exercer a função de líder do governo.
Parágrafo único. O líder do governo poderá indicar vice-líderes dentre os integrantes das representações partidárias que apoiem o governo.
    */
  },
  67:{
    caput: 'O Senado, atendendo a convite, poderá se fazer representar em ato ou solenidade de cunho internacional, nacional ou regional, mediante deliberação do Plenário por proposta do Presidente ou a requerimento de qualquer Senador ou comissão.'
    /*
    */
  },
  68:{
    caput: 'A representação externa far-se-á por comissão ou por um Senador.'
    /*
    */
  },
  69:{
    caput: 'É lícito ao Presidente avocar a representação do Senado quando se trate de ato de excepcional relevo.'
    /*
    */
  },
  70:{
    caput: 'Na impossibilidade de o Plenário deliberar sobre a matéria, será facultado ao Presidente autorizar representação externa para:'
    /*
    I - chegada ou partida de personalidade de destaque na vida pública nacional ou internacional;
II - solenidade de relevante expressão nacional ou internacional;
III - funeral ou cerimônia fúnebre em que, regimentalmente, caiba essa representação.
Parágrafo único. O Presidente dará conhecimento ao Senado da providência adotada na primeira sessão que se realizar.
    */
  },
  71:{
    caput: 'O Senado terá comissões permanentes e temporárias (Const., art. 58).'
    /*
    */
  },
  72:{
    caput: 'As comissões permanentes, além da Comissão Diretora, são as seguintes:'
    /*
I - Comissão de Assuntos Econômicos (CAE);
II - Comissão de Assuntos Sociais (CAS);
III - Comissão de Constituição, Justiça e Cidadania (CCJ);
IV - Comissão de Educação, Cultura e Esporte (CE);
V - Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor (CTFC);
VI - Comissão de Direitos Humanos e Legislação Participativa (CDH);
VII - Comissão de Relações Exteriores e Defesa Nacional (CRE);
VIII - Comissão de Serviços de Infraestrutura (CI);
IX - Comissão de Desenvolvimento Regional e Turismo (CDR);
X - Comissão de Agricultura e Reforma Agrária (CRA);
XI - Comissão de Ciência, Tecnologia, Inovação, Comunicação e Informática (CCT);
XII - Comissão Senado do Futuro (CSF);
XIII - Comissão de Meio Ambiente (CMA).
    */
  },
  73:{
    caput: 'Ressalvada a Comissão Diretora, cabe às comissões permanentes, no âmbito das respectivas competências, criar subcomissões permanentes ou temporárias, até o máximo de quatro, mediante proposta de qualquer de seus integrantes.'
    /*
§ 1º Ao funcionamento das subcomissões aplicar-se-ão, no que couber, as disposições deste Regimento relativas ao funcionamento das comissões permanentes.
§ 2º Os relatórios aprovados nas subcomissões serão submetidos à apreciação do Plenário da respectiva comissão, sendo a decisão final, para todos os efeitos, proferida em nome desta.
    */
  },
  74:{
    caput: 'As comissões temporárias serão:'
    /*
I - internas - as previstas no Regimento para finalidade específica;
II - externas - destinadas a representar o Senado em congressos, solenidades e outros atos públicos;
III - parlamentares de inquérito - criadas nos termos do art. 58, § 3º, da Constituição.
    */
  },
  75:{
    caput: 'As comissões externas serão criadas por deliberação do Plenário, a requerimento de qualquer Senador ou comissão, ou por proposta do Presidente.'
    /*
Parágrafo único. O requerimento ou a proposta deverá indicar o objetivo da comissão e o número dos respectivos membros.
    */
  },
  76:{
    caput: 'As comissões temporárias se extinguem:'
    /*
I - pela conclusão da sua tarefa; ou
II - ao término do respectivo prazo; e
III - ao término da sessão legislativa ordinária.
§ 1º É lícito à comissão que não tenha concluído a sua tarefa requerer a prorrogação do respectivo prazo:
I - no caso do inciso II, do caput, por tempo determinado não superior a um ano;
II - no caso do inciso III, do caput, até o término da sessão legislativa seguinte.
§ 2º Quando se tratar de comissão externa, finda a tarefa, deverá ser comunicado ao Senado o desempenho de sua missão.
§ 3º O prazo das comissões temporárias é contado a partir da publicação dos atos que as criarem, suspendendo-se nos períodos de recesso do Congresso Nacional.
§ 4º Em qualquer hipótese o prazo da comissão parlamentar de inquérito não poderá ultrapassar o período da legislatura em que for criada.
    */
  },
  77:{
    caput: 'A Comissão Diretora é constituída dos titulares da Mesa, tendo as demais comissões permanentes o seguinte número de membros:'
    /*
I - Comissão de Assuntos Econômicos, 27;
II - Comissão de Assuntos Sociais, 21;
III - Comissão de Constituição, Justiça e Cidadania, 27;
IV - Comissão de Educação, Cultura e Esporte, 27;
V - Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor, 17.
VI - Comissão de Direitos Humanos e Legislação Participativa, 19;
VII - Comissão de Relações Exteriores e Defesa Nacional, 19;
VIII - Comissão de Serviços de Infraestrutura, 23;
IX - Comissão de Desenvolvimento Regional e Turismo, 17;
X - Comissão de Agricultura e Reforma Agrária, 17;
XI - Comissão de Ciência, Tecnologia, Inovação, Comunicação e Informática, 17;
XII - Comissão Senado do Futuro, 11;
XIII - Comissão de Meio Ambiente, 17.
§ 1º Os membros da Comissão Diretora, exceto o Presidente da Casa, poderão integrar outras comissões permanentes.
§ 2º Cada Senador poderá integrar até três comissões como titular e três como suplente.
    */
  },
  78:{
    caput: 'Os membros das comissões serão designados pelo Presidente, por indicação escrita dos respectivos líderes, assegurada, tanto quanto possível, a participação proporcional das representações partidárias ou dos blocos parlamentares com atuação no Senado Federal (Const., art. 58, § 1º).'
    /*
Parágrafo único. Para fins de proporcionalidade, as representações partidárias são fixadas pelos seus quantitativos à data da diplomação, salvo nos casos de posterior criação, fusão ou incorporação de partidos.
    */
  },
  79:{
    caput: 'No início de cada legislatura, os líderes, uma vez indicados, reunir-se-ão para fixar a representação numérica dos partidos e dos blocos parlamentares nas comissões permanentes.'
    /*
    */
  },
  80:{
    caput: 'Fixada a representação prevista no art. 79, os líderes entregarão à Mesa, nos dois dias úteis subsequentes, as indicações dos titulares das comissões e, em ordem numérica, as dos respectivos suplentes.'
    /*
Parágrafo único. Recebidas as indicações, o Presidente fará a designação das comissões.
    */
  },
  81:{
    caput: 'O lugar na comissão pertence ao partido ou bloco parlamentar, competindo ao líder respectivo pedir, em documento escrito, a substituição, em qualquer circunstância ou oportunidade, de titular ou suplente por ele indicado.'
    /*
§ 1º A substituição de membro da comissão que se desligar do partido ao qual pertence o lugar na comissão não alterará a proporcionalidade estabelecida nos termos do parágrafo único do art. 78 e do art. 79.
§ 2º A substituição de Senador que exerça a presidência de comissão deverá ser precedida de autorização da maioria da respectiva bancada, salvo na hipótese de seu desligamento do partido que ali representar.
    */
  },
  82:{
    caput: 'A designação dos membros das comissões temporárias será feita:'
    /*
I - para as internas, nas oportunidades estabelecidas neste Regimento;
II - para as externas, imediatamente após a aprovação do requerimento que der motivo à sua criação.
    */
  },
  83:{
    caput: 'As comissões permanentes, exceto a Diretora, terão suplentes em número igual ao de titulares.'
    /*
Parágrafo único. (Revogado).
    */
  },
  84:{
    caput: 'Compete ao suplente substituir o membro da comissão:'
    /*
I - eventualmente, nos seus impedimentos, para quorum nas reuniões;
II - por determinados períodos, nas hipóteses previstas nos arts. 39, 40 e 43.
§ 1º A convocação será feita pelo Presidente da comissão, obedecida a ordem numérica e a representação partidária.
§ 2º Ao suplente poderá ser distribuída proposição para relatar quando:
I - se tratar de substituição prevista no inciso II do caput;
II - se tratar de matéria em regime de urgência;
III - o volume das matérias despachadas à comissão assim o justifique.
§ 3º Nas hipóteses dos incisos II e III do § 2º, se a representação do bloco parlamentar ou do partido a que pertencer o suplente estiver completa na reunião, o seu voto só será computado em relação à matéria que relatar, deixando de participar da deliberação o suplente convocado por último ou, na inexistência desse, o último dos titulares do bloco parlamentar ou do partido, conforme a lista oficial da comissão, publicada no Diário do Senado Federal.
§ 4º As proposições em poder de titular ou suplente que se afastar do exercício do mandato, nos casos dos arts. 39, 40 e 43, serão devolvidas ao Presidente da comissão para serem redistribuídas.
    */
  },
  85:{
    caput: 'Em caso de impedimento temporário de membro da comissão e não havendo suplente a convocar, o Presidente desta solicitará à Presidência da Mesa a designação de substituto, devendo a escolha recair em Senador do mesmo partido ou bloco parlamentar do substituído, salvo se os demais representantes do partido ou bloco não puderem ou não quiserem aceitar a designação.'
    /*
§ 1º Ausentes o Presidente e o Vice-Presidente da comissão, o Presidente do Senado poderá designar, de ofício, substitutos eventuais a fim de possibilitar o funcionamento do órgão.
§ 2º Cessará o exercício do substituto desde que o substituído compareça à reunião da respectiva comissão.
    */
  },
  86:{
    caput: 'A renúncia a lugar em comissão far-se-á em comunicação escrita à Mesa.'
    /*
    */
  },
  87:{
    caput: 'Impossibilitado de comparecer a qualquer reunião de comissão a que pertença, o Senador deverá comunicar o fato ao Presidente a tempo de ser tomada a providência regimental para a sua substituição.'
    /*
    */
  },
  88:{
    caput: 'No início da legislatura, nos cinco dias úteis que se seguirem à designação de seus membros, e na terceira sessão legislativa, nos cinco dias úteis que se seguirem à indicação dos líderes, cada comissão reunir-se-á para instalar seus trabalhos e eleger, em escrutínio secreto, o seu Presidente e o Vice-Presidente.'
    /*
§ 1º Em caso do não cumprimento do disposto neste artigo, ficarão investidos nos cargos os dois titulares mais idosos, até que se realize a eleição.
§ 2º Ocorrendo empate, a eleição será repetida no dia seguinte; verificando-se novo empate, será considerado eleito o mais idoso.
§ 3º Na ausência do Presidente e do Vice-Presidente, presidirá a comissão o mais idoso dos titulares.
§ 4º Em caso de vaga dos cargos de Presidente ou de Vice-Presidente, far-se-á o preenchimento por meio de eleição realizada nos cinco dias úteis que se seguirem à vacância, salvo se faltarem sessenta dias ou menos para o término dos respectivos mandatos.
§ 5º Aceitar função prevista no art. 39, II, importa em renúncia ao cargo de Presidente ou de Vice-Presidente de comissão.
§ 6º Ao mandato de Presidente e de Vice-Presidente das comissões permanentes e de suas subcomissões aplica-se o disposto no art. 59.
    */
  },
  89:{
    caput: 'Ao Presidente de comissão compete:'
    /*
I - ordenar e dirigir os trabalhos da comissão;
II - dar-lhe conhecimento de toda a matéria recebida;
III - designar, na comissão, relatores para as matérias;
IV - designar, dentre os componentes da comissão, os membros das subcomissões e fixar a sua composição;
V - resolver as questões de ordem;
VI - ser o elemento de comunicação da comissão com a Mesa, com as outras comissões e suas respectivas subcomissões e com os líderes;
VII - convocar as suas reuniões extraordinárias, de ofício ou a requerimento de qualquer de seus membros, aprovado pela comissão;
VIII - promover a publicação das atas das reuniões no Diário do Senado Federal;
IX - solicitar, em virtude de deliberação da comissão, os serviços de funcionários técnicos para estudo de determinado trabalho, sem prejuízo das suas atividades nas repartições a que pertençam;
X - convidar, para o mesmo fim e na forma do inciso IX, técnicos ou especialistas particulares e representantes de entidades ou associações científicas;
XI - desempatar as votações quando ostensivas;
XII - distribuir matérias às subcomissões;
XIII - assinar o expediente da comissão.
§ 1º Quando o Presidente funcionar como relator, passará a Presidência ao substituto eventual, enquanto discutir ou votar o assunto que relatar.
§ 2º Ao encerrar-se a legislatura, o Presidente providenciará a fim de que os seus membros devolvam à secretaria da comissão os processos que lhes tenham sido distribuídos.
    */
  },
  90:{
    caput: 'Às comissões compete:'
    /*
I - discutir e votar projeto de lei nos termos do art. 91 (Const., art. 58, § 2º, I);
II - realizar audiências públicas com entidades da sociedade civil (Const., art. 58, § 2º, II);
III - convocar Ministros de Estado ou quaisquer titulares de órgãos diretamente subordinados à Presidência da República para prestarem informações sobre assuntos inerentes a suas atribuições e ouvir os Ministros quando no exercício da faculdade prevista no art. 50, § 1º, da Constituição (Const., arts. 50 e 58, § 2º, III);
IV - receber petições, reclamações, representações ou queixas de qualquer pessoa contra atos ou omissões das autoridades ou entidades públicas (Const., art. 58, § 2º, IV);
V - solicitar depoimento de qualquer autoridade ou cidadão (Const., art. 58, § 2º, V);
VI - apreciar programas de obras, planos nacionais, regionais e setoriais de desenvolvimento e sobre eles emitir parecer (Const., art. 58, § 2º, VI);
VII - propor a sustação dos atos normativos do Poder Executivo que exorbitem do poder regulamentar (Const., art. 49, V);
VIII - acompanhar junto ao Governo a elaboração da proposta orçamentária, bem como sua execução;
IX - acompanhar, fiscalizar e controlar as políticas governamentais pertinentes às áreas de sua competência;
X - exercer a fiscalização e controle dos atos do Poder Executivo, incluídos os da administração indireta, e quanto às questões relativas à competência privativa do Senado (Const., arts. 49, X, e 52, V a IX);
XI - estudar qualquer assunto compreendido nas atribuições do Senado, propondo as medidas legislativas cabíveis;
XII - opinar sobre o mérito das proposições submetidas ao seu exame, emitindo o respectivo parecer;
XIII - realizar diligência.
Parágrafo único. Ao depoimento de testemunhas e autoridades aplicam-se, no que couber, as disposições do Código de Processo Civil.
    */
  },
  91:{
    caput: 'Às comissões, no âmbito de suas atribuições, cabe, dispensada a competência do Plenário, nos termos do art. 58, § 2º, I, da Constituição, discutir e votar:'
    /*
I - projetos de lei ordinária de autoria de Senador, ressalvado projeto de código;
II - projetos de resolução que versem sobre a suspensão da execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do Supremo Tribunal Federal (Const., art. 52, X).
III - projetos de decreto legislativo de que trata o § 1º do art. 223 da Constituição Federal.
§ 1º O Presidente do Senado, ouvidas as lideranças, poderá conferir às comissões competência para apreciar, terminativamente, as seguintes matérias:
I - tratados ou acordos internacionais (Const., art. 49, I);
II - autorização para a exploração e o aproveitamento de recursos hídricos e a pesquisa e lavra de riquezas minerais em terras indígenas (Const., art. 49, XVI);
III - alienação ou concessão de terras públicas com área superior a dois mil e quinhentos hectares (Const., art. 49, XVII);
IV - projetos de lei da Câmara de iniciativa parlamentar que tiverem sido aprovados, em decisão terminativa, por comissão daquela Casa;
V - indicações e proposições diversas, exceto:
a) projeto de resolução que altere o Regimento Interno;
b) projetos de resolução a que se referem os arts. 52, V a IX, e 155, §§ 1º , IV, e 2º , IV e V, da Constituição;
c) proposta de emenda à Constituição.
§ 2º Encerrada a apreciação terminativa a que se refere este artigo, a decisão da comissão será comunicada ao Presidente do Senado Federal para ciência do Plenário e publicação no Diário do Senado Federal.
§ 3º No prazo de cinco dias úteis, contado a partir da publicação da comunicação referida no § 2º no avulso eletrônico da Ordem do Dia da sessão seguinte, poderá ser interposto recurso para apreciação da matéria pelo Plenário do Senado.
§ 4º O recurso, assinado por um décimo dos membros do Senado, será dirigido ao Presidente da Casa.
§ 5º Esgotado o prazo previsto no § 3º, sem interposição de recurso, o projeto será, conforme o caso, encaminhado à sanção, promulgado, remetido à Câmara ou arquivado.
    */
  },
  92:{
    caput: 'Aplicam-se à tramitação dos projetos e demais proposições submetidas à deliberação terminativa das comissões as disposições relativas a turnos, prazos, emendas e demais formalidades e ritos exigidos para as matérias submetidas à apreciação do Plenário do Senado.'
    /*
    */
  },
  93:{
    caput: 'A audiência pública será realizada pela comissão para:'
    /*
I - instruir matéria sob sua apreciação;
II - tratar de assunto de interesse público relevante.
§ 1º A audiência pública poderá ser realizada por solicitação de entidade da sociedade civil.
§ 2º A audiência prevista para o disposto no inciso I poderá ser dispensada por deliberação da comissão.
§ 3º No dia previamente designado, a comissão poderá realizar audiência pública com a presença de, no mínimo, 2 (dois) de seus membros.
    */
  },
  94:{
    caput: 'Os depoimentos serão prestados por escrito e de forma conclusiva.'
    /*
§ 1º Na hipótese de haver defensores e opositores, relativamente à matéria objeto de exame, a comissão procederá de forma que possibilite a audiência de todas as partes interessadas.
§ 2º Os membros da comissão poderão, terminada a leitura, interpelar o orador exclusivamente sobre a exposição lida, por prazo nunca superior a três minutos.
§ 3º O orador terá o mesmo prazo para responder a cada Senador, sendo lhe vedado interpelar os membros da comissão.
    */
  },
  95:{
    caput: 'Da reunião de audiência pública será lavrada ata, arquivando-se, no âmbito da comissão, os pronunciamentos escritos e documentos que os acompanharem.'
    /*
Parágrafo único. Será admitido, a qualquer tempo, a requerimento de Senador, o traslado de peças.
    */
  },
  96:{
    caput: 'A comissão receberá petições, reclamações, representações ou queixas de qualquer pessoa contra ato ou omissão de autoridade ou entidade pública sobre assunto de sua competência.'
    /*
§ 1º Os expedientes referidos neste artigo deverão ser encaminhados por escrito, com identificação do autor e serão distribuídos a um relator que os apreciará e apresentará relatório com sugestões quanto às providências a serem tomadas pela comissão, pela Mesa ou pelo Ministério Público.
§ 2º O relatório será discutido e votado na comissão, devendo concluir por projeto de resolução se contiver providência a ser tomada por outra instância que não a da própria comissão.

Art. 96-A. Os dirigentes máximos das agências reguladoras comparecerão ao Senado Federal, em periodicidade anual, para prestar contas sobre o exercício de suas atribuições e o desempenho da agência, bem como para apresentar avaliação das políticas públicas no âmbito de suas competências.
Parágrafo único. O comparecimento de que trata o caput ocorrerá em reunião conjunta da comissão temática pertinente e das Comissões de Assuntos Econômicos e de Constituição, Justiça e Cidadania.
Art. 96-B. No desempenho da competência prevista no inciso IX do art. 90, as comissões permanentes selecionarão, na área de sua competência, políticas públicas desenvolvidas no âmbito do Poder Executivo, para serem avaliadas.
§ 1º Cada comissão permanente selecionará as políticas públicas até o último dia útil do mês de março de cada ano.
§ 2º Para realizar a avaliação de que trata o caput, que se estenderá aos impactos das políticas públicas e às atividades meio de suporte para sua execução, poderão ser solicitadas informações e documentos a órgãos do Poder Executivo e ao Tribunal de Contas da União, bem como a entidades da sociedade civil, nos termos do art. 50 da Constituição Federal.
§ 3º Ao final da sessão legislativa, a comissão apresentará relatório com as conclusões da avaliação realizada.
§ 4º A Consultoria Legislativa e a Consultoria de Orçamentos, Fiscalização e Controle do Senado Federal elaborarão estudos e relatórios técnicos que subsidiarão os trabalhos da avaliação de que trata o caput.
§ 5º O Instituto de Pesquisa DataSenado produzirá análises e relatórios estatísticos para subsidiar a avaliação de que trata o caput.
    */
  },
  97:{
    caput: 'Às comissões permanentes compete estudar e emitir parecer sobre os assuntos submetidos ao seu exame.'
    /*
    */
  },
  98:{
    caput: 'À Comissão Diretora compete:'
    /*
I - exercer a administração interna do Senado nos termos das atribuições fixadas no seu Regulamento Administrativo;
II - regulamentar a polícia interna;
III - propor ao Senado projeto de resolução dispondo sobre sua organização, funcionamento, polícia, criação, transformação ou extinção de cargos, empregos e funções de seus serviços e a iniciativa de lei para a fixação da respectiva remuneração, observados os parâmetros estabelecidos na lei de diretrizes orçamentárias (Const., art. 52, XIII);
IV - emitir, obrigatoriamente, parecer sobre as proposições que digam respeito ao serviço e ao pessoal da Secretaria do Senado e as que alterem este Regimento, salvo o disposto no art. 401, § 2º, II;
V - elaborar a redação final das proposições de iniciativa do Senado e das emendas e projetos da Câmara dos Deputados aprovados pelo Plenário, escoimando-os dos vícios de linguagem, das impropriedades de expressão, defeitos de técnica legislativa, cláusulas de justificação e palavras desnecessárias.
VI - apreciar requerimento de tramitação em conjunto de proposição regulando a mesma matéria e o recurso de que trata o art. 48, § 3º, exceto se a proposição constar da Ordem do Dia ou for objeto de parecer aprovado em comissão (art. 258).
Parágrafo único. Os esclarecimentos ao Plenário sobre atos da competência da Comissão Diretora serão prestados, oralmente, por relator ou pelo Primeiro-Secretário.
    */
  },
  99:{
    caput: 'À Comissão de Assuntos Econômicos compete opinar sobre proposições pertinentes aos seguintes assuntos:'
    /*
I - aspecto econômico e financeiro de qualquer matéria que lhe seja submetida por despacho do Presidente, por deliberação do Plenário, ou por consulta de comissão, e, ainda, quando, em virtude desses aspectos, houver recurso de decisão terminativa de comissão para o Plenário;
II - (Revogado);
III - problemas econômicos do País, política de crédito, câmbio, seguro e transferência de valores, comércio exterior e interestadual, sistema monetário, bancário e de medidas, títulos e garantia dos metais, sistema de poupança, consórcio e sorteio e propaganda comercial;
IV - tributos, tarifas, empréstimos compulsórios, finanças públicas, normas gerais sobre direito tributário, financeiro e econômico; orçamento, juntas comerciais, conflitos de competência em matéria tributária entre a União, os Estados, o Distrito Federal e os Municípios, dívida pública e fiscalização das instituições financeiras;
V - escolha dos Ministros do Tribunal de Contas da União (Const., arts. 49, XIII, e 52, III, b), e do presidente e diretores do Banco Central (Const., art. 52, III, d);
VI - matérias a que se referem os arts. 389, 393 e 394;
VII - outros assuntos correlatos.
§ 1º A Comissão promoverá audiências públicas regulares com o Presidente do Banco Central do Brasil para discutir as diretrizes, implementação e perspectivas futuras da política monetária.
§ 2º As audiências de que trata o § 1º deste artigo ocorrerão na primeira quinzena de fevereiro, abril, julho e outubro, podendo haver alterações de datas decorrentes de entendimento entre a Comissão e a Presidência do Banco Central do Brasil.
§ 3º A Comissão promoverá 2 (duas) audiências públicas por ano para a prestação de contas do andamento das ações coordenadas pelo Poder Executivo que afetam a agenda da produtividade e da melhoria do ambiente de negócios, a ser realizada pelo Ministro de Estado Chefe da Casa Civil da Presidência da República ou por outra autoridade com status ministerial a quem tenha sido delegada expressamente essa competência.
Art. 99-A. À Comissão de Assuntos Econômicos compete, ainda, avaliar periodicamente a funcionalidade do Sistema Tributário Nacional, em sua estrutura e seus componentes, e o desempenho das administrações tributárias da União, dos Estados, do Distrito Federal e dos Municípios.
    */
  },
  100:{
    caput: 'À Comissão de Assuntos Sociais compete opinar sobre proposições que digam respeito a:'
    /*
I - relações de trabalho, organização do sistema nacional de emprego e condição para o exercício de profissões, seguridade social, previdência social, população indígena e assistência social;
II - proteção e defesa da saúde, condições e requisitos para remoção de órgãos, tecidos e substâncias humanas para fins de transplante, pesquisa, tratamento e coleta de sangue humano e seus derivados, produção, controle e fiscalização de medicamentos, saneamento, inspeção e fiscalização de alimentos e competência do Sistema Único de Saúde;
III - (Revogado);
IV - outros assuntos correlatos.
    */
  },
  101:{
    caput: 'À Comissão de Constituição, Justiça e Cidadania compete:'
    /*
I - opinar sobre a constitucionalidade, juridicidade e regimentalidade das matérias que lhe forem submetidas por deliberação do Plenário, por despacho da Presidência, por consulta de qualquer comissão, ou quando em virtude desses aspectos houver recurso de decisão terminativa de comissão para o Plenário;
II - ressalvadas as atribuições das demais comissões, emitir parecer, quanto ao mérito, sobre as matérias de competência da União, especialmente as seguintes:
a) criação de Estado e Territórios, incorporação ou desmembramento de áreas a eles pertencentes;
b) estado de defesa, estado de sítio e intervenção federal (Const., art. 49, IV), requisições civis e anistia;
c) segurança pública, corpos de bombeiros militares, polícia, inclusive marítima, aérea de fronteiras, rodoviária e ferroviária;
d) direito civil, comercial, penal, processual, eleitoral, aeronáutico, espacial, marítimo e penitenciário;
e) uso dos símbolos nacionais, nacionalidade, cidadania e naturalização, extradição e expulsão de estrangeiros, emigração e imigração;
f) órgãos do serviço público civil da União e servidores da administração direta e indireta do Poder Judiciário, do Ministério Público e dos Territórios;
g) normas gerais de licitação e contratação, em todas as modalidades, para as administrações públicas diretas, autárquicas e fundacionais da União, Estados, Distrito Federal e Municípios, obedecido o disposto no art. 37, XXI, da Constituição, e para as empresas públicas e sociedades de economia mista, nos termos do art. 173, § 1º, III, também da Constituição (Const., art. 22, XXVII);
h) perda de mandato de Senador (Const., art. 55), pedido de licença de incorporação de Senador às Forças Armadas (Const., art. 53, § 7º);
i) escolha de Ministro do Supremo Tribunal Federal, dos Tribunais Superiores e de Governador de Território, escolha e destituição do Procurador-Geral da República (Const., art. 52, III, a, c e e);
j) transferência temporária da sede do Governo Federal;
l) registros públicos, organização administrativa e judiciária do Ministério Público e Defensoria Pública da União e dos Territórios, organização judiciária do Ministério Público e da Defensoria Pública do Distrito Federal;
m) limites dos Estados e bens do domínio da União;
n) desapropriação e inquilinato;
o) criação, funcionamento e processo do juizado de pequenas causas, assistência jurídica e defensoria pública, custas dos serviços forenses;
p) matéria a que se refere o art. 96, II, da Constituição Federal;
III - propor, por projeto de resolução, a suspensão, no todo ou em parte, de leis declaradas inconstitucionais pelo Supremo Tribunal Federal (Const., art. 52, X);
IV - opinar, em cumprimento a despacho da Presidência, sobre as emendas apresentadas como de redação, nas condições previstas no parágrafo único do art. 234;
V - opinar sobre assunto de natureza jurídica ou constitucional que lhe seja submetido, em consulta, pelo Presidente, de ofício, ou por deliberação do Plenário, ou por outra comissão;
VI - opinar sobre recursos interpostos às decisões da Presidência;
VII - (Revogado).
§ 1º Quando a Comissão emitir parecer pela inconstitucionalidade e injuridicidade de qualquer proposição, será esta considerada rejeitada e arquivada definitivamente, por despacho do Presidente do Senado, salvo, não sendo unânime o parecer, recurso interposto nos termos do art. 254.
§ 2º Tratando-se de inconstitucionalidade parcial, a Comissão poderá oferecer emenda corrigindo o vício.
Art. 101-A. O Ministro de Estado da Justiça comparecerá anualmente à Comissão de Constituição, Justiça e Cidadania do Senado Federal para prestar informações e esclarecimentos a respeito da atuação de sua Pasta, bem como para apresentar avaliação das políticas públicas no âmbito de suas competências.
    */
  },
  102:{
    caput: 'À Comissão de Educação, Cultura e Esporte compete opinar sobre proposições que versem sobre:'
  /*
  I - normas gerais sobre educação, cultura, ensino e desportos, instituições educativas e culturais, diretrizes e bases da educação nacional e salário-educação;
II - diversão e espetáculos públicos, criações artísticas, datas comemorativas e homenagens cívicas;
III - formação e aperfeiçoamento de recursos humanos;
IV - (Revogado);
V - (Revogado);
VI - outros assuntos correlatos.
Art. 102-A. À Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor, além da aplicação, no que couber, do disposto no art. 90 e sem prejuízo das atribuições das demais comissões, compete:
I - exercer a fiscalização e o controle dos atos do Poder Executivo, incluídos os da administração indireta, podendo, para esse fim:
a) avaliar a eficácia, eficiência e economicidade dos projetos e programas de governo no plano nacional, no regional e no setorial de desenvolvimento, emitindo parecer conclusivo;
b) apreciar a compatibilidade da execução orçamentária com os planos e programas governamentais e destes com os objetivos aprovados em lei;
c) solicitar, por escrito, informações à administração direta e indireta, bem como requisitar documentos públicos necessários à elucidação do ato objeto de fiscalização;
d) avaliar as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos da administração direta e indireta, incluídas as fundações e sociedades instituídas e mantidas pelo poder público federal, notadamente quando houver indícios de perda, extravio ou irregularidade de qualquer natureza de que resulte prejuízo ao Erário;
e) providenciar a efetivação de perícias, bem como solicitar ao Tribunal de Contas da União que realize inspeções ou auditorias de natureza contábil, financeira, orçamentária, operacional e patrimonial nas unidades administrativas da União e demais entidades referidas na alínea d;
f) apreciar as contas nacionais das empresas supranacionais de cujo capital social a União participe de forma direta ou indireta, bem assim a aplicação de quaisquer recursos repassados mediante convênio, acordo, ajuste ou outros instrumentos congêneres, a Estado, ao Distrito Federal ou a Município;
g) promover a interação do Senado Federal com os órgãos do Poder Executivo que, pela natureza de suas atividades, possam dispor ou gerar dados de que necessite para o exercício de fiscalização e controle;
h) promover a interação do Senado Federal com os órgãos do Poder Judiciário e do Ministério Público que, pela natureza de suas atividades, possam propiciar ou gerar dados de que necessite para o exercício de fiscalização e controle;
i) propor ao Plenário do Senado as providências cabíveis em relação aos resultados da avaliação, inclusive quanto ao resultado das diligências realizadas pelo Tribunal de Contas da União;
II - opinar sobre matérias pertinentes aos seguintes temas:
a) prevenção à corrupção;
b) acompanhamento e modernização das práticas gerenciais na administração pública federal direta e indireta;
c) prestação eficaz, efetiva e eficiente de serviços públicos;
d) transparência e prestação de contas e de informações à população, com foco na responsabilidade da gestão fiscal e dos gastos públicos, bem como nas necessidades dos cidadãos;
e) difusão e incentivo, na administração pública, de novos meios de prestação de informações à sociedade, tais como redes, sítios e portais eletrônicos, e apoio a Estados e Municípios para a implantação desses meios;
III - opinar sobre assuntos pertinentes à defesa do consumidor, especialmente:
a) estudar, elaborar e propor normas e medidas voltadas à melhoria contínua das relações de mercado, em especial as que envolvem fornecedores e consumidores;
b) aperfeiçoar os instrumentos legislativos reguladores, contratuais e penais, referentes aos direitos dos consumidores e dos fornecedores, com ênfase em condições, limites e uso de informações, responsabilidade civil, respeito à privacidade, aos direitos autorais, às patentes e similares;
c) acompanhar as políticas e as ações desenvolvidas pelo Poder Público relativas à defesa dos direitos do consumidor, à defesa da concorrência e à repressão da formação e da atuação ilícita de monopólios;
d) receber denúncias e denunciar práticas referentes a abuso do poder econômico, qualidade e apresentação de produtos, técnicas de propaganda e publicidade nocivas ou enganosas;
e) avaliar as relações entre custo e preço de produtos, bens e serviços, com vistas a estabelecer normas de repressão à usura, aos lucros excessivos, ao aumento indiscriminado de preços e à cartelização de segmentos do mercado;
f) analisar as condições de concorrência com ênfase na defesa dos produtores e dos fornecedores nacionais, considerados os interesses dos consumidores e a soberania nacional;
g) gerar e disponibilizar estudos, dados estatísticos e informações, no âmbito de suas competências.
Parágrafo único. No exercício da competência de fiscalização e controle prevista no inciso I do caput, a Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor:
I - remeterá cópia da documentação pertinente ao Ministério Público, a fim de que este promova a ação cabível, de natureza cível ou penal, se for constatada a existência de irregularidade;
II - poderá atuar, mediante solicitação, em colaboração com as comissões permanentes e temporárias, incluídas as comissões parlamentares de inquérito, com vistas ao adequado exercício de suas atividades.
Art. 102-B. A fiscalização e o controle dos atos do Poder Executivo, inclusive os da administração indireta, pela Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor obedecerão às seguintes regras:
I - a proposta de fiscalização e controle poderá ser apresentada por qualquer membro ou Senador à Comissão, com específica indicação do ato e fundamentação da providência objetivada;
II - a proposta será relatada previamente, quanto à oportunidade e conveniência da medida e ao alcance jurídico, administrativo, político, econômico, social ou orçamentário do ato impugnado, definindo-se o plano de execução e a metodologia de avaliação;
III - aprovado o relatório prévio pela Comissão, o relator poderá solicitar os recursos e o assessoramento necessários ao bom desempenho da Comissão, incumbindo à Mesa e à Administração da Casa o atendimento preferencial das providências requeridas. Rejeitado o relatório, a matéria será encaminhada ao Arquivo;
IV - o relatório final da fiscalização e controle, em termos de comprovação da legalidade do ato, avaliação política, administrativa, social e econômica de sua edição, e quanto à eficácia dos
resultados sobre a gestão orçamentária, financeira e patrimonial, obedecerá, no que concerne à tramitação, as normas do art. 102-C.
Parágrafo único. A Comissão, para a execução das atividades de que trata este artigo, poderá solicitar ao Tribunal de Contas da União as providências ou informações previstas no art. 71, IV e VII, da Constituição Federal.
Art. 102-C. Ao termo dos trabalhos, a Comissão apresentará relatório circunstanciado, com suas conclusões, que será publicado no Diário do Senado Federal e encaminhado.
I - à Mesa, para as providências de alçada desta, ou ao Plenário, oferecendo, conforme o caso, projeto de lei, de decreto legislativo, de resolução ou indicação;
II - ao Ministério Público ou à Advocacia-Geral da União, com cópia da documentação, para que promova a responsabilidade civil ou criminal por infrações apuradas e adote outras medidas decorrentes de suas funções institucionais;
III - ao Poder Executivo, para adotar as providências saneadoras de caráter disciplinar e administrativo decorrentes do disposto no art. 37, §§ 2º a 6º, da Constituição Federal, e demais disposições constitucionais e legais aplicáveis;
IV - à comissão permanente que tenha maior pertinência com a matéria, a qual incumbirá o atendimento do prescrito no inciso III;
V - à Comissão Mista de Planos, Orçamentos Públicos e Fiscalização e ao Tribunal de Contas da União, para as providências previstas no art. 71 da Constituição Federal.
Parágrafo único. Nos casos dos incisos II, III e V a remessa será feita pelo Presidente do Senado.
Art. 102-D. Aplicam-se à Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor as normas regimentais pertinentes às demais comissões permanentes, no que não conflitarem com os termos das disposições constantes dos arts. 102-A a 102-C.
§ 1º Ocorrendo a hipótese de exercício concorrente de competência fiscalizadora por duas ou mais comissões sobre os mesmos fatos, os trabalhos se desdobrarão em reuniões conjuntas, por iniciativa do Presidente de um dos órgãos ou de um ou mais de seus membros.
§ 2º A Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor poderá, se houver motivo suficiente, comunicar fatos investigados à comissão correspondente da Câmara dos Deputados, para que esta adote a providência que considerar cabível.
Art. 102-E. À Comissão de Direitos Humanos e Legislação Participativa compete opinar sobre:
I - sugestões legislativas apresentadas por associações e órgãos de classe, sindicatos e entidades organizadas da sociedade civil, exceto partidos políticos com representação política no Congresso Nacional;
II - pareceres técnicos, exposições e propostas oriundas de entidades científicas e culturais e de qualquer das entidades mencionadas no inciso I;
III - garantia e promoção dos direitos humanos;
IV - direitos da mulher;
V - proteção à família;
VI - proteção e integração social das pessoas portadoras de deficiências e de proteção à infância, à juventude e aos idosos;
VII - fiscalização, acompanhamento, avaliação e controle das políticas governamentais relativas aos direitos humanos, aos direitos da mulher, aos direitos das minorias sociais ou étnicas, aos direitos dos estrangeiros, à proteção e integração das pessoas portadoras de deficiência e à proteção à infância, à juventude e aos idosos.
Parágrafo único. No exercício da competência prevista nos incisos I e II do caput deste artigo, a Comissão de Direitos Humanos e Legislação Participativa observará:
I - as sugestões legislativas que receberem parecer favorável da Comissão serão transformadas em proposição legislativa de sua autoria e encaminhadas à Mesa, para tramitação, ouvidas as comissões competentes para o exame do mérito;
II - as sugestões que receberem parecer contrário serão encaminhadas ao Arquivo;
III - aplicam-se às proposições decorrentes de sugestões legislativas, no que couber, as disposições regimentais relativas ao trâmite dos projetos de lei nas comissões, ressalvado o disposto no inciso I, in fine, deste parágrafo único.
Art. 102-F. À Comissão de Meio Ambiente compete opinar sobre assuntos pertinentes à defesa do meio ambiente, especialmente:
I - proteção do meio ambiente, controle da poluição, conservação da natureza e defesa do solo, dos recursos naturais e genéticos, das florestas, da caça, da pesca, da fauna, da flora e dos recursos hídricos;
II - política e sistema nacional de meio ambiente;
III - preservação, conservação, exploração e manejo de florestas e da biodiversidade;
IV - conservação e gerenciamento do uso do solo e dos recursos hídricos, no tocante ao meio ambiente e ao desenvolvimento sustentável;
V - fiscalização dos alimentos e dos produtos e insumos agrícolas e pecuários, no tocante ao meio ambiente e ao desenvolvimento sustentável;
VI - direito ambiental;
VII - agências reguladoras na área de meio ambiente, inclusive a Agência Nacional de Águas (ANA);
VIII - outros assuntos correlatos.
  */
  },
  103:{
    caput: 'À Comissão de Relações Exteriores e Defesa Nacional compete emitir parecer sobre:'
  /*
  I - proposições referentes aos atos e relações internacionais (Const., art. 49, I) e ao Ministério das Relações Exteriores;
II - comércio exterior;
III - indicação de nome para chefe de missão diplomática de caráter permanente junto a governos estrangeiros e das organizações internacionais de que o Brasil faça parte (Const., art. 52, IV);
IV - (Revogado);
V - Forças Armadas de terra, mar e ar, requisições militares, passagem de forças estrangeiras e sua permanência no território nacional, questões de fronteiras e limites do território nacional, espaço aéreo e marítimo, declaração de guerra e celebração de paz (Const., art. 49, II);
VI - assuntos referentes à Organização das Nações Unidas e entidades internacionais de qualquer natureza;
VII - autorização para o Presidente ou o Vice-Presidente da República se ausentarem do território nacional (Const., art. 49, III);
VIII - outros assuntos correlatos.
§ 1º A Comissão integrará, por um de seus membros, as comissões enviadas pelo Senado ao exterior, em assuntos pertinentes à política externa do País.
§ 2º A Comissão promoverá audiências públicas, no início de cada sessão legislativa, com os Ministros das Relações Exteriores e da Defesa para prestarem informações no âmbito de suas competências.
  */
  },
  104:{
    caput: 'À Comissão de Serviços de Infraestrutura compete opinar sobre matérias pertinentes a:'
  /*
  I - transportes de terra, mar e ar, obras públicas em geral, minas, recursos geológicos, serviços de telecomunicações, parcerias público-privadas e agências reguladoras pertinentes;
II - outros assuntos correlatos.
Art. 104-A. À Comissão de Desenvolvimento Regional e Turismo compete opinar sobre matérias pertinentes a:
I - proposições que tratem de assuntos referentes às desigualdades regionais e às políticas de desenvolvimento regional, dos Estados e dos Municípios;
II - planos regionais de desenvolvimento econômico e social;
III - programas, projetos, investimentos e incentivos voltados para o desenvolvimento regional;
IV - integração regional;
V - agências e organismos de desenvolvimento regional;
VI - proposições que tratem de assuntos referentes ao turismo;
VII - políticas relativas ao turismo;
VIII - outros assuntos correlatos.
Art. 104-B. À Comissão de Agricultura e Reforma Agrária compete opinar sobre proposições pertinentes aos seguintes temas:
I - direito agrário;
II - planejamento, acompanhamento e execução da política agrícola e fundiária;
III - agricultura, pecuária e abastecimento;
IV - agricultura familiar e segurança alimentar;
V - silvicultura, aquicultura e pesca;
VI - comercialização e fiscalização de produtos e insumos, inspeção e fiscalização de alimentos, vigilância e defesa sanitária animal e vegetal;
VII - irrigação e drenagem;
VIII - uso e conservação do solo na agricultura;
IX - utilização e conservação, na agricultura, dos recursos hídricos e genéticos;
X - política de investimentos e financiamentos agropecuários, seguro rural e endividamento rural;
XI - tributação da atividade rural;
XII - alienação ou concessão de terras públicas com área superior a dois mil e quinhentos hectares, aquisição ou arrendamento de propriedade rural por pessoa física ou jurídica estrangeira, definição da pequena e da média propriedade rural;
XIII - uso ou posse temporária da terra e regularização dominial de terras rurais e de sua ocupação;
XIV - colonização e reforma agrária;
XV - cooperativismo e associativismo rurais;
XVI - emprego, previdência e renda rurais;
XVII - políticas de apoio às pequenas e médias propriedades rurais;
XVIII - política de desenvolvimento tecnológico da agropecuária, mediante estímulos fiscais, financeiros e creditícios à pesquisa e experimentação agrícola, pesquisa, plantio e comercialização de organismos geneticamente modificados;
XIX - extensão rural;
XX - organização do ensino rural;
XXI - outros assuntos correlatos.
Art. 104-C. À Comissão de Ciência, Tecnologia, Inovação, Comunicação e Informática compete opinar sobre proposições pertinentes aos seguintes temas:
I - desenvolvimento científico, tecnológico e inovação tecnológica;
II - política nacional de ciência, tecnologia, inovação, comunicação e informática;
III - organização institucional do setor;
IV - acordos de cooperação e inovação com outros países e organismos internacionais na área;
V - propriedade intelectual;
VI - criações científicas e tecnológicas, informática, atividades nucleares de qualquer natureza, transporte e utilização de materiais radioativos, apoio e estímulo à pesquisa e criação de tecnologia;
VII - comunicação, imprensa, radiodifusão, televisão, outorga e renovação de concessão, permissão e autorização para serviços de radiodifusão sonora e de sons e imagens;
VIII - regulamentação, controle e questões éticas referentes a pesquisa e desenvolvimento científico e tecnológico, inovação tecnológica, comunicação e informática;
IX - outros assuntos correlatos.
Art. 104-D. À Comissão Senado do Futuro compete promover discussões sobre grandes temas e o futuro do País, bem como aprimorar a atuação do Senado nessas questões.
Art. 104-E. (Revogado).
  */
  },
  105:{
    caput: 'Às comissões temporárias compete o desempenho das atribuições que lhes forem expressamente deferidas.'
  /*
  */
  },
  106:{
    caput: 'As comissões reunir-se-ão nas dependências do edifício do Senado Federal.'
  /*
  */
  },
  107:{
    caput: 'As reuniões das comissões permanentes realizar-se-ão:'
  /*
  I - se ordinárias, semanalmente, durante a sessão legislativa ordinária, nos seguintes dias e horários:
a) Comissão de Assuntos Econômicos: às terças-feiras, dez horas;
b) Comissão de Serviços de Infraestrutura: às terças-feiras, quatorze horas;
c) Comissão de Constituição, Justiça e Cidadania: às quartas-feiras, dez horas;
d) Comissão de Assuntos Sociais: às quintas-feiras, onze horas e trinta minutos;
e) Comissão de Relações Exteriores e Defesa Nacional: às quintas-feiras, dez horas;
f) Comissão de Educação, Cultura e Esporte: às terças-feiras, onze horas;
g) Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor: às terças-feiras, onze horas e trinta minutos;
h) Comissão de Direitos Humanos e Legislação Participativa: às terças-feiras, doze horas;
i) Comissão de Desenvolvimento Regional e Turismo: às quartas-feiras, quatorze horas;
j) Comissão de Agricultura e Reforma Agrária: às quintas-feiras, doze horas;
k) Comissão de Ciência, Tecnologia, Inovação, Comunicação e Informática: às quartas-feiras, dezoito horas;
l) Comissão de Meio Ambiente: às quartas-feiras, às onze horas e trinta minutos.
II - se extraordinárias, mediante convocação especial para dia, horário e fim indicados, observando-se, no que for aplicável, o disposto neste Regimento sobre a convocação de sessões extraordinárias do Senado;
III - as comissões parlamentares de inquérito reunir-se-ão em horário diverso do estabelecido para o funcionamento das Comissões Permanentes.
Parágrafo único. Em qualquer hipótese, a reunião de comissão permanente ou temporária não poderá coincidir com o tempo reservado à Ordem do Dia das sessões deliberativas ordinárias do Senado.
  */
  },
  108:{
    caput: 'As reuniões das comissões serão iniciadas com a presença de, no mínimo, um quinto de sua composição, salvo o disposto no § 3º do art. 93.'
  /*
  § 1º A pauta dos trabalhos das comissões, salvo em caso de urgência, será disponibilizada em meio eletrônico no portal do Senado Federal, com antecedência mínima de 2 (dois) dias úteis.
§ 2º É facultada a utilização de sistema biométrico de identificação no registro de presença dos membros da comissão.
§ 3º A suspensão de reunião de comissão somente será permitida quando sua continuação ocorrer em data e hora previamente estabelecidas.
  */
  },
  109:{
    caput: 'A comissão deliberará por maioria de votos, presente a maioria de seus membros, sendo as deliberações terminativas tomadas pelo processo nominal.'
  /*
  */
  },
  110:{
    caput: 'As reuniões serão públicas, salvo os casos expressos neste Regimento ou quando o deliberar a comissão.'
  /*
  */
  },
  111:{
    caput: 'Os trabalhos das comissões iniciar-se-ão, salvo deliberação em contrário, pela leitura e discussão da ata da reunião anterior que, se aprovada, será assinada pelo Presidente.'
  /*
  */
  },
  112:{
    caput: 'É facultado a qualquer Senador assistir às reuniões das comissões, discutir o assunto em debate, pelo prazo por elas prefixado, e enviar-lhes, por escrito, informações ou esclarecimentos.'
  /*
  Parágrafo único. As informações ou esclarecimentos apresentados serão impressos com os pareceres, se o autor o requerer e a comissão o deferir.
  */
  },
  113:{
    caput: 'O estudo de qualquer matéria poderá ser feito em reunião conjunta de duas ou mais comissões, por iniciativa de qualquer delas, aceita pelas demais, sob a direção do Presidente mais idoso, ou ainda, nos termos do art. 49, II.'
  /*
  Parágrafo único. Nas reuniões conjuntas observar-se-ão as seguintes normas:
I - cada comissão deverá estar presente pela maioria absoluta de seus membros;
II - o estudo da matéria será em conjunto, mas a votação far-se-á separadamente, na ordem constante do despacho da Mesa;
III - cada comissão poderá ter o seu relator se não preferir relator único;
IV - o parecer das comissões poderá ser em conjunto, desde que consigne a manifestação de cada uma delas, ou em separado, se essa for a orientação preferida, mencionando, em qualquer caso, os votos vencidos, os em separado, os pelas conclusões e os com restrições.
  */
  },
  114:{
    caput: 'As comissões permanentes e temporárias serão secretariadas por servidores da Secretaria do Senado e terão assessoramento próprio, constituído de até três assessores, designados pelo respectivo Presidente, ouvida a Consultoria Legislativa ou a de Orçamentos, conforme o caso.'
  /*
  Parágrafo único. Ao secretário da comissão compete:
I - redigir as atas;
II - organizar a pauta do dia e do protocolo dos trabalhos com o seu andamento;
III - manter atualizados os registros necessários ao controle de designação de relatores.
  */
  },
  115:{
    caput: 'Das reuniões das comissões lavrar-se-ão atas em folhas avulsas rubricadas pelo Presidente.'
  /*
  § 1º Quando, pela importância do assunto em estudo, convier o registro taquigráfico dos debates, o Presidente solicitará ao Primeiro Secretário as providências necessárias.
§ 2º Das atas constarão:
I - o dia, a hora e o local da reunião;
II - os nomes dos membros presentes e os dos ausentes com causa justificada ou sem ela;
III - a distribuição das matérias por assuntos e relatores;
IV - as conclusões dos pareceres lidos;
V - referências sucintas aos debates;
VI - os pedidos de vista, adiamento, diligências e outras providências, salvo quando não se considere conveniente a divulgação da matéria.
§ 3º As atas serão publicadas no Diário do Senado Federal, dentro dos dois dias úteis que se seguirem à reunião, podendo, em casos excepcionais, a juízo do Presidente da comissão, ser essa publicação adiada por igual prazo.
  */
  },
  116:{
    caput: 'Serão secretas as reuniões para deliberar sobre:'
  /*
  I - declaração de guerra ou celebração de paz (Const., art. 49, II);
II - trânsito ou permanência temporária de forças estrangeiras no território nacional (Const., art. 49, II);
III - escolha de chefe de missão diplomática de caráter permanente (Const., art. 52, IV);
§ 1º Nas reuniões secretas, quando houver parecer a proferir, lido o relatório, que não será conclusivo, a comissão deliberará em escrutínio secreto, completando-se o parecer com o resultado da votação, não sendo consignadas restrições, declarações de voto ou votos em separado.
§ 2º Nas reuniões secretas, servirá como secretário um dos membros da comissão, designado pelo Presidente.
§ 3º A ata deverá ser aprovada ao fim da reunião, assinada por todos os membros presentes, encerrada em sobrecarta lacrada, datada e rubricada pelo Presidente e pelo Secretário e recolhida ao Arquivo do Senado.
  */
  },
  117:{
    caput: 'Nas reuniões secretas, além dos membros da comissão, só será admitida a presença de Senadores e das pessoas a serem ouvidas sobre a matéria em debate.'
  /*
  Parágrafo único. Os Deputados Federais poderão assistir às reuniões secretas que não tratarem de matéria da competência privativa do Senado Federal.
  */
  },
  118:{
    caput: 'O exame das comissões sobre as proposições, excetuadas as emendas e os casos em que este Regimento determine em contrário, obedecerá aos seguintes prazos:'
  /*
  I - vinte dias úteis para a Comissão de Constituição, Justiça e Cidadania;
II - quinze dias úteis para as demais comissões.
§ 1º Sobre as emendas, o prazo é de quinze dias úteis, correndo em conjunto se tiver que ser ouvida mais de uma comissão.
§ 2º Se a comissão não puder proferir o parecer no prazo, tê-lo-á prorrogado, por igual período, desde que o seu Presidente envie à Mesa, antes de seu término, comunicação escrita, que será lida no Período do Expediente e publicada no Diário do Senado Federal. Posterior prorrogação só poderá ser concedida por prazo determinado e mediante deliberação do Senado.
§ 3º O prazo da comissão ficará suspenso pelo encerramento da sessão legislativa, continuando a correr na sessão imediata, salvo quanto aos projetos a que se refere o art. 375, e renovar-se-á pelo início de nova legislatura ou por designação de novo relator.
§ 4º Será suspenso o prazo da comissão durante o período necessário ao cumprimento das disposições previstas no art. 90, II, III, V e XIII.
§ 5º O prazo da comissão não se suspenderá nos projetos sujeitos a prazos de tramitação.
  */
  },
  119:{
    caput: 'Quando a matéria for despachada a mais de uma comissão e a primeira esgotar o prazo sem sobre ela se manifestar, poderá ser dispensado o seu parecer, por deliberação do Plenário, a requerimento de qualquer Senador.'
  /*
  Parágrafo único. Se uma das comissões considerar indispensável, antes de proferir o seu parecer, o exame da que houver excedido o prazo, proposta neste sentido será submetida à deliberação do Plenário.
  */
  },
  120:{
    caput: 'O relator tem, para apresentar o relatório, a metade do prazo atribuído à comissão.'
  /*
  */
  },
  121:{
    caput: 'O Presidente da comissão, ex officio ou a requerimento de Senador, poderá mandar incluir, na pauta dos trabalhos, matéria que, distribuída, não tenha sido relatada no prazo regimental, devendo dar conhecimento da decisão ao relator.'
  /*
  */
  },
  122:{
    caput: 'Perante as comissões, poderão apresentar emendas:'
  /*
  I - qualquer de seus membros, em todos os casos;
II - qualquer Senador:
a) aos projetos de código;
b) aos projetos de iniciativa do Presidente da República com tramitação urgente (Const., art. 64, § 1º);
c) aos projetos referidos no art. 91.
§ 1º No caso do inciso II, o prazo para a apresentação de emenda contar-se-á a partir da publicação da matéria no Diário do Senado Federal, sendo de vinte dias úteis para os projetos de Código e de cinco dias úteis para os demais projetos.
§ 2º No avulso eletrônico da Ordem do Dia consignar-se-á a existência de projetos em fase de recebimento de emendas, com a indicação da comissão que deverá recebê-las, do prazo e do número de dias transcorridos.
  */
  },
  123:{
    caput: 'Considera-se emenda de comissão a proposta por qualquer de seus membros e por ela adotada.'
  /*
  */
  },
  124:{
    caput: 'Terá o seguinte tratamento a emenda apresentada na forma do art. 122:'
  /*
  I - no caso do inciso I, será considerada inexistente quando não adotada pela comissão;
II - no caso do inciso II, alínea a, será encaminhada à deliberação do Plenário do Senado, com parecer favorável ou contrário;
III - no caso do inciso II, alínea b, será final o pronunciamento, salvo recurso interposto por um décimo dos membros do Senado no sentido de ser a emenda submetida ao Plenário, sem discussão;
IV - no caso do inciso II, alínea c, será final o pronunciamento da comissão, salvo recurso interposto para discussão e votação da proposição principal.
  */
  },
  125:{
    caput: 'Quando a proposição estiver sujeita, na forma deste Regimento, a parecer em Plenário, o relator, ao proferi-lo, poderá oferecer emenda ou subemenda.'
  /*
  */
  },
  126:{
    caput: 'A designação de relator, independente da matéria e de reunião da comissão, obedecerá à proporção das representações partidárias ou dos blocos parlamentares nela existentes, será alternada entre os seus membros e far-se-á em dois dias úteis após o recebimento do projeto, salvo nos casos em que este Regimento fixe outro prazo.'
  /*
  § 1º O relator do projeto será o das emendas a este oferecidas em plenário, salvo ausência ou recusa.
§ 2º Quando se tratar de emenda oferecida pelo relator, em plenário, o Presidente da comissão designará outro Senador para relatá-la, sendo essa circunstância consignada no parecer.
  */
  },
  127:{
    caput: 'Não poderá funcionar como relator o autor da proposição.'
  /*
  */
  },
  128:{
    caput: 'Vencido o relator, o Presidente da comissão designará um dos membros, em maioria, para suceder-lhe, exceto se o fato ocorrer apenas em relação a parte da proposição ou emenda, quando permanecerá o mesmo relator, consignando-se no parecer, pormenorizadamente, o objeto do dissenso na deliberação da comissão.'
  /*
  */
  },
  129:{
    caput: 'O Presidente poderá, excepcionalmente, funcionar como relator.'
  /*
  */
  },
  130:{
    caput: 'As matérias que, em cada reunião, devam ser objeto de estudo, constarão de pauta previamente organizada, sendo relatadas na ordem em que nela figurarem, salvo preferência concedida para qualquer delas.'
  /*
  */
  },
  131:{
    caput: 'O relatório deverá ser oferecido por escrito.'
  /*
  */
  },
  132:{
    caput: 'Lido o relatório, desde que a maioria se manifeste de acordo com o relator, passará ele a constituir parecer.'
  /*
  § 1º O pedido de vista do processo somente poderá ser aceito por uma única vez e pelo prazo máximo e improrrogável de cinco dias, devendo ser formulado na oportunidade em que for conhecido o voto proferido pelo relator, obedecido o disposto no § 4º.
§ 2º Estando a matéria em regime de urgência, a vista somente poderá ser concedida:
I - por meia hora, no caso do art. 336, I;
II - por vinte e quatro horas, nos casos do art. 336, II e III.
§ 3º Quando se tratar de proposição com prazo determinado, a vista, desde que não ultrapasse os últimos dez dias de sua tramitação, poderá ser concedida por vinte e quatro horas.
§ 4º Os prazos a que se referem os §§ 1º a 3º correrão em conjunto se a vista for requerida por mais de um Senador.
§ 5º Verificando-se a hipótese prevista no art. 128, o parecer vencedor deverá ser apresentado na reunião ordinária imediata, salvo deliberação em contrário.
§ 6º Os membros da comissão que não concordarem com o relatório poderão:
I - dar voto em separado;
II - assiná-lo, uma vez constituído parecer, com restrições, pelas conclusões, ou declarando-se vencidos.
§ 7º Contam-se como favoráveis os votos pelas conclusões ou com restrições.
§ 8º (Revogado).
§ 9º Em caso de empate na votação, o Presidente a desempatará.
  */
  },
  133:{
    caput: 'Todo parecer deve ser conclusivo em relação à matéria a que se referir, podendo a conclusão ser:'
  /*
  I - pela aprovação, total ou parcial;
II - pela rejeição;
III - pelo arquivamento;
IV - pelo destaque, para proposição em separado, de parte da proposição principal, quando originária do Senado, ou de emenda;
V - pela apresentação de:
a) projeto;
b) requerimento;
c) emenda ou subemenda;
d) orientação a seguir em relação à matéria.
e) indicação, nos termos do art. 227-A, inciso II; (Incluído pela Resolução n.º 14, de 2019)
§ 1º Considera-se pela rejeição o parecer pelo arquivamento quando se referir a proposição legislativa.
§ 2º Nas hipóteses do inciso V, alíneas a, b e c, o parecer é considerado justificação da proposição apresentada.
§ 2º Nas hipóteses do inciso V, alíneas "a", "b", "c" e "e", o parecer é considerado justificação da proposição apresentada. (Redação dada pela Resolução n.º 14, de 2019)
§ 3º Sendo favorável o parecer apresentado sobre indicação, ofício, memorial ou outro documento contendo sugestão ou solicitação que dependa de proposição legislativa, esta deverá ser formalizada em conclusão.
§ 4º Quando se tratar de parecer sobre matéria que deva ser apreciada em sessão secreta (art. 197), proceder-se-á de acordo com o disposto no art. 116, § 1º.
§ 5º Quando o parecer se referir a emendas ou subemendas, deverá oferecer conclusão relativamente a cada uma.
§ 6º A comissão, ao se manifestar sobre emendas, poderá reunir a matéria da proposição principal e das emendas com parecer favorável num único texto, com os acréscimos e alterações que visem ao seu aperfeiçoamento.
§ 7º As emendas com parecer contrário das comissões serão submetidas ao Plenário, desde que a decisão do órgão técnico não alcance unanimidade de votos, devendo esta circunstância constar expressamente do parecer.
§ 8º Toda vez que a comissão concluir o seu parecer com sugestão ou proposta que envolva matéria de requerimento ou emenda, formalizará a proposição correspondente.
  */
  },
  134:{
    caput: 'O parecer conterá ementa indicativa da matéria a que se referir.'
  /*
  */
  },
  135:{
    caput: 'As comissões poderão, em seus pareceres, propor seja o assunto apreciado pelo Senado em sessão secreta, caso em que o respectivo processo será entregue ao Presidente da Mesa com o devido sigilo.'
  /*
  */
  },
  136:{
    caput: 'Uma vez assinados pelo Presidente e pelo relator e instruídos com a lista de presença dos membros da comissão, os pareceres serão enviados à Mesa, juntamente com as emendas relatadas, declarações de votos e votos em separado.'
  /*
  */
  },
  137:{
    caput: 'Os pareceres serão lidos em plenário, publicados no Diário do Senado Federal e em avulso eletrônico, após manifestação das comissões a que tenha sido despachada a matéria.'
  /*
  Parágrafo único. As comissões poderão promover, para estudos, a publicação de seus pareceres ao pé da ata da reunião ou em avulsos eletrônicos especiais.
  */
  },
  138:{
    caput: 'Se o parecer concluir por pedido de providências:'
  /*
  I - será despachado pelo Presidente da comissão quando solicitar audiência de outra comissão, reunião conjunta com outra comissão ou diligência interna de qualquer natureza;
II - será encaminhado à Mesa para despacho da Presidência ou deliberação do Plenário, nos demais casos.
§ 1º No caso de convocação de Ministro de Estado, será feita comunicação ao Presidente do Senado, que dela dará conhecimento ao Plenário.
§ 2º Se a providência pedida não depender de deliberação do Plenário, será tomada independentemente da publicação do parecer.
  */
  },
  139:{
    caput: 'No caso do art. 133, IV, a proposta será submetida ao Plenário antes do prosseguimento do estudo da matéria.'
  /*
  */
  },
  140:{
    caput: 'Os pareceres poderão ser proferidos oralmente, em plenário, por relator designado pelo Presidente da Mesa:'
  /*
  I - nas matérias em regime de urgência;
II - nas matérias incluídas em Ordem do Dia, nos termos do art. 172;
III - nas demais matérias em que este Regimento expressamente o permita.
§ 1º Se, ao ser chamado a emitir parecer, nos casos do art. 172, I e II, alíneas b, c e d, o relator requerer diligência, sendo esta deferida, o seu pronunciamento dar-se-á, em plenário, após o cumprimento do requerido.
§ 2º Para emitir parecer oral em plenário, o relator terá o prazo de trinta minutos.
  */
  },
  141:{
    caput: 'Se o parecer oral concluir pela apresentação de requerimento, projeto ou emenda, o texto respectivo deverá ser remetido à Mesa, por escrito, assinado pelo relator.'
  /*
  */
  },
  142:{
    caput: 'Quando as comissões se ocuparem de assuntos de interesse particular, procederem a inquérito, tomarem depoimentos e informações, ou praticarem outras diligências semelhantes, poderão solicitar, das autoridades legislativas, judiciárias ou administrativas, das entidades autárquicas, sociedades de economia mista e empresas concessionárias de serviços públicos, quaisquer documentos ou informações e permitir às pessoas diretamente interessadas a defesa dos seus direitos, por escrito ou oralmente.'
  /*
  */
  },
  143:{
    caput: 'Quando a comissão julgar que a petição, memorial, representação ou outro documento não deva ter andamento, mandá-lo-á arquivar, por proposta de qualquer de seus membros, comunicando o fato à Mesa.'
  /*
  § 1º A comunicação será lida no período do Expediente, publicada no Diário do Senado Federal e encaminhada ao arquivo com o documento que lhe deu origem.
§ 2º O exame do documento poderá ser reaberto se o Plenário o deliberar, a requerimento de qualquer Senador.
§ 3º A comissão não poderá encaminhar à Câmara dos Deputados ou a outro órgão do Poder Público qualquer documento que lhe tenha sido enviado.
  */
  },
  144:{
    caput: 'Quanto ao documento de natureza sigilosa, observar-se-ão, no trabalho das comissões, as seguintes normas:'
  /*
  I - não será lícito transcrevê-lo, no todo ou em parte, nos pareceres e expediente de curso ostensivo;
II - se houver sido encaminhado ao Senado em virtude de requerimento formulado perante a comissão, o seu Presidente dele dará conhecimento ao requerente, em particular;
III - se a matéria interessar à comissão, ser-lhe-á dada a conhecer em reunião secreta;
IV - se destinado a instruir o estudo de matéria em curso no Senado, será encerrado em sobrecarta, rubricada pelo Presidente da comissão, que acompanhará o processo em toda a sua tramitação;
V - quando o parecer contiver matéria de natureza sigilosa, será objeto das cautelas descritas no inciso IV.
Parágrafo único. A inobservância do caráter secreto, confidencial ou reservado, de documentos de interesse de qualquer comissão sujeitará o infrator à pena de responsabilidade, apurada na forma da lei.
  */
  },
  145:{
    caput: 'A criação de comissão parlamentar de inquérito será feita mediante requerimento de um terço dos membros do Senado Federal.'
  /*
  § 1º O requerimento de criação da comissão parlamentar de inquérito determinará o fato a ser apurado, o número de membros, o prazo de duração da comissão e o limite das despesas a serem realizadas.
§ 2º Recebido o requerimento, o Presidente ordenará que seja numerado e publicado.
§ 3º O Senador só poderá integrar duas comissões parlamentares de inquérito, uma como titular, outra como suplente.
§ 4º A comissão terá suplentes, em número igual à metade do número dos titulares mais um, escolhidos no ato da designação destes, observadas as normas constantes do art. 78.
  */
  },
  146:{
    caput: 'Não se admitirá comissão parlamentar de inquérito sobre matérias pertinentes:'
  /*
  I - à Câmara dos Deputados;
II - às atribuições do Poder Judiciário;
III - aos Estados.
  */
  },
  147:{
    caput: 'Na hipótese de ausência do relator a qualquer ato do inquérito, poderá o Presidente da comissão designar-lhe substituto para a ocasião, mantida a escolha na mesma representação partidária ou bloco parlamentar.'
  /*
  */
  },
  148:{
    caput: 'No exercício das suas atribuições, a comissão parlamentar de inquérito terá poderes de investigação próprios das autoridades judiciais, facultada a realização de diligências que julgar necessárias, podendo convocar Ministros de Estado, tomar o depoimento de qualquer autoridade, inquirir testemunhas, sob compromisso, ouvir indiciados, requisitar de órgão público informações ou documentos de qualquer natureza, bem como requerer ao Tribunal de Contas da União a realização de inspeções e auditorias que entender necessárias.'
  /*
  § 1º No dia previamente designado, se não houver número para deliberar, a comissão parlamentar de inquérito poderá tomar depoimento das testemunhas ou autoridades convocadas, desde que estejam presentes o Presidente e o relator.
§ 2º Os indiciados e testemunhas serão intimados de acordo com as prescrições estabelecidas na legislação processual penal, aplicando-se, no que couber, a mesma legislação, na inquirição de testemunhas e autoridades.
  */
  },
  149:{
    caput: 'O Presidente da comissão parlamentar de inquérito, por deliberação desta, poderá incumbir um dos seus membros ou funcionários da Secretaria do Senado da realização de qualquer sindicância ou diligência necessária aos seus trabalhos.'
  /*
  */
  },
  150:{
    caput: 'Ao término de seus trabalhos, a comissão parlamentar de inquérito enviará à Mesa, para conhecimento do Plenário, seu relatório e conclusões.'
  /*
  § 1º A comissão poderá concluir seu relatório por projeto de resolução se o Senado for competente para deliberar a respeito.
§ 2º Sendo diversos os fatos objeto de inquérito, a comissão dirá, em separado, sobre cada um, podendo fazê-lo antes mesmo de finda a investigação dos demais.
  */
  },
  151:{
    caput: 'A comissão parlamentar de inquérito encaminhará suas conclusões, se for o caso, ao Ministério Público, para que promova a responsabilidade civil ou criminal dos infratores.'
  /*
  */
  },
  152:{
    caput: 'O prazo da comissão parlamentar de inquérito poderá ser prorrogado, automaticamente, a requerimento de um terço dos membros do Senado, comunicado por escrito à Mesa, lido em plenário e publicado no Diário do Senado Federal, observado o disposto no art. 76, § 4º.'
  /*
  */
  },
  153:{
    caput: 'Nos atos processuais, aplicar-se-ão, subsidiariamente, as disposições do Código de Processo Penal.'
  /*
  */
  },
  154:{
    caput: ''
  /*
  */
  },
  155:{
    caput: ''
  /*
  */
  },
  156:{
    caput: ''
  /*
  */
  },
  157:{
    caput: ''
  /*
  */
  },
  158:{
    caput: ''
  /*
  */
  },
  159:{
    caput: ''
  /*
  */
  },
  160:{
    caput: ''
  /*
  */
  },
  161:{
    caput: ''
  /*
  */
  },
  162:{
    caput: ''
  /*
  */
  },
  163:{
    caput: ''
  /*
  */
  },
  164:{
    caput: ''
  /*
  */
  },
  165:{
    caput: ''
  /*
  */
  },
  166:{
    caput: ''
  /*
  */
  },
  167:{
    caput: ''
  /*
  */
  },
  168:{
    caput: ''
  /*
  */
  },
  169:{
    caput: ''
  /*
  */
  },
  170:{
    caput: ''
  /*
  */
  },
  171:{
    caput: ''
  /*
  */
  },
  172:{
    caput: ''
  /*
  */
  },
  173:{
    caput: ''
  /*
  */
  },
  174:{
    caput: ''
  /*
  */
  },
  175:{
    caput: ''
  /*
  */
  },
  176:{
    caput: ''
  /*
  */
  },
  177:{
    caput: ''
  /*
  */
  },
  178:{
    caput: ''
  /*
  */
  },
  179:{
    caput: ''
  /*
  */
  },
  180:{
    caput: ''
  /*
  */
  },
  181:{
    caput: ''
  /*
  */
  },
  182:{
    caput: ''
  /*
  */
  },
  183:{
    caput: ''
  /*
  */
  },
  184:{
    caput: ''
  /*
  */
  },
  185:{
    caput: ''
  /*
  */
  },
  186:{
    caput: ''
  /*
  */
  },
  187:{
    caput: ''
  /*
  */
  },
  188:{
    caput: ''
  /*
  */
  },
  189:{
    caput: ''
  /*
  */
  },
  190:{
    caput: ''
  /*
  */
  },
  191:{
    caput: ''
  /*
  */
  },
  192:{
    caput: ''
  /*
  */
  },
  193:{
    caput: ''
  /*
  */
  },
  194:{
    caput: ''
  /*
  */
  },
  195:{
    caput: ''
  /*
  */
  },
  196:{
    caput: ''
  /*
  */
  },
  197:{
    caput: ''
  /*
  */
  },
  198:{
    caput: ''
  /*
  */
  },
  199:{
    caput: ''
  /*
  */
  },
  200:{
    caput: ''
  /*
  */
  },
  201:{
    caput: ''
  /*
  */
  },
  202:{
    caput: ''
  /*
  */
  },
  203:{
    caput: ''
  /*
  */
  },
  204:{
    caput: ''
  /*
  */
  },
  205:{
    caput: ''
  /*
  */
  },
  206:{
    caput: ''
  /*
  */
  },
  207:{
    caput: ''
  /*
  */
  },
  208:{
    caput: ''
  /*
  */
  },
  209:{
    caput: ''
  /*
  */
  },
  210:{
    caput: ''
  /*
  */
  },
  211:{
    caput: ''
  /*
  */
  },
  212:{
    caput: ''
  /*
  */
  },
  213:{
    caput: ''
  /*
  */
  },
  214:{
    caput: ''
  /*
  */
  },
  215:{
    caput: ''
  /*
  */
  },
  216:{
    caput: ''
  /*
  */
  },
  217:{
    caput: ''
  /*
  */
  },
  218:{
    caput: ''
  /*
  */
  },
  219:{
    caput: ''
  /*
  */
  },
  220:{
    caput: ''
  /*
  */
  },
  221:{
    caput: ''
  /*
  */
  },
  222:{
    caput: ''
  /*
  */
  },
  223:{
    caput: ''
  /*
  */
  },
  224:{
    caput: ''
  /*
  */
  },
  225:{
    caput: ''
  /*
  */
  },
  226:{
    caput: ''
  /*
  */
  },
  227:{
    caput: ''
  /*
  */
  },
  228:{
    caput: ''
  /*
  */
  },
  229:{
    caput: ''
  /*
  */
  },
  230:{
    caput: ''
  /*
  */
  },
  231:{
    caput: ''
  /*
  */
  },
  232:{
    caput: ''
  /*
  */
  },
  233:{
    caput: ''
  /*
  */
  },
  234:{
    caput: ''
  /*
  */
  },
  235:{
    caput: ''
  /*
  */
  },
  236:{
    caput: ''
  /*
  */
  },
  237:{
    caput: ''
  /*
  */
  },
  238:{
    caput: ''
  /*
  */
  },
  239:{
    caput: ''
  /*
  */
  },
  240:{
    caput: ''
  /*
  */
  },
  241:{
    caput: ''
  /*
  */
  },
  242:{
    caput: ''
  /*
  */
  },
  243:{
    caput: ''
  /*
  */
  },
  244:{
    caput: ''
  /*
  */
  },
  245:{
    caput: ''
  /*
  */
  },
  246:{
    caput: ''
  /*
  */
  },
  247:{
    caput: ''
  /*
  */
  },
  248:{
    caput: ''
  /*
  */
  },
  249:{
    caput: ''
  /*
  */
  },
  250:{
    caput: ''
  /*
  */
  },
  251:{
    caput: ''
  /*
  */
  },
  252:{
    caput: ''
  /*
  */
  },
  253:{
    caput: ''
  /*
  */
  },
  254:{
    caput: ''
  /*
  */
  },
  255:{
    caput: ''
  /*
  */
  },
  256:{
    caput: ''
  /*
  */
  },
  257:{
    caput: ''
  /*
  */
  },
  258:{
    caput: ''
  /*
  */
  },
  259:{
    caput: ''
  /*
  */
  },
  260:{
    caput: ''
  /*
  */
  },
  261:{
    caput: ''
  /*
  */
  },
  262:{
    caput: ''
  /*
  */
  },
  263:{
    caput: ''
  /*
  */
  },
  264:{
    caput: ''
  /*
  */
  },
  265:{
    caput: ''
  /*
  */
  },
  266:{
    caput: ''
  /*
  */
  },
  267:{
    caput: ''
  /*
  */
  },
  268:{
    caput: ''
  /*
  */
  },
  269:{
    caput: ''
  /*
  */
  },
  270:{
    caput: ''
  /*
  */
  },
  271:{
    caput: ''
  /*
  */
  },
  272:{
    caput: ''
  /*
  */
  },
  273:{
    caput: ''
  /*
  */
  },
  274:{
    caput: ''
  /*
  */
  },
  275:{
    caput: ''
  /*
  */
  },
  276:{
    caput: ''
  /*
  */
  },
  277:{
    caput: ''
  /*
  */
  },
  278:{
    caput: ''
  /*
  */
  },
  279:{
    caput: ''
  /*
  */
  },
  280:{
    caput: ''
  /*
  */
  },
  281:{
    caput: ''
  /*
  */
  },
  282:{
    caput: ''
  /*
  */
  },
  283:{
    caput: ''
  /*
  */
  },
  284:{
    caput: ''
  /*
  */
  },
  285:{
    caput: ''
  /*
  */
  },
  286:{
    caput: ''
  /*
  */
  },
  287:{
    caput: ''
  /*
  */
  },
  288:{
    caput: ''
  /*
  */
  },
  289:{
    caput: ''
  /*
  */
  },
  290:{
    caput: ''
  /*
  */
  },
  291:{
    caput: ''
  /*
  */
  },
  292:{
    caput: ''
  /*
  */
  },
  293:{
    caput: ''
  /*
  */
  },
  294:{
    caput: ''
  /*
  */
  },
  295:{
    caput: ''
  /*
  */
  },
  296:{
    caput: ''
  /*
  */
  },
  297:{
    caput: ''
  /*
  */
  },
  298:{
    caput: ''
  /*
  */
  },
  299:{
    caput: ''
  /*
  */
  },
  300:{
    caput: ''
  /*
  */
  },
  301:{
    caput: ''
  /*
  */
  },
  302:{
    caput: ''
  /*
  */
  },
  303:{
    caput: ''
  /*
  */
  },
  304:{
    caput: ''
  /*
  */
  },
  305:{
    caput: ''
  /*
  */
  },
  306:{
    caput: ''
  /*
  */
  },
  307:{
    caput: ''
  /*
  */
  },
  308:{
    caput: ''
  /*
  */
  },
  309:{
    caput: ''
  /*
  */
  },
  310:{
    caput: ''
  /*
  */
  },
  311:{
    caput: ''
  /*
  */
  },
  312:{
    caput: ''
  /*
  */
  },
  313:{
    caput: ''
  /*
  */
  },
  314:{
    caput: ''
  /*
  */
  },
  315:{
    caput: ''
  /*
  */
  },
  316:{
    caput: ''
  /*
  */
  },
  317:{
    caput: ''
  /*
  */
  },
  318:{
    caput: ''
  /*
  */
  },
  319:{
    caput: ''
  /*
  */
  },
  320:{
    caput: ''
  /*
  */
  },
  321:{
    caput: ''
  /*
  */
  },
  322:{
    caput: ''
  /*
  */
  },
  323:{
    caput: ''
  /*
  */
  },
  324:{
    caput: ''
  /*
  */
  },
  325:{
    caput: ''
  /*
  */
  },
  326:{
    caput: ''
  /*
  */
  },
  327:{
    caput: ''
  /*
  */
  },
  328:{
    caput: ''
  /*
  */
  },
  329:{
    caput: ''
  /*
  */
  },
  330:{
    caput: ''
  /*
  */
  },
  331:{
    caput: ''
  /*
  */
  },
  332:{
    caput: ''
  /*
  */
  },
  333:{
    caput: ''
  /*
  */
  },
  334:{
    caput: ''
  /*
  */
  },
  335:{
    caput: ''
  /*
  */
  },
  336:{
    caput: ''
  /*
  */
  },
  337:{
    caput: ''
  /*
  */
  },
  338:{
    caput: ''
  /*
  */
  },
  339:{
    caput: ''
  /*
  */
  },
  340:{
    caput: ''
  /*
  */
  },
  341:{
    caput: ''
  /*
  */
  },
  342:{
    caput: ''
  /*
  */
  },
  343:{
    caput: ''
  /*
  */
  },
  344:{
    caput: ''
  /*
  */
  },
  345:{
    caput: ''
  /*
  */
  },
  346:{
    caput: ''
  /*
  */
  },
  347:{
    caput: ''
  /*
  */
  },
  348:{
    caput: ''
  /*
  */
  },
  349:{
    caput: ''
  /*
  */
  },
  350:{
    caput: ''
  /*
  */
  },
  351:{
    caput: ''
  /*
  */
  },
  352:{
    caput: ''
  /*
  */
  },
  353:{
    caput: ''
  /*
  */
  },
  354:{
    caput: ''
  /*
  */
  },
  355:{
    caput: ''
  /*
  */
  },
  356:{
    caput: ''
  /*
  */
  },
  357:{
    caput: ''
  /*
  */
  },
  358:{
    caput: ''
  /*
  */
  },
  359:{
    caput: ''
  /*
  */
  },
  360:{
    caput: ''
  /*
  */
  },
  361:{
    caput: ''
  /*
  */
  },
  362:{
    caput: ''
  /*
  */
  },
  363:{
    caput: ''
  /*
  */
  },
  364:{
    caput: ''
  /*
  */
  },
  365:{
    caput: ''
  /*
  */
  },
  366:{
    caput: ''
  /*
  */
  },
  367:{
    caput: ''
  /*
  */
  },
  368:{
    caput: ''
  /*
  */
  },
  369:{
    caput: ''
  /*
  */
  },
  370:{
    caput: ''
  /*
  */
  },
  371:{
    caput: ''
  /*
  */
  },
  372:{
    caput: ''
  /*
  */
  },
  373:{
    caput: ''
  /*
  */
  },
  374:{
    caput: ''
  /*
  */
  },
  375:{
    caput: ''
  /*
  */
  },
  376:{
    caput: ''
  /*
  */
  },
  377:{
    caput: ''
  /*
  */
  },
  378:{
    caput: ''
  /*
  */
  },
  379:{
    caput: ''
  /*
  */
  },
  380:{
    caput: ''
  /*
  */
  },
  381:{
    caput: ''
  /*
  */
  },
  382:{
    caput: ''
  /*
  */
  },
  383:{
    caput: ''
  /*
  */
  },
  384:{
    caput: ''
  /*
  */
  },
  385:{
    caput: ''
  /*
  */
  },
  386:{
    caput: ''
  /*
  */
  },
  387:{
    caput: ''
  /*
  */
  },
  388:{
    caput: ''
  /*
  */
  },
  389:{
    caput: ''
  /*
  */
  },
  390:{
    caput: ''
  /*
  */
  },
  391:{
    caput: ''
  /*
  */
  },
  392:{
    caput: ''
  /*
  */
  },
  393:{
    caput: ''
  /*
  */
  },
  394:{
    caput: ''
  /*
  */
  },
  395:{
    caput: ''
  /*
  */
  },
  396:{
    caput: ''
  /*
  */
  },
  397:{
    caput: ''
  /*
  */
  },
  398:{
    caput: ''
  /*
  */
  },
  399:{
    caput: ''
  /*
  */
  },
  400:{
    caput: ''
  /*
  */
  },
  401:{
    caput: ''
  /*
  */
  },
  402:{
    caput: ''
  /*
  */
  },
  403:{
    caput: ''
  /*
  */
  },
  404:{
    caput: ''
  /*
  */
  },
  405:{
    caput: ''
  /*
  */
  },
  406:{
    caput: ''
  /*
  */
  },
  407:{
    caput: ''
  /*
  */
  },
  408:{
    caput: ''
  /*
  */
  },
  409:{
    caput: ''
  /*
  */
  },
  410:{
    caput: ''
  /*
  */
  },
  411:{
    caput: ''
  /*
  */
  },
  412:{
    caput: ''
  /*
  */
  },
  413:{
    caput: ''
  /*
  */
  }
}

function getArtigos(){
  /*
  if(arguments.length === 2) console.log('arguments:', arguments[0], arguments[1])
  else console.log('arguments:', arguments[0])
  */
  return arguments.length === 2 ?
      Object.keys(artigos)
      .slice(arguments[0]-1, arguments[1])
      .reduce( (obj, numArtigo) => {return {...obj, [numArtigo] : artigos[numArtigo]} }, {})
      : {[arguments[0]]: artigos[arguments[0]]}
}

export { artigos, getArtigos }
