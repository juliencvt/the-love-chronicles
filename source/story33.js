/* ===== SAISON 2 — CHAPITRE 11 — Nuit d'étoiles ===== */
STORY.push(
{bg:'cathedral',mus:'mystery',chap:33,card:['Saison 2 · Chapitre 11','Season 2 · Chapter 11'],sub:['Nuit d\'étoiles','A Night of Stars'],where:['La chapelle de Valcourt','The Valcourt chapel']},
{st:['alistair','mc']},
N(`La chapelle du château est minuscule, fraîche, éclairée par un vitrail en forme de lys. Au fond, un petit orgue couvert de poussière.`,`The château chapel is tiny and cool, lit by a lily-shaped stained-glass window. At the back, a small, dust-covered organ.`),
D('alistair','n',`Les tuyaux. Regardez : ils sont sculptés en forme de lys. « Là où le lys chante. » Jouez une note.`,`The pipes. Look: they're carved in the shape of lilies. "Where the lily sings." Play a note.`),
N(`Tu appuies sur les touches une à une. Chaque tuyau répond. Sauf un. Le plus grand, au centre. Muet.`,`You press the keys one by one. Every pipe answers. Except one. The biggest, in the centre. Silent.`),
D('alistair','h',`Voilà notre coupable. Il est bouché.`,`There's our culprit. It's blocked.`),
N(`{fi} grimpe sur le banc de l'organiste et glisse la main dans le tuyau. Il en ressort un petit rouleau de parchemin, noué d'un ruban violet. Et une clé de fer, minuscule.`,`{fi} climbs onto the organist's bench and slides a hand into the pipe. Out comes a small roll of parchment tied with a violet ribbon. And a tiny iron key.`),
N(`« Bravo, mon amour. Maintenant, va là où la rivière pleure : sous la roue qui ne tourne plus. »`,`"Well done, my love. Now go where the river weeps: beneath the wheel that no longer turns."`),
D('gaspard','n',`La roue qui ne tourne plus… Le vieux moulin, sur le bief. Il est abandonné depuis la Révolution.`,`The wheel that no longer turns… The old mill, on the millrace. It's been abandoned since the Revolution.`),
C('c33a',0,[
 {t:[`Y aller tout de suite.`,`Go there at once.`],r:[D('gaspard','s',`La nuit tombe. Le bief est dangereux dans le noir. Demain, à l'aube.`,`Night is falling. The millrace is dangerous in the dark. Tomorrow, at dawn.`)]},
 {t:[`Garder la clé sur toi et attendre le jour.`,`Keep the key on you and wait for daylight.`],fx:{vig:1},r:[D('mc','n',`(Personne ne touchera à cette clé. Personne.)`,`(Nobody's going to touch this key. Nobody.)`)]}
]),

{bg:'terrace',mus:'tender',card:['Minuit','Midnight'],sub:['La comète','The Comet'],where:['Le toit de la tour nord','The roof of the north tower']},
{st:['clem','alistair']},
N(`À minuit, tout le monde monte sur le toit de la tour nord, emmitouflé dans des couvertures. Lord Grey a installé son télescope. Le ciel de la Loire est si noir que les étoiles semblent à portée de main.`,`At midnight, everyone climbs onto the roof of the north tower, bundled in blankets. Lord Grey has set up his telescope. The Loire sky is so dark the stars seem within arm's reach.`),
N(`Et la voilà. Une traînée de lumière pâle, immense, comme un voile de mariée jeté à travers le ciel.`,`And there it is. A trail of pale light, immense, like a bridal veil thrown across the sky.`),
D('clem','o',`Oh… C'est… je n'ai pas de mot.`,`Oh… It's… I have no words.`),
D('alistair','h',`Vous ? Sans mots ? C'est un phénomène plus rare que la comète.`,`You? Without words? That's a rarer phenomenon than the comet.`),
D('clem','h',`Vous venez de faire une plaisanterie. Lord Alistair Grey a fait une plaisanterie. Théo, note-le !`,`You've just made a joke. Lord Alistair Grey has made a joke. Theo, write it down!`),
N(`Lord Grey ne répond pas. Mais il ajuste la couverture sur les épaules de Clem, qui frissonne. Et sa main reste là. Une seconde de trop.`,`Lord Grey doesn't answer. But he adjusts the blanket on Clem's shoulders as she shivers. And his hand stays there. A second too long.`),
{st:['clem','mc']},
D('clem','s',`(chuchoté) Il a laissé sa main. Tu as vu ? Il a laissé sa main !`,`(whispering) He left his hand there. Did you see? He left his hand there!`),
C('m65',1,[
 {t:[`Inventer une excuse pour laisser Clem et Alistair seuls.`,`Invent an excuse to leave Clem and Alistair alone.`],set:'leaveClemAlone',fx:{rep:1},r:[
  D('mc','h',`Théo ! Je crois que j'ai oublié quelque chose en bas. Viens m'aider à le chercher. Toi aussi, {fi}. Tout de suite.`,`Theo! I think I left something downstairs. Come and help me look for it. You too, {fi}. Right now.`),
  D('theo','s',`Qu'est-ce que tu as oub… Ah. Oui. D'accord. Je viens.`,`What did you forg… Ah. Yes. All right. Coming.`),
  N(`Vous redescendez en étouffant vos rires. Quand Clem vous rejoint, une heure plus tard, elle a les joues rouges et les yeux qui brillent. Elle refuse de dire quoi que ce soit. Ce qui, chez Clem, veut tout dire.`,`You go back down, stifling your laughter. When Clem joins you an hour later, her cheeks are pink and her eyes shining. She refuses to say a single word. Which, for Clem, says everything.`),
  {set:'clemAlistairKiss'}
 ]},
 {t:[`Rester tous ensemble. Ils trouveront leur moment.`,`Stay all together. They'll find their moment.`],set:'stayGroup',r:[
  N(`Vous restez tous les six sous la comète jusqu'à ce qu'elle s'efface à l'horizon. Clem et Lord Grey ne se parlent plus. Mais leurs épaules se touchent sous la couverture. Et aucun des deux ne s'écarte.`,`All six of you stay beneath the comet until it fades on the horizon. Clem and Lord Grey don't speak any more. But their shoulders touch under the blanket. And neither moves away.`)
 ]}
]),

{bg:'chateau',mus:'tender',card:['Plus tard','Later'],sub:['',''],where:['La grande galerie','The long gallery']},
{st:['fi','mc']},
N(`Plus tard, la maison dort. {fi} et toi traversez la grande galerie du château, une bougie à la main. Au clair de lune, le parquet ciré brille comme une piste de bal.`,`Later, the house is asleep. You and {fi} cross the château's long gallery, candle in hand. In the moonlight, the polished floor gleams like a ballroom.`),
D('fi','h',`Tu sais ce qu'on n'a jamais fait ? Danser seuls. Sans orchestre, sans témoins, sans personne pour nous juger.`,`Do you know what we've never done? Danced alone. No orchestra, no witnesses, nobody judging us.`),
C('m66',1,[
 {t:[`Poser la bougie et lui tendre la main.`,`Set down the candle and hold out your hand.`],set:'moonDance',fx:{fi:3},r:[
  N(`Vous dansez sans musique, dans la galerie déserte. {fi} fredonne la berceuse d'Isadora, faux, comme toujours. Les portraits de tes ancêtres vous regardent tourner.`,`You dance without music, in the empty gallery. {fi} hums Isadora's lullaby, off-key as always. Your ancestors' portraits watch you twirl.`),
  N(`Au bout de la galerie, {fi} s'arrête. Te plaque doucement contre le mur. Et t'embrasse comme on embrasse quand on n'a plus peur de rien.`,`At the end of the gallery, {fi} stops. Gently presses you against the wall. And kisses you the way people kiss when they're no longer afraid of anything.`),
  D('fi','s',`Dans un mois, je pourrai faire ça tous les soirs.`,`In a month, I'll be able to do this every night.`),
  D('mc','h',`Tu le fais déjà tous les soirs.`,`You already do it every night.`),
  D('fi','h',`Oui, mais en cachette. Ça ne compte pas pareil.`,`Yes, but in secret. It doesn't count the same.`)
 ]},
 {t:[`L'entraîner plutôt sur le balcon, pour regarder la Loire.`,`Lead {a:him|her} out onto the balcony instead, to look at the Loire.`],set:'balconyLoire',fx:{fi:2},r:[
  N(`Sur le balcon, la Loire coule, argentée, à vos pieds. {fi} se place derrière toi et t'enveloppe dans sa veste.`,`On the balcony, the Loire flows silver at your feet. {fi} stands behind you and wraps you in {a:his|her} jacket.`),
  D('fi','s',`Quand on sera vieux, on reviendra ici. Tous les ans. Et je te dirai : tu te souviens de la nuit de la comète ?`,`When we're old, we'll come back here. Every year. And I'll say: do you remember the night of the comet?`),
  D('mc','h',`Et je dirai : non, rappelle-moi. Juste pour t'entendre la raconter.`,`And I'll say: no, remind me. Just to hear you tell it.`)
 ]}
]),
N(`En rentrant dans ta chambre, tu remarques une lumière qui bouge dans le parc. Une lanterne, qui avance vers le vieux moulin. Puis qui s'éteint.`,`Back in your room, you notice a light moving in the grounds. A lantern, heading towards the old mill. Then it goes out.`),
{end:33}
);
