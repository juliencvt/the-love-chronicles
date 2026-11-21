/* ===== CHAPITRE 6 — La garden-party royale ===== */
STORY.push(
{bg:'bedroomday',mus:'calm',chap:6,card:['Chapitre 6','Chapter 6'],sub:['La garden-party royale','The Royal Garden Party'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
D('bess','h',`Debout, {title} ! Un messager du palais est passé à l'aube. La Reine donne une garden-party à Kew cet après-midi… et votre famille est invitée !`,`Up you get, {title}! A messenger from the palace came at dawn. The Queen is giving a garden party at Kew this afternoon… and your family is invited!`),
D('mc','o',`La Reine ? Après la saisie d'hier ?`,`The Queen? After yesterday's seizure?`),
...IF('queenRespect',[D('bess','h',`On dit qu'elle n'a pas oublié votre « Je ne suis pas à vendre ». Elle l'a même répété à l'archevêque !`,`They say she hasn't forgotten your "I am not for sale". She even repeated it to the Archbishop!`)],
 [D('bess','n',`Personne ne refuse une invitation de la Reine. Même ruiné. Surtout ruiné.`,`No one refuses an invitation from the Queen. Even when ruined. Especially when ruined.`)]),
N(`Tu touches la lettre déchirée, cachée dans ton corset. « Promets-moi de veiller sur notre… » Ces mots tournent dans ta tête depuis des heures.`,`You touch the torn letter hidden in your bodice. "Promise me you will watch over our…" The words have been circling in your head for hours.`),
C('c6a',0,[
 {t:[`Montrer la lettre à Bess.`,`Show Bess the letter.`],fx:{bess:1},set:'bessKnows',r:[D('bess','o',`« Veiller sur notre… » Seigneur. {title}, on n'écrit pas ça pour un chien ou un jardin.`,`"Watch over our…" Lord above. {title}, nobody writes that about a dog or a garden.`),D('mc','s',`Je sais, Bess. Je sais.`,`I know, Bess. I know.`)]},
 {t:[`Garder le secret pour toi.`,`Keep the secret to yourself.`],r:[D('mc','s',`(Pas encore. Pas tant que je ne comprends pas moi-même.)`,`(Not yet. Not until I understand it myself.)`)]}
]),

{bg:'river',mus:'tender',card:['Kew','Kew'],sub:['Les jardins royaux','The Royal Gardens'],where:['Les jardins de Kew','Kew Gardens']},
{st:[]},
N(`Les jardins de Kew s'étendent jusqu'à la Tamise. Des tentes blanches, des pagodes chinoises, des barques fleuries sur l'eau, et un orchestre caché dans les saules.`,`Kew Gardens stretch down to the Thames. White marquees, Chinese pagodas, flower-decked boats on the water, and an orchestra hidden in the willows.`),
N(`Quand tu arrives, les conversations s'interrompent. Tout le monde sait pour la saisie. Mais la Reine t'a invité{e}, alors personne n'ose rien dire.`,`When you arrive, conversations stop. Everyone knows about the seizure. But the Queen invited you, so no one dares say a thing.`),
{st:['queen','mc']},
D('queen','h',`{title} ! Venez marcher avec moi. Mes dames m'ennuient à mourir.`,`{title}! Come and walk with me. My ladies bore me to death.`),
D('queen','n',`Vous savez, j'ai connu une Française, autrefois. À Versailles, avant la Révolution. Elle chantait comme personne. Isadora de Valcourt.`,`You know, I once knew a Frenchwoman. At Versailles, before the Revolution. She sang like no one else. Isadora de Valcourt.`),
D('mc','o',`Vous connaissiez Isadora, Votre Majesté ?`,`You knew Isadora, Your Majesty?`),
D('queen','s',`Elle avait votre façon de relever le menton quand on la défiait. C'est étrange… Je l'ai remarqué dès le premier soir.`,`She had your way of lifting your chin when challenged. It's strange… I noticed it the very first evening.`),
C('c6b',0,[
 {t:[`« Que pouvez-vous me dire sur elle ? »`,`"What can you tell me about her?"`],r:[D('queen','s',`Qu'elle était libre. Trop libre pour son époque. Et qu'elle aimait un homme qu'elle n'avait pas le droit d'aimer.`,`That she was free. Too free for her time. And that she loved a man she had no right to love.`)]},
 {t:[`« C'est un grand honneur de lui ressembler. »`,`"It's a great honour to resemble her."`],fx:{rep:1},r:[D('queen','h',`Ça l'est. Ne laissez personne vous faire croire le contraire.`,`It is. Don't let anyone tell you otherwise.`)]}
]),
N(`La Reine est appelée par un ministre. Tu restes seul{e} au bord de l'eau… mais pas pour longtemps.`,`The Queen is called away by a minister. You're left alone by the water… but not for long.`),
{st:['twinA','mc']},
D('twinA','h',`Tiens, la favorite de la Reine. Attention où tu mets les pieds, la berge est glissante…`,`Well, the Queen's new favourite. Mind your step, the bank is slippery…`),
N(`{tA} tend le pied pour te faire trébucher. Tu l'esquives de justesse… et c'est {t:lui|elle} qui perd l'équilibre. PLOUF ! {t:Il|Elle} tombe dans la Tamise, plume comprise.`,`{tA} sticks out a foot to trip you. You dodge it just in time… and it's {t:he|she} who loses {t:his|her} balance. SPLASH! {t:He|She} falls into the Thames, feathers and all.`),
D('twinA','o',`Au secours ! Ma robe ! Mes cheveux !`,`Help! My clothes! My hair!`),
C('c6c',0,[
 {t:[`Lui tendre la main pour {t:le|la} sortir de l'eau.`,`Hold out your hand to pull {t:him|her} out.`],set:'helpedTwin',fx:{rep:1},r:[N(`Tu tires {tA} sur la berge. {t:Il|Elle} est trempé{t:|e}, couvert{t:|e} d'algues… et totalement abasourdi{t:|e}.`,`You haul {tA} onto the bank. {t:He's|She's} soaked, covered in weeds… and completely stunned.`),D('twinA','s',`Pourquoi… pourquoi tu m'as {t:aidé|aidée} ?`,`Why… why did you help me?`),D('mc','h',`Parce que je ne suis pas vous.`,`Because I'm not you.`),N(`Pour la première fois, {tA} ne trouve rien à répondre.`,`For the first time, {tA} has nothing to say.`)]},
 {t:[`Éclater de rire avec tout le monde.`,`Burst out laughing with everyone else.`],fx:{rep:-1},r:[N(`Toute la garden-party rit aux éclats. {tB} se précipite pour repêcher {t:son frère|sa sœur} en te lançant un regard meurtrier.`,`The whole garden party roars with laughter. {tB} rushes to fish out {t:his|her} twin, shooting you a murderous look.`),D('twinB','a',`Tu vas nous le payer. Très cher.`,`You'll pay for this. Dearly.`)]}
]),

{top:1},
{st:['clem','mc']},
N(`Des applaudissements éclatent derrière toi. Sous une tente rayée, une jeune femme en robe vert d'eau applaudit à tout rompre.`,`Applause breaks out behind you. Under a striped marquee, a young woman in a sea-green gown is clapping wildly.`),
...IF('helpedTwin',[D('clem','h',`{t:Vous l'avez repêché|Vous l'avez repêchée} ? Quel dommage. Mais quelle classe !`,`You fished {t:him|her} out? What a shame. But what class!`)],[D('clem','h',`Bravo ! Dix ans que je rêve de voir {tA} prendre un bain dans la Tamise.`,`Bravo! I've dreamed for ten years of seeing {tA} take a bath in the Thames.`)]),
{st:['theo','clem']},
D('theo','s',`Clem. On n'applaudit pas les noyades.`,`Clem. One does not applaud drownings.`),
D('clem','h',`Ce n'est pas une noyade, Théo. C'est de la justice poétique.`,`It isn't a drowning, Theo. It's poetic justice.`),
N(`Le jeune homme qui l'accompagne a le même regard sombre et le même sourire en coin, en plus sérieux. Il s'incline.`,`The young man with her has the same dark eyes and the same crooked smile, only more serious. He bows.`),
D('theo','n',`Lord Théodore Hartwell. Et voici ma sœur, Lady Clémentine, qui n'a jamais appris à se tenir. Pardonnez-la.`,`Lord Theodore Hartwell. And this is my sister, Lady Clementine, who never learned how to behave. Forgive her.`),
D('clem','h',`Personne ne m'appelle Clémentine, à part ma tante et les huissiers. Appelez-moi Clem.`,`No one calls me Clementine except my aunt and the bailiffs. Call me Clem.`),
D('clem','s',`Notre mère est fille d'un marchand de thé. Pour les jumeaux, nous sentons encore la boutique. Ils nous font vivre l'enfer depuis l'enfance.`,`Our mother is a tea merchant's daughter. To the twins, we still smell of the shop. They've made our lives hell since we were children.`),
D('theo','n',`Ce qu'ils vous font subir depuis votre arrivée, nous connaissons par cœur. Alors nous nous sommes dit qu'il vous fallait des alliés.`,`What they've put you through since you arrived, we know by heart. So we thought you could use some allies.`),
N(`Une troisième silhouette les rejoint : une jeune femme en robe violette, d'une beauté de porcelaine, une ombrelle de dentelle à la main.`,`A third figure joins them: a young woman in violet, with porcelain beauty and a lace parasol in hand.`),
{st:['cordelia','clem']},
D('cordelia','h',`Clem ! Je te cherche partout. Tu as encore semé ton chaperon ?`,`Clem! I've been looking everywhere for you. Did you lose your chaperone again?`),
D('clem','h',`Cordelia Pembroke, mon amie depuis le berceau. La fille de Lady Pembroke, oui, celle-là même. Si vous voulez un secret de Londres, demandez à Cordelia : elle les connaît tous.`,`Cordelia Pembroke, my friend since the cradle. Lady Pembroke's daughter, yes, that very one. If you want a London secret, ask Cordelia: she knows them all.`),
D('cordelia','h',`Clem exagère. Je les écoute, c'est tout. Ravie de vous rencontrer enfin, {title}. Tout Londres ne parle que de vous.`,`Clem exaggerates. I just listen, that's all. So pleased to finally meet you, {title}. All of London is talking about you.`),
{st:['georgie','clem']},
N(`Une tornade rousse surgit entre les tentes, les joues en feu, une fleur de travers dans les cheveux.`,`A red-haired whirlwind bursts out from between the marquees, cheeks flushed, a flower askew in her hair.`),
D('georgie','h',`Clem ! Cordelia ! Lord Fairfax est tout seul près de la pagode ! Vingt mille livres de rente et pas un cheveu blanc !`,`Clem! Cordelia! Lord Fairfax is all alone by the pagoda! Twenty thousand a year and not a single grey hair!`),
D('clem','h',`Et voici Georgiana Finch. Georgie. Notre troisième mousquetaire. Nous avons fait un pacte : trouver chacune un mari avant la fin de la Saison.`,`And this is Georgiana Finch. Georgie. Our third musketeer. We made a pact: each of us finds a husband before the end of the Season.`),
D('georgie','h',`Un mari riche.`,`A rich husband.`),
{st:['cordelia','clem']},
D('cordelia','n',`Un mari convenable.`,`A suitable husband.`),
D('clem','h',`Un mari qui me laisse parler.`,`A husband who lets me talk.`),
{st:['theo','clem']},
D('theo','s',`Autrement dit, aucun.`,`In other words, none.`),
{st:['theo','mc']},
C('c6t',0,[
 {t:[`« Des alliés ? Je ne dirai pas non. Je commence à en manquer. »`,`"Allies? I won't say no. I'm running short of them."`],set:'trioFriends',fx:{rep:1},r:[D('clem','h',`Parfait ! C'est décidé : à partir d'aujourd'hui, on se tutoie. Et on est cinq.`,`Perfect! It's settled: from today, no more formalities. And there are five of us.`),D('georgie','h',`Cinq ! Et si tu as un cousin célibataire, on en reparle.`,`Five! And if you have an unmarried cousin, we'll talk.`),D('theo','s',`Que Dieu protège Londres.`,`God help London.`)]},
 {t:[`« Pardonnez-moi. Ces derniers temps, j'ai appris à me méfier. »`,`"Forgive me. Lately, I've learned to be wary."`],set:'trioWary',r:[D('theo','h',`Sage. À votre place, je me méfierais de ma sœur.`,`Wise. In your place, I'd be wary of my sister.`),D('clem','h',`Théo ! … Prenez votre temps. Nous ne bougerons pas.`,`Theo! … Take your time. We're not going anywhere.`)]}
]),
...IF('topLi1',[
 {st:['cordelia','clem']},
 D('cordelia','n',`Vous connaissez {li1}, je crois ? Nos familles passent l'été ensemble dans le Kent depuis toujours.`,`You know {li1}, I believe? Our families have spent every summer together in Kent for ever.`),
 D('clem','h',`À six ans, Cordelia a « épousé » {li1} sous le grand chêne, avec une bague en pâquerettes. J'étais témoin.`,`At six, Cordelia "married" {li1} under the great oak, with a daisy ring. I was the witness.`),
 D('cordelia','h',`Des bêtises d'enfants !`,`Childish nonsense!`),
 N(`Elle rit, un peu trop fort. Sous ses doigts gantés, une baleine de son ombrelle craque.`,`She laughs, a little too loudly. Under her gloved fingers, a rib of her parasol snaps.`)
],[
 {st:['cordelia','clem']},
 D('cordelia','n',`Vous vous habillez chez Madame Fleury, n'est-ce pas ? Moi aussi. Son {a:apprenti|apprentie} a des doigts de fée.`,`You dress at Madame Fleury's, don't you? So do I. Her apprentice has magic fingers.`),
 D('clem','h',`Cordelia a commandé quatre robes ce mois-ci. Quatre ! Pour quelqu'un qui « déteste les essayages »…`,`Cordelia ordered four gowns this month. Four! For someone who "hates fittings"…`),
 D('cordelia','h',`Il faut bien être présentable.`,`One must be presentable.`),
 N(`Ses joues rosissent. Son regard file vers le buffet, là où s'affairent les serveurs du traiteur… puis revient sur toi. Une seconde de trop.`,`Her cheeks turn pink. Her gaze darts to the buffet, where the caterer's servers bustle… then back to you. A second too long.`)
]),
{st:['theo','mc']},
D('theo','n',`Nous serons au bal de la Reine, demain. Gardez-nous une place près de vous.`,`We'll be at the Queen's ball tomorrow. Save us a place beside you.`),
N(`Cordelia te serre la main en partant. Ses doigts sont froids, malgré le soleil.`,`Cordelia shakes your hand as they leave. Her fingers are cold, despite the sun.`),

...IF('p1',[
 {bg:'river',mus:'tender',where:['Sur la Tamise','On the Thames']},
 {st:['li1','mc']},
 D('li1','h',`Si vous avez fini de noyer ma famille… puis-je vous emmener en barque ? Je rame mieux que je ne danse. Ce qui n'est pas difficile.`,`If you've finished drowning my family… may I take you out in a boat? I row better than I dance. Which isn't difficult.`),
 N(`La barque glisse sur l'eau calme. Les bruits de la fête s'éloignent. Il ne reste que le clapotis des rames et le chant des merles.`,`The boat glides over the calm water. The noise of the party fades. Only the splash of the oars and the song of the blackbirds remain.`),
 D('li1','n',`J'ai fouillé le bureau de ma mère, cette nuit. Iris de Valcourt a été bannie de Paris il y a quinze ans. Pour escroquerie.`,`I searched my mother's study last night. Iris de Valcourt was banished from Paris fifteen years ago. For fraud.`),
 D('li1','s',`Et il y a autre chose. La fortune des Valcourt n'a jamais été partagée. Elle revient à l'héritier d'Isadora… s'il existe. Sinon, tout va à Iris.`,`And there's more. The Valcourt fortune was never divided. It goes to Isadora's heir… if one exists. Otherwise, everything goes to Iris.`),
 D('mc','o',`L'héritier d'Isadora…`,`Isadora's heir…`),
 D('li1','n',`{first}… Je ne sais pas ce que vous cache votre famille. Mais quoi que ce soit, ça ne change rien à ce que je ressens.`,`{first}… I don't know what your family is hiding from you. But whatever it is, it changes nothing about how I feel.`),
 C('m11',1,[
  {t:[`Lui avouer tes sentiments.`,`Confess your feelings.`],set:'loveLi1',fx:{li1:3},r:[D('mc','h',`Moi non plus, {li1}. Je crois que je suis en train de tomber amoureu{g:x|se|x·se} de vous. Et ça me terrifie.`,`Me neither, {li1}. I think I'm falling in love with you. And it terrifies me.`),N(`{li1} lâche les rames. La barque dérive doucement vers les saules, et personne ne songe à la rattraper.`,`{li1} lets go of the oars. The boat drifts gently towards the willows, and no one thinks to stop it.`),D('li1','h',`Alors soyons terrifiés ensemble.`,`Then let's be terrified together.`)]},
  {t:[`Garder ton cœur pour toi. Pas encore.`,`Keep your heart to yourself. Not yet.`],set:'slowLi1',fx:{li1:1},r:[D('mc','s',`Je tiens à vous, {li1}. Mais tant que je ne sais pas qui je suis vraiment… je ne peux rien promettre.`,`I care about you, {li1}. But until I know who I really am… I can't promise anything.`),D('li1','h',`Alors je vous aiderai à le découvrir. Et je serai encore là après.`,`Then I'll help you find out. And I'll still be here afterwards.`)]}
 ]),
 {bg:'river',where:['Les jardins de Kew','Kew Gardens']},
 {st:['li2','mc']},
 N(`De retour sur la berge, {a:un serveur|une serveuse} te tend un verre de limonade. Tu reconnais aussitôt ses yeux.`,`Back on the bank, a server hands you a glass of lemonade. You recognise those eyes at once.`),
 {set:'li2named'},
 D('li2','h',`Ne dites rien. Madame Fleury me prête au traiteur de la Reine. Je gagne en un après-midi ce que je gagne en une semaine.`,`Don't say a word. Madame Fleury lends me out to the Queen's caterer. I earn in an afternoon what I earn in a week.`),
 D('li2','s',`Faites attention. La dame en noir est ici. Elle vous cherche.`,`Be careful. The lady in black is here. She's looking for you.`)
],[
 {st:['li2','mc']},
 N(`Près du buffet, {a:un serveur|une serveuse} en livrée blanche te glisse un verre de limonade… et un sourire que tu reconnaîtrais entre mille.`,`By the buffet, a server in white livery slips you a glass of lemonade… and a smile you'd recognise anywhere.`),
 D('li2','h',`Madame Fleury me prête au traiteur de la Reine. Suivez-moi derrière les saules. Personne ne regarde le personnel.`,`Madame Fleury lends me out to the Queen's caterer. Follow me behind the willows. No one ever looks at the staff.`),
 {bg:'river',where:['Sous les saules','Under the willows']},
 N(`Sous le rideau de feuilles des saules pleureurs, le monde disparaît. Il n'y a plus que l'eau, la lumière verte… et {a:lui|elle}.`,`Beneath the curtain of weeping willow leaves, the world disappears. There's only the water, the green light… and {a:him|her}.`),
 D('li2','n',`J'ai retrouvé une vieille amie de Marguerite, à Spitalfields. Elle dit qu'Iris de Valcourt a été bannie de Paris pour escroquerie.`,`I found an old friend of Marguerite's in Spitalfields. She says Iris de Valcourt was banished from Paris for fraud.`),
 D('li2','s',`Et la fortune des Valcourt revient à l'héritier d'Isadora… s'il existe. Sinon, tout va à Iris. Je crois qu'elle ne cherche pas la vérité, {first}. Elle cherche l'héritage.`,`And the Valcourt fortune goes to Isadora's heir… if one exists. Otherwise, everything goes to Iris. I don't think she's after the truth, {first}. She's after the inheritance.`),
 D('li2','h',`Mais assez parlé d'elle. Je n'ai que dix minutes avant que le traiteur ne me cherche. Et je ne veux pas les gâcher.`,`But enough about her. I only have ten minutes before the caterer comes looking for me. And I don't want to waste them.`),
 C('m11b',1,[
  {t:[`Lui avouer tes sentiments.`,`Confess your feelings.`],set:'loveLi2',fx:{li2:3},r:[D('mc','h',`{a:Mateo|Nell}… Je pense à vous chaque minute. Je me fiche que vous soyez {a:apprenti|apprentie} ou {a:duc|duchesse}. C'est vous que je veux.`,`{a:Mateo|Nell}… I think about you every minute. I don't care if you're an apprentice or a {a:duke|duchess}. It's you I want.`),D('li2','o',`Vous… vous êtes sérieu{g:x|se|x·se} ?`,`You… you mean it?`),N(`Pour toute réponse, tu l'embrasses sous les saules. Quelque part, l'orchestre joue une valse que vous n'entendez même pas.`,`Your only answer is to kiss {a:him|her} under the willows. Somewhere, the orchestra plays a waltz you don't even hear.`)]},
  {t:[`Garder ton cœur pour toi. Pas encore.`,`Keep your heart to yourself. Not yet.`],set:'slowLi2',fx:{li2:1},r:[D('mc','s',`Je tiens à vous. Mais tant que je ne sais pas qui je suis… je ne peux rien vous promettre.`,`I care about you. But until I know who I am… I can't promise you anything.`),D('li2','h',`Je n'ai pas besoin de promesses. Juste de dix minutes sous les saules, de temps en temps.`,`I don't need promises. Just ten minutes under the willows, now and then.`)]}
 ]),
 {bg:'river',where:['Les jardins de Kew','Kew Gardens']},
 {st:['li1','mc']},
 D('li1','h',`{first} ! Je vous cherchais. Ma mère m'a chargé{a:|e} d'une mission diplomatique : obtenir de vous la première danse au bal de la Reine, demain soir.`,`{first}! I've been looking for you. My mother has given me a diplomatic mission: to secure the first dance with you at the Queen's ball tomorrow night.`),
 C('c6d',0,[
  {t:[`« Avec plaisir. »`,`"With pleasure."`],fx:{li1:1},r:[D('li1','h',`Mission accomplie. Ma mère sera ravie. Et moi aussi.`,`Mission accomplished. My mother will be delighted. And so will I.`)]},
  {t:[`« Je ne promets rien. »`,`"I promise nothing."`],r:[D('li1','s',`C'est déjà plus qu'un refus. Je m'en contenterai.`,`That's already better than a no. I'll take it.`)]}
 ])
]),

{bg:'garden',mus:'mystery',where:['La roseraie de Kew','The Kew rose garden']},
{st:['iris','mc']},
N(`En entrant dans la roseraie, tu crois apercevoir une ombrelle de dentelle lavande s'éloigner en hâte au bout de l'allée. Puis plus rien.`,`As you enter the rose garden, you think you glimpse a lavender lace parasol hurrying away at the end of the path. Then nothing.`),
N(`Dans une allée déserte de la roseraie, une ombre noire t'attend. Iris.`,`In a deserted path of the rose garden, a black shadow is waiting. Iris.`),
...IF('dealIris',[D('iris','a',`Le coffret. Où est-il ?`,`The box. Where is it?`),D('mc','n',`Ma mère l'a repris. Je n'ai pu garder qu'une lettre.`,`My mother took it back. I only managed to keep one letter.`)],
 [D('iris','n',`Tu as refusé mon marché. Mais je sais que tu as ouvert le coffret. Les murs de Grosvenor Street sont plus minces que tu ne crois.`,`You refused my deal. But I know you opened the box. The walls on Grosvenor Street are thinner than you think.`)]),
D('iris','s',`La dernière lettre de ma sœur. Déchirée, n'est-ce pas ? « Promets-moi de veiller sur notre… »`,`My sister's last letter. Torn, isn't it? "Promise me you will watch over our…"`),
N(`Elle sort de son réticule un morceau de papier jauni. Le bord déchiré correspond exactement au tien.`,`She takes a yellowed scrap of paper from her reticule. Its torn edge matches yours exactly.`),
D('iris','h',`L'autre moitié. Celle qui dit tout. Je te propose un échange : demain soir, au bal de la Reine. Ta moitié contre la mienne. Et la vérité éclatera.`,`The other half. The one that says everything. I'm offering you an exchange: tomorrow night, at the Queen's ball. Your half for mine. And the truth will come out.`),
N(`Elle s'éloigne avant que tu puisses répondre. Le papier te brûle les doigts.`,`She walks away before you can answer. The paper burns your fingers.`),
{st:['duchess','mc']},
N(`Une main gantée se pose sur ton épaule. La Duchesse. Elle a tout vu.`,`A gloved hand settles on your shoulder. The Duchess. She saw everything.`),
D('duchess','a',`Je vous avais dit de ne jamais la rencontrer {g:seul|seule|seul·e}. Vous n'écoutez jamais rien, {title}. Comme Isadora.`,`I told you never to meet her alone. You never listen to anything, {title}. Just like Isadora.`),
D('duchess','s',`Cette lettre est dangereuse. Entre de mauvaises mains, elle peut détruire des vies. Y compris la vôtre.`,`That letter is dangerous. In the wrong hands, it can destroy lives. Including yours.`),
C('m12',1,[
 {t:[`Garder la lettre pour l'échange avec Iris au bal.`,`Keep the letter for the exchange with Iris at the ball.`],set:'letterIris',r:[D('mc','a',`Je dois connaître la vérité. Même si c'est Iris qui me la donne.`,`I have to know the truth. Even if Iris is the one who gives it to me.`),D('duchess','s',`Alors que Dieu vous garde. Moi, je garderai un œil sur vous.`,`Then God keep you. As for me, I'll keep an eye on you.`)]},
 {t:[`Confier la lettre à la Duchesse.`,`Entrust the letter to the Duchess.`],set:'letterDuchess',fx:{rep:1},r:[D('duchess','o',`Vous me faites confiance ? À moi ?`,`You trust me? Me?`),D('mc','n',`Vous avez aimé Isadora. Je crois que vous la protégeriez encore, si vous le pouviez.`,`You loved Isadora. I think you'd still protect her, if you could.`),D('duchess','s',`…Oui. Je la protégerai. Et vous aussi.`,`…Yes. I'll protect it. And you too.`)]},
 {t:[`Montrer la lettre à ton père pour le forcer à parler.`,`Show the letter to your father and make him talk.`],set:'letterFather',r:[D('mc','a',`Ce n'est ni à Iris ni à vous de me dire qui je suis. C'est à mon père.`,`It's not for Iris or for you to tell me who I am. It's for my father.`),D('duchess','h',`…Voilà la première décision sage que je vous vois prendre.`,`…That's the first wise decision I've seen you make.`)]}
]),

{bg:'salon',mus:'mystery',card:['Le soir','Evening'],sub:['',''],where:['Grosvenor Street','Grosvenor Street']},
...IF('letterFather',[
 {st:['father','mc']},
 N(`Tu poses la moitié de lettre sur le bureau de ton père. Il la reconnaît aussitôt. Ses mains se mettent à trembler.`,`You lay the half-letter on your father's desk. He recognises it at once. His hands begin to shake.`),
 D('father','s',`Isadora… Je l'ai aimée plus que tout. C'était mal. C'était lâche. Ta mère le sait, et elle m'a pardonné bien plus que je ne le méritais.`,`Isadora… I loved her more than anything. It was wrong. It was cowardly. Your mother knows, and she has forgiven me far more than I deserved.`),
 D('mc','o',`« Veiller sur notre… » Notre quoi, Père ?`,`"Watch over our…" Our what, Father?`),
 D('father','s',`Pas ce soir, {first}. Je t'en supplie. Après le bal de la Reine. Je te le jure sur sa mémoire, je te dirai tout.`,`Not tonight, {first}. I beg you. After the Queen's ball. I swear on her memory, I'll tell you everything.`),
 SET('fatherPromise')
],[
 {st:['mother','mc']},
 N(`Ce soir-là, ta mère entre dans ta chambre avec une boîte de velours.`,`That evening, your mother comes into your room with a velvet box.`),
 D('mother','h',`Pour le bal de la Reine. Je voulais te les donner depuis longtemps.`,`For the Queen's ball. I've wanted to give you these for a long time.`),
 N(`Dans la boîte, un collier de perles fines. Sur le fermoir : un tout petit lys d'argent.`,`In the box, a necklace of fine pearls. On the clasp: a tiny silver lily.`),
 D('mc','o',`Le lys… Mère, ce collier…`,`The lily… Mother, this necklace…`),
 D('mother','s',`Il t'appartient. Il t'a toujours appartenu. Je l'ai simplement… gardé pour toi.`,`It's yours. It has always been yours. I simply… kept it for you.`),
 SET('necklace')
]),
{st:['mc']},
N(`À la fenêtre, tu regardes Grosvenor Street s'endormir. De l'autre côté de la rue, sous un réverbère, une silhouette en noir lève les yeux vers ta fenêtre. Puis disparaît.`,`At the window, you watch Grosvenor Street fall asleep. Across the road, under a streetlamp, a figure in black looks up at your window. Then disappears.`),
D('mc','s',`(Demain, au bal de la Reine, tout va changer. Je le sens.)`,`(Tomorrow, at the Queen's ball, everything will change. I can feel it.)`),
{end:6}
);
