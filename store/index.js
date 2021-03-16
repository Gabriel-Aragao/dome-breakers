export const state = () => ({
  satellites: [
    {
      id: '2019-093E',
      name: 'CBERS 4A',
      launchDate: '20/12/2019',
      endOfOperations: 'N/A',
      initialMass: 1980,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Estudos de sensoriamento geográfico',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Em operação'
    },
    {
      id: '2019-093G',
      name: 'FloripaSat-1',
      launchDate: '20/12/2019',
      endOfOperations: 'N/A',
      initialMass: 1,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'UFSC (Brasil)',
      mainManufacturer: 'UFSC (Brasil)',
      mainEntity: 'UFSC',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Projeto de estudos de estudantes universitários para uma missão espacial completa',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Em operação'
    },
    {
      id: '2018-099AE',
      name: 'ITASAT',
      launchDate: '03/12/2018',
      endOfOperations: 'N/A',
      initialMass: 8,
      launchLocation: 'Vandenberg',
      launchVehicle: 'Falcon 9',
      orbite: 'LEO',
      owners: 'ITA (Brasil)',
      mainManufacturer: 'ITA (Brasil)',
      mainEntity: 'ITA',
      genericFunction: 'Educacional',
      functionsDescription: 'Projeto de estudos de estudantes universitários para a construção de satélites',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Em operação'
    },
    {
      id: '2017-023B',
      name: 'SGDC',
      launchDate: '04/05/2017',
      endOfOperations: 'N/A',
      initialMass: 5800,
      launchLocation: 'Kourou',
      launchVehicle: 'Ariane',
      orbite: 'GEO',
      owners: 'Ministério da Defesa (Brasil) / Telebrás (Brasil)',
      mainManufacturer: 'Thales Alenia Space (França)',
      mainEntity: 'Visiona',
      genericFunction: 'Telecomunicação',
      functionsDescription: 'I - Comunicações estratégicas do governo \nII - Implementação do Plano Nacional de Banda Larga (PNBL)',
      VCGE: 'Telecomunicações',
      VGE: 19.183,
      status: 'Em operação'
    },
    {
      id: '1998-067KT',
      name: 'Tancredo-1',
      launchDate: '16/01/2017',
      endOfOperations: '18/10/2017',
      initialMass: '0,75',
      launchLocation: 'ISS (Tanegashima)',
      launchVehicle: 'H-2B',
      orbite: 'LEO',
      owners: 'Escola municipal Tancredo Almeida Neves (Brasil)',
      mainManufacturer: 'Escola municipal Tancredo Almeida Neves (Brasil)',
      mainEntity: 'Escola municipal Tancredo Almeida Neves',
      genericFunction: 'Educacional',
      functionsDescription: 'Proposta educacional de incentivo à produção científica',
      VCGE: 'Educação básica',
      VGE: 7.123,
      status: 'Fim das operações em 10/2017'
    },
    {
      id: '1998-067GX',
      name: 'SERPENS',
      launchDate: '17/09/2015',
      endOfOperations: '27/03/2016',
      initialMass: 4,
      launchLocation: 'ISS (Tanegashima)',
      launchVehicle: 'H-2B',
      orbite: 'LEO',
      owners: 'AEB (Brasil)',
      mainManufacturer: 'AEB (Brasil)',
      mainEntity: 'AEB',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Oferta de serviços aeroespaciais para estudantes universitários.',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Fim das operações em 03/2016'
    },
    {
      id: '1998-067FM',
      name: 'AESP 14',
      launchDate: '05/02/2015',
      endOfOperations: 'N/A',
      initialMass: 1,
      launchLocation: 'Cape Canaveral',
      launchVehicle: 'Falcon 9',
      orbite: 'N/A',
      owners: 'ITA (Brasil)',
      mainManufacturer: 'ITA (Brasil)',
      mainEntity: 'ITA',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Estudos científicos para estudantes universitários',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Não operou devido a uma falha'
    },
    {
      id: '2014-079A',
      name: 'CBERS4',
      launchDate: '07/12/2014',
      endOfOperations: 'N/A',
      initialMass: 1980,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Validação de Pesquisas de geoprocessamento terrestre',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Em operação'
    },
    {
      id: '2014-033Q',
      name: 'NANOSATC BR1',
      launchDate: '19/06/2014',
      endOfOperations: 'N/A',
      initialMass: 1,
      launchLocation: 'Yasni',
      launchVehicle: 'Dnepr',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'I - Projeto de estudos de estudantes universitários para a construção de satélites;\nII - Proposta educacional de incentivo à produção científica;\nIII - Estudo da Anomalia Magnética do Atlântico Sul e do Eletrojato Ionosférico Equatorial no Brasil;\nIV - Cumprir com as qualificações necessárias sobre circuitos eletrônico miniaturizados e circuitos integrados conforme o Projeto CITAR - FINEP;\nV - Estudos de sensoriamento geográfico;\nVI - Cooperação nacional e internacional entre as instituições e universidades do MERCOSUL para a pesquisa científica.',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Em operação'
    },
    {
      id: '2013-F03',
      name: 'CBERS3',
      launchDate: '09/12/2013',
      endOfOperations: 'N/A',
      initialMass: 2000,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'N/A',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Estudos de sensoriamento geográfico',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Não operou devido a uma falha'
    },
    {
      id: '2007-042A',
      name: 'CBERS2B',
      launchDate: '19/09/2007',
      endOfOperations: '15/05/2010',
      initialMass: 1450,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Estudos de sensoriamento geográfico',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Fim das operações 05/2010'
    },
    {
      id: '2003-049A',
      name: 'CBERS 2',
      launchDate: '21/10/2003',
      endOfOperations: '15/01/2009',
      initialMass: 1540,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Estudos de sensoriamento geográfico',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Fim das operações em 01/2009'
    },
    {
      id: '2003-E01',
      name: 'UNOSAT',
      launchDate: '22/08/2003',
      endOfOperations: 'N/A',
      initialMass: 9,
      launchLocation: 'Alcântara',
      launchVehicle: 'VLS',
      orbite: 'N/A',
      owners: 'UNOPAR (Brasil)',
      mainManufacturer: 'UNOPAR (Brasil)',
      mainEntity: 'UNOPAR',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Transmissão de mensagens de voz e pacote de dados de telemetria',
      VCGE: 'Outros em comunicações',
      VGE: 19.143,
      status: 'Falha (destruição do launchVehicle)'
    },
    {
      id: '2003-E01',
      name: 'SATEC',
      launchDate: '22/08/2003',
      endOfOperations: 'N/A',
      initialMass: 65,
      launchLocation: 'Alcântara',
      launchVehicle: 'VLS',
      orbite: 'N/A',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Teste de equipamentos tecnológicos embarcados no VLS',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Falha (destruição do launchVehicle)'
    },
    {
      id: '1999-F05',
      name: 'SACI 2',
      launchDate: '11/12/1999',
      endOfOperations: 'N/A',
      initialMass: 80,
      launchLocation: 'Alcântara',
      launchVehicle: 'VLS',
      orbite: 'N/A',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Científico',
      functionsDescription: 'Estudos científicos para estudantes universitários',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Falha (destruição do launchVehicle)'
    },
    {
      id: '1999-057B',
      name: 'SACI 1',
      launchDate: '14/10/1999',
      endOfOperations: 'N/A',
      initialMass: 60,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'N/A',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Científico',
      functionsDescription: 'Estudos científicos para estudantes universitários',
      VCGE: 'Educação superior',
      VGE: 7.125,
      status: 'Não operou devido a uma falha'
    },
    {
      id: '1999-057A',
      name: 'CBERS 1',
      launchDate: '14/10/1999',
      endOfOperations: '15/09/2003',
      initialMass: 1540,
      launchLocation: 'Taiyuan',
      launchVehicle: 'Long March',
      orbite: 'LEO',
      owners: 'CNSA (China) / INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil), CAST (China)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Estudos de sensoriamento geográfico',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Fim das operações 09/2003'
    },
    {
      id: '1998-060A',
      name: 'SCD 2',
      launchDate: '23/10/1998',
      endOfOperations: 'N/A',
      initialMass: 117,
      launchLocation: 'Cape Canaveral',
      launchVehicle: 'Pegasus',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Coleta de dados ambientais e meteorológicos',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Em operação'
    },
    {
      id: '1997-F03',
      name: 'SCD 2A',
      launchDate: '02/11/1997',
      endOfOperations: 'N/A',
      initialMass: 115,
      launchLocation: 'Alcântara',
      launchVehicle: 'VLS',
      orbite: 'N/A',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Coleta de dados ambientais e meteorológicos',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Falha (destruição do launchVehicle)'
    },
    {
      id: '1993-009B',
      name: 'SCD 1',
      launchDate: '09/02/1993',
      endOfOperations: 'N/A',
      initialMass: 115,
      launchLocation: 'Cape Canaveral',
      launchVehicle: 'Pegasus',
      orbite: 'LEO',
      owners: 'INPE (Brasil)',
      mainManufacturer: 'INPE (Brasil)',
      mainEntity: 'INPE',
      genericFunction: 'Observação da Terra',
      functionsDescription: 'Coleta de dados ambientais e meteorológicos',
      VCGE: 'Outros em pesquisa e desenvolvimento',
      VGE: 25.153,
      status: 'Em operação'
    },
    {
      id: '1990-005E',
      name: 'DOVE-Oscar17',
      launchDate: '22/01/1990',
      endOfOperations: '15/03/1998',
      initialMass: 13,
      launchLocation: 'Kourou',
      launchVehicle: 'Ariane',
      orbite: 'LEO',
      owners: 'N/A',
      mainManufacturer: 'Projeto amador (Brasil)',
      mainEntity: 'Junior Torres de Castro',
      genericFunction: 'Desenvolvimento tecnológico',
      functionsDescription: 'Transmissão de mensagens de voz e pacote de dados de telemetria',
      VCGE: 'Educação básica',
      VGE: 7.123,
      status: 'Fim das operações em 03/1998'
    }
  ],
  launchDates: [
    '20/12/2019',
    '03/12/2018',
    '04/05/2017',
    '16/01/2017',
    '17/09/2015',
    '05/02/2015',
    '07/12/2014',
    '19/06/2014',
    '09/12/2013',
    '19/09/2007',
    '21/10/2003',
    '22/08/2003',
    '11/12/1999',
    '14/10/1999',
    '23/10/1998',
    '02/11/1997',
    '09/02/1993',
    '22/01/1990'
  ],
  positions: [
    {
      style: `
      top: 29%;
      left: 12.5%;
      transform: rotate(-65deg);
      `
    },
    {
      style: `
      top: 22%;
      left: 15%;
      transform: rotate(-55deg);
      `
    },
    {
      style: `
      top: 15%;
      left: 19%;
      transform: rotate(-50deg);
      `
    },
    {
      style: `
      top: 9.2%;
      left: 24%;
      transform: rotate(-40deg);
      `
    },
    {
      style: `
      top: 5%;
      left: 29%;
      transform: rotate(-30deg);
      `
    },
    {
      // Yasni
      style: `
      top: 36%;
      left: 54%;
      transform: rotate(-160deg);
      `
    },
    {
      // Kourou
      style: `
      top: 44%;
      left: 37.5%;
      transform: rotate(160deg);
      `
    },
    {
      style: `
      top: -0.5%;
      left: 42%;
      transform: rotate(-5deg);
      `
    },
    {
      style: `
      top: 1.5%;
      left: 35%;
      transform: rotate(-20deg);
      `
    },
    {
      style: `
      top: -1%;
      left: 49%;
      transform: rotate(5deg);
      `
    },
    {
      style: `
      top: 0.2%;
      left: 56%;
      transform: rotate(20deg);
      `
    },
    {
      // ISS (Tanegashima)
      style: `
      top: 38%;
      left: 69.5%;
      transform: rotate(-160deg);
      `
    },
    {
      // Alcântara
      style: `
      top: 45%;
      left: 43%;
      transform: rotate(-160deg);
      `
    },
    {
      // Taiyuan
      style: `
      top: 37%;
      left: 62%;
      transform: rotate(160deg);            
      `
    },
    {
      // Vandenberg
      style: `
      top: 41%;
      left: 20.5%;
      transform: rotate(160deg);
      `
    },
    {
      style: `
      top: 3.5%;
      left: 63%;
      transform: rotate(25deg);
      `
    },
    {
      style: `
      top: 8%;
      left: 69%;
      transform: rotate(35deg);
      `
    },
    {
      style: `
      top: 14%;
      left: 74%;
      transform: rotate(50deg);
      `
    },
    {
      // Cape Canaveral
      style: `
      top: 42%;
      left: 30%;
      transform: rotate(160deg);
      `
    },
    {
      style: `
      top: 21%;
      left: 78.3%;
      transform: rotate(55deg);
      `
    },
    {
      style: `
      top: 28%;
      left: 81%;
      transform: rotate(60deg);
      `
    }
  ]
})
