/* ===== CHAPITRE 11 — La traversée vers Paris ===== */
STORY.push(
{bg:'ship',mus:'calm',chap:11,card:['Chapitre 11','Chapter 11'],sub:['Cap sur Paris','Bound for Paris'],where:['Le brick des Pembroke','The Pembroke brig']},
{st:['clem','theo']},
N(`Vendredi, à l'aube. Le brick de Lord Pembroke glisse sur la Tamise dans la brume. À bord : Clem, Théo, Cordelia, Bess… et {lv}, qui a menti à tout Londres pour être là.`,`Friday, at dawn. Lord Pembroke's brig glides down the Thames through the mist. On board: Clem, Theo, Cordelia, Bess… and {lv}, who lied to all of London to be here.`),
D('clem','h',`Georgie a refusé de venir. Lord Fairfax l'a invitée à voir ses chevaux. Encore. On a perdu une mousquetaire.`,`Georgie refused to come. Lord Fairfax invited her to see his horses. Again. We've lost a musketeer.`),
D('theo','s',`Moi, je suis là pour vérifier que personne ne tombe à l'eau. Clem a le pied marin d'une vache.`,`I'm here to make sure nobody falls overboard. Clem has the sea legs of a cow.`),
D('clem','a',`Je n'ai jamais été malade en mer !`,`I've never been seasick!`),
N(`Une heure plus tard, Clem est penchée par-dessus le bastingage, verte comme sa robe.`,`An hour later, Clem is leaning over the rail, as green as her dress.`),
C('c11a',0,[
 {t:[`Lui tenir les cheveux et lui frotter le dos.`,`Hold her hair and rub her back.`],set:'clemCare',r:[D('clem','s',`Tu es une vraie amie. La seule. Ne dis rien à Théo.`,`You're a true friend. The only one. Don't tell Theo.`),D('theo','h',`Trop tard.`,`Too late.`)]},
 {t:[`Lui proposer le gingembre confit de Bess.`,`Offer her Bess's candied ginger.`],fx:{bess:1},r:[D('bess','h',`Ma grand-mère jurait que ça guérit tout. Le mal de mer, les chagrins d'amour et les cors aux pieds.`,`My grandmother swore it cures everything. Seasickness, heartbreak and corns.`)]}
]),
{st:['cordelia','mc']},
D('cordelia','h',`Tu as bien pris tous tes papiers ? Les lettres de Maître Dorval, la lettre d'Isadora ?`,`Did you bring all your papers? Mr Dorval's letters, Isadora's letter?`),
D('mc','n',`Tout est dans ma malle.`,`Everything's in my trunk.`),
D('cordelia','h',`Tant mieux. Je dors dans la cabine à côté. Si tu entends du bruit… ce sera moi qui ronfle.`,`Good. I'm sleeping in the cabin next door. If you hear a noise… it'll be me snoring.`),

{bg:'ship',mus:'mystery',card:['La nuit','Night'],sub:['La tempête','The Storm'],where:['Sur le pont','On deck']},
{st:['mc']},
N(`À la nuit tombée, le ciel se déchire. Le vent hurle dans les voiles, les vagues frappent la coque comme des poings. Impossible de dormir.`,`At nightfall, the sky tears open. The wind howls in the sails, waves pound the hull like fists. Sleep is impossible.`),
N(`Tu montes sur le pont pour respirer. Une vague plus haute que les autres balaie le pont, et tes pieds glissent sur le bois mouillé…`,`You go up on deck for air. A wave taller than the rest sweeps the deck, and your feet slide on the wet wood…`),
{st:['lv','mc']},
N(`Une main t'attrape par le poignet au dernier moment. {lv}, trempé{a:|e} jusqu'aux os, qui te tire contre {a:lui|elle} et vous plaque tous les deux contre le grand mât.`,`A hand catches your wrist at the last moment. {lv}, soaked to the bone, pulls you against {a:him|her} and pins you both against the mainmast.`),
D('lv','a',`Vous êtes {g:fou|folle|fou·folle} ?! Qu'est-ce que vous faites dehors ?`,`Are you mad?! What are you doing out here?`),
D('mc','o',`Et vous ?!`,`What about you?!`),
D('lv','s',`Je vous ai {g:vu|vue|vu·e} sortir. Je vous suivrais n'importe où. Même sur un pont glissant au milieu d'une tempête. C'est très inconfortable, d'ailleurs.`,`I saw you come out. I'd follow you anywhere. Even onto a slippery deck in the middle of a storm. It's very uncomfortable, by the way.`),
...IF('doubtLv',[
 D('mc','s',`Au bal des Pembroke… je vous ai {a:fui|fuie}. Cordelia m'avait montré un papier. Contre vous.`,`At the Pembroke ball… I ran from you. Cordelia had shown me a paper. Against you.`),
 D('lv','s',`Je sais. Je l'ai compris le lendemain. J'ai attendu que vous me le disiez vous-même.`,`I know. I worked it out the next day. I waited for you to tell me yourself.`),
 ...IF('danceLi1',[D('lv','a',`C'est un faux. Ma mère n'a jamais signé de contrat pour moi. Elle préférerait se marier elle-même avec un ours.`,`It's a forgery. My mother has never signed any contract for me. She'd rather marry a bear herself.`)],[D('lv','a',`Je n'ai jamais touché un sou d'Iris. Je préférerais mourir de faim chez Fleury.`,`I've never taken a penny from Iris. I'd rather starve at Fleury's.`)]),
 D('mc','s',`Pardonnez-moi. J'aurais dû vous croire.`,`Forgive me. I should have believed you.`),
 D('lv','h',`C'est déjà fait. Depuis longtemps.`,`Already done. Long ago.`)
]),
N(`Le navire tangue. Tu te retrouves blotti{e} contre {lv}, ton cœur cogne aussi fort que les vagues. La pluie ruisselle sur vos visages.`,`The ship lurches. You end up pressed against {lv}, your heart pounding as hard as the waves. Rain streams down your faces.`),
C('m21',1,[
 {t:[`Lui dire « Je vous aime ». Maintenant, au milieu de la tempête.`,`Tell {a:him|her} "I love you". Now, in the middle of the storm.`],set:'sayLove',fx:{lv:3},r:[
  D('mc','a',`Je vous aime ! Voilà. Je voulais le dire dans un jardin, avec des roses, mais tant pis !`,`I love you! There. I wanted to say it in a garden, with roses, but never mind!`),
  N(`{lv} te regarde, incrédule. Puis {a:il|elle} éclate de rire, un rire que la tempête emporte, et t'embrasse sous la pluie.`,`{lv} stares at you, incredulous. Then {a:he|she} bursts out laughing, a laugh the storm carries away, and kisses you in the rain.`),
  D('lv','h',`Je vous aime aussi. Depuis le premier soir. Les roses, on s'en passera.`,`I love you too. Since the very first night. We'll do without the roses.`)
 ]},
 {t:[`Te taire, et simplement le serrer fort.`,`Say nothing, and simply hold {a:him|her} tight.`],set:'holdLv',fx:{lv:2},r:[
  N(`Tu ne dis rien. Tu enfouis ton visage dans son cou et tu le serres de toutes tes forces. {lv} pose son menton sur ta tête.`,`You say nothing. You bury your face in {a:his|her} neck and hold {a:him|her} with all your strength. {lv} rests {a:his|her} chin on your head.`),
  D('lv','s',`Pas besoin de mots. Je les entends quand même.`,`No need for words. I hear them anyway.`)
 ]}
]),
{st:['mc']},
N(`Quand vous redescendez enfin, trempés et souriants, tu trouves la porte de ta cabine entrouverte. Ta malle est fermée. Exactement comme tu l'as laissée. Enfin… presque. La boucle de cuir est attachée à l'envers.`,`When you finally go back below, soaked and smiling, you find your cabin door ajar. Your trunk is closed. Exactly as you left it. Well… almost. The leather strap is buckled the wrong way.`),
...IF('trustCordelia',[N(`Dans la cabine voisine, aucun ronflement. Juste le silence.`,`In the next cabin, no snoring. Only silence.`)]),

{bg:'paris',mus:'tender',card:['Paris','Paris'],sub:['Trois jours plus tard','Three days later'],where:['Les quais de la Seine','The banks of the Seine']},
{st:['clem','theo']},
N(`Paris. Les tours de Notre-Dame dans la brume du matin, les bateaux-lavoirs sur la Seine, l'odeur du pain chaud et de la boue. Ta ville natale, que tu ne reconnais pas.`,`Paris. The towers of Notre-Dame in the morning mist, laundry boats on the Seine, the smell of warm bread and mud. Your birthplace, which you don't recognise.`),
D('clem','h',`C'est… plus sale que je pensais. Mais les chapeaux ! Théo, regarde les chapeaux !`,`It's… dirtier than I thought. But the hats! Theo, look at the hats!`),
D('theo','n',`On a deux pistes : la paroisse de Saint-Sulpice pour l'acte de baptême, et l'ancien hôtel des Valcourt, rue de Varenne. On se sépare pour gagner du temps ?`,`We have two leads: the parish of Saint-Sulpice for the baptism record, and the old Valcourt house on the Rue de Varenne. Shall we split up to save time?`),
D('theo','s',`{lv} et moi, on prend Saint-Sulpice. Toi, tu vas rue de Varenne. Avec qui ?`,`{lv} and I will take Saint-Sulpice. You go to the Rue de Varenne. With whom?`),
{st:['cordelia','clem']},
D('cordelia','h',`Avec moi ! Clem est encore verte, elle a besoin de se reposer.`,`With me! Clem is still green, she needs to rest.`),
D('clem','a',`Je suis en pleine forme ! … Enfin, presque.`,`I'm in perfect shape! … Well, nearly.`),
C('m22',1,[
 {t:[`Partir avec Cordelia.`,`Go with Cordelia.`],set:'bringCordelia',r:[D('cordelia','h',`Parfait ! On fera une équipe formidable, tu verras.`,`Perfect! We'll make a wonderful team, you'll see.`),D('clem','s',`Bon. Je vais m'allonger. Ramenez-moi un chapeau.`,`Fine. I'll go and lie down. Bring me back a hat.`)]},
 {t:[`Partir avec Clem, même verte.`,`Go with Clem, green or not.`],set:'bringClem',r:[D('clem','h',`Ha ! Tu vois, Cordelia ? Elle me préfère. Même verte.`,`Ha! See, Cordelia? She prefers me. Even green.`),D('cordelia','h',`Bien sûr. Je garderai les bagages. Quelqu'un doit le faire.`,`Of course. I'll mind the luggage. Someone has to.`),N(`Cordelia sourit. Elle reste seule sur le quai, à côté de ta malle.`,`Cordelia smiles. She stays alone on the quay, beside your trunk.`)]}
]),
{end:11}
);
