/* ===== CHAPITRE 7 — Le bal de la Reine ===== */
STORY.push(
{bg:'bedroom',mus:'tender',chap:7,card:['Chapitre 7','Chapter 7'],sub:['Le bal de la Reine','The Queen\'s Ball'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
D('bess','h',`Ne bougez plus, {title}. Encore une épingle… Voilà. Vous êtes à tomber.`,`Hold still, {title}. One more pin… There. You look stunning.`),
...IF('necklace',[D('bess','o',`Et ce collier ! Des perles comme ça, on n'en voit qu'aux duchesses.`,`And that necklace! Pearls like these, you only see on duchesses.`)]),
D('bess','s',`{title}… Quoi qu'il arrive ce soir, je voulais vous dire… Je suis contente d'être votre femme de chambre. Plus que contente.`,`{title}… Whatever happens tonight, I wanted to say… I'm glad to be your maid. More than glad.`),
C('c7a',0,[
 {t:[`La serrer dans tes bras.`,`Hug her.`],fx:{bess:2},r:[D('bess','o',`Oh ! Ça ne se fait pas, {title}… Mais je ne m'en plaindrai pas.`,`Oh! It isn't done, {title}… But I won't complain.`)]},
 {t:[`« Tu es bien plus qu'une femme de chambre, Bess. Tu es mon amie. »`,`"You're much more than a maid, Bess. You're my friend."`],fx:{bess:2},r:[D('bess','h',`Alors votre amie vous ordonne de briller ce soir.`,`Then your friend orders you to shine tonight.`)]}
]),
{bg:'salon',where:['Le vestibule','The hall']},
{st:['mother','mc']},
D('mother','s',`{first}. Tu es…`,`{first}. You look…`),
N(`Ta mère s'arrête net. Pendant une seconde, elle te regarde comme si elle voyait quelqu'un d'autre.`,`Your mother stops short. For a second, she looks at you as if she were seeing someone else.`),
D('mother','h',`Tu es magnifique. Je suis fière de toi. Pas « presque ». Fière.`,`You look magnificent. I'm proud of you. Not "almost". Proud.`),
C('c7b',0,[
 {t:[`« Merci, Mère. Ça compte plus que vous ne croyez. »`,`"Thank you, Mother. That means more than you know."`],set:'warmMother',r:[N(`Elle te caresse la joue, du bout de son gant.`,`She strokes your cheek with the tip of her glove.`)]},
 {t:[`« Alors dites-moi la vérité. Ce soir. »`,`"Then tell me the truth. Tonight."`],r:[D('mother','s',`Après le bal. Je te le promets. Laisse-moi encore une soirée où tu es seulement… {g:mon fils|ma fille|mon enfant}.`,`After the ball. I promise. Let me have one more evening where you are simply… my {g:son|daughter|child}.`)]}
]),

{bg:'ball',mus:'ball',card:['Buckingham House','Buckingham House'],sub:['Le bal de la Reine','The Queen\'s Ball'],where:['Le palais de la Reine','The Queen\'s palace']},
{st:[]},
N(`Le palais de la Reine ruisselle d'or et de lumière. Mille bougies, des fontaines de champagne, et tout ce que Londres compte de titres et de couronnes.`,`The Queen's palace streams with gold and light. A thousand candles, champagne fountains, and every title and coronet in London.`),
N(`« Le Comte et la Comtesse {last}… et {first} {last} ! » Cette fois, personne ne rit. Tout le monde regarde.`,`"The Count and Countess {last}… and {first} {last}!" This time, no one laughs. Everyone stares.`),
{st:['queen','mc']},
D('queen','h',`Ah ! Voici la personne la plus discutée de la Saison. Approchez, {title}. Ce soir, vous êtes sous ma protection.`,`Ah! Here is the most talked-about person of the Season. Come closer, {title}. Tonight, you are under my protection.`),
...IF('helpedTwin',[{st:['twinA','mc']},D('twinA','s',`…Merci. Pour la Tamise. Je ne le dirai qu'une fois.`,`…Thank you. For the Thames. I'll only say it once.`),D('mc','h',`Une fois suffit.`,`Once is enough.`)],
 [{st:['twinA','twinB']},D('twinB','a',`Profite bien de ta soirée. On a une surprise pour toi.`,`Enjoy your evening. We have a surprise for you.`),D('twinA','h',`Une surprise… inoubliable.`,`An… unforgettable surprise.`)]),
{st:['clem','theo']},
N(`Une tornade vert d'eau fend la foule : Clem, suivie de Théo, de Cordelia et de Georgie.`,`A sea-green whirlwind cuts through the crowd: Clem, followed by Theo, Cordelia and Georgie.`),
...IF('trioFriends',[D('clem','h',`Te voilà ! Tu es à couper le souffle. Théo, dis-lui.`,`There you are! You look breathtaking. Theo, tell {g:him|her|them}.`),D('theo','s',`Tu es à couper le souffle. Voilà, c'est dit.`,`You look breathtaking. There, I've said it.`)],
 [D('clem','h',`Vous voyez ? On a tenu parole. On est là.`,`See? We kept our word. We're here.`),D('mc','h',`Je vois. Et… merci.`,`I see. And… thank you.`),{set:'trioFriends'}]),
{st:['cordelia','georgie']},
D('georgie','h',`Trois ducs, cinq comtes et un vicomte sans dettes. J'ai compté. La soirée s'annonce excellente.`,`Three dukes, five earls and a viscount with no debts. I counted. The evening looks excellent.`),
D('cordelia','h',`Vous serez la personne la plus regardée de la soirée, {title}. Profitez-en.`,`You'll be the most watched person of the evening, {title}. Enjoy it.`),
N(`Son sourire est parfait. Peut-être un peu trop parfait.`,`Her smile is perfect. Perhaps a little too perfect.`),
{st:['ladyp','lordp']},
N(`Plus loin, Lady Pembroke rajuste les perles de sa fille et la pousse vers le groupe de la Duchesse. Droit vers {li1}. Lord Pembroke, lui, a déjà trouvé le buffet.`,`Further off, Lady Pembroke straightens her daughter's pearls and nudges her towards the Duchess's circle. Straight towards {li1}. Lord Pembroke, for his part, has already found the buffet.`),
{st:['theo','clem']},
D('theo','n',`Iris de Valcourt est arrivée il y a une heure. Clem et moi, on ne la quitte pas des yeux.`,`Iris de Valcourt arrived an hour ago. Clem and I won't let her out of our sight.`),
N(`L'orchestre attaque la première valse. Deux personnes s'avancent vers toi en même temps, du bout opposé de la salle.`,`The orchestra strikes up the first waltz. Two people walk towards you at the same time, from opposite ends of the room.`),
N(`D'un côté, {li1}, impeccable, la main déjà tendue. De l'autre, en livrée de valet du palais, {a:Mateo|Nell}… qui n'a absolument pas le droit de danser.`,`On one side, {li1}, impeccable, hand already outstretched. On the other, in palace livery, {a:Mateo|Nell}… who absolutely isn't allowed to dance.`),
{st:['li1','li2']},
D('li1','h',`{first}. Ma valse, je crois ?`,`{first}. My waltz, I believe?`),
D('li2','h',`Ou alors… une promenade sur la terrasse. Loin des regards.`,`Or else… a stroll on the terrace. Away from prying eyes.`),
C('m13',1,[
 {t:[`Danser avec {li1}, devant toute la cour.`,`Dance with {li1}, in front of the whole court.`],set:'danceLi1',fx:{li1:2},r:[
  {st:['li1','mc']},
  N(`{li1} t'entraîne au centre de la salle. Tous les regards vous suivent, et pour une fois, tu t'en moques.`,`{li1} leads you to the centre of the room. Every eye follows you, and for once, you don't care.`),
  ...IF('loveLi1',[D('li1','h',`Vous vous souvenez de la barque ? Je n'ai pas cessé d'y penser.`,`Do you remember the boat? I haven't stopped thinking about it.`)],[D('li1','h',`Vous dansez mieux que la première fois. Ou alors c'est moi qui m'améliore.`,`You dance better than the first time. Or perhaps I'm the one improving.`)]),
  D('li1','n',`Quoi qu'il arrive ce soir, je suis de votre côté. Ma mère aussi, même si elle ne le dira jamais.`,`Whatever happens tonight, I'm on your side. My mother too, though she'll never say so.`)]},
 {t:[`Suivre {a:Mateo|Nell} sur la terrasse.`,`Follow {a:Mateo|Nell} onto the terrace.`],set:'danceLi2',fx:{li2:2},r:[
  {bg:'terrace',where:['La terrasse du palais','The palace terrace']},
  {st:['li2','mc']},
  N(`Sur la terrasse, la musique arrive étouffée. {a:Mateo|Nell} te tend la main, et vous dansez sous les étoiles, sans témoin.`,`On the terrace, the music comes muffled. {a:Mateo|Nell} holds out {a:his|her} hand, and you dance under the stars, with no witnesses.`),
  ...IF('loveLi2',[D('li2','h',`Dix minutes sous les saules hier. Dix minutes sous les étoiles ce soir. Je deviens gourmand{a:|e}.`,`Ten minutes under the willows yesterday. Ten minutes under the stars tonight. I'm getting greedy.`)],[D('li2','h',`Un apprenti et {g:un aristocrate|une aristocrate|un·e aristocrate}, dansant sur la terrasse de la Reine. Si Marguerite voyait ça…`,`An apprentice and an aristocrat, dancing on the Queen's terrace. If Marguerite could see this…`)]),
  D('li2','s',`J'ai vu Iris entrer par la porte de service. Elle prépare quelque chose. Restez près de moi.`,`I saw Iris come in through the servants' door. She's planning something. Stay close to me.`),
  {bg:'ball',where:['Le palais de la Reine','The Queen\'s palace']}]}
]),

...IF('topLi1',[...IF('danceLi1',[{st:['cordelia','mc']},N(`En quittant la piste, tu croises le regard de Cordelia. Une coupe de champagne se brise entre ses doigts.`,`As you leave the floor, you meet Cordelia's eyes. A champagne glass shatters between her fingers.`),D('cordelia','h',`Que je suis maladroite ! Ce n'est rien. Rien du tout.`,`How clumsy of me! It's nothing. Nothing at all.`)])],
 [...IF('danceLi2',[{st:['cordelia','mc']},N(`Quand tu rentres de la terrasse, Cordelia se tient juste derrière la porte-fenêtre. Depuis combien de temps ?`,`When you come back in from the terrace, Cordelia is standing just behind the French window. For how long?`),D('cordelia','h',`Il fait si chaud, j'avais besoin d'air. Vous aussi, on dirait.`,`It's so hot, I needed some air. So did you, it seems.`)])]),
{bg:'ball',mus:'mystery',card:['Minuit sonne','Midnight Strikes'],sub:['',''],where:['La salle du trône','The throne room']},
{st:['iris','mc']},
N(`Au douzième coup de minuit, la musique s'arrête net. Une femme en noir traverse la salle et se plante devant le trône de la Reine.`,`On the twelfth stroke of midnight, the music stops dead. A woman in black crosses the room and plants herself before the Queen's throne.`),
D('iris','a',`Votre Majesté ! Je suis Iris de Valcourt. Je demande justice pour ma sœur, Isadora.`,`Your Majesty! I am Iris de Valcourt. I demand justice for my sister, Isadora.`),
...IF('letterIris',[
 D('iris','h',`Et j'ai la preuve. {first}, la lettre. Maintenant. Tu me l'as promise.`,`And I have the proof. {first}, the letter. Now. You promised it to me.`),
 N(`Tous les regards se tournent vers toi. Les mains tremblantes, tu tends ta moitié de lettre. Iris l'assemble à la sienne et lit, d'une voix qui résonne dans toute la salle.`,`All eyes turn to you. Hands trembling, you hand over your half of the letter. Iris joins it to hers and reads, in a voice that rings through the whole room.`)
],[
 ...IF('letterDuchess',[
  {st:['duchess','iris']},
  D('duchess','a',`Assez, Iris. Tu n'auras pas cette lettre. Elle est en sécurité.`,`Enough, Iris. You won't get that letter. It's safe.`),
  D('iris','h',`Tu crois que j'ai besoin de la moitié de {first} ? J'ai la mienne, Augusta. Et la mienne suffit.`,`You think I need {first}'s half? I have mine, Augusta. And mine is enough.`)
 ],[
  {st:['father','iris']},
  D('father','a',`Iris. Ne fais pas ça. Pas ici. Pas devant {g:lui|elle|iel}.`,`Iris. Don't do this. Not here. Not in front of {g:him|her|them}.`),
  D('iris','h',`Tu as eu dix-huit ans pour tout lui dire, Henri. Ton temps est écoulé.`,`You've had eighteen years to tell {g:him|her|them}, Henri. Your time is up.`)
 ])
]),
{st:['iris','mc']},
N(`« … promets-moi de veiller sur notre enfant. Élève-le comme le tien, puisqu'il l'est. Et ne laisse jamais Iris l'approcher. — Isadora »`,`"… promise me you will watch over our child. Raise our child as yours, for it is yours. And never let Iris near our child. — Isadora"`),
N(`Un murmure parcourt la salle comme un coup de vent.`,`A murmur sweeps through the room like a gust of wind.`),
D('iris','a',`{first} {last} n'est pas l'enfant de la Comtesse ! C'est l'enfant d'Isadora de Valcourt et d'Henri {last}. Un enfant illégitime… et l'héritier de toute la fortune Valcourt, que cette famille a cachée pendant dix-huit ans !`,`{first} {last} is not the Countess's child! This is the child of Isadora de Valcourt and Henri {last}. An illegitimate child… and the heir to the entire Valcourt fortune, which this family has hidden for eighteen years!`),
N(`Le monde s'arrête. Les visages, les lustres, la musique, tout devient flou. Tu cherches les yeux de ton père.`,`The world stops. The faces, the chandeliers, the music, everything blurs. You search for your father's eyes.`),
{st:['father','mc']},
D('father','s',`C'est vrai. Isadora était ta mère. Et je l'aimais.`,`It's true. Isadora was your mother. And I loved her.`),
{st:['mother','mc']},
D('mother','s',`Mais c'est moi qui t'ai {g:bercé|bercée|bercé·e}. Moi qui t'ai {g:soigné|soignée|soigné·e} quand tu avais la fièvre. Moi qui t'ai {g:regardé|regardée|regardé·e} grandir. Le sang n'y change rien, {first}. Rien.`,`But I'm the one who rocked you to sleep. I nursed you through every fever. I watched you grow up. Blood changes nothing, {first}. Nothing.`),
D('mc','s',`(Toute ma vie était un mensonge. Ou peut-être… le plus grand acte d'amour qu'on m'ait jamais fait.)`,`(My whole life was a lie. Or perhaps… the greatest act of love anyone has ever done for me.)`),
{st:['ladyp','lordp']},
D('ladyp','a',`{g:Un bâtard|Une bâtarde|Un enfant illégitime} ! Sous le toit de la Reine ! Je l'avais toujours dit.`,`A bastard! Under the Queen's roof! I always said so.`),
D('lordp','s',`Tu n'as jamais rien dit de tel, Honoria. Tais-toi, pour une fois.`,`You never said anything of the sort, Honoria. Hold your tongue, for once.`),
{st:['clem','theo']},
N(`Clem fend la foule et se place à ta gauche. Théo, à ta droite. Ils ne disent rien. Ils sont là, c'est tout.`,`Clem pushes through the crowd and takes her place on your left. Theo, on your right. They say nothing. They're simply there.`),
{st:['georgie','cordelia']},
N(`Georgie a les larmes aux yeux. Derrière elle, Cordelia porte la main à sa bouche, bouleversée. Mais l'espace d'un instant, tu crois voir briller dans ses yeux… quelque chose qui ressemble à de la satisfaction.`,`Georgie has tears in her eyes. Behind her, Cordelia raises a hand to her mouth, distraught. But for an instant, you think you see something shine in her eyes… something like satisfaction.`),
N(`Des centaines de regards pèsent sur toi. La Reine elle-même attend.`,`Hundreds of eyes weigh on you. The Queen herself is waiting.`),
C('m14',1,[
 {t:[`Faire face, la tête haute.`,`Face them, head held high.`],set:'faceCourt',fx:{rep:2},r:[
  D('mc','a',`Je suis {first} {last}. {g:Le fils|La fille|L'enfant} d'Isadora de Valcourt et d'Henri {last}. Et {g:le fils|la fille|l'enfant} d'Éléonore {last}, qui m'a {g:élevé|élevée|élevé·e} avec plus d'amour que je n'en méritais.`,`I am {first} {last}. The child of Isadora de Valcourt and Henri {last}. And the child of Éléonore {last}, who raised me with more love than I deserved.`),
  D('mc','a',`Quant à la fortune des Valcourt, Madame… je n'en veux pas un sou si elle doit me coûter ma famille.`,`As for the Valcourt fortune, Madam… I don't want a penny of it if it costs me my family.`),
  {st:['queen','mc']},
  D('queen','h',`Isadora aurait dit exactement la même chose. Mot pour mot.`,`Isadora would have said exactly the same thing. Word for word.`),
  {st:['iris','mc']},
  D('iris','a',`Tu le regretteras. Tu ne sais pas encore tout. Demande-leur comment Isadora est morte !`,`You'll regret this. You don't know everything yet. Ask them how Isadora died!`)
 ]},
 {t:[`Fuir le bal, loin de tous ces regards.`,`Flee the ball, away from all those eyes.`],set:'fledBall',r:[
  {bg:'terrace',mus:'tender',where:['Les jardins du palais','The palace gardens']},
  {st:['mc']},
  N(`Tu traverses la salle en courant, renverses une coupe de champagne, dévales les marches de la terrasse. Les larmes te brouillent la vue.`,`You run across the room, knock over a glass of champagne, rush down the terrace steps. Tears blur your vision.`),
  ...IF('danceLi1',[
   {st:['li1','mc']},
   N(`Des pas derrière toi. {li1} t'a {g:suivi|suivie|suivi·e}, sans se soucier des murmures.`,`Footsteps behind you. {li1} has followed you, heedless of the whispers.`),
   D('li1','s',`Je vous avais dit que je serais là. Après. Je suis là.`,`I told you I'd be there. Afterwards. I'm here.`)
  ],[
   ...IF('p1',[{st:['li1','mc']},N(`Des pas derrière toi. {li1} t'a {g:suivi|suivie|suivi·e}, sans se soucier des murmures.`,`Footsteps behind you. {li1} has followed you, heedless of the whispers.`),D('li1','s',`Je vous avais dit que je serais là. Après. Je suis là.`,`I told you I'd be there. Afterwards. I'm here.`)],
    [{st:['li2','mc']},N(`Une main attrape la tienne dans l'obscurité. {a:Mateo|Nell}.`,`A hand catches yours in the darkness. {a:Mateo|Nell}.`),D('li2','s',`Marguerite me l'avait dit : « Suis le lys. » Je crois que c'était vous, le lys. Depuis le début.`,`Marguerite told me: "Follow the lily." I think you were the lily. All along.`)])
  ]),
  D('mc','s',`Je ne sais plus qui je suis.`,`I don't know who I am any more.`),
  N(`On te serre fort. Longtemps. Au loin, le palais brille comme si rien ne s'était passé.`,`Someone holds you tight. For a long time. In the distance, the palace glitters as if nothing had happened.`)
 ]}
]),

{bg:'salon',mus:'mystery',card:['Plus tard','Later'],sub:['',''],where:['Grosvenor Street','Grosvenor Street']},
{st:['father','mother']},
N(`À trois heures du matin, vous êtes tous les trois assis dans le salon dévasté par la saisie. Plus personne ne fait semblant.`,`At three in the morning, the three of you sit in the drawing room stripped bare by the seizure. No one is pretending any more.`),
D('father','s',`Isadora est morte en te mettant au monde, {first}. Dans notre maison de la rue de Varenne. J'ai tenu sa main jusqu'au bout.`,`Isadora died bringing you into the world, {first}. In our house on the Rue de Varenne. I held her hand until the end.`),
D('mother','s',`Et le lendemain, je t'ai {g:pris|prise|pris·e} dans mes bras. Je n'ai jamais pu te lâcher depuis.`,`And the next day, I took you in my arms. I've never been able to let go since.`),
...IF('warmMother',[D('mc','h',`Je ne vous demande pas de me lâcher, Mère.`,`I'm not asking you to let go, Mother.`)]),
D('father','a',`Mais Iris ment sur une chose. Isadora n'est pas morte seulement de l'accouchement. Quelqu'un lui avait donné un remède, ce soir-là. Un remède envoyé par sa propre sœur.`,`But Iris is lying about one thing. Isadora didn't die only from childbirth. Someone had given her a remedy that night. A remedy sent by her own sister.`),
D('mc','o',`Iris… a empoisonné Isadora ?`,`Iris… poisoned Isadora?`),
D('father','s',`Je n'ai jamais pu le prouver. C'est pour ça que nous avons fui Paris. Pour te protéger d'elle. Et maintenant, elle sait exactement où tu es.`,`I could never prove it. That's why we fled Paris. To protect you from her. And now she knows exactly where you are.`),
{st:['mc']},
N(`Par la fenêtre, l'aube se lève sur Londres. Pour la première fois depuis ton arrivée, tu sais qui tu es.`,`Through the window, dawn breaks over London. For the first time since you arrived, you know who you are.`),
D('mc','a',`(Je suis l'enfant d'Isadora de Valcourt. Et je découvrirai ce qui lui est arrivé. Quoi qu'il en coûte.)`,`(I am Isadora de Valcourt's child. And I'll find out what happened to her. Whatever it costs.)`),
{end:7}
);
