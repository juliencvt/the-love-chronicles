/* ===== CHAPITRE 13 — Les dettes ===== */
STORY.push(
{bg:'salon',mus:'calm',chap:13,card:['Chapitre 13','Chapter 13'],sub:['Les dettes','The Debts'],where:['Grosvenor Street','Grosvenor Street']},
{st:['mother','father']},
N(`Retour à Londres. Ta mère te serre si fort dans le vestibule que tu en perds ton chapeau. Ton père, lui, se contente d'une main sur ton épaule. Elle tremble un peu.`,`Back in London. Your mother hugs you so hard in the hall that you lose your hat. Your father settles for a hand on your shoulder. It trembles a little.`),
D('mother','s',`Tu as maigri. Et tu as un coup de soleil. Et tu souris. Qu'est-ce qui s'est passé, à Paris ?`,`You've lost weight. And you're sunburnt. And you're smiling. What happened in Paris?`),
C('c13a',0,[
 {t:[`Tout lui raconter : Madame Roux, le flacon, la tombe.`,`Tell her everything: Madame Roux, the vial, the grave.`],set:'toldMother',r:[N(`Ta mère écoute sans t'interrompre. Quand tu parles du flacon, elle pâlit. Quand tu parles de la tombe, elle pleure.`,`Your mother listens without interrupting. When you mention the vial, she goes pale. When you mention the grave, she weeps.`),D('mother','s',`Elle t'aurait tant aimé{g:|e|·e}. Presque autant que moi.`,`She would have loved you so much. Almost as much as I do.`)]},
 {t:[`« Plus tard, Mère. D'abord, j'ai besoin d'un bain. »`,`"Later, Mother. First, I need a bath."`],r:[D('mother','h',`Ça, je peux m'en occuper. Bess ! De l'eau chaude, beaucoup d'eau chaude !`,`That I can see to. Bess! Hot water, lots of hot water!`)]}
]),
D('father','a',`Il y a eu du nouveau pendant ton absence. Mes créanciers… ont disparu. Tous. Mes dettes ont été rachetées par un seul homme. Et il nous attend ce soir.`,`There's been news while you were away. My creditors… have vanished. All of them. My debts have been bought up by a single man. And he's expecting us tonight.`),
D('mc','o',`Qui ?`,`Who?`),
D('father','s',`Lord Pembroke.`,`Lord Pembroke.`),

...IF('helpedTwin',[
 {bg:'street',mus:'mystery',where:['Devant chez toi','Outside your house']},
 {st:['twinA','mc']},
 N(`L'après-midi, une calèche s'arrête devant ta porte. {tA} en descend, seul{t:|e}, le col relevé comme un conspirateur.`,`In the afternoon, a carriage stops outside your door. {tA} steps out, alone, collar turned up like a conspirator.`),
 D('twinA','s',`Je ne suis pas là. Tu ne m'as pas vu{t:|e}. Mais Iris de Valcourt a dîné chez nous, hier. Ma mère l'adore, évidemment.`,`I'm not here. You haven't seen me. But Iris de Valcourt dined with us yesterday. My mother adores her, naturally.`),
 D('twinA','a',`Elle a parlé d'un « flacon bleu » à Paris. Elle a ri en disant que ce petit flacon ne survivrait pas à la Saison. Je ne sais pas ce que ça veut dire. Toi, si, apparemment.`,`She spoke of a "blue vial" in Paris. She laughed and said that little vial wouldn't survive the Season. I don't know what that means. You do, apparently.`),
 C('c13b',0,[
  {t:[`« Merci, {tA}. Tu viens peut-être de me sauver. »`,`"Thank you, {tA}. You may just have saved me."`],set:'twinAlly',fx:{rep:1},r:[D('twinA','s',`On est quittes pour la Tamise. Et ne t'habitue pas à ma gentillesse.`,`We're even for the Thames. And don't get used to my kindness.`)]},
  {t:[`« Pourquoi devrais-je te croire ? »`,`"Why should I believe you?"`],r:[D('twinA','a',`Parce que je n'ai rien à y gagner, et tout à perdre si {tB} l'apprend. Crois-moi ou non. J'ai fait ma part.`,`Because I've nothing to gain and everything to lose if {tB} finds out. Believe me or don't. I've done my part.`)]}
 ]),
 D('mc','s',`(Le flacon bleu… Seuls ceux qui étaient à Paris étaient au courant. Clem. Théo. {lv}. Bess. Et Cordelia.)`,`(The blue vial… Only those who were in Paris knew. Clem. Theo. {lv}. Bess. And Cordelia.)`)
],[
 {st:['bess','mc']},
 D('bess','s',`{title}, à l'office, on raconte qu'Iris de Valcourt se vante dans tous les salons. Elle dit que votre « petite fiole de Paris » ne vaut rien.`,`{title}, below stairs they say Iris de Valcourt is boasting in every drawing room. She says your "little phial from Paris" is worthless.`),
 D('mc','o',`(Comment sait-elle pour le flacon ? Seuls ceux qui étaient à Paris étaient au courant. Clem. Théo. {lv}. Bess. Et Cordelia.)`,`(How does she know about the vial? Only those who were in Paris knew. Clem. Theo. {lv}. Bess. And Cordelia.)`)
]),

{bg:'salon',mus:'mystery',card:['Le soir','Evening'],sub:['',''],where:['Le bureau de Lord Pembroke','Lord Pembroke\'s study']},
{st:['lordp','father']},
N(`Pembroke House, le soir. Lord Pembroke vous reçoit seul, toi et ton père, dans son bureau. Pour une fois, il ne sourit pas.`,`Pembroke House, in the evening. Lord Pembroke receives you and your father alone in his study. For once, he isn't smiling.`),
D('lordp','n',`Henri, il y a un mois, un agent d'affaires a commencé à racheter toutes tes dettes. Discrètement, à bas prix. Devine pour le compte de qui.`,`Henri, a month ago, a broker began buying up all your debts. Quietly, cheaply. Guess on whose behalf.`),
D('father','a',`Iris.`,`Iris.`),
D('lordp','n',`Avec tes dettes en main, elle pouvait te jeter en prison pour insolvabilité le jour même de l'audience. Plus de comte, plus de témoin. Alors j'ai racheté avant elle. Tout. Au double du prix.`,`With your debts in hand, she could have had you thrown into debtors' prison on the very day of the hearing. No count, no witness. So I bought them before she could. All of them. At double the price.`),
D('mc','o',`Mais pourquoi ? Vous nous connaissez à peine.`,`But why? You barely know us.`),
D('lordp','s',`Parce qu'à vingt ans, j'étais attaché d'ambassade à Paris. Et j'étais fou d'une chanteuse qui s'appelait Isadora de Valcourt.`,`Because at twenty, I was an embassy attaché in Paris. And I was madly in love with a singer named Isadora de Valcourt.`),
N(`Ton père baisse les yeux. Lord Pembroke a un petit rire triste.`,`Your father lowers his eyes. Lord Pembroke gives a small, sad laugh.`),
D('lordp','s',`Elle t'a choisi, Henri. Je ne lui en ai jamais voulu. Mais je lui avais promis une chose : si un jour elle avait besoin de moi, je serais là. Elle n'est plus là. {first} si.`,`She chose you, Henri. I never held it against her. But I promised her one thing: if she ever needed me, I'd be there. She's gone. {first} isn't.`),
D('lordp','n',`Ma femme ne sait rien de tout ça. Elle est déjà assez jalouse d'une morte. Je préférerais que ça reste ainsi.`,`My wife knows nothing of this. She's jealous enough of a dead woman already. I'd rather it stayed that way.`),
D('lordp','h',`Alors voilà ma proposition : vos dettes sont à moi, et je les oublie. Aucune condition.`,`So here is my proposal: your debts are mine, and I'll forget them. No conditions.`),
C('m25',1,[
 {t:[`Accepter, avec gratitude.`,`Accept, with gratitude.`],set:'debtsForgiven',r:[D('father','s',`Je ne sais pas comment te remercier, vieil ami.`,`I don't know how to thank you, old friend.`),D('lordp','h',`Gagne ce procès. Et invite-moi au mariage, s'il y en a un.`,`Win that case. And invite me to the wedding, if there is one.`),N(`Il te lance un clin d'œil. Tu rougis jusqu'aux oreilles.`,`He gives you a wink. You blush to the tips of your ears.`)]},
 {t:[`Refuser : vous rembourserez tout, avec l'héritage.`,`Refuse: you'll repay everything, with the inheritance.`],set:'debtsRepay',fx:{rep:1},r:[D('mc','a',`Merci, Milord. Mais nous rembourserons chaque penny. Isadora n'aurait pas voulu qu'on vive de votre générosité.`,`Thank you, my lord. But we'll repay every penny. Isadora wouldn't have wanted us to live on your generosity.`),D('lordp','h',`Ha ! Elle aurait dit exactement ça. Avec ce même froncement de sourcils. Marché conclu.`,`Ha! She'd have said exactly that. With that same frown. Deal.`)]}
]),
{st:['clem','theo']},
N(`Dans le couloir, Clem et Théo vous attendent, l'oreille visiblement collée à la porte une seconde plus tôt.`,`In the corridor, Clem and Theo are waiting for you, ears clearly glued to the door a second earlier.`),
D('clem','o',`Papa était amoureux de ta mère ?! C'est le plus beau scandale de l'année et je ne peux le raconter à personne !`,`Papa was in love with your mother?! It's the best scandal of the year and I can't tell anyone!`),
D('theo','s',`Pas même à Cordelia. Surtout pas à Cordelia.`,`Not even Cordelia. Especially not Cordelia.`),
D('clem','a',`Pourquoi « surtout pas » ? Qu'est-ce que tu insinues ?`,`Why "especially not"? What are you implying?`),
D('theo','s',`Rien. Elle parle beaucoup, c'est tout.`,`Nothing. She talks a lot, that's all.`),
N(`Clem fronce les sourcils. Théo évite ton regard. Il sait quelque chose. Ou il soupçonne quelque chose.`,`Clem frowns. Theo avoids your eyes. He knows something. Or he suspects something.`),

...IF('danceLi1',[
 {bg:'opera',mus:'tender',card:['Plus tard','Later'],sub:['',''],where:['Le salon de musique des Ashbury','The Ashbury music room']},
 {st:['lv','mc']},
 N(`Tard dans la nuit, {li1} te fait entrer par le jardin des Ashbury jusqu'au salon de musique. Un piano à queue luit sous la lune.`,`Late at night, {li1} lets you in through the Ashbury garden to the music room. A grand piano gleams in the moonlight.`),
 D('lv','h',`J'ai trouvé une partition dans les papiers de ma mère, rangée avec le programme de Versailles. Une berceuse. Écrite à la main par Isadora.`,`I found some sheet music in my mother's papers, filed with the Versailles programme. A lullaby. Handwritten by Isadora.`)
],[
 {bg:'shop',mus:'tender',card:['Plus tard','Later'],sub:['',''],where:['La mansarde, chez Fleury','The garret at Fleury\'s']},
 {st:['lv','mc']},
 N(`Tard dans la nuit, {li2} te fait monter dans sa mansarde, sous les toits de Fleury. Une malle cabossée trône au milieu : celle de Marguerite.`,`Late at night, {li2} takes you up to {a:his|her} garret, under Fleury's roof. A battered trunk sits in the middle: Marguerite's.`),
 D('lv','h',`Je ne l'avais jamais ouverte jusqu'au fond. Je n'en avais pas le courage. Regardez ce que j'ai trouvé sous ses patrons de robes.`,`I'd never opened it all the way to the bottom. I didn't have the courage. Look what I found under her dress patterns.`),
 N(`Une partition jaunie. Une berceuse, écrite à la main. Signée « I. ».`,`A yellowed sheet of music. A lullaby, handwritten. Signed "I.".`)
]),
N(`Le titre est écrit d'une main fine : « Pour mon enfant, que je n'ai pas encore vu{g:|e|·e} ».`,`The title is written in a fine hand: "For my child, whom I have not yet seen".`),
D('mc','s',`Elle l'a écrite pour moi. Avant ma naissance.`,`She wrote it for me. Before I was born.`),
D('lv','s',`Je crois que oui.`,`I think so.`),
C('m26',1,[
 {t:[`La chanter, doucement, pour {lv}.`,`Sing it, softly, for {lv}.`],set:'sangLullaby',fx:{lv:3},r:[N(`Tu déchiffres les premières notes, d'une voix hésitante. Puis la mélodie te prend, comme si tu l'avais toujours connue.`,`You sight-read the first notes in a hesitant voice. Then the melody takes hold of you, as if you'd always known it.`),N(`Quand tu te tais, {lv} a les larmes aux yeux.`,`When you fall silent, {lv} has tears in {a:his|her} eyes.`),D('lv','s',`La Reine avait raison. Vous avez sa voix. Et moi, je n'ai plus aucune chance de vous oublier.`,`The Queen was right. You have her voice. And I no longer stand any chance of forgetting you.`)]},
 {t:[`Demander à {lv} de te la fredonner.`,`Ask {lv} to hum it for you.`],set:'lvHummed',fx:{lv:2},r:[N(`{lv} lit la partition, s'éclaircit la gorge, et fredonne. Faux. Terriblement faux. Tu éclates de rire.`,`{lv} reads the music, clears {a:his|her} throat and hums. Off-key. Terribly off-key. You burst out laughing.`),D('lv','o',`Je vous avais prévenu{g:|e|·e} !`,`I did warn you!`),N(`Mais au troisième essai, la mélodie est presque juste. Tu poses ta tête contre son épaule et tu fermes les yeux.`,`But by the third try, the melody is almost right. You rest your head against {a:his|her} shoulder and close your eyes.`)]}
]),
N(`Vous restez ensemble jusqu'à ce que la bougie s'éteigne. Dehors, une voiture passe dans la rue déserte, au pas, sans lanternes.`,`You stay together until the candle gutters out. Outside, a carriage passes down the empty street at a walk, without lanterns.`),
{end:13}
);
