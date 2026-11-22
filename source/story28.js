/* ===== SAISON 2 — CHAPITRE 6 — Le bal des fiançailles ===== */
STORY.push(
{bg:'ball',mus:'ball',chap:28,card:['Saison 2 · Chapitre 6','Season 2 · Chapter 6'],sub:['Le bal des fiançailles','The Engagement Ball'],where:['Pembroke House','Pembroke House']},
{st:['lordp','ladyp']},
N(`Lord Pembroke a tenu à offrir le bal des fiançailles. Pembroke House est noyée sous les roses blanches. Six gardes armés surveillent les portes, déguisés en valets… très mal déguisés.`,`Lord Pembroke insisted on giving the engagement ball. Pembroke House is drowning in white roses. Six armed guards watch the doors, disguised as footmen… very badly disguised.`),
D('ladyp','n',`Mon mari a dépensé une fortune. Pour {g:un enfant|une enfant|un·e enfant} qui n'est même pas le sien. Il faudra un jour qu'il m'explique.`,`My husband has spent a fortune. On a child who isn't even his own. Someday he'll have to explain it to me.`),
D('lordp','h',`Honoria, ma chérie, va donc goûter le punch.`,`Honoria, my dear, do go and taste the punch.`),
{st:['mother','mc']},
N(`Ta mère arrive en robe de soie bleu de France, la tête haute. Elle a passé trois jours à préparer cette entrée. Elle a l'air prête à livrer bataille.`,`Your mother arrives in French-blue silk, head held high. She has spent three days preparing this entrance. She looks ready to go into battle.`),
D('mother','a',`Si cette femme ose venir, je…`,`If that woman dares to show up, I'll…`),
N(`Les portes s'ouvrent. La Duchesse d'Ashbury fait son entrée. Tous les regards vont de l'une à l'autre, comme au jeu de paume.`,`The doors open. The Duchess of Ashbury makes her entrance. Every eye goes from one to the other, as if watching a game of tennis.`),
...IF('sideMother',[D('duchess','n',`Je n'ai pas changé d'avis, Comtesse. Mais je ne laisserai pas dire que la Duchesse d'Ashbury fuit un bal.`,`I haven't changed my mind, Countess. But I won't have it said that the Duchess of Ashbury runs away from a ball.`)],[D('duchess','n',`La trêve tient toujours, Comtesse ?`,`Does the truce still hold, Countess?`),D('mother','n',`Jusqu'au dessert, Votre Grâce.`,`Until dessert, Your Grace.`)]),
{st:['duchess','mother']},
N(`Puis la guerre reprend, à voix basse, en souriant. Les fleurs : trop françaises. La musique : trop allemande. Le menu : trop épicé. Chaque phrase est un coup d'épée enrobé de miel.`,`Then the war resumes, in low voices, with smiles. The flowers: too French. The music: too German. The menu: too spicy. Every sentence is a sword thrust coated in honey.`),
C('m55',1,[
 {t:[`Inviter publiquement la Duchesse à ouvrir le bal avec ton père.`,`Publicly invite the Duchess to open the ball with your father.`],set:'honorDuchess',fx:{rep:2,vig:1},r:[
  D('mc','h',`Votre Grâce, me ferez-vous l'honneur d'ouvrir ce bal ? Mon père serait ravi d'être votre cavalier.`,`Your Grace, will you do me the honour of opening this ball? My father would be delighted to be your partner.`),
  N(`La Duchesse te fixe, prise au piège de la politesse. Toute la salle attend. Elle ne peut pas refuser.`,`The Duchess stares at you, caught in the trap of good manners. The whole room is waiting. She can't refuse.`),
  D('duchess','s',`… Vous êtes {g:un petit diable|une petite diablesse|un petit diable}. Comme votre mère. L'autre, je veux dire.`,`… You're a little devil. Like your mother. The other one, I mean.`),
  N(`Ton père la mène sur la piste. Ta mère manque de s'étouffer… puis éclate de rire.`,`Your father leads her onto the floor. Your mother nearly chokes… then bursts out laughing.`)
 ]},
 {t:[`Entraîner ta mère loin de la Duchesse, et ignorer l'affront.`,`Lead your mother away from the Duchess, and ignore the slight.`],set:'avoidDuchess',r:[
  D('mc','n',`Viens, Maman. Ce soir, c'est ma fête. Personne ne la gâchera.`,`Come, Mama. Tonight is my party. Nobody is going to spoil it.`),
  N(`Vous tournez le dos à la Duchesse. Un murmure parcourt la salle. Demain, tout Londres saura que les deux familles ne se parlent plus.`,`You turn your back on the Duchess. A murmur runs through the room. Tomorrow, all London will know that the two families are no longer speaking.`)
 ]}
]),
{st:['clem','alistair']},
...IF('matchClem',[N(`Près du buffet, Clem et Lord Grey se disputent. Depuis le dîner de jeudi, ils n'ont pas cessé.`,`By the buffet, Clem and Lord Grey are arguing. They haven't stopped since Thursday's dinner.`)],[N(`Près du buffet, une silhouette noire et renfrognée surgit à côté de Clem. Lord Grey, que personne n'a invité.`,`By the buffet, a dark, scowling figure appears beside Clem. Lord Grey, whom nobody invited.`)]),
D('clem','a',`Vous détestez les bals. Vous l'avez dit trois fois. Pourquoi êtes-vous là ?`,`You hate balls. You've said so three times. Why are you here?`),
D('alistair','n',`Mon manteau.`,`My coat.`),
D('clem','o',`Votre… Vous m'avez dit de le garder !`,`Your… You told me to keep it!`),
D('alistair','s',`J'ai menti. C'était une excuse. Je cherchais une excuse.`,`I lied. It was an excuse. I was looking for an excuse.`),
N(`Clem ouvre la bouche, la referme, et pour la première fois depuis que tu la connais, elle ne trouve rien à dire.`,`Clem opens her mouth, closes it again, and for the first time since you've known her, she can't think of a single thing to say.`),

{st:['lordp','mc']},
N(`Plus tard, tu trouves Lord Pembroke seul sur le balcon, une lettre froissée à la main. Le cachet au lys noir.`,`Later, you find Lord Pembroke alone on the balcony, a crumpled letter in his hand. The black-lily seal.`),
D('lordp','s',`Elle veut de l'argent. Beaucoup. Et un passeport pour la France. Sinon… Sinon elle dira à toute l'Angleterre ce que j'ai fait.`,`She wants money. A lot of it. And a passport for France. Otherwise… otherwise she'll tell all England what I did.`),
D('mc','o',`Ce que vous avez fait ?`,`What you did?`),
N(`Il ouvre la bouche. À cet instant, Lady Pembroke apparaît à la porte-fenêtre. Il fourre la lettre dans sa poche.`,`He opens his mouth. At that moment, Lady Pembroke appears at the French window. He stuffs the letter into his pocket.`),
D('lordp','h',`Demain. Viens demain. Je te dirai tout.`,`Tomorrow. Come tomorrow. I'll tell you everything.`),

{bg:'ball',mus:'tender',where:['La piste de danse','The dance floor']},
{st:['fi','mc']},
N(`Minuit. L'orchestre joue la valse des fiancés. Toute la salle s'écarte pour vous laisser la piste. Ton bouquet de roses blanches à la main, tu poses l'autre sur l'épaule de {fi}.`,`Midnight. The orchestra plays the betrothal waltz. The whole room draws back to give you the floor. Your bouquet of white roses in one hand, you rest the other on {fi}'s shoulder.`),
D('fi','s',`Tout le monde nous regarde.`,`Everyone's looking at us.`),
D('mc','h',`Laisse-les regarder.`,`Let them look.`),
C('m56',1,[
 {t:[`Lui murmurer à l'oreille ce que tu ressens, pendant la valse.`,`Whisper in {a:his|her} ear what you feel, during the waltz.`],set:'whisperVows',fx:{fi:3},r:[D('mc','s',`Je t'aime. Je t'aimerai quand on se disputera sur la couleur des rideaux. Je t'aimerai quand on sera vieux et ridés. Je t'aimerai même quand tu chanteras faux.`,`I love you. I'll love you when we argue about the colour of the curtains. I'll love you when we're old and wrinkled. I'll even love you when you sing off-key.`),N(`{fi} manque un pas. Puis {a:il|elle} te serre plus fort, et vous ne dansez plus vraiment, vous vous balancez sur place, front contre front, au milieu de tout Londres.`,`{fi} misses a step. Then {a:he|she} holds you tighter, and you're not really dancing any more, just swaying on the spot, forehead to forehead, in the middle of all London.`)]},
 {t:[`Danser en silence, les yeux dans les yeux.`,`Dance in silence, eyes locked.`],set:'silentWaltz',fx:{fi:2},r:[N(`Vous ne dites rien. Vous n'avez pas besoin. Chaque tour de valse dit la même chose que le précédent, un peu plus fort.`,`You say nothing. You don't need to. Every turn of the waltz says the same thing as the last, a little louder.`)]}
]),
N(`La valse s'achève sous les applaudissements. Tu baisses les yeux vers ton bouquet… et ton sourire se fige.`,`The waltz ends to applause. You look down at your bouquet… and your smile freezes.`),
N(`Au milieu des roses blanches, quelqu'un a glissé un lys. Un lys noir.`,`In the middle of the white roses, someone has slipped a lily. A black lily.`),
D('mc','o',`(Elle était là. Ici. Dans cette salle. À quelques pas de moi.)`,`(She was here. In this room. A few steps away from me.)`),
{end:28}
);
