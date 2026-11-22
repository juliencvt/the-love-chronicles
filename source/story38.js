/* ===== SAISON 2 — CHAPITRE 16 — Retour à Londres ===== */
STORY.push(
{bg:'salon',mus:'calm',chap:38,card:['Saison 2 · Chapitre 16','Season 2 · Chapter 16'],sub:['Retour à Londres','Back to London'],where:['Grosvenor Street','Grosvenor Street']},
{st:['mother','duchess']},
N(`Londres, trois semaines avant le mariage. La nouvelle de la crypte et du coup de feu vous a précédés. Quand vous arrivez à Grosvenor Street, deux femmes vous attendent dans le vestibule. Ensemble.`,`London, three weeks before the wedding. The news of the crypt and the gunshot has arrived before you. When you reach Grosvenor Street, two women are waiting in the hall. Together.`),
N(`Ta mère. Et la Duchesse d'Ashbury. Côte à côte, les yeux rouges, comme deux sœurs qui ont passé la nuit à attendre des nouvelles.`,`Your mother. And the Duchess of Ashbury. Side by side, eyes red, like two sisters who've spent the night waiting for news.`),
D('mother','s',`Mon enfant ! Et {fi}… Ton épaule ! Mon Dieu, ton épaule !`,`My child! And {fi}… Your shoulder! Good heavens, your shoulder!`),
...IF('fiNoble',[D('duchess','s',`Une balle. Mon enfant a reçu une balle. Et j'étais à Londres, à me disputer sur la couleur des serviettes.`,`A bullet. My child took a bullet. And I was in London, arguing about the colour of the napkins.`)],[D('duchess','s',`On m'a dit que {fi} s'était jeté{a:|e} devant une balle pour vous. Un apprenti. Devant une balle. Je ne connais pas beaucoup de ducs qui en feraient autant.`,`I was told {fi} threw {a:himself|herself} in front of a bullet for you. An apprentice. In front of a bullet. I don't know many dukes who'd do the same.`)]),
D('duchess','n',`Comtesse, je… Nous avons parlé, votre mère et moi. Toute la nuit.`,`Countess, I… Your mother and I have talked. All night.`),
D('mother','h',`Nous avons décidé que nous avions toutes les deux été ridicules. Et que la prochaine personne qui dira « ce n'est pas convenable » devant moi recevra une tasse de thé sur la tête.`,`We've decided we were both ridiculous. And that the next person who says "it is not proper" in front of me will get a cup of tea over the head.`),
D('duchess','h',`J'ai suggéré une théière. Pour l'efficacité.`,`I suggested a teapot. For efficiency.`),
C('c38a',0,[
 {t:[`Les serrer toutes les deux dans tes bras.`,`Hug them both.`],fx:{rep:1},r:[N(`Tu les serres dans tes bras, toutes les deux en même temps. La Duchesse se raidit… puis, à ta grande surprise, elle te tapote le dos.`,`You hug them both at the same time. The Duchess stiffens… then, to your great surprise, she pats your back.`)]},
 {t:[`« Qui êtes-vous, et qu'avez-vous fait de nos mères ? »`,`"Who are you, and what have you done with our mothers?"`],r:[D('mother','h',`Insolent{g:|e|·e}. Tu tiens ça de ton père.`,`Impertinent. You get that from your father.`),D('duchess','h',`Non. De sa mère. L'autre. Elle était exactement pareille.`,`No. From the mother. The other one. She was exactly the same.`)]}
]),

{bg:'salon',mus:'mystery',where:['Pembroke House','Pembroke House']},
{st:['lordp','ladyp']},
...IF('pembrokeConfess',[
 N(`À Pembroke House, l'atmosphère est étrange. Pendant votre absence, Lord Pembroke a tenu parole. Il a tout dit : à Bow Street, à sa femme, à ses enfants.`,`At Pembroke House, the atmosphere is strange. While you were away, Lord Pembroke kept his word. He told everything: to Bow Street, to his wife, to his children.`),
 D('ladyp','s',`Quinze ans. Quinze ans que tu portes ça tout seul, Arthur. Et moi qui croyais que tu aimais cette fille plus que tes propres enfants.`,`Fifteen years. Fifteen years you've carried this alone, Arthur. And I thought you loved that girl more than your own children.`),
 D('lordp','s',`Je les aime tous, Honoria. C'est bien le problème.`,`I love them all, Honoria. That's precisely the problem.`),
 N(`Lady Pembroke ne répond pas. Mais elle prend la main de son mari. Pour la première fois devant toi.`,`Lady Pembroke doesn't answer. But she takes her husband's hand. For the first time in front of you.`),
 D('lordp','h',`Bow Street m'a entendu. Ils me croient. Iris n'a plus rien contre moi. Grâce à toi, mon enfant.`,`Bow Street heard me out. They believe me. Iris has nothing on me any more. Thanks to you, my dear.`),
 {set:'pembrokeFree'}
],[
 N(`À Pembroke House, c'est la tempête. Hier, Lady Pembroke a reçu une lettre anonyme au cachet de lys noir. Elle raconte tout : l'escalier, le flacon, le chantage.`,`At Pembroke House, it's chaos. Yesterday, Lady Pembroke received an anonymous letter with a black-lily seal. It tells everything: the stairs, the vial, the blackmail.`),
 D('ladyp','a',`Quinze ans, Arthur ! Quinze ans de mensonges ! Et toi, tu savais ? Tu savais, et tu ne m'as rien dit ?`,`Fifteen years, Arthur! Fifteen years of lies! And you knew? You knew, and you said nothing?`),
 D('mc','s',`J'ai promis de me taire, Milady. Ce n'était pas mon secret.`,`I promised to keep quiet, my lady. It wasn't my secret.`),
 N(`Lady Pembroke te regarde comme si tu l'avais giflée. Lord Pembroke s'est effondré dans un fauteuil. Iris a frappé, sans même se montrer.`,`Lady Pembroke looks at you as if you'd slapped her. Lord Pembroke has collapsed into an armchair. Iris has struck without even showing herself.`)
]),
{st:['clem','theo']},
D('clem','s',`Papa… Papa a apporté le flacon. Sans le savoir. Et il a vécu avec ça toute sa vie.`,`Papa… Papa carried the vial. Without knowing it. And he's lived with that all his life.`),
D('theo','s',`Ça explique tout. Cordelia. Ses silences. Ses verres de cognac à midi.`,`It explains everything. Cordelia. His silences. His glasses of brandy at noon.`),
C('m75',1,[
 {t:[`Aller parler à Lord Pembroke, seul{e} à seul.`,`Go and talk to Lord Pembroke, one to one.`],set:'comfortPembroke',fx:{rep:1,vig:1},r:[
  {st:['lordp','mc']},
  D('mc','s',`Milord. Isadora ne vous en aurait jamais voulu. Vous lui avez apporté un flacon, et pendant quinze ans, vous avez élevé la fille de son assassin comme votre enfant. C'est la chose la plus généreuse que je connaisse.`,`My lord. Isadora would never have blamed you. You brought her a vial, and for fifteen years you raised her murderer's daughter as your own child. It's the most generous thing I know of.`),
  N(`Lord Pembroke te regarde longtemps. Puis ses épaules se mettent à trembler. Il pleure, ce grand homme jovial, comme un enfant. Tu restes près de lui jusqu'à ce que ce soit fini.`,`Lord Pembroke looks at you for a long time. Then his shoulders begin to shake. He weeps, this big, jovial man, like a child. You stay beside him until it's over.`)
 ]},
 {t:[`Laisser la famille Pembroke entre elle.`,`Leave the Pembroke family to themselves.`],set:'leavePembrokes',r:[
  D('theo','n',`Merci. On a besoin d'être entre nous, ce soir. Mais on sera là, au mariage. Tous les quatre. Je te le promets.`,`Thank you. We need to be on our own tonight. But we'll be there at the wedding. All four of us. I promise.`)
 ]}
]),

{bg:'bedroom',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['fi','mc']},
N(`Le soir, {fi} te rejoint, le bras en écharpe. {a:Il|Elle} insiste pour vérifier ses points de suture devant le miroir, comme pour admirer ton travail.`,`In the evening, {fi} joins you, arm in a sling. {a:He|She} insists on checking the stitches in the mirror, as if admiring your handiwork.`),
D('fi','h',`Gaspard avait raison. Tu as des mains de fée. On ne verra presque pas la cicatrice. Dommage, j'aurais aimé la montrer à nos petits-enfants.`,`Gaspard was right. You have healing hands. The scar will barely show. Pity, I'd have liked to show it to our grandchildren.`),
D('mc','h',`Nos petits-enfants ? On n'est même pas encore mariés.`,`Our grandchildren? We're not even married yet.`),
D('fi','s',`Dans trois semaines. Trois semaines, et je pourrai dire « ma femme », « mon mari »… je ne sais même pas comment je dirai. Je m'entraîne tous les soirs devant le miroir.`,`In three weeks. Three weeks, and I'll be able to say "my wife", "my husband"… I don't even know how I'll say it. I practise every night in front of the mirror.`),
C('m76',1,[
 {t:[`« Entraîne-toi sur moi, alors. »`,`"Practise on me, then."`],set:'practiceVows',fx:{fi:3},r:[D('fi','s',`{first} {last}. L'amour de ma vie. Ma moitié. Mon… mon tout.`,`{first} {last}. The love of my life. My other half. My… my everything.`),N(`Ta gorge se serre. {fi} sourit et t'embrasse, doucement, à cause du bras en écharpe, mais avec tout le reste.`,`Your throat tightens. {fi} smiles and kisses you, gently because of the sling, but with everything else.`)]},
 {t:[`Lui prendre la main, et rester là, en silence.`,`Take {a:his|her} hand, and stay there in silence.`],set:'silentEvening',fx:{fi:2},r:[N(`Vous restez assis au bord du lit, sans rien dire. Dans trois semaines, ce sera votre lit. Votre maison. Votre vie.`,`You sit on the edge of the bed without a word. In three weeks, it'll be your bed. Your home. Your life.`)]}
]),
{end:38}
);
