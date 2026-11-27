/* ===== LA FIANCÉE DU CORSAIRE — SAISON 3 — CHAPITRE 22 — L'horizon (épilogue) ===== */
STORY.push(
...IF('pPregnant',[
 {bg:'bedroom',mus:'tender',chap:166,card:['Saison 3 · Chapitre 22','Season 3 · Chapter 22'],sub:['L\'horizon','The Horizon'],where:['La maison de ton père, sept mois plus tard','Your father\'s house, seven months later']},
 {st:['lv','mc']},
 N(`Sept mois plus tard, une nuit de pluie, dans ta chambre d'enfant, celle avec la fenêtre qui donne sur le port. Clémence est venue de son île exprès. Elle a dit qu'elle avait mis au monde la moitié de l'Îlet aux Lucioles, et qu'elle ne laisserait personne d'autre s'occuper de toi.`,`Seven months later, on a rainy night, in your childhood bedroom, the one whose window looks over the harbour. Clémence has come from her island specially. She said she'd delivered half of Firefly Isle, and she wouldn't let anyone else look after you.`),
 N(`Ça dure toute la nuit. Tu jures comme Anne Bonny. Tu menaces {lv} de mort, deux fois. Il te tient la main, et ne la lâche pas une seule seconde, même quand tu la lui broies.`,`It lasts all night. You swear like Anne Bonny. You threaten {lv} with death, twice. He holds your hand and never lets go for a single second, even when you crush it.`),
 N(`Et puis, à l'aube, quand la pluie s'arrête et que le premier rayon de soleil touche la fenêtre, il y a un cri. Un tout petit cri, furieux, magnifique.`,`And then, at dawn, when the rain stops and the first ray of sun touches the window, there's a cry. A tiny, furious, magnificent cry.`),
 {st:['clemence','mc']},
 C('p66a',0,[
  {t:[`« C'est une fille ? »`,`"Is it a girl?"`],set:'pBabyGirl',r:[D('clemence','s',`C'est une fille. Une petite fille, avec des poumons de capitaine. Écoute-la. Elle donne déjà des ordres.`,`It's a girl. A little girl with a captain's lungs. Listen to her. She's already giving orders.`)]},
  {t:[`« C'est un garçon ? »`,`"Is it a boy?"`],set:'pBabyBoy',r:[D('clemence','s',`C'est un garçon. Un petit garçon, avec des poumons de capitaine. Écoute-le. Il donne déjà des ordres.`,`It's a boy. A little boy with a captain's lungs. Listen to him. He's already giving orders.`)]}
 ]),
 {st:['lv','mc']},
 N(`Clémence pose le bébé sur ta poitrine. Il est minuscule, rouge, chiffonné, et c'est la plus belle chose que tu aies jamais vue. Plus belle que la mer. Plus belle que les lucioles.`,`Clémence lays the baby on your chest. Tiny, red, crumpled, and the most beautiful thing you've ever seen. More beautiful than the sea. More beautiful than the fireflies.`),
 N(`{lv} s'agenouille à côté du lit. Il ne dit rien. Il ne peut pas. Il pleure, et il rit, et il touche du bout du doigt une main grande comme une coquille.`,`{lv} kneels beside the bed. He says nothing. He can't. He's crying, and laughing, and touching with one fingertip a hand the size of a shell.`),
 D('lv','s',`Bonjour, toi. Je suis ton père. Je n'ai aucune idée de ce que je fais. Mais ta mère, elle, sait tout faire. Alors tout ira bien.`,`Hello, you. I'm your father. I have no idea what I'm doing. But your mother can do anything. So everything will be fine.`),
 {ask:'kid',t:['Choisis le prénom du bébé','Choose the baby\'s name'],ph:['Son prénom…','Name…'],sug:['Isaure','Marine','Lazare','Anne']},
 D('mc','s',`{kid}. Bienvenue, {kid}. Bienvenue chez toi.`,`{kid}. Welcome, {kid}. Welcome home.`),
 N(`Dehors, sur la véranda, ton père attend depuis le début de la nuit, une bouteille à la main. Quand {lv} sort avec le bébé dans les bras, il se lève si vite qu'il renverse sa chaise. Il prend {kid} contre lui, très doucement, comme on prend un trésor.`,`Outside on the veranda, your father has been waiting since nightfall, bottle in hand. When {lv} comes out with the baby in his arms, he gets up so fast he knocks his chair over. He takes {kid} against him, very gently, the way you hold a treasure.`),
 D('gov','s',`Bonjour, petit trésor. Je suis ton grand-père. Je vais te raconter l'histoire de ta mère. Elle commence par une nuit où les pirates ont attaqué Port-Royal…`,`Hello, little treasure. I'm your grandfather. I'm going to tell you your mother's story. It begins on a night when pirates raided Port Royal…`),
],[
 {bg:'garden',mus:'tender',chap:166,card:['Saison 3 · Chapitre 22','Season 3 · Chapter 22'],sub:['L\'horizon','The Horizon'],where:['La maison de ton père, un an plus tard','Your father\'s house, a year later']},
 {st:['lv','mc']},
 N(`Un an plus tard. {kid} a grandi. Elle parle, maintenant. Beaucoup. Tout le temps. Elle parle aux perroquets, aux tortues, aux marins du port, à la statue du roi sur la place, qu'elle appelle « le monsieur triste ».`,`A year later. {kid} has grown. She talks now. A lot. All the time. She talks to parrots, to turtles, to the harbour sailors, to the King's statue on the square, which she calls "the sad man".`),
 N(`Elle n'a jamais retrouvé sa famille d'avant. Tu as envoyé des lettres dans tous les ports des Caraïbes. Personne n'a jamais répondu. Mais un soir, en la bordant, tu lui as demandé si ça la rendait triste. Elle t'a regardée comme si tu étais un peu bête.`,`She never found her family from before. You sent letters to every port in the Caribbean. No one ever answered. But one evening, tucking her in, you asked her if it made her sad. She looked at you as though you were a bit slow.`),
 D('lune','h',`Mais non. La mer m'a donnée à vous. C'est vous, ma famille. Tout le monde sait ça.`,`No. The sea gave me to you. You're my family. Everybody knows that.`),
 N(`{lv} lui a appris à nager, à pêcher, à reconnaître les étoiles. Toi, tu lui as appris à tenir une épée en bois, et à dire « non » aux grandes personnes quand elles ont tort. Ton père lui a appris à lire. Et à tricher aux cartes.`,`{lv} taught her to swim, to fish, to read the stars. You taught her to hold a wooden sword and to say "no" to grown-ups when they're wrong. Your father taught her to read. And to cheat at cards.`),
 D('lv','s',`Elle a demandé, ce matin, quand est-ce qu'elle aurait son propre bateau. Je lui ai dit à dix-huit ans. Elle a dit qu'elle ne pouvait pas attendre si longtemps, et qu'elle allait en construire un elle-même. Avec des noix de coco.`,`She asked this morning when she'd get her own ship. I said at eighteen. She said she couldn't wait that long and she'd build one herself. Out of coconuts.`),
 D('mc','h',`Je ne vois pas de qui elle tient ça.`,`I can't imagine where she gets it from.`),
 D('lv','h',`Moi, si.`,`I can.`),
]),
{bg:'docks',mus:'calm',card:['Les lettres','The letters'],sub:['',''],where:['Le quai de Port-Royal','The Port Royal quay']},
{st:['mc']},
N(`Les lettres arrivent avec chaque navire. Tu les gardes toutes dans le coffre de ta mère, avec le ruban de Fanchon et la couronne de fleurs séchées de Céleste.`,`The letters arrive with every ship. You keep them all in your mother's chest, with Fanchon's ribbon and Céleste's crown of dried flowers.`),
...IF('pEndRook',[
 N(`Celles de {ot} viennent de Séville, de Venise, de Rome. Des lettres longues, élégantes, pleines de poésie et de descriptions de palais. Et, au dos de chaque lettre, un petit dessin. Horrible. Exactement comme promis. Esteban ajoute toujours un mot en bas : « {a:Il|Elle} dessine de plus en plus mal. Ma mère l'adore. »`,`{ot}'s come from Seville, Venice, Rome. Long, elegant letters, full of poetry and descriptions of palaces. And on the back of each one, a little drawing. Dreadful. Exactly as promised. Esteban always adds a line at the bottom: "{a:He|She} draws worse and worse. My mother adores {a:him|her}."`),
],[
 N(`Celles de {ot} arrivent tachées d'eau de mer, griffonnées à la hâte, depuis des ports dont tu n'as jamais entendu parler. La dernière vient du Pacifique. {a:Il|Elle} a trouvé son île. {a:Il|Elle} lui a donné ton nom. {a:Il|Elle} a ajouté : « Elle est petite, têtue, et pleine de tempêtes. Le nom lui va très bien. »`,`{ot}'s arrive stained with seawater, scrawled in haste from ports you've never heard of. The last one comes from the Pacific. {a:He|She} found {a:his|her} island. {a:He|She} named it after you. {a:He|She} added: "She's small, stubborn, and full of storms. The name suits her perfectly."`),
]),
...IF('pFanchonSaved',[
 N(`Fanchon écrit d'une écriture ronde et appliquée, qu'elle a apprise à cinquante ans. Sa mère va bien. Clémence va bien. L'Îlet aux Lucioles va bien. Et elle termine toujours ses lettres de la même façon : « Embrasse le petit monde pour moi. Et mange, tu es trop maigre. »`,`Fanchon writes in a round, careful hand she learned at fifty. Her mother is well. Clémence is well. Firefly Isle is well. And she always ends her letters the same way: "Kiss the little one for me. And eat, you're too thin."`),
],[
 N(`Clémence écrit chaque mois. Sa mère va bien. Elle parle souvent de Fanchon, de la petite fille qui chantait sur le ponton. Les fleurs du ponton d'Isaure ne fanent jamais, dit-elle. Personne ne sait qui les change.`,`Clémence writes every month. Her mother is well. She often talks about Fanchon, the little girl who sang on the jetty. The flowers on Isaure's jetty never wilt, she says. No one knows who changes them.`),
]),
...IF('pCelesteCrew',[
 ...IF('pTiagoSaved',[N(`Céleste et Tiago sont toujours à bord de *La Fiancée*. Matthias les a mariés le printemps dernier, sur le pont, au coucher du soleil. Sans fantômes, cette fois. Anne a pleuré. Elle nie farouchement.`,`Céleste and Tiago are still aboard *The Betrothed*. Matthias married them last spring, on deck, at sunset. Without ghosts this time. Anne cried. She fiercely denies it.`)],[N(`Céleste est devenue la meilleure navigatrice de l'équipage. Kit dit qu'elle lit les étoiles comme d'autres lisent les livres. Le soir, elle joue de la guitare de Tiago. Elle a appris toute seule. Elle ne joue qu'une chanson. Celle des lucioles.`,`Céleste has become the crew's best navigator. Kit says she reads stars the way others read books. In the evenings she plays Tiago's guitar. She taught herself. She plays only one song. The firefly song.`)]),
],[]),
{bg:'ship',mus:'tender',card:['L\'horizon','The horizon'],sub:['',''],where:['*La Fiancée*, trois ans plus tard','*The Betrothed*, three years later']},
{st:['lv','mc']},
N(`Trois ans ont passé. Et puis un matin, quand le vent tourne à l'est, tu sens l'appel. Le même que la première fois. La mer qui t'attend.`,`Three years have passed. And then one morning, when the wind turns east, you feel the call. The same as the first time. The sea, waiting for you.`),
N(`*La Fiancée* est prête. Matthias, Kit et Anne aussi. {lv} a déjà chargé les malles. Et {kid} est à la proue, dans une couverture trop grande, qui crie à la vigie de se dépêcher.`,`*The Betrothed* is ready. So are Matthias, Kit and Anne. {lv} has already loaded the trunks. And {kid} is at the bow, wrapped in an oversized blanket, shouting at the lookout to hurry up.`),
D('gov','s',`Ramenez-moi ce petit monde entier. Et ramenez-moi des histoires. Des vraies. Pas celles que Kit invente.`,`Bring the child back to me in one piece. And bring me stories. True ones. Not the ones Kit invents.`),
N(`Tu prends la barre. {lv} vient se placer derrière toi, ses mains sur les tiennes, comme le premier jour où vous êtes partis seuls tous les deux. La voile se gonfle. Le port s'éloigne.`,`You take the helm. {lv} comes to stand behind you, {a:his|her} hands on yours, like the first day you set out alone together. The sail fills. The harbour falls away.`),
D('lv','s',`Où est-ce qu'on va, capitaine ?`,`Where are we going, captain?`),
C('p66b',0,[
 {t:[`« Vers l'horizon. Il est toujours plus loin. C'est pour ça qu'il est beau. »`,`"Toward the horizon. It's always further away. That's why it's beautiful."`],r:[]},
 {t:[`« Peu importe. Tant que c'est avec vous deux. »`,`"Doesn't matter. As long as it's with you two."`],r:[]},
 {t:[`« À l'Îlet aux Lucioles. Clémence et sa mère veulent voir {kid} grandir. »`,`"To Firefly Isle. Clémence and her mother want to see {kid} growing up."`],r:[]}
]),
N(`{lv} sourit, et t'embrasse dans le cou. Derrière vous, {kid} rit aux éclats. Devant vous, la mer est immense, bleue, infinie.`,`{lv} smiles and kisses your neck. Behind you, {kid} laughs out loud. Ahead of you, the sea is vast, blue, endless.`),
N(`Il y a deux ans, tu étais la fille du gouverneur, promise à un homme que tu ne connaissais pas. Tu croyais que ta vie était écrite. Tu avais tort.`,`Two years ago you were the governor's daughter, promised to a man you didn't know. You thought your life was already written. You were wrong.`),
N(`Ta vie, c'est toi qui l'écris. Une vague à la fois.`,`You write your own life. One wave at a time.`),
N(`Fin.`,`The End.`),
{end:166}
);
