/* ===== CHAPITRE 2 — Rumeurs et murmures ===== */
const SET=f=>({set:f});
STORY.push(
{bg:'bedroomday',mus:'calm',chap:2,card:['Chapitre 2','Chapter 2'],sub:['Rumeurs et murmures','Rumours and Whispers'],where:['Ta chambre','Your bedroom']},
{st:[]},
N(`Le lendemain matin, un rayon de soleil se faufile entre les rideaux lilas. Ta tête bourdonne encore des violons de la veille.`,`The next morning, a ray of sunlight slips between the lilac curtains. Your head is still humming with last night's violins.`),
{st:['bess','mc']},
D('bess','h',`Debout, {title} ! Il est presque dix heures, et tout Londres parle déjà de vous !`,`Up you get, {title}! It's nearly ten o'clock, and all of London is already talking about you!`),
D('mc','o',`De moi ? Déjà ?`,`About me? Already?`),
D('bess','h',`Ici, les nouvelles vont plus vite que les chevaux de poste. Asseyez-vous, je vous coiffe pendant que je vous raconte tout.`,`News travels faster than post horses here. Sit down, I'll do your hair while I tell you everything.`),
N(`Bess s'installe derrière toi, une brosse à la main, visiblement ravie d'avoir un public.`,`Bess settles in behind you, brush in hand, clearly delighted to have an audience.`),
D('bess','h',`D'abord, tout le monde dit que vous avez dansé la Danse des Masques avec {li1full}. Et qu'{a:il|elle} ne vous a pas lâché{e} des yeux de la soirée !`,`First of all, everyone says you danced the Masquerade Dance with {li1full}. And that {a:he|she} didn't take {a:his|her} eyes off you all night!`),
D('bess','n',`La Gazette de Mayfair vous consacre même un paragraphe ce matin : « Une étoile venue de Paris ».`,`The Mayfair Gazette even gives you a paragraph this morning: "A star from Paris".`),
...IF('covered',[D('bess','o',`Et puis il y a l'histoire de l'intrus ! Un valet jure qu'il vous a {g:vu|vue|vu·e} lui parler… et que les gardes sont partis du mauvais côté juste après.`,`And then there's the intruder business! A footman swears he saw you talk to them… and that the guards ran off the wrong way right after.`),D('mc','s',`(Si quelqu'un fait le rapprochement, je suis {g:perdu|perdue|perdu·e}.)`,`(If anyone puts two and two together, I'm done for.)`)],
 [D('bess','o',`Et puis l'histoire de l'intrus ! On dit que c'est vous qui l'avez dénoncé. Certains vous trouvent {g:courageux|courageuse|courageux·se}… d'autres un peu impitoyable.`,`And then the intruder business! They say you're the one who gave them away. Some call you brave… others a little ruthless.`)]),
...IF('bold',[D('bess','h',`Sans parler de votre réplique aux {t:jumeaux|jumelles} : « des sorbets en train de fondre » ! Les cuisinières en rient encore.`,`Not to mention your remark to the twins: "melting sorbets"! The cooks are still laughing about it.`)]),
C('c2a',0,[
 {t:[`« Laisse-les parler, Bess. Ça finira par passer. »`,`"Let them talk, Bess. It'll blow over."`],r:[D('bess','n',`Ici, rien ne passe jamais, {title}. Ça se transforme, c'est tout.`,`Nothing ever blows over here, {title}. It just changes shape.`)]},
 {t:[`« Et qu'est-ce qu'on dit d'autre ? »`,`"And what else are they saying?"`],fx:{bess:1},r:[D('bess','h',`Que vous êtes la personne la plus intrigante de la Saison. Et que les {t:jumeaux|jumelles} Ashbury en sont {t:verts|vertes} de jalousie !`,`That you're the most intriguing person of the Season. And that the Ashbury twins are green with envy!`)]},
 {t:[`« Les rumeurs vont beaucoup trop vite ici ! »`,`"Rumours move far too fast here!"`],r:[D('bess','h',`Bienvenue à Londres, {title} !`,`Welcome to London, {title}!`)]}
]),
{st:['mc']},
N(`Quand Bess s'éclipse chercher tes gants, tu restes {g:seul|seule|seul·e} face au miroir.`,`When Bess slips out to fetch your gloves, you're left alone in front of the mirror.`),
N(`Les images de la veille reviennent par vagues : la valse, les lustres, le regard de {li1}…`,`Last night comes back in waves: the waltz, the chandeliers, the way {li1} looked at you…`),
D('mc','s',`(Et puis il y a {a:cet inconnu|cette inconnue}. Ses yeux derrière le masque. Sa main qui m'a {g:rattrapé|rattrapée|rattrapé·e}.)`,`(And then there's that stranger. Those eyes behind the mask. That hand catching me.)`),
D('mc','n',`(Pourquoi est-ce que je n'arrête pas d'y penser ?)`,`(Why can't I stop thinking about it?)`),
C('m3',1,[
 {t:[`{li1} et son charme si attentionné.`,`{li1} and that attentive charm.`],set:'p1',fx:{li1:1},r:[D('mc','h',`({li1}… {a:Il|Elle} avait l'air sincère. Est-ce seulement possible, dans ce monde-là ?)`,`({li1}… {a:He|She} seemed sincere. Is that even possible, in that world?)`)]},
 {t:[`{a:L'inconnu masqué|L'inconnue masquée} et ses secrets.`,`The masked stranger and their secrets.`],set:'p2',fx:{li2:1},r:[D('mc','h',`(Qui {a:était-il|était-elle} ? Et pourquoi risquer la prison pour une simple danse ?)`,`(Who {a:was he|was she}? And why risk prison for a single dance?)`)]}
]),
...IF('keptToken',[
 N(`Tu sors de ta poche le pendentif en étain ramassé sur la terrasse. Sur la face, la lettre {a:M|N}. En le retournant, tu remarques un détail qui t'avait échappé : un minuscule lys gravé.`,`You take the pewter pendant from your pocket. On the front, the letter {a:M|N}. Turning it over, you notice a detail you missed: a tiny engraved lily.`),
 N(`Exactement le même lys que celui ciselé au dos du médaillon caché dans ta malle.`,`The exact same lily as the one chased on the back of the locket hidden in your trunk.`),
 D('mc','o',`(C'est impossible. Pourquoi {a:cet inconnu|cette inconnue} porterait-{a:il|elle} le même symbole que le portrait de cette femme ?)`,`(That's impossible. Why would that stranger wear the same symbol as that woman's portrait?)`),
 C('c2b',0,[
  {t:[`Cacher le pendentif avec le médaillon, dans le double fond de la malle.`,`Hide the pendant with the locket, in the trunk's false bottom.`],set:'tokHidden',r:[D('mc','n',`(Personne ne doit les trouver. Pas avant que je comprenne.)`,`(No one must find them. Not until I understand.)`)]},
  {t:[`Le garder sur toi, au cas où.`,`Keep it on you, just in case.`],set:'tokOnMe',r:[D('mc','n',`(Si je {a:le|la} recroise, je veux pouvoir le lui rendre… et lui poser mes questions.)`,`(If I run into them again, I want to give it back… and ask my questions.)`)]}
 ])
],[
 N(`Tu repenses au pendentif en étain que tu as remis à {li1}. Gravé d'un {a:M|N}… et, au dos, d'un minuscule lys.`,`You think back to the pewter pendant you handed to {li1}. Engraved with an {a:M|N}… and, on the back, a tiny lily.`),
 D('mc','o',`(Ce lys… C'est le même que sur le médaillon caché dans ma malle. Qu'est-ce que {a:cet inconnu|cette inconnue} a à voir avec cette femme ?)`,`(That lily… It's the same as on the locket hidden in my trunk. What does that stranger have to do with that woman?)`)
]),

{bg:'salon',mus:'calm',where:['La salle à manger','The dining room']},
{st:['father','mother']},
N(`Au petit-déjeuner, l'ambiance est aussi lourde que le pudding anglais. Ton père lit le journal sans le lire. Ta mère n'a pas touché à sa tasse.`,`Breakfast is as heavy as an English pudding. Your father reads the paper without reading it. Your mother hasn't touched her cup.`),
{st:['father','mc']},
D('father','n',`Assieds-toi, {first}. Nous devons parler d'hier soir.`,`Sit down, {first}. We need to talk about last night.`),
D('father','s',`Les comptes ne s'arrangent pas. Les créanciers de Paris ont encore écrit. Si cette Saison échoue, nous perdrons tout. La maison. Le titre. Tout.`,`The accounts aren't improving. The creditors in Paris have written again. If this Season fails, we lose everything. The house. The title. Everything.`),
D('mc','o',`Tout ?! Vous disiez que ce n'étaient que des broutilles !`,`Everything?! You said it was just trifles!`),
D('father','s',`J'ai menti pour te protéger. Mais tu n'es plus {g:un enfant|une enfant|un·e enfant}.`,`I lied to protect you. But you're not a child any more.`),
D('father','a',`Et d'après ce qu'on raconte, ton entrée dans le monde n'a pas fait si bonne impression que ça.`,`And from what people are saying, your entrance into society didn't make quite the impression we hoped.`),
...IF('bold',[D('father','a',`Insulter les enfants de la Duchesse devant la moitié de Londres… As-tu idée du tort que cela peut nous faire ?`,`Insulting the Duchess's children in front of half of London… Do you have any idea how much harm that could do us?`)],
 [D('father','n',`La Duchesse se méfie des étrangers. Et une famille qui se fait remarquer attire les questions. Les mauvaises questions.`,`The Duchess distrusts foreigners. And a family that draws attention draws questions. The wrong questions.`)]),
C('c2c',0,[
 {t:[`« Je ferai mieux, Père. Je vous le promets. »`,`"I'll do better, Father. I promise."`],fx:{rep:1},r:[D('father','h',`C'est tout ce que je te demande.`,`That's all I ask.`)]},
 {t:[`« Vous auriez dû me dire la vérité dès le début. »`,`"You should have told me the truth from the start."`],r:[D('father','s',`Tu as raison. Mais ici aussi, la vérité est un luxe.`,`You're right. But here too, the truth is a luxury.`)]},
 {t:[`« Ce n'est pas ma faute si les {t:jumeaux|jumelles} Ashbury sont {t:odieux|odieuses}. »`,`"It's not my fault the Ashbury twins are horrid."`],r:[D('father','a',`À Londres, ce n'est jamais la faute de personne. C'est toujours celle des Français.`,`In London it's never anyone's fault. It's always the fault of the French.`)]}
]),
D('father','h',`Heureusement, tout n'est pas perdu. La Duchesse nous invite à prendre le thé cet après-midi, dans ses jardins.`,`Fortunately, not all is lost. The Duchess has invited us to tea this afternoon, in her gardens.`),
D('father','n',`Et {li1full} y sera. Un mariage avec {a:lui|elle} sauverait notre famille. Tu comprends ce que j'attends de toi ?`,`And {li1full} will be there. A marriage to {a:him|her} would save our family. Do you understand what I expect of you?`),
{st:['mother','mc']},
N(`Ta mère, elle, n'a pas dit un mot. Elle tient une lettre froissée qu'elle relit sans cesse, le regard perdu.`,`Your mother hasn't said a word. She's holding a crumpled letter she keeps rereading, her eyes far away.`),
C('c2d',0,[
 {t:[`« Mère, vous allez bien ? »`,`"Mother, are you all right?"`],r:[D('mother','s',`Hm ? Oui, oui. Une migraine. Rien de plus.`,`Hm? Yes, yes. A headache. Nothing more.`)]},
 {t:[`« Qu'est-ce que c'est, cette lettre ? »`,`"What is that letter?"`],r:[D('mother','o',`Rien du tout !`,`Nothing at all!`),N(`Elle glisse la lettre dans sa manche, un peu trop vite.`,`She slips the letter into her sleeve, a little too quickly.`)]},
 {t:[`Ne rien dire, mais l'observer.`,`Say nothing, but watch her.`],r:[N(`Tu aperçois un cachet de cire noire sur l'enveloppe. Et, en haut de la page, une initiale tracée à l'encre violette : « I. »`,`You glimpse a black wax seal on the envelope. And at the top of the page, a single initial in violet ink: "I."`),D('mc','o',`(« I. »… comme au dos du médaillon.)`,`("I."… like on the back of the locket.)`)]}
]),
D('mother','n',`Tiens-toi {g:prêt|prête|prêt·e} à quinze heures. Et mets ta plus belle tenue.`,`Be ready at three o'clock. And wear your finest.`),

{bg:'garden',mus:'tender',card:['Le thé des Ashbury','Tea at the Ashburys'],sub:['',''],where:['Les jardins Ashbury','The Ashbury gardens']},
{st:[]},
N(`Les jardins de la Duchesse sont un petit paradis : des roses anglaises à perte de vue, une fontaine qui chante, et une table nappée de dentelle à l'ombre d'un saule.`,`The Duchess's gardens are a small paradise: English roses as far as the eye can see, a singing fountain, and a lace-covered table in the shade of a willow.`),
{st:['duchess','mc']},
D('duchess','n',`{title}. Vous voici. On m'a dit que vous aviez fait sensation hier soir.`,`{title}. Here you are. I'm told you caused quite a sensation last night.`),
D('duchess','a',`Je n'aime guère les sensations.`,`I am not fond of sensations.`),
C('c2e',0,[
 {t:[`« Alors j'essaierai d'être {g:ennuyeux|ennuyeuse|ennuyeux·se} aujourd'hui, Votre Grâce. »`,`"Then I shall try to be dull today, Your Grace."`],r:[D('duchess','o',`…Hm. Vous avez de l'esprit. C'est dangereux, l'esprit.`,`…Hm. You have wit. Wit is a dangerous thing.`)]},
 {t:[`« Je vous présente mes excuses pour le moindre désagrément. »`,`"I apologise for any inconvenience I may have caused."`],fx:{rep:1},r:[D('duchess','h',`Voilà qui est mieux. Asseyez-vous.`,`That's better. Do sit down.`)]},
 {t:[`« Vos roses sont magnifiques. » (changer de sujet)`,`"Your roses are magnificent." (change the subject)`],fx:{rep:1},r:[D('duchess','s',`Des Maiden's Blush. C'est mon défunt mari qui les a plantées.`,`Maiden's Blush. My late husband planted them.`),N(`Pendant une seconde, la Duchesse a presque l'air humaine.`,`For a second, the Duchess looks almost human.`)]}
]),
{st:['li1','mc']},
N(`{li1} se lève dès que tu approches et tire ta chaise avant même que le valet n'ait eu le temps de bouger.`,`{li1} rises the moment you approach and pulls out your chair before the footman can even move.`),
D('li1','h',`Vous êtes {g:venu|venue|venu·e}. J'avais peur que {t:mes frères|mes sœurs} vous aient fait fuir Londres pour de bon.`,`You came. I was afraid my {t:brothers|sisters} had driven you out of London for good.`),
D('li1','n',`Du lait, pas de sucre ? J'ai posé la question à votre femme de chambre. Je voulais que tout soit parfait.`,`Milk, no sugar? I asked your maid. I wanted everything to be perfect.`),
D('mc','o',`Vous avez interrogé Bess ?`,`You questioned Bess?`),
D('li1','h',`Disons que je mène mes enquêtes avec sérieux.`,`Let's say I take my investigations seriously.`),
{st:['twinA','twinB']},
N(`À l'autre bout de la table, {tA} et {tB} vous observent par-dessus leurs tasses, comme deux chats devant une cage à oiseaux.`,`At the other end of the table, {tA} and {tB} watch you over their teacups, like two cats in front of a birdcage.`),
D('twinA','h',`Regarde, {tB}. {a:Notre cher frère|Notre chère sœur} sait encore sourire. Quel miracle.`,`Look, {tB}. Our dear {a:brother|sister} still knows how to smile. What a miracle.`),
D('twinB','h',`Il faut dire que {li1} a toujours eu du flair pour les… bonnes affaires.`,`Well, {li1} has always had a nose for… good bargains.`),
{st:['twinA','mc']},
D('twinA','h',`On raconte que la fortune des {last} est l'une des plus grandes de France. Mère adore les grandes fortunes. Et {a:notre frère|notre sœur} adore faire plaisir à Mère.`,`They say the {last} fortune is one of the greatest in France. Mother adores great fortunes. And our {a:brother|sister} adores pleasing Mother.`),
D('mc','s',`(S'{t:ils|elles} savaient… Il ne reste presque rien de cette fortune.)`,`(If only they knew… There's almost nothing left of that fortune.)`),
C('c2f',0,[
 {t:[`« {a:Votre frère|Votre sœur} n'a pas l'air de quelqu'un qui compte les écus. »`,`"Your {a:brother|sister} doesn't seem the sort to count coins."`],r:[D('twinB','a',`Oh, {a:il|elle} les compte. Simplement, {a:il|elle} le fait poliment.`,`Oh, {a:he|she} counts them. {a:He|She} just does it politely.`)]},
 {t:[`« Et vous, qui vous courtise pour votre charme ? »`,`"And you — who courts you for your charm?"`],fx:{rep:-1},r:[D('twinA','a',`{g:Insolent|Insolente|Insolent·e} !`,`How insolent!`),D('twinB','o',`Ne réponds pas, {tA}. Ça lui ferait trop plaisir.`,`Don't answer, {tA}. It would please them too much.`)]},
 {t:[`Sourire et boire votre thé sans répondre.`,`Smile and sip your tea without answering.`],fx:{rep:1},r:[N(`Ton silence les agace bien plus qu'une réplique. {tA} repose sa tasse un peu trop fort.`,`Your silence irritates them far more than any retort. {tA} sets down their cup a little too hard.`)]}
]),
{st:['li1','mc']},
D('li1','a',`Assez. {tA}, {tB}, Mère vous demande d'aller saluer Lady Pembroke. Maintenant.`,`Enough. {tA}, {tB}, Mother wants you to go and greet Lady Pembroke. Now.`),
N(`Les {t:jumeaux|jumelles} s'éloignent en ricanant. {li1} se tourne vers toi, soudain moins sûr{a:|e} de {a:lui|elle}.`,`The twins wander off, sniggering. {li1} turns to you, suddenly less sure of {a:himself|herself}.`),
D('li1','n',`Ne croyez pas un mot de ce qu'{t:ils|elles} racontent. Mais… j'aimerais vous parler, loin des oreilles indiscrètes. Ma mère a une serre, au fond du jardin. Personne n'y va à cette heure-ci.`,`Don't believe a word they say. But… I'd like to talk to you, away from prying ears. My mother has a glasshouse at the end of the garden. No one goes there at this hour.`),
D('li1','h',`M'accorderiez-vous quelques minutes ?`,`Would you grant me a few minutes?`),
N(`Tu sens le regard de ta mère peser sur ta nuque. Et celui de la Duchesse. Tout le monde attend ta réponse.`,`You feel your mother's gaze on the back of your neck. And the Duchess's. Everyone is waiting for your answer.`),
C('m4',1,[
 {t:[`« Avec plaisir. Montrez-moi cette serre. »`,`"With pleasure. Show me this glasshouse."`],set:'teaYes',fx:{li1:1},r:[
  {bg:'greenhouse',mus:'tender',where:['La serre','The glasshouse']},
  {st:['li1','mc']},
  N(`La serre est une cathédrale de verre. L'air y est tiède, chargé du parfum des orchidées et des citronniers.`,`The glasshouse is a cathedral of glass. The air is warm, heavy with the scent of orchids and lemon trees.`),
  D('li1','n',`Ma mère y passe ses matinées. C'est le seul endroit où elle se permet d'être… douce.`,`My mother spends her mornings here. It's the only place she allows herself to be… gentle.`),
  D('li1','s',`Ce n'est un secret pour personne : je dois me marier avant la fin de la Saison. C'est ce qu'on attend de {a:l'héritier|l'héritière} des Ashbury.`,`It's no secret: I must marry before the Season ends. That's what is expected of the Ashbury heir.`),
  D('li1','s',`Ma mère a déjà une liste. Des noms, des dots, des alliances. Comme on choisit un cheval.`,`My mother already has a list. Names, dowries, alliances. Like choosing a horse.`),
  D('mc','o',`Et vous ? Qu'est-ce que vous voulez ?`,`And you? What do you want?`),
  D('li1','h',`Moi ? Je crois que je veux choisir. Librement. Quelqu'un qui me regarderait comme vous me regardez en ce moment.`,`Me? I think I want to choose. Freely. Someone who would look at me the way you're looking at me right now.`),
  D('li1','n',`Est-ce trop demander, selon vous ?`,`Is that too much to ask, do you think?`),
  C('c2g',0,[
   {t:[`« Ce n'est pas trop demander. » (vous rapprocher)`,`"It's not too much to ask." (draw closer)`],set:'closeLi1',fx:{li1:2},r:[D('mc','h',`Je crois que tout le monde mérite de choisir. Même {a:l'héritier|l'héritière} des Ashbury.`,`I think everyone deserves to choose. Even the Ashbury heir.`),N(`{li1} effleure ta main du bout des doigts. Un instant, le monde se résume au bourdonnement d'une abeille contre la vitre.`,`{li1} brushes your hand with {a:his|her} fingertips. For a moment the whole world is just a bee humming against the glass.`),D('li1','h',`Merci, {first}.`,`Thank you, {first}.`)]},
   {t:[`« Nous nous connaissons à peine… » (garder vos distances)`,`"We barely know each other…" (keep your distance)`],set:'distLi1',r:[D('li1','s',`Vous avez raison. Pardonnez-moi, je suis {a:allé|allée} trop vite.`,`You're right. Forgive me, I went too fast.`),D('li1','n',`Mais je suis {a:patient|patiente}. Très {a:patient|patiente}.`,`But I am patient. Very patient.`)]}
  ]),
  N(`Quand vous ressortez de la serre, {tA} et {tB} vous attendent à l'entrée, avec un sourire entendu. Les rumeurs de demain sont déjà écrites.`,`When you leave the glasshouse, {tA} and {tB} are waiting at the door with a knowing smile. Tomorrow's rumours are already written.`)
 ]},
 {t:[`« Pardonnez-moi… j'ai besoin d'air. » (vous isoler)`,`"Forgive me… I need some air." (slip away)`],set:'teaNo',r:[
  {st:['mc']},
  N(`Tu t'éloignes vers le fond du parc, là où les rosiers laissent place aux potagers. Tu as besoin de respirer, loin des regards et des calculs.`,`You walk to the far end of the grounds, where the roses give way to the kitchen gardens. You need to breathe, far from the stares and the scheming.`),
  N(`Près de la grille de service, une silhouette escalade le mur. Elle saute, atterrit dans les choux… et se fige en te voyant.`,`By the service gate, a figure is climbing the wall. It jumps, lands in the cabbages… and freezes at the sight of you.`),
  {st:['li2','mc']},
  D('li2','o',`Oh non. Pas vous. Enfin si, vous… mais pas maintenant !`,`Oh no. Not you. Well, yes, you… but not now!`),
  D('mc','o',`Vous ! {a:L'inconnu|L'inconnue} du bal !`,`You! The stranger from the ball!`),
  SET('li2named'),
  D('li2','h',`{a:Mateo|Nell}. Puisque vous m'avez vu{a:|e} sans masque, autant que vous sachiez mon nom.`,`{a:Mateo|Nell}. Since you've seen me without a mask, you might as well know my name.`),
  D('li2','s',`Je suis {a:revenu|revenue} chercher quelque chose. Un pendentif. Je l'ai perdu sur la terrasse.`,`I came back for something. A pendant. I lost it on the terrace.`),
  ...IF('keptToken',[
   ...IF('tokOnMe',[D('mc','n',`Celui-ci ?`,`This one?`),N(`Tu sors le pendentif de ta poche. {a:Mateo|Nell} pâlit.`,`You take the pendant out of your pocket. {a:Mateo|Nell} goes pale.`)],
    [D('mc','n',`Je l'ai trouvé. Il est en sécurité, chez moi.`,`I found it. It's safe, at my house.`),D('li2','o',`Chez vous ?!`,`At your house?!`)]),
   D('mc','o',`Pourquoi ce lys, au dos ? J'ai vu exactement le même… sur un objet qui appartient à ma famille.`,`Why the lily on the back? I've seen exactly the same one… on something that belongs to my family.`),
   D('li2','o',`…`,`…`),
   D('li2','s',`Ce pendentif m'a été confié par quelqu'un qui n'est plus là. Elle m'a fait promettre de ne jamais m'en séparer.`,`This pendant was entrusted to me by someone who's gone now. She made me promise never to part with it.`),
   C('c2h',0,[
    {t:[`« Je vous le rendrai… quand vous m'aurez dit d'où vient ce lys. »`,`"I'll give it back… once you tell me where that lily comes from."`],set:'bargain',r:[D('li2','h',`Vous êtes plus {g:redoutable|redoutable|redoutable} qu'il n'y paraît.`,`You're more formidable than you look.`)]},
    {t:[`« Il est à vous. Je vous le rendrai, sans condition. »`,`"It's yours. I'll give it back, no conditions."`],set:'trustLi2',fx:{li2:2},r:[D('li2','s',`Merci. Vous n'imaginez pas ce que ça représente pour moi.`,`Thank you. You can't imagine what it means to me.`)]}
   ])
  ],[
   D('mc','s',`Je suis {g:désolé|désolée|désolé·e}. Je l'ai remis à {li1}. Les gardes l'ont sans doute, maintenant.`,`I'm sorry. I gave it to {li1}. The guards probably have it now.`),
   D('li2','a',`Aux Ashbury ?! C'est la pire chose qui pouvait arriver.`,`To the Ashburys?! That's the worst thing that could have happened.`),
   D('mc','o',`Pourquoi ? Ce n'est qu'un pendentif en étain. Avec un lys… le même que sur un objet de ma famille.`,`Why? It's only a pewter pendant. With a lily… the same as on something of my family's.`),
   D('li2','o',`…Le même lys ? Vous en êtes {g:sûr|sûre|sûr·e} ?`,`…The same lily? Are you sure?`),
   D('li2','s',`Ce pendentif m'a été confié par quelqu'un qui n'est plus là. Elle m'a fait promettre de ne jamais m'en séparer.`,`That pendant was entrusted to me by someone who's gone now. She made me promise never to part with it.`)
  ]),
  D('li2','n',`Je ne peux pas vous en dire plus. Pas ici, pas maintenant. Il y a des choses… qui ne m'appartiennent pas.`,`I can't tell you more. Not here, not now. There are things… that aren't mine to tell.`),
  D('li2','n',`Mais je vous le promets : nos chemins ne se sont pas croisés par hasard.`,`But I promise you this: our paths didn't cross by chance.`),
  N(`Au loin, une voix appelle ton nom. {a:Mateo|Nell} recule vers le mur.`,`In the distance, a voice calls your name. {a:Mateo|Nell} backs towards the wall.`),
  D('li2','h',`On se reverra, {first}. Je commence à croire que c'est inévitable.`,`We'll meet again, {first}. I'm starting to think it's inevitable.`),
  N(`En deux mouvements, {a:il|elle} a disparu de l'autre côté du mur. Il ne reste que l'odeur du lilas et ton cœur qui bat trop vite.`,`In two moves, {a:he's|she's} gone over the wall. All that's left is the scent of lilac and your racing heart.`)
 ]}
]),

{bg:'salon',mus:'mystery',card:['Le soir même','That evening'],sub:['',''],where:['Grosvenor Street','Grosvenor Street']},
{st:[]},
N(`De retour à Grosvenor Street, tu montes l'escalier quand des voix s'élèvent du petit salon. La porte est entrouverte.`,`Back on Grosvenor Street, you're climbing the stairs when voices rise from the small drawing room. The door is ajar.`),
{st:['mother','father']},
D('mother','s',`Encore une lettre, Henri. Quelqu'un, ici à Londres, sait pour Isadora.`,`Another letter, Henri. Someone here in London knows about Isadora.`),
D('father','s',`Isadora est morte depuis longtemps, Éléonore. Laisse-la reposer en paix.`,`Isadora has been dead a long time, Éléonore. Let her rest in peace.`),
D('mother','a',`En paix ? Avec ce que nous lui avons promis ? Avec ce que nous avons gardé ?`,`In peace? With what we promised her? With what we kept?`),
D('father','a',`Assez ! Si cela se sait, ce n'est pas seulement notre fortune que nous perdrons.`,`Enough! If this comes out, it won't only be our fortune we lose.`),
D('mother','s',`Parfois, je regarde {first}… et c'est elle que je vois.`,`Sometimes I look at {first}… and it's her I see.`),
N(`Le nom te frappe comme une gifle. Isadora. Le « I. » au dos du médaillon…`,`The name hits you like a slap. Isadora. The "I." on the back of the locket…`),
N(`Sans réfléchir, tu pousses la porte.`,`Without thinking, you push the door open.`),
{st:['father','mc']},
D('father','o',`{first} ! Tu… tu es {g:rentré|rentrée|rentré·e}. Nous parlions… des factures du traiteur.`,`{first}! You're… you're back. We were talking about… the caterer's bills.`),
{st:['mother','mc']},
D('mother','h',`Ton père se plaint du prix du homard anglais. Comme d'habitude.`,`Your father is complaining about the price of English lobster. As usual.`),
C('c2i',0,[
 {t:[`« Qui est Isadora ? »`,`"Who is Isadora?"`],set:'askedIsadora',r:[N(`Un silence glacial tombe sur la pièce.`,`An icy silence falls over the room.`),D('mother','a',`Personne. Une vieille connaissance de Paris. Va te coucher, {first}.`,`No one. An old acquaintance from Paris. Go to bed, {first}.`),D('father','s',`Ta mère est fatiguée. Nous le sommes tous.`,`Your mother is tired. We all are.`)]},
 {t:[`Faire semblant de n'avoir rien entendu.`,`Pretend you heard nothing.`],r:[D('mc','h',`Le homard, vraiment ? Bonne nuit, alors.`,`Lobster, really? Good night, then.`),N(`En refermant la porte, tu entends ta mère souffler de soulagement.`,`As you close the door, you hear your mother breathe a sigh of relief.`)]},
 {t:[`« De quoi aviez-vous peur qu'on apprenne ? »`,`"What are you afraid people will find out?"`],r:[D('father','a',`De rien qui te concerne.`,`Nothing that concerns you.`),D('mother','s',`Henri…`,`Henri…`),D('father','n',`Bonne nuit, {first}.`,`Good night, {first}.`)]}
]),
{st:['mc']},
D('mc','s',`(Isadora. Ils me cachent quelque chose depuis toujours… mais quoi, exactement ?)`,`(Isadora. They've been hiding something from me all along… but what, exactly?)`),

{bg:'bedroom',mus:'tender',card:['Minuit, encore','Midnight, again'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
D('bess','n',`Je vous ai monté une tisane, {title}. Vous avez une mine terrible… sans vouloir vous offenser.`,`I've brought you up some tea, {title}. You look dreadful… no offence.`),
N(`Soudain — tac. Tac. Des petits cailloux frappent contre la vitre du balcon.`,`Suddenly — tap. Tap. Little pebbles strike the balcony window.`),
D('bess','o',`Seigneur ! Qui peut bien… à cette heure-ci ?`,`Lord above! Who on earth… at this hour?`),
...IF('p1',[
 N(`Tu ouvres la porte-fenêtre. En bas, une silhouette élégante grimpe au treillis de glycine avec une agilité étonnante.`,`You open the French window. Below, an elegant figure is climbing the wisteria trellis with surprising agility.`),
 {st:['li1','mc']},
 D('li1','h',`Bonsoir, {first}. Avant que vous ne criiez : oui, c'est bien moi. Et non, ma mère ne sait pas que je suis ici.`,`Good evening, {first}. Before you scream: yes, it really is me. And no, my mother doesn't know I'm here.`),
 ...IF('teaNo',[D('li1','s',`Vous avez fui le jardin, cet après-midi. Je voulais savoir si c'était à cause de moi.`,`You fled the garden this afternoon. I wanted to know whether it was because of me.`)],
  [D('li1','h',`Je n'ai pas cessé de penser à notre conversation dans la serre.`,`I haven't stopped thinking about our conversation in the glasshouse.`)]),
 D('li1','n',`Il y a quelque chose que je dois vous révéler. Quelque chose d'important sur ma famille, que personne d'autre ne sait. Et je crois que vous devez être la première personne à l'apprendre.`,`There's something I must tell you. Something important about my family that no one else knows. And I believe you should be the first to hear it.`),
 D('li1','n',`Mais pas ici. À Mayfair, les murs ont des oreilles.`,`But not here. In Mayfair, the walls have ears.`),
 N(`{a:Il|Elle} te glisse un billet plié, scellé d'une goutte de cire aux armes des Ashbury.`,`{a:He|She} slips you a folded note, sealed with a drop of wax bearing the Ashbury crest.`),
 N(`« Demain, à l'aube. Le kiosque à musique de Hyde Park. Venez {g:seul|seule|seul·e}. — {a:E.|R.} »`,`"Tomorrow, at dawn. The bandstand in Hyde Park. Come alone. — {a:E.|R.}"`)
],[
 N(`Tu ouvres la porte-fenêtre. Une silhouette est perchée sur la rambarde du balcon, en équilibre comme un chat.`,`You open the French window. A figure is perched on the balcony rail, balanced like a cat.`),
 {st:['li2','mc']},
 ...IF('teaNo',[D('li2','h',`Je vous avais dit qu'on se reverrait. Je n'avais pas précisé que ce serait si vite.`,`I told you we'd meet again. I didn't say it would be this soon.`)],
  [SET('li2named'),D('li2','h',`Bonsoir, {first}. On ne s'est pas présentés, au bal. {a:Mateo|Nell}. Et oui, c'est bien moi qui vous ai {g:bousculé|bousculée|bousculé·e}.`,`Good evening, {first}. We weren't introduced at the ball. {a:Mateo|Nell}. And yes, I'm the one who crashed into you.`)]),
 D('li2','n',`J'ai découvert quelque chose. Sur ce pendentif… et sur la raison pour laquelle il est arrivé jusqu'à moi. Quelque chose qui vous concerne aussi.`,`I've found something out. About that pendant… and why it came to me. Something that concerns you too.`),
 D('li2','s',`Je ne peux pas vous le dire ici. Si on me surprend une deuxième fois dans Mayfair, je finirai à la prison de Newgate.`,`I can't tell you here. If I'm caught in Mayfair a second time, I'll end up in Newgate prison.`),
 N(`{a:Il|Elle} te tend un bout de papier froissé, écrit au crayon.`,`{a:He|She} hands you a crumpled scrap of paper, written in pencil.`),
 N(`« Demain soir. Pont de Blackfriars, sous la troisième lanterne. Je vous dirai tout. — {a:M.|N.} »`,`"Tomorrow night. Blackfriars Bridge, under the third lantern. I'll tell you everything. — {a:M.|N.}"`)
]),
N(`Le temps de te retourner, la silhouette s'est déjà fondue dans la nuit.`,`By the time you turn around, the figure has already melted into the night.`),
{st:['bess','mc']},
D('bess','h',`Je n'ai rien vu, {title}. Rien entendu. Je dormais profondément.`,`I saw nothing, {title}. Heard nothing. I was fast asleep.`),
D('bess','h',`Mais si vous voulez mon avis… on ne grimpe pas jusqu'à un balcon pour parler de la pluie et du beau temps.`,`But if you want my opinion… nobody climbs up to a balcony to talk about the weather.`),
C('c2j',0,[
 {t:[`« Merci, Bess. Tu es une vraie amie. »`,`"Thank you, Bess. You're a true friend."`],fx:{bess:1},r:[D('bess','h',`Une amie qui voudra tous les détails demain matin !`,`A friend who'll want every detail tomorrow morning!`)]},
 {t:[`« Promets-moi de ne rien dire à mes parents. »`,`"Promise me you won't tell my parents."`],r:[D('bess','n',`Juré. Sur la tête de ma grand-mère. Et elle a une très grosse tête.`,`I swear. On my grandmother's head. And she has a very large head.`)]},
 {t:[`« Tu crois que je devrais y aller ? »`,`"Do you think I should go?"`],r:[D('bess','h',`Je crois que vous en mourez d'envie.`,`I think you're dying to.`)]}
]),
{st:['mc']},
N(`Bess partie, tu restes longtemps à la fenêtre, le billet serré contre ton cœur.`,`After Bess leaves, you stay at the window for a long time, the note pressed against your heart.`),
N(`Un rendez-vous secret. Une femme nommée Isadora. Un lys gravé sur deux bijoux que tout oppose.`,`A secret meeting. A woman named Isadora. A lily engraved on two pieces of jewellery that have nothing in common.`),
D('mc','s',`(Demain, j'aurai peut-être enfin des réponses. Ou encore plus de questions.)`,`(Tomorrow I might finally get some answers. Or even more questions.)`),
{end:2}
);
