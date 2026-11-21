/* ===== CHAPITRE 5 — La dame en noir ===== */
STORY.push(
{bg:'bedroomday',mus:'mystery',chap:5,card:['Chapitre 5','Chapter 5'],sub:['La dame en noir','The Lady in Black'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Tu n'as pas fermé l'œil. La lettre violette est posée sur ta coiffeuse comme un serpent endormi.`,`You haven't slept a wink. The violet letter lies on your dressing table like a sleeping snake.`),
D('bess','s',`Votre mère a pleuré toute la nuit, {title}. Et votre père est parti à l'aube chez un banquier de la City. Il avait l'air d'un homme qui va à son propre enterrement.`,`Your mother cried all night, {title}. And your father left at dawn for a banker in the City. He looked like a man going to his own funeral.`),
D('bess','n',`Cette lettre… vous allez y aller, n'est-ce pas ?`,`That letter… you're going, aren't you?`),
D('mc','n',`« Viens {g:seul|seule|seul·e} », dit-elle. Mais tout le monde me répète de ne jamais y aller {g:seul|seule|seul·e}.`,`"Come alone," it says. But everyone keeps telling me never to go alone.`),
C('m9',1,[
 {t:[`Y aller {g:seul|seule|seul·e}, comme demandé.`,`Go alone, as asked.`],set:'stpAlone',r:[D('mc','a',`Si je viens accompagné{e}, elle ne dira rien. J'y vais {g:seul|seule|seul·e}.`,`If I bring someone, she won't say a thing. I'm going alone.`),D('bess','s',`Alors je vous suivrai de loin. Je ne discute pas, {title}.`,`Then I'll follow you from a distance. Don't argue, {title}.`)]},
 {t:[`Demander à la personne en qui tu as le plus confiance de t'accompagner en secret.`,`Ask the person you trust most to come with you in secret.`],set:'stpWith',r:[
  ...IF('p1',[D('mc','n',`Bess, porte ce billet aux Ashbury. Discrètement. Pour {li1}, en main propre.`,`Bess, take this note to the Ashburys. Discreetly. For {li1}, by hand.`)],
   [D('mc','n',`Bess, cours chez Madame Fleury. Dis à {a:Mateo|Nell} que j'ai besoin {a:de lui|d'elle}. À Saint-Paul, avant midi.`,`Bess, run to Madame Fleury's. Tell {a:Mateo|Nell} I need {a:him|her}. At St Paul's, before noon.`)]),
  D('bess','h',`J'y cours !`,`I'm off!`)]}
]),

{bg:'cathedral',mus:'mystery',card:['Saint-Paul','St Paul\'s'],sub:['Midi','Noon'],where:['Cathédrale Saint-Paul','St Paul\'s Cathedral']},
{st:['mc']},
N(`Sous l'immense coupole de Saint-Paul, le moindre pas résonne comme un coup de tonnerre. La lumière tombe en colonnes poussiéreuses sur les bancs vides.`,`Beneath the vast dome of St Paul's, every footstep echoes like thunder. Light falls in dusty columns across the empty pews.`),
...IF('stpWith',[...IF('p1',[N(`Derrière une colonne, tu aperçois {li1}, faussement {a:absorbé|absorbée} par un vitrail. {a:Il|Elle} te fait un signe discret.`,`Behind a pillar, you spot {li1}, pretending to be absorbed by a stained-glass window. {a:He|She} gives you a discreet nod.`)],[N(`Près des cierges, {a:Mateo|Nell}, la casquette basse, fait semblant de prier. {a:Il|Elle} te lance un clin d'œil.`,`By the candles, {a:Mateo|Nell}, cap pulled low, is pretending to pray. {a:He|She} gives you a wink.`)])]),
{st:['iris','mc']},
N(`Au premier rang, une femme en velours si sombre qu'il paraît noir, voilée, ne bouge pas. Comme si elle t'attendait depuis vingt ans.`,`In the front row, a woman in velvet so dark it looks black, veiled, sits perfectly still. As if she had been waiting for you for twenty years.`),
D('iris','n',`Tu es venu{e}. Assieds-toi.`,`You came. Sit down.`),
D('iris','s',`Tu as ses yeux. Je l'ai su dès le premier soir, au bal des Ashbury.`,`You have her eyes. I knew it the first night, at the Ashbury ball.`),
D('mc','o',`Les yeux de qui ? Qui êtes-vous ?`,`Whose eyes? Who are you?`),
N(`Elle relève son voile. Une femme d'une cinquantaine d'années, d'une beauté sévère, avec un minuscule lys d'argent épinglé à son col.`,`She lifts her veil. A woman of about fifty, severely beautiful, with a tiny silver lily pinned at her collar.`),
{set:'irisNamed'},
D('iris','n',`Iris de Valcourt. La sœur cadette d'Isadora.`,`Iris de Valcourt. Isadora's younger sister.`),
D('iris','a',`Ma sœur n'est pas morte de fièvre, quoi qu'on t'ait raconté. Elle est morte à Paris, en 1795… dans une maison qui appartenait à ton père.`,`My sister did not die of a fever, whatever you've been told. She died in Paris, in 1795… in a house that belonged to your father.`),
D('mc','o',`Mon père ? Qu'est-ce que vous insinuez ?`,`My father? What are you implying?`),
D('iris','s',`Rien. Je constate. Après sa mort, tout ce qu'elle possédait a disparu. Ses bijoux. Ses lettres. Et ce qu'elle avait de plus précieux.`,`Nothing. I'm stating facts. After her death, everything she owned disappeared. Her jewels. Her letters. And the thing she held most precious.`),
D('iris','n',`Ton père garde un coffret. Bois de rose, serrure en forme de lys. Les lettres de ma sœur sont dedans. J'en ai besoin.`,`Your father keeps a box. Rosewood, with a lily-shaped lock. My sister's letters are inside. I need them.`),
D('iris','a',`Apporte-moi ce coffret, et je te dirai toute la vérité. Et je garderai pour moi ce que je sais sur ta famille. Sinon… Londres saura tout. Et Londres ne pardonne rien.`,`Bring me that box, and I'll tell you the whole truth. And I'll keep what I know about your family to myself. Otherwise… London will know everything. And London forgives nothing.`),
C('m10',1,[
 {t:[`Accepter le marché.`,`Accept the deal.`],set:'dealIris',r:[D('mc','s',`Je vous apporterai ce coffret. Mais vous me direz tout. Absolument tout.`,`I'll bring you that box. But you'll tell me everything. Absolutely everything.`),D('iris','h',`Tu as son courage, aussi. C'est bien.`,`You have her courage too. Good.`)]},
 {t:[`Refuser. Tu ne trahiras pas ton père.`,`Refuse. You won't betray your father.`],set:'refuseIris',fx:{rep:1},r:[D('mc','a',`Je ne vole pas ma propre famille pour une inconnue qui me fait des menaces dans une église.`,`I won't steal from my own family for a stranger who threatens me in a church.`),D('iris','s',`Une inconnue… Si tu savais à quel point c'est faux.`,`A stranger… If only you knew how wrong that is.`),D('iris','a',`Réfléchis bien. Je ne ferai pas cette offre deux fois.`,`Think carefully. I won't make this offer twice.`)]}
]),
...IF('stpWith',[
 N(`Des pas approchent dans l'allée. Iris aperçoit la silhouette qui s'avance vers toi, et se lève d'un bond.`,`Footsteps approach down the aisle. Iris spots the figure coming towards you and leaps to her feet.`),
 D('iris','a',`Je t'avais dit de venir {g:seul|seule|seul·e} !`,`I told you to come alone!`),
 N(`Elle disparaît derrière le chœur dans un froissement de soie noire.`,`She vanishes behind the choir in a rustle of black silk.`),
 ...IF('p1',[{st:['li1','mc']},D('li1','s',`Je suis désolé{a:|e}, je n'aurais pas dû m'approcher. Mais elle avait l'air prête à vous dévorer.`,`I'm sorry, I shouldn't have come closer. But she looked ready to devour you.`)],
  [{st:['li2','mc']},D('li2','s',`Pardon. Je n'ai pas pu rester assis{a:|e}. Elle vous menaçait, je l'ai vu à vos mains.`,`Sorry. I couldn't stay seated. She was threatening you, I could see it in your hands.`)]),
 D('mc','n',`Elle s'appelle Iris de Valcourt. La sœur d'Isadora. Et elle veut un coffret que mon père cache.`,`Her name is Iris de Valcourt. Isadora's sister. And she wants a box my father is hiding.`)
],[
 N(`Iris rabat son voile et s'éloigne sans un bruit. Tu restes longtemps seul{e} sous la coupole, le cœur battant.`,`Iris lowers her veil and walks away without a sound. You stay alone under the dome for a long time, heart pounding.`),
 {st:['bess','mc']},
 D('bess','o',`{title} ! J'ai tout vu depuis la tribune. Qui était cette femme ? On aurait dit un corbeau en robe de bal !`,`{title}! I saw everything from the gallery. Who was that woman? She looked like a crow in a ball gown!`)
]),
{bg:'street',mus:'mystery',where:['Le parvis de Saint-Paul','The steps of St Paul\'s']},
{st:['twinA','twinB']},
N(`En sortant de la cathédrale, tu tombes nez à nez avec une calèche aux armes des Ashbury.`,`Leaving the cathedral, you come face to face with a carriage bearing the Ashbury crest.`),
D('twinA','h',`Tiens ! {g:Le petit Français|La petite Française|Le petit Français} prie, maintenant ? Pour un miracle financier, j'imagine ?`,`Well! The little French upstart is praying now? For a financial miracle, I imagine?`),
...IF('stpWith',[D('twinB','h',`Et pas {g:seul|seule|seul·e}, en plus ! Un rendez-vous secret dans une église… Mère va a-do-rer.`,`And not alone, either! A secret meeting in a church… Mother is going to a-do-re this.`)],[D('twinB','h',`Tout{e} {g:seul|seule|seul·e} dans une église, en pleine semaine. Comme c'est… suspect.`,`All alone in a church, in the middle of the week. How… suspicious.`)]),
C('c5a',0,[
 {t:[`« Je priais pour que vous trouviez enfin un parti. Il faudra un vrai miracle. »`,`"I was praying you'd finally find a match. It'll take a real miracle."`],fx:{rep:-1},r:[D('twinA','a',`Tu vas le regretter !`,`You'll regret that!`)]},
 {t:[`« Bonne journée à vous deux. » (les ignorer)`,`"Good day to you both." (ignore them)`],fx:{rep:1},r:[N(`Tu passes ton chemin avec un sourire. Rien ne les agace davantage.`,`You walk on with a smile. Nothing annoys them more.`)]},
 {t:[`« Vous me suivez ? Mère vous paie pour ça ? »`,`"Are you following me? Does your mother pay you for it?"`],r:[D('twinB','o',`…Comment tu sais que—`,`…How do you know that—`),D('twinA','a',`Tais-toi, {tB} !`,`Shut up, {tB}!`)]}
]),

{bg:'salon',mus:'mystery',card:['Grosvenor Street','Grosvenor Street'],sub:['L\'après-midi','The afternoon'],where:['Grosvenor Street','Grosvenor Street']},
{st:['father','mc']},
N(`Quand tu rentres, la porte d'entrée est grande ouverte. Dans le salon, deux hommes en redingote grise décrochent les tableaux un à un.`,`When you get home, the front door is wide open. In the drawing room, two men in grey frock coats are taking the paintings down one by one.`),
D('bailiff','n',`Ordre de la Cour, {title}. Saisie pour dettes. Le Comte a jusqu'à la fin du mois pour payer le reste.`,`Court order. Seizure for debts. The Count has until the end of the month to pay the rest.`),
D('father','s',`Prenez ce que vous voulez. Mais laissez le piano. C'est le seul cadeau que j'aie fait à ma femme depuis vingt ans.`,`Take what you like. But leave the piano. It's the only gift I've given my wife in twenty years.`),
C('c5b',0,[
 {t:[`Prendre la main de ton père.`,`Take your father's hand.`],r:[D('father','s',`Tu es plus {g:fort|forte|fort·e} que moi, {first}. Tu l'as toujours été.`,`You're stronger than I am, {first}. You always have been.`)]},
 {t:[`Supplier l'huissier de laisser le piano.`,`Beg the bailiff to leave the piano.`],r:[D('bailiff','n',`…Bon. Le piano reste. Pour l'instant. Je n'ai rien vu.`,`…Fine. The piano stays. For now. I saw nothing.`)]},
 {t:[`« C'est pour ça qu'Iris de Valcourt nous menace ? »`,`"Is this why Iris de Valcourt is threatening us?"`],set:'namedIrisToFather',r:[D('father','o',`Iris ?! Elle est à Londres ?`,`Iris?! She's in London?`),N(`Ton père devient livide. Pour la première fois, ce n'est pas l'argent qui lui fait peur.`,`Your father turns ashen. For the first time, it isn't money that frightens him.`),D('father','a',`Ne lui parle plus jamais. Tu m'entends ? Jamais.`,`Never speak to her again. Do you hear me? Never.`)]}
]),

{bg:'bedroom',mus:'mystery',card:['La nuit','Night'],sub:['Le bureau du Comte','The Count\'s study'],where:['Le bureau de ton père','Your father\'s study']},
{st:['mc']},
N(`Minuit. La maison dort. À pas de loup, tu te glisses dans le bureau de ton père, une bougie à la main.`,`Midnight. The house is asleep. On tiptoe, you slip into your father's study, candle in hand.`),
...IF('refuseIris',[D('mc','s',`(J'ai refusé le marché d'Iris. Mais je dois savoir ce que contient ce coffret. Pour moi.)`,`(I turned down Iris's deal. But I need to know what's in that box. For myself.)`)],[D('mc','s',`(Pardon, Père. Mais je dois savoir.)`,`(Forgive me, Father. But I have to know.)`)]),
N(`Derrière une rangée de registres, ta main rencontre un coffret de bois de rose. Sa serrure a la forme d'un lys. Pas de clé.`,`Behind a row of ledgers, your hand finds a rosewood box. Its lock is shaped like a lily. No key.`),
D('mc','o',`(Un lys… Le médaillon !)`,`(A lily… The locket!)`),
N(`Tu cours chercher le médaillon dans ta malle. Le lys gravé au dos s'emboîte parfaitement dans la serrure. Un déclic. Le couvercle s'ouvre.`,`You run to fetch the locket from your trunk. The lily engraved on its back fits the lock perfectly. A click. The lid opens.`),
N(`À l'intérieur : une liasse de lettres nouées d'un ruban bleu pâle. L'écriture est ronde, passionnée. « Mon cher Henri… »`,`Inside: a bundle of letters tied with a pale blue ribbon. The handwriting is round and passionate. "My dear Henri…"`),
D('mc','o',`(Henri… C'est mon père !)`,`(Henri… That's my father!)`),
N(`« Mon cher Henri, chaque jour loin de toi est un hiver. Je sais que tu es marié, je sais que c'est un péché, mais mon cœur refuse d'entendre raison. — Ton Isadora. »`,`"My dear Henri, every day away from you is a winter. I know you are married, I know it is a sin, but my heart refuses to listen to reason. — Your Isadora."`),
D('mc','s',`(Mon père… et Isadora. Ils s'aimaient. Pendant qu'il était marié à Mère.)`,`(My father… and Isadora. They were in love. While he was married to Mother.)`),
C('c5c',0,[
 {t:[`Continuer à lire.`,`Keep reading.`],r:[N(`Les lettres racontent deux années d'amour secret. Des rendez-vous à l'Opéra de Paris, des promesses, des disputes. Puis le ton change.`,`The letters tell of two years of secret love. Meetings at the Paris Opera, promises, quarrels. Then the tone changes.`)]},
 {t:[`Refermer le coffret, le cœur au bord des lèvres.`,`Close the box, feeling sick.`],r:[N(`Tu refermes le couvercle. Mais une dernière lettre, pliée à part, glisse sur le tapis.`,`You close the lid. But one last letter, folded separately, slips onto the carpet.`)]}
]),
N(`Sans réfléchir, tu glisses la dernière lettre dans ta manche. Elle est datée de l'hiver 1795. L'écriture tremble.`,`Without thinking, you slip the last letter into your sleeve. It is dated winter 1795. The handwriting is shaky.`),
N(`« Henri, le médecin dit que ce sera pour bientôt. J'ai peur. Si je ne survis pas, promets-moi de veiller sur notre… »`,`"Henri, the doctor says it will be soon. I'm afraid. If I don't survive, promise me you will watch over our…"`),
N(`La page est déchirée. Le reste a disparu.`,`The page is torn. The rest is gone.`),
D('mc','o',`(« Notre… » Notre quoi ?)`,`("Our…" Our what?)`),
N(`Derrière toi, la porte du bureau grince.`,`Behind you, the study door creaks.`),
{st:['mother','mc']},
D('mother','s',`Tu as trouvé les lettres, n'est-ce pas ?`,`You found the letters, didn't you?`),
D('mother','s',`Alors tu sais. Ton père a aimé une autre femme. Je l'ai su dès le premier jour. Et je suis restée.`,`Then you know. Your father loved another woman. I knew from the very first day. And I stayed.`),
D('mc','o',`Mère… pourquoi ?`,`Mother… why?`),
D('mother','h',`Parce que certaines choses valaient la peine de rester. Va te coucher, {first}. Nous parlerons. Bientôt. Je te le promets.`,`Because some things were worth staying for. Go to bed, {first}. We'll talk. Soon. I promise.`),
N(`Elle te prend le coffret des mains, très doucement. Ses yeux sont rouges. Mais pour la première fois, elle te serre contre elle.`,`She takes the box from your hands, very gently. Her eyes are red. But for the first time, she holds you close.`),
{end:5}
);
