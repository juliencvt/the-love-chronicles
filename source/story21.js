/* ===== CHAPITRE 21 — Le jugement ===== */
STORY.push(
{bg:'bedroomday',mus:'calm',chap:21,card:['Chapitre 21','Chapter 21'],sub:['Le jugement','The Verdict'],where:['Ta chambre','Your bedroom']},
{st:['mother','mc']},
N(`Tu dors deux jours entiers. Quand tu te réveilles, ta mère est assise au bord de ton lit, exactement comme quand tu avais la fièvre, enfant.`,`You sleep for two whole days. When you wake, your mother is sitting on the edge of your bed, exactly as she did when you had a fever as a child.`),
D('mother','s',`Tu nous as fait une peur… Ton père a vieilli de dix ans. Moi de vingt.`,`You gave us such a fright… Your father has aged ten years. I've aged twenty.`),
...IF('irisCaught',[D('mother','n',`Iris est à Newgate. {lv} l'a ramenée sur la berge par le bras, trempé{a:|e} comme un chien. Tout Londres ne parle que de ça.`,`Iris is in Newgate. {lv} dragged her back to the bank by the arm, soaked like a dog. All London is talking of nothing else.`)],
 [D('mother','n',`Iris a été arrêtée à Douvres, au moment d'embarquer pour Calais. Grâce au nom du passeur noté par le constable. Elle est à Newgate.`,`Iris was arrested at Dover, just as she was boarding for Calais. Thanks to the ferryman's name the constable noted down. She's in Newgate.`)]),
D('mother','s',`Et Cordelia… personne ne l'a retrouvée.`,`And Cordelia… no one has found her.`),
C('c21a',0,[
 {t:[`« Merci d'être restée, Mère. »`,`"Thank you for staying, Mother."`],fx:{rep:1},r:[D('mother','h',`Où voudrais-tu que je sois ? C'est ma place. Depuis dix-huit ans.`,`Where else would I be? This is my place. It has been for eighteen years.`)]},
 {t:[`« Et {lv} ? »`,`"And {lv}?"`],fx:{lv:1},r:[D('mother','h',`{a:Il|Elle} a dormi dans le fauteuil du couloir. Deux nuits. Bess lui a apporté des couvertures. Ton père fait semblant de ne pas l'avoir remarqué.`,`{a:He|She} slept in the armchair in the hallway. Two nights. Bess brought {a:him|her} blankets. Your father is pretending not to have noticed.`)]}
]),

{bg:'court',mus:'mystery',card:['Westminster Hall','Westminster Hall'],sub:['Le verdict','The Verdict'],where:['La salle d\'audience','The courtroom']},
{st:['father','mc']},
N(`Quinze jours après la première audience, la salle est encore plus bondée. La Reine elle-même a envoyé un représentant. Dans la galerie : la Duchesse, les Pembroke, Georgie au bras de Lord Fairfax, et même les jumeaux.`,`A fortnight after the first hearing, the room is even more crowded. The Queen herself has sent a representative. In the gallery: the Duchess, the Pembrokes, Georgie on Lord Fairfax's arm, and even the twins.`),
D('judge','n',`Reprise de l'affaire Valcourt. Maître Dorval, vous aviez quinze jours pour produire une preuve matérielle.`,`The Valcourt case resumes. Mr Dorval, you had a fortnight to produce material proof.`),
D('dorval','n',`Milord, nous avons mieux qu'une preuve. Nous avons un aveu.`,`My lord, we have better than proof. We have a confession.`),
{st:['lordp','mc']},
D('lordp','n',`J'ai entendu Iris de Valcourt avouer de sa propre bouche qu'elle avait empoisonné sa sœur. Deux constables de Bow Street l'ont entendue aussi. Ils sont ici, prêts à jurer.`,`I heard Iris de Valcourt confess with her own lips that she had poisoned her sister. Two Bow Street constables heard her too. They're here, ready to swear to it.`),
...IF('irisConfessed',[D('mc','a',`Et à moi, dans cette cave, elle a dit : « J'ai envoyé ce flacon. Et je recommencerais. »`,`And to me, in that cellar, she said: "I sent that vial. And I'd do it again."`)]),
...IF('signed',[D('dorval','n',`Quant à la renonciation que Madame de Valcourt a fait signer à mon client, sous la menace de la noyade… je laisse la Cour juger de sa valeur.`,`As for the renunciation Madame de Valcourt forced my client to sign under threat of drowning… I leave it to the Court to judge its worth.`),D('judge','a',`Nulle et non avenue. Évidemment.`,`Null and void. Obviously.`)]),
...IF('appealCordelia',[
 N(`Un huissier s'approche du juge et lui remet un petit paquet, arrivé le matin même sans expéditeur. Le juge l'ouvre. Un flacon de verre bleu, encore bouché. Et un billet.`,`A clerk approaches the judge and hands him a small parcel, which arrived that morning with no sender. The judge opens it. A blue glass vial, still stoppered. And a note.`),
 D('judge','n',`« Ceci est le flacon envoyé par Iris de Valcourt à sa sœur, le 13 janvier 1795. Je l'ai gardé quinze ans sans savoir pourquoi. Maintenant, je sais. Pour ma tante. — C. »`,`"This is the vial sent by Iris de Valcourt to her sister on 13 January 1795. I kept it for fifteen years without knowing why. Now I know. For my aunt. — C."`),
 N(`Dans la galerie, Clem porte une main à sa bouche. Elle pleure et elle sourit en même temps.`,`In the gallery, Clem raises a hand to her mouth. She's crying and smiling at the same time.`),
 {set:'vialReturned'}
]),
D('judge','n',`La Cour a entendu assez. L'acte de décès produit par Madame de Valcourt est un faux. La Cour reconnaît {first} {last} comme l'enfant légitime héritier d'Isadora de Valcourt, et lui attribue l'intégralité de la succession Valcourt.`,`The Court has heard enough. The death certificate produced by Madame de Valcourt is a forgery. The Court recognises {first} {last} as the rightful heir of Isadora de Valcourt, and awards them the entire Valcourt estate.`),
D('judge','a',`Quant à Madame de Valcourt, elle sera jugée à l'Old Bailey pour le meurtre de sa sœur. Affaire close !`,`As for Madame de Valcourt, she will stand trial at the Old Bailey for the murder of her sister. Case closed!`),
N(`Le marteau tombe. La salle explose en applaudissements. Ta mère pleure. Ton père pleure. Madame Roux pleure. Même Maître Dorval se détourne pour s'essuyer discrètement le coin de l'œil.`,`The gavel falls. The room erupts in applause. Your mother weeps. Your father weeps. Madame Roux weeps. Even Mr Dorval turns away to discreetly wipe the corner of his eye.`),
{st:['lv','mc']},
N(`Et {lv} traverse la salle, enjambe la barrière des avocats sous le regard horrifié de l'huissier, et te soulève dans ses bras devant toute la Cour.`,`And {lv} crosses the room, vaults the lawyers' rail under the horrified gaze of the clerk, and sweeps you up in {a:his|her} arms in front of the whole Court.`),
D('lv','h',`Héritier{g:|e|·e} Valcourt. Tu vas devenir insupportable.`,`Heir to the Valcourt fortune. You're going to be insufferable.`),
D('mc','h',`Je l'étais déjà.`,`I already was.`),

{bg:'salon',mus:'calm',card:['Le soir','Evening'],sub:['',''],where:['Le salon de Grosvenor Street','The Grosvenor Street drawing room']},
{st:['father','mother']},
N(`Le soir, Maître Dorval étale sur la table les comptes de la succession. Des chiffres qui donnent le vertige. Des terres, des maisons, des rentes.`,`In the evening, Mr Dorval spreads the estate accounts on the table. Dizzying figures. Lands, houses, annuities.`),
D('father','s',`C'est ta fortune, {first}. Pas la nôtre. Tu en feras ce que tu voudras.`,`It's your fortune, {first}. Not ours. Do with it as you will.`),
C('m41',1,[
 {t:[`Fonder une école de musique au nom d'Isadora.`,`Found a music school in Isadora's name.`],set:'musicSchool',fx:{rep:2},r:[
  D('mc','h',`L'hôtel de la rue de Varenne deviendra une école de chant. Gratuite, pour les enfants qui n'ont rien. L'École Isadora.`,`The house on the Rue de Varenne will become a singing school. Free, for children who have nothing. The Isadora School.`),
  D('mother','s',`Elle aurait aimé ça. Plus que toutes les rentes du monde.`,`She would have loved that. More than all the annuities in the world.`),
  D('dorval','h',`Et je propose Madame Roux comme directrice. Elle saura tenir les enfants. Et les professeurs.`,`And I propose Madame Roux as headmistress. She'll know how to handle the children. And the teachers.`)
 ]},
 {t:[`Rendre à ta famille ce qu'elle a perdu, et rembourser chacun.`,`Give your family back what it lost, and repay everyone.`],set:'familyFirst',fx:{rep:1},r:[
  D('mc','n',`On rachète la maison de Paris, les tableaux saisis, et on rembourse Lord Pembroke jusqu'au dernier penny. Et Madame Roux aura une rente jusqu'à la fin de ses jours.`,`We buy back the Paris house and the seized paintings, and repay Lord Pembroke to the last penny. And Madame Roux will have an annuity for the rest of her days.`),
  D('father','s',`Tu as plus d'honneur que moi, {first}. Je l'ai toujours su.`,`You have more honour than I do, {first}. I always knew it.`)
 ]}
]),
{st:['bess','mc']},
D('bess','h',`Il y a une lettre pour vous, {title}. De Newgate. De… d'elle.`,`There's a letter for you, {title}. From Newgate. From… her.`),
N(`Quelques lignes, d'une écriture raide : « Viens me voir avant mon procès. J'ai une dernière chose à te dire. Sur Cordelia. Sur son père. — I. »`,`A few stiff lines: "Come and see me before my trial. I have one last thing to tell you. About Cordelia. About her father. — I."`),
C('m42',1,[
 {t:[`Aller à Newgate. Tu veux tout savoir.`,`Go to Newgate. You want to know everything.`],set:'visitIris',r:[
  {bg:'cellar',mus:'mystery',where:['Newgate','Newgate']},
  {st:['iris','mc']},
  N(`Newgate. Une cellule humide, une grille rouillée. Iris est assise sur un banc, toujours droite, toujours en noir. Elle n'a rien perdu de sa superbe.`,`Newgate. A damp cell, a rusted grille. Iris sits on a bench, still upright, still in black. She has lost none of her haughtiness.`),
  D('iris','h',`Tu es venu{g:|e|·e}. Tu as la curiosité d'Isadora. C'est ce qui la perdait toujours.`,`You came. You have Isadora's curiosity. It was always her undoing.`),
  D('iris','n',`Le père de Cordelia n'est pas mort, comme je le lui ai fait croire. Il est vivant. Il est riche. Il est anglais. Et il est beaucoup plus près de toi que tu ne le crois.`,`Cordelia's father isn't dead, as I let her believe. He's alive. He's rich. He's English. And he's much closer to you than you think.`),
  D('mc','o',`Qui ?`,`Who?`),
  D('iris','h',`Ça, mon enfant, c'est mon dernier atout. Et je ne joue jamais mon dernier atout gratuitement.`,`That, my child, is my last trump card. And I never play my last trump for free.`),
  N(`Elle se lève et tourne le dos. L'entretien est terminé.`,`She rises and turns her back. The interview is over.`)
 ]},
 {t:[`Brûler la lettre. Iris ne te manipulera plus jamais.`,`Burn the letter. Iris will never manipulate you again.`],set:'burnLetter',fx:{rep:1},r:[
  N(`Tu jettes la lettre dans la cheminée. Le papier se tord, noircit, disparaît. Exactement comme l'acte de baptême qu'Iris a brûlé.`,`You throw the letter into the fireplace. The paper curls, blackens, vanishes. Exactly like the baptism record Iris burned.`),
  D('mc','a',`(Tu n'auras plus rien de moi, Iris. Plus jamais.)`,`(You'll get nothing more from me, Iris. Ever again.)`),
  D('bess','s',`Bien fait. Ma grand-mère disait : on ne joue pas aux cartes avec le diable. Même quand il perd.`,`Good. My grandmother used to say: don't play cards with the devil. Even when he's losing.`)
 ]}
]),
{st:['lv','mc']},
N(`Tard dans la nuit, {lv} frappe à ta fenêtre. Sous son bras, un paquet soigneusement enveloppé.`,`Late at night, {lv} taps on your window. Under {a:his|her} arm, a carefully wrapped parcel.`),
D('lv','h',`Le bal de fin de saison de la Reine, c'est dans trois jours. Et j'ai quelque chose de très important à te demander, ce soir-là.`,`The Queen's end-of-season ball is in three days. And I have something very important to ask you that evening.`),
D('mc','o',`Quoi ?`,`What?`),
D('lv','h',`Si je te le disais maintenant, ce ne serait plus une surprise. Dors bien.`,`If I told you now, it wouldn't be a surprise. Sleep well.`),
{end:21}
);
