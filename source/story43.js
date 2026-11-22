/* ===== SAISON 2 — CHAPITRE 21 — Le jour J ===== */
STORY.push(
{bg:'bedroomday',mus:'tender',chap:43,card:['Saison 2 · Chapitre 21','Season 2 · Chapter 21'],sub:['Le jour J','The Wedding Day'],where:['Ta chambre','Your bedroom']},
{chk:['vig',16,'goodEnd']},
{st:['bess','mother']},
N(`Le grand jour. Le soleil se lève sur Londres, doré, comme commandé exprès. Bess t'habille en pleurant. Ta mère te coiffe en pleurant. Même le chat pleure, ou alors il a un rhume.`,`The big day. The sun rises over London, golden, as if ordered specially. Bess dresses you, crying. Your mother does your hair, crying. Even the cat is crying, or else it has a cold.`),
...IF('o39b',[N(`Le bleu nuit et les perles noires. Dans le miroir, tu ne te reconnais pas. Tu as l'air de quelqu'un qui n'a peur de rien.`,`The midnight blue and black pearls. In the mirror, you don't recognise yourself. You look like someone afraid of nothing.`)],[N(`L'ivoire et les lys d'argent. Dans le miroir, tu ressembles au portrait d'Isadora. Ta mère s'en aperçoit aussi. Elle doit s'asseoir.`,`The ivory and silver lilies. In the mirror, you look like Isadora's portrait. Your mother notices too. She has to sit down.`)]),
N(`Le ruban bleu de Georgie, noué à ton poignet. La broche d'Isadora, sur ton cœur. L'alliance de ta mère, dans ta poche. Tu es prêt{e}.`,`Georgie's blue ribbon, tied at your wrist. Isadora's brooch, over your heart. Your mother's ring, in your pocket. You're ready.`),

...IF('bigWedding',[{bg:'cathedral',mus:'ball',card:['Saint-George','St George\'s'],sub:['Hanover Square','Hanover Square'],where:['L\'église Saint-George','St George\'s church']}],[{bg:'cathedral',mus:'ball',card:['La chapelle royale','The Chapel Royal'],sub:['Saint James','St James\'s'],where:['La chapelle royale','The Chapel Royal']}]),
{st:['queen','duchess']},
N(`L'église est pleine à craquer. La Reine au premier rang. La Duchesse et ta mère, côte à côte, se tenant la main sans s'en rendre compte. Lord et Lady Pembroke. Clem et Lord Grey. Théo. Gaspard, venu de Touraine dans son plus bel habit. Madame Roux, venue de Paris.`,`The church is packed. The Queen in the front row. The Duchess and your mother side by side, holding hands without realising it. Lord and Lady Pembroke. Clem and Lord Grey. Theo. Gaspard, come from Touraine in his finest coat. Madame Roux, come from Paris.`),
...IF('fatherAisle',[N(`Au premier rang, à côté de ta mère, une chaise vide. Dessus, un lys blanc. La place d'Isadora.`,`In the front row, beside your mother, an empty chair. On it, a white lily. Isadora's seat.`)]),
...IF('bothParents',[N(`Ton père à ta droite, ta mère à ta gauche, tu remontes l'allée. La Duchesse lève les yeux au ciel. Puis elle sourit.`,`Your father on your right, your mother on your left, you walk up the aisle. The Duchess rolls her eyes. Then she smiles.`)],[N(`Au bras de ton père, tu remontes l'allée. Il tremble plus que toi.`,`On your father's arm, you walk up the aisle. He's shaking more than you are.`)]),
{st:['fi','mc']},
N(`Au bout de l'allée, {fi} t'attend. {a:Il|Elle} pleure déjà. Comme promis. Tu ne pourrais pas {a:le|la} rater.`,`At the end of the aisle, {fi} is waiting for you. {a:He's|She's} already crying. As promised. You couldn't miss {a:him|her}.`),
D('fi','s',`Tu es… je… J'avais préparé quelque chose. J'ai tout oublié.`,`You're… I… I'd prepared something. I've forgotten all of it.`),
N(`Le prêtre commence. Les mots anciens, solennels. Puis vient le moment des vœux.`,`The priest begins. The old, solemn words. Then comes the moment for the vows.`),
...IF('writeVows',[D('fi','s',`{first} {last}. Je promets de toujours arriver à temps.`,`{first} {last}. I promise to always arrive in time.`)],[D('fi','s',`{first} {last}. Je n'ai rien écrit. Tu as déchiré mes papiers… enfin, peu importe. Je promets d'arriver à temps. Toujours. Sur un pont, dans une cave, dans une crypte. Partout où tu seras.`,`{first} {last}. I haven't written anything. Well, never mind. I promise to arrive in time. Always. On a deck, in a cellar, in a crypt. Wherever you are.`)]),
C('m85',1,[
 {t:[`« Je promets de toujours rester. Même quand ce sera difficile. Surtout quand ce sera difficile. »`,`"I promise to always stay. Even when it's hard. Especially when it's hard."`],set:'vowStay',fx:{fi:3},r:[N(`Un sanglot dans l'église. Probablement Clem. Peut-être Lord Grey.`,`A sob in the church. Probably Clem. Possibly Lord Grey.`)]},
 {t:[`« Je promets de t'aimer comme Isadora aimait : sans peur, sans secret, à voix haute. »`,`"I promise to love you the way Isadora loved: without fear, without secrets, out loud."`],set:'vowIsadora',fx:{fi:3},r:[N(`Au premier rang, ta mère porte la main à sa bouche. Ton père ferme les yeux.`,`In the front row, your mother raises a hand to her mouth. Your father closes his eyes.`)]}
]),
N(`Vient le moment de la coupe. Le vin des mariés, que vous devez boire ensemble.`,`Then comes the moment of the cup. The wedding wine, which you must drink together.`),
...IF('goodEnd',[
 ...IF('bessCup',[{st:['bess','mc']},N(`Bess s'avance avec la coupe. Elle ne l'a pas lâchée depuis l'aube. Elle l'a même gardée dans ses bras pendant qu'elle se faisait coiffer.`,`Bess steps forward with the cup. She hasn't let go of it since dawn. She even held it in her arms while she had her hair done.`)],[N(`Un servant de l'église s'avance avec la coupe. Deux constables le surveillent de si près qu'il en tremble.`,`A church servant steps forward with the cup. Two constables watch him so closely he's shaking.`)]),
 N(`Au même moment, un bruit sourd au fond de l'église. Des cris étouffés. Puis la voix de Théo, triomphante.`,`At that moment, a dull thud at the back of the church. Muffled cries. Then Theo's voice, triumphant.`),
 D('theo','h',`On l'a ! Dans la sacristie ! Avec la poudre dans la main !`,`We've got her! In the vestry! With the powder in her hand!`),
 {st:['iris','mc']},
 N(`Deux constables traînent Iris jusqu'au milieu de l'allée. Elle se débat, échevelée, une fiole à la main. Toute l'église s'est levée.`,`Two constables drag Iris into the middle of the aisle. She struggles, dishevelled, a phial in her hand. The whole church has risen.`),
 D('iris','a',`Lâchez-moi ! Ce mariage n'aurait jamais dû avoir lieu ! Rien de tout ça n'aurait dû avoir lieu !`,`Let go of me! This wedding should never have happened! None of this should ever have happened!`),
 D('queen','a',`Emmenez-la. Et cette fois, assurez-vous qu'elle ne sorte plus jamais. Pas même avec le linge sale.`,`Take her away. And this time, make sure she never gets out again. Not even with the dirty laundry.`),
 N(`Iris disparaît par la grande porte. Un silence. Puis le prêtre s'éclaircit la gorge.`,`Iris disappears through the great door. A silence. Then the priest clears his throat.`),
 D('mc','h',`Mon père… Je crois que nous en étions à la coupe.`,`Father… I believe we were at the cup.`),
 N(`Toute l'église éclate de rire. Vous buvez la coupe ensemble. Le vin est doux. Il a le goût d'une fin heureuse.`,`The whole church bursts out laughing. You drink from the cup together. The wine is sweet. It tastes of a happy ending.`),
 N(`« Je vous déclare unis devant Dieu et devant les hommes. »`,`"I now pronounce you joined before God and before all."`),
 {st:['fi','mc']},
 C('m86',1,[
  {t:[`L'embrasser comme si personne ne regardait.`,`Kiss {a:him|her} as if nobody were watching.`],set:'bigKiss',fx:{fi:3},r:[N(`Tu attrapes {fi} par le col et tu l'embrasses. Longtemps. Très longtemps. La Duchesse toussote. La Reine applaudit. Clem siffle comme un cocher.`,`You grab {fi} by the collar and kiss {a:him|her}. For a long time. A very long time. The Duchess coughs. The Queen applauds. Clem whistles like a coachman.`)]},
  {t:[`Un baiser doux, front contre front, en souriant.`,`A gentle kiss, forehead to forehead, smiling.`],set:'softKiss',fx:{fi:3},r:[N(`Un baiser tout doux. Puis vos fronts se touchent, et vous restez comme ça, à sourire, pendant que toute l'église se lève pour applaudir.`,`A very gentle kiss. Then your foreheads touch, and you stay like that, smiling, while the whole church rises to applaud.`)]}
 ]),
 {bg:'street',mus:'ball',where:['Le parvis de l\'église','The church steps']},
 N(`Sur le parvis, une pluie de pétales de roses et de grains de riz. Les cloches sonnent à toute volée. Tout Londres est là, dans la rue, à crier vos noms.`,`On the church steps, a shower of rose petals and rice. The bells ring out in full peal. All London is there in the street, shouting your names.`),
 D('fi','h',`Mon {g:mari|épouse|époux·se}. J'ai réussi à le dire. Mon {g:mari|épouse|époux·se}. Je vais le dire toute la journée.`,`My spouse. I managed to say it. My spouse. I'm going to say it all day long.`)
],[
 N(`Un servant de l'église s'avance avec la coupe. Tu croises son regard. Il détourne les yeux trop vite.`,`A church servant steps forward with the cup. You meet his eyes. He looks away too quickly.`),
 ...IF('churchChanged',[N(`Mais tu as changé l'ordre de la cérémonie. La coupe n'est pas celle qu'il croyait. Théo la saisit, la renifle, la vide sur les dalles. Le servant s'enfuit par la sacristie.`,`But you changed the order of the ceremony. The cup isn't the one he thought. Theo seizes it, sniffs it, pours it out on the flagstones. The servant flees through the vestry.`)],[N(`Au dernier moment, Bess bondit et fait sauter la coupe de tes mains. Le vin se répand sur les dalles. Il fume. Le servant s'enfuit par la sacristie.`,`At the last moment, Bess leaps forward and knocks the cup from your hands. The wine spills onto the flagstones. It smokes. The servant flees through the vestry.`)]),
 N(`Un murmure d'horreur parcourt l'église. Le prêtre, livide, termine la cérémonie à toute vitesse.`,`A murmur of horror runs through the church. The priest, ashen, rushes through the rest of the ceremony.`),
 N(`« Je vous déclare unis devant Dieu et devant les hommes. »`,`"I now pronounce you joined before God and before all."`),
 {st:['fi','mc']},
 N(`Vous vous embrassez, vite, les mains tremblantes. Ce n'est pas le baiser dont tu rêvais. Mais vous êtes mariés. Vivants. Ensemble.`,`You kiss, quickly, hands shaking. It isn't the kiss you dreamed of. But you're married. Alive. Together.`),
 {bg:'street',mus:'mystery',where:['Le parvis de l\'église','The church steps']},
 N(`Sur le parvis, les cloches sonnent. Les pétales tombent. La foule crie vos noms. Pendant une seconde, une seule, tu crois que c'est fini.`,`On the church steps, the bells ring. Petals fall. The crowd shouts your names. For a second, just one, you think it's over.`),
 N(`Puis tu la vois. Dans la foule, en face. Une cape noire. Un pistolet qui se lève. Vers toi.`,`Then you see her. In the crowd, opposite. A black cloak. A pistol rising. Towards you.`),
 {st:['lordp','mc']},
 N(`Une ombre se jette devant toi. Massive. Familière. Le coup part.`,`A shadow throws itself in front of you. Massive. Familiar. The shot rings out.`),
 N(`Lord Pembroke s'effondre sur les marches de l'église, une tache rouge s'élargissant sur son gilet de soie.`,`Lord Pembroke collapses on the church steps, a red stain spreading across his silk waistcoat.`),
 C('m86b',1,[
  {t:[`Te jeter à genoux près de lui.`,`Throw yourself to your knees beside him.`],set:'holdPembroke',fx:{rep:1},r:[D('lordp','s',`Cette fois… cette fois, je suis arrivé à temps. Pour elle. Pour toi.`,`This time… this time I arrived in time. For her. For you.`)]},
  {t:[`Crier aux gardes de rattraper Iris.`,`Shout to the guards to catch Iris.`],set:'chaseIrisEnd',fx:{rep:1},r:[N(`Alistair et Théo fendent la foule. Iris est plaquée au sol avant d'avoir pu recharger. Mais quand tu te retournes, Clem est à genoux près de son père, et elle hurle.`,`Alistair and Theo cut through the crowd. Iris is pinned to the ground before she can reload. But when you turn around, Clem is on her knees beside her father, screaming.`)]}
 ])
]),
{end:43}
);
