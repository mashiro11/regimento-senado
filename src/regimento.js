import { getArtigos } from './artigos'
//import definicoes from './definicoes'

const regimento = {
  groupName: "Título",
  group:[
    {
      name:'DO FUNCIONAMENTO',
      groupName: "Capítulo",
      group:[
        {
          name:'DA SEDE',
          artigos: getArtigos(1)
        },
        {
          name:'DAS SESSÕES LEGISLATIVAS',
          artigos: getArtigos(2)
        },
        {
          name:'DAS REUNIÕES PREPARATÓRIAS',
          artigos: getArtigos(3)
        }
      ]
    },
    {
      name:'DOS SENADORES',
      groupName: "Capítulo",
      group:[
        {
          name:'DA POSSE',
          artigos: getArtigos(4, 7)
        },
        {
          name:'DO EXERCÍCIO',
          artigos: getArtigos(8, 9)
        },
        {
          name:'DOS ASSENTAMENTOS',
          artigos: getArtigos(10, 11)
        },
        {
          name:'DA REMUNERAÇÃO',
          artigos: getArtigos(12, 13)
        },
        {
          name:'DO USO DA PALAVRA',
          artigos: getArtigos(14, 21)
        },
        {
          name:'DAS MEDIDAS DISCIPLINARES',
          artigos: getArtigos(22, 25)
        },
        {
          name:'DAS HOMENAGENS DEVIDAS EM CASO DE FALECIMENTO',
          artigos: getArtigos(26, 27)
        },
        {
          name:'DAS VAGAS',
          artigos: getArtigos(28, 35)
        },
        {
          name:'DA SUSPENSÃO DAS IMUNIDADES',
          artigos: getArtigos(36, 37)
        },
        {
          name:'DA AUSÊNCIA E DA LICENÇA',
          artigos: getArtigos(38, 44)
        },
        {
          name:'DA CONVOCAÇÃO DE SUPLENTE',
          artigos: getArtigos(45)
        }
      ]
    },
    {
      name:'DA MESA',
      groupName: "Capítulo",
      group:[
        {
          name:'DA COMPOSIÇÃO',
          artigos: getArtigos(46, 47)
        },
        {
          name:'DAS ATRIBUIÇÕES',
          artigos: getArtigos(48, 58)
        },
        {
          name:'DA ELEIÇÃO',
          artigos: getArtigos(59, 60)
        }
      ]
    },
    {
      name:'DOS BLOCOS PARLAMENTARES, DA MAIORIA, DA MINORIA E DAS LIDERANÇAS',
      artigos: getArtigos(61, 66)
    },
    {
      name:'DA REPRESENTAÇÃO EXTERNA',
      artigos: getArtigos(67, 70)
    },
    {
      name:'DAS COMISSÕES',
      groupName: "Capítulo",
      group:[
        {
          name:'DAS COMISSÕES PERMANENTES E TEMPORÁRIAS',
          artigos: getArtigos(71, 76)
        },
        {
          name:'DA COMPOSIÇÃO',
          artigos: getArtigos(77, 78)
        },
        {
          name:'DA ORGANIZAÇÃO',
          artigos: getArtigos(79, 82)
        },
        {
          name:'DA SUPLÊNCIA, DAS VAGAS E DAS SUBSTITUIÇÕES',
          artigos: getArtigos(83, 87)
        },
        {
          name:'DA DIREÇÃO',
          artigos: getArtigos(88, 89)
        },
        {
          name:'DA COMPETÊNCIA',
          groupName: 'Seção',
          group:[
            {
              name:'Disposições Gerais',
              artigos: getArtigos(90, 96)
            },
            {
              name:'Das Atribuições Específicas',
              artigos: getArtigos(97, 105)
            }
          ]
        },
        {
          name:'DAS REUNIÕES',
          artigos: getArtigos(106, 117)
        },
        {
          name:'DOS PRAZOS',
          artigos: getArtigos(118, 121)
        },
        {
          name:'DAS EMENDAS APRESENTADAS PERANTE AS COMISSÕES',
          artigos: getArtigos(122, 125)
        },
        {
          name:'DOS RELATÓRIOS',
          artigos: getArtigos(126, 129)
        },
        {
          name:'DOS RELATÓRIOS PARECERES',
          groupName: 'Seção',
          group:[
            {
              name:'Dos Relatórios',
              artigos: getArtigos(130, 132)
            },
            {
              name:'Dos Pareceres',
              artigos: getArtigos(133, 141)
            }
          ]
        },
        {
          name:'DAS DILIGÊNCIAS',
          artigos: getArtigos(142)
        },
        {
          name:'DA APRECIAÇÃO DOS DOCUMENTOS ENVIADOS ÀS COMISSÕES',
          artigos: getArtigos(143, 144)
        },
        {
          name:'DAS COMISSÕES PARLAMENTARES DE INQUÉRITO',
          artigos: getArtigos(145, 153)
        },
      ]
    },
    {
      name:'DAS SESSÕES',
      groupName: "Capítulo",
      group:[
        {
          name:'DA NATUREZA DAS SESSÕES',
          artigos: getArtigos(154)
        },
        {
          name:'DA SESSÃO PÚBLICA',
          groupName: 'Seção',
          group:[
            {
              name:'DA ABERTURA E DURAÇÃO',
              artigos: getArtigos(155)
            },
            {
              name:'DO PERÍODO DO EXPEDIENTE',
              artigos: getArtigos(156, 161)
            },
            {
              name:'DA ORDEM DO DIA',
              artigos: getArtigos(162, 176)
            },
            {
              name:'DO TÉRMINO DO TEMPO DE SESSÃO',
              artigos: getArtigos(177, 179)
            },
            {
              name:'DA PRORROGAÇÃO DA SESSÃO',
              artigos: getArtigos(180, 181)
            },
            {
              name:'DA ASSISTÊNCIA À SESSÃO',
              artigos: getArtigos(182, 185)
            },
            {
              name:'DA DIVULGAÇÃO DAS SESSÕES',
              artigos: getArtigos(186)
            },
            {
              name:'DA SESSÃO DELIBERATIVA EXTRAORDINÁRIA',
              artigos: getArtigos(187, 189)
            },
          ]
        },
        {
          name:'DA SESSÃO SECRETA',
          artigos: getArtigos(190, 198)
        },
        {
          name:'DA SESSÃO ESPECIAL',
          artigos: getArtigos(199, 200)
        },
        {
          name:'DAS ATAS E DOS ANAIS DAS SESSÕES',
          groupName: 'Seção',
          group:[
            {
              name:'DAS ATAS',
              artigos: getArtigos(201, 208)
            },
            {
              name:'DOS ANAIS',
              artigos: getArtigos(209, 210)
            }
          ]
        }
      ]
    },
    {
      name:'DAS PROPOSIÇÕES',
      groupName: "Capítulo",
      group:[
        {
          name:'DAS ESPÉCIES',
          artigos: getArtigos(211),
          groupName: "Seção",
          group:[
            {
              name:'Das Propostas de Emenda à Constituição',
              artigos: getArtigos(212)
            },
            {
              name:'Dos Projetos',
              groupName: "Subseção",
              group:[
                {
                  name:'Dos Projetos em Geral',
                  artigos: getArtigos(213)
                },
                {
                  name:'Dos Projetos de Lei de Consolidação',
                  artigos: getArtigos(213)
                }
              ]
            },
            {
              name:'Dos Requerimentos',
              groupName: 'Subseção',
              group:[
                {
                  name:'Disposições Gerais',
                  artigos: getArtigos(214, 215)
                },
                {
                  name:'Dos Requerimentos de Informações (Const. art. 50, § 2º)',
                  artigos: getArtigos(216, 217)
                },
                {
                  name:'Dos Requerimentos de Homenagem de Pesar',
                  artigos: getArtigos(218, 221)
                },
                {
                  name:'Dos Requerimentos de Voto de Aplauso ou Semelhante',
                  artigos: getArtigos(222, 223)
                }
              ],
            },
            {
              name:'Das Indicações',
                artigos: getArtigos(224, 227)
            },
            {
              name:'Dos Pareceres',
              artigos: getArtigos(228, 229)
            },
            {
              name:'Das Emendas',
              artigos: getArtigos(230, 234)
            }
          ]
        },
        {
          name:'DA APRESENTAÇÃO DAS PROPOSIÇÕES',
          artigos: getArtigos(235, 240)
        },
        {
          name:'DA LEITURA DAS PROPOSIÇÕES',
          artigos: getArtigos(241, 242)
        },
        {
          name:'DA AUTORIA',
          artigos: getArtigos(243, 245)
        },
        {
          name:'DA NUMERAÇÃO DAS PROPOSIÇÕES',
          artigos: getArtigos(246)
        },
        {
          name:'DO APOIAMENTO DAS PROPOSIÇÕES',
          artigos: getArtigos(247, 248)
        },
        {
          name:'DA PUBLICAÇÃO DAS PROPOSIÇÕES',
          artigos: getArtigos(249, 250)
        },
        {
          name:'DA TRAMITAÇÃO DAS PROPOSIÇÕES',
          artigos: getArtigos(251, 255)
        },
        {
          name:'DA RETIRADA DAS PROPOSIÇÕES',
          artigos: getArtigos(256, 257)
        },
        {
          name:'DA TRAMITAÇÃO EM CONJUNTO DAS PROPOSIÇÕES',
          artigos: getArtigos(258, 260)
        },
        {
          name: 'DOS PROCESSOS REFERENTES ÀS PROPOSIÇÕES',
          artigos: getArtigos(261, 268)
        },
        {
          name:'DAS SINOPSES E RESENHAS DAS PROPOSIÇÕES',
          artigos: getArtigos(269)
        },
        {
          name:'DA APRECIAÇÃO DAS PROPOSIÇÕES',
          groupName: 'Seção',
          group:[
            {
              name:'Dos Turnos',
              artigos: getArtigos(270, 271)
            },
            {
              name:'Da Discussão',
              groupName: 'Subseção',
              group:[
                {
                  name:'Disposições Gerais',
                  artigos: getArtigos(272, 274)
                },
                {
                  name:'Do Encerramento da Discussão',
                  artigos: getArtigos(275)
                },
                {
                  name:'Da Dispensa da Discussão',
                  artigos: getArtigos(276)
                },
                {
                  name:'Da Proposição Emendada',
                  artigos: getArtigos(277, 278)
                },
                {
                  name:'Do Adiamento da Discussão',
                  artigos: getArtigos(279)
                },
              ]
            },
            {
              name:'Do Interstício',
              artigos: getArtigos(280, 281)
            },
            {
              name:'Do Turno Suplementar',
              artigos: getArtigos(282, 284)
            },
            {
              name:'Das Emendas da Câmara a Projeto do Senado',
              artigos: getArtigos(285, 287)
            },
            {
              name:'Da Votação',
              groupName: 'Subseção',
              group:[
                {
                  name:'Da Votação',
                  artigos: getArtigos(288)
                },
                {
                  name:'Das Modalidades de Votação',
                  artigos: getArtigos(289, 292)
                },
                {
                  name:'Da votação Ostensiva',
                  artigos: getArtigos(293, 294)
                },
                {
                  name:'Da Votação Secreta',
                  artigos: getArtigos(295, 297)
                },
                {
                  name:'Da Proclamação do Resultado da Votação',
                  artigos: getArtigos(298)
                },
                {
                  name:'Do Processamento da Votação',
                  artigos: getArtigos(299, 307)
                },
                {
                  name:'Do Encaminhamento da Votação',
                  artigos: getArtigos(308, 310)
                },
                {
                  name:'Da Preferência',
                  artigos: getArtigos(311)
                },
                {
                  name:'Do Destaque',
                  artigos: getArtigos(312,314)
                },
                {
                  name:'Do Adiamento da Votação',
                  artigos: getArtigos(315)
                },
                {
                  name:'Da Declaração de Voto',
                  artigos: getArtigos(316)
                },
              ]
            }
          ]
        },
        {
          name:'DA REDAÇÃO PARA O TURNO SUPLEMENTAR E DA REDAÇÃO FINAL',
          artigos: getArtigos(317, 324)
        },
        {
          name:'DA CORREÇÃO DE ERRO',
          artigos: getArtigos(325, 327)
        },
        {
          name:'DOS AUTÓGRAFOS',
          artigos: getArtigos(328, 331)
        },
        {
          name:'DAS PROPOSIÇÕES DE LEGISLATURA ANTERIORES',
          artigos: getArtigos(332, 333)
        },
        {
          name:'DA PREJUDICIALIDADE',
          artigos: getArtigos(334)
        },
        {
          name:'DO SOBRESTAMENTO DO ESTUDO DAS PROPOSIÇÕES',
          artigos: getArtigos(335)
        },
        {
          name:'DA URGÊNCIA',
          groupName: 'Seção',
          group:[
            {
              name:'Disposições Gerais',
              artigos: getArtigos(336, 338)
            },
            {
              name:'Do Requerimento de Urgência',
              artigos: getArtigos(339, 344)
            },
            {
              name:'Da Apreciação de Matéria Urgente',
              artigos: getArtigos(345, 351)
            },
            {
              name:'Da Extinção da Urgência',
              artigos: getArtigos(352)
            },
            {
              name:'Da Urgência que Independe de Requerimento',
              artigos: getArtigos(353)
            }
          ]
        }
      ]
    },
    {
      name:'DAS PROPOSIÇÕES SUJEITAS A DISPOSIÇÕES ESPECIAIS',
      groupName:'Capítulo',
      group:[
        {
          name:'DA PROPOSTA DE EMENDA À CONSTINTUIÇÃO',
          artigos: getArtigos(354, 373)
        },
        {
          name:'DOS PROJETOS DE CÓDIGO',
          artigos: getArtigos(374)
        },
        {
          name:'DOS PROJETOS COM TRAMITAÇÃO URGENTE ESTABELECIDA PELA CONSTITUIÇÃO',
          artigos: getArtigos(375)
        },
        {
          name:'DOS PROJETOS REFERENTES A ATOS INTERNACIONAIS (Const., Art. 49, I)',
          artigos: getArtigos(376)
        }
      ]
    },
    {
      name:'DAS ATRIBUIÇÕES PRIVATIVAS',
      groupName: 'Capítulo',
      group:[
        {
          name:'DO FUNCIONAMENTO COMO ÓRGÃO JUDICIÁRIO',
          artigos: getArtigos(377, 382)
        },
        {
          name:'DA ESCOLHA DE AUTORIDADES (Const., Art. 52, III e IV)',
          artigos: getArtigos(383, 385)
        },
        {
          name:'DA SUSPENSÃO DA EXECUÇÃO DE LEI INCONSTITUCIONAL (Const., Art. 52, X)',
          artigos: getArtigos(386, 388)
        },
        {
          name:'DAS ATRIBUIÇÕES PREVISTAS NOS ART. 52 E 155 DA CONSTITUIÇÃO',
          groupName: 'Seção',
          group:[
            {
              name:'Da Autorização para Operações Externas de Natureza Financeira',
              artigos: getArtigos(389, 392)
            },
            {
              name:'Das Atribuições Estabelecidas nos art. 52, VI, VII, VIII e IX da Constituição',
              artigos: getArtigos(393)
            },
            {
              name:'-A Das Atribuição Estabelecidaa no art. 52, XV, da Constituição',
              artigos: getArtigos(393)
            },
            {
              name:'Das Atribuições Relativas a Competência Tributária dos Estados e do Distrito Federal',
              artigos: getArtigos(394)
            },
            {
              name:'Disposições Gerais',
              artigos: getArtigos(395, 396)
            },
          ]
        }
      ]
    },
    {
      name:'DA CONVOCAÇÃO E DO COMPARECIMENTO DE MINISTRO DE ESTADO',
      artigos: getArtigos(397, 400)
    },
    {
      name:'DA ALTERAÇÃO OU REFORMA DO REGIMENTO INTERNO',
      artigos: getArtigos(401, 402)
    },
    {
      name:'DA QUESTÃO DE ÓRDEM',
      artigos: getArtigos(403, 408)
    },
    {
      name:'DOS DOCUMENTOS RECEBIDOS',
      artigos: getArtigos(409, 411)
    },
    {
      name:'DOS PRINCÍPIOS GERAIS DO PROCESSO LEGISLATIVO',
      artigos: getArtigos(412, 413)
    },
  ]
}

export default regimento
