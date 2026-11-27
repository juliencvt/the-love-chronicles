/* ===== LA FIANCÉE DU CORSAIRE — SAISON 3 — CHAPITRE 19 — Les adieux ===== */
STORY.push(
{bg:'hut',mus:'tender',chap:163,card:['Saison 3 · Chapitre 19','Season 3 · Chapter 19'],sub:['Les adieux','Farewells'],where:['L\'Îlet aux Lucioles, quelques semaines plus tard','Firefly Islet, a few weeks later']},
{st:['clemence','mc']},
N(`Il faut bien repartir, un jour. Ton père t'attend à Port-Royal. Il ne sait encore rien. Il va falloir le lui annoncer en personne. Une nouvelle comme ça ne s'écrit pas dans une lettre.`,`You have to leave one day. Your father is waiting in Port Royal. He doesn't know anything yet. You'll have to tell him in person. News like this isn't for a letter.`),
N(`La veille du départ, Clémence prépare un dernier repas. Le plus grand de tous. Toute la table de la véranda déborde de plats. Et autour, tous ceux qui ont vécu la nuit des ombres.`,`On the eve of departure Clémence prepares one last meal. The biggest of all. The whole veranda table overflows with dishes. And round it, everyone who lived through the night of the shadows.`),
...IF('pFanchonSaved',[
 {st:['nan','mc']},
 N(`Après le repas, Fanchon t'emmène marcher sur la plage. Elle s'appuie sur sa canne. Elle marche lentement. Elle ne dit rien pendant un long moment.`,`After the meal Fanchon takes you walking on the beach. She leans on her cane. She walks slowly. She says nothing for a long while.`),
 D('nan','s',`Je ne repars pas avec toi, chérie.`,`I'm not coming with you, chérie.`),
 D('mc','s',`Je sais.`,`I know.`),
 D('nan','s',`Ma mère s'est réveillée après vingt ans. Elle a tout à réapprendre. Ma sœur ne peut pas s'en occuper toute seule. Et puis… j'ai passé vingt ans à fuir cette île. Il est temps que j'y reste un peu. Que je la regarde. Que je la sente.`,`My mother woke after twenty years. She has everything to relearn. My sister can't manage alone. And besides… I spent twenty years running from this island. It's time I stayed a while. Looked at it. Breathed it.`),
 N(`Elle s'arrête. Elle se tourne vers toi. Elle te prend le visage entre ses mains calleuses, comme dans le cabinet du gouverneur de La Havane, le soir où elle t'a dit de sauter.`,`She stops. She turns to you. She takes your face in her callused hands, as in the Governor of Havana's study, the night she told you to jump.`),
 D('nan','s',`Tu as été la meilleure chose qui me soit arrivée en mer. Tu m'as ramenée à la maison. Je ne l'oublierai jamais. Et ta petite famille, tu as intérêt à me l'amener. Souvent. Sinon je viens la chercher moi-même. Avec mes deux pistolets.`,`You were the best thing that ever happened to me at sea. You brought me home. I'll never forget it. And that little family of yours, you'd better bring it to me. Often. Otherwise I'll come and fetch it myself. With both pistols.`),
 C('p63a',0,[
  {t:[`La serrer dans tes bras, très fort.`,`Hug her, very tight.`],fx:{rep:2},r:[N(`Tu la serres dans tes bras. Elle sent le tabac, la cannelle, le linge propre. Tu ne veux pas la lâcher. Elle non plus. Vous restez comme ça, sur la plage, jusqu'à ce que la marée vous mouille les pieds.`,`You hug her. She smells of tobacco, cinnamon, clean linen. You don't want to let go. Nor does she. You stay like that on the beach until the tide wets your feet.`)]},
  {t:[`« Merci, Fanchon. Pour tout. Pour m'avoir appris à être capitaine. »`,`"Thank you, Fanchon. For everything. For teaching me to be a captain."`],fx:{rep:3},r:[N(`Fanchon secoue la tête. « Je ne t'ai rien appris, chérie. Tu savais déjà tout. J'ai juste ouvert la porte. » Puis elle te serre dans ses bras, très fort, et elle tourne les talons avant que tu voies ses larmes. Mais tu les as vues quand même.`,`Fanchon shakes her head. "I taught you nothing, chérie. You already knew it all. I just opened the door." Then she hugs you very tight and turns on her heel before you can see her tears. But you saw them anyway.`)]}
 ]),
],[
 {st:['clemence','mc']},
 N(`Après le repas, Clémence t'emmène marcher sur la plage, avec sa mère, qui s'appuie à son bras. La vieille dame marche lentement. Elle a encore du mal. Mais elle regarde tout, avec des yeux émerveillés, comme une enfant.`,`After the meal Clémence takes you walking on the beach with her mother, who leans on her arm. The old lady walks slowly. It's still hard for her. But she looks at everything with wondering eyes, like a child.`),
 D('clemence','s',`Fanchon aurait voulu être là. Elle aurait voulu voir maman se réveiller. Elle a passé sa vie à chercher ce navire. Et c'est toi qui l'as trouvé.`,`Fanchon would have wanted to be here. She'd have wanted to see Maman wake. She spent her life looking for that ship. And you're the one who found it.`),
 D('mc','s',`Je crois qu'elle était là. D'une certaine façon.`,`I think she was here. In a way.`),
 N(`La vieille dame s'arrête. Elle te prend la main, et y glisse quelque chose. Le ruban de Martinique. Celui de Fanchon. Elle referme tes doigts dessus.`,`The old lady stops. She takes your hand and slips something into it. The Martinique ribbon. Fanchon's. She closes your fingers over it.`),
 N(`« Garde-le, ma fille. Ma Fanchon t'a choisie. Alors tu es un peu à moi, toi aussi. Et ta famille aussi. Reviens nous voir. Souvent. »`,`"Keep it, child. My Fanchon chose you. So you're a little bit mine too. And your family too. Come back and see us. Often."`),
 N(`Tu la serres dans tes bras. Elle est toute petite, toute légère. Elle sent la cannelle. Comme sa fille.`,`You hug her. She's tiny, light as a bird. She smells of cinnamon. Like her daughter.`),
]),
{bg:'docks',mus:'tender',card:['Céleste','Céleste'],sub:['',''],where:['Le ponton, le matin du départ','The jetty, the morning of departure']},
{st:['celeste','clemence']},
N(`Le matin du départ, sur le ponton, Céleste attend, un sac de toile sur l'épaule. Clémence est à côté d'elle, les bras croisés, l'air sévère. Mais ses yeux brillent.`,`On the morning of departure, Céleste is waiting on the jetty with a canvas bag on her shoulder. Clémence stands beside her, arms folded, looking stern. But her eyes are shining.`),
D('clemence','n',`Elle veut partir avec vous. Elle me le demande depuis un mois. Tous les jours. Matin, midi et soir. J'ai dit non trente fois.`,`She wants to go with you. She's been asking me for a month. Every day. Morning, noon and night. I've said no thirty times.`),
D('celeste','a',`Trente-deux.`,`Thirty-two.`),
D('clemence','s',`Trente-deux. Et à la trente-troisième, j'ai dit oui. Parce que sa tante était pareille. Et que si je dis non, elle volera une barque, comme sa tante. Alors autant qu'elle parte avec des gens que j'aime.`,`Thirty-two. And on the thirty-third, I said yes. Because her aunt was the same. And if I say no, she'll steal a boat, like her aunt. So she might as well go with people I love.`),
...IF('pTiagoSaved',[
 N(`Derrière Céleste, Tiago porte son propre sac, et sa guitare. Il a l'air terrifié. Clémence se tourne vers lui, et le regarde de haut en bas, exactement comme elle avait regardé {lv} le premier jour.`,`Behind Céleste, Tiago carries his own bag and his guitar. He looks terrified. Clémence turns to him and looks him up and down, exactly as she looked at {lv} the first day.`),
 D('clemence','n',`Et toi. Tu prends soin d'elle. Sinon je viens te chercher, où que tu sois. Avec mon torchon.`,`And you. You take care of her. Otherwise I'll come and find you wherever you are. With my dishcloth.`),
 D('tiago','s',`Oui, madame. Je vous le jure, madame. Sur ma guitare.`,`Yes, madam. I swear, madam. On my guitar.`),
],[]),
C('p63b',0,[
 {t:[`« Bienvenue à bord, matelot Céleste. »`,`"Welcome aboard, Able Seaman Céleste."`],set:'pCelesteCrew',fx:{rep:2},r:[N(`Céleste pousse un cri de joie et se jette au cou de sa mère. Puis au tien. Puis à celui de Kit, qui devient tout rouge. Puis elle saute à bord de *La Fiancée* sans même attendre la passerelle, et manque de tomber à l'eau. Exactement comme sa tante.`,`Céleste whoops with joy and throws herself on her mother's neck. Then yours. Then Kit's, who goes bright red. Then she jumps aboard *The Bride* without waiting for the gangplank and nearly falls in. Exactly like her aunt.`)]},
 {t:[`« Bienvenue à bord. Mais tu commences par le pont. Comme tout le monde. »`,`"Welcome aboard. But you start by scrubbing the deck. Like everyone."`],set:'pCelesteCrew',fx:{rep:2},r:[N(`Céleste hoche la tête, très sérieuse. « Oui, capitaine. » Puis elle se jette au cou de sa mère, et monte à bord en courant. Dix minutes plus tard, elle frotte déjà le pont avec une énergie qui fait rire tout l'équipage. Kit lui montre comment faire. Elle l'ignore superbement.`,`Céleste nods, very serious. "Yes, captain." Then she flings her arms round her mother and runs aboard. Ten minutes later she's already scrubbing the deck with an energy that makes the whole crew laugh. Kit shows her how. She magnificently ignores him.`)]}
]),
{bg:'ship',mus:'tender',card:['Le départ','Departure'],sub:['',''],where:['*La Fiancée*, au large de l\'îlet','*The Bride*, off the islet']},
{st:['lv','mc']},
N(`*La Fiancée* quitte le ponton. À son bord : {lv} et toi, les deux capitaines. Matthias à la barre. {ot} dans la mâture. Kit et Céleste qui se disputent déjà sur la meilleure façon de lover un cordage.`,`*The Bride* leaves the jetty. Aboard: you and {lv}, the two captains. Matthias at the helm. {ot} in the rigging. Kit and Céleste already arguing about the best way to coil a rope.`),
...IF('pTiagoSaved',[
 N(`Et Tiago, assis sur le rouf, qui joue une chanson d'adieu sur sa guitare, pendant que Céleste fait semblant de ne pas l'écouter.`,`And Tiago, sitting on the deckhouse, playing a farewell song on his guitar while Céleste pretends not to listen.`),
],[]),
...IF('pAdopted',[
 N(`Et {kid}, debout à la proue, dans les bras de {lv}, qui agite ses petites mains vers la plage en riant.`,`And {kid}, standing at the bow in {lv}'s arms, waving her little hands at the beach and laughing.`),
],[]),
N(`Sur le ponton, tout le village vous regarde partir. Clémence agite son torchon. La vieille dame lève la main. Man Sidonie, assise dans son fauteuil à bascule, fume sa pipe. Et au bout du ponton, là où Isaure a attendu pendant vingt ans, il y a un bouquet de fleurs blanches, tout frais.`,`On the jetty the whole village watches you go. Clémence waves her dishcloth. The old lady raises her hand. Man Sidonie, in her rocking chair, smokes her pipe. And at the end of the jetty, where Isaure waited for twenty years, there's a bouquet of white flowers, quite fresh.`),
N(`Tu ne sauras jamais qui l'a mis là. Mais ce matin, pour la première fois depuis cent ans, il n'y a personne qui attend au bout du ponton. Juste des fleurs. Et des lucioles, en plein jour, qui dansent au-dessus.`,`You'll never know who put it there. But this morning, for the first time in a hundred years, there's no one waiting at the end of the jetty. Just flowers. And fireflies, in broad daylight, dancing above them.`),
{end:163}
);
