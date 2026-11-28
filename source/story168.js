/* ===== LA FIANCÉE DU CORSAIRE — SAISON 4 — CHAPITRE 2 — La cabine de poupe ===== */
STORY.push(
{bg:'ship',mus:'calm',chap:168,card:['Saison 4 · Chapitre 2','Season 4 · Chapter 2'],sub:['La cabine de poupe','The Stern Cabin'],where:['*La Fiancée*, à quai','*The Betrothed*, at the quay']},
{st:['lv','mc']},
N(`La cabine de poupe de *La Fiancée* est la plus jolie du navire. C'est une petite pièce en bois de cèdre, juste sous le gouvernail, avec deux fenêtres rondes qui donnent sur le sillage. Jusqu'ici, elle servait à ranger les cartes, les cordages de rechange, et la collection de bouteilles vides de Kit.`,`The stern cabin of *The Betrothed* is the prettiest on the ship. A small cedarwood room just under the rudder, with two round windows over the wake. Until now it held the charts, the spare rigging, and Kit's collection of empty bottles.`),
D('lv','h',`Voilà mon idée. On vide tout. On ponce. On repeint. Et on en fait la plus belle chambre de toutes les Caraïbes.`,`Here's my idea. We empty it all. Sand it. Repaint it. And make it the most beautiful bedroom in the whole Caribbean.`),
...IF('fiF',[
 D('lv','s',`Une chambre pour {kid}. Rien qu'à elle. Avec une fenêtre sur la mer, pour qu'elle voie toujours d'où elle vient.`,`A room for {kid}. All her own. With a window on the sea, so she always sees where she came from.`),
],[
 D('lv','s',`Une chambre pour le bébé. Avec une fenêtre sur la mer. Comme ça, la première chose qu'il verra en ouvrant les yeux, ce sera l'eau. Ou elle. On ne sait pas encore.`,`A room for the baby. With a window on the sea. That way the first thing the baby sees on opening its eyes will be the water.`),
]),
N(`Tu regardes la petite cabine, la poussière, les toiles d'araignée, les bouteilles de Kit. Et tu la vois déjà. Exactement comme elle sera.`,`You look at the little cabin, the dust, the cobwebs, Kit's bottles. And you can already see it. Exactly as it will be.`),
{bg:'ship',mus:'calm',card:['Le grand ménage','The big clear-out'],sub:['',''],where:['*La Fiancée*','*The Betrothed*']},
{st:['kit','mc']},
N(`Le ménage prend trois jours. Kit pleure un peu en sortant ses bouteilles. Matthias récupère les cordages et en fait des tapis tressés. Anne arrive avec un seau de peinture bleue qu'elle a « trouvé » sur un navire marchand. Personne ne pose de questions.`,`The clear-out takes three days. Kit cries a little carrying out his bottles. Matthias salvages the rope and braids it into rugs. Anne turns up with a bucket of blue paint she "found" on a merchant ship. No one asks questions.`),
{st:['anne','mc']},
D('anne','h',`Bleu. Comme la mer. Ou comme le visage du capitaine marchand quand il a vu que son seau avait disparu.`,`Blue. Like the sea. Or like the merchant captain's face when he saw his bucket was gone.`),
C('p68a',0,[
 {t:[`Peindre les murs en bleu, comme le fond de la mer.`,`Paint the walls blue, like the seabed.`],set:'pRoomBlue',r:[N(`Vous peignez les murs en bleu profond, du sol au plafond. Puis Kit et toi ajoutez des poissons, des coquillages, une tortue et une baleine qui sourit. Le plafond devient un ciel d'étoiles dorées. Quand la lanterne est allumée, on a l'impression d'être au fond de l'océan.`,`You paint the walls deep blue, floor to ceiling. Then you add fish, shells, a turtle and a smiling whale. The ceiling becomes a sky of golden stars. When the lantern is lit, it feels like being at the bottom of the ocean.`)]},
 {t:[`Laisser le bois nu, et accrocher partout des coquillages.`,`Leave the wood bare and hang shells everywhere.`],set:'pRoomShells',r:[N(`Vous laissez le cèdre tel quel, doré et parfumé. Puis vous passez deux jours à ramasser des coquillages sur la plage : des nacrés, des roses, des spirales, des minuscules. Tu en fais des guirlandes, et un grand mobile qui tinte doucement quand le navire roule. On dirait la grotte d'une sirène.`,`You leave the cedar as it is, golden and fragrant. Then you spend two days gathering shells on the beach: pearly ones, pink ones, spirals, tiny ones. You string them into garlands and a big mobile that chimes softly when the ship rolls. It looks like a mermaid's grotto.`)]}
]),
...IF('pCelesteCrew',[
 {st:['celeste','mc']},
 N(`Céleste apporte un cadeau, enveloppé dans une feuille de bananier : une petite lanterne en verre de couleur, qu'elle a fabriquée elle-même. Quand on l'allume, elle projette des lucioles dorées sur les murs.`,`Céleste brings a gift wrapped in a banana leaf: a little coloured-glass lantern she made herself. When it's lit, it throws golden fireflies across the walls.`),
 D('celeste','s',`Comme chez nous. Pour que le petit monde n'ait jamais peur du noir.`,`Like at home. So the little one is never afraid of the dark.`),
],[]),
{bg:'bedroom',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['La cabine de poupe, la nuit','The stern cabin, at night']},
{st:['lv','mc']},
N(`Le dernier soir, quand tout est fini, vous restez assis{a:|es} par terre au milieu de la cabine, dos contre le mur, épuisé{a:s|es}, couvert{a:s|es} de peinture. La lanterne se balance doucement. Le mobile tinte. Par les fenêtres rondes, on voit la lune sur l'eau du port.`,`On the last evening, when it's all done, you sit on the floor in the middle of the cabin, backs against the wall, exhausted, covered in paint. The lantern sways gently. The mobile chimes. Through the round windows you can see the moon on the harbour water.`),
D('lv','s',`Il manque quelque chose.`,`Something's missing.`),
D('mc','n',`Quoi ? C'est parfait.`,`What? It's perfect.`),
...IF('fiF',[
 D('lv','s',`Un lit. Un vrai lit, à elle. Elle dort encore entre nous deux, ou sur un tas de voiles. Elle mérite mieux.`,`A bed. A real bed, her own. She still sleeps between us, or on a heap of sails. She deserves better.`),
],[
 D('lv','s',`Un berceau. On ne va pas le faire dormir dans un tiroir.`,`A cradle. We're not having the baby sleep in a drawer.`),
]),
D('mc','h',`On peut en acheter un. Il y a un ébéniste très bien, rue du Roi.`,`We can buy one. There's a very good cabinetmaker on King Street.`),
N(`{lv} secoue la tête. {a:Il|Elle} a cette expression têtue que tu connais bien. Celle qu'{a:il|elle} avait quand {a:il|elle} a voulu apprendre à nager. Et à cuisiner.`,`{lv} shakes {a:his|her} head. {a:He|She} has that stubborn look you know well. The one {a:he|she} had when {a:he|she} insisted on learning to swim. And to cook.`),
D('lv','s',`Non. Je vais le fabriquer. Moi-même. De mes mains.`,`No. I'm going to make it. Myself. With my own hands.`),
D('mc','a',`Tu n'as jamais rien fabriqué de ta vie.`,`You've never made anything in your life.`),
D('lv','h',`J'ai fabriqué une soupe, une fois.`,`I made a soup once.`),
D('mc','h',`Elle a failli tuer Kit.`,`It nearly killed Kit.`),
D('lv','h',`Elle a failli. Ce n'est pas pareil.`,`Nearly. That's not the same.`),
N(`Tu ris, et tu poses ta tête sur son épaule. Dehors, quelque part sur le quai, un marin chante une chanson d'amour en espagnol. {lv} te prend la main, et vos doigts couverts de peinture bleue s'entremêlent.`,`You laugh and rest your head on {a:his|her} shoulder. Outside, somewhere on the quay, a sailor sings a love song in Spanish. {lv} takes your hand, and your blue-painted fingers intertwine.`),
{end:168}
);
