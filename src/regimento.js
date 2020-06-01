import { getArtigos } from './artigos'
//import definicoes from './definicoes'

const regimento = {
  groupName: "Título",
  group:{
    'DO FUNCIONAMENTO':{
      groupName: "Capítulo",
      group:{
        'DA SEDE':{
          artigos: getArtigos(1)
        },
        'DAS SESSÕES LEGISLATIVAS':{
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
          groupName: 'Seção',
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
          groupName: 'Seção',
          group:{
            'Dos Relatórios':{
              artigos: getArtigos(130, 132)
            },
            'Dos Pareceres':{
              artigos: getArtigos(133, 141)
            }
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
          groupName: 'Seção',
          group:{
            'DA ABERTURA E DURAÇÃO':{
              artigos: getArtigos(155)
            },
            'DO PERÍODO DO EXPEDIENTE':{
              artigos: getArtigos(156, 161)
            },
            'DA ORDEM DO DIA':{
              artigos: getArtigos(162, 176)
            },
            'DO TÉRMINO DO TEMPO DE SESSÃO':{
              artigos: getArtigos(177, 179)
            },
            'DA PRORROGAÇÃO DA SESSÃO':{
              artigos: getArtigos(180, 181)
            },
            'DA ASSISTÊNCIA À SESSÃO':{
              artigos: getArtigos(182, 185)
            },
            'DA DIVULGAÇÃO DAS SESSÕES':{
              artigos: getArtigos(186)
            },
            'DA SESSÃO DELIBERATIVA EXTRAORDINÁRIA':{
              artigos: getArtigos(187, 189)
            },
          }
        },
        'DA SESSÃO SECRETA':{
          artigos: getArtigos(190, 198)
        },
        'DA SESSÃO ESPECIAL':{
          artigos: getArtigos(199, 200)
        },
        'DAS ATAS E DOS ANAIS DAS SESSÕES':{
          groupName: 'Seção',
          group:{
            'DAS ATAS':{
              artigos: getArtigos(201, 208)
            },
            'DOS ANAIS':{
              artigos: getArtigos(209, 210)
            }
          }
        }
      }
    },
    'DAS PROPOSIÇÕES':{
      groupName: "Capítulo",
      group:{
        'DAS ESPÉCIES':{
          artigos:{
            artigos: getArtigos(211)
          },
          groupName: "Seção",
          group:{
            'Das Propostas de Emenda à Constituição':{
              artigos: getArtigos(212)
            },
            'Dos Projetos':{
              groupName: "Subseção",
              group:{
                'Dos Projetos em Geral':{
                  artigos: getArtigos(213)
                },
                'Dos Projetos de Lei de Consolidação':{
                  artigos: getArtigos(213)
                }
              }
            },
            'Dos Requerimentos':{
              groupName: 'Subseção',
              group:{
                'Disposições Gerais':{
                  artigos: getArtigos(214, 215)
                },
                'Dos Requerimentos de Informações (Const. art. 50, § 2º)':{
                  artigos: getArtigos(216, 217)
                },
                'Dos Requerimentos de Homenagem de Pesar':{
                  artigos: getArtigos(218, 221)
                },
                'Dos Requerimentos de Voto de Aplauso ou Semelhante':{
                  artigos: getArtigos(222, 223)
                }
              },
            },
            'Das Indicações':{
                artigos: getArtigos(224, 227)
            },
            'Dos Pareceres':{
              artigos: getArtigos(228, 229)
            },
            'Das Emendas':{
              artigos: getArtigos(230, 234)
            }
          }
        },
        'DA APRESENTAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(235, 240)
        },
        'DA LEITURA DAS PROPOSIÇÕES':{
          artigos: getArtigos(241, 242)
        },
        'DA AUTORIA':{
          artigos: getArtigos(243, 245)
        },
        'DA NUMERAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(246)
        },
        'DO APOIAMENTO DAS PROPOSIÇÕES':{
          artigos: getArtigos(247, 248)
        },
        'DA PUBLICAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(249, 250)
        },
        'DA TRAMITAÇÃO DAS PROPOSIÇÕES':{
          artigos: getArtigos(251, 255)
        },
        'DA RETIRADA DAS PROPOSIÇÕES':{
          artigos: getArtigos(256, 257)
        },
        'DA TRAMITAÇÃO EM CONJUNTO DAS PROPOSIÇÕES':{
          artigos: getArtigos(258, 260)
        },
        'DOS PROCESSOS REFERENTES ÀS PROPOSIÇÕES':{
          artigos: getArtigos(261, 268)
        },
        'DAS SINOPSES E RESENHAS DAS PROPOSIÇÕES':{
          artigos: getArtigos(269)
        },
        'DA APRECIAÇÃO DAS PROPOSIÇÕES':{
          groupName: 'Seção',
          group:{
            'Dos Turnos':{
              artigos: getArtigos(270, 271)
            },
            'Da Discussão':{
              groupName: 'Subseção',
              group:{
                'Disposições Gerais':{
                  artigos: getArtigos(272, 274)
                },
                'Do Encerramento da Discussão':{
                  artigos: getArtigos(275)
                },
                'Da Dispensa da Discussão':{
                  artigos: getArtigos(276)
                },
                'Da Proposição Emendada':{
                  artigos: getArtigos(277, 278)
                },
                'Do Adiamento da Discussão':{
                  artigos: getArtigos(279)
                },
              }
            },
            'Do Interstício':{
              artigos: getArtigos(280, 281)
            },
            'Do Turno Suplementar':{
              artigos: getArtigos(282, 284)
            },
            'Das Emendas da Câmara a Projeto do Senado':{
              artigos: getArtigos(285, 287)
            },
            'Da Votação':{
              groupName: 'Subseção',
              group:{
                'Da Votação':{
                  artigos: getArtigos(288)
                },
                'Das Modalidades de Votação':{
                  artigos: getArtigos(289, 292)
                },
                'Da votação Ostensiva':{
                  artigos: getArtigos(293, 294)
                },
                'Da Votação Secreta':{
                  artigos: getArtigos(295, 297)
                },
                'Da Proclamação do Resultado da Votação':{
                  artigos: getArtigos(298)
                },
                'Do Processamento da Votação':{
                  artigos: getArtigos(299, 307)
                },
                'Do Encaminhamento da Votação':{
                  artigos: getArtigos(308, 310)
                },
                'Da Preferência':{
                  artigos: getArtigos(311)
                },
                'Do Destaque':{
                  artigos: getArtigos(312,314)
                },
                'Do Adiamento da Votação':{
                  artigos: getArtigos(315)
                },
                'Da Declaração de Voto':{
                  artigos: getArtigos(316)
                },
              }
            }
          }
        },
        'DA REDAÇÃO PARA O TURNO SUPLEMENTAR E DA REDAÇÃO FINAL':{
          artigos: getArtigos(317, 324)
        },
        'DA CORREÇÃO DE ERRO':{
          artigos: getArtigos(325, 327)
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
          groupName: 'Seção',
          group:{
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
      groupName:'Capítulo',
      group:{
        'DA PROPOSTA DE EMENDA À CONSTINTUIÇÃO':{
          artigos: getArtigos(354, 373)
        },
        'DOS PROJETOS DE CÓDIGO':{
          artigos: getArtigos(374)
        },
        'DOS PROJETOS COM TRAMITAÇÃO URGENTE ESTABELECIDA PELA CONSTITUIÇÃO':{
          artigos: getArtigos(375)
        },
        'DOS PROJETOS REFERENTES A ATOS INTERNACIONAIS (Const., Art. 49, I)':{
          artigos: getArtigos(376)
        }
      }
    },
    'DAS ATRIBUIÇÕES PRIVATIVAS':{
      groupName: 'Capítulo',
      group:{
        'DO FUNCIONAMENTO COMO ÓRGÃO JUDICIÁRIO':{
          artigos: getArtigos(377, 382)
        },
        'DA ESCOLHA DE AUTORIDADES (Const., Art. 52, III e IV)':{
          artigos: getArtigos(383, 385)
        },
        'DA SUSPENSÃO DA EXECUÇÃO DE LEI INCONSTITUCIONAL (Const., Art. 52, X)':{
          artigos: getArtigos(386, 388)
        },
        'DAS ATRIBUIÇÕES PREVISTAS NOS ART. 52 E 155 DA CONSTITUIÇÃO':{
          groupName: 'Seção',
          group:{
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
