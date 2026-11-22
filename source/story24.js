/* ===== SAISON 2 — CHAPITRE 2 — Le lendemain ===== */
STORY.push(
{bg:'bedroomday',mus:'calm',chap:24,card:['Saison 2 · Chapitre 2','Season 2 · Chapter 2'],sub:['Le lendemain','The Morning After'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
...IF('bessFleury',[N(`Le lendemain, Bess débarque avant même que tu sois réveillé{e}, en tablier d'atelier, des épingles plein la bouche. Être la première assistante de Fleury ne l'empêche visiblement pas de venir.`,`The next morning, Bess bursts in before you're even awake, in a workshop apron, her mouth full of pins. Being Fleury's head assistant clearly doesn't stop her from coming.`)],
 [N(`Le lendemain, Bess ouvre tes rideaux d'un grand geste, comme une actrice qui entre en scène.`,`The next morning, Bess flings open your curtains with a grand gesture, like an actress making her entrance.`)]),
D('bess','h',`Fiancé{g:|e|·e} ! Vous êtes fiancé{g:|e|·e} ! J'ai dû le répéter quarante fois en cuisine. La cuisinière a pleuré dans la soupe.`,`Engaged! You're engaged! I've had to repeat it forty times in the kitchen. Cook cried into the soup.`),
D('bess','h',`Et il y a du courrier. Beaucoup de courrier. Dont une lettre du Yorkshire.`,`And there's post. A lot of post. Including a letter from Yorkshire.`),
N(`L'écriture ronde de Georgie, pleine de taches d'encre et de points d'exclamation :`,`Georgie's round handwriting, full of ink blots and exclamation marks:`),
N(`« Ma très chère ! Fairfax Hall est immense, venteux et rempli de chevaux. Je suis la femme la plus heureuse d'Angleterre ! Bonbon te salue. Je ne reviendrai pas à Londres avant le printemps, on m'a donné un domaine à gouverner et je compte bien le gouverner. Fais-moi un mariage dont on parlera cent ans. — Ta Georgie (Lady Fairfax !!!) »`,`"My dearest! Fairfax Hall is huge, windy and full of horses. I'm the happiest woman in England! Bonbon sends his regards. I won't be back in London before spring; I've been given an estate to rule and I mean to rule it. Give me a wedding people will talk about for a hundred years. — Your Georgie (Lady Fairfax!!!)"`),
C('c24a',0,[
 {t:[`Lui répondre tout de suite, sur trois pages.`,`Write back at once, three pages long.`],fx:{rep:1},r:[D('mc','h',`(Trois pages. Dont une entière sur la tête de la Duchesse quand j'ai dit oui.)`,`(Three pages. One of them entirely about the Duchess's face when I said yes.)`)]},
 {t:[`Sourire et garder la lettre près de ton cœur.`,`Smile and keep the letter close to your heart.`],r:[D('bess','s',`Elle va nous manquer, cette tornade rousse.`,`We'll miss that red-haired whirlwind.`)]}
]),

N(`Sous la lettre de Georgie, une enveloppe plus fine, aux timbres français. Camille.`,`Beneath Georgie's letter, a thinner envelope with French stamps. Camille.`),
N(`« Les nouvelles vont vite, même jusqu'à Paris. On raconte que {fi} t'a demandé{g:|e|·e} en mariage devant tout le palais ?! Je veux être là pour ton mariage. Je viendrai, même s'il faut traverser la Manche à la nage. — Camille »`,`"News travels fast, even to Paris. They say {fi} proposed to you in front of the whole palace?! I want to be at your wedding. I'll come, even if I have to swim the Channel. — Camille"`),
D('mc','h',`(Camille à mon mariage. Ce serait le plus beau des cadeaux.)`,`(Camille at my wedding. That would be the best gift of all.)`),

{bg:'salon',mus:'mystery',where:['Le bureau de Lord Pembroke','Lord Pembroke\'s study']},
{st:['lordp','mc']},
N(`L'après-midi, tu te rends à Pembroke House. La lettre de Cordelia te brûle la poche depuis le bal. « Demande à Lord Pembroke pourquoi il m'a recueillie. »`,`In the afternoon, you go to Pembroke House. Cordelia's letter has been burning a hole in your pocket since the ball. "Ask Lord Pembroke why he took me in."`),
D('lordp','h',`Mon enfant ! Félicitations ! Un cognac ? Non, il est trop tôt. Un thé, alors. Avec du cognac.`,`My dear! Congratulations! A brandy? No, it's too early. Tea, then. With brandy in it.`),
D('mc','n',`Milord, Cordelia m'a laissé une lettre. Elle me demande de vous poser une question. Pourquoi l'avez-vous recueillie ?`,`My lord, Cordelia left me a letter. She asks me to put a question to you. Why did you take her in?`),
N(`La tasse s'arrête à mi-chemin de ses lèvres. Une seconde. Puis Lord Pembroke sourit, un peu trop vite.`,`The cup stops halfway to his lips. For a second. Then Lord Pembroke smiles, a little too quickly.`),
D('lordp','h',`Par charité, voyons. Une orpheline, une cousine éloignée de ma femme… Qu'aurait-on dit si je l'avais laissée à la rue ?`,`Out of charity, of course. An orphan, a distant cousin of my wife's… What would people have said if I'd left her on the street?`),
D('mc','s',`(Il ment. Il ment très mal, d'ailleurs. Sa main tremble.)`,`(He's lying. Very badly, too. His hand is shaking.)`),
C('m47',1,[
 {t:[`Insister. Tu veux la vérité.`,`Insist. You want the truth.`],set:'pressPembroke',fx:{vig:1},r:[
  D('mc','a',`Milord. Cordelia ne m'aurait pas écrit ça pour rien. Que s'est-il passé ?`,`My lord. Cordelia wouldn't have written that for nothing. What happened?`),
  D('lordp','s',`… Pas aujourd'hui. Pas ici. Honoria est dans la pièce à côté. Un jour, je te dirai tout. Je te le promets. Mais pas aujourd'hui.`,`… Not today. Not here. Honoria is in the next room. One day, I'll tell you everything. I promise. But not today.`),
  N(`Pour la première fois, tu vois de la peur dans les yeux de ce grand homme jovial.`,`For the first time, you see fear in the eyes of this big, jovial man.`)
 ]},
 {t:[`Laisser tomber. Il a été si bon avec toi.`,`Let it go. He's been so good to you.`],set:'trustPembroke',r:[
  D('mc','h',`Pardonnez-moi. Cordelia aimait semer le doute. Je n'aurais pas dû.`,`Forgive me. Cordelia loved to sow doubt. I shouldn't have.`),
  D('lordp','s',`Tu es bon{g:|ne|·ne}, mon enfant. Plus que je ne le mérite.`,`You're kind, my dear. Kinder than I deserve.`),
  N(`En sortant, tu remarques qu'il a vidé sa tasse d'un trait. Le cognac, surtout.`,`On your way out, you notice he's emptied his cup in one gulp. The brandy, mostly.`)
 ]}
]),
{st:['clem','theo']},
N(`Dans le vestibule, Clem et Théo t'attendent, impatients.`,`In the hall, Clem and Theo are waiting for you, impatient.`),
D('clem','h',`Alors ? Tu as choisi tes témoins ? Je te préviens, si ce n'est pas moi, je fais un scandale à l'église.`,`So? Have you chosen your witnesses? I'm warning you, if it isn't me, I'll make a scene in church.`),
D('theo','s',`Elle le ferait. Elle a déjà répété.`,`She would. She's already rehearsed.`),
D('mc','h',`Clem. Évidemment, c'est toi.`,`Clem. Of course it's you.`),
D('clem','o',`Ahhh ! Théo, tu as entendu ?! Je suis témoin !`,`Ahhh! Theo, did you hear?! I'm a witness!`),
D('theo','h',`Toute la rue a entendu.`,`The whole street heard.`),

...IF('fiNoble',[
 {bg:'garden',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['Le jardin de Grosvenor Street','The Grosvenor Street garden']},
 {st:['fi','mc']},
 N(`Le soir, {fi} se présente à la grille principale, cette fois. Avec un bouquet de roses et l'autorisation officielle de ton père. Plus besoin de grimper aux murs.`,`In the evening, {fi} comes to the front gate this time. With a bouquet of roses and your father's official permission. No more need to climb walls.`),
 D('fi','h',`C'est presque décevant. J'aimais bien escalader ton mur.`,`It's almost disappointing. I rather liked climbing your wall.`)
],[
 {bg:'garden',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['Le jardin de Grosvenor Street','The Grosvenor Street garden']},
 {st:['fi','mc']},
 N(`Le soir, {fi} se présente à la grille principale, cette fois. En habit neuf, cousu de ses propres mains, et avec l'autorisation officielle de ton père.`,`In the evening, {fi} comes to the front gate this time. In a new coat, sewn with {a:his|her} own hands, and with your father's official permission.`),
 D('fi','h',`Ton père m'a serré la main. Il a dit « bienvenue dans la famille ». J'ai failli m'évanouir sur son tapis.`,`Your father shook my hand. He said "welcome to the family". I nearly fainted on his rug.`)
]),
...IF('fiOt',[N(`{fi} sort un petit écrin de sa poche. À l'intérieur, une vraie bague cette fois : un lys d'argent, fin comme de la dentelle.`,`{fi} takes a small box from {a:his|her} pocket. Inside, a real ring this time: a silver lily, fine as lace.`),D('fi','h',`Le ruban, c'était pour hier soir. Ça, c'est pour toujours. Tu peux garder le ruban aussi.`,`The ribbon was for last night. This is for always. You can keep the ribbon too.`)]),
D('fi','s',`Dis-moi… Tu le vois comment, notre mariage ? Je veux tout savoir. Même ce que tu n'oses pas dire.`,`Tell me… How do you picture our wedding? I want to know everything. Even what you don't dare say.`),
C('m48',1,[
 {t:[`« Grand. Lumineux. Avec tout Londres pour témoin. »`,`"Big. Radiant. With all London as witness."`],set:'bigWedding',fx:{fi:2},r:[
  D('fi','h',`Alors on le fera grand. Des milliers de fleurs, un orchestre, la Reine au premier rang. Et toi, plus éblouissant{g:|e|·e} que tout le reste.`,`Then we'll make it big. Thousands of flowers, an orchestra, the Queen in the front row. And you, outshining all of it.`),
  N(`{fi} t'embrasse au milieu des roses. Tu sens son sourire contre tes lèvres.`,`{fi} kisses you among the roses. You feel {a:his|her} smile against your lips.`)
 ]},
 {t:[`« Intime. Juste nous, et ceux qu'on aime. »`,`"Intimate. Just us, and the people we love."`],set:'smallWedding',fx:{fi:2},r:[
  D('fi','s',`Une petite chapelle, des bougies, nos familles, Clem qui pleure, Bess qui pleure encore plus… Oui. C'est exactement ça que je veux.`,`A small chapel, candles, our families, Clem crying, Bess crying even harder… Yes. That's exactly what I want.`),
  N(`{fi} pose son front contre le tien. Vous restez là, dans le jardin, à inventer votre mariage à voix basse jusqu'à ce que les étoiles se lèvent.`,`{fi} rests {a:his|her} forehead against yours. You stay there in the garden, inventing your wedding in whispers until the stars come out.`)
 ]}
]),
D('fi','n',`Il y a juste un problème. Ta mère. Et la Duchesse. Elles ont déjà chacune leurs idées.`,`There's just one problem. Your mother. And the Duchess. They each already have their own ideas.`),
D('mc','o',`Ça va mal finir, n'est-ce pas ?`,`This is going to end badly, isn't it?`),
D('fi','h',`Très mal. Prépare-toi.`,`Very badly. Brace yourself.`),
{end:24}
);
