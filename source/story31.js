/* ===== SAISON 2 — CHAPITRE 9 — Le château de Valcourt ===== */
STORY.push(
{bg:'chateau',mus:'tender',chap:31,card:['Saison 2 · Chapitre 9','Season 2 · Chapter 9'],sub:['Le château de Valcourt','Château de Valcourt'],where:['Le château de Valcourt','Château de Valcourt']},
{st:['mc']},
N(`Le château est plus grand que dans tes rêves. Et plus triste. Des volets fermés, des herbes folles entre les pavés de la cour, une fontaine à sec où des pigeons ont fait leur nid.`,`The château is bigger than in your dreams. And sadder. Closed shutters, weeds between the cobbles of the courtyard, a dry fountain where pigeons have built their nests.`),
N(`Sur le perron, un très vieil homme t'attend, appuyé sur une canne. Il te regarde descendre de la voiture. Puis il retire son chapeau, lentement, et ses yeux se remplissent de larmes.`,`On the steps, a very old man is waiting, leaning on a cane. He watches you step down from the carriage. Then he slowly removes his hat, and his eyes fill with tears.`),
D('gaspard','s',`Bienvenue chez vous, {g:Monsieur|Mademoiselle|Mademoiselle·Monsieur}. Je m'appelle Gaspard. J'étais l'intendant de votre grand-père. Et de votre mère. J'ai attendu dix-huit ans que quelqu'un revienne.`,`Welcome home. My name is Gaspard. I was your grandfather's steward. And your mother's. I've waited eighteen years for someone to come back.`),
D('gaspard','a',`Une dame en noir est venue avant-hier. Elle a dit qu'elle était la maîtresse du château. Je lui ai fermé la porte au nez. Elle a menacé de me faire pendre. Je lui ai dit que j'avais quatre-vingts ans et que je n'avais plus peur de grand-chose.`,`A lady in black came the day before yesterday. She said she was mistress of the château. I shut the door in her face. She threatened to have me hanged. I told her I was eighty and not afraid of much any more.`),
C('c31a',0,[
 {t:[`Serrer les mains du vieil homme dans les tiennes.`,`Clasp the old man's hands in yours.`],fx:{rep:1},r:[D('gaspard','s',`Vous avez ses mains. Les mains de Mademoiselle Isadora.`,`You have her hands. Mademoiselle Isadora's hands.`)]},
 {t:[`« Iris est-elle encore dans la région ? »`,`"Is Iris still in the area?"`],fx:{vig:1},r:[D('gaspard','n',`On l'a vue à l'auberge du village. Elle paie bien. Trop bien. Méfiez-vous de tous ceux qui ont des écus neufs dans les poches.`,`She's been seen at the village inn. She pays well. Too well. Beware of anyone with new coins in their pockets.`)]}
]),
{bg:'salon',mus:'tender',where:['Le grand salon','The great hall']},
{st:['clem','theo']},
N(`À l'intérieur, tout est couvert de draps blancs, comme des fantômes endormis. Clem soulève un coin : un clavecin doré. Théo, un autre : un portrait.`,`Inside, everything is draped in white sheets, like sleeping ghosts. Clem lifts a corner: a gilded harpsichord. Theo lifts another: a portrait.`),
N(`Une jeune femme brune, en robe blanche, une partition à la main. Elle sourit comme si elle venait d'apprendre un secret. Tu as son menton. Ses yeux. Tu le sais avant même de lire la plaque : « Isadora, 1792 ».`,`A dark-haired young woman in a white gown, sheet music in her hand. She's smiling as if she's just learned a secret. You have her chin. Her eyes. You know it before you even read the plate: "Isadora, 1792".`),
D('clem','o',`C'est toi. C'est exactement toi.`,`It's you. It's exactly you.`),
D('gaspard','n',`Le maire viendra demain pour la cérémonie de prise de possession. Il vous faudra signer le registre et recevoir les clés. Après ça, le château sera à vous. Pas une seconde avant.`,`The mayor will come tomorrow for the ceremony of taking possession. You'll have to sign the register and receive the keys. After that, the château is yours. Not a second before.`),
D('gaspard','s',`Cette nuit, il faudra tout de même dormir ici. Je n'ai qu'une seule chambre prête : celle de Mademoiselle Isadora. Je l'ai entretenue tous les jours. Au cas où.`,`Tonight, you'll have to sleep here all the same. I've only one bedroom ready: Mademoiselle Isadora's. I've kept it every day. Just in case.`),
C('m61',1,[
 {t:[`Dormir dans la chambre d'Isadora.`,`Sleep in Isadora's room.`],set:'isaRoom',fx:{fi:1},r:[
  {bg:'bedroom',mus:'tender',where:['La chambre d\'Isadora','Isadora\'s bedroom']},
  N(`La chambre sent la lavande séchée et la cire. Un grand lit à baldaquin, une coiffeuse, un miroir ovale piqué de taches. Sur la table de nuit, une partition ouverte, comme si elle allait revenir d'une minute à l'autre.`,`The room smells of dried lavender and beeswax. A great four-poster bed, a dressing table, an oval mirror spotted with age. On the bedside table, an open score, as if she might come back any minute.`),
  D('mc','s',`(Je dors dans le lit de ma mère. La mère que je n'ai jamais connue. Je devrais avoir peur. Je me sens… chez moi.)`,`(I'm sleeping in my mother's bed. The mother I never knew. I should be afraid. I feel… at home.)`)
 ]},
 {t:[`Laisser la chambre telle quelle et dormir au salon avec les autres.`,`Leave the room as it is and sleep in the hall with the others.`],set:'hallNight',fx:{vig:1},r:[
  N(`Vous installez des matelas devant la grande cheminée, comme des enfants en colonie. Les gardes se relaient à la porte. Clem raconte des histoires de fantômes jusqu'à ce que Théo la supplie d'arrêter.`,`You lay mattresses in front of the great fireplace, like children at camp. The guards take turns at the door. Clem tells ghost stories until Theo begs her to stop.`),
  D('mc','s',`(Pas encore. Je ne suis pas prêt{e} à dormir dans son lit. Demain, peut-être.)`,`(Not yet. I'm not ready to sleep in her bed. Tomorrow, perhaps.)`)
 ]}
]),

{bg:'chateau',mus:'tender',card:['Le lendemain','The next day'],sub:['',''],where:['La cour d\'honneur','The main courtyard']},
{st:['gaspard','mc']},
N(`Le maire arrive à midi, ceint de son écharpe tricolore, suivi de la moitié du village, curieuse de voir l'héritier{g:|e|·e} revenu{g:|e|·e} d'Angleterre.`,`The mayor arrives at noon, wearing his tricolour sash, followed by half the village, curious to see the heir back from England.`),
N(`Tu signes le registre. Le maire te remet un anneau de clés de fer, lourd comme une ancre. Les villageois applaudissent. Quelqu'un crie « Vive Valcourt ! ».`,`You sign the register. The mayor hands you a ring of iron keys, heavy as an anchor. The villagers applaud. Someone shouts "Long live Valcourt!".`),
D('gaspard','h',`C'est fait. Le château est à vous. Iris ne peut plus rien réclamer.`,`It's done. The château is yours. Iris can claim nothing more.`),
D('gaspard','n',`Mais elle n'est pas venue pour le château, à mon avis. Elle a fouillé le parc pendant des nuits, avant votre arrivée. Elle cherche quelque chose.`,`But I don't think she came for the château. She searched the grounds for nights before you arrived. She's looking for something.`),
D('gaspard','s',`Les clés… Voulez-vous que je les garde, comme avant ? Ou préférez-vous les garder vous-même ?`,`The keys… Shall I keep them, as before? Or would you rather keep them yourself?`),
C('m62',1,[
 {t:[`Les confier à Gaspard. Il a gardé ce château dix-huit ans.`,`Entrust them to Gaspard. He's guarded this château for eighteen years.`],set:'trustGaspard',fx:{rep:1},r:[D('gaspard','s',`Merci. Vous ne le regretterez pas. Personne ne passera ces portes sans que je le sache.`,`Thank you. You won't regret it. No one will pass these doors without my knowing.`)]},
 {t:[`Les garder sur toi, jour et nuit.`,`Keep them on you, day and night.`],set:'keepKeys',fx:{vig:1},r:[D('gaspard','h',`Sage. Votre mère, elle, perdait toujours ses clés. Elle les retrouvait dans le piano.`,`Wise. Your mother was always losing her keys. She'd find them in the piano.`)]}
]),

{bg:'chateau',mus:'tender',card:['Au coucher du soleil','At sunset'],sub:['',''],where:['Le bord de la Loire','The banks of the Loire']},
{st:['fi','mc']},
N(`Au coucher du soleil, {fi} t'emmène au bord de la Loire, au bout du parc. Le fleuve est doré, paresseux. Des hirondelles rasent l'eau.`,`At sunset, {fi} takes you down to the Loire, at the far end of the park. The river is golden and lazy. Swallows skim the water.`),
D('fi','s',`Tu te rends compte ? Tout ça est à toi. Les arbres, le fleuve, les hirondelles…`,`Do you realise? All of this is yours. The trees, the river, the swallows…`),
D('mc','h',`À nous. Dans un mois, ce sera à nous.`,`Ours. In a month, it'll be ours.`),
N(`{fi} se tait. Tu vois sa gorge se serrer. Puis {a:il|elle} te prend la main et la porte à ses lèvres, très doucement.`,`{fi} falls silent. You see {a:his|her} throat tighten. Then {a:he|she} takes your hand and raises it to {a:his|her} lips, very gently.`),
D('fi','s',`Personne ne m'a jamais dit « à nous ». Jamais.`,`No one has ever said "ours" to me. Never.`),
N(`Vous regardez le soleil disparaître derrière les tours du château. Ta maison. Votre maison.`,`You watch the sun disappear behind the château towers. Your home. Your shared home.`),
N(`Quand vous rentrez, Gaspard vous attend dans le vestibule, une lanterne à la main, l'air grave.`,`When you get back, Gaspard is waiting for you in the hall, lantern in hand, looking grave.`),
D('gaspard','n',`J'ai trouvé quelque chose. Derrière le miroir de Mademoiselle Isadora. Une porte. Je ne l'avais jamais vue en cinquante ans.`,`I've found something. Behind Mademoiselle Isadora's mirror. A door. I'd never seen it in fifty years.`),
{end:31}
);
