import {artLink} from './constituicao.js'

const artigos = {
  1:{
    caput:'O Senado Federal tem sede no Palácio do Congresso Nacional, em Brasília.',
    paragrafos:{
      1:{
        caput:'Em Caso de guerra, de comoção intestina, de calamidade pública ou de ocorrência que impossibilite o seu funcionamento na sede, o Senado poderá reunir-se, eventualmente, em qualquer outro local, por determinação da Mesa, a requerimento da maioria dos Senadores.'
      }
    }
  },
  2:{
    caput:'O senado federal reunir-se-á:',
    inciso:{
      1:{
        caput:'anualmente, de 2 de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro, durante as sessões legislativas ordinárias, observando o disposto no art.57 da Constituição;',
        citacao: {
          texto: 'art.57 da Constituição',
          link: artLink(57)
        }
      },
      2:{
        caput:'quando convocado extaordinariamente o Congresso Nacional (Const, art 57 §§ 6º a 8º).',
        citacao: {
          texto: '(Const, art 57 §§ 6º a 8º)',
          link: artLink(57)
        }
      }
    },
    paragrafos:{
        1:{
          caput:'Nos sessenta dias anteriores às eleições gerais, o Senado Federal funcionará de acordo com o disposto no Regimento Comum.'
        }
    },
  },
  3:{},
  413:{}
}

export default artigos
