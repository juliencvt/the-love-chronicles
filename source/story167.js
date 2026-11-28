/* ===== LA FIANCÉE DU CORSAIRE — SAISON 4 — CHAPITRE 1 — La démission ===== */
STORY.push(
{bg:'terrace',mus:'calm',chap:167,card:['Saison 4 · Chapitre 1','Season 4 · Chapter 1'],sub:['La démission','The Resignation'],where:['La véranda de ton père, Port-Royal','Your father\'s veranda, Port Royal']},
{st:['gov','mc']},
N(`Le lendemain matin, ton père vous attend sur la véranda. Il a mis son plus bel habit, celui des grandes réceptions, avec les boutons dorés et la perruque poudrée. Sur la table, il y a du café, des mangues coupées, et une lettre fermée par un énorme cachet rouge.`,`The next morning your father is waiting on the veranda. He's put on his finest coat, the one for grand receptions, with the gilt buttons and the powdered wig. On the table there's coffee, sliced mangoes, and a letter closed with an enormous red seal.`),
D('gov','n',`Assieds-toi. Non, vraiment. Assieds-toi.`,`Sit down. No, really. Sit down.`),
N(`Tu t'assois. {lv} reste debout derrière toi, une main sur ton épaule. Ton père prend une grande inspiration, comme avant un discours devant l'Assemblée.`,`You sit. {lv} stays standing behind you, a hand on your shoulder. Your father takes a deep breath, as before a speech to the Assembly.`),
D('gov','n',`Il y a deux mois, j'ai écrit au roi. Je lui ai demandé de me relever de mes fonctions. Sa réponse est arrivée hier. Il a accepté.`,`Two months ago I wrote to the King. I asked to be relieved of my duties. His answer arrived yesterday. He has accepted.`),
D('mc','a',`Tu… tu quittes ton poste ? Papa, tu es gouverneur depuis quinze ans !`,`You're… you're leaving your post? Papa, you've been governor for fifteen years!`),
D('gov','s',`Quinze ans. Quinze ans de dîners avec des planteurs qui sentent le rhum, de lettres à Londres que personne ne lit, et de pirates qui bombardent mon port. Dont une que je ne nommerai pas.`,`Fifteen years. Fifteen years of dinners with planters who reek of rum, letters to London that no one reads, and pirates bombarding my harbour. Including one I won't name.`),
D('gov','s',`J'ai soixante-deux ans. J'ai raté toute ton enfance à cause de ce bureau. Je ne raterai pas celle de mon petit-enfant. Je veux être là. Tous les jours. Je veux apprendre à faire des bateaux en papier.`,`I'm sixty-two. I missed your whole childhood because of that office. I won't miss my grandchild's. I want to be there. Every day. I want to learn to make paper boats.`),
...IF('fiF',[
 N(`Sous la table, {kid} tire sur la manche de son grand-père. Il se penche. Elle lui chuchote quelque chose à l'oreille. Il éclate de rire.`,`Under the table, {kid} tugs at her grandfather's sleeve. He leans down. She whispers something in his ear. He bursts out laughing.`),
 D('gov','h',`Elle dit qu'elle sait déjà faire les bateaux en papier, et qu'elle va m'apprendre. Tu vois ? J'ai déjà un professeur.`,`She says she already knows how to make paper boats and she'll teach me. You see? I have a teacher already.`),
],[
 N(`Il regarde ton ventre, encore presque plat, avec une tendresse si nue que tu dois détourner les yeux.`,`He looks at your belly, still almost flat, with a tenderness so naked you have to look away.`),
]),
{set:'pRetired'},
C('p67a',0,[
 {t:[`Te lever et le serrer dans tes bras.`,`Get up and hug him.`],fx:{rep:1},r:[N(`Tu fais le tour de la table et tu le serres très fort. Sa perruque glisse de travers. Il ne la remet pas. « Je suis fier de toi, murmure-t-il. Je ne te l'ai jamais assez dit. Je vais rattraper le temps perdu. »`,`You go round the table and hold him tight. His wig slips sideways. He doesn't straighten it. "I'm proud of you," he murmurs. "I never said it enough. I'm going to make up for lost time."`)]},
 {t:[`« Tu vas t'ennuyer à mourir en une semaine. »`,`"You'll be bored to death within a week."`],fx:{rep:1},r:[N(`Ton père lève un sourcil. « M'ennuyer ? J'ai prévu d'apprendre la pêche, le jardinage, et les comptines. J'ai déjà acheté un livre de comptines. Il y en a une sur un crocodile qui est absolument terrifiante. »`,`Your father raises an eyebrow. "Bored? I plan to learn fishing, gardening, and nursery rhymes. I've already bought a book of nursery rhymes. There's one about a crocodile that is absolutely terrifying."`)]}
]),
{bg:'terrace',mus:'mystery',card:['Le successeur','The successor'],sub:['',''],where:['La véranda','The veranda']},
{st:['gov','lv']},
D('lv','n',`Et qui va vous remplacer ?`,`And who's replacing you?`),
N(`Le sourire de ton père s'efface un peu. Il tapote la lettre au cachet rouge.`,`Your father's smile fades a little. He taps the red-sealed letter.`),
D('gov','n',`Un certain Lord Ambrose Thorne. Je ne le connais pas. Personne ne le connaît vraiment. Il était administrateur aux Indes orientales. On dit qu'il a fait fortune là-bas. On dit beaucoup de choses. Il arrive dans deux ou trois mois, le temps de traverser l'Atlantique.`,`A certain Lord Ambrose Thorne. I don't know him. No one really does. He was an administrator in the East Indies. They say he made a fortune there. They say a lot of things. He arrives in two or three months, once he's crossed the Atlantic.`),
D('gov','n',`Une fois qu'il sera là, je n'aurai plus aucun pouvoir. Plus de sceau, plus de soldats, plus rien. Juste un vieil homme sur une véranda. Avec quelques amis, heureusement.`,`Once he's here I'll have no power at all. No seal, no soldiers, nothing. Just an old man on a veranda. With a few friends, fortunately.`),
D('mc','n',`Tu crois qu'il va nous poser des problèmes ?`,`Do you think he'll cause us trouble?`),
D('gov','s',`Je crois que tu as le pardon du roi d'Espagne, pas celui du roi d'Angleterre. Je crois que les nouveaux gouverneurs aiment se faire remarquer. Et je crois qu'on verra bien. Mangez vos mangues, elles vont s'abîmer.`,`I think you have the King of Spain's pardon, not the King of England's. I think new governors like to make a name for themselves. And I think we'll see. Eat your mangoes, they'll spoil.`),
{bg:'docks',mus:'tender',card:['Le quai','The quay'],sub:['',''],where:['Le quai, en fin de matinée','The quay, late morning']},
{st:['lv','mc']},
N(`En redescendant vers le port, {lv} marche à côté de toi sans rien dire. Puis, au bout d'un moment, {a:il|elle} prend ta main.`,`Walking back down to the harbour, {lv} is silent beside you. Then, after a while, {a:he|she} takes your hand.`),
D('lv','n',`Ton père voulait qu'on s'installe chez lui. Maintenant qu'il ne sera plus gouverneur, il aura toute la grande maison pour lui tout seul. Il va insister encore.`,`Your father wanted us to move in with him. Now that he won't be governor, he'll have the big house all to himself. He'll insist again.`),
C('p67b',0,[
 {t:[`« On vit sur *La Fiancée*. C'est notre maison. On en fera une maison pour trois. »`,`"We live on *The Betrothed*. It's our home. We'll make it a home for three."`],set:'pStayAboard',fx:{lv:3},r:[N(`{lv} s'arrête au milieu du quai, et te regarde avec un sourire immense. « Pour trois. J'espérais que tu dirais ça. J'ai déjà une idée pour la cabine de poupe. Une très bonne idée. Tu vas voir. »`,`{lv} stops in the middle of the quay and looks at you with an enormous smile. "For three. I was hoping you'd say that. I already have an idea for the stern cabin. A very good idea. You'll see."`)]},
 {t:[`« Un enfant de pirate doit grandir sur l'eau. Papa viendra nous voir. Tous les jours, s'il veut. »`,`"A pirate's child should grow up on the water. Papa can visit. Every day, if he likes."`],set:'pStayAboard',fx:{lv:3},r:[N(`{lv} rit. « Tous les jours. Il va le faire, tu sais. Il va venir tous les matins avec ses comptines de crocodile. » Puis {a:il|elle} devient sérieu{a:x|se}, et presse ta main. « J'ai une idée pour la cabine de poupe. Laisse-moi faire. »`,`{lv} laughs. "Every day. He'll do it, you know. He'll come every morning with his crocodile rhymes." Then {a:he|she} turns serious and squeezes your hand. "I have an idea for the stern cabin. Leave it to me."`)]}
]),
{end:167}
);
