/* ===== LA FIANCÉE DU CORSAIRE — SAISON 2 — CHAPITRE 8 — La Bouche du Diable ===== */
(function(){
const SAVED=()=>[
 {set:'pFanchonSaved'},
 {bg:'ship',mus:'tender',card:['Fanchon','Fanchon'],sub:['',''],where:['Le Siren\'s Due','The Siren\'s Due']},
 {st:['nan','mc']},
 N(`Quand la chaloupe accoste le *Siren's Due*, tout l'équipage est au bastingage. Personne ne crie. Personne n'ose. Puis Fanchon pose le pied sur le pont, maigre, sale, une cheville bandée, et elle dit, de sa voix de quartier-maître :`,`When the launch comes alongside the *Siren's Due*, the whole crew is at the rail. No one cheers. No one dares. Then Fanchon sets foot on deck, thin, filthy, one ankle bandaged, and says in her quartermaster's voice:`),
 D('nan','h',`Qu'est-ce que vous regardez, bande de chiens ? Le pont n'a pas été lavé depuis que je suis partie, ça se voit d'ici.`,`What are you lot gawping at, you dogs? This deck hasn't been scrubbed since I left, I can see it from here.`),
 N(`Alors là, oui, ils crient. Matthias la soulève comme une enfant. Kit pleure sans honte. {li1} la serre si fort qu'elle proteste en créole qu'on va lui casser les côtes. Et toi, tu restes un peu à l'écart, parce que tes jambes ne te portent plus.`,`Then, yes, they cheer. Matthias lifts her like a child. Kit weeps without shame. {li1} hugs her so hard she protests in Creole that you'll crack her ribs. And you hang back a little, because your legs won't hold you any more.`),
 N(`Fanchon finit par se dégager. Elle traverse le pont en boitant et vient se planter devant toi. Elle te regarde longtemps.`,`Fanchon finally breaks free. She limps across the deck and plants herself in front of you. She looks at you a long while.`),
 D('nan','n',`Je t'avais dit que tu reviendrais. Je me trompe jamais, chérie. Presque jamais.`,`I told you you'd come back. I'm never wrong, chérie. Almost never.`),
 N(`Elle te prend dans ses bras. Elle sent la geôle, la mer et le tabac. C'est la meilleure odeur du monde.`,`She takes you in her arms. She smells of the cell, the sea and tobacco. It's the best smell in the world.`),
 D('nan','s',`Et maintenant, écoute bien. Pendant trois jours, j'ai entendu les gardes parler. Blackwood a été soigné. Il a avancé la date. La flotte part dans neuf jours, pas dix. Il sait que vous avez vu le plan. Mais il ne change pas le plan. Il est trop orgueilleux pour ça. Il croit que ton père ne te croira pas.`,`And now listen carefully. For three days I heard the guards talk. Blackwood's been patched up. He's moved the date forward. The fleet sails in nine days, not ten. He knows you've seen the plan. But he isn't changing the plan. He's too proud for that. He thinks your father won't believe you.`),
];
const LOST=()=>[
 {set:'pFanchonLost'},
 {bg:'ship',mus:'calm',card:['Fanchon','Fanchon'],sub:['',''],where:['La chaloupe, au large du Morro','The launch, off the Morro']},
 {st:['nan','mc']},
 N(`Vous courez. Fanchon s'appuie sur ton épaule, sa cheville brisée traînant sur la roche. La grotte. L'eau jusqu'à la taille. La chaloupe. Derrière, les torches, les cris, et le premier coup de mousquet.`,`You run. Fanchon leans on your shoulder, her broken ankle dragging on the rock. The cave. Water to the waist. The launch. Behind, the torches, the shouts, and the first musket shot.`),
 N(`Elle ne crie pas quand la balle la touche. Elle te pousse dans la chaloupe d'un dernier coup d'épaule, comme dans le cabinet du gouverneur, et Matthias la hisse derrière toi. Les rameurs souquent. Le Morro tire dans le noir, au hasard.`,`She doesn't cry out when the ball hits her. She shoves you into the launch with one last heave of her shoulder, as in the Governor's study, and Matthias hauls her in after you. The oarsmen pull. The Morro fires blind into the dark.`),
 N(`Au fond de la chaloupe, tu tiens sa tête sur tes genoux. Il y a du sang partout, trop de sang, et elle sourit.`,`In the bottom of the launch you hold her head in your lap. There's blood everywhere, too much blood, and she's smiling.`),
 D('nan','n',`T'es revenue. Je savais. Je me trompe jamais, chérie.`,`You came back. I knew it. I'm never wrong, chérie.`),
 D('mc','n',`Tais-toi. Garde tes forces. On sera au navire dans cinq minutes.`,`Hush. Save your strength. We'll be at the ship in five minutes.`),
 D('nan','n',`Écoute-moi. Les gardes parlaient. La flotte part dans neuf jours, pas dix. Blackwood sait que tu as vu le plan, mais il le change pas. Trop orgueilleux. Il croit que ton père te croira pas.`,`Listen to me. The guards were talking. The fleet sails in nine days, not ten. Blackwood knows you've seen the plan but he's not changing it. Too proud. He thinks your father won't believe you.`),
 N(`Elle cherche ta main. Tu la lui donnes.`,`She feels for your hand. You give it to her.`),
 D('nan','n',`Tu feras une bonne capitaine. Meilleure que {li1}. Le lui dis pas.`,`You'll make a good captain. Better than {li1}. Don't tell {a:him|her}.`),
 N(`Quand la chaloupe accoste le *Siren's Due*, Fanchon Doucet a fermé les yeux. Elle sourit toujours. Elle avait raison : tu es revenue.`,`When the launch comes alongside the *Siren's Due*, Fanchon Doucet has closed her eyes. She's still smiling. She was right: you came back.`),
 {bg:'ship',mus:'calm',card:['À la mer','Committed to the deep'],sub:['',''],where:['Le Siren\'s Due, à l\'aube','The Siren\'s Due, at dawn']},
 {st:['li1','mc']},
 N(`À l'aube, on la confie à la mer, cousue dans une voile, avec ses deux pistolets et un ruban de Martinique. {li1} lit les articles du navire, parce que c'est la seule prière que Fanchon ait jamais respectée. Matthias chante quelque chose en créole, très bas, d'une voix qui ne tremble pas. Kit ne pleure pas, et c'est pire que s'il pleurait.`,`At dawn she's given to the sea, sewn into a sail, with her two pistols and a Martinique ribbon. {li1} reads the ship's articles, because it's the only prayer Fanchon ever respected. Matthias sings something in Creole, very low, in a voice that doesn't shake. Kit doesn't cry, and that's worse than if he did.`),
 N(`Puis {li1} referme le livre et se tourne vers l'ouest. Vers la Jamaïque. Sa voix est très calme. Trop calme.`,`Then {li1} closes the book and turns to the west. Towards Jamaica. {a:His|Her} voice is very calm. Too calm.`),
 D('li1','s',`Blackwood me doit une mère. Il va payer.`,`Blackwood owes me a mother. He's going to pay.`),
];
STORY.push(
{bg:'cellar',mus:'mystery',chap:130,card:['Saison 2 · Chapitre 8','Season 2 · Chapter 8'],sub:['La Bouche du Diable','The Devil\'s Mouth'],where:['Sous la forteresse du Morro, La Havane','Beneath the Morro fortress, Havana']},
{st:['esteban','mc']},
N(`Marée basse. Minuit. La chaloupe glisse sans bruit sous la falaise du Morro, rames emmaillotées de chiffons. Au-dessus, les sentinelles chantent pour rester éveillées.`,`Low tide. Midnight. The launch slides silently under the cliff of the Morro, oars muffled in rags. Above, the sentries sing to stay awake.`),
N(`Tu as remis ta cape à capuchon, la noire. Esteban porte son uniforme d'officier espagnol, recousu en hâte. Derrière toi, {li2} et Matthias, un couteau entre les dents. {li1} est resté{a:|e} sur le *Siren's Due*, prêt{a:|e} à venir vous chercher. {a:Il|Elle} a juré qu'{a:il|elle} n'attendrait qu'une heure. Ensuite, {a:il|elle} attaquera le Morro tout{a:|e} seul{a:|e}, s'il le faut.`,`You've put your hooded cape back on, the black one. Esteban wears his Spanish officer's uniform, hastily mended. Behind you, {li2} and Matthias, knives between their teeth. {li1} has stayed on the *Siren's Due*, ready to come for you. {a:He|She} swore {a:he|she}'d wait only an hour. After that {a:he|she}'ll attack the Morro single-handed, if need be.`),
...IF('pChoseRook',[
 {st:['li1','mc']},
 N(`Avant que la chaloupe parte, {li1} t'attrape par la nuque et pose son front contre le tien. Sur le pont, personne ne regarde. Tout le monde regarde.`,`Before the launch leaves, {li1} catches the back of your neck and rests {a:his|her} forehead against yours. On deck, nobody looks. Everybody looks.`),
 D('li1','s',`Une heure. Pas une minute de plus. Ramène-la. Et ramène-toi.`,`One hour. Not a minute more. Bring her back. And bring yourself back.`),
],[...IF('pChoseHenry',[
 {st:['li2','mc']},
 N(`Dans la chaloupe, {li2} s'assoit à côté de toi, une épée sur les genoux. {a:Il|Elle} est très pâle. Tu prends sa main. Elle est glacée.`,`In the launch {li2} sits beside you, a sword across {a:his|her} knees. {a:He|She}'s very pale. You take {a:his|her} hand. It's ice-cold.`),
 D('li2','s',`Je n'ai pas peur pour moi. J'ai peur pour vous. C'est beaucoup plus fatigant.`,`I'm not afraid for myself. I'm afraid for you. It's far more tiring.`),
],[
 {st:['mc']},
 N(`Dans la chaloupe, personne ne parle. Tu regardes la falaise noire du Morro grandir devant toi. C'est ta quartier-maître, là-dedans. C'est ton équipage. C'est à toi d'aller la chercher.`,`In the launch, no one speaks. You watch the black cliff of the Morro grow before you. That's your quartermaster in there. That's your crew. It's up to you to fetch her.`),
])]),
N(`La Bouche du Diable pue les ordures et la vase. Vous rampez dans le boyau, dans l'eau noire jusqu'aux coudes. Au bout, une grille rouillée, et derrière, les cachots.`,`The Devil's Mouth reeks of rubbish and silt. You crawl along the passage in black water up to the elbows. At the end, a rusted grate, and behind it, the cells.`),
N(`Matthias tord la grille à mains nues. Le métal grince. Vous retenez votre souffle. Personne ne vient.`,`Matthias bends the grate with his bare hands. The metal shrieks. You hold your breath. No one comes.`),
N(`Au bout du boyau, un escalier de pierre. Des voix au-dessus. Une patrouille. Vous vous plaquez contre la paroi humide, sans respirer, pendant que trois soldats passent à deux mètres de vous en se plaignant de la soupe. Leurs pas s'éloignent. Esteban te fait signe : à gauche. Les cachots.`,`At the end of the passage, a stone stair. Voices above. A patrol. You flatten yourselves against the wet wall, not breathing, while three soldiers pass two yards away complaining about the soup. Their steps fade. Esteban signals: left. The cells.`),
{bg:'cellar',mus:'mystery',card:['Les cachots','The cells'],sub:['',''],where:['Les cachots du Morro','The Morro\'s dungeons']},
N(`Le couloir des cachots est éclairé par une seule torche. Au fond, assis sur un tabouret, un geôlier somnole. Et dans la dernière cellule, recroquevillée contre le mur, une silhouette que tu reconnaîtrais entre mille.`,`The cell corridor is lit by a single torch. At the end, sitting on a stool, a jailer dozes. And in the last cell, curled against the wall, a figure you'd know among a thousand.`),
D('nan','n',`T'en as mis du temps, chérie.`,`Took your time, chérie.`),
N(`Sa voix est rauque, mais c'est sa voix. Elle essaie de se lever. Sa cheville gauche est enflée, violette, tordue dans un angle qui te fait mal rien qu'à la regarder. Elle ne pourra pas courir.`,`Her voice is hoarse, but it's her voice. She tries to stand. Her left ankle is swollen, purple, twisted at an angle that hurts just to look at. She won't be able to run.`),
N(`Le geôlier ouvre les yeux. Il voit Esteban, son uniforme, puis toi, puis les autres. Il porte la main à sa ceinture. À son sifflet.`,`The jailer opens his eyes. He sees Esteban, his uniform, then you, then the others. He reaches for his belt. For his whistle.`),
...IF('pGoldEsteban',[
 D('esteban','a',`¡Espera, Tomás!`,`Wait, Tomás!`),
 N(`Le geôlier se fige. Esteban lui parle vite, à voix basse, en espagnol. Tu saisis quelques mots. *Santa Lucía*. *Carthagène*. *Tu padre*. Puis ton nom.`,`The jailer freezes. Esteban speaks to him quickly, quietly, in Spanish. You catch a few words. *Santa Lucía*. *Cartagena*. *Tu padre*. Then your name.`),
 N(`Le geôlier te regarde. Il est jeune, sous sa moustache. Il a des yeux très noirs, humides tout à coup.`,`The jailer looks at you. He's young under his moustache. He has very dark eyes, suddenly wet.`),
 D('esteban','n',`Son père était canonnier sur le *Santa Lucía*. Sa mère attend encore à Carthagène. Je lui ai dit ce que vous avez promis pour les familles. Il dit qu'il n'a rien vu cette nuit. Et qu'il connaît un escalier où personne ne passe.`,`His father was a gunner on the *Santa Lucía*. His mother still waits in Cartagena. I told him what you promised for the families. He says he saw nothing tonight. And that he knows a stairway no one uses.`),
 N(`Tomás décroche ses clés. La porte du cachot s'ouvre sans un grincement : il en graisse les gonds tous les soirs, dit-il, pour ne pas réveiller les prisonniers. Matthias soulève Fanchon dans ses bras. Tomás vous guide par un escalier dérobé jusqu'à une poterne qui donne sur les rochers, et la chaloupe. Quand vous partez, il se signe, et murmure quelque chose pour son père.`,`Tomás unhooks his keys. The cell door opens without a creak: he oils the hinges every evening, he says, so as not to wake the prisoners. Matthias lifts Fanchon in his arms. Tomás leads you down a hidden stair to a postern onto the rocks, and the launch. As you leave, he crosses himself and murmurs something for his father.`),
 ...SAVED(),
],[
 N(`{li2} se jette sur lui et lui arrache le sifflet. Trop tard pour le cri. Le geôlier hurle. Au-dessus, des pas. Des voix. Une cloche qui commence à sonner.`,`{li2} hurls {a:himself|herself} at him and tears away the whistle. Too late for the shout. The jailer yells. Above, footsteps. Voices. A bell beginning to ring.`),
 N(`Matthias arrache la porte du cachot. Fanchon s'accroche à ton bras. Dans une minute, tout le Morro sera dans ce couloir.`,`Matthias wrenches off the cell door. Fanchon clings to your arm. In a minute the whole Morro will be in this corridor.`),
 C('p30a',1,[
  {t:[`Faire sauter la réserve de poudre de la batterie basse pour couvrir la fuite.`,`Blow up the lower battery's powder store to cover the escape.`],gem:20,fx:{rep:3},r:[N(`Tu as vu le petit magasin à poudre en entrant, une porte bardée de fer au pied de l'escalier. Tu arraches la torche du mur, tu cours, tu fais sauter la serrure d'un coup de pistolet, et tu jettes la torche sur un baril éventré. Puis tu cours dans l'autre sens, plus vite que de ta vie. L'explosion secoue tout le Morro. La moitié de l'escalier s'effondre. Plus personne ne descendra par là cette nuit. Matthias porte Fanchon jusqu'à la grotte, dans la fumée, sans qu'un seul coup de feu ne vous rattrape.`,`You saw the little powder store on the way in, an iron-bound door at the foot of the stairs. You snatch the torch from the wall, run, blow the lock with a pistol shot, and throw the torch onto a split keg. Then you run the other way, faster than ever in your life. The explosion shakes the whole Morro. Half the stairway collapses. No one will come down that way tonight. Matthias carries Fanchon to the cave through the smoke without a single shot reaching you.`),...SAVED()]},
  {t:[`La prendre sur ton épaule et courir.`,`Take her over your shoulder and run.`],fx:{},r:[...LOST()]}
 ]),
]),
{end:130}
);
})();
