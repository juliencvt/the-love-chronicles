/* ===== SAISON 2 — CHAPITRE 3 — Ce n'est pas convenable ===== */
STORY.push(
{bg:'salon',mus:'calm',chap:25,card:['Saison 2 · Chapitre 3','Season 2 · Chapter 3'],sub:['« Ce n\'est pas convenable »','"It Is Not Proper"'],where:['Le salon d\'Ashbury House','The Ashbury House drawing room']},
{st:['duchess','mother']},
N(`Trois jours plus tard. Le thé chez la Duchesse. Officiellement, pour « faire connaissance entre familles ». En réalité, pour régler le mariage. Ta mère a mis sa plus belle robe, comme on met une armure.`,`Three days later. Tea at the Duchess's. Officially, to "acquaint the families". In reality, to settle the wedding. Your mother has put on her finest gown, the way one puts on armour.`),
D('duchess','n',`Asseyez-vous. Thé ? Citron ? Parfait. Commençons.`,`Sit down. Tea? Lemon? Perfect. Let us begin.`),
...IF('fiNoble',[
 D('duchess','n',`L'église Saint-George, à Hanover Square. L'évêque de Londres officiera. Six cents invités. La Reine au premier rang. Les vœux en anglais, évidemment.`,`St George's, Hanover Square. The Bishop of London will officiate. Six hundred guests. The Queen in the front row. The vows in English, naturally.`),
 D('mother','n',`Évidemment ? Ma famille est française, Votre Grâce. Catholique. Je pensais à une messe, avec un prêtre de l'ambassade… et la chapelle de Valcourt, peut-être.`,`Naturally? My family is French, Your Grace. Catholic. I was thinking of a Mass, with a priest from the embassy… and the Valcourt chapel, perhaps.`),
 D('duchess','a',`Une messe papiste, en France, pour l'héritier{g:|e|·e} de mon nom ? Avec un{g:|e|e|·e} enfant… né dans les circonstances que l'on sait ? Ce n'est pas convenable.`,`A popish Mass, in France, for the heir to my name? With a child… born in the circumstances we all know of? It is not proper.`)
],[
 D('duchess','n',`Je vous ai fait venir parce que quelqu'un doit avoir le courage de le dire. Ce mariage est une erreur.`,`I asked you here because someone must have the courage to say it. This marriage is a mistake.`),
 D('duchess','a',`L'héritier{g:|e|·e} Valcourt, la plus grande fortune de la Saison, épouse un apprenti de boutique. Mon enfant a été éconduit{a:|e} pour un tailleur. Londres en rit déjà. Ce n'est pas convenable.`,`The Valcourt heir, the greatest fortune of the Season, marrying a shop apprentice. My child was turned down for a tailor. London is already laughing. It is not proper.`),
 D('mother','s',`Je… je dois avouer, Votre Grâce, que j'ai eu les mêmes craintes. Au début.`,`I… I must confess, Your Grace, that I had the same fears. At first.`),
 D('mother','a',`Puis j'ai vu {fi} plonger dans la Tamise pour sauver mon enfant. Alors gardez vos craintes. Moi, j'ai rendu les miennes.`,`Then I saw {fi} dive into the Thames to save my child. So keep your fears. I've given mine back.`)
]),
D('mother','a',`Ce qui n'est pas convenable, Votre Grâce, c'est de parler ainsi d'{g:un enfant|une enfant|un·e enfant} que j'ai élevé{g:|e|·e} pendant dix-huit ans. Le sang ne fait pas une famille. L'amour, si.`,`What is not proper, Your Grace, is speaking that way of a child I raised for eighteen years. Blood doesn't make a family. Love does.`),
D('duchess','a',`Ne me faites pas la leçon dans mon propre salon, Comtesse.`,`Do not lecture me in my own drawing room, Countess.`),
D('mother','a',`Alors je la ferai dans le mien. Vous y êtes toujours la bienvenue. Quand vous aurez appris les bonnes manières.`,`Then I'll do it in mine. You're always welcome there. Once you've learned some manners.`),
N(`Une tasse tremble sur sa soucoupe. La Duchesse est devenue écarlate. Ta mère, livide. Elles se lèvent en même temps.`,`A teacup rattles on its saucer. The Duchess has turned scarlet. Your mother, white as chalk. They rise at the same moment.`),
{st:['fi','mc']},
D('fi','o',`(Fais quelque chose. N'importe quoi.)`,`(Do something. Anything.)`),
C('m49',1,[
 {t:[`Prendre la défense de ta mère, sans détour.`,`Stand up for your mother, plainly.`],set:'sideMother',fx:{rep:-1},r:[
  D('mc','a',`Votre Grâce, ma mère a raison. Je ne laisserai personne la traiter ainsi. Pas même vous.`,`Your Grace, my mother is right. I won't let anyone treat her this way. Not even you.`),
  {st:['mother','mc']},
  N(`Ta mère te regarde, bouleversée. Elle prend ta main et ne la lâche plus.`,`Your mother looks at you, overwhelmed. She takes your hand and doesn't let go.`),
  {st:['duchess','fi']},
  D('duchess','a',`Très bien. Faites votre mariage comme bon vous semble. Sans moi.`,`Very well. Hold your wedding however you see fit. Without me.`),
  N(`La Duchesse quitte son propre salon. {fi} ferme les yeux, comme quelqu'un qui reçoit une gifle.`,`The Duchess walks out of her own drawing room. {fi} closes {a:his|her} eyes like someone taking a slap.`)
 ]},
 {t:[`Te placer entre elles et calmer le jeu.`,`Step between them and calm things down.`],set:'diplomacy',fx:{rep:1,vig:1},r:[
  D('mc','n',`Mesdames. Je vous en prie. Vous voulez toutes les deux la même chose : que ce jour soit parfait. Vous n'êtes simplement pas d'accord sur ce que « parfait » veut dire.`,`Ladies. Please. You both want the same thing: for this day to be perfect. You simply don't agree on what "perfect" means.`),
  D('mc','h',`Alors donnez-moi un peu de temps. Je trouverai un mariage qui vous fera honte à toutes les deux de vous être disputées.`,`So give me a little time. I'll find a wedding that will make you both ashamed of having quarrelled.`),
  N(`Un silence. Puis, contre toute attente, la Duchesse a un petit rire sec.`,`A silence. Then, against all expectations, the Duchess gives a short, dry laugh.`),
  D('duchess','s',`Vous parlez comme Isadora. Elle aussi finissait toujours par avoir le dernier mot. C'était insupportable.`,`You talk like Isadora. She always ended up having the last word too. It was unbearable.`),
  D('mother','n',`Sur ce point, Votre Grâce, nous sommes d'accord.`,`On that point, Your Grace, we agree.`),
  N(`Ce n'est pas la paix. Mais c'est une trêve.`,`It isn't peace. But it's a truce.`)
 ]}
]),

{bg:'terrace',mus:'tender',card:['Plus tard','Later'],sub:['',''],where:['Les toits de Mayfair','The rooftops of Mayfair']},
{st:['fi','mc']},
N(`Plus tard, {fi} t'entraîne loin de ce champ de bataille : par l'escalier de service, jusqu'aux toits, là où personne ne vient jamais. Londres s'étend à vos pieds, rose et doré dans le soleil couchant.`,`Later, {fi} leads you far from that battlefield: up the servants' stairs, onto the rooftops where nobody ever comes. London stretches out at your feet, pink and gold in the setting sun.`),
D('fi','s',`Je suis désolé{a:|e}. Pour tout ça. J'aurais voulu que ce soit simple.`,`I'm sorry. For all of that. I wanted it to be simple.`),
D('mc','h',`Rien n'a jamais été simple, avec nous. C'est un peu notre spécialité.`,`Nothing has ever been simple with us. It's rather our speciality.`),
D('fi','h',`On pourrait s'enfuir. Gretna Green. Trois jours de diligence, un forgeron qui nous marie au-dessus de son enclume. Personne pour se disputer.`,`We could run away. Gretna Green. Three days by stagecoach, a blacksmith marrying us over his anvil. Nobody left to quarrel.`),
C('m50',1,[
 {t:[`« Ne me tente pas… » et l'embrasser pour le faire taire.`,`"Don't tempt me…" and kiss {a:him|her} to shut {a:him|her} up.`],set:'kissRoof',fx:{fi:3},r:[
  N(`Tu l'attrapes par le revers de sa veste et tu l'embrasses. Longtemps. Le soleil disparaît derrière Saint-Paul sans que vous le remarquiez.`,`You grab {a:him|her} by the lapel and kiss {a:him|her}. For a long time. The sun sets behind St Paul's without either of you noticing.`),
  D('fi','h',`Je prends ça pour un « peut-être ».`,`I'll take that as a "maybe".`)
 ]},
 {t:[`« Non. On ne fuit plus. On a assez fui. »`,`"No. We don't run any more. We've run enough."`],set:'noElope',fx:{fi:2,vig:1},r:[
  D('mc','n',`On va se marier au grand jour. Devant elles deux. Et elles finiront par s'asseoir côte à côte, même si je dois les y attacher.`,`We'll marry in broad daylight. In front of both of them. And they'll end up sitting side by side, even if I have to tie them there.`),
  D('fi','h',`Voilà pourquoi je t'aime. Tu ne recules jamais.`,`That's why I love you. You never back down.`),
  N(`{fi} prend ta main, et vous regardez ensemble le soleil se coucher sur la ville qui a essayé de vous briser.`,`{fi} takes your hand, and together you watch the sun set over the city that tried to break you.`)
 ]}
]),
N(`En redescendant, vous entendez un crieur de journaux dans la rue. Il hurle une nouvelle que tu ne comprends pas tout de suite.`,`On your way down, you hear a newspaper crier in the street. He's shouting news you don't understand at first.`),
N(`« ÉDITION SPÉCIALE ! ÉVASION À NEWGATE ! »`,`"SPECIAL EDITION! ESCAPE FROM NEWGATE!"`),
{end:25}
);
