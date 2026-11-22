/* ===== CHAPITRE 18 — Le bal masqué de Vauxhall ===== */
STORY.push(
{bg:'bedroom',mus:'calm',chap:18,card:['Chapitre 18','Chapter 18'],sub:['Le bal masqué de Vauxhall','The Vauxhall Masquerade'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Le soir du bal masqué. Bess a étalé sur ton lit deux costumes que Madame Fleury a cousus en quinze jours, sans dormir, en jurant en français.`,`The night of the masquerade. Bess has laid out on your bed two costumes that Madame Fleury sewed in a fortnight, without sleep, swearing in French.`),
...IF('danceLi1',[],[D('bess','h',`{li2} a passé trois nuits sur les broderies. {a:Il|Elle} a dit : « Il faut que ce soit parfait. C'est peut-être la dernière fois que je l'habille avant… » Et puis {a:il|elle} n'a pas fini sa phrase.`,`{li2} spent three nights on the embroidery. {a:He|She} said: "It has to be perfect. It might be the last time I dress them before…" And then {a:he|she} didn't finish the sentence.`)]),
N(`Le premier : {t:un habit|une robe} d'argent et de dentelle, scintillant{t:|e} comme un clair de lune, {t:« Le Prince de Lune »|« La Dame de Lune »}. Le second : {t:un habit|une robe} d'or et de flammes, plumes rousses aux épaules : « Le Phénix ».`,`The first: a {t:coat|gown} of silver and lace, shimmering like moonlight, "The {t:Prince|Lady} of the Moon". The second: a {t:coat|gown} of gold and flame, with russet feathers at the shoulders: "The Phoenix".`),
D('bess','s',`(tout bas) Bizarre : {lv} m'a demandé hier si vous aviez peur du feu. Et quand j'ai dit non, {a:il|elle} a souri d'un drôle d'air. Je dis ça, je dis rien.`,`(whispering) Odd thing: {lv} asked me yesterday whether you were afraid of fire. When I said no, {a:he|she} smiled strangely. Just saying.`),
C('o18',0,[
 {t:[`👗 {t:Le Prince|La Dame} de Lune. Mystérieu{t:x|se}, insaisissable.`,`👗 The {t:Prince|Lady} of the Moon. Mysterious, elusive.`],set:'o18a',fx:{rep:1},r:[D('bess','h',`Personne ne vous reconnaîtra. Sauf ceux qui vous aiment.`,`No one will recognise you. Except those who love you.`)]},
 {t:[`👗 Le Phénix. Celui qui renaît de ses cendres.`,`👗 The Phoenix. The one who rises from the ashes.`],set:'o18b',fx:{lv:1},r:[D('bess','o',`Le Phénix ! Avec le procès, tout Londres va comprendre le message. Iris aussi.`,`The Phoenix! With the trial, all London will get the message. Iris too.`)]}
]),
D('bess','s',`{title}… Faites attention, ce soir. J'ai un mauvais pressentiment. Ma grand-mère avait des pressentiments, et elle avait toujours raison. Sauf pour les cors aux pieds.`,`{title}… Be careful tonight. I have a bad feeling. My grandmother had feelings, and she was always right. Except about corns.`),

{bg:'vauxhall',mus:'ball',mask:1,card:['Vauxhall','Vauxhall'],sub:['Le bal masqué','The Masquerade'],where:['Les jardins de Vauxhall','Vauxhall Gardens']},
{st:['mc']},
N(`Vauxhall, la nuit. Mille lanternes de couleur suspendues dans les arbres, un orchestre dans un pavillon doré, des allées sombres où les couples disparaissent en riant. Tout le monde porte un masque. Personne n'est vraiment soi-même.`,`Vauxhall, at night. A thousand coloured lanterns hung in the trees, an orchestra in a gilded pavilion, dark walks where couples vanish, laughing. Everyone wears a mask. No one is quite themselves.`),
{st:['clem','georgie']},
D('clem','h',`J'ai refusé de mettre un masque. Ça me gratte, et je veux qu'elle me voie arriver.`,`I refused to wear a mask. It itches, and I want her to see me coming.`),
D('georgie','h',`Moi, j'en ai un ! Je suis une licorne. Lord Fairfax est un cheval. On est assortis.`,`I have one! I'm a unicorn. Lord Fairfax is a horse. We match.`),
D('clem','s',`Théo surveille Cordelia depuis son arrivée. Elle est en violet. Évidemment.`,`Theo has been watching Cordelia since she arrived. She's in violet. Naturally.`),
{st:['lv','mc']},
N(`Une main gantée se pose au creux de ton dos. Tu n'as pas besoin de te retourner. Tu reconnaîtrais cette main entre mille, masque ou pas.`,`A gloved hand settles at the small of your back. You don't need to turn around. You'd know that hand among a thousand, mask or no mask.`),
...IF('o18b',[D('lv','h',`Un phénix. Bien sûr. Tu sais que tu es en train de rendre fou tout Vauxhall ?`,`A phoenix. Of course. You know you're driving all of Vauxhall mad?`)],[D('lv','h',`{t:Le Prince|La Dame} de Lune. Tu sais que tu fais pâlir toutes les lanternes du jardin, rien qu'en passant ?`,`The {t:Prince|Lady} of the Moon. You know you're making every lantern in the garden look dim just by walking past?`)]),
...IF('danceLi1',[],[D('lv','s',`Fleury m'a fait entrer comme « assistant{a:|e} du costumier ». Je suis censé{a:|e} recoudre des ourlets. Je préfère danser.`,`Fleury got me in as "costumier's assistant". I'm supposed to be mending hems. I'd rather dance.`)]),
C('c18a',0,[
 {t:[`L'entraîner sur la piste.`,`Pull {a:him|her} onto the dance floor.`],fx:{lv:1},r:[N(`Vous dansez sous les lanternes. Les masques autour de vous deviennent flous. Il n'y a plus que ses yeux, derrière le sien.`,`You dance beneath the lanterns. The masks around you blur. There's nothing left but {a:his|her} eyes, behind {a:his|her} own.`)]},
 {t:[`Rester près de {a:lui|elle} et surveiller la foule.`,`Stay close to {a:him|her} and watch the crowd.`],r:[D('lv','n',`Bonne idée. Iris est là-bas, près du pavillon chinois. Elle ne danse pas. Elle attend.`,`Good idea. Iris is over there, by the Chinese pavilion. She isn't dancing. She's waiting.`)]}
]),

{bg:'vauxhall',mus:'mystery',where:['L\'allée des Ténèbres','The Dark Walk']},
{st:['theo','clem']},
N(`À onze heures, Théo surgit, essoufflé.`,`At eleven, Theo appears, out of breath.`),
D('theo','a',`Cordelia vient de quitter le bal. Elle prend l'allée des Ténèbres, vers la statue de Neptune.`,`Cordelia has just left the ball. She's taking the Dark Walk, towards the statue of Neptune.`),
N(`Vous la suivez à distance, dans l'obscurité : Clem, Théo, {lv} et toi. Au bout de l'allée, deux silhouettes se rejoignent sous la statue. Une en violet. Une en noir.`,`You follow at a distance, in the darkness: Clem, Theo, {lv} and you. At the end of the walk, two figures meet beneath the statue. One in violet. One in black.`),
{st:['cordelia','iris']},
...IF('trapMole',[D('cordelia','a',`Il n'y a rien sous la statue, Mère. Rien du tout. J'ai fouillé partout.`,`There's nothing under the statue, Mother. Nothing at all. I searched everywhere.`),D('iris','a',`Alors c'était un piège, petite idiote. Et tu es tombée dedans.`,`Then it was a trap, you little fool. And you fell right into it.`)],
 [D('iris','a',`Le flacon, Cordelia. Je sais que tu l'as gardé. Donne-le-moi.`,`The vial, Cordelia. I know you kept it. Give it to me.`),D('cordelia','a',`Non. C'est mon assurance, Mère. Contre vous aussi.`,`No. It's my insurance, Mother. Against you as well.`)]),
N(`Le mot résonne dans l'allée comme un coup de feu. « Mère. »`,`The word echoes down the walk like a gunshot. "Mother."`),
{st:['clem','cordelia']},
N(`Clem sort de l'ombre. Sans masque. Le visage ruisselant de larmes.`,`Clem steps out of the shadows. Unmasked. Her face streaming with tears.`),
D('clem','s',`« Mère » ?`,`"Mother"?`),
D('cordelia','o',`Clem…`,`Clem…`),
D('clem','a',`Quinze ans. Quinze ans que tu dors dans la chambre à côté de la mienne. Que tu portes mes robes. Que tu connais tous mes secrets. Et tu es… sa fille ?`,`Fifteen years. Fifteen years sleeping in the room next to mine. Wearing my dresses. Knowing all my secrets. And you're… her daughter?`),
N(`Cordelia retire lentement son masque. Pour la première fois, elle ne sourit pas.`,`Cordelia slowly removes her mask. For the first time, she isn't smiling.`),
D('cordelia','a',`Tu n'as jamais été ma sœur, Clem. Tu étais ma couverture.`,`You were never my sister, Clem. You were my cover.`),
N(`Mais sa voix se brise sur le dernier mot. Juste un peu. Assez pour que tu l'entendes.`,`But her voice breaks on the last word. Only slightly. Enough for you to hear it.`),
{st:['iris','mc']},
D('iris','h',`Quelle scène touchante. Viens, Cordelia. Nous partons.`,`What a touching scene. Come, Cordelia. We're leaving.`),
N(`Iris fait un signe. Deux hommes en livrée sombre surgissent des buissons. Dans la confusion, Iris s'évanouit dans la nuit. Cordelia s'enfuit dans la direction opposée.`,`Iris makes a sign. Two men in dark livery burst from the bushes. In the confusion, Iris vanishes into the night. Cordelia flees in the opposite direction.`),
C('m35',1,[
 {t:[`Courir après Cordelia.`,`Run after Cordelia.`],set:'chaseCordelia',r:[
  N(`Tu relèves {t:les pans de ton habit|tes jupes} et tu cours. Les branches te griffent, ton masque tombe. Tu attrapes un pan de sa cape… Elle se dégage d'un coup d'épaule et disparaît derrière une haie.`,`You hitch up your {t:coat-tails|skirts} and run. Branches claw at you, your mask falls off. You catch a corner of her cloak… She twists free and vanishes behind a hedge.`),
  N(`Il te reste son réticule dans la main. Dedans : un mouchoir à la lavande, quelques shillings, et une carte de visite. « Villa des Saules, Chelsea. » L'adresse d'Iris.`,`Her reticule is left in your hand. Inside: a lavender handkerchief, a few shillings and a calling card. "Willow Villa, Chelsea." Iris's address.`),
  {set:'knowVilla'}
 ]},
 {t:[`Rester avec Clem.`,`Stay with Clem.`],set:'comfortClem',r:[
  N(`Tu laisses Cordelia filer. Clem s'est effondrée sur un banc de pierre. Tu t'assieds à côté d'elle et tu la prends dans tes bras.`,`You let Cordelia go. Clem has collapsed onto a stone bench. You sit beside her and take her in your arms.`),
  D('clem','s',`Je l'aimais. Je l'aime encore. C'est ça le pire. Je la déteste et je l'aime et je ne sais pas quoi faire de tout ça.`,`I loved her. I still love her. That's the worst part. I hate her and I love her and I don't know what to do with any of it.`),
  D('mc','s',`On n'a pas besoin de savoir ce soir. Ce soir, tu pleures, et moi je reste.`,`We don't need to know tonight. Tonight, you cry, and I stay.`),
  D('theo','n',`J'ai vu la voiture d'Iris partir. Les armoiries étaient grattées, mais elle a pris la route de Chelsea.`,`I saw Iris's carriage leave. The coat of arms had been scratched off, but it took the Chelsea road.`)
 ]}
]),

{bg:'vauxhall',mus:'tender',where:['Sous les lanternes','Beneath the lanterns']},
{st:['lv','mc']},
N(`Minuit. Les feux d'artifice éclatent au-dessus de Vauxhall. Des gerbes d'or et de rose se reflètent dans les yeux de {lv}, qui t'a retrouvé{g:|e|·e} au bord de l'allée.`,`Midnight. Fireworks burst over Vauxhall. Sprays of gold and pink are reflected in the eyes of {lv}, who has found you at the edge of the walk.`),
D('lv','s',`Tu as tenu ta promesse. Tu ne t'es pas éloigné{g:|e|·e} de moi. Enfin… pas trop.`,`You kept your promise. You didn't stray from me. Well… not too far.`),
D('mc','s',`J'ai peur de ce qui va arriver maintenant. Iris est acculée. Une bête acculée mord.`,`I'm afraid of what happens now. Iris is cornered. A cornered animal bites.`),
D('lv','h',`Alors on ne la laissera pas mordre. Mais ce soir… ce soir, il y a des feux d'artifice. Et je ne t'ai pas encore embrassé{g:|e|·e}.`,`Then we won't let her bite. But tonight… tonight there are fireworks. And I haven't kissed you yet.`),
C('m36',1,[
 {t:[`Retirer vos masques et l'embrasser à visage découvert.`,`Take off your masks and kiss {a:him|her} with your faces bare.`],set:'unmaskKiss',fx:{lv:3},r:[{mask:0},N(`Tu dénoues ton masque. {lv} fait de même. Plus rien entre vous, ni velours ni mensonge. Tu l'embrasses sous une pluie d'étincelles dorées, et tout Vauxhall peut bien vous voir.`,`You untie your mask. {lv} does the same. Nothing left between you, neither velvet nor lies. You kiss {a:him|her} beneath a shower of golden sparks, and all Vauxhall is welcome to watch.`),D('lv','h',`Je t'aime. Avec ou sans masque. Surtout sans.`,`I love you. With or without a mask. Especially without.`)]},
 {t:[`L'embrasser à travers le mystère des masques.`,`Kiss {a:him|her} through the mystery of the masks.`],set:'maskKiss',fx:{lv:2},r:[N(`Vos masques se heurtent doucement. Vous riez. Puis vous trouvez l'angle, et le monde disparaît.`,`Your masks bump gently. You laugh. Then you find the angle, and the world disappears.`),D('lv','h',`Pour la postérité : notre premier baiser masqué. Il était parfait.`,`For posterity: our first masked kiss. It was perfect.`)]}
]),
...IF('o18b',[
 {bg:'vauxhall',mus:'tender',card:['✨ Scène secrète','✨ Secret scene'],sub:['Le phénix','The Phoenix'],where:['Le toit du pavillon','The pavilion roof']},
 {st:['lv','mc']},
 N(`Avant de partir, {lv} te fait grimper par un petit escalier caché jusqu'au toit du pavillon doré. D'ici, on voit tout Vauxhall, les lanternes, la Tamise, Londres endormie.`,`Before you leave, {lv} takes you up a little hidden staircase onto the roof of the gilded pavilion. From here you can see all of Vauxhall, the lanterns, the Thames, sleeping London.`),
 D('lv','s',`Je voulais te voir en phénix. C'est pour ça que j'ai demandé à Bess si tu avais peur du feu. Parce que toi, tu renais de tout. De la cave, du scandale, de la Tamise. Tu brûles, et tu reviens plus fort{g:|e|·e}. Plus toi.`,`I wanted to see you as a phoenix. That's why I asked Bess if you were afraid of fire. Because you rise from everything. The cellar, the scandal, the Thames. You burn, and you come back stronger. More yourself.`),
 N(`Une dernière gerbe de feux d'artifice éclate au-dessus de vous, rouge et or, comme si le ciel s'accordait à ta tenue. {lv} t'embrasse dans la lumière des étincelles.`,`A final burst of fireworks explodes above you, red and gold, as if the sky were matching your outfit. {lv} kisses you in the glow of the sparks.`),
 {cg:'vauxhall'}
]),
{mask:0},
N(`Sur le chemin du retour, un gamin des rues te glisse un billet dans la main et s'enfuit en courant. Une écriture que tu connais bien. Celle de {lv}.`,`On the way home, a street urchin slips a note into your hand and runs off. A handwriting you know well. {lv}'s.`),
N(`« Retrouve-moi demain à minuit, au vieux kiosque de Chelsea. Viens seul{e}. C'est important. »`,`"Meet me tomorrow at midnight, at the old bandstand in Chelsea. Come alone. It's important."`),
D('mc','s',`(Mais… {lv} vient de me quitter il y a cinq minutes. Pourquoi m'écrire au lieu de me le dire ?)`,`(But… {lv} left me five minutes ago. Why write instead of just telling me?)`),
{end:18}
);
