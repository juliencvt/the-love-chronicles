/* ===== SAISON 2 — CHAPITRE 14 — Les Larmes de Valcourt ===== */
STORY.push(
{bg:'cellar',mus:'mystery',chap:36,card:['Saison 2 · Chapitre 14','Season 2 · Chapter 14'],sub:['Les Larmes de Valcourt','The Tears of Valcourt'],where:['La crypte des Valcourt','The Valcourt crypt']},
{st:['iris','mc']},
N(`Iris descend les dernières marches, lentement. Le canon de son pistolet ne te quitte pas. Elle a maigri depuis Newgate. Ses yeux brillent d'une lueur que tu ne lui connaissais pas. La lueur de quelqu'un qui n'a plus rien à perdre.`,`Iris comes down the last steps, slowly. The barrel of her pistol never leaves you. She's grown thinner since Newgate. Her eyes shine with a light you've never seen in them. The light of someone with nothing left to lose.`),
...IF('guardEntrance',[D('iris','h',`Tes gardes surveillent l'escalier de la chapelle. Charmant. Mais cette crypte a une autre entrée, par le vieux cimetière. Isadora me l'a montrée quand nous avions dix ans. Elle l'a sans doute oubliée. Moi, je n'oublie rien.`,`Your guards are watching the chapel stairs. Charming. But this crypt has another entrance, through the old graveyard. Isadora showed it to me when we were ten. She probably forgot. I forget nothing.`)],[D('iris','h',`Tout seuls, tous les deux, dans le noir. Isadora t'avait pourtant prévenu{g:|e|·e} : « Ne descends pas seul{g:|e|·e}. » Elle avait toujours raison. C'était insupportable.`,`Alone, the two of you, in the dark. Isadora warned you: "Don't go down alone." She was always right. It was unbearable.`)]),
D('iris','a',`Ces perles devaient me revenir. Notre père me les avait promises, à moi, l'aînée. Puis Isadora a chanté devant lui, et il a tout oublié. Les perles. Moi. Tout.`,`Those pearls should have been mine. Our father promised them to me, the elder. Then Isadora sang for him, and he forgot everything. The pearls. Me. Everything.`),
{st:['fi','mc']},
D('fi','n',`(tout bas) Je vais m'avancer. Quand elle me regardera, tu cours vers l'escalier.`,`(very low) I'm going to step forward. When she looks at me, you run for the stairs.`),
D('mc','o',`(tout bas) Pas question. On sort ensemble ou pas du tout.`,`(very low) Out of the question. We leave together or not at all.`),
C('m71',1,[
 {t:[`Tendre les perles à Iris. Rien ne vaut la vie de {fi}.`,`Hold out the pearls to Iris. Nothing is worth {fi}'s life.`],set:'givePearls',r:[
  D('mc','a',`Prenez-les. Prenez-les et partez. Elles ne valent pas une goutte de son sang.`,`Take them. Take them and go. They're not worth a drop of {a:his|her} blood.`),
  N(`Iris arrache le collier de tes mains. Elle sourit. Puis, sans prévenir, elle lève son pistolet vers toi.`,`Iris snatches the necklace from your hands. She smiles. Then, without warning, she raises her pistol at you.`),
  D('iris','a',`Tu croyais vraiment que les perles me suffiraient ? Tant que tu respires, Isadora respire.`,`Did you really think the pearls would be enough for me? As long as you breathe, Isadora breathes.`),
  {set:'irisHasPearls'}
 ]},
 {t:[`Refuser, et gagner du temps en la faisant parler.`,`Refuse, and play for time by getting her to talk.`],set:'stallIris',fx:{vig:1},r:[
  D('mc','n',`Si vous tirez, vous ne retrouverez jamais le mécanisme pour les sortir de la cachette. Regardez : je l'ai refermée. Parlez-moi d'abord. Parlez-moi d'elle. Personne ne vous a jamais écoutée, n'est-ce pas ?`,`If you shoot, you'll never find the mechanism to get them out of the hiding place. Look: I've closed it again. Talk to me first. Tell me about her. Nobody has ever listened to you, have they?`),
  N(`Pendant une seconde, une seule, le pistolet baisse. Iris ouvre la bouche. Quelque chose passe dans ses yeux. De la tristesse, peut-être.`,`For a second, just one, the pistol lowers. Iris opens her mouth. Something passes through her eyes. Sadness, perhaps.`),
  D('iris','a',`… Non. Pas de ça. Tu ne m'auras pas comme elle les avait tous.`,`… No. None of that. You won't get me the way she got all of them.`),
  N(`Elle relève l'arme vers toi.`,`She raises the weapon at you again.`)
 ]}
]),
N(`Le coup part. Un éclair, un bruit de tonnerre qui fait trembler la crypte.`,`The shot goes off. A flash, a thunderclap that shakes the crypt.`),
N(`{fi} s'est jeté{a:|e} devant toi. {a:Il|Elle} vacille, porte la main à son épaule. Du sang, entre ses doigts. Beaucoup de sang.`,`{fi} has thrown {a:himself|herself} in front of you. {a:He|She} staggers, clutches {a:his|her} shoulder. Blood between {a:his|her} fingers. A lot of blood.`),
D('mc','a',`NON !`,`NO!`),
...IF('guardEntrance',[
 {st:['theo','alistair']},
 N(`Des pas dans l'escalier de la chapelle. Théo et Lord Grey dévalent les marches, pistolets au poing, Clem derrière eux, ombrelle levée comme une épée.`,`Footsteps on the chapel stairs. Theo and Lord Grey charge down the steps, pistols in hand, Clem behind them, parasol raised like a sword.`),
 D('alistair','a',`Lâchez cette arme, Madame. Je ne vous raterai pas. J'ai calculé.`,`Drop that weapon, Madame. I won't miss you. I've done the calculations.`),
 N(`Iris recule dans l'ombre, vers le passage du cimetière. Elle disparaît. Les gardes du château se lancent à sa poursuite.`,`Iris backs into the shadows, towards the graveyard passage. She vanishes. The château guards give chase.`)
],[
 N(`Iris recule vers le passage du cimetière. Un bruit de cavalcade en haut de l'escalier : Gaspard a entendu le coup de feu et ameute tout le château. Iris disparaît dans le noir.`,`Iris backs towards the graveyard passage. A clatter of feet at the top of the stairs: Gaspard heard the shot and is rousing the whole château. Iris vanishes into the dark.`)
]),
...IF('irisHasPearls',[N(`Avec les Larmes de Valcourt.`,`With the Tears of Valcourt.`)],[N(`Les perles, elles, sont toujours dans la cachette de l'ange. Elle n'a rien emporté.`,`The pearls are still in the angel's hiding place. She took nothing.`),{set:'pearlsSafe'}]),

{st:['fi','mc']},
N(`Tu t'agenouilles près de {fi}, qui s'est laissé{a:|e} glisser contre le tombeau de ton grand-père. Son visage est gris. Mais {a:il|elle} sourit.`,`You kneel beside {fi}, who has slid down against your grandfather's tomb. {a:His|Her} face is grey. But {a:he's|she's} smiling.`),
D('fi','h',`Ça va. C'est l'épaule. J'ai… j'ai connu pire. Non, en fait, je n'ai jamais connu pire. Ça fait un mal de chien.`,`I'm fine. It's the shoulder. I've… I've known worse. No, actually, I've never known worse. It hurts like the devil.`),
D('mc','s',`Tu t'es jeté{a:|e} devant une balle. Pour moi. Espèce d'idiot{a:|e}.`,`You threw yourself in front of a bullet. For me. You idiot.`),
D('fi','s',`« Ensemble ou pas du tout. » C'est toi qui l'as dit.`,`"Together or not at all." You said it yourself.`),
{bg:'bedroom',mus:'tender',where:['La chambre d\'Isadora','Isadora\'s bedroom']},
{st:['gaspard','mc']},
N(`Théo et Gaspard portent {fi} jusqu'à la chambre d'Isadora. Clem court chercher de l'eau chaude. La balle est ressortie. La blessure est propre, mais profonde.`,`Theo and Gaspard carry {fi} up to Isadora's room. Clem runs for hot water. The bullet went straight through. The wound is clean, but deep.`),
D('gaspard','n',`Le médecin du village est à deux heures d'ici. Et c'est un ivrogne. Je l'ai vu avec des écus neufs dans la poche, la semaine dernière.`,`The village doctor is two hours away. And he's a drunkard. I saw him with new coins in his pocket last week.`),
C('m72',1,[
 {t:[`« Je vais {a:le|la} soigner moi-même. Montrez-moi comment. »`,`"I'll tend to {a:him|her} myself. Show me how."`],set:'nurseSelf',fx:{fi:2,vig:1},r:[D('gaspard','s',`Votre mère soignait les blessés du village pendant la Révolution. Elle avait des mains de fée. Vous les avez aussi. Je vais vous montrer.`,`Your mother nursed the village wounded during the Revolution. She had healing hands. You have them too. I'll show you.`)]},
 {t:[`Envoyer quand même chercher le médecin, en le faisant surveiller.`,`Send for the doctor anyway, but have him watched.`],set:'callDoctor',r:[D('gaspard','n',`Bien. Théo l'accompagnera, pistolet en poche. En attendant, il faut nettoyer la plaie. Et c'est vous qu'{a:il|elle} réclame.`,`Very well. Theo will go with him, pistol in pocket. Meanwhile, the wound must be cleaned. And it's you {a:he's|she's} asking for.`)]}
]),
{end:36}
);
