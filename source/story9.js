/* ===== CHAPITRE 9 — Le notaire ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:9,card:['Chapitre 9','Chapter 9'],sub:['Le notaire','The Notary'],where:['Le bureau de ton père','Your father\'s study']},
{st:['father','mc']},
N(`Le lendemain matin, un petit homme en noir attend dans le bureau de ton père, des lunettes sur le bout du nez et une sacoche pleine à craquer.`,`The next morning, a small man in black waits in your father's study, spectacles on the tip of his nose and a satchel fit to burst.`),
D('dorval','n',`Maître Dorval, notaire de la famille Valcourt depuis trente ans. Enfin… de ce qu'il en reste. Asseyez-vous, je vous prie.`,`Mr Dorval, notary to the Valcourt family for thirty years. Well… what's left of it. Please, sit down.`),
D('dorval','n',`Le testament du vieux marquis de Valcourt est clair : la fortune va à l'enfant d'Isadora. Les terres de Touraine, l'hôtel de la rue de Varenne, et une somme qui ferait rougir un banquier.`,`The old Marquis de Valcourt's will is clear: the fortune goes to Isadora's child. The lands in Touraine, the house on the Rue de Varenne, and a sum that would make a banker blush.`),
D('dorval','s',`Mais ce matin, Madame Iris a déposé une requête devant la Cour. Elle affirme que l'enfant d'Isadora est mort à la naissance. Et que vous êtes… un imposteur que votre père a ramassé quelque part.`,`But this morning, Madame Iris filed a petition with the Court. She claims Isadora's child died at birth. And that you are… an impostor your father picked up somewhere.`),
D('father','a',`C'est un mensonge ! J'ai tenu cet enfant dans mes bras le soir même.`,`That's a lie! I held this child in my arms that very night.`),
D('dorval','n',`Je vous crois, Monsieur le Comte. Mais la Cour voudra des preuves. Un acte de baptême. Le témoignage de la sage-femme. Et tout cela se trouve à Paris… si cela existe encore.`,`I believe you, Count. But the Court will want proof. A baptism record. The midwife's testimony. And all of that is in Paris… if it still exists.`),
C('c9a',0,[
 {t:[`« Qui était la sage-femme, Père ? »`,`"Who was the midwife, Father?"`],r:[D('father','s',`Une certaine Madame Roux. Elle habitait près de Saint-Sulpice. Elle doit être bien vieille, aujourd'hui.`,`A certain Madame Roux. She lived near Saint-Sulpice. She must be very old by now.`)]},
 {t:[`« Combien de temps avons-nous ? »`,`"How much time do we have?"`],r:[D('dorval','n',`L'audience aura lieu dans six semaines. C'est court, pour un aller-retour à Paris. Mais faisable.`,`The hearing will be in six weeks. Tight, for a trip to Paris and back. But doable.`)]}
]),
D('dorval','s',`Il y a une dernière chose. Si la Cour vous reconnaît, vos dettes familiales seront réglées dix fois. Si elle donne raison à Iris… elle aura les moyens de vous écraser.`,`There is one last thing. If the Court recognises you, your family's debts will be settled ten times over. If it sides with Iris… she'll have the means to crush you.`),
{st:['mother','mc']},
N(`Ta mère, restée sur le seuil, s'avance. Elle n'a pas dormi non plus.`,`Your mother, who had stayed in the doorway, steps forward. She hasn't slept either.`),
D('mother','s',`Tu n'es obligé{e} de rien, {first}. Ni de te battre pour cet argent, ni de remuer le passé d'Isadora. Personne ne t'en voudra.`,`You don't have to do anything, {first}. Neither fight for that money, nor stir up Isadora's past. No one will blame you.`),
C('m17',1,[
 {t:[`Te battre pour l'héritage. Il sauvera ta famille.`,`Fight for the inheritance. It will save your family.`],set:'claimHeir',fx:{rep:1},r:[D('mc','a',`Iris a pris la vie de ma mère. Je ne la laisserai pas prendre aussi la maison de mon père. Je me bats.`,`Iris took my mother's life. I won't let her take my father's house too. I'm going to fight.`),D('father','s',`Tu as le menton d'Isadora quand tu dis ça. Exactement le même.`,`You have Isadora's chin when you say that. Exactly the same.`)]},
 {t:[`Te moquer de l'argent. Seule la vérité sur Isadora compte.`,`Never mind the money. Only the truth about Isadora matters.`],set:'truthOnly',r:[D('mc','s',`Je me fiche de la fortune. Mais je veux savoir comment elle est morte. Et si Iris l'a tuée, je veux que le monde entier le sache.`,`I don't care about the fortune. But I want to know how she died. And if Iris killed her, I want the whole world to know.`),D('mother','s',`Alors tu iras à Paris. Et je prierai pour toi chaque soir.`,`Then you'll go to Paris. And I'll pray for you every night.`)]}
]),
D('dorval','n',`Paris, donc. Je vous préparerai des lettres de recommandation. Et, si je puis me permettre… ne dites à personne la date de votre départ.`,`Paris, then. I'll prepare letters of introduction for you. And, if I may… don't tell anyone the date of your departure.`),

...IF('danceLi1',[
 {bg:'opera',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['La bibliothèque des Ashbury','The Ashbury library']},
 {st:['lv','mc']},
 N(`Le soir, un billet de {li1} t'attire à la bibliothèque des Ashbury, « pour une affaire de la plus haute importance ». La Duchesse est à l'opéra. Les domestiques ont été congédiés.`,`In the evening, a note from {li1} draws you to the Ashbury library, "on a matter of the utmost importance". The Duchess is at the opera. The servants have been dismissed.`),
 D('lv','h',`J'ai trouvé ceci dans les archives de ma mère. Le programme d'un récital à Versailles, 1794. Regardez le nom en haut de l'affiche.`,`I found this in my mother's archives. A recital programme from Versailles, 1794. Look at the name at the top of the bill.`),
 N(`« Mademoiselle Isadora de Valcourt, soprano. » Et dans la marge, d'une écriture fine : « La plus belle voix de France. — A. »`,`"Mademoiselle Isadora de Valcourt, soprano." And in the margin, in a fine hand: "The finest voice in France. — A."`),
 D('lv','s',`Ma mère l'admirait. Elle ne l'a jamais dit, mais elle a gardé ce papier vingt ans.`,`My mother admired her. She never said so, but she kept this paper for twenty years.`)
],[
 {bg:'shop',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['L\'atelier de Madame Fleury','Madame Fleury\'s workshop']},
 {st:['lv','mc']},
 N(`Le soir, un billet glissé sous ta porte t'attire chez Madame Fleury. L'atelier est fermé. Une seule bougie brûle entre les mannequins.`,`In the evening, a note slipped under your door draws you to Madame Fleury's. The workshop is closed. A single candle burns among the dressmaker's dummies.`),
 D('lv','h',`Lady Pembroke donne un bal dans trois jours. Vous y serez invité{e}, Clem s'en est assurée. Et vous ne pouvez pas y aller dans une robe que tout Londres a déjà vue.`,`Lady Pembroke is giving a ball in three days. You'll be invited, Clem made sure of it. And you can't go in an outfit all of London has already seen.`),
 D('lv','s',`Alors je vous ai dessiné quelque chose. Deux choses, en fait. Je n'arrivais pas à choisir. Mais d'abord… je dois prendre vos mesures.`,`So I sketched something for you. Two things, actually. I couldn't choose. But first… I need to take your measurements.`),
 N(`Le ruban de mesure glisse autour de ta taille, de tes épaules. Les mains de {li2} tremblent un tout petit peu.`,`The tape measure slides around your waist, your shoulders. {li2}'s hands tremble ever so slightly.`)
]),
D('lv','s',`On dit que vous partez pour Paris.`,`They say you're leaving for Paris.`),
D('mc','o',`Qui « on » ? C'était censé être un secret !`,`Who's "they"? That was supposed to be a secret!`),
D('lv','h',`Vous avez dit « Paris » trois fois en deux minutes, et vous avez regardé par la fenêtre vers l'est à chaque fois. Je vous observe beaucoup. Trop, sûrement.`,`You've said "Paris" three times in two minutes, and looked out the window towards the east each time. I watch you a lot. Too much, probably.`),
D('lv','n',`Laissez-moi venir avec vous.`,`Let me come with you.`),
C('m18',1,[
 {t:[`« Oui. Je ne veux pas y aller sans vous. »`,`"Yes. I don't want to go without you."`],set:'lvParis',fx:{lv:3},r:[D('lv','h',`Alors c'est décidé. Je vais devoir mentir à beaucoup de monde. Ça en vaut la peine.`,`Then it's settled. I'll have to lie to a lot of people. It's worth it.`),N(`{lv} pose son front contre le tien. Vous restez ainsi, sans bouger, à écouter la bougie crépiter.`,`{lv} rests {a:his|her} forehead against yours. You stay like that, motionless, listening to the candle crackle.`)]},
 {t:[`« C'est trop dangereux. Je ne veux pas vous perdre. »`,`"It's too dangerous. I don't want to lose you."`],set:'lvParisNo',fx:{lv:1},r:[D('lv','a',`C'est exactement pour ça que je viens. Vous ne vous débarrasserez pas de moi si facilement.`,`That's exactly why I'm coming. You won't get rid of me that easily.`),D('mc','h',`Têtu{a:|e}.`,`Stubborn.`),D('lv','h',`Amoureu{a:x|se}. C'est presque pareil.`,`In love. It's nearly the same thing.`)]}
]),
N(`Quand tu rentres, minuit est passé. Dans le vestibule, une enveloppe sans timbre t'attend, à ton nom. À l'intérieur, une seule ligne :`,`When you get home, it's past midnight. In the hall, an unstamped envelope awaits you, addressed to you. Inside, a single line:`),
N(`« Reste à Londres, et personne ne sera blessé. — I. de V. »`,`"Stay in London, and no one will get hurt. — I. de V."`),
{end:9}
);
