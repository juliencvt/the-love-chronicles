/* ===== SAISON 2 — CHAPITRE 20 — La veille ===== */
STORY.push(
{bg:'bedroom',mus:'tender',chap:42,card:['Saison 2 · Chapitre 20','Season 2 · Chapter 20'],sub:['La veille','The Eve'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`La veille du mariage. La maison bourdonne comme une ruche : des fleurs partout, des malles, des domestiques qui courent, ta tenue de mariage suspendue près de la fenêtre comme un fantôme heureux.`,`The eve of the wedding. The house hums like a beehive: flowers everywhere, trunks, servants running, your wedding attire hanging by the window like a happy ghost.`),
D('bess','h',`Un paquet du Yorkshire ! Avec un mot de Georgie.`,`A parcel from Yorkshire! With a note from Georgie.`),
N(`« Je ne peux pas venir, la jument de Fairfax va pouliner et il refuse de la laisser. Les hommes ! Voici mon cadeau : un ruban bleu, pour la tradition. Quelque chose de bleu. Porte-le pour moi. Je pleurerai à midi pile, en pensant à toi. — G. »`,`"I can't come, Fairfax's mare is about to foal and he refuses to leave her. Men! Here's my present: a blue ribbon, for tradition. Something blue. Wear it for me. I'll cry at noon on the dot, thinking of you. — G."`),
D('bess','s',`Quelque chose de bleu, quelque chose d'ancien, quelque chose de neuf, quelque chose d'emprunté. Le bleu, c'est fait. L'ancien, c'est la broche d'Isadora. Le neuf, c'est la tenue. L'emprunté…`,`Something blue, something old, something new, something borrowed. Blue is done. Old is Isadora's brooch. New is the attire. Borrowed…`),
{st:['mother','mc']},
N(`Ta mère entre, une petite boîte à la main. Elle s'assied sur le lit, à côté de toi, comme quand tu étais enfant.`,`Your mother comes in, a small box in her hand. She sits on the bed beside you, as she did when you were a child.`),
D('mother','s',`Quelque chose d'emprunté. Mon alliance. Celle que ton père m'a passée au doigt, il y a dix-sept ans. Je te la prête pour demain. Rends-la-moi, hein. J'y tiens.`,`Something borrowed. My wedding ring. The one your father put on my finger seventeen years ago. I'm lending it to you for tomorrow. Give it back, mind. I'm fond of it.`),
C('m83',1,[
 {t:[`Lui demander, enfin, comment elle a vécu tout ça : t'élever, savoir, se taire.`,`Ask her, at last, how she lived through it all: raising you, knowing, keeping quiet.`],set:'askMother',fx:{rep:1},r:[
  D('mother','s',`Le premier soir, quand ton père est arrivé avec toi dans les bras, j'aurais dû le détester. Toi aussi. Tu étais la preuve qu'il en avait aimé une autre.`,`The first night, when your father arrived with you in his arms, I should have hated him. You too. You were proof he'd loved another woman.`),
  D('mother','s',`Puis tu as attrapé mon doigt. Avec ta toute petite main. Et tu ne l'as plus lâché. Et c'était fini. Je t'ai aimé{g:|e|·e} avant même de savoir comment tu t'appelais.`,`Then you grabbed my finger. With your tiny little hand. And you didn't let go. And that was that. I loved you before I even knew your name.`),
  N(`Tu poses ta tête sur son épaule. Vous restez comme ça longtemps, sans rien dire, pendant que la maison s'agite autour de vous.`,`You rest your head on her shoulder. You stay like that for a long time, saying nothing, while the house bustles around you.`)
 ]},
 {t:[`La serrer très fort, sans un mot.`,`Hold her very tight, without a word.`],set:'hugMother',fx:{rep:1},r:[N(`Tu la serres si fort qu'elle rit. Puis elle ne rit plus. Elle pleure, et toi aussi, et c'est très bien comme ça.`,`You hold her so tight she laughs. Then she stops laughing. She cries, and so do you, and that's exactly right.`)]}
]),

{bg:'cathedral',mus:'mystery',card:['Le soir','Evening'],sub:['',''],where:['L\'église Saint-George','St George\'s church']},
{st:['theo','mc']},
N(`Le soir, Théo passe te chercher. Il a l'air soucieux.`,`In the evening, Theo comes to fetch you. He looks worried.`),
D('theo','n',`Je vais inspecter l'église une dernière fois avec deux constables. Les recoins, la sacristie, la crypte, le clocher. Tu veux venir ? Ou tu préfères dormir ? Personne ne t'en voudra. Demain est un grand jour.`,`I'm going to inspect the church one last time with two constables. The corners, the vestry, the crypt, the bell tower. Do you want to come? Or would you rather sleep? Nobody would blame you. Tomorrow is a big day.`),
C('m84',1,[
 {t:[`Venir. Tu veux voir chaque recoin de tes propres yeux.`,`Come. You want to see every corner with your own eyes.`],set:'inspectChurch',fx:{vig:2},r:[
  N(`L'église est sombre, silencieuse, pleine de fleurs blanches déjà installées pour demain. Vous fouillez tout. Derrière l'orgue, tu trouves une petite fiole vide, roulée sous un banc.`,`The church is dark, silent, full of white flowers already arranged for tomorrow. You search everything. Behind the organ, you find a small empty phial, rolled under a pew.`),
  D('theo','a',`Elle est déjà venue. Elle a repéré les lieux. Elle sait où sera la coupe.`,`She's already been here. She's scouted the place. She knows where the cup will be.`),
  D('mc','n',`Alors demain, la coupe ne sera pas là où elle croit. Changeons tout. L'autel, l'ordre de la cérémonie, tout.`,`Then tomorrow, the cup won't be where she thinks. Let's change everything. The altar, the order of the ceremony, everything.`),
  {set:'churchChanged'}
 ]},
 {t:[`Rester à la maison et te reposer. Tu fais confiance à Théo.`,`Stay home and rest. You trust Theo.`],set:'restEve',fx:{fi:1},r:[
  D('mc','h',`Je te fais confiance, Théo. Je vais essayer de dormir. Essayer.`,`I trust you, Theo. I'll try to sleep. Try.`),
  D('theo','h',`Dors. Demain, tu devras être éveillé{g:|e|·e} pour dire « oui ». C'est le seul travail qu'on te demande.`,`Sleep. Tomorrow, you'll need to be awake to say "yes". That's the only job anyone's asking of you.`)
 ]}
]),

{bg:'bedroom',mus:'tender',card:['Minuit','Midnight'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['mc']},
N(`Minuit. Tu n'arrives pas à dormir. Tu regardes ta tenue de mariage dans le clair de lune. Demain, tu seras marié{g:|e|·e}. Demain, tu seras {g:le mari|la femme|l'époux·se} de {fi}.`,`Midnight. You can't sleep. You look at your wedding attire in the moonlight. Tomorrow, you'll be married. Tomorrow, you'll belong to {fi}, and {fi} to you.`),
N(`Un caillou contre la vitre. Tu souris avant même de regarder. Sous ta fenêtre, {fi}, en chemise de nuit et manteau, une lanterne à la main.`,`A pebble against the glass. You're smiling before you even look. Below your window, {fi}, in nightshirt and coat, lantern in hand.`),
D('fi','h',`Je ne monte pas. Je ne te regarde même pas. Je regarde le mur. Je voulais juste te dire bonne nuit. La dernière bonne nuit avant toutes les autres.`,`I'm not coming up. I'm not even looking at you. I'm looking at the wall. I just wanted to say goodnight. The last goodnight before all the others.`),
D('mc','h',`Bonne nuit, {fi}.`,`Goodnight, {fi}.`),
D('fi','s',`À demain. Je serai {a:celui|celle} qui pleure au bout de l'allée. Tu ne pourras pas me rater.`,`Until tomorrow. I'll be the one crying at the end of the aisle. You can't miss me.`),
N(`{fi} repart dans la nuit en sifflotant la berceuse d'Isadora. Faux. Toujours faux. Tu t'endors avec un sourire.`,`{fi} walks off into the night whistling Isadora's lullaby. Off-key. Always off-key. You fall asleep smiling.`),
{end:42}
);
