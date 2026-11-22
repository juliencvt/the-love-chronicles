/* ===== CHAPITRE 10 — Le bal des Pembroke ===== */
STORY.push(
{bg:'bedroom',mus:'calm',chap:10,card:['Chapitre 10','Chapter 10'],sub:['Le bal des Pembroke','The Pembroke Ball'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Le soir du bal, deux boîtes enrubannées attendent sur ton lit. Bess tourne autour comme un chat autour d'un pot de crème.`,`On the night of the ball, two beribboned boxes await on your bed. Bess circles them like a cat around a pot of cream.`),
...IF('danceLi1',[D('bess','h',`Madame Fleury les a livrées ce matin. Votre mère a payé l'une, et la Duchesse… l'autre. Elle a dit que c'était « un prêt ». Ha !`,`Madame Fleury delivered them this morning. Your mother paid for one, and the Duchess… the other. She said it was "a loan". Ha!`)],
 [D('bess','h',`Livrées de l'atelier Fleury. Il y a un mot : « Je n'arrivais pas à choisir. Choisissez pour moi. » Pas de signature. Pas besoin.`,`Delivered from Fleury's workshop. There's a note: "I couldn't choose. Choose for me." No signature. No need.`)]),
N(`Dans la première boîte, {t:un habit|une robe} de soie bleu nuit, brodé{t:|e} de fils d'argent comme un ciel d'hiver. Dans la seconde, {t:un habit|une robe} de soie vert émeraude, brodé{t:|e} d'or, audacieu{t:x|se}, qui ne laissera personne indifférent.`,`In the first box, {t:a coat|a gown} of midnight-blue silk, embroidered with silver thread like a winter sky. In the second, a bold emerald-green silk {t:coat|gown} embroidered with gold, which will leave no one indifferent.`),
C('o10',0,[
 {t:[`👗 {t:L'habit|La robe} bleu nuit et argent. Élégance et mystère.`,`👗 The midnight-blue and silver. Elegance and mystery.`],set:'o10a',fx:{rep:1},r:[D('bess','h',`Vous ressemblez à une nuit d'étoiles. Ils vont tous se taire en vous voyant entrer.`,`You look like a starry night. They'll all fall silent when you walk in.`)]},
 {t:[`👗 {t:L'habit|La robe} vert émeraude et or. Qu'ils me regardent, puisqu'ils parlent de moi.`,`👗 The emerald and gold. Let them look, since they're talking about me.`],set:'o10b',fx:{lv:1},r:[D('bess','o',`Seigneur ! Lady Pembroke va s'étouffer avec son punch. J'adore.`,`Lord! Lady Pembroke will choke on her punch. I love it.`)]}
]),

{bg:'ball',mus:'ball',card:['Pembroke House','Pembroke House'],sub:['Le bal','The Ball'],where:['La salle de bal des Pembroke','The Pembroke ballroom']},
{st:['ladyp','lordp']},
N(`Pembroke House brille de mille bougies. Lady Pembroke reçoit en haut de l'escalier, un sourire de porcelaine sur les lèvres.`,`Pembroke House glitters with a thousand candles. Lady Pembroke receives at the top of the stairs, a porcelain smile on her lips.`),
...IF('o10b',[D('ladyp','a',`Du vert émeraude. Évidemment. Il fallait bien que vous vous fassiez remarquer.`,`Emerald green. Of course. You simply had to be noticed.`),D('lordp','h',`Superbe ! Enfin quelqu'un qui réveille cette maison.`,`Superb! At last someone to wake this house up.`)],
 [D('ladyp','n',`Hm. Bleu nuit. Au moins, vous avez du goût. C'est déjà ça.`,`Hm. Midnight blue. At least you have taste. That's something.`),D('lordp','h',`Ravissant{t:|e} ! Ma femme vous adore, elle ne sait juste pas le montrer.`,`Lovely! My wife adores you, she just doesn't know how to show it.`)]),
D('lordp','s',`Venez me voir dans mon bureau, plus tard. J'ai une proposition à vous faire. Une affaire de… transport.`,`Come and see me in my study later. I have a proposal for you. A matter of… transport.`),
{st:['clem','georgie']},
D('clem','h',`Te voilà ! Georgie a déjà dansé avec Lord Fairfax. Deux fois. Elle ne s'en remet pas.`,`There you are! Georgie has already danced with Lord Fairfax. Twice. She hasn't recovered.`),
D('georgie','h',`Il m'a parlé de ses chevaux pendant vingt minutes. Vingt minutes ! Je crois que c'est de l'amour.`,`He talked about his horses for twenty minutes. Twenty minutes! I think it's love.`),
C('c10a',0,[
 {t:[`« Félicitations, Georgie ! Il a l'air charmant. »`,`"Congratulations, Georgie! He seems charming."`],r:[D('georgie','h',`Charmant, riche et pas encore chauve. Le parfait triangle.`,`Charming, rich and not yet bald. The perfect triangle.`)]},
 {t:[`« Vingt minutes sur des chevaux ? Fuis, Georgie. »`,`"Twenty minutes on horses? Run, Georgie."`],r:[D('clem','h',`C'est exactement ce que je lui ai dit !`,`That's exactly what I told her!`),D('georgie','a',`Vous êtes jalouses. Toutes les deux.`,`You're jealous. Both of you.`)]}
]),

{st:['cordelia','mc']},
N(`Cordelia t'attire à l'écart, derrière une colonne. Elle a l'air bouleversée, une enveloppe à la main.`,`Cordelia draws you aside, behind a pillar. She looks distraught, an envelope in her hand.`),
D('cordelia','s',`Je ne voulais pas te le dire ce soir. Mais tu es mon amie, et tu mérites de savoir.`,`I didn't want to tell you tonight. But you're my friend, and you deserve to know.`),
...IF('danceLi1',[
 D('cordelia','s',`La Duchesse et Lady Pembroke ont arrangé un mariage. Entre {li1} et… moi. C'est signé depuis le printemps. {a:Il|Elle} ne te l'a pas dit ?`,`The Duchess and Lady Pembroke have arranged a marriage. Between {li1} and… me. It's been signed since spring. {a:He|She} didn't tell you?`),
 N(`Elle te tend une lettre, sur papier aux armes des Ashbury. Un contrat. Les signatures ont l'air vraies.`,`She hands you a letter on Ashbury crested paper. A contract. The signatures look real.`)
],[
 D('cordelia','s',`{li2} a reçu de l'argent d'Iris de Valcourt. Beaucoup d'argent. Je l'ai vu de mes yeux, chez Fleury. Pour se rapprocher de toi.`,`{li2} has taken money from Iris de Valcourt. A lot of money. I saw it with my own eyes, at Fleury's. To get close to you.`),
 N(`Elle te tend un reçu, signé d'un « I. de V. » que tu reconnais. Et en dessous, le nom de {li2}.`,`She hands you a receipt, signed with an "I. de V." you recognise. And below it, {li2}'s name.`)
]),
D('cordelia','s',`Je suis désolée. Je préférais que tu l'apprennes par moi.`,`I'm so sorry. I'd rather you heard it from me.`),
N(`Elle te serre la main, les yeux humides. Puis elle s'éloigne dans un froissement de soie violette.`,`She squeezes your hand, eyes moist. Then she drifts away in a rustle of violet silk.`),

...IF('danceLi1',[
 {st:['lv','mc']},
 N(`{li1} te trouve quelques minutes plus tard, deux coupes de champagne à la main et un sourire qui s'éteint en voyant ton visage.`,`{li1} finds you a few minutes later, two glasses of champagne in hand, and a smile that fades at the sight of your face.`)
],[
 {st:['lv','mc']},
 N(`{li2} est là, en livrée de serveur, louée par le traiteur. En voyant ton visage, {a:il|elle} pose son plateau sur une console.`,`{li2} is there, in a server's livery, hired by the caterer. Seeing your face, {a:he|she} sets {a:his|her} tray down on a side table.`)
]),
D('lv','s',`Qu'est-ce qui se passe ? Vous êtes pâle comme un linge.`,`What's happening? You're white as a sheet.`),
C('m19',1,[
 {t:[`Lui montrer le papier et lui demander la vérité.`,`Show {a:him|her} the paper and ask for the truth.`],set:'trustLv',fx:{lv:2},r:[
  D('mc','n',`Cordelia m'a donné ça. Dites-moi que c'est faux. Je vous croirai.`,`Cordelia gave me this. Tell me it's false. I'll believe you.`),
  N(`{lv} lit. Son visage passe du rouge au blanc.`,`{lv} reads. {a:His|Her} face goes from red to white.`),
  ...IF('danceLi1',[D('lv','a',`Ce contrat est un faux. Ma mère n'a jamais signé « Augusta A. ». Elle signe « Ashbury », d'un trait, comme un coup d'épée.`,`This contract is a forgery. My mother has never signed "Augusta A.". She signs "Ashbury", in one stroke, like a sword thrust.`)],
   [D('lv','a',`Ce n'est pas mon écriture. Regardez : je fais mes « M » comme Marguerite me l'a appris, avec une boucle. Celui-ci n'en a pas.`,`That isn't my handwriting. Look: I make my capitals the way Marguerite taught me, with a loop. This one has none.`)]),
  D('lv','s',`Quelqu'un veut nous séparer. Et je n'aime pas du tout ce que ça veut dire.`,`Someone wants to drive us apart. And I don't like what that means at all.`),
  D('mc','h',`Alors ne les laissons pas faire.`,`Then let's not let them.`),
  N(`{lv} te prend la main et t'entraîne dans la serre des Pembroke, à l'abri des regards. Entre les orangers, sous les vitres embuées, {a:il|elle} t'embrasse comme pour effacer le doute.`,`{lv} takes your hand and leads you into the Pembroke conservatory, away from prying eyes. Among the orange trees, under the misted glass, {a:he|she} kisses you as if to erase the doubt.`),
  {cg:'pembroke'}
 ]},
 {t:[`Te taire et prendre tes distances.`,`Say nothing and keep your distance.`],set:'doubtLv',fx:{lv:-1},r:[
  D('mc','s',`Ce n'est rien. Un peu de fatigue. Excusez-moi.`,`It's nothing. A little tired. Excuse me.`),
  N(`Tu t'éloignes sans te retourner. Tu sens son regard dans ton dos, perplexe, puis blessé.`,`You walk away without turning back. You feel {a:his|her} gaze on your back, puzzled, then hurt.`),
  D('mc','s',`(Et si Cordelia avait raison ? Je ne sais plus qui croire.)`,`(What if Cordelia is right? I don't know who to believe any more.)`)
 ]}
]),

{bg:'salon',mus:'mystery',where:['Le bureau de Lord Pembroke','Lord Pembroke\'s study']},
{st:['lordp','mc']},
N(`Plus tard, Lord Pembroke t'attend dans son bureau, un cigare éteint entre les doigts.`,`Later, Lord Pembroke waits for you in his study, an unlit cigar between his fingers.`),
D('lordp','n',`On murmure que vous comptez aller à Paris. Ne niez pas, à Londres, les murs ont des oreilles et ma femme a les meilleures.`,`It's whispered that you mean to go to Paris. Don't deny it; in London the walls have ears, and my wife has the best ones.`),
D('lordp','h',`J'ai un brick qui part pour Calais vendredi. Discret, rapide. Il est à vous, avec vos amis. Mes enfants insistent pour venir, de toute façon.`,`I have a brig sailing for Calais on Friday. Discreet, fast. It's yours, along with your friends. My children insist on coming, in any case.`),
D('mc','o',`Pourquoi faites-vous tout ça pour moi ?`,`Why are you doing all this for me?`),
D('lordp','s',`Disons que j'ai une dette envers quelqu'un que vous n'avez jamais connu{g:|e|·e}. Je vous raconterai. Un jour.`,`Let's say I owe a debt to someone you never knew. I'll tell you. Someday.`),
C('m20',1,[
 {t:[`Accepter son navire.`,`Accept his ship.`],set:'pembrokeShip',r:[D('lordp','h',`Parfait. Vendredi, à l'aube, quai de Wapping. Ne soyez pas en retard, le capitaine est écossais.`,`Perfect. Friday, at dawn, Wapping quay. Don't be late, the captain is Scottish.`)]},
 {t:[`Refuser poliment. Tu te méfies des faveurs.`,`Politely refuse. You're wary of favours.`],set:'ownShip',r:[D('lordp','h',`Prudent{g:|e|·e}. J'aime ça. L'offre reste ouverte, si vous changez d'avis.`,`Prudent. I like that. The offer stands, if you change your mind.`),N(`Tu changes d'avis dès le lendemain : tous les paquebots pour Calais sont mystérieusement complets jusqu'au mois prochain.`,`You change your mind the very next day: every packet boat to Calais is mysteriously full until next month.`),{set:'pembrokeShip'}]}
]),
N(`En sortant du bureau, tu croises Cordelia dans le couloir. Elle t'attendait, visiblement.`,`Leaving the study, you run into Cordelia in the corridor. She was clearly waiting for you.`),
D('cordelia','h',`Paris ? Oh, je viens aussi ! Je ne vous laisserai pas partir sans moi.`,`Paris? Oh, I'm coming too! I won't let you leave without me.`),
{end:10}
);
