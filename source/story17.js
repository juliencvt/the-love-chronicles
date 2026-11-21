/* ===== CHAPITRE 17 — L'audience ===== */
STORY.push(
{bg:'street',mus:'mystery',chap:17,card:['Chapitre 17','Chapter 17'],sub:['L\'audience','The Hearing'],where:['Devant Westminster Hall','Outside Westminster Hall']},
{st:['mother','father']},
N(`Le matin de l'audience, une foule se presse devant Westminster Hall. Des curieux, des journalistes, des dames avec des longues-vues. Ton procès est le spectacle de la Saison.`,`On the morning of the hearing, a crowd presses outside Westminster Hall. Onlookers, journalists, ladies with opera glasses. Your case is the show of the Season.`),
D('mother','s',`Quoi qu'il se passe là-dedans, tu rentres à la maison avec nous ce soir. C'est tout ce qui compte.`,`Whatever happens in there, you're coming home with us tonight. That's all that matters.`),
D('father','a',`Théo n'est toujours pas revenu de Paris. S'il n'arrive pas avec Madame Roux…`,`Theo still isn't back from Paris. If he doesn't arrive with Madame Roux…`),
D('mc','s',`Il viendra. Il a promis.`,`He'll come. He promised.`),
{st:['clem','cordelia']},
N(`Clem et Cordelia arrivent ensemble, bras dessus bras dessous, comme toujours. Clem évite le regard de Cordelia. Cordelia, elle, rayonne.`,`Clem and Cordelia arrive together, arm in arm, as always. Clem avoids Cordelia's eyes. Cordelia, for her part, is radiant.`),
D('cordelia','h',`Courage ! Je suis sûre que tout ira bien. Je prierai pour toi depuis la galerie.`,`Courage! I'm sure everything will be fine. I'll pray for you from the gallery.`),
C('c17a',0,[
 {t:[`« Merci, Cordelia. » Avec un sourire aussi parfait que le sien.`,`"Thank you, Cordelia." With a smile as perfect as hers.`],set:'playAlong',r:[N(`Vos deux sourires se croisent comme deux lames. Elle ne cille pas. Toi non plus.`,`Your two smiles cross like two blades. She doesn't blink. Neither do you.`)]},
 {t:[`La regarder dans les yeux, sans rien dire.`,`Look her in the eye, without a word.`],r:[N(`Le sourire de Cordelia vacille. Une demi-seconde. Puis elle détourne la tête et entraîne Clem vers la galerie.`,`Cordelia's smile wavers. For half a second. Then she turns her head away and pulls Clem towards the gallery.`)]}
]),

{bg:'court',mus:'mystery',card:['Cour de la Chancellerie','Court of Chancery'],sub:['Westminster Hall','Westminster Hall'],where:['La salle d\'audience','The courtroom']},
{st:['judge','iris']},
N(`La salle d'audience est sombre et étouffante. Le juge, perruque poudrée, a l'air de s'ennuyer avant même d'avoir commencé. Iris est assise au premier rang, en velours noir, entourée de trois avocats.`,`The courtroom is dark and stifling. The judge, in a powdered wig, looks bored before he's even begun. Iris sits in the front row, in black velvet, surrounded by three lawyers.`),
D('judge','n',`Affaire Valcourt contre {last}. Madame de Valcourt affirme que l'enfant de sa sœur est mort-né. Maître Dorval, qu'avez-vous à opposer ?`,`Valcourt versus {last}. Madame de Valcourt asserts that her sister's child was stillborn. Mr Dorval, what do you have to set against this?`),
D('dorval','n',`Le témoignage du Comte {last}, père de l'enfant. Et celui de la sage-femme, Madame Roux, qui…`,`The testimony of Count {last}, the child's father. And that of the midwife, Madame Roux, who…`),
D('iris','h',`Qui n'est pas là, apparemment. Quel dommage.`,`Who isn't here, apparently. What a pity.`),
N(`L'avocat d'Iris se lève, un document à la main.`,`Iris's lawyer rises, a document in hand.`),
D('judge','n',`Maître, votre pièce ?`,`Counsel, your exhibit?`),
N(`« Un acte de décès, Milord. Signé à Paris, le 14 janvier 1795. Enfant de sexe… inconnu, né d'Isadora de Valcourt, mort à la naissance. »`,`"A death certificate, my lord. Signed in Paris, 14 January 1795. Child of unknown sex, born to Isadora de Valcourt, died at birth."`),
D('father','a',`C'est un faux !`,`It's a forgery!`),
...IF('trapMole',[
 N(`L'avocat sourit et ajoute, d'un ton négligent : « Nous savons aussi que la partie adverse prétend détenir une copie de l'acte de baptême, cachée à Vauxhall. Une invention, évidemment. »`,`The lawyer smiles and adds, casually: "We also know the opposing party claims to hold a copy of the baptism record, hidden at Vauxhall. A fabrication, of course."`),
 D('mc','s',`(Vauxhall. Je n'ai parlé de Vauxhall qu'à une seule personne au monde.)`,`(Vauxhall. I only mentioned Vauxhall to one person in the whole world.)`),
 N(`Tu lèves les yeux vers la galerie. Cordelia regarde ses gants. Clem, à côté d'elle, a compris aussi. Elle est blanche comme un linge.`,`You look up at the gallery. Cordelia is studying her gloves. Clem, beside her, has understood too. She's white as a sheet.`),
 {set:'moleConfirmed'}
]),
D('judge','n',`Sans le témoin annoncé, Maître Dorval, je crains que…`,`Without the promised witness, Mr Dorval, I fear that…`),
N(`Les portes du fond s'ouvrent à la volée. Théo entre, couvert de boue de voyage, soutenant une vieille dame au châle brun qui avance à petits pas.`,`The doors at the back fly open. Theo enters, covered in travel mud, supporting an old lady in a brown shawl who advances with small steps.`),
{st:['theo','mc']},
D('theo','h',`Pardon pour le retard, Milord. La Manche était de mauvaise humeur.`,`Apologies for the delay, my lord. The Channel was in a foul mood.`),
D('roux','a',`Je suis Madame Roux. J'ai mis cet enfant au monde. Je l'ai tenu{g:|e|·e} dans mes mains. Il criait comme un petit diable et il était bien vivant !`,`I am Madame Roux. I brought that child into the world. I held them in my hands. They screamed like a little devil and were very much alive!`),
N(`Un murmure parcourt la salle. Iris ne bouge pas, mais sa main gantée se crispe sur le pommeau de sa canne.`,`A murmur runs through the room. Iris doesn't move, but her gloved hand tightens on the knob of her cane.`),
D('roux','a',`Et Isadora n'est pas morte de ses couches. Elle est morte d'un remède envoyé par sa sœur. Par elle !`,`And Isadora didn't die of childbirth. She died of a remedy sent by her sister. By her!`),
D('iris','a',`Les divagations d'une vieille folle. Elle n'a aucune preuve. Aucune.`,`The ravings of a senile old woman. She has no proof. None.`),
D('judge','n',`Madame Roux, avez-vous une preuve matérielle de ce que vous avancez ?`,`Madame Roux, do you have any material proof of what you allege?`),
D('roux','s',`Il y avait un flacon… Je l'avais confié à l'enfant…`,`There was a vial… I had entrusted it to the child…`),
N(`Le silence retombe. Tous les regards se tournent vers toi.`,`Silence falls again. All eyes turn to you.`),
C('m33',1,[
 {t:[`Te lever et accuser Iris de meurtre, devant toute la Cour.`,`Stand up and accuse Iris of murder, before the whole Court.`],set:'accuseIris',fx:{rep:1},r:[
  D('mc','a',`Le flacon m'a été volé, Milord. Par quelqu'un qui travaille pour Madame de Valcourt. Mais il existe. Et je jure devant cette Cour qu'Iris de Valcourt a empoisonné ma mère.`,`The vial was stolen from me, my lord. By someone working for Madame de Valcourt. But it exists. And I swear before this Court that Iris de Valcourt poisoned my mother.`),
  N(`La salle explose. Le juge frappe son marteau trois fois. Iris se lève lentement et te fixe, avec une haine si pure qu'elle en est presque belle.`,`The room erupts. The judge bangs his gavel three times. Iris rises slowly and stares at you with a hatred so pure it's almost beautiful.`),
  D('iris','a',`Tu viens de signer ta perte, mon enfant.`,`You have just signed your own ruin, my child.`)
 ]},
 {t:[`Rester calme et t'en tenir à la question de l'héritage.`,`Stay calm and stick to the question of the inheritance.`],set:'focusHeir',r:[
  D('mc','n',`Le flacon m'a été volé, Milord. Mais Madame Roux m'a reconnu{g:|e|·e}. Mon père aussi. Je demande à la Cour le temps de retrouver ce qui m'a été pris.`,`The vial was stolen from me, my lord. But Madame Roux recognised me. So did my father. I ask the Court for time to recover what was taken from me.`),
  D('dorval','h',`Bien joué. Ne lui donnez jamais la bagarre qu'elle cherche.`,`Well played. Never give her the fight she's looking for.`)
 ]}
]),
D('judge','n',`La Cour suspend l'audience pour quinze jours. Si une preuve matérielle n'est pas produite d'ici là, je trancherai sur la base de l'acte de décès. Affaire suivante !`,`The Court adjourns for a fortnight. If no material proof is produced by then, I shall rule on the basis of the death certificate. Next case!`),

{bg:'street',mus:'mystery',where:['Devant Westminster Hall','Outside Westminster Hall']},
{st:['clem','theo']},
N(`Dehors, Clem t'attend sur les marches, seule. Cordelia a disparu.`,`Outside, Clem waits for you on the steps, alone. Cordelia has vanished.`),
...IF('moleConfirmed',[D('clem','s',`Vauxhall. Tu ne l'as dit qu'à elle, c'est ça ? … Ne réponds pas. J'ai vu ta tête. J'ai vu la sienne.`,`Vauxhall. You only told her, didn't you? … Don't answer. I saw your face. I saw hers.`),D('clem','a',`Je veux l'entendre de sa bouche. Je veux qu'elle me le dise en face.`,`I want to hear it from her. I want her to say it to my face.`)],
 [D('clem','s',`Cordelia est partie dès que Madame Roux a parlé du flacon. Sans un mot. Elle ne part jamais sans un mot.`,`Cordelia left the moment Madame Roux mentioned the vial. Without a word. She never leaves without a word.`)]),
D('theo','n',`Dans quinze jours, c'est le grand bal masqué de Vauxhall. Tout Londres y sera. Iris aussi, sûrement. Et Cordelia.`,`In a fortnight, it's the great masked ball at Vauxhall. All London will be there. Iris too, surely. And Cordelia.`),
D('theo','s',`Si quelqu'un a le flacon, c'est là qu'on le trouvera.`,`If anyone has the vial, that's where we'll find it.`),

...IF('danceLi1',[
 {bg:'garden',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['La roseraie d\'Ashbury House','The Ashbury House rose garden']},
 {st:['lv','mc']},
 N(`Le soir, {li1} t'attend dans la roseraie d'Ashbury House. La Duchesse, pour une fois, a fermé les yeux et laissé la grille ouverte.`,`In the evening, {li1} waits for you in the Ashbury House rose garden. The Duchess, for once, has turned a blind eye and left the gate open.`)
],[
 {bg:'shop',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['L\'atelier de Madame Fleury','Madame Fleury\'s workshop']},
 {st:['lv','mc']},
 N(`Le soir, {li2} t'attend dans l'atelier désert de Fleury. Sur la table de coupe, une couverture, deux tasses de chocolat chaud et une seule bougie.`,`In the evening, {li2} waits for you in Fleury's deserted workshop. On the cutting table, a blanket, two cups of hot chocolate and a single candle.`)
]),
D('lv','s',`J'étais dans la galerie. Quand Iris t'a regardé{g:|e|·e}… quand elle a dit « ta perte »… J'ai eu envie de descendre et de…`,`I was in the gallery. When Iris looked at you… when she said "your ruin"… I wanted to go down there and…`),
N(`{lv} s'interrompt. Pour la première fois, {a:il|elle} t'a tutoyé{g:|e|·e}. Vous le remarquez en même temps.`,`{lv} breaks off. For the first time, {a:he|she} has dropped the formal "vous" with you. You both notice at the same moment.`),
D('lv','o',`Pardon. Je… vous…`,`Sorry. I… you…`),
C('m34',1,[
 {t:[`« Non. Continue. Tutoie-moi. Toujours. »`,`"No. Go on. Talk to me like that. Always."`],set:'tutoiement',fx:{lv:3},r:[D('lv','h',`Toujours, alors. Tu sais ce que ça veut dire, « toujours » ?`,`Always, then. Do you know what "always" means?`),D('mc','h',`Explique-moi.`,`Explain it to me.`),N(`{lv} t'explique. Sans un seul mot.`,`{lv} explains. Without a single word.`)]},
 {t:[`Sourire et poser un doigt sur ses lèvres.`,`Smile and lay a finger on {a:his|her} lips.`],set:'fingerLips',fx:{lv:2},r:[N(`Tu poses un doigt sur ses lèvres. Puis tu le remplaces par les tiennes.`,`You lay a finger on {a:his|her} lips. Then you replace it with your own.`),D('lv','h',`J'aime beaucoup cette façon de clore un débat. Je le prends pour un oui. Je te tutoie, maintenant.`,`I very much like this way of ending a debate. I'll take it as a yes. No more formalities between us.`)]}
]),
D('lv','n',`À Vauxhall, il y aura des masques. Tout le monde sera caché. C'est l'endroit idéal pour un piège… ou pour un enlèvement. Promets-moi de ne jamais t'éloigner de moi.`,`At Vauxhall there'll be masks. Everyone will be hidden. It's the perfect place for a trap… or for an abduction. Promise me you'll never stray from my side.`),
D('mc','h',`Promis.`,`I promise.`),
{end:17}
);
