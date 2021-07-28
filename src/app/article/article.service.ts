import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Array<Article>;

  constructor() {
    this.articles = [
      {
        id: 1,
        datePublished: '2021-07-28',
        dateCreated: '2021-07-28',
        dateModified: '2021-07-28',
        projeto: 'TRABALHANDO A TERRA DO CORAÇÃO',
        categoria: 'Testemunho',
        fontes:'https://unsplash.com/@mihaisurdu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        img: './../assets/img/portfolio/1-thumbnail-mihai-surdu-1w0aqsMs-OU-unsplash.png',
        img2: '',
        keywords: 'Obra Missionária, missões, mulçumanos,discipulado',
        title: 'TRABALHANDO A TERRA DO CORAÇÃO',
        title2: 'TRABALHANDO A TERRA DO CORAÇÃO',
        articleBody: `<p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Nós somos
        a família N, um casal jovem com dois filhos pequenos. Pela graça do Senhor,
        servimos há cerca de cinco anos em um país do Asiático. Nosso trabalho
        concentra-se no em compartilhar Jesus com de um dos grupos étnicos mais
        humildes da região, sendo caracterizado como o maior grupo étnico não alcançado
        no mundo: 40 milhões de pessoas, das quais 98,9% são muçulmanas. Nós servimos
        através de um projeto agrícola e aprendemos que, às vezes, a terra mais difícil
        de cultivar é o coração. Nossa região ministerial está localizada no topo de
        uma montanha. O projeto dá emprego a mais de vinte famílias das comunidades
        próximas à esta montanha. Estas famílias, em sua maioria, vivem com recursos
        muito escassos. <o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Deus nos
        deu o privilégio de ser a primeira família latina a viver nesta área, mas tem
        sido um desafio ser os únicos estrangeiros entre 7 milhões de habitantes.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Na área
        onde servimos, somos os únicos seguidores de Jesus, por isso enfrentamos muitas
        lutas e desafios, mas também vitórias e alegrias. Nossa adaptação ao lugar foi
        complicada por estarmos em uma área reconhecida como tendo a segunda população
        mais intolerante ao cristianismo no país. Portanto, não fomos muito bem
        recebidos e experimentamos a rejeição da comunidade, que constantemente nos
        evitava e nos negava a venda de alimentos.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">As
        autoridades tentaram nos intimidar com constantes interrogatórios, a ponto de
        termos sido detidos pelos militares para uma investigação completa,
        questionando nossa intenção de viver naquela. Embora fossem tempos de grande
        pressão e estresse para nós como família, o sempre fiel Senhor nos libertou de
        todas as situações de perigo. Nós realmente vimos à mão de Deus agindo em todos
        os momentos com milagres após milagres. Sua justiça supera tudo e seu apoio é
        evidente em nossas vidas.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Damos
        glória a Deus porque continuamos a servir neste lugar. Apesar de todos os
        obstáculos, não desistimos. Pelo contrário, estamos entusiasmados em saber que,
        como a Sua Palavra diz, "onde o pecado abundou, superabundou à
        graça". Depois de termos passado por este processo, o Senhor nos deu
        graças diante das pessoas. Temos sido capazes de conhecer mais sobre a
        comunidade, aprender sobre a sua cultura preciosa, cheia de cor, sabores
        incríveis e alegria em todos os cantos.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Deus nos
        abriu as portas de maneira surpreendente para começar a discipular algumas
        famílias sedentas dele, testemunhando a conversão de almas famintas que tomaram
        este passo de fé. Louvamos ao Pai pelo que ele está fazendo e pelo que ele
        fará!<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Mesmo que
        este grupo étnico seja muito resistente ao Evangelho, acreditamos que agora é a
        hora de muitos virem aos pés de Jesus. Talvez você que esteja lendo esta
        mensagem seja um dos muitos que estão sendo chamados pelo Senhor para deixar
        tudo e ir ao campo, investindo sua vida para que, naquele grande dia, tenhamos
        o privilégio de ver mais e mais asiáticos louvando nosso Rei.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Ore para
        que o Senhor nos ajude a permanecer fiéis em seu caminho e dispostos a
        servi-lo. Também pelas pessoas que estamos discipulando, para que o Senhor
        trate com elas para que cheguem ao verdadeiro caminho. Vamos orar por mais
        comunidade de fé e trabalhadores dispostos a servir na Ásia, já que há muita
        necessidade e muito poucos trabalhadores. Peçamos que os corações dos
        habitantes desta região sejam terras férteis para receber a Palavra do Senhor.<o:p></o:p></span></p>
        
        <p class="MsoNormal" align="right" style="text-align:right"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Obreiros
        de PMI - Ásia<o:p></o:p></span></p>`,
      },
      {
        id: 2,
        datePublished: '2021-07-28',
        projeto: 'EMBAIXADORES ONDE ESTIVERMOS',
        categoria: 'Testemunho',
        fontes:'https://unsplash.com/@skvrck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        dateCreated: '2021-07-28',
        dateModified: '2021-07-28',
        img: '2-thumbnail-rokas-skeivys-EILHSBnt6QI-unsplash.png',
        img2: '2 rokas-skeivys-EILHSBnt6QI-unsplash.PNG',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'EMBAIXADORES ONDE ESTIVERMOS',
        title2: 'EMBAIXADORES ONDE ESTIVERMOS',
        articleBody:
        `<p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Há alguns
        anos, o Senhor me chamou para servi-lo na Ásia e eu fui para o campo com a
        oportunidade de estudar. Trabalhar para o Reino e, ao mesmo tempo, cursar
        mestrado tem sido um grande desafio, pois se trata de estudar em uma língua
        diferente da minha. Mas tem sido incrível tudo o que Deus fez, a maneira como
        ele sempre me ajuda e todas as portas que Ele abriu para me permitir
        compartilhar a Sua Palavra com muitas pessoas.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">No começo
        eu pensei que não seria capaz de resistir a tantos desafios, mas o Senhor me
        lembrou da vida de Daniel e como Deus o capacitou a viver em uma cultura
        diferente. Para a Sua glória, consegui completar o primeiro semestre com notas
        extremamente satisfatórias. <o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Alguns
        momentos me encheram de alegria. Por exemplo, ver moças me perguntando porque
        eu acredito em 'Isa' (Jesus); outras se aproximaram abrindo seus corações,
        confessando pecados e pedindo ajuda. Outras pessoas ainda me perguntam por que
        eu sou tão acolhedora para com elas. Aproveito cada oportunidade para
        compartilhar sobre meu Bom Professor. Há sempre enormes possibilidades de
        sermos fiéis testemunhas e embaixadores do Seu Reino.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">O foco da
        minha pesquisa para o próximo semestre é o de conhecer os fatores de risco que
        causam a entrada no tráfico de seres humanos em uma ilha da região. Peço seu
        apoio em oração pela provisão do Senhor para a realização desta investigação e
        a orientação de Seu Espírito Santo sobre os passos no futuro.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Convido
        meus colegas leitores a colocarem suas profissões diante do Senhor a fim de
        trazer ainda mais glória ao Seu nome e, por sua vez, trazer esperança e
        liberdade através de Jesus a vidas que tanto necessitam dele. Sempre há
        possibilidades e portas abertas para trabalhar em Sua missão. Se ele está
        chamando você, aproveite para "aprender e crescer no campo
        profissional", continue a preparar-se, e junte-se aos projetos e
        possibilidades de serviço nesta região.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Vamos ser
        seus embaixadores onde quer que estejamos!<o:p></o:p></span></p>
        
        <p class="MsoNormal" align="right" style="text-align:right"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Obreira
        da PMI – Ásia<o:p></o:p></span></p>`,
      },
      {
        id: 3,
        datePublished: '2021-07-28',
        projeto: 'NOSSA LUTA NÃO É CONTRA CARNE OU SANGUE',
        categoria: 'Testemunho',
        fontes:'https://unsplash.com/@adisaktijrs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        dateCreated: '2021-07-28',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/3-thumbnail-adi-sakti-hGjOfQQUPIw-unsplash.png',
        img2: '',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'NOSSA LUTA NÃO É CONTRA CARNE OU SANGUE',
        title2: 'NOSSA LUTA NÃO É CONTRA CARNE OU SANGUE',
        articleBody:
        `<p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Há alguns
        anos, estou servindo ao Senhor entre grupos étnicos asiáticos. Eu sou uma jovem
        </span><span style="mso-ascii-font-family:Arial;mso-ascii-theme-font:minor-bidi;
        mso-fareast-font-family:&quot;Times New Roman&quot;;mso-hansi-font-family:Arial;
        mso-hansi-theme-font:minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:
        minor-bidi;color:#222222;mso-fareast-language:PT-BR">latino-americana</span><span style="font-size:10.5pt;line-height:150%;mso-ascii-font-family:Arial;
        mso-ascii-theme-font:minor-bidi;mso-fareast-font-family:&quot;Times New Roman&quot;;
        mso-hansi-font-family:Arial;mso-hansi-theme-font:minor-bidi;mso-bidi-font-family:
        Arial;mso-bidi-theme-font:minor-bidi;color:#222222;mso-fareast-language:PT-BR">
        </span><span style="mso-ascii-font-family:Arial;mso-ascii-theme-font:minor-bidi;
        mso-hansi-font-family:Arial;mso-hansi-theme-font:minor-bidi;mso-bidi-font-family:
        Arial;mso-bidi-theme-font:minor-bidi">que, como muitos de meus colegas no
        campo, enfrentou várias lutas e desafios, como o aprendizado da língua, cultura
        e lutas espirituais.</span><span style="font-size:10.5pt;line-height:150%;
        mso-ascii-font-family:Arial;mso-ascii-theme-font:minor-bidi;mso-fareast-font-family:
        &quot;Times New Roman&quot;;mso-hansi-font-family:Arial;mso-hansi-theme-font:minor-bidi;
        mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi;color:#222222;
        mso-fareast-language:PT-BR"><o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Uma das
        coisas mais notáveis é a diversidade cultural e linguística, uma vez que cada
        ilha desta região tem a sua própria língua local, na maior parte do tempo
        existindo apenas de forma oral. As pessoas são muito alegres, mas infelizmente
        a atmosfera espiritual é muito pesada porque há muito sincretismo e, em alguns
        casos, a religião muçulmana é misturada com outras crenças animistas.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Louvo ao
        Senhor pela oportunidade que ele me deu de aprender inglês no meu país, o que
        facilita a comunicação e permite que eu sirva à comunidade. Agora estou
        apoiando uma escola internacional e o inglês é a principal língua que falo no
        dia a dia.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Pude
        estar com crianças ou famílias que querem aprender inglês e, embora sejam muito
        tradicionais ou religiosos, temos podido nos conhecer melhor através dessa
        experiência. Eu vejo isso como uma oportunidade para compartilhar o amor de
        Jesus Cristo e sua obra redentora.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Como eu
        vi Deus operando no trabalho que fazemos localmente?<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Bem,
        antes de chegar, eu disse que amava a todos, que era muito bom vir, mas quando
        enfrentei a realidade da vida cotidiana, sabia que era necessário crescer,
        colocar em prática os valores do Reino. O respeito é um sinal de amor, fazer
        parte de uma comunidade mostra adaptação e aceitação de um grupo de pessoas. O
        amor que existe em nós nasce de Deus, não das diferenças ou coisas em comum que
        temos com as pessoas. Nós simplesmente os amamos porque Ele os ama.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Quero
        convidar outros jovens como eu para dar suas vidas ao serviço do Reino, não
        olhando para as circunstâncias, mas ouvindo o Senhor e confiando em suas
        promessas. Não deixe ninguém menosprezar sua juventude, nem mesmo você! Porque
        tudo o que Deus nos permite aprender, Ele pode usá-lo para a extensão do Seu
        Reino.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Ore para
        que Deus continue a se manifestar através das pessoas a quem servimos aqui,
        para que cada um dos nossos alunos veja Jesus em nós. Que sejamos fiéis
        seguidores de Jesus, abrigados na palma de sua mão.<o:p></o:p></span></p>
        
        <p class="MsoNormal" style="text-align:justify"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Peço-lhe
        também que interceda para que todos os principados e poderes das trevas sejam
        derrubados e que Sua luz dissipe todas as trevas, e que as pessoas tenham um
        coração aberto e disposto a conhecê-lo.<o:p></o:p></span></p>
        
        <p class="MsoNormal" align="right" style="text-align:right"><span style="mso-ascii-font-family:
        Arial;mso-ascii-theme-font:minor-bidi;mso-hansi-font-family:Arial;mso-hansi-theme-font:
        minor-bidi;mso-bidi-font-family:Arial;mso-bidi-theme-font:minor-bidi">Obreira
        da PMI –Ásia<o:p></o:p></span></p>`,
      },
      {
        id: 4,
        datePublished: '2021-07-28',
        projeto: 'AMOR E SERVIÇO',
        categoria: 'Testemunho',
        fontes:'https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        dateCreated: '2021-07-28',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/4-thumbnail-you-x-ventures-tHO1_OuKbg0-unsplash.png',
        img2: '',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'AMOR E SERVIÇO',
        title2: 'AMOR E SERVIÇO',
        articleBody:
        `<p class="MsoCaption" style="text-align:justify;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal">Há
        mais de dez anos, fui desafiada pelo Senhor a atravessar a fronteira do meu
        conforto e servi-Lo no meio dos povos muçulmanos no norte da África. A
        princípio, não entendi como eu poderia servir em um contexto novo e diferente
        de tudo o que conhecia. A primeira fronteira que tive que atravessar foi a de
        minha própria mente, o que abriu a porta para eu usar minha amada profissão
        como um serviço para aqueles que sofrem sem Cristo, e muitas vezes são
        rejeitados por causa de suas dificuldades e limitações. E então ajuda-los a
        atravessar uma fronteira espiritual.<o:p></o:p></span></p>
        
        <p class="MsoCaption" style="text-align:justify;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal">Sou
        fonoaudióloga especialista em deficiências e desde 2010 trabalho na organização
        PMI desenvolvendo projetos que acompanham, equipam e discipulam mães de pessoas
        com necessidades especiais. No meio de contextos em que a deficiência pode
        adicionar um grande fardo de culpa e vergonha, vemos o amor de Deus e o poder
        dignificante do Evangelho trabalhando e transformando vidas.<o:p></o:p></span></p>
        
        <p class="MsoCaption" style="text-align:justify;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal">Em
        todos esses anos servindo entre essas pessoas preciosas, aprendi que o
        "amor expressado no serviço" é uma ferramenta muito poderosa.
        Descobri que, como meu querido pastor ensina, a fronteira da "falta de
        fé" em direção à verdadeira fé é atravessada por meio desse amor
        expressado no serviço ao outro. Tive o tremendo privilégio de ver muitos
        atravessarem essa fronteira espiritual. Hoje, como mulher, quero glorificar o
        Nome do Senhor por tudo o que vivi até aqui e incentivá-la, mulher de Deus, a
        ouvir a voz de Deus que lhe diz: “Levante-se, resplandece! Porque chegou a sua
        luz, e a glória do SENHOR raia sobre você.” Is.60:1<o:p></o:p></span></p>
        
        <p class="MsoCaption" style="text-align:justify;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal">Parabenizo
        e abençoo todas as mulheres de Deus que são tochas que iluminam as trevas desta
        terra.<o:p></o:p></span></p>
        
        <p class="MsoCaption" style="text-align:justify;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal">Oremos
        ao Senhor pelas mulheres que servem no campo missionário, e para que Deus
        continue abrindo portas para colocarmos os dons e talentos dados por Ele a Seu
        serviço, e, assim, compartilharmos seu Evangelho entre as pessoas do país onde
        vivamos. Que Ele nos encha de graça, amor, paciência, sabedoria, autoridade e
        seu respaldo diante daqueles que nos rodeiam.<o:p></o:p></span></p>
        
        <p class="MsoCaption" align="right" style="text-align:right;line-height:150%"><span style="font-size:12.0pt;line-height:150%;color:windowtext;font-weight:normal"><span style="mso-spacerun:yes">&nbsp;</span>Obreira da PMI – África<o:p></o:p></span></p>`,
      },
      {
        id: 5,
        datePublished: '2021-07-28',
        projeto: 'AMOR E SERVIÇO',
        categoria: 'Testemunho',
        fontes:'https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        dateCreated: '2021-07-28',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/4-thumbnail-you-x-ventures-tHO1_OuKbg0-unsplash.png',
        img2: '',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'AMOR E SERVIÇO',
        title2: 'AMOR E SERVIÇO',
        articleBody:
          'teste',
      },
    ];
  }

  public returnArticles(): Array<Article>{
    return this.articles;
  }

  public returnArticle(id): Article {
    const art = this.articles.find(article => article.id = id);
    return art;
  }
}
