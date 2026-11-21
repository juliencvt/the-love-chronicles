/* ===== CHAPITRE 20 — Le sauvetage ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:20,card:['Chapitre 20','Chapter 20'],sub:['Le sauvetage','The Rescue'],where:['Grosvenor Street, une heure du matin','Grosvenor Street, one in the morning']},
{st:['bess']},
N(`Pendant ce temps, à Grosvenor Street. L'horloge de la cuisine sonne un coup. Bess se lève d'un bond, renverse sa chaise et court jusqu'à la porte.`,`Meanwhile, on Grosvenor Street. The kitchen clock strikes one. Bess leaps up, knocks over her chair and runs to the door.`),
...IF('leftNote',[D('bess','a',`Une heure pile. Le vieux kiosque de Chelsea. J'y vais. Non : je vais chercher du monde, et ensuite j'y vais.`,`One o'clock sharp. The old Chelsea bandstand. I'm going. No: I'm fetching people, and then I'm going.`)],
 [D('bess','a',`Une heure, et toujours pas rentré{e}. Le cocher du coin dit l'avoir déposé{e} à Chelsea. Seigneur. Il me faut du monde. Tout de suite.`,`One o'clock and still not home. The hackney driver on the corner says he dropped them in Chelsea. Lord. I need people. Right now.`)]),
{bg:'street',mus:'mystery',where:['Les rues de Londres','The streets of London']},
{st:['lv','bess']},
N(`Bess court jusque chez {lv}, en chemise de nuit et en châle, et tambourine à la porte jusqu'à réveiller la moitié de la rue.`,`Bess runs to {lv}'s, in her nightgown and shawl, and pounds on the door until half the street is awake.`),
D('lv','o',`Un billet ? De moi ? Je n'ai jamais écrit de billet !`,`A note? From me? I never wrote any note!`),
D('bess','a',`Alors quelqu'un d'autre l'a fait. Et {title} est à Chelsea, toute seule… tout seul… enfin, seul{e} !`,`Then someone else did. And {title} is in Chelsea, all alone!`),
{st:['clem','theo']},
N(`En vingt minutes, une petite troupe se rassemble devant Pembroke House : {lv}, Bess, Clem en manteau sur sa chemise de nuit, Théo qui charge un pistolet en bâillant, et Lord Pembroke, qui a réveillé deux constables de Bow Street.`,`Within twenty minutes, a small band gathers outside Pembroke House: {lv}, Bess, Clem in a coat over her nightgown, Theo loading a pistol while yawning, and Lord Pembroke, who has roused two Bow Street constables.`),
D('theo','n',`Chelsea, c'est grand. Il nous faut une adresse.`,`Chelsea is big. We need an address.`),
...IF('knowVilla',[D('clem','a',`On l'a ! La carte dans le réticule de Cordelia, à Vauxhall. Villa des Saules, Chelsea.`,`We have it! The card in Cordelia's reticule, at Vauxhall. Willow Villa, Chelsea.`)],
 [...IF('twinAlly',[{st:['twinA','clem']},N(`Une calèche freine devant vous dans un grand fracas. {tA} en descend, en tenue de soirée froissée.`,`A carriage pulls up in front of you with a great clatter. {tA} jumps out, in rumpled evening dress.`),D('twinA','a',`J'ai vu passer la voiture d'Iris en rentrant du club. Vers la Villa des Saules, au bord du fleuve. Je l'y ai déjà vue dîner. Montez, je vous y emmène.`,`I saw Iris's carriage go by on my way home from the club. Towards Willow Villa, by the river. I've seen her dine there before. Get in, I'll take you.`)],
  [D('theo','n',`À Vauxhall, la voiture d'Iris a pris la route de Chelsea, vers le fleuve. Il n'y a qu'une grande maison isolée au bord de l'eau, là-bas : la Villa des Saules.`,`At Vauxhall, Iris's carriage took the Chelsea road, towards the river. There's only one big, isolated house on the water there: Willow Villa.`)])]),

{bg:'cellar',mus:'mystery',card:['Trois heures du matin','Three in the morning'],sub:['',''],where:['La cave','The cellar']},
{st:['mc']},
N(`Dans la cave, l'eau t'arrive à la taille. Elle est glacée. Tu as réussi à te lever, la chaise toujours attachée dans ton dos, et tu t'appuies contre le mur pour garder la tête haute.`,`In the cellar, the water is up to your waist. It's ice-cold. You've managed to stand, the chair still tied to your back, and you lean against the wall to keep your head up.`),
D('mc','s',`(Je pense à la berceuse. « Pour mon enfant, que je n'ai pas encore vu. » Je me la chante tout bas, pour ne pas avoir peur.)`,`(I think of the lullaby. "For my child, whom I have not yet seen." I sing it softly to myself, so as not to be afraid.)`),
N(`Au-dessus de toi, des voix. Des pas. Iris, sur les marches, qui parle à quelqu'un derrière la porte.`,`Above you, voices. Footsteps. Iris, on the stairs, talking to someone behind the door.`),
D('iris','a',`Le remède, la Tamise… quelle différence, au fond ? Isadora s'est endormie. Son enfant s'endormira aussi. C'est presque de la tendresse.`,`The remedy, the Thames… what's the difference, really? Isadora fell asleep. Her child will fall asleep too. It's almost tender.`),
N(`Un fracas de bois brisé. Des cris. Une voix que tu connais par cœur.`,`A crash of splintering wood. Shouts. A voice you know by heart.`),
D('lv','a',`{first} !`,`{first}!`),
D('lordp','a',`Constables ! Arrêtez cette femme ! Vous l'avez entendue comme moi !`,`Constables! Arrest that woman! You heard her as well as I did!`),
{set:'confessionWitnessed'},
...IF('appealCordelia',[N(`La porte de la cave cède au premier coup d'épaule. Elle n'était fermée qu'à un seul tour. Et la clé est restée dans la serrure, comme oubliée là exprès.`,`The cellar door gives way at the first shoulder-charge. It was only locked once. And the key has been left in the lock, as if forgotten there on purpose.`)],
 [N(`La porte de la cave résiste. Un coup d'épaule. Deux. Trois. Au quatrième, Théo tire dans la serrure, et le bois éclate.`,`The cellar door holds. One shoulder-charge. Two. Three. At the fourth, Theo fires into the lock, and the wood bursts apart.`)]),
{st:['lv','mc']},
N(`{lv} plonge dans l'eau noire sans hésiter. {a:Il|Elle} tranche tes liens avec un canif, te soulève, te serre contre {a:lui|elle}. Tu sens son cœur battre à tout rompre contre ta joue.`,`{lv} plunges into the black water without hesitation. {a:He|She} cuts your bonds with a penknife, lifts you up, holds you tight. You feel {a:his|her} heart pounding against your cheek.`),
D('lv','s',`Je te tiens. Je te tiens. Je ne te lâche plus jamais.`,`I've got you. I've got you. I'm never letting go again.`),
{bg:'river',mus:'mystery',where:['Le ponton de la Villa des Saules','The Willow Villa jetty']},
{st:['lv','mc']},
N(`Dehors, sur le ponton, la nuit est pleine de lanternes et de cris. Dans la confusion, une silhouette en noir saute dans une barque amarrée et pousse sur l'eau. Iris.`,`Outside, on the jetty, the night is full of lanterns and shouting. In the confusion, a figure in black jumps into a moored boat and pushes off. Iris.`),
D('lv','a',`Elle s'enfuit ! Je peux la rattraper, la barque est lente…`,`She's getting away! I can catch her, the boat is slow…`),
C('m39',1,[
 {t:[`« Reste. Reste avec moi. »`,`"Stay. Stay with me."`],set:'lvStayed',fx:{lv:3},r:[
  N(`Tu agrippes sa chemise trempée. {lv} hésite une seconde, regarde la barque… puis s'agenouille près de toi et te serre contre {a:lui|elle}.`,`You grip {a:his|her} soaked shirt. {lv} hesitates for a second, looks at the boat… then kneels beside you and holds you close.`),
  D('lv','s',`Tu as raison. Elle, je m'en fiche. Toi, non.`,`You're right. I don't care about her. I care about you.`),
  N(`Au loin, la barque d'Iris disparaît dans la brume. Mais un constable a eu le temps de noter le nom du passeur qui l'attendait sur l'autre rive.`,`In the distance, Iris's boat vanishes into the mist. But a constable has had time to note the name of the ferryman waiting for her on the far bank.`)
 ]},
 {t:[`« Rattrape-la ! Pour Isadora ! »`,`"Catch her! For Isadora!"`],set:'lvChased',fx:{lv:1,rep:1},r:[
  N(`{lv} t'enveloppe dans sa veste, te confie à Clem, et court le long de la berge. {a:Il|Elle} saute sur une autre barque, rame comme un{a:|e} {a:forcené|forcenée}…`,`{lv} wraps you in {a:his|her} coat, hands you over to Clem, and runs along the bank. {a:He|She} jumps into another boat, rows like someone possessed…`),
  N(`Dix minutes plus tard, {lv} revient, trempé{a:|e}, une manche arrachée, traînant Iris par le bras jusqu'aux constables.`,`Ten minutes later, {lv} comes back, soaked, one sleeve torn off, dragging Iris by the arm to the constables.`),
  D('iris','a',`Lâchez-moi ! Vous ne savez pas à qui vous avez affaire !`,`Let go of me! You don't know who you're dealing with!`),
  D('lv','a',`Si. À une meurtrière. Et à la tante de la personne que j'aime. Ce qui n'arrange pas votre cas.`,`I do. A murderess. And the aunt of the person I love. Which doesn't help your case.`),
  {set:'irisCaught'}
 ]}
]),
{st:['clem','mc']},
D('clem','s',`Cordelia ? Où est Cordelia ?`,`Cordelia? Where's Cordelia?`),
D('theo','s',`Personne ne l'a vue. Elle a disparu avant notre arrivée.`,`No one's seen her. She vanished before we arrived.`),
N(`Clem regarde le fleuve noir. Tu ne sais pas si elle espère qu'on la retrouve… ou qu'on ne la retrouve jamais.`,`Clem gazes at the black river. You can't tell whether she hopes they'll find her… or that they never will.`),

{bg:'street',mus:'tender',card:['L\'aube','Dawn'],sub:['',''],where:['Dans la voiture','In the carriage']},
{st:['lv','mc']},
N(`Dans la voiture qui vous ramène, tu grelottes sous trois couvertures. {lv} te tient contre {a:lui|elle}, frotte tes mains glacées entre les siennes, embrasse tes cheveux mouillés.`,`In the carriage taking you home, you shiver under three blankets. {lv} holds you close, rubs your frozen hands between {a:his|hers}, kisses your wet hair.`),
D('lv','s',`Quand j'ai vu l'eau… quand j'ai vu jusqu'où elle montait… J'ai cru que je t'avais perdu{g:|e|·e}. J'ai cru que j'arrivais trop tard. Comme pour Isadora.`,`When I saw the water… when I saw how high it had risen… I thought I'd lost you. I thought I'd come too late. Like with Isadora.`),
D('mc','s',`Tu es arrivé{a:|e} à temps. Tu arrives toujours à temps.`,`You came in time. You always come in time.`),
C('m40',1,[
 {t:[`Lui dire que tu veux passer ta vie avec {a:lui|elle}.`,`Tell {a:him|her} you want to spend your life with {a:him|her}.`],set:'wantLife',fx:{lv:3},r:[
  D('mc','s',`Dans cette cave, j'ai pensé à une seule chose. Pas à l'héritage. Pas à Iris. À toi. Je veux passer ma vie avec toi. Toute ma vie.`,`In that cellar, I thought of only one thing. Not the inheritance. Not Iris. You. I want to spend my life with you. All of it.`),
  N(`{lv} ne répond pas tout de suite. {a:Il|Elle} te regarde comme si tu venais de décrocher la lune. Puis {a:il|elle} sourit, avec un drôle d'air, comme quelqu'un qui garde un secret.`,`{lv} doesn't answer right away. {a:He|She} looks at you as if you'd just brought down the moon. Then {a:he|she} smiles, with an odd look, like someone keeping a secret.`),
  D('lv','h',`Garde cette pensée bien au chaud. On en reparlera. Très bientôt.`,`Keep that thought nice and warm. We'll talk about it again. Very soon.`)
 ]},
 {t:[`Juste fermer les yeux et te laisser réchauffer.`,`Just close your eyes and let yourself be warmed.`],set:'restInArms',fx:{lv:2},r:[
  N(`Tu fermes les yeux. Le balancement de la voiture, la chaleur de {lv}, son cœur qui ralentit enfin contre ton oreille. Tu t'endors avant Piccadilly.`,`You close your eyes. The sway of the carriage, {lv}'s warmth, {a:his|her} heart finally slowing against your ear. You're asleep before Piccadilly.`),
  D('lv','s',`(Dors. Je veille. Je veillerai toujours.)`,`(Sleep. I'm watching over you. I always will.)`)
 ]}
]),
{end:20}
);
