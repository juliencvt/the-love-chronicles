/* ===== LA FIANCÉE DU CORSAIRE — SAISON 3 — CHAPITRE 22 — L'horizon (finale de saison) ===== */
STORY.push(
{bg:'docks',mus:'tender',chap:166,card:['Saison 3 · Chapitre 22','Season 3 · Chapter 22'],sub:['L\'horizon','The Horizon'],where:['Le port de Port-Royal, trois semaines plus tard','Port Royal harbour, three weeks later']},
{st:['lv','mc']},
N(`Trois semaines ont passé depuis le départ de {ot}. *La Fiancée* est amarrée au bout du quai, entre un baleinier et une goélette de Boston. Tous les matins, des enfants du port viennent la regarder. Ils ont entendu parler du navire fantôme. Kit leur raconte l'histoire contre une pièce. Il en a déjà gagné dix.`,`Three weeks have passed since {ot} left. *The Betrothed* is moored at the end of the quay, between a whaler and a Boston schooner. Every morning the harbour children come to look at her. They've heard about the ghost ship. Kit tells them the story for a coin. He's made ten already.`),
N(`Ton père voulait que vous vous installiez chez lui, dans ta chambre d'enfant. Tu as refusé. Gentiment. Fermement. Ta maison, maintenant, elle flotte.`,`Your father wanted you to move in with him, into your childhood bedroom. You refused. Kindly. Firmly. Your home floats now.`),
D('lv','h',`Il l'a mal pris ?`,`Did he take it badly?`),
D('mc','h',`Il a dit « têtue comme sa mère », et il a souri. Donc non.`,`He said "stubborn as her mother" and smiled. So no.`),
{bg:'ship',mus:'calm',card:['La lettre','The letter'],sub:['',''],where:['Le pont de *La Fiancée*','The deck of *The Betrothed*']},
{st:['kit','mc']},
N(`Ce matin-là, Kit arrive en courant sur la passerelle, une enveloppe à la main, couverte de cachets de cire et de taches de sel.`,`That morning Kit comes running up the gangway, an envelope in his hand, covered in wax seals and salt stains.`),
D('kit','a',`Capitaine ! Une lettre ! De {ot} ! Le facteur dit qu'elle a fait trois navires pour arriver jusqu'ici !`,`Captain! A letter! From {ot}! The postman says it took three ships to get here!`),
...IF('pEndRook',[
 N(`L'écriture est élégante, penchée, et un peu tremblante, comme si elle avait été écrite sur un pont qui roule. {ot} est à Cuba, en route pour l'Espagne avec Esteban. Il y a trois pages sur un perroquet qui l'a mordu{a:|e}, deux pages sur la mère d'Esteban, qui lui écrit déjà, et une page entière pour toi.`,`The handwriting is elegant, slanted, a little shaky, as if written on a rolling deck. {ot} is in Cuba, bound for Spain with Esteban. There are three pages about a parrot that bit {a:him|her}, two pages about Esteban's mother, who is already writing to {a:him|her}, and a whole page for you.`),
],[
 N(`L'écriture est penchée, pressée, pleine de taches d'encre. {ot} est à Panama. {a:Il|Elle} a vendu sa cargaison, acheté des cartes du Pacifique, et recruté un cuisinier qui fait peur à tout l'équipage. Il y a trois pages sur la route, et une page entière pour toi.`,`The handwriting is slanted, hurried, full of ink blots. {ot} is in Panama. {a:He|She}'s sold the cargo, bought Pacific charts, and hired a cook who terrifies the whole crew. There are three pages about the voyage, and a whole page for you.`),
]),
N(`Au bas de la lettre, il y a un dessin. Il est absolument horrible. On y reconnaît vaguement un bateau, deux silhouettes à la barre, et quelque chose qui pourrait être une baleine, ou un chapeau. En dessous, {ot} a écrit : « C'est vous. Ne riez pas. »`,`At the bottom of the letter there's a drawing. It is absolutely dreadful. You can vaguely make out a ship, two figures at the helm, and something that might be a whale, or a hat. Underneath, {ot} has written: "It's you. Don't laugh."`),
N(`Tu ris tellement que tu dois t'asseoir sur un tonneau. Puis tu plies la lettre avec soin, et tu la ranges dans le coffre de ta mère, avec le ruban de Fanchon et la couronne de fleurs séchées de Céleste.`,`You laugh so hard you have to sit on a barrel. Then you fold the letter carefully and put it away in your mother's chest, with Fanchon's ribbon and Céleste's crown of dried flowers.`),
{bg:'ship',mus:'calm',card:['L\'équipage','The crew'],sub:['',''],where:['*La Fiancée*, l\'après-midi','*The Betrothed*, afternoon']},
{st:['matthias','mc']},
N(`L'après-midi, tout l'équipage est sur le pont. Matthias recoud une voile en chantant un psaume à l'envers. Anne, venue « juste pour la journée » depuis le *Revenge*, apprend à Kit à lancer un couteau sur une cible peinte en forme de gouverneur.`,`In the afternoon the whole crew is on deck. Matthias is mending a sail and singing a psalm backwards. Anne, over from the *Revenge* "just for the day", is teaching Kit to throw a knife at a target painted to look like a governor.`),
...IF('pCelesteCrew',[
 ...IF('pTiagoSaved',[N(`Céleste et Tiago repeignent la figure de proue. Enfin, ils essaient. Ils passent surtout leur temps à se mettre de la peinture sur le nez, chacun leur tour, en faisant semblant que c'est un accident.`,`Céleste and Tiago are repainting the figurehead. Well, trying. Mostly they take turns putting paint on each other's noses and pretending it's an accident.`)],[N(`Céleste repeint la figure de proue, toute seule, avec un soin infini. Elle lui a donné le visage d'Isaure. Elle dit que comme ça, *La Fiancée* aura toujours quelqu'un qui veille sur elle.`,`Céleste is repainting the figurehead on her own, with infinite care. She's given it Isaure's face. She says that way *The Betrothed* will always have someone watching over her.`)]),
],[
 N(`Kit a repeint la figure de proue tout seul. Elle a maintenant des joues très roses et un sourire un peu inquiétant. Personne n'a eu le cœur de lui dire.`,`Kit has repainted the figurehead on his own. She now has very pink cheeks and a slightly alarming smile. Nobody has had the heart to tell him.`),
]),
D('matthias','h',`Capitaine. L'équipage a voté. À l'unanimité moins une voix. On reste. On reste sur *La Fiancée*, avec vous. Pas pour l'or. Il n'y a plus d'or. Pour la cuisine de {lv}. Elle s'est beaucoup améliorée.`,`Captain. The crew has voted. Unanimous minus one. We're staying. Staying on *The Betrothed*, with you. Not for gold. There's no more gold. For {lv}'s cooking. It's improved a lot.`),
D('mc','h',`Qui a voté contre ?`,`Who voted against?`),
D('matthias','h',`Kit. Il voulait un perroquet. On négocie.`,`Kit. He wanted a parrot. We're negotiating.`),
...IF('fiF',[
 {st:['lune','mc']},
 N(`{kid} traverse le pont en courant, un crabe vivant dans chaque main, poursuivie par Kit qui hurle qu'ils sont à lui. Elle se cache derrière tes jambes. Le crabe de gauche te pince la cheville. Tu ne dis rien. Tu es capitaine. Tu as connu pire.`,`{kid} races across the deck with a live crab in each hand, chased by Kit shouting they're his. She hides behind your legs. The left crab pinches your ankle. You say nothing. You're a captain. You've known worse.`),
],[
 N(`Toi, tu es assise à l'ombre de la grand-voile, une main posée sur ton ventre. Rien ne se voit encore. Mais tu sais que quelqu'un est là. Et chaque fois que tu y penses, tu as envie de rire sans raison.`,`You're sitting in the mainsail's shade, one hand on your belly. Nothing shows yet. But you know someone is there. And every time you think about it, you want to laugh for no reason.`),
]),
{bg:'ship',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['Le pont, au coucher du soleil','The deck, at sunset']},
{st:['lv','mc']},
N(`Le soir, quand l'équipage est descendu à la taverne, vous restez sur le pont. Le soleil se couche derrière les Blue Mountains. Le port devient rose, puis orange, puis violet. Quelque part, quelqu'un joue du violon.`,`In the evening, when the crew has gone down to the tavern, you stay on deck. The sun sets behind the Blue Mountains. The harbour turns pink, then orange, then violet. Somewhere, someone is playing a fiddle.`),
D('lv','s',`Il y a un an, tu étais promise à un inconnu. Et maintenant, regarde-toi. Capitaine. Mariée. Pardonnée par le roi d'Espagne.`,`A year ago you were promised to a stranger. And now look at you. Captain. Married. Pardoned by the King of Spain.`),
...IF('fiF',[D('mc','s',`Et maman.`,`And a mother.`)],[D('mc','s',`Et bientôt maman.`,`And soon a mother.`)]),
D('lv','s',`Tu sais ce qui me fait rire ? Personne ne nous croira jamais. Si on raconte tout ça à nos petits-enfants, ils diront qu'on invente.`,`You know what makes me laugh? No one will ever believe us. If we tell all this to our grandchildren, they'll say we're making it up.`),
C('p66a',0,[
 {t:[`« On leur montrera la cloche du navire fantôme. Ça les fera taire. »`,`"We'll show them the ghost ship's bell. That'll shut them up."`],fx:{lv:2},r:[N(`{lv} éclate de rire. « Et le dessin de {ot}. Comme preuve que tout est vrai. Personne n'inventerait quelque chose d'aussi laid. »`,`{lv} bursts out laughing. "And {ot}'s drawing. As proof it's all true. No one would invent anything that ugly."`)]},
 {t:[`L'embrasser, au lieu de répondre.`,`Kiss {a:him|her} instead of answering.`],fx:{lv:3},r:[N(`Tu l'embrasses, longuement, pendant que le soleil disparaît derrière les montagnes. Quand tu t'écartes, {a:il|elle} a les yeux fermés et un sourire idiot. « D'accord, murmure-t-{a:il|elle}. C'était une très bonne réponse. »`,`You kiss {a:him|her}, slowly, as the sun disappears behind the mountains. When you pull away, {a:his|her} eyes are closed and {a:he|she}'s smiling foolishly. "All right," {a:he|she} murmurs. "That was a very good answer."`)]}
]),
{st:['gov','mc']},
N(`Au moment où les premières étoiles s'allument, une silhouette s'avance sur le quai, une lanterne à la main, en s'appuyant sur sa canne. Ton père. Il ne monte jamais à bord, d'habitude. Il dit que les bateaux lui donnent le mal de mer même quand ils sont amarrés.`,`As the first stars come out, a figure comes along the quay, lantern in hand, leaning on a cane. Your father. He never comes aboard, usually. He says ships make him seasick even when they're moored.`),
D('gov','n',`J'ai une nouvelle à vous annoncer. Une grande. Et je préfère vous l'annoncer avant qu'elle soit dans toutes les tavernes.`,`I have news for you. Big news. And I'd rather tell you before it's in every tavern.`),
D('mc','a',`Papa ? Qu'est-ce qui se passe ?`,`Papa? What's happening?`),
D('gov','s',`Rien de grave, ma chérie. Au contraire. Mais demain. Et assieds-toi avant que je te le dise.`,`Nothing bad, darling. Quite the opposite. But tomorrow. And sit down before I tell you.`),
N(`Il te fait un clin d'œil, très mystérieux, et repart vers la ville. Tu te tournes vers {lv}. {a:Il|Elle} hausse les épaules. Au loin, la mer est calme, immense, et pleine de promesses.`,`He winks at you, very mysteriously, and heads back into town. You turn to {lv}. {a:He|She} shrugs. Out there the sea is calm, vast, and full of promise.`),
N(`Fin de la saison 3.`,`End of Season 3.`),
{end:166}
);
