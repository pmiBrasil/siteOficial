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
        datePublished: '2021-02-18',
        dateCreated: '2021-02-18',
        dateModified: '2021-02-18',
        projeto: 'nome do projeto',
        categoria: 'Asia',
        fontes:'Revista SALAT&nbsp;',
        img: './../assets/img/portfolio/ReligionAfrica.webp',
        img2: './../assets/img/portfolio/ReligionAfricaFull.webp',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'TRABALHANDO A TERRA DO CORAÇÃO',
        title2: 'Um Povo Mulçumano',
        articleBody: `<p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Nós somos a família N, um casal jovem com dois filhos pequenos. Pela graça do Senhor, servimos há cerca de cinco anos em um país do Asiático. Nosso trabalho concentra-se no em compartilhar Jesus com de um dos grupos étnicos mais humildes da região, sendo caracterizado como o maior grupo étnico não alcançado no mundo: 40 milhões de pessoas, das quais 98,9% são muçulmanas. Nós servimos através de um projeto agrícola e aprendemos que, às vezes, a terra mais difícil de cultivar é o coração. Nossa região ministerial está localizada no topo de uma montanha. O projeto dá emprego a mais de vinte famílias das comunidades próximas à esta montanha. Estas famílias, em sua maioria, vivem com recursos muito escassos. </span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Deus nos deu o privilégio de ser a primeira família latina a viver nesta área, mas tem sido um desafio ser os únicos estrangeiros entre 7 milhões de habitantes.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Na área onde servimos, somos os únicos seguidores de Jesus, por isso enfrentamos muitas lutas e desafios, mas também vitórias e alegrias. Nossa adaptação ao lugar foi complicada por estarmos em uma área reconhecida como tendo a segunda população mais intolerante ao cristianismo no país. Portanto, não fomos muito bem recebidos e experimentamos a rejeição da comunidade, que constantemente nos evitava e nos negava a venda de alimentos.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">As autoridades tentaram nos intimidar com constantes interrogatórios, a ponto de termos sido detidos pelos militares para uma investigação completa, questionando nossa intenção de viver naquela. Embora fossem tempos de grande pressão e estresse para nós como família, o sempre fiel Senhor nos libertou de todas as situações de perigo. Nós realmente vimos à mão de Deus agindo em todos os momentos com milagres após milagres. Sua justiça supera tudo e seu apoio é evidente em nossas vidas.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Damos glória a Deus porque continuamos a servir neste lugar. Apesar de todos os obstáculos, não desistimos. Pelo contrário, estamos entusiasmados em saber que, como a Sua Palavra diz, "onde o pecado abundou, superabundou à graça". Depois de termos passado por este processo, o Senhor nos deu graças diante das pessoas. Temos sido capazes de conhecer mais sobre a comunidade, aprender sobre a sua cultura preciosa, cheia de cor, sabores incríveis e alegria em todos os cantos.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Deus nos abriu as portas de maneira surpreendente para começar a discipular algumas famílias sedentas dele, testemunhando a conversão de almas famintas que tomaram este passo de fé. Louvamos ao Pai pelo que ele está fazendo e pelo que ele fará!</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Mesmo que este grupo étnico seja muito resistente ao Evangelho, acreditamos que agora é a hora de muitos virem aos pés de Jesus. Talvez você que esteja lendo esta mensagem seja um dos muitos que estão sendo chamados pelo Senhor para deixar tudo e ir ao campo, investindo sua vida para que, naquele grande dia, tenhamos o privilégio de ver mais e mais asiáticos louvando nosso Rei.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal" align="justify" style="text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Ore para que o Senhor nos ajude a permanecer fiéis em seu caminho e dispostos a servi-lo. Também pelas pessoas que estamos discipulando, para que o Senhor trate com elas para que cheguem ao verdadeiro caminho. Vamos orar por mais comunidade de fé e trabalhadores dispostos a servir na Ásia, já que há muita necessidade e muito poucos trabalhadores. Peçamos que os corações dos habitantes desta região sejam terras férteis para receber a Palavra do Senhor.</span><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;"><o:p></o:p></span></p><p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:Calibri;
        font-size:12,0000pt;">Obreiros de PMI - Ásia</span></p>`,
      },
      {
        id: 2,
        datePublished: '2021-02-18',
        projeto: 'nome do projeto',
        categoria: 'Asia',
        fontes:'https://pt.wikipedia.org/wiki/Cristianismo_em_%C3%81frica',
        dateCreated: '2021-02-18',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/img2.jpg',
        img2: './../assets/img/portfolio/img2.jpg',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'TRABALHANDO A TERRA DO CORAÇÃO 2',
        title2: 'Um Povo Mulçumano',
        articleBody:
          'teste',
      },
      {
        id: 2,
        datePublished: '2021-02-18',
        projeto: 'nome do projeto',
        categoria: 'Asia',
        fontes:'https://pt.wikipedia.org/wiki/Cristianismo_em_%C3%81frica',
        dateCreated: '2021-02-18',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/img2.jpg',
        img2: './../assets/img/portfolio/img2.jpg',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'TRABALHANDO A TERRA DO CORAÇÃO 2',
        title2: 'Um Povo Mulçumano',
        articleBody:
          'teste',
      },
      {
        id: 2,
        datePublished: '2021-02-18',
        projeto: 'nome do projeto',
        categoria: 'Asia',
        fontes:'https://pt.wikipedia.org/wiki/Cristianismo_em_%C3%81frica',
        dateCreated: '2021-02-18',
        dateModified: '2021-02-18',
        img: './../assets/img/portfolio/img2.jpg',
        img2: './../assets/img/portfolio/img2.jpg',
        keywords: 'Obra Missionária, missões, mulçumanos',
        title: 'TRABALHANDO A TERRA DO CORAÇÃO 2',
        title2: 'Um Povo Mulçumano',
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
