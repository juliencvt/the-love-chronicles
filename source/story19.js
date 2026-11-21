/* ===== CHAPITRE 19 — Le piège ===== */
STORY.push(
{bg:'bedroom',mus:'mystery',chap:19,card:['Chapitre 19','Chapter 19'],sub:['Le piège','The Trap'],where:['Ta chambre','Your bedroom']},
{st:['mc']},
N(`Toute la journée, tu relis le billet. C'est bien l'écriture de {lv}. Les mêmes boucles, la même façon d'appuyer sur la plume. Et pourtant, quelque chose cloche.`,`All day long, you reread the note. It's definitely {lv}'s handwriting. The same loops, the same way of pressing on the pen. And yet, something's off.`),
N(`Tu envoies Bess porter un mot chez {lv}. Elle revient une heure plus tard : {lv} est parti{a:|e} pour la journée, personne ne sait où.`,`You send Bess with a message for {lv}. She comes back an hour later: {lv} has gone out for the day, no one knows where.`),
D('mc','s',`(C'est peut-être vraiment {a:lui|elle}. Peut-être qu'{a:il|elle} a découvert quelque chose sur Iris et ne veut pas qu'on l'entende.)`,`(Maybe it really is {a:him|her}. Maybe {a:he's|she's} discovered something about Iris and doesn't want to be overheard.)`),
{st:['bess','mc']},
D('bess','s',`Vous n'allez pas y aller, quand même ? Seul{e}, à minuit, à Chelsea ?`,`You're not actually going, are you? Alone, at midnight, in Chelsea?`),
C('c19a',0,[
 {t:[`Laisser à Bess l'adresse exacte, au cas où.`,`Leave Bess the exact address, just in case.`],set:'leftNote',fx:{bess:2},r:[D('mc','n',`Le vieux kiosque de Chelsea, à minuit. Si je ne suis pas rentré{e} à une heure, préviens {lv}. Et Clem. Et Théo. Et la Reine, tant qu'on y est.`,`The old bandstand in Chelsea, at midnight. If I'm not back by one, tell {lv}. And Clem. And Theo. And the Queen, while you're at it.`),D('bess','s',`Une heure pile. Pas une minute de plus. Je compterai.`,`One o'clock sharp. Not a minute more. I'll be counting.`)]},
 {t:[`Ne rien dire. Si c'est un piège, tu ne veux pas mettre Bess en danger.`,`Say nothing. If it's a trap, you don't want to put Bess in danger.`],set:'toldNoOne',r:[D('mc','h',`Je vais juste prendre l'air, Bess. Va te coucher.`,`I'm just going out for some air, Bess. Go to bed.`),D('bess','s',`… Bien, {title}.`,`… Very well, {title}.`),N(`Bess ne va pas se coucher. Elle reste assise dans la cuisine, à fixer l'horloge.`,`Bess doesn't go to bed. She sits in the kitchen, staring at the clock.`)]}
]),

{bg:'park',mus:'mystery',card:['Minuit','Midnight'],sub:['Chelsea','Chelsea'],where:['Le vieux kiosque de Chelsea','The old Chelsea bandstand']},
{st:['mc']},
N(`Chelsea, minuit. Le vieux kiosque est désert, rongé par le lierre. La Tamise clapote quelque part dans le noir. Pas de {lv}.`,`Chelsea, midnight. The old bandstand is deserted, overgrown with ivy. The Thames laps somewhere in the dark. No {lv}.`),
N(`Une silhouette sort de l'ombre. Une cape violette.`,`A figure steps out of the shadows. A violet cloak.`),
{st:['cordelia','mc']},
D('cordelia','s',`Tu es venu{g:|e|·e}. Je savais que tu viendrais, si c'était {a:lui|elle} qui t'appelait.`,`You came. I knew you would, if it was {a:him|her} calling you.`),
D('mc','a',`Tu as imité son écriture.`,`You forged {a:his|her} handwriting.`),
D('cordelia','h',`Quinze ans à recopier les lettres des autres. On finit par devenir douée.`,`Fifteen years copying other people's letters. One ends up rather good at it.`),
D('cordelia','s',`Je suis désolée. Vraiment.`,`I'm sorry. Truly.`),
N(`Des mains t'agrippent par-derrière. Un sac de toile s'abat sur ta tête. Le monde devient noir.`,`Hands seize you from behind. A canvas sack comes down over your head. The world goes black.`),

{bg:'cellar',mus:'mystery',card:['Plus tard','Later'],sub:['',''],where:['Une cave','A cellar']},
{st:['iris','mc']},
N(`Quand tu ouvres les yeux, tu es assis{e} sur une chaise, les poignets liés. Une cave voûtée, une seule bougie. L'air sent la vase et le vin aigre. Quelque part derrière le mur, la Tamise gronde.`,`When you open your eyes, you're sitting on a chair, wrists bound. A vaulted cellar, a single candle. The air smells of mud and sour wine. Somewhere behind the wall, the Thames rumbles.`),
D('iris','h',`Bienvenue à la Villa des Saules. Ta mère aurait adoré cette cave. Elle avait toujours eu un goût pour le mélodrame.`,`Welcome to Willow Villa. Your mother would have adored this cellar. She always had a taste for melodrama.`),
D('mc','a',`Qu'est-ce que vous voulez ?`,`What do you want?`),
N(`Iris pose un document sur un tonneau, avec une plume et un encrier.`,`Iris sets a document on a barrel, with a quill and an inkwell.`),
D('iris','n',`Une renonciation. Tu reconnais n'être pas l'enfant d'Isadora, et tu renonces à toute prétention sur la fortune Valcourt. Tu signes, tu rentres chez toi. Simple.`,`A renunciation. You acknowledge that you are not Isadora's child, and you give up all claim to the Valcourt fortune. You sign, you go home. Simple.`),
D('mc','a',`Et si je refuse ?`,`And if I refuse?`),
D('iris','h',`Cette cave est sous le niveau du fleuve. À marée haute, l'eau monte jusqu'au plafond. La marée sera haute à quatre heures.`,`This cellar is below the level of the river. At high tide, the water rises to the ceiling. High tide is at four o'clock.`),
C('c19b',0,[
 {t:[`« Pourquoi ? Pourquoi l'avoir tuée ? »`,`"Why? Why did you kill her?"`],set:'askWhy',r:[
  N(`Iris se tait longtemps. Puis elle parle, d'une voix que tu ne lui connaissais pas.`,`Iris is silent for a long time. Then she speaks, in a voice you've never heard from her.`),
  D('iris','s',`Isadora avait tout. La voix. La beauté. L'amour de notre père, celui de la Reine, celui d'Henri. Moi, j'étais « l'autre sœur ». Celle qu'on oubliait de présenter.`,`Isadora had everything. The voice. The beauty. Our father's love, the Queen's, Henri's. I was "the other sister". The one people forgot to introduce.`),
  D('iris','a',`Alors oui, j'ai envoyé ce flacon. Et je recommencerais. Tu entends ? Je recommencerais.`,`So yes, I sent that vial. And I'd do it again. Do you hear? I'd do it again.`),
  {set:'irisConfessed'}
 ]},
 {t:[`Te taire. Ne lui donner aucune satisfaction.`,`Stay silent. Give her no satisfaction.`],r:[N(`Tu soutiens son regard sans un mot. Iris finit par détourner les yeux la première.`,`You hold her gaze without a word. Iris is the first to look away.`),D('iris','a',`Tu as ses yeux. Je les ai toujours détestés.`,`You have her eyes. I always hated them.`)]}
]),
C('m37',1,[
 {t:[`Signer. Aucune fortune ne vaut ta vie.`,`Sign. No fortune is worth your life.`],set:'signed',r:[
  N(`Tes mains tremblent. Iris détache ta main droite. Tu trempes la plume et tu signes. Ton nom. Le nom qu'Isadora t'aurait donné, peut-être.`,`Your hands are shaking. Iris unties your right hand. You dip the quill and sign. Your name. The name Isadora might have given you.`),
  D('iris','h',`Sage décision. Dommage que je ne tienne pas mes promesses.`,`A wise decision. Pity I don't keep my promises.`),
  N(`Elle reprend le document, souffle sur l'encre, et rattache ton poignet.`,`She takes the document, blows on the ink and ties your wrist again.`),
  D('mc','s',`(Une signature arrachée sous la menace ne vaut rien devant une Cour. Si je sors d'ici vivant{e}.)`,`(A signature extracted under threat is worthless in a Court. If I get out of here alive.)`)
 ]},
 {t:[`Refuser. Elle ne te prendra rien de plus.`,`Refuse. She won't take anything more from you.`],set:'refusedSign',fx:{rep:1},r:[
  D('mc','a',`Non. Vous avez pris la vie de ma mère. Vous ne prendrez pas son nom.`,`No. You took my mother's life. You won't take her name.`),
  D('iris','a',`Comme tu voudras. La Tamise signera pour toi.`,`As you wish. The Thames will sign for you.`)
 ]}
]),
N(`Iris prend la bougie et monte l'escalier de pierre. À la porte, elle s'arrête.`,`Iris takes the candle and climbs the stone stairs. At the door, she stops.`),
D('iris','n',`Cordelia, tu fermeras derrière moi. À double tour.`,`Cordelia, you'll lock up after me. Double-locked.`),
{st:['cordelia','mc']},
N(`Cordelia descend quelques marches. Elle tient une lanterne. Son visage est livide.`,`Cordelia comes down a few steps. She's holding a lantern. Her face is ashen.`),
C('m38',1,[
 {t:[`Lui parler, à elle. À la Cordelia qui a pleuré pour Clem.`,`Talk to her. To the Cordelia who wept for Clem.`],set:'appealCordelia',r:[
  D('mc','s',`Cordelia. On est {g:cousins|cousines|cousin·es}, tu le sais ? Isadora était ta tante. Elle t'aurait aimée.`,`Cordelia. We're cousins, did you know? Isadora was your aunt. She would have loved you.`),
  D('mc','s',`Et Clem t'aime encore. Elle me l'a dit, à Vauxhall, en pleurant. Elle te déteste et elle t'aime. Tu peux encore choisir laquelle des deux tu mérites.`,`And Clem still loves you. She told me so at Vauxhall, in tears. She hates you and she loves you. You can still choose which one you deserve.`),
  N(`Cordelia ferme les yeux. Ses lèvres tremblent.`,`Cordelia closes her eyes. Her lips tremble.`),
  D('cordelia','s',`Tais-toi. Tais-toi, je t'en supplie.`,`Be quiet. Please, be quiet.`),
  N(`Elle remonte l'escalier en courant. La porte claque. La clé tourne… une seule fois. Pas deux.`,`She runs back up the stairs. The door slams. The key turns… once. Not twice.`)
 ]},
 {t:[`La défier. Tu n'as plus rien à lui dire.`,`Defy her. You have nothing more to say to her.`],set:'defyCordelia',r:[
  D('mc','a',`Va-t'en. Va rejoindre ta mère. Vous vous méritez.`,`Go. Go back to your mother. You deserve each other.`),
  N(`Cordelia te regarde longuement. Puis elle remonte sans un mot. La porte claque. La clé tourne deux fois.`,`Cordelia looks at you for a long time. Then she goes back up without a word. The door slams. The key turns twice.`)
 ]}
]),
{st:['mc']},
N(`Le noir total. Le silence. Puis un bruit, très doux, presque rien. Un filet d'eau qui suinte entre les pierres du mur.`,`Total darkness. Silence. Then a sound, very soft, almost nothing. A trickle of water seeping between the stones of the wall.`),
N(`La marée monte.`,`The tide is rising.`),
{end:19}
);
