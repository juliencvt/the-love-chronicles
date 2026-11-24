/* ===== CHAPITRE 14 — Les courses d'Ascot ===== */
STORY.push(
{bg:'bedroomday',mus:'calm',chap:14,card:['Chapitre 14','Chapter 14'],sub:['Les courses d\'Ascot','Ascot Races'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Le grand jour d'Ascot. Toute la bonne société sera là, la Reine en tête. Et toi aussi.`,`The great day at Ascot. All of high society will be there, the Queen at its head. And so will you.`),
D('bess','h',`Madame Fleury dit qu'à Ascot, on ne regarde pas les chevaux. On regarde les chapeaux.`,`Madame Fleury says that at Ascot, no one watches the horses. They watch the hats.`),
N(`Sur le lit, {t:un habit d'équitation vert bouteille, des bottes cirées comme des miroirs|une tenue d'amazone vert émeraude, coupée comme un uniforme d'officier}. Madame Fleury a dit que personne d'autre n'oserait.`,`On the bed, {t:a bottle-green riding coat and boots polished like mirrors|an emerald riding habit cut like an officer's uniform}. Madame Fleury said no one else would dare.`),
D('bess','o',`On dirait que vous partez à la guerre. … C'est un compliment !`,`You look like you're going to war. … That's a compliment!`),
{set:'o14b'},
...IF('keepProof',[D('mc','n',`(Le paquet de Madame Roux ne me quitte pas. Il est cousu dans la doublure de mon réticule.)`,`(Madame Roux's parcel never leaves me. It's sewn into the lining of my reticule.)`)]),
...IF('cordProof',[D('mc','n',`(Cordelia a toujours le paquet dans sa cape. Elle dit que c'est plus sûr. Je l'espère.)`,`(Cordelia still has the parcel in her cloak. She says it's safer. I hope so.)`)]),
...IF('lvProof',[D('mc','n',`(Le paquet de Madame Roux est chez {lv}. Personne ne sait où.)`,`(Madame Roux's parcel is with {lv}. No one knows where.)`)]),

{bg:'racecourse',mus:'ball',card:['Ascot','Ascot'],sub:['Les courses royales','The Royal Races'],where:['L\'hippodrome d\'Ascot','Ascot racecourse']},
{st:['queen','mc']},
N(`Ascot. Des tribunes pavoisées, des milliers de chapeaux, l'odeur de l'herbe coupée et du champagne. La Reine te fait signe de la rejoindre dans sa loge.`,`Ascot. Bunting-draped stands, thousands of hats, the smell of cut grass and champagne. The Queen beckons you to join her in the royal box.`),
...IF('o14b',[D('queen','h',`Une amazone ! Enfin quelqu'un qui a compris qu'on est ici pour les chevaux. Isadora montait comme un hussard, vous savez.`,`A riding habit! At last someone who understands we're here for the horses. Isadora rode like a hussar, you know.`)],[D('queen','h',`Vous êtes radieu{g:x|se|x·se}. Isadora aurait adoré cette tenue. Elle portait toujours de l'or aux courses, et se faisait remarquer à Longchamp.`,`You look radiant. Isadora would have adored that outfit. She always wore gold to the races, and was the talk of Longchamp.`)]),
D('queen','n',`L'audience approche. On me dit que vous avez rapporté des choses intéressantes de Paris.`,`The hearing approaches. I'm told you brought back interesting things from Paris.`),
C('c14a',0,[
 {t:[`« Des preuves, Votre Majesté. Solides. »`,`"Proof, Your Majesty. Solid proof."`],fx:{rep:1},r:[D('queen','s',`Alors gardez-les bien. À la cour, les preuves ont la fâcheuse habitude de s'envoler.`,`Then keep it close. At court, proof has an unfortunate habit of flying away.`)]},
 {t:[`« Qui vous a dit ça, Votre Majesté ? »`,`"Who told you that, Your Majesty?"`],r:[D('queen','s',`Une jeune fille charmante. En violet. Elle avait l'air si inquiète pour vous.`,`A charming young lady. In violet. She seemed so worried about you.`),D('mc','s',`(Cordelia.)`,`(Cordelia.)`)]}
]),
{st:['georgie','clem']},
D('georgie','h',`Ça y est ! Lord Fairfax a demandé à Papa la permission de me faire la cour ! Officiellement ! Avec un cheval en cadeau !`,`It's happened! Lord Fairfax asked Papa's permission to court me! Officially! With a horse as a present!`),
D('clem','h',`Elle a pleuré en voyant le cheval. Pas en voyant Fairfax. Le cheval.`,`She cried when she saw the horse. Not when she saw Fairfax. The horse.`),
D('georgie','a',`C'est un très beau cheval !`,`It's a very beautiful horse!`),

...IF('danceLi1',[
 {st:['lv','mc']},
 N(`{li1} apparaît en casaque de soie bleue, une cravache à la main. Tu manques de renverser ton champagne.`,`{li1} appears in blue silk racing colours, a riding crop in hand. You nearly spill your champagne.`),
 D('lv','h',`Le jockey de ma mère s'est cassé le poignet. Elle m'a supplié de monter à sa place. Enfin… « ordonné », plutôt.`,`My mother's jockey broke his wrist. She begged me to ride in his place. Well… "ordered", rather.`),
 D('lv','s',`Un chevalier a besoin d'un gage, avant la joute. C'est la tradition. Vous n'auriez pas un ruban, par hasard ?`,`A knight needs a favour before the joust. It's tradition. You wouldn't happen to have a ribbon?`)
],[
 {st:['lv','mc']},
 N(`Près des écuries, tu reconnais {li2}, les manches retroussées, qui tient la bride d'un grand alezan nerveux.`,`Near the stables, you recognise {li2}, sleeves rolled up, holding the bridle of a big, nervous chestnut.`),
 D('lv','h',`Lord Fairfax m'a {a:emprunté|empruntée} à Fleury pour la journée. Apparemment, je suis {a:le seul|la seule} à Londres capable de calmer ce monstre. Il s'appelle Bonbon.`,`Lord Fairfax borrowed me from Fleury for the day. Apparently, I'm the only one in London who can calm this monster. His name is Bonbon.`),
 D('lv','s',`Son jockey a disparu. Fairfax veut que je le monte. Je n'ai jamais couru de ma vie. Si je meurs, dites à Bonbon que je lui pardonne.`,`His jockey has vanished. Fairfax wants me to ride him. I've never raced in my life. If I die, tell Bonbon I forgive him.`)
]),
C('m27',1,[
 {t:[`Nouer ton ruban à son bras, pour lui porter chance.`,`Tie your ribbon around {a:his|her} arm, for luck.`],set:'ribbon',fx:{lv:3},r:[N(`Tu dénoues le ruban de ton chapeau et tu le noues autour de son bras. Tes doigts s'attardent un peu trop longtemps.`,`You untie the ribbon from your hat and knot it around {a:his|her} arm. Your fingers linger a little too long.`),D('lv','h',`Maintenant, je suis obligé{a:|e} de gagner. Ou de mourir avec panache.`,`Now I have to win. Or die with panache.`),N(`{lv} vole un baiser rapide, sous le nez de toute la tribune, et file vers la piste.`,`{lv} steals a quick kiss, right under the nose of the whole grandstand, and dashes off to the track.`)]},
 {t:[`Parier tout ce que tu as sur {lv}.`,`Bet everything you have on {lv}.`],set:'betLv',fx:{lv:2},r:[D('mc','h',`Dix guinées sur vous. Ne me ruinez pas : je le suis déjà assez.`,`Ten guineas on you. Don't ruin me: I'm ruined enough already.`),D('lv','h',`Pression supplémentaire. Merci beaucoup.`,`Extra pressure. Thank you so much.`)]}
]),
N(`Le départ est donné. Les chevaux s'élancent dans un grondement de tonnerre. Toute la tribune se lève. Toi aussi. Tu cries son nom sans même t'en rendre compte.`,`They're off. The horses surge forward in a roar of thunder. The whole stand rises. So do you. You're shouting {a:his|her} name without even realising it.`),
N(`Dernier virage. {lv} est troisième… deuxième… Au poteau, une tête d'avance ! La foule explose.`,`Final bend. {lv} is third… second… At the post, by a head! The crowd erupts.`),
...IF('betLv',[N(`Tu viens de gagner soixante guinées. Clem te secoue par les épaules en hurlant.`,`You've just won sixty guineas. Clem shakes you by the shoulders, screaming.`)]),
C('s14',0,[
 {t:[`Suivre {lv} derrière les écuries.`,`Follow {lv} behind the stables.`],set:'sec14',fx:{lv:1},r:[]},
 {t:[`Rester trinquer avec Clem et Théo.`,`Stay and toast with Clem and Théo.`],r:[N(`Tu restes trinquer avec Clem et Théo. Théo renverse son champagne sur le chapeau d'une duchesse. C'est une très bonne journée quand même.`,`You stay to toast with Clem and Théo. Théo spills his champagne on a duchess's hat. It's a very good day all the same.`)]}
]),
...IF('sec14',[
 {bg:'racecourse',mus:'tender',card:['✨ Scène secrète','✨ Secret scene'],sub:['Au galop','At a Gallop'],where:['Les prés d\'Ascot','The Ascot meadows']},
 {st:['lv','mc']},
 N(`Après la course, pendant que tout le monde trinque, {lv} t'entraîne derrière les écuries. Un cheval sellé attend, le cheval vainqueur.`,`After the race, while everyone is toasting, {lv} leads you behind the stables. A saddled horse is waiting: the winner.`),
 D('lv','h',`Habillé{g:|e|·e} comme ça, tu ne vas quand même pas rester dans les tribunes ? Monte.`,`Dressed like that, you're surely not staying in the stands? Get on.`),
 N(`{lv} t'aide à te hisser en selle, puis monte derrière toi. Ses bras t'entourent pour tenir les rênes. Le cheval s'élance à travers les prés, loin des chapeaux et des regards.`,`{lv} helps you into the saddle, then mounts behind you. {a:His|Her} arms wrap around you to hold the reins. The horse sets off across the meadows, far from the hats and the stares.`),
 N(`Le vent dans tes cheveux, son souffle contre ta nuque, son rire dans ton oreille. Tu n'as jamais été aussi libre.`,`Wind in your hair, {a:his|her} breath against your neck, {a:his|her} laughter in your ear. You've never felt so free.`),
 {cg:'ascot'}
]),
{st:['cordelia','mc']},
N(`Dans la bousculade, quelqu'un te heurte violemment. Cordelia, qui s'accroche à ton bras pour ne pas tomber.`,`In the crush, someone collides with you hard. Cordelia, clinging to your arm so as not to fall.`),
D('cordelia','o',`Oh, pardon ! Cette foule est épouvantable ! Tu n'as rien ?`,`Oh, sorry! This crowd is dreadful! Are you all right?`),
D('mc','h',`Rien du tout. Tu as vu {lv} ? Tu as vu cette arrivée ?`,`Not a thing. Did you see {lv}? Did you see that finish?`),
D('cordelia','h',`Je l'ai vu{a:|e}. Magnifique. Vraiment magnifique.`,`I saw. Magnificent. Truly magnificent.`),
N(`Elle sourit. Mais elle ne regarde pas la piste. Elle regarde {lv}, qui lève ton ruban vers la tribune. Et sa mâchoire est serrée à se briser.`,`She smiles. But she isn't looking at the track. She's looking at {lv}, who raises your ribbon towards the stand. And her jaw is clenched hard enough to break.`),

{bg:'bedroom',mus:'mystery',card:['Le soir','Evening'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Le soir, tu rentres épuisé{e}, heureu{g:x|se|x·se}, de l'herbe sur tes bottines.`,`In the evening, you come home exhausted, happy, grass on your boots.`),
...IF('keepProof',[N(`Tu ouvres ton réticule pour en sortir le paquet. La doublure a été décousue. Proprement. Le paquet a disparu.`,`You open your reticule to take out the parcel. The lining has been unpicked. Neatly. The parcel is gone.`)]),
...IF('cordProof',[{st:['cordelia','mc']},D('cordelia','o',`C'est horrible ! On m'a volé ma cape à Ascot, pendant la course ! Le paquet était dedans ! Je suis tellement désolée…`,`It's dreadful! My cloak was stolen at Ascot, during the race! The parcel was in it! I'm so terribly sorry…`),N(`Elle pleure. De vraies larmes. Elle pleure très bien.`,`She weeps. Real tears. She weeps very well.`)]),
...IF('lvProof',[{st:['lv','mc']},D('lv','a',`On a fouillé mon logement pendant la course. Le paquet a disparu. Personne ne savait qu'il était chez moi. Personne, à part vous… et ceux qui étaient à Paris.`,`My lodgings were searched during the race. The parcel is gone. No one knew it was with me. No one, except you… and those who were in Paris.`)]),
D('bess','o',`Votre secrétaire, {title}… Le tiroir à double fond. Il a été forcé.`,`Your writing desk, {title}… The drawer with the false bottom. It's been forced.`),
...IF('trustCordelia',[D('mc','s',`(Je n'ai parlé de ce tiroir qu'à une seule personne.)`,`(I only ever told one person about that drawer.)`)]),
D('mc','a',`L'acte de baptême, le flacon, la lettre de Marguerite… Tout a disparu. Trois semaines avant l'audience.`,`The baptism record, the vial, Marguerite's letter… All gone. Three weeks before the hearing.`),
{st:['clem','theo']},
N(`Clem et Théo arrivent en courant, alertés par Bess.`,`Clem and Theo come running, alerted by Bess.`),
D('theo','a',`Quelqu'un nous trahit. C'est la seule explication. Quelqu'un de notre cercle.`,`Someone is betraying us. It's the only explanation. Someone in our circle.`),
C('m28',1,[
 {t:[`Dire tout haut ce que tu penses : Cordelia.`,`Say out loud what you're thinking: Cordelia.`],set:'suspectCordelia',r:[
  D('mc','a',`C'est Cordelia. Les murs minces, le flacon, le tiroir, la cape… Tout ramène à elle.`,`It's Cordelia. The thin walls, the vial, the drawer, the cloak… Everything leads back to her.`),
  D('clem','a',`Comment oses-tu ? Elle a grandi avec nous ! Elle a pleuré quand j'avais la rougeole ! C'est ma sœur !`,`How dare you? She grew up with us! She cried when I had the measles! She's my sister!`),
  N(`Clem sort en claquant la porte. Théo reste. Il ne dit rien. Mais il ne te contredit pas non plus.`,`Clem storms out, slamming the door. Theo stays. He says nothing. But he doesn't contradict you either.`),
  D('theo','s',`Je vais lui parler. Et… je vais garder un œil sur Cordelia. Discrètement.`,`I'll talk to her. And… I'll keep an eye on Cordelia. Quietly.`)
 ]},
 {t:[`Garder tes soupçons pour toi, pour l'instant.`,`Keep your suspicions to yourself, for now.`],set:'quietSuspicion',r:[
  D('mc','s',`Je ne sais pas qui. Mais je trouverai.`,`I don't know who. But I'll find out.`),
  D('clem','s',`On trouvera ensemble. Personne ne touche à mes amis.`,`We'll find out together. No one touches my friends.`),
  N(`Théo croise ton regard. Dans ses yeux, tu lis la même question que dans les tiens. Aucun de vous deux n'ose la poser.`,`Theo meets your eyes. In his, you read the same question as in yours. Neither of you dares ask it.`)
 ]}
]),
{end:14}
);
