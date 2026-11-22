/* ===== SAISON 2 — CHAPITRE 5 — Le grincheux de la Royal Society ===== */
STORY.push(
{bg:'opera',mus:'calm',chap:27,card:['Saison 2 · Chapitre 5','Season 2 · Chapter 5'],sub:['Le grincheux de la Royal Society','The Grump of the Royal Society'],where:['Somerset House','Somerset House']},
{st:['theo','clem']},
N(`Pour te changer les idées, Théo vous a traînées, Clem et toi, à une conférence de la Royal Society. « Les anneaux de Saturne et leurs irrégularités ». Clem a apporté des biscuits. Et un éventail. Et beaucoup d'opinions.`,`To take your mind off things, Theo has dragged you and Clem to a Royal Society lecture. "The Rings of Saturn and Their Irregularities". Clem has brought biscuits. And a fan. And a great many opinions.`),
D('clem','h',`Saturne a des anneaux ? Comme une dame ? Comme c'est coquet.`,`Saturn has rings? Like a lady? How very coquettish.`),
D('theo','s',`Clem. Je t'en supplie. Pas devant Alistair. C'est mon meilleur ami, et il n'a aucun sens de l'humour.`,`Clem. I beg you. Not in front of Alistair. He's my best friend, and he has no sense of humour whatsoever.`),
N(`Sur l'estrade, un grand homme en noir, les cheveux en désordre, déroule des cartes du ciel sans regarder le public. Il ne sourit pas. Il ne salue pas. Il commence à parler comme si la salle était vide.`,`On the platform, a tall man in black, hair in disarray, unrolls star charts without looking at the audience. He doesn't smile. He doesn't bow. He starts speaking as if the room were empty.`),
D('alistair','n',`Les anneaux de Saturne ne sont pas solides. Quiconque prétend le contraire n'a jamais regardé dans un télescope digne de ce nom. C'est-à-dire la plupart d'entre vous.`,`Saturn's rings are not solid. Anyone who claims otherwise has never looked through a telescope worthy of the name. Which is to say, most of you.`),
D('clem','o',`(Quel ours !)`,`(What a bear!)`),
N(`Quarante minutes plus tard, Clem a mangé tous les biscuits, s'est endormie deux fois, et a fini par lever la main.`,`Forty minutes later, Clem has eaten all the biscuits, dozed off twice, and finally raised her hand.`),
D('clem','h',`Monsieur ! Si les anneaux ne sont pas solides, est-ce qu'on pourrait nager dedans ?`,`Sir! If the rings aren't solid, could one swim in them?`),
N(`Toute la salle se retourne. Lord Alistair Grey pose enfin les yeux sur le public. Sur Clem. Longuement.`,`The whole room turns. Lord Alistair Grey finally sets his eyes on the audience. On Clem. For a long moment.`),
D('alistair','a',`Non.`,`No.`),
D('clem','a',`Juste « non » ? Pas d'explication ?`,`Just "no"? No explanation?`),
D('alistair','n',`Vous n'avez pas écouté les quarante dernières minutes. Je ne vois pas pourquoi vous écouteriez les quarante prochaines.`,`You haven't listened to the last forty minutes. I don't see why you'd listen to the next forty.`),
{st:['clem','mc']},
D('clem','a',`Je le déteste. Je le déteste profondément. C'est l'homme le plus odieux de Londres.`,`I hate him. I hate him profoundly. He's the most odious man in London.`),
C('c27a',0,[
 {t:[`« Tu en parles beaucoup, pour quelqu'un que tu détestes. »`,`"You talk about him a lot, for someone you hate."`],r:[D('clem','o',`Je… Ce n'est pas du tout… Tais-toi !`,`I… That's not at all… Be quiet!`)]},
 {t:[`« Il a été vraiment grossier. Tu as raison. »`,`"He was truly rude. You're right."`],r:[D('clem','h',`Merci ! Enfin quelqu'un de raisonnable.`,`Thank you! Finally, someone reasonable.`)]}
]),
{bg:'street',mus:'calm',where:['Devant Somerset House','Outside Somerset House']},
N(`À la sortie, il pleut à verse. Clem ouvre son ombrelle… qui se retourne dans le vent et se casse net.`,`Outside, it's pouring. Clem opens her parasol… which turns inside out in the wind and snaps clean in two.`),
{st:['alistair','clem']},
N(`Sans un mot, Lord Grey ôte son manteau et le pose sur les épaules de Clem. Puis il s'en va sous la pluie, tête nue, comme si de rien n'était.`,`Without a word, Lord Grey takes off his coat and puts it around Clem's shoulders. Then he walks off into the rain, bareheaded, as if nothing had happened.`),
D('clem','o',`Mais… votre manteau ! Comment je vous le rends ?`,`But… your coat! How do I give it back?`),
D('alistair','n',`Ne le rendez pas. Il vous va mieux qu'à moi.`,`Don't. It suits you better than me.`),
N(`Clem reste plantée sur le trottoir, noyée dans un manteau trois fois trop grand, la bouche ouverte.`,`Clem stands rooted to the pavement, drowning in a coat three sizes too big, mouth open.`),
D('theo','h',`Il ne fait jamais ça. Jamais. En dix ans, je ne l'ai jamais vu prêter quoi que ce soit, même pas un crayon.`,`He never does that. Never. In ten years, I've never seen him lend anything, not even a pencil.`),
C('m53',1,[
 {t:[`Jouer les entremetteurs : inviter Alistair à ton prochain dîner.`,`Play matchmaker: invite Alistair to your next dinner.`],set:'matchClem',fx:{rep:1},r:[D('mc','h',`Théo. Ton ami viendra dîner jeudi. Assis à côté de Clem. C'est un ordre de {g:futur marié|future mariée|futur·e marié·e}.`,`Theo. Your friend is coming to dinner on Thursday. Seated next to Clem. That's an order from someone about to be married.`),D('clem','a',`Quoi ?! Non ! Jamais ! … Il faut que je mette quelle robe ?`,`What?! No! Never! … Which dress should I wear?`)]},
 {t:[`Laisser faire le destin. Ces deux-là n'ont pas besoin d'aide.`,`Let fate do its work. Those two don't need any help.`],set:'fateClem',r:[D('mc','s',`(Elle gardera ce manteau. Il ne viendra jamais le réclamer. Et ils se retrouveront. J'en suis sûr{e}.)`,`(She'll keep that coat. He'll never come to claim it. And they'll find each other again. I'm sure of it.)`)]}
]),

{bg:'terrace',mus:'tender',card:['La nuit','Night'],sub:['',''],where:['L\'observatoire de Lord Grey','Lord Grey\'s observatory']},
{st:['fi','mc']},
N(`Le soir même, à ta grande surprise, un billet de Lord Grey arrive. Une invitation sèche, sans formule de politesse : « Saturne sera visible à minuit. Toit de ma maison, Bloomsbury. Venez avec qui vous voulez. Pas Clementine. »`,`That same evening, to your great surprise, a note arrives from Lord Grey. A curt invitation, without a single courtesy: "Saturn will be visible at midnight. Roof of my house, Bloomsbury. Bring whomever you like. Not Clementine."`),
N(`Évidemment, Clem n'est pas venue. Elle a envoyé Théo à sa place, avec pour mission de « tout noter ». Et toi, tu es venu{e} avec {fi}.`,`Naturally, Clem hasn't come. She's sent Theo in her place, with orders to "note everything down". And you've come with {fi}.`),
N(`Lord Grey règle son télescope sans un mot, puis s'écarte pour te laisser regarder. Saturne apparaît, minuscule et parfaite, cerclée de lumière.`,`Lord Grey adjusts his telescope without a word, then steps aside to let you look. Saturn appears, tiny and perfect, ringed with light.`),
D('alistair','s',`Elle a demandé si on pouvait nager dedans. C'est la question la plus absurde qu'on m'ait jamais posée. Je n'arrête pas d'y penser.`,`She asked if one could swim in them. It's the most absurd question anyone has ever asked me. I can't stop thinking about it.`),
N(`Lord Grey s'éloigne vers l'autre bout du toit avec Théo. {fi} vient se placer derrière toi, ses bras autour de ta taille, son menton sur ton épaule.`,`Lord Grey walks off to the other end of the roof with Theo. {fi} comes to stand behind you, arms around your waist, chin on your shoulder.`),
D('fi','s',`Tu sais ce que je vois, moi, quand je regarde le ciel ? Rien du tout. Je te regarde toi qui regardes le ciel.`,`Do you know what I see when I look at the sky? Nothing at all. I'm watching you watching the sky.`),
C('m54',1,[
 {t:[`Te retourner dans ses bras et l'embrasser sous les étoiles.`,`Turn in {a:his|her} arms and kiss {a:him|her} under the stars.`],set:'kissStars',fx:{fi:3},r:[N(`Tu te retournes. {fi} sourit déjà. Le baiser est lent, doux, et quelque part au-dessus de vous, Saturne tourne sans se presser.`,`You turn around. {fi} is already smiling. The kiss is slow and sweet, and somewhere above you, Saturn turns at its leisure.`),D('alistair','n',`(de loin) Vous gênez la mise au point.`,`(from afar) You're interfering with the focus.`)]},
 {t:[`Lui montrer Saturne à son tour, et regarder son émerveillement.`,`Show {a:him|her} Saturn in turn, and watch {a:his|her} wonder.`],set:'showSaturn',fx:{fi:2},r:[N(`{fi} se penche sur l'oculaire. Un long silence. Puis un souffle émerveillé, comme un enfant devant la neige.`,`{fi} leans over the eyepiece. A long silence. Then a breath of wonder, like a child seeing snow.`),D('fi','h',`On dirait une bague. Une bague pour le ciel. … Tu crois qu'on peut l'acheter ?`,`It looks like a ring. A ring for the sky. … Do you think we can buy it?`)]}
]),
{end:27}
);
