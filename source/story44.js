/* ===== SAISON 2 — CHAPITRE 22 — Épilogue ===== */
STORY.push(
...IF('goodEnd',[
 {bg:'bedroom',mus:'tender',chap:44,card:['Saison 2 · Chapitre 22','Season 2 · Chapter 22'],sub:['Lune de miel','Honeymoon'],where:['La chambre nuptiale','The bridal chamber']},
 {st:['fi','mc']},
 N(`Le soir des noces. Les invités sont partis. Les bougies brûlent depuis des heures, et la porte est enfin fermée à clé.`,`The wedding night. The guests have gone. The candles have been burning for hours, and the door is finally locked.`),
 D('fi','s',`J'ai une promesse à tenir. Les gants.`,`I have a promise to keep. The gloves.`),
 N(`{fi} prend ta main. Défait le premier bouton de nacre, au poignet. Puis le deuxième. {a:Il|Elle} embrasse chaque centimètre de peau qu'{a:il|elle} découvre.`,`{fi} takes your hand. Undoes the first mother-of-pearl button at the wrist. Then the second. {a:He|She} kisses every inch of skin {a:he|she} uncovers.`),
 N(`Le gant glisse. Puis l'autre. Tu n'aurais jamais cru qu'on puisse trembler autant pour deux morceaux de soie.`,`The glove slips off. Then the other. You never thought anyone could tremble so much over two pieces of silk.`),
 C('m87n',1,[
  {t:[`Défaire à ton tour {a:sa cravate|les lacets de sa robe}.`,`Undo {a:his cravat|the laces of her gown} in turn.`],set:'wnLead',fx:{fi:2},r:[N(`Tes doigts s'emmêlent, maladroits. {fi} rit tout bas contre ta bouche et ne t'aide pas du tout. Exprès.`,`Your fingers tangle, clumsy. {fi} laughs softly against your mouth and doesn't help you at all. On purpose.`)]},
  {t:[`Fermer les yeux et te laisser faire.`,`Close your eyes and let {a:him|her}.`],set:'wnLet',fx:{fi:2},r:[N(`Tu fermes les yeux. Tu ne sens plus que ses mains, son souffle, la soie qui cède. Le monde se réduit à ça.`,`You close your eyes. All you feel is {a:his|her} hands, {a:his|her} breath, the silk giving way. The world shrinks to that.`)]}
 ]),
 N(`Le reste tombe, pièce après pièce, sur le tapis. Ses mains sont chaudes, partout, lentes, comme si {fi} avait toute la vie devant {a:lui|elle}. Et c'est le cas.`,`The rest falls, piece by piece, onto the rug. {a:His|Her} hands are warm, everywhere, slow, as if {fi} had a whole lifetime ahead. And {a:he|she} does.`),
 N(`Son souffle dans ton cou. Ton prénom murmuré contre ta peau, encore et encore, comme une prière. Les draps froids, puis brûlants.`,`{a:His|Her} breath on your neck. Your name murmured against your skin, again and again, like a prayer. The sheets cold, then burning.`),
 D('mc','s',`Plus de secrets, ce soir.`,`No more secrets tonight.`),
 D('fi','s',`Plus aucun. Juste toi.`,`None. Just you.`),
 N(`Une à une, les bougies s'éteignent. Celle de la table de nuit tient la dernière. Puis elle aussi renonce, et la nuit vous appartient.`,`One by one, the candles go out. The one on the nightstand holds out the longest. Then it too gives up, and the night belongs to you.`),
 {bg:'river',mus:'tender',card:['Un mois plus tard','A month later'],sub:['Venise','Venice'],where:['Venise','Venice']},
 {st:['fi','mc']},
 N(`Un mois plus tard. Venise. Une gondole glisse sur le Grand Canal au coucher du soleil. Les palais se reflètent dans l'eau, roses et dorés, comme s'ils étaient peints sur du verre.`,`A month later. Venice. A gondola glides down the Grand Canal at sunset. The palaces are reflected in the water, pink and gold, as if painted on glass.`),
 D('fi','h',`Comment je dois t'appeler, maintenant ? « Mon {g:mari|épouse|époux·se} » ? Je n'arrive toujours pas à m'y habituer.`,`What am I supposed to call you now? We never settled that question.`),
 D('mc','h',`Appelle-moi comme avant. Ça me va très bien.`,`Call me what you always have. It suits me very well.`),
 N(`Les nouvelles de Londres arrivent par chaque courrier : Iris a été jugée et condamnée à la déportation, à vie, en Nouvelle-Galles du Sud. Clem et Alistair se marient au printemps. Ta mère et la Duchesse prennent le thé ensemble tous les jeudis et se disputent toujours. Elles adorent ça.`,`News from London arrives with every post: Iris has been tried and sentenced to transportation for life, to New South Wales. Clem and Alistair marry in the spring. Your mother and the Duchess take tea together every Thursday and still argue. They love it.`),
 ...IF('pearlsSafe',[N(`Les Larmes de Valcourt sont à ton cou. Quarante perles noires, toutes retrouvées. Tu les portes pour Isadora.`,`The Tears of Valcourt are around your neck. Forty black pearls, all recovered. You wear them for Isadora.`)],[N(`On a retrouvé les Larmes de Valcourt dans la malle d'Iris, à Douvres. Il en manquait trois. Les trente-sept autres sont à ton cou. Tu les portes pour Isadora.`,`The Tears of Valcourt were found in Iris's trunk at Dover. Three were missing. The other thirty-seven are around your neck. You wear them for Isadora.`)]),
 C('m87',1,[
  {t:[`Demander au gondolier de vous laisser au pont des Soupirs, pour un baiser sous le pont, comme le veut la légende.`,`Ask the gondolier to take you under the Bridge of Sighs, for a kiss beneath it, as legend demands.`],set:'sighsKiss',fx:{fi:3},r:[N(`Sous le pont des Soupirs, au moment où les cloches de Saint-Marc sonnent, tu embrasses {fi}. La légende dit que les amoureux qui s'embrassent ici s'aimeront pour l'éternité. Tu n'as pas besoin de légende. Mais c'est joli quand même.`,`Under the Bridge of Sighs, just as the bells of St Mark's ring out, you kiss {fi}. Legend says lovers who kiss here will love each other for eternity. You don't need a legend. But it's lovely all the same.`)]},
  {t:[`Rester allongés dans la gondole, ta tête sur ses genoux, à regarder le ciel.`,`Lie in the gondola, your head in {a:his|her} lap, watching the sky.`],set:'gondolaSky',fx:{fi:3},r:[N(`Tu poses ta tête sur ses genoux. {fi} joue avec tes cheveux. Au-dessus de vous, le ciel passe du rose au violet, puis au bleu nuit. La première étoile apparaît.`,`You rest your head in {a:his|her} lap. {fi} plays with your hair. Above you, the sky turns from pink to violet, then midnight blue. The first star appears.`),D('fi','s',`Alistair dirait que c'est Vénus. Moi je dis que c'est Isadora. Elle nous regarde.`,`Alistair would say that's Venus. I say it's Isadora. She's watching us.`)]}
 ]),
 {bg:'bedroom',mus:'mystery',card:['Le soir','Evening'],sub:['',''],where:['Le palais Dandolo','Palazzo Dandolo']},
 {st:['fi','mc']},
 N(`Le soir, de retour au palais où vous logez, le concierge vous tend une lettre. Elle est arrivée le matin même. Sans timbre. Sans expéditeur.`,`In the evening, back at the palazzo where you're staying, the concierge hands you a letter. It arrived that very morning. No stamp. No sender.`),
 N(`Tu reconnais l'écriture au premier coup d'œil. Tu l'as lue cent fois dans un cahier de cuir rouge. Les mêmes boucles. Le même « I » orné.`,`You recognise the handwriting at first glance. You've read it a hundred times in a red leather notebook. The same loops. The same ornate "I".`),
 N(`« Mon enfant. On m'a dit que tu t'étais marié{g:|e|·e}. Je n'ai jamais été aussi fière. Ne me cherche pas. Pas encore. Mais sache que je suis vivante. — Maman. »`,`"My child. I'm told you've married. I've never been so proud. Don't look for me. Not yet. But know that I'm alive. — Mama."`),
 N(`La lettre est datée du 2 octobre 1813. Isadora est morte en janvier 1795.`,`The letter is dated 2 October 1813. Isadora died in January 1795.`),
 D('fi','o',`C'est… c'est impossible.`,`That's… that's impossible.`),
 D('mc','o',`(Isadora. Vivante ?)`,`(Isadora. Alive?)`),
 C('m88',1,[
  {t:[`« On rentre. On la cherche. Dès demain. »`,`"We're going home. We'll look for her. Starting tomorrow."`],set:'searchIsadora',r:[D('fi','s',`Alors on la cherchera. Ensemble. Comme toujours.`,`Then we'll look for her. Together. As always.`)]},
  {t:[`Serrer la lettre contre ton cœur, sans un mot.`,`Press the letter to your heart, without a word.`],set:'holdLetter',r:[N(`Tu ne dis rien. {fi} te prend dans ses bras. Par la fenêtre, Venise scintille comme si rien n'avait changé. Tout a changé.`,`You say nothing. {fi} takes you in {a:his|her} arms. Through the window, Venice glitters as if nothing had changed. Everything has.`)]}
 ]),
 N(`Le soir même, une deuxième lettre t'attend sur ton secrétaire. L'écriture penchée de Camille.`,`That same evening, a second letter waits on your writing desk. Camille's slanted handwriting.`),
N(`« Je l'ai revue. La dame voilée. Elle était à Saint-Sulpice, devant le registre où ton nom est écrit. Viens à Paris. Viens vite. Cette fois, je serai là. Je te le promets. — Camille »`,`"I saw her again. The veiled lady. She was at Saint-Sulpice, in front of the register where your name is written. Come to Paris. Come quickly. This time, I'll be there. I promise. — Camille"`),
D('mc','s',`(Paris. Après tout ce temps… Camille, j'arrive.)`,`(Paris. After all this time… Camille, I'm coming.)`),
N(`À suivre dans la saison 3 : Paris…`,`To be continued in Season 3: Paris…`)
],[
 {bg:'bedroom',mus:'mystery',chap:44,card:['Saison 2 · Chapitre 22','Season 2 · Chapter 22'],sub:['Le prix du bonheur','The Price of Happiness'],where:['Pembroke House','Pembroke House']},
 {st:['lordp','mc']},
 N(`Pembroke House, la nuit de tes noces. Lord Pembroke est allongé dans son grand lit, pâle comme les draps. Le médecin est sorti en secouant la tête. Toute la famille est là. Et toi, encore dans ta tenue de mariage tachée de sang.`,`Pembroke House, your wedding night. Lord Pembroke lies in his great bed, pale as the sheets. The doctor has left, shaking his head. The whole family is there. And you, still in your bloodstained wedding attire.`),
 D('lordp','s',`Ne fais pas cette tête, mon enfant. C'est ton mariage. On ne pleure pas à un mariage. Enfin… si. Mais de joie.`,`Don't make that face, my dear. It's your wedding. One doesn't cry at a wedding. Well… one does. But for joy.`),
 D('lordp','s',`Pendant dix-huit ans, je me suis dit : si seulement j'étais arrivé une minute plus tôt. Si seulement j'avais regardé ce flacon. Cette fois, j'ai regardé. Cette fois, je suis arrivé à temps.`,`For eighteen years, I told myself: if only I'd arrived a minute sooner. If only I'd looked at that vial. This time, I looked. This time, I arrived in time.`),
 {st:['clem','theo']},
 D('lordp','s',`Clem, ma chérie… épouse ton astronome. Il est grincheux, mais il t'aime. Théo… prends soin de ta mère. Et de ta sœur. Et… si un jour vous retrouvez Cordelia… dites-lui que je l'aimais aussi.`,`Clem, my darling… marry your astronomer. He's grumpy, but he loves you. Theo… look after your mother. And your sister. And… if you ever find Cordelia… tell her I loved her too.`),
 N(`Lady Pembroke lui tient la main jusqu'au bout. Il s'éteint à l'aube, en souriant, comme quelqu'un qui pose enfin un fardeau.`,`Lady Pembroke holds his hand until the end. He passes at dawn, smiling, like someone finally laying down a burden.`),
 C('m87b',1,[
  {t:[`Rester auprès de Clem toute la journée.`,`Stay with Clem all day.`],set:'stayClem',fx:{rep:1},r:[N(`Tu restes avec Clem. Tu ne dis rien d'intelligent, parce qu'il n'y a rien d'intelligent à dire. Tu tiens sa main. Alistair tient l'autre. C'est assez.`,`You stay with Clem. You say nothing clever, because there's nothing clever to say. You hold her hand. Alistair holds the other. It's enough.`)]},
  {t:[`Te réfugier dans les bras de {fi}.`,`Take refuge in {fi}'s arms.`],set:'griefFi',fx:{fi:3},r:[N(`Tu trouves {fi} dans le couloir. Vous ne dites rien. {a:Il|Elle} te serre contre {a:lui|elle}, et tu pleures enfin, dans sa chemise de marié{a:|e}.`,`You find {fi} in the corridor. Neither of you speaks. {a:He|She} holds you close, and at last you cry, into {a:his|her} wedding shirt.`),D('fi','s',`On a promis : même quand ce sera difficile. Surtout quand ce sera difficile.`,`We promised: even when it's hard. Especially when it's hard.`)]}
 ]),
 {bg:'cathedral',mus:'tender',card:['Une semaine plus tard','A week later'],sub:['',''],where:['Le cimetière de Pembroke','The Pembroke graveyard']},
 {st:['fi','mc']},
 N(`L'enterrement a lieu un matin de pluie. Iris a été arrêtée sur les marches de l'église. Elle sera pendue pour le meurtre de Lord Pembroke. Ça ne console personne.`,`The funeral takes place on a rainy morning. Iris was arrested on the church steps. She'll hang for the murder of Lord Pembroke. It consoles no one.`),
 N(`Après la cérémonie, une femme voilée s'approche de toi, te glisse une enveloppe dans la main, et disparaît dans la foule des parapluies avant que tu aies pu voir son visage.`,`After the service, a veiled woman approaches you, slips an envelope into your hand, and vanishes among the umbrellas before you can see her face.`),
 N(`Tu reconnais l'écriture au premier coup d'œil. Tu l'as lue cent fois dans un cahier de cuir rouge. Les mêmes boucles. Le même « I » orné.`,`You recognise the handwriting at first glance. You've read it a hundred times in a red leather notebook. The same loops. The same ornate "I".`),
 N(`« Mon enfant. Arthur m'a protégée une dernière fois. Je ne laisserai pas son sacrifice être vain. Ne me cherche pas. Pas encore. Mais sache que je suis vivante. — Maman. »`,`"My child. Arthur protected me one last time. I won't let his sacrifice be in vain. Don't look for me. Not yet. But know that I'm alive. — Mama."`),
 D('fi','o',`Isadora ? Mais… elle est morte il y a dix-huit ans.`,`Isadora? But… she died eighteen years ago.`),
 C('m88b',1,[
  {t:[`Courir dans la foule, chercher la femme voilée.`,`Run into the crowd, look for the veiled woman.`],set:'runVeiled',r:[N(`Tu cours entre les parapluies, tu appelles. Personne. Juste, sur le pavé mouillé, une violette. Comme celles qu'Henri apportait à Isadora.`,`You run among the umbrellas, calling out. No one. Just, on the wet cobbles, a violet. Like the ones Henri used to bring Isadora.`)]},
  {t:[`Serrer la lettre contre ton cœur et prendre la main de {fi}.`,`Press the letter to your heart and take {fi}'s hand.`],set:'holdLetterB',fx:{fi:2},r:[D('fi','s',`Quoi que ce soit, on le découvrira ensemble. Je te l'ai promis devant Dieu, il y a une semaine.`,`Whatever this is, we'll find out together. I promised you before God, a week ago.`)]}
 ]),
 N(`Le soir même, une deuxième lettre t'attend sur ton secrétaire. L'écriture penchée de Camille.`,`That same evening, a second letter waits on your writing desk. Camille's slanted handwriting.`),
N(`« Je l'ai revue. La dame voilée. Elle était à Saint-Sulpice, devant le registre où ton nom est écrit. Viens à Paris. Viens vite. Cette fois, je serai là. Je te le promets. — Camille »`,`"I saw her again. The veiled lady. She was at Saint-Sulpice, in front of the register where your name is written. Come to Paris. Come quickly. This time, I'll be there. I promise. — Camille"`),
D('mc','s',`(Paris. Après tout ce temps… Camille, j'arrive.)`,`(Paris. After all this time… Camille, I'm coming.)`),
N(`À suivre dans la saison 3 : Paris…`,`To be continued in Season 3: Paris…`)
]),
{end:44}
);
