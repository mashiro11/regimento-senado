import { getArtigos } from './artigos'
import definicoes from './definicoes'

const regimento = {
  groupName: "Título",
  group:{
    'DO FUNCIONAMENTO':{
      groupName: "Capítulo",
      group:{
        'DA SEDE':{
          artigos: getArtigos(1)
        },
        'DAS SESSÕES':{
          artigos: getArtigos(2)
        },
        'DAS REUNIÕES PREPARATÓRIAS':{
          artigos: getArtigos(3)
        }
      }
    },
    'DOS SENADORES':{
      groupName: "Capítulo",
      group:{
        'DA POSSE':{
          artigos: getArtigos(4, 7)
        },
        'DO EXERCÍCIO':{
          artigos: getArtigos(8, 9)
        },
        'DOS ASSENTAMENTOS':{
          artigos: getArtigos(10, 11)
        },
        'DA REMUNERAÇÃO':{
          artigos: getArtigos(12, 13)
        },
        'DO USO DA PALAVRA':{
          artigos: getArtigos(14, 21)
        },
        'DAS MEDIDAS DISCIPLINARES':{
          artigos: getArtigos(22, 25)
        },
        'DAS HOMENAGENS DEVIDAS EM CASO DE FALECIMENTO':{
          artigos: getArtigos(26, 27)
        },
        'DAS VAGAS':{
          artigos: getArtigos(28, 35)
        },
        'DA SUSPENSÃO DAS IMUNIDADES':{
          artigos: getArtigos(36, 37)
        },
        'DA AUSÊNCIA E DA LICENÇA':{
          artigos: getArtigos(38, 44)
        },
        'DA CONVOCAÇÃO DE SUPLENTE':{
          artigos: getArtigos(45)
        }
      }
    },
    'DA MESA':{
      groupName: "Capítulo",
      group:{
        'DA COMPOSIÇÃO':{
          artigos: getArtigos(46, 47)
        },
        'DAS ATRIBUIÇÕES':{
          artigos: getArtigos(48, 58)
        },
        'DA ELEIÇÃO':{
          artigos: getArtigos(59, 60)
        }
      }
    },
    'DOS BLOCOS PARLAMENTARES, DA MAIORIA, DA MINORIA E DAS LIDERANÇAS':{
      artigos: getArtigos(61, 66)
    },
    'DA REPRESENTAÇÃO EXTERNA':{
      artigos: getArtigos(67, 70)
    },
    'DAS COMISSÕES':{
      groupName: "Capítulo",
      group:{
        'DAS COMISSÕES PERMANENTES E TEMPORÁRIAS':{
          artigos: getArtigos(71, 76)
        },
        'DA COMPOSIÇÃO':{
          artigos: getArtigos(77, 78)
        },
        'DA ORGANIZAÇÃO':{
          artigos: getArtigos(79, 82)
        },
        'DA SUPLÊNCIA, DAS VAGAS E DAS SUBSTITUIÇÕES':{
          artigos: getArtigos(83, 87)
        },
        'DA DIREÇÃO':{
          artigos: getArtigos(88, 89)
        },
        'DA COMPETÊNCIA':{
          sessoes:{
            'Disposições Gerais':{
              artigos: getArtigos(90, 96)
            },
            'Das Atribuições Específicas':{
              artigos: getArtigos(97, 105)
            }
          }
        },
        'DAS REUNIÕES':{
          artigos: getArtigos(106, 117)
        },

        'DOS PRAZOS':{
          artigos: getArtigos(118, 121)
        },
        'DAS EMENDAS APRESENTADAS PERANTE AS COMISSÕES':{
            artigos: getArtigos(122, 125)
        },
        'DOS RELATÓRIOS':{
            artigos: getArtigos(126, 129)
        },
        'DOS RELATÓRIOS PARECERES':{
          'Dos Relatórios':{
            artigos: getArtigos(130, 132)
          },
          'Dos Pareceres':{
            artigos: getArtigos(133, 141)
          }
        },
        'DAS DILIGÊNCIAS':{
          artigos: getArtigos(142)
        },
        'DA APRECIAÇÃO DOS DOCUMENTOS ENVIADOS ÀS COMISSÕES':{
          artigos: getArtigos(143, 144)
        },
        'DAS COMISSÕES PARLAMENTARES DE INQUÉRITO':{
          artigos: getArtigos(145, 153)
        },
      }
    },
    'DAS SESSÕES':{
      groupName: "Capítulo",
      group:{
        'DA NATUREZA DAS SESSÕES':{
          artigos: getArtigos(154)
        },
        'DA SESSÃO PÚBLICA':{
          artigos: getArtigos(155)
        },
        'DA SESSÃO SECRETA':{
          artigos: getArtigos(156, 161)
        },
        'DA SESSÃO ESPECIAL':{
          artigos: getArtigos(162, 176)
        },
        'DAS ATAS E DOS ANAIS DAS SESSÕES':{
          artigos: getArtigos(177, 179)
        }
      }
    },
    'DAS PROPOSIÇÕES':{
      groupName: "Capítulo",
      group:{
        'DAS ESPÉCIES':{
          groupName: "Seção",
          group:{
            'Das Propostas de Emenda à Constituição':{
              artigos: getArtigos(180, 181)
            },
            'Dos Projetos':{
              groupName: "Subseção",
              group:{
                'Dos Projetos em Geral':{
                  artigos: getArtigos(182, 185)
                },
                'Dos Projetos de Lei de Consolidação':{
                  artigos: getArtigos(186)
                }
              }
            },
            'Dos Requerimentos':{
              'Disposições Gerais':{
              },
              'Dos Requerimentos de Informações':{
                artigos: getArtigos(187, 189)
              },
              'Dos Requerimentos de Homenagem de Pesar':{
                artigos: getArtigos(190, 198)
              },
              'Dos Requerimentos de Voto de Aplauso ou Semelhante':{
                artigos: getArtigos(199, 200)
              },
            },
            'Das Indicações':{
                artigos: getArtigos(201, 208)
            },
            'Dos Pareceres':{
              artigos: getArtigos(209, 210)
            },
            'Das Emendas':{
              artigos: getArtigos(328, 331)
            }
          }
        },
        'DA APRESENTAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DA LEITURA DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DA AUTORIA':{
          artigos: getArtigos(328, 331)
        },
        'DA NUMERAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DO APOIAMENTO DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DA PUBLICAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DA TRAMITAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(328, 331)
        },
        'DA APRECIAÇÃO DAS PROPOSIÇÕES':{
          sessoes:{
            'Dos Turnos':{
              artigos: getArtigos(328, 331)
            },
            'Da Discussão':{
              subsessoes:{
                'Disposições Gerais':{
                  artigos: getArtigos(328, 331)
                },
                'Do Encerramento da Discussão':{
                  artigos: getArtigos(328, 331)
                },
                'Da Dispensa da Discussão':{
                  artigos: getArtigos(328, 331)
                },
                'Da Proposição Emendada':{
                  artigos: getArtigos(328, 331)
                },
                'Do Adiamento da Discussão':{
                  artigos: getArtigos(328, 331)
                },
              }
            },
            'Do Interstício':{
              artigos: getArtigos(328, 331)
            },
            'Do Turno Suplementar':{
              artigos: getArtigos(328, 331)
            },
            'Das Emendas da Câmara a Projeto do Senado':{
              artigos: getArtigos(328, 331)
            },
            'Da Votação':{
              subsessoes:{
                'Da Votação':{
                  artigos: getArtigos(328, 331)
                },
                'Das Modalidades de Votação':{
                  artigos: getArtigos(328, 331)
                },
                'Da votação Ostensiva':{
                  artigos: getArtigos(328, 331)
                },
                'Da Votação Secreta':{
                  artigos: getArtigos(328, 331)
                },
                'Da Proclamação do Resultado da Votação':{
                  artigos: getArtigos(328, 331)
                },
                'Do Processamento da Votação':{
                  artigos: getArtigos(328, 331)
                },
                'Do Encaminhamento da Votação':{
                  artigos: getArtigos(328, 331)
                },
                'Da Preferência':{
                  artigos: getArtigos(328, 331)
                },
                'Do Destaque':{
                  artigos: getArtigos(315)
                },
                'Do Adiamento da Votação':{
                  artigos: getArtigos(316)
                },
                'Da Declaração de Voto':{
                  artigos: getArtigos(317, 324)
                },
              }
            }
          }
        },
        'DA REDAÇÃO PARA O TURNO SUPLEMENTAR E DA REDAÇÃO FINAL':{
          artigos: getArtigos(325, 327)
        },
        'DA CORREÇÃO DE ERRO':{
          artigos: getArtigos(328, 327)
        },
        'DOS AUTÓGRAFOS':{
          artigos: getArtigos(328, 331)
        },
        'DAS PROPOSIÇÕES DE LEGISLATURA ANTERIORES':{
          artigos: getArtigos(332, 333)
        },
        'DA PREJUDICIALIDADE':{
          artigos: getArtigos(334)
        },
        'DO SOBRESTAMENTO DO ESTUDO DAS PROPOSIÇÕES':{
          artigos: getArtigos(335)
        },
        'DA URGÊNCIA':{
          sessoes:{
            'Disposições Gerais':{
              artigos: getArtigos(336, 338)
            },
            'Do Requerimento de Urgência':{
              artigos: getArtigos(339, 344)
            },
            'Da Apreciação de Matéria Urgente':{
              artigos: getArtigos(345, 351)
            },
            'Da Extinção da Urgência':{
              artigos: getArtigos(352)
            },
            'Da Urgência que Independe de Requerimento':{
              artigos: getArtigos(353)
            }
          }
        }
      }
    },
    'DAS PROPOSIÇÕES SUJEITAS A DISPOSIÇÕES ESPECIAIS':{
      capitulos:{
        'DA PROPOSTA DE EMENDA À CONSTINTUIÇÃO':{
          artigos: getArtigos(354, 373)
        },
        'DOS PROJETOS DE CÓDIGO':{
          artigos: getArtigos(374)
        },
        'DOS PROJETOS COM TRAMITAÇÃO URGENTE ESTABELECIDA PELA CONSTITUIÇÃO':{
          artigos: getArtigos(375)
        },
        'DOS PROJETOS REFERENTES A ATOS INTERNACIONAIS':{
          artigos: getArtigos(376)
        }
      }
    },
    'DAS ATRIBUIÇÕES PRIVATIVAS':{
      capitulos:{
        'DO FUNCIONAMENTO COMO ÓRGÃO JUDICIÁRIO':{
          artigos: getArtigos(377, 382)
        },
        'DA ESCOLHA DE AUTORIDADES':{
          artigos: getArtigos(383, 385)
        },
        'DA SUSPENSÃO DA EXECUÇÃO DE LEI INCONSTITUCIONAL':{
          artigos: getArtigos(386, 388)
        },
        'DAS ATRIBUIÇÕES PREVISTAS NOS ART. 52 E 155 DA CONSTITUIÇÃO':{
          sessoes:{
            'Da Autorização para Operações Externas de Natureza Financeira':{
              artigos: getArtigos(389, 392)
            },
            'Das Atribuições Estabelecidas nos art. 52, VI, VII, VIII e IX da Constituição':{
              artigos: getArtigos(393)
            },
            '-A Das Atribuição Estabelecidaa no art. 52, XV, da Constituição':{
              artigos: getArtigos(393)
            },
            'Das Atribuições Relativas a Competência Tributária dos Estados e do Distrito Federal':{
              artigos: getArtigos(394)
            },
            'Disposições Gerais':{
              artigos: getArtigos(395, 396)
            },
          }
        }
      }
    },
    'DA CONVOCAÇÃO E DO COMPARECIMENTO DE MINISTRO DE ESTADO':{
      artigos: getArtigos(397, 400)
    },
    'DA ALTERAÇÃO OU REFORMA DO REGIMENTO INTERNO':{
      artigos: getArtigos(401, 402)
    },
    'DA QUESTÃO DE ÓRDEM':{
      artigos: getArtigos(403, 408)
    },
    'DOS DOCUMENTOS RECEBIDOS':{
      artigos: getArtigos(409, 411)
    },
    'DOS PRINCÍPIOS GERAIS DO PROCESSO LEGISLATIVO':{
    artigos: getArtigos(412, 413)
  },
  }
}

export default regimento
