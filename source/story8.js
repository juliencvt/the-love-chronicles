/* ===== CHAPITRE 8 — Le lendemain du scandale ===== */
STORY.push(
{bg:'bedroomday',mus:'calm',chap:8,card:['Chapitre 8','Chapter 8'],sub:['Le lendemain du scandale','The Morning After'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Midi passé. Tu n'as dormi que trois heures. Bess entre avec un plateau… et une pile de lettres qui menace de s'écrouler.`,`Past noon. You've slept barely three hours. Bess comes in with a tray… and a pile of letters on the verge of collapse.`),
D('bess','s',`Ce sont des annulations, {title}. Le thé de Lady Jersey, le pique-nique des Cowper, le concert des Sefton… Tout Londres a soudain mal à la tête.`,`They're cancellations, {title}. Lady Jersey's tea, the Cowpers' picnic, the Seftons' concert… All of London has suddenly come down with a headache.`),
D('bess','h',`Mais il y a aussi ça. Le valet de la Reine l'a apporté en personne.`,`But there's this too. The Queen's footman brought it himself.`),
N(`Un billet au sceau royal. Trois mots, d'une écriture énergique : « Tenez bon. — C. »`,`A note bearing the royal seal. Three words, in a vigorous hand: "Stand firm. — C."`),
C('c8a',0,[
 {t:[`« La Reine est de mon côté. C'est déjà ça. »`,`"The Queen is on my side. That's something."`],fx:{rep:1},r:[D('bess','h',`C'est beaucoup plus que « ça » ! Les annulations vont se transformer en invitations, vous verrez.`,`It's a lot more than "something"! Those cancellations will turn back into invitations, you'll see.`)]},
 {t:[`« Qu'ils annulent. Je n'avais pas envie de les voir. »`,`"Let them cancel. I didn't want to see them anyway."`],r:[D('bess','h',`Voilà qui est parlé ! Et ça fera plus de gâteaux pour nous.`,`That's the spirit! And all the more cake for us.`)]}
]),
D('bess','s',`{title}… Est-ce que ça change quelque chose ? Pour vous, je veux dire. De savoir qui était votre mère ?`,`{title}… Does it change anything? For you, I mean. Knowing who your mother was?`),
D('mc','s',`(Je me suis {g:réveillé|réveillée|réveillé·e} en me demandant qui j'étais. Puis j'ai entendu ma mère chanter dans le couloir, comme tous les matins.)`,`(I woke up wondering who I was. Then I heard my mother humming in the hallway, like every morning.)`),
D('mc','h',`Je crois que j'ai deux mères, Bess. Une que je dois découvrir, et une que je dois remercier.`,`I think I have two mothers, Bess. One I need to discover, and one I need to thank.`),
D('bess','o',`Oh, vous allez me faire pleurer dans le thé.`,`Oh, you'll make me cry into the tea.`),

{bg:'salon',mus:'tender',where:['Le salon','The drawing room']},
{st:['clem','theo']},
N(`L'après-midi, la sonnette retentit. Trois visiteurs, malgré le scandale. Quatre, en comptant le panier de pâtisseries que porte Théo.`,`In the afternoon, the bell rings. Three visitors, despite the scandal. Four, counting the basket of pastries Theo is carrying.`),
D('clem','h',`On a fait le tour de Mayfair pour compter qui parlait de toi. Réponse : tout le monde. Félicitations, tu es la personne la plus célèbre de Londres.`,`We went round all of Mayfair counting who was talking about you. Answer: everyone. Congratulations, you're the most famous person in London.`),
D('theo','s',`Ce que ma sœur essaie de dire, c'est : comment vas-tu ?`,`What my sister is trying to say is: how are you?`),
{st:['georgie','cordelia']},
D('georgie','h',`Et aussi : est-ce que la fortune Valcourt est aussi grosse qu'on le dit ? Lord Fairfax parlait de trois châteaux.`,`And also: is the Valcourt fortune as big as they say? Lord Fairfax mentioned three châteaux.`),
D('cordelia','n',`Georgie ! … Pardonne-la. Nous sommes là pour toi, c'est tout. Si tu as besoin de quoi que ce soit, n'importe quoi, je suis là.`,`Georgie! … Forgive her. We're here for you, that's all. If you need anything at all, I'm here.`),
N(`Cordelia te prend les mains. Les siennes sont tièdes, cette fois. Elle sourit avec une douceur parfaite.`,`Cordelia takes your hands. Hers are warm this time. She smiles with perfect gentleness.`),
D('cordelia','s',`Iris va contester l'héritage, j'en suis sûre. Si tu as des preuves, des lettres… cache-les bien. Et dis-moi où, que quelqu'un d'autre sache, au cas où.`,`Iris will contest the inheritance, I'm sure of it. If you have proof, letters… hide them well. And tell me where, so someone else knows, just in case.`),
C('m15',1,[
 {t:[`Lui confier où sont cachés tes papiers.`,`Tell her where your papers are hidden.`],set:'trustCordelia',r:[D('mc','n',`Dans le secrétaire de ma chambre. Le tiroir à double fond. Merci, Cordelia.`,`In the writing desk in my room. The drawer with the false bottom. Thank you, Cordelia.`),D('cordelia','h',`Ton secret est en sécurité avec moi. Je te le promets.`,`Your secret is safe with me. I promise.`),N(`Elle te serre dans ses bras. Par-dessus ton épaule, son regard glisse vers l'escalier.`,`She hugs you. Over your shoulder, her gaze slides towards the staircase.`)]},
 {t:[`Garder le secret pour toi. Même avec elle.`,`Keep the secret to yourself. Even from her.`],set:'wary8',r:[D('mc','n',`Merci. Mais moins de gens savent, mieux je dors.`,`Thank you. But the fewer people know, the better I sleep.`),D('cordelia','s',`Bien sûr. Tu as raison. C'est… très sage.`,`Of course. You're right. That's… very wise.`),N(`Son sourire ne bouge pas d'un millimètre. Seuls ses doigts se crispent un instant sur ta main.`,`Her smile doesn't move a millimetre. Only her fingers tighten on your hand for a moment.`)]}
]),
{st:['clem','mc']},
D('clem','h',`Bon. Assez de drames. Ce soir, on t'emmène en promenade à Hyde Park. Si tu te caches, ils gagnent.`,`Right. Enough drama. Tonight, we're taking you for a drive in Hyde Park. If you hide, they win.`),
C('c8b',0,[
 {t:[`« Tu as raison. On y va. »`,`"You're right. Let's go."`],fx:{rep:1},set:'hydePark',r:[D('clem','h',`Voilà {g:mon homme|ma fille|ma personne préférée} !`,`That's my favourite person!`)]},
 {t:[`« Pas ce soir, Clem. Demain, promis. »`,`"Not tonight, Clem. Tomorrow, I promise."`],r:[D('theo','s',`Demain, alors. Je te tiendrai parole à ta place si tu oublies.`,`Tomorrow, then. I'll hold you to it if you forget.`)]}
]),

...IF('hydePark',[
 {bg:'park',mus:'calm',where:['Hyde Park','Hyde Park']},
 {st:['twinA','twinB']},
 N(`À Hyde Park, les calèches ralentissent pour mieux te dévisager. Celle des jumeaux s'arrête carrément.`,`In Hyde Park, carriages slow down to get a better look at you. The twins' stops altogether.`),
 ...IF('helpedTwin',[D('twinA','n',`…Bonsoir. Tu tiens le coup ?`,`…Good evening. Holding up?`),D('twinB','a',`{tA} ! On ne parle pas {t:au bâtard|à la bâtarde}.`,`{tA}! We don't talk to the bastard.`),D('twinA','s',`Tais-toi, {tB}. Pour une fois.`,`Be quiet, {tB}. For once.`)],
  [D('twinB','h',`Regarde qui ose se montrer ! L'héritière de personne.`,`Look who dares show their face! Heir to nobody.`),D('twinA','h',`Ta « mère » chantait dans les salons, il paraît. Ça explique tes manières.`,`Your "mother" sang in drawing rooms, apparently. That explains your manners.`)]),
 {st:['clem','theo']},
 D('clem','a',`Fouette tes chevaux, {tB}, avant que je te fasse goûter de mon ombrelle.`,`Whip up your horses, {tB}, before I give you a taste of my parasol.`),
 N(`La calèche des jumeaux repart. Clem éclate de rire. Théo soupire. Et toi, pour la première fois de la journée, tu souris.`,`The twins' carriage moves off. Clem bursts out laughing. Theo sighs. And for the first time today, you smile.`)
]),

{bg:'garden',mus:'tender',card:['La nuit tombe','Nightfall'],sub:['',''],where:['Le jardin de Grosvenor Street','The Grosvenor Street garden']},
{st:['mc']},
N(`La maison dort. Tu ne trouves pas le sommeil, alors tu descends au jardin, en châle, sous la lune.`,`The house is asleep. You can't sleep, so you go down to the garden, wrapped in a shawl, under the moon.`),
...IF('danceLi1',[
 N(`Un caillou heurte la grille. Derrière, une silhouette familière, sans chapeau, les cheveux en bataille. {li1}, qui a visiblement traversé Mayfair à pied.`,`A pebble strikes the gate. Behind it, a familiar figure, hatless, hair tousled. {li1}, who has clearly walked across Mayfair.`),
 {st:['lv','mc']},
 D('lv','h',`Ma mère m'a interdit de venir. Alors je suis venu{a:|e}. J'ai toujours été un très mauvais enfant.`,`My mother forbade me to come. So I came. I've always been a very bad child.`)
],[
 N(`Un sifflement doux, trois notes. Sur le mur du jardin, une silhouette assise jambes pendantes. {li2}, un panier de pain encore chaud sur les genoux.`,`A soft whistle, three notes. On the garden wall, a figure sits with legs dangling. {li2}, a basket of still-warm bread on {a:his|her} lap.`),
 {st:['lv','mc']},
 D('lv','h',`Le boulanger de Fleury me devait un service. Je me suis dit que vous n'aviez sûrement rien mangé depuis hier.`,`Fleury's baker owed me a favour. I figured you hadn't eaten anything since yesterday.`)
]),
N(`{lv} saute dans le jardin et s'assied près de toi, sur le banc de pierre. Assez près pour que vos épaules se touchent.`,`{lv} drops into the garden and sits beside you on the stone bench. Close enough that your shoulders touch.`),
D('lv','s',`Je n'ai pas arrêté de penser à votre visage, hier soir. Quand Iris a lu la lettre. J'aurais voulu traverser la salle et vous emporter loin d'ici.`,`I couldn't stop thinking about your face last night. When Iris read the letter. I wanted to cross the room and carry you far away.`),
D('mc','s',`Et maintenant ? Je ne suis plus {g:le fils|la fille|l'enfant} d'un comte. Je suis {g:un bâtard|une bâtarde|un enfant illégitime} avec un procès sur les bras.`,`And now? I'm no longer a count's child. I'm a bastard with a lawsuit on my hands.`),
D('lv','h',`Maintenant ? Vous êtes exactement la même personne qu'avant-hier. Celle qui m'empêche de dormir.`,`Now? You're exactly the same person as the day before yesterday. The one who keeps me awake at night.`),
C('m16',1,[
 {t:[`L'embrasser, là, sous la lune.`,`Kiss {a:him|her}, right there, under the moon.`],set:'kiss8',fx:{lv:3},r:[N(`Tu poses ta main sur sa joue. {lv} retient son souffle. Puis tu l'embrasses, doucement d'abord, puis comme si le reste du monde n'existait plus.`,`You lay your hand on {a:his|her} cheek. {lv} holds {a:his|her} breath. Then you kiss {a:him|her}, gently at first, then as if the rest of the world had ceased to exist.`),D('lv','o',`…Je vais devoir revenir demain soir. Et après-demain. C'est un problème.`,`…I'll have to come back tomorrow night. And the night after. That's a problem.`),D('mc','h',`Je laisserai la grille ouverte.`,`I'll leave the gate open.`),{cg:'firstkiss'}]},
 {t:[`Poser ta tête sur son épaule, sans un mot.`,`Rest your head on {a:his|her} shoulder, without a word.`],set:'shoulder8',fx:{lv:2},r:[N(`Tu laisses ta tête tomber sur son épaule. {lv} ne bouge plus, comme si un oiseau s'était posé sur {a:lui|elle}. Puis sa main trouve la tienne.`,`You let your head drop onto {a:his|her} shoulder. {lv} goes completely still, as if a bird had landed on {a:him|her}. Then {a:his|her} hand finds yours.`),D('lv','s',`Restez comme ça. Juste un moment. Le monde peut attendre.`,`Stay like that. Just for a moment. The world can wait.`)]}
]),
N(`Vous restez là jusqu'à ce que les étoiles pâlissent. Quand {lv} repart, tu sens encore la chaleur de sa main dans la tienne.`,`You stay there until the stars fade. When {lv} leaves, you can still feel the warmth of {a:his|her} hand in yours.`),
{st:['mc']},
N(`En remontant, tu remarques que la fenêtre du petit salon est entrouverte. Tu es pourtant sûr{e} de l'avoir fermée.`,`On your way back up, you notice the small parlour window is ajar. Yet you're sure you closed it.`),
{end:8}
);
