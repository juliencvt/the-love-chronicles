/* ===== SAISON 2 — CHAPITRE 13 — Là où dorment les Valcourt ===== */
STORY.push(
{bg:'cathedral',mus:'mystery',chap:35,card:['Saison 2 · Chapitre 13','Season 2 · Chapter 13'],sub:['Là où dorment les Valcourt','Where the Valcourts Sleep'],where:['La chapelle de Valcourt','The Valcourt chapel']},
{st:['gaspard','mc']},
N(`Derrière l'autel de la chapelle, une dalle de pierre gravée d'un lys. Il faut trois hommes pour la soulever. Dessous, un escalier s'enfonce dans le noir. Une odeur de terre froide et de siècles.`,`Behind the chapel altar, a stone slab carved with a lily. It takes three men to lift it. Below, a staircase plunges into darkness. A smell of cold earth and centuries.`),
...IF('trapAgnes',[D('theo','h',`D'après Gaspard, les hommes d'Iris surveillent le moulin depuis l'aube. Ton piège a marché. On a le champ libre.`,`According to Gaspard, Iris's men have been watching the mill since dawn. Your trap worked. The coast is clear.`)],[D('theo','s',`On n'a pas vu Iris depuis le marché. Je n'aime pas ça. Quand on ne la voit pas, c'est qu'elle est tout près.`,`We haven't seen Iris since the market. I don't like it. When you can't see her, it means she's very close.`)]),
D('gaspard','n',`La crypte est profonde. Il y a des passages, des recoins. Qui descend ?`,`The crypt is deep. There are passages, recesses. Who's going down?`),
C('m69',1,[
 {t:[`Toi et {fi}. Théo et Lord Grey gardent l'entrée, armés.`,`You and {fi}. Theo and Lord Grey guard the entrance, armed.`],set:'guardEntrance',fx:{vig:2},r:[D('alistair','n',`Je n'ai jamais tenu un pistolet de ma vie. Mais je sais calculer une trajectoire. Ça devrait suffire.`,`I've never held a pistol in my life. But I can calculate a trajectory. That should suffice.`),D('clem','a',`Et moi, j'ai mon ombrelle. Neuve. Celle-là ne se cassera pas.`,`And I have my parasol. A new one. This one won't break.`)]},
 {t:[`Juste toi et {fi}. C'est votre secret, votre histoire.`,`Just you and {fi}. It's your secret, your story.`],set:'aloneCrypt',fx:{fi:1},r:[D('theo','s',`Comme tu veux. On sera au château. Crie fort si besoin.`,`As you wish. We'll be at the château. Shout loudly if you need us.`)]}
]),

{bg:'cellar',mus:'mystery',where:['La crypte des Valcourt','The Valcourt crypt']},
{st:['fi','mc']},
N(`Vous descendez, une lanterne à la main. La crypte est une forêt de colonnes et de tombeaux. Des gisants de pierre, mains jointes, dorment sur leurs lits de marbre. Ton grand-père. Ton arrière-grand-père. Des Valcourt, sur des siècles.`,`You go down, lantern in hand. The crypt is a forest of pillars and tombs. Stone effigies, hands joined, sleep on their marble beds. Your grandfather. Your great-grandfather. Valcourts, across the centuries.`),
D('fi','s',`C'est la réunion de famille la plus silencieuse que j'aie jamais vue.`,`It's the quietest family reunion I've ever seen.`),
N(`Au fond, un monument différent des autres. Pas un gisant : une statue d'ange, debout, le visage dans les mains. Il pleure. Sur sa joue de pierre, une larme sculptée.`,`At the far end, a monument unlike the others. Not an effigy: a statue of an angel, standing, face in its hands. It's weeping. On its stone cheek, a carved tear.`),
D('mc','o',`« Les Larmes. » L'ange qui pleure. C'est là.`,`"The Tears." The weeping angel. It's here.`),
N(`Tu appuies sur la larme de pierre. Un déclic. Le socle de la statue pivote, révélant une cavité. Et dedans, enroulé dans de la soie, un collier.`,`You press the stone tear. A click. The base of the statue swivels, revealing a hollow. And inside, wrapped in silk, a necklace.`),
N(`Trente-neuf perles noires, lourdes, lisses, qui brillent dans la lumière de la lanterne comme des yeux de chat. Les Larmes de Valcourt.`,`Thirty-nine black pearls, heavy and smooth, gleaming in the lantern light like cats' eyes. The Tears of Valcourt.`),
N(`Un courant d'air froid traverse la crypte. La lanterne vacille… et s'éteint. Le noir total.`,`A cold draught sweeps through the crypt. The lantern flickers… and goes out. Total darkness.`),
D('fi','s',`Ne bouge pas. Je suis là. Je suis juste là.`,`Don't move. I'm here. I'm right here.`),
N(`Tu sens ses mains trouver les tiennes dans le noir. Puis tes épaules. Puis ton visage. Tu entends son souffle, tout près.`,`You feel {a:his|her} hands find yours in the dark. Then your shoulders. Then your face. You hear {a:his|her} breath, very close.`),
C('m70',1,[
 {t:[`Lui dire ce que tu n'as jamais osé dire, là, dans le noir.`,`Tell {a:him|her} what you've never dared say, there in the dark.`],set:'darkConfession',fx:{fi:3},r:[
  D('mc','s',`Tu sais de quoi j'ai le plus peur ? Pas d'Iris. Pas de la mort. J'ai peur de ne pas savoir t'aimer aussi bien que tu m'aimes. Je n'ai jamais eu de modèle. Mes parents se sont aimés en secret. Ma mère est morte avant de pouvoir m'apprendre.`,`Do you know what I'm most afraid of? Not Iris. Not death. I'm afraid of not knowing how to love you as well as you love me. I've never had an example. My parents loved each other in secret. My mother died before she could teach me.`),
  D('fi','s',`Tu m'apprends tous les jours, sans le savoir. Chaque fois que tu me choisis. Chaque fois que tu restes.`,`You teach me every day, without knowing it. Every time you choose me. Every time you stay.`),
  N(`Dans le noir, {fi} t'embrasse. Tu ne vois rien. Tu n'as jamais rien senti avec autant de force.`,`In the dark, {fi} kisses you. You can't see a thing. You've never felt anything so strongly.`)
 ]},
 {t:[`Te blottir contre {a:lui|elle} et attendre que tes yeux s'habituent.`,`Huddle against {a:him|her} and wait for your eyes to adjust.`],set:'darkHold',fx:{fi:2,vig:1},r:[
  N(`Tu te serres contre {fi}. Petit à petit, tes yeux distinguent une lueur, tout au fond. La lumière du jour, qui filtre par l'escalier.`,`You press close to {fi}. Little by little, your eyes make out a glow at the far end. Daylight, filtering down the stairs.`),
  D('fi','n',`Quelqu'un a soufflé la lanterne. Ce n'était pas le vent. Écoute.`,`Someone blew out the lantern. It wasn't the wind. Listen.`)
 ]}
]),
N(`Un bruit de pas, dans l'escalier. Une silhouette se découpe dans la lumière, en haut des marches. Une robe noire. Un pistolet.`,`Footsteps on the stairs. A figure stands outlined in the light at the top of the steps. A black dress. A pistol.`),
D('iris','h',`Merci, mon enfant. Isadora a toujours eu le goût des énigmes. Moi, je n'ai jamais eu la patience. Heureusement, tu l'as eue pour moi.`,`Thank you, my child. Isadora always had a taste for riddles. I never had the patience. Fortunately, you had it for me.`),
D('iris','a',`Les perles. Maintenant.`,`The pearls. Now.`),
{end:35}
);
