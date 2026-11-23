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
  {bg:'bedroom',mus:'tender',card:['Le lendemain','The next morning'],sub:['',''],where:['La chambre nuptiale','The bridal chamber']},
  {st:['fi','mc']},
  N(`Le lendemain, tu te réveilles la tête sur son épaule. Dehors, la calèche est déjà chargée. Vos malles, les cadeaux, et un panier de Bess qui pourrait nourrir un régiment.`,`The next morning, you wake with your head on {a:his|her} shoulder. Outside, the carriage is already loaded. Your trunks, the gifts, and a basket from Bess that could feed a regiment.`),
  D('fi','h',`Debout, {g:mon mari|mon épouse|mon amour}. Venise nous attend. Et je refuse d'arriver en retard à ma propre lune de miel.`,`Up you get, my love. Venice is waiting. And I refuse to be late for my own honeymoon.`),
  N(`Sur le plateau du petit-déjeuner, une lettre aux timbres français. L'écriture penchée de Camille.`,`On the breakfast tray, a letter with French stamps. Camille's slanted handwriting.`),
  N(`« Mille bonheurs à vous deux. Et une chose, même si ce n'est pas le moment : le jeune homme de la rue du Bac est revenu. Sauf que ce n'est pas un jeune homme, j'en mettrais ma main au feu. Je t'en dirai plus quand je serai sûre. En attendant, profite de ta lune de miel. Tu l'as méritée. — Camille »`,`"A thousand joys to you both. And one thing, even if it's not the moment: the young man from the Rue du Bac came back. Except it isn't a young man, I'd swear to it. I'll tell you more when I'm sure. Meanwhile, enjoy your honeymoon. You've earned it. — Camille"`),
  D('mc','o',`(Pas un jeune homme… Alors qui ?)`,`(Not a young man… Then who?)`),
  D('fi','h',`Tu as cette petite ride entre les sourcils. Range cette lettre. Pendant un mois, le monde n'existe plus.`,`You've got that little crease between your brows. Put that letter away. For one month, the world doesn't exist.`),
  N(`À suivre dans la saison 3 : Venise, puis Paris…`,`To be continued in Season 3: Venice, then Paris…`)
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
 N(`Le soir même, une lettre t'attend sur ton secrétaire. L'écriture penchée de Camille.`,`That same evening, a letter waits on your writing desk. Camille's slanted handwriting.`),
 N(`« J'ai appris pour Lord Pembroke. Je suis tellement désolée. Je ne sais pas quoi dire, alors je dis juste : je pense à toi, tous les jours. Et une chose, même si ce n'est pas le moment : le jeune homme de la rue du Bac est revenu. Sauf que ce n'est pas un jeune homme, j'en mettrais ma main au feu. Je t'en dirai plus quand je serai sûre. — Camille »`,`"I heard about Lord Pembroke. I'm so sorry. I don't know what to say, so I'll just say: I think of you every day. And one thing, even if it's not the moment: the young man from the Rue du Bac came back. Except it isn't a young man, I'd swear to it. I'll tell you more when I'm sure. — Camille"`),
 D('mc','o',`(Pas un jeune homme… Alors qui ?)`,`(Not a young man… Then who?)`),
 D('fi','s',`Quand tout ça sera un peu moins lourd, je t'emmène loin d'ici. Venise. Je te le promets.`,`When all this weighs a little less, I'll take you far from here. Venice. I promise.`),
 N(`À suivre dans la saison 3 : Venise, puis Paris…`,`To be continued in Season 3: Venice, then Paris…`)
]),
{end:44}
);
