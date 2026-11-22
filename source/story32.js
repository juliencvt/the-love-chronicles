/* ===== SAISON 2 — CHAPITRE 10 — Le journal d'Isadora ===== */
STORY.push(
{bg:'bedroom',mus:'mystery',chap:32,card:['Saison 2 · Chapitre 10','Season 2 · Chapter 10'],sub:['Le journal d\'Isadora','Isadora\'s Diary'],where:['La chambre d\'Isadora','Isadora\'s bedroom']},
{st:['gaspard','mc']},
N(`Le grand miroir ovale pivote sur des gonds invisibles. Derrière, un escalier en colimaçon, si étroit qu'il faut monter de profil. Une odeur de poussière, de cire et de violette.`,`The great oval mirror swings on hidden hinges. Behind it, a spiral staircase so narrow you have to climb sideways. A smell of dust, wax and violets.`),
{bg:'cellar',mus:'mystery',where:['La pièce secrète','The secret room']},
N(`En haut, une petite pièce ronde, dans la tourelle. Un pupitre. Un tabouret. Des partitions empilées jusqu'au plafond. Et sur le pupitre, un cahier relié de cuir rouge, fermé par un ruban.`,`At the top, a small round room in the turret. A music stand. A stool. Scores stacked to the ceiling. And on the stand, a red leather notebook, tied with a ribbon.`),
N(`Sur la couverture, en lettres d'or effacées : « Isadora ».`,`On the cover, in faded gold letters: "Isadora".`),
D('gaspard','s',`Sa cachette. Elle disparaissait des heures, quand elle était jeune fille. Son père la cherchait partout. Elle était ici, à chanter pour personne.`,`Her hiding place. She'd vanish for hours when she was a girl. Her father searched everywhere for her. She was here, singing for no one.`),
{st:['fi','mc']},
N(`{fi} t'a suivi{e} dans l'escalier. {a:Il|Elle} reste en retrait, sur la dernière marche, sans oser entrer.`,`{fi} has followed you up the stairs. {a:He|She} hangs back on the top step, not daring to come in.`),
C('m63',1,[
 {t:[`« Viens. Je veux le lire avec toi. »`,`"Come. I want to read it with you."`],set:'readTogether',fx:{fi:3},r:[N(`{fi} s'assied sur le tabouret, toi sur ses genoux, le cahier ouvert entre vos mains. Tu lis à voix haute. {a:Il|Elle} tient la bougie.`,`{fi} sits on the stool, you on {a:his|her} lap, the notebook open between your hands. You read aloud. {a:He|She} holds the candle.`)]},
 {t:[`« Laisse-moi seul{e} avec elle. Juste un moment. »`,`"Leave me alone with her. Just for a moment."`],set:'readAlone',fx:{fi:1},r:[D('fi','s',`Bien sûr. Je t'attends en bas. Prends tout le temps qu'il faut.`,`Of course. I'll wait for you downstairs. Take all the time you need.`),N(`Tu t'assieds seul{e} sur le tabouret de ta mère, et tu ouvres son journal.`,`You sit alone on your mother's stool, and open her diary.`)]}
]),
N(`« 12 mai 1792. Henri m'a apporté des violettes. Il ne sait pas chanter, il ne sait pas danser, il ne sait même pas parler aux femmes. Je crois que je vais l'épouser. »`,`"12 May 1792. Henri brought me violets. He can't sing, he can't dance, he doesn't even know how to talk to women. I think I'm going to marry him."`),
...IF('readTogether',[D('fi','h',`Ton père ? Ne sait pas parler aux femmes ? Ça explique beaucoup de choses.`,`Your father? Doesn't know how to talk to women? That explains a lot.`)]),
N(`« 3 juin 1794. Iris a encore fouillé ma chambre. Elle veut les Larmes. Mon père me les a données, pas à elle, et elle ne me le pardonnera jamais. »`,`"3 June 1794. Iris searched my room again. She wants the Tears. My father gave them to me, not to her, and she'll never forgive me."`),
N(`« Les Larmes de Valcourt » : un collier de quarante perles noires, rapportées des Indes par ton arrière-grand-père. Gaspard te l'explique à voix basse : à elles seules, elles valent plus que toutes les terres du domaine.`,`"The Tears of Valcourt": a necklace of forty black pearls, brought back from the Indies by your great-grandfather. Gaspard explains in a low voice: on their own, they're worth more than all the estate's lands.`),
N(`La dernière page est datée de janvier 1795. Une semaine avant ta naissance. L'écriture est tremblante.`,`The last page is dated January 1795. A week before you were born. The handwriting is shaky.`),
N(`« À mon enfant, si un jour tu lis ces lignes. J'ai caché les Larmes, pour qu'Iris ne les trouve jamais. Elles sont à toi. Pour les trouver, suis mon chemin : là où le lys chante, là où la rivière pleure, là où dorment les Valcourt. Je t'aime déjà. Je t'aimerai toujours. — Maman. »`,`"To my child, if you ever read these lines. I've hidden the Tears so Iris will never find them. They're yours. To find them, follow my path: where the lily sings, where the river weeps, where the Valcourts sleep. I love you already. I'll love you always. — Mama."`),
N(`Tu fermes le cahier. Tu ne pleures pas tout de suite. C'est en voyant le mot « Maman », écrit pour toi il y a dix-huit ans, que tes larmes se mettent à couler.`,`You close the notebook. You don't cry straight away. It's seeing the word "Mama", written for you eighteen years ago, that makes the tears start to fall.`),
...IF('readTogether',[N(`{fi} ne dit rien. {a:Il|Elle} te serre contre {a:lui|elle} et te laisse pleurer dans son cou, aussi longtemps qu'il le faut.`,`{fi} says nothing. {a:He|She} holds you close and lets you cry into {a:his|her} neck for as long as it takes.`)]),

{bg:'salon',mus:'mystery',card:['Plus tard','Later'],sub:['',''],where:['Le grand salon','The great hall']},
{st:['clem','theo']},
N(`Plus tard, au grand salon, une jeune servante du village, Agnès, apporte le thé. Elle est nouvelle : Gaspard l'a engagée la semaine dernière. Elle s'attarde un peu trop près de la porte.`,`Later, in the great hall, a young servant from the village, Agnès, brings the tea. She's new: Gaspard hired her last week. She lingers a little too close to the door.`),
D('clem','h',`Alors ? Qu'est-ce qu'il y avait dans cette tourelle ? Un squelette ? Un trésor ? Un amant caché ?`,`So? What was in that turret? A skeleton? A treasure? A hidden lover?`),
C('m64',1,[
 {t:[`Tout raconter à tes amis : le journal, les perles, l'énigme.`,`Tell your friends everything: the diary, the pearls, the riddle.`],set:'shareRiddle',fx:{rep:1},r:[
  N(`Tu racontes tout. Clem pousse un cri. Théo siffle. Lord Grey se penche sur l'énigme avec un intérêt soudain, comme sur un problème de mathématiques.`,`You tell them everything. Clem squeals. Theo whistles. Lord Grey leans over the riddle with sudden interest, as if it were a mathematical problem.`),
  D('alistair','n',`« Là où le lys chante. » Un orgue, probablement. Les tuyaux d'orgue ont souvent la forme de fleurs. Y a-t-il une chapelle ?`,`"Where the lily sings." An organ, probably. Organ pipes are often lily-shaped. Is there a chapel?`),
  N(`Dans le couloir, une silhouette en tablier s'éloigne en silence. Personne ne la remarque.`,`In the corridor, an aproned figure slips silently away. Nobody notices.`)
 ]},
 {t:[`Attendre que la servante soit partie, et fermer la porte.`,`Wait until the servant has gone, and close the door.`],set:'closeDoor',fx:{vig:2},r:[
  D('mc','n',`Merci, Agnès. Ce sera tout.`,`Thank you, Agnès. That will be all.`),
  N(`Tu attends que ses pas s'éloignent. Tu fermes la porte à clé. Puis seulement, tu racontes.`,`You wait for her footsteps to fade. You lock the door. Only then do you tell them.`),
  D('alistair','n',`« Là où le lys chante. » Un orgue, probablement. Y a-t-il une chapelle ? … Et vous avez bien fait de fermer cette porte. Cette fille avait de l'encre sur les doigts. Une servante qui écrit, c'est rare.`,`"Where the lily sings." An organ, probably. Is there a chapel? … And you were right to close that door. That girl had ink on her fingers. A servant who writes is a rare thing.`),
  D('clem','o',`Vous remarquez les doigts des servantes, maintenant ?`,`You notice servants' fingers now?`),
  D('alistair','s',`Je remarque tout. C'est mon métier. Je remarque même quand vous faites semblant de ne pas me regarder.`,`I notice everything. It's my profession. I even notice when you pretend not to look at me.`),
  N(`Clem devient écarlate. Théo s'étouffe avec son thé.`,`Clem turns scarlet. Theo chokes on his tea.`)
 ]}
]),
{end:32}
);
