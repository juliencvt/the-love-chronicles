/* ===== SAISON 2 — CHAPITRE 15 — À ton chevet ===== */
STORY.push(
{bg:'bedroom',mus:'tender',chap:37,card:['Saison 2 · Chapitre 15','Season 2 · Chapter 15'],sub:['À ton chevet','At Your Bedside'],where:['La chambre d\'Isadora','Isadora\'s bedroom']},
{st:['fi','mc']},
N(`La nuit est tombée. Une seule bougie brûle sur la table de chevet d'Isadora. Les autres sont partis : Gaspard a fermé la porte derrière lui avec un regard entendu.`,`Night has fallen. A single candle burns on Isadora's bedside table. The others have gone: Gaspard closed the door behind him with a knowing look.`),
N(`Sur la commode : une bassine d'eau chaude, des linges propres, une bouteille d'eau-de-vie, du fil et une aiguille. Gaspard t'a tout montré. Maintenant, c'est à toi.`,`On the chest of drawers: a basin of hot water, clean cloths, a bottle of brandy, thread and a needle. Gaspard has shown you everything. Now it's up to you.`),
D('fi','s',`Tu trembles.`,`You're shaking.`),
D('mc','o',`Pas du tout.`,`Not at all.`),
D('fi','h',`Tu trembles tellement que la bougie tremble avec toi.`,`You're shaking so much the candle is shaking with you.`),
N(`Il faut retirer le bandage de fortune. Puis {a:la chemise|le haut de la chemise}, raidie de sang séché. Tes doigts tremblent tellement que c'est {a:lui|elle} qui doit finir de défaire sa chemise, en riant tout bas. Lentement. Beaucoup trop lentement.`,`The makeshift bandage has to come off. Then the shirt, stiff with dried blood. Your fingers shake so much that {a:he|she} has to finish undoing {a:his|her} shirt {a:himself|herself}, laughing softly. Slowly. Far too slowly.`),
N(`{fi} ne dit plus rien. Tu sens son regard sur ton visage. Tu n'oses pas le lever.`,`{fi} says nothing more. You feel {a:his|her} gaze on your face. You don't dare raise your eyes.`),
D('mc','s',`(Concentre-toi. C'est une blessure. Juste une blessure. Arrête de penser à… à tout le reste.)`,`(Concentrate. It's a wound. Just a wound. Stop thinking about… about everything else.)`),
N(`Tu imbibes un linge d'eau-de-vie et tu le poses sur la plaie. {fi} serre les dents, s'agrippe aux draps. Sa main libre trouve ton poignet et le serre.`,`You soak a cloth in brandy and press it to the wound. {fi} clenches {a:his|her} teeth, grips the sheets. {a:His|Her} free hand finds your wrist and holds it tight.`),
D('fi','s',`Continue. Ne t'arrête pas. Parle-moi. N'importe quoi.`,`Keep going. Don't stop. Talk to me. Anything.`),
C('c37a',0,[
 {t:[`Lui raconter le jour où tu l'as vu{a:|e} pour la première fois.`,`Tell {a:him|her} about the day you first saw {a:him|her}.`],fx:{fi:1},r:[D('mc','s',`La première fois que je t'ai vu{a:|e}, j'ai pensé : « Voilà quelqu'un qui va me compliquer la vie. » J'avais raison. Je n'ai jamais été aussi content{g:|e|·e} d'avoir raison.`,`The first time I saw you, I thought: "There's someone who's going to complicate my life." I was right. I've never been so glad to be right.`),N(`{fi} rit, puis grimace. Puis rit encore.`,`{fi} laughs, then winces. Then laughs again.`)]},
 {t:[`Lui chanter la berceuse d'Isadora, tout bas.`,`Sing Isadora's lullaby to {a:him|her}, very softly.`],fx:{fi:2},r:[N(`Tu chantes tout bas, en recousant la plaie point par point. La berceuse de ta mère. {fi} ferme les yeux. Sa main se détend peu à peu sur ton poignet.`,`You sing very softly as you stitch the wound, stitch by stitch. Your mother's lullaby. {fi} closes {a:his|her} eyes. {a:His|Her} hand slowly relaxes on your wrist.`)]}
]),
N(`Le dernier point. Tu coupes le fil. Tu poses un bandage propre, tu le noues. C'est fini.`,`The last stitch. You cut the thread. You apply a clean bandage and tie it. It's done.`),
N(`Mais tu ne retires pas ta main. Elle reste posée là, sur son épaule, sur sa peau chaude. Et {fi} ne bouge pas.`,`But you don't take your hand away. It stays there, on {a:his|her} shoulder, on {a:his|her} warm skin. And {fi} doesn't move.`),
N(`Tu lèves enfin les yeux. {fi} te regarde. Pas comme d'habitude. Comme si {a:il|elle} n'avait plus du tout envie de plaisanter.`,`At last you raise your eyes. {fi} is looking at you. Not the usual way. As if {a:he|she} no longer had the slightest wish to joke.`),
D('fi','s',`{first}…`,`{first}…`),
N(`Ton prénom, dit comme ça, tout bas, te fait l'effet d'une caresse. La bougie crépite. Le silence est si épais que tu entends ton propre cœur.`,`Your name, said like that, so softly, feels like a caress. The candle crackles. The silence is so thick you can hear your own heart.`),
N(`{fi} lève sa main valide et repousse une mèche de ton front. Ses doigts glissent le long de ta joue. S'arrêtent sous ton menton.`,`{fi} lifts {a:his|her} good hand and brushes a strand of hair from your forehead. {a:His|Her} fingers slide down your cheek. Stop beneath your chin.`),
N(`Vos visages sont si proches que vos souffles se mélangent. Personne ne bouge. Personne n'ose.`,`Your faces are so close your breaths mingle. Nobody moves. Nobody dares.`),
N(`On frappe à la porte.`,`There's a knock at the door.`),
{st:['clem','mc']},
D('clem','h',`Je vous apporte du bouillon ! Et des draps propres ! Et… oh.`,`I've brought you broth! And clean sheets! And… oh.`),
N(`Clem s'arrête net sur le seuil. Elle regarde {fi}, à moitié dévêtu{a:|e}. Toi, écarlate. La bougie. Elle pose le bouillon par terre, devant la porte.`,`Clem stops dead in the doorway. She looks at {fi}, half undressed. You, scarlet. The candle. She sets the broth down on the floor by the door.`),
D('clem','h',`Je… je repasserai. Demain. Ou jamais. Bonne nuit !`,`I'll… I'll come back. Tomorrow. Or never. Good night!`),
N(`La porte claque. Vous éclatez de rire tous les deux, et ça fait mal à {fi}, et ça vous fait rire encore plus.`,`The door slams. You both burst out laughing, and it hurts {fi}, which makes you laugh even harder.`),
{st:['fi','mc']},
N(`Puis le rire s'éteint. Et la tension revient, plus forte qu'avant. Comme une corde tendue à se rompre.`,`Then the laughter fades. And the tension returns, stronger than before. Like a rope pulled to breaking point.`),
D('fi','s',`Où on en était ?`,`Where were we?`),
C('m73',1,[
 {t:[`Combler la distance. L'embrasser.`,`Close the distance. Kiss {a:him|her}.`],set:'kissBedside',fx:{fi:4},r:[
  N(`Tu te penches. Ce n'est pas un baiser doux, cette fois. C'est un baiser qui a attendu toute la journée, toute la peur de la crypte, tout le sang, toutes les heures où tu as cru {a:le|la} perdre.`,`You lean in. It isn't a gentle kiss this time. It's a kiss that has waited all day, through all the fear in the crypt, all the blood, all the hours you thought you'd lose {a:him|her}.`),
  N(`{fi} t'attire contre {a:lui|elle} avec son bras valide, oubliant sa blessure. Puis {a:il|elle} grimace, et tu ris contre ses lèvres, et {a:il|elle} t'embrasse encore pour te faire taire.`,`{fi} pulls you close with {a:his|her} good arm, forgetting the wound. Then {a:he|she} winces, and you laugh against {a:his|her} lips, and {a:he|she} kisses you again to shut you up.`),
  D('fi','s',`Je me ferais tirer dessus tous les jours, pour ça.`,`I'd get shot every day for this.`),
  D('mc','a',`Ne dis jamais ça. Jamais.`,`Don't ever say that. Never.`),
  {cg:'chevet'}
 ]},
 {t:[`Attendre. Laisser {fi} faire le dernier pas.`,`Wait. Let {fi} take the last step.`],set:'waitBedside',fx:{fi:3},r:[
  N(`Tu ne bouges pas. Tu attends. Une seconde. Deux. Une éternité.`,`You don't move. You wait. One second. Two. An eternity.`),
  N(`Puis {fi} se redresse, malgré la douleur, et pose ses lèvres sur les tiennes. Doucement, d'abord. Comme une question. Puis comme une réponse.`,`Then {fi} sits up, despite the pain, and presses {a:his|her} lips to yours. Gently at first. Like a question. Then like an answer.`),
  D('fi','s',`Ça valait le coup d'attendre.`,`It was worth the wait.`),
  {cg:'chevet'}
 ]}
]),
N(`Quand tu fais mine de te lever pour souffler la bougie, sa main valide retient la tienne.`,`When you make to get up and blow out the candle, {a:his|her} good hand holds yours back.`),
D('fi','s',`Reste. Pas dans le fauteuil. Ici.`,`Stay. Not in the armchair. Here.`),
C('m73b',1,[
 {t:[`Rester.`,`Stay.`],set:'nightBedside',fx:{fi:3},r:[
  N(`Tu t'allonges près de {a:lui|elle}, du côté de son bras valide. Le matelas craque. Vous retenez votre souffle tous les deux, comme deux enfants pris en faute.`,`You lie down beside {a:him|her}, on the side of {a:his|her} good arm. The mattress creaks. You both hold your breath, like two children caught misbehaving.`),
  N(`Ses doigts trouvent ta nuque. S'y attardent. Puis descendent le long de ton dos, si lentement que chaque centimètre devient un frisson.`,`{a:His|Her} fingers find the nape of your neck. Linger there. Then slide down your back, so slowly that every inch becomes a shiver.`),
  D('fi','s',`Dis-moi d'arrêter.`,`Tell me to stop.`),
  D('mc','s',`Jamais.`,`Never.`),
  N(`Tu embrasses son cou, juste sous l'oreille, là où son pouls s'emballe. Son souffle chaud se brise contre ta tempe. Le lacet de ton col cède sous ses doigts. Puis un autre.`,`You kiss {a:his|her} neck, just below the ear, where {a:his|her} pulse is racing. {a:His|Her} hot breath breaks against your temple. The lace at your collar gives way under {a:his|her} fingers. Then another.`),
  N(`Tu fais attention à sa blessure. {a:Il|Elle} n'y fait plus attention du tout. Ses lèvres suivent la ligne de ton épaule nue, et tu oublies le château, Iris, la crypte. Le monde entier.`,`You're careful of {a:his|her} wound. {a:He|She} isn't careful of it at all anymore. {a:His|Her} lips trace the line of your bare shoulder, and you forget the château, Iris, the crypt. The whole world.`),
  D('fi','s',`Ton cœur bat si fort que je l'entends.`,`Your heart is beating so hard I can hear it.`),
  D('mc','h',`C'est le tien.`,`That's yours.`),
  N(`Dehors, la pluie se met à tomber contre les vitres, douce, régulière, comme pour couvrir vos murmures. Et ce qui se passe ensuite ne regarde que vous deux.`,`Outside, rain begins to fall against the windows, soft and steady, as if to cover your murmurs. And what happens next concerns no one but the two of you.`),
  N(`À l'aube, tu te réveilles la tête sur son épaule. Les draps sentent la cire et la lavande. {fi} te regarde dormir, et visiblement depuis longtemps.`,`At dawn, you wake with your head on {a:his|her} shoulder. The sheets smell of wax and lavender. {fi} is watching you sleep, and clearly has been for a while.`),
  D('fi','h',`Gaspard va me demander pourquoi mes points ont sauté.`,`Gaspard is going to ask me why my stitches came loose.`),
  D('mc','h',`Tu diras que tu es tombé{a:|e} du lit.`,`Tell him you fell out of bed.`),
  D('fi','h',`C'est presque vrai.`,`That's almost true.`)
 ]},
 {t:[`« Pas ce soir. Je veux que ce soit notre nuit de noces. »`,`"Not tonight. I want it to be our wedding night."`],set:'waitWedding',fx:{fi:2},r:[
  D('fi','s',`Alors je compterai les jours. Un par un.`,`Then I'll count the days. One by one.`),
N(`Tu t'endors sur le fauteuil, au bord du lit, ta main dans la sienne. Comme à Londres, le soir de l'évasion. Comme tous les soirs, désormais.`,`You fall asleep in the armchair at the edge of the bed, your hand in {a:his|hers}. Like in London, the night of the escape. Like every night, from now on.`),
 ]}
]),

{bg:'chateau',mus:'calm',card:['Le lendemain','The next day'],sub:['',''],where:['La cour du château','The château courtyard']},
{st:['clem','mc']},
N(`Le lendemain matin, Clem te trouve dans la cour. Elle a les joues rouges, et pas à cause de la scène d'hier soir.`,`The next morning, Clem finds you in the courtyard. Her cheeks are pink, and not because of last night's scene.`),
D('clem','o',`Il m'a embrassée. Alistair. Hier soir, dans l'escalier, après la crypte. Il m'a dit : « Vous avez chargé une femme armée avec une ombrelle. C'est la chose la plus stupide que j'aie jamais vue. » Et puis il m'a embrassée.`,`He kissed me. Alistair. Last night, on the stairs, after the crypt. He said: "You charged an armed woman with a parasol. It's the stupidest thing I've ever seen." And then he kissed me.`),
D('clem','h',`C'est l'homme le plus odieux de Londres. Et je crois que je vais l'épouser.`,`He's the most odious man in London. And I think I'm going to marry him.`),
{st:['gaspard','mc']},
D('gaspard','n',`Les gardes ont perdu la trace d'Iris à Orléans. Elle a pris la diligence de Calais. Elle rentre en Angleterre.`,`The guards lost Iris's trail at Orléans. She took the Calais coach. She's going back to England.`),
D('mc','s',`(Pour le mariage. Elle rentre pour le mariage.)`,`(For the wedding. She's going back for the wedding.)`),
{end:37}
);
