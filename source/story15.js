/* ===== CHAPITRE 15 — La taupe ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:15,card:['Chapitre 15','Chapter 15'],sub:['La taupe','The Mole'],where:['Un appartement de Soho','A Soho apartment']},
{st:['iris']},
N(`Au même moment, de l'autre côté de Londres. Un appartement aux rideaux tirés, à Soho. Une seule bougie. Iris de Valcourt attend, assise très droite.`,`At the same moment, on the other side of London. A Soho apartment with drawn curtains. A single candle. Iris de Valcourt waits, sitting bolt upright.`),
N(`On frappe trois coups. Une silhouette entre, encapuchonnée de violet. Elle repousse sa capuche.`,`Three knocks. A figure enters, hooded in violet. She pushes back her hood.`),
{st:['cordelia','iris']},
D('cordelia','n',`Bonsoir, Mère.`,`Good evening, Mother.`),
D('iris','h',`Tu es en retard, Cordelia.`,`You're late, Cordelia.`),
N(`Cordelia pose un paquet ficelé sur la table. Le sceau au lys de cire est brisé.`,`Cordelia sets a string-tied parcel on the table. The wax lily seal is broken.`),
D('cordelia','h',`L'acte de baptême. La lettre de la couturière. Et le flacon. Tout ce qu'ils ont rapporté de Paris.`,`The baptism record. The seamstress's letter. And the vial. Everything they brought back from Paris.`),
D('iris','h',`Ma fille. Quinze ans chez ces Pembroke, à sourire, à broder, à écouter aux portes. Et tout ça pour ce soir.`,`My daughter. Fifteen years with those Pembrokes, smiling, embroidering, listening at doors. And all of it for tonight.`),
N(`Iris jette l'acte de baptême et la lettre dans la cheminée. Le papier se tord, noircit, disparaît.`,`Iris throws the baptism record and the letter into the fireplace. The paper curls, blackens, vanishes.`),
D('iris','a',`Le flacon aussi.`,`The vial too.`),
D('cordelia','s',`Je m'en charge. Je le jetterai dans la Tamise ce soir.`,`I'll take care of it. I'll throw it in the Thames tonight.`),
N(`Cordelia glisse le flacon bleu dans sa manche. Elle ne le jettera pas dans la Tamise. Iris ne le remarque pas.`,`Cordelia slips the blue vial into her sleeve. She won't throw it in the Thames. Iris doesn't notice.`),
D('cordelia','n',`Quand tout sera fini, la fortune Valcourt sera à nous. Et {cx} sera à moi.`,`When it's all over, the Valcourt fortune will be ours. And {cx} will be mine.`),
D('iris','a',`Tu es encore avec ça ? L'amour est une faiblesse, Cordelia. Ta tante en est morte.`,`Still on about that? Love is a weakness, Cordelia. Your aunt died of it.`),
D('cordelia','a',`Ma tante est morte de votre remède, Mère. Pas d'amour.`,`My aunt died of your remedy, Mother. Not of love.`),
N(`Un silence glacial. Puis Iris sourit, et c'est pire que tout.`,`An icy silence. Then Iris smiles, and that's worse than anything.`),
D('iris','h',`Voilà pourquoi je t'aime. Tu es la seule qui ose me répondre.`,`That's why I love you. You're the only one who dares answer me back.`),

{bg:'salon',mus:'calm',card:['Le lendemain','The next day'],sub:['',''],where:['Le bureau de ton père','Your father\'s study']},
{st:['father','mc']},
D('dorval','s',`Sans l'acte et sans le flacon… notre dossier ne tient plus qu'à un fil. Iris a des avocats, des témoins achetés, et l'oreille de la moitié de la Cour.`,`Without the record and without the vial… our case hangs by a thread. Iris has lawyers, bought witnesses and the ear of half the Court.`),
D('dorval','n',`Il nous reste une chance : Madame Roux elle-même. Si elle témoigne en personne, sous serment, la Cour devra l'écouter.`,`We have one chance left: Madame Roux herself. If she testifies in person, under oath, the Court will have to listen.`),
D('father','s',`Elle a soixante-quinze ans. La traversée pourrait la tuer.`,`She's seventy-five. The crossing could kill her.`),
{st:['theo','mc']},
N(`Théo, adossé au chambranle, se redresse.`,`Theo, leaning against the doorframe, straightens up.`),
D('theo','n',`J'irai la chercher. Seul. Sur le brick de mon père. Personne ne saura que je suis parti, pas même Clem. Pas même… qui que ce soit.`,`I'll go and fetch her. Alone. On my father's brig. No one will know I've gone, not even Clem. Not even… anyone.`),
C('c15a',0,[
 {t:[`« Merci, Théo. Je te dois tout. »`,`"Thank you, Theo. I owe you everything."`],fx:{rep:1},r:[D('theo','h',`Tu me paieras en me laissant gagner aux cartes. Une fois.`,`You can pay me by letting me win at cards. Once.`)]},
 {t:[`« Sois prudent. Si Iris l'apprend… »`,`"Be careful. If Iris finds out…"`],r:[D('theo','s',`Elle ne l'apprendra pas. Parce que pour la première fois, nous ne dirons rien à notre cercle.`,`She won't. Because for the first time, we won't tell our circle anything.`)]}
]),
{st:['mc']},
N(`Après son départ, tu restes seul{e} dans le bureau. Une idée prend forme. Une idée dangereuse.`,`After he leaves, you remain alone in the study. An idea takes shape. A dangerous idea.`),
D('mc','s',`(Si la taupe est dans mon cercle… je peux lui tendre un piège. Dire à chacun une chose différente, et voir laquelle arrive aux oreilles d'Iris.)`,`(If the mole is in my circle… I could set a trap. Tell each person something different, and see which one reaches Iris's ears.)`),
C('m29',1,[
 {t:[`Tendre le piège : une fausse cachette pour chacun.`,`Set the trap: a false hiding place for each of them.`],set:'trapMole',r:[
  N(`À Bess, tu murmures que tu as une copie de l'acte chez Maître Dorval. À Clem, qu'elle est à la banque Coutts. À Georgie, qu'elle est chez la Reine.`,`To Bess, you whisper that you have a copy of the record at Mr Dorval's. To Clem, that it's at Coutts bank. To Georgie, that it's with the Queen.`),
  N(`Et à Cordelia, en lui prenant les mains : « Il y a une copie. Cachée sous la statue de Neptune, dans les jardins de Vauxhall. »`,`And to Cordelia, taking her hands: "There's a copy. Hidden under the statue of Neptune, in Vauxhall Gardens."`),
  {st:['cordelia','mc']},
  D('cordelia','o',`Une copie ? Mais c'est merveilleux ! Ton secret est en sécurité avec moi.`,`A copy? But that's wonderful! Your secret is safe with me.`),
  D('mc','s',`(Je sais.)`,`(I know.)`)
 ]},
 {t:[`Ne rien tenter. Tu refuses de soupçonner tes amis.`,`Try nothing. You refuse to suspect your friends.`],set:'noTrap',r:[
  D('mc','s',`(Non. Si je commence à mentir à mes amis, Iris a déjà gagné. J'attendrai Théo et Madame Roux.)`,`(No. If I start lying to my friends, Iris has already won. I'll wait for Theo and Madame Roux.)`)
 ]}
]),

...IF('danceLi1',[
 {bg:'terrace',mus:'tender',card:['La nuit','Night'],sub:['',''],where:['Les toits d\'Ashbury House','The roof of Ashbury House']},
 {st:['lv','mc']},
 N(`À minuit, {li1} t'entraîne par l'escalier de service jusque sur les toits d'Ashbury House. Une couverture, un panier, une bouteille volée dans la cave de la Duchesse. Tout Londres s'étend à vos pieds.`,`At midnight, {li1} leads you up the servants' stairs onto the roof of Ashbury House. A blanket, a basket, a bottle stolen from the Duchess's cellar. All of London lies at your feet.`),
 D('lv','h',`Quand j'étais petit{a:|e}, je montais ici pour fuir les leçons de maintien. Personne ne m'a jamais trouvé{a:|e}. Vous êtes la première personne que j'y amène.`,`When I was little, I came up here to escape deportment lessons. No one ever found me. You're the first person I've brought here.`)
],[
 {bg:'river',mus:'tender',card:['La nuit','Night'],sub:['',''],where:['Sur la Tamise','On the Thames']},
 {st:['lv','mc']},
 N(`À minuit, {li2} t'attend au bas des marches de Westminster avec une barque empruntée à un passeur. Une lanterne à la proue, une couverture, du pain et des cerises.`,`At midnight, {li2} waits for you at the foot of the Westminster steps with a boat borrowed from a ferryman. A lantern at the prow, a blanket, bread and cherries.`),
 D('lv','h',`Quand j'étais petit{a:|e}, Marguerite m'emmenait ici les soirs d'été. Elle disait que la Tamise était la seule chose à Londres qui ressemblait à la Seine. Vous êtes la première personne que j'y amène.`,`When I was little, Marguerite brought me here on summer evenings. She said the Thames was the only thing in London that looked like the Seine. You're the first person I've brought here.`)
]),
D('lv','s',`On a perdu les preuves. Mais vous savez ce qu'on n'a pas perdu ?`,`We've lost the proof. But do you know what we haven't lost?`),
D('mc','s',`Quoi ?`,`What?`),
D('lv','h',`Ça.`,`This.`),
N(`{lv} prend ta main et la pose sur son cœur. Il bat vite. Très vite.`,`{lv} takes your hand and places it on {a:his|her} heart. It's beating fast. Very fast.`),
D('lv','s',`Quoi qu'il arrive à l'audience, avec ou sans fortune, avec ou sans nom… je serai là. Je voulais que vous le sachiez avant.`,`Whatever happens at the hearing, with or without a fortune, with or without a name… I'll be there. I wanted you to know that beforehand.`),
C('m30',1,[
 {t:[`Rester avec {lv} jusqu'à l'aube, à parler de tout et de rien.`,`Stay with {lv} until dawn, talking about everything and nothing.`],set:'dawnTogether',fx:{lv:3},r:[N(`Vous parlez de vos enfances, de vos peurs, de l'endroit où vous aimeriez vivre « après ». Tu t'endors la tête sur ses genoux, et {lv} ne bouge pas d'un pouce jusqu'au lever du soleil.`,`You talk about your childhoods, your fears, where you'd like to live "afterwards". You fall asleep with your head in {a:his|her} lap, and {lv} doesn't move an inch until sunrise.`),D('lv','s',`(Vous ronflez. Un tout petit peu. Je ne vous le dirai jamais.)`,`(You snore. Just a tiny bit. I'll never tell you.)`)]},
 {t:[`L'embrasser longuement, puis rentrer avant qu'on remarque ton absence.`,`Kiss {a:him|her} for a long time, then go home before anyone notices you're gone.`],set:'kissHome15',fx:{lv:2},r:[N(`Le baiser dure si longtemps que la lanterne s'éteint. Vous riez dans le noir, comme deux enfants pris en faute.`,`The kiss lasts so long the lantern goes out. You laugh in the dark like two children caught misbehaving.`),D('lv','h',`Rentrez. Avant que je change d'avis et que je vous enlève pour de bon.`,`Go home. Before I change my mind and carry you off for good.`)]}
]),
{end:15}
);
