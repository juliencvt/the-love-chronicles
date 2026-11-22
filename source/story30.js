/* ===== SAISON 2 — CHAPITRE 8 — La route de Touraine ===== */
STORY.push(
{bg:'ship',mus:'calm',chap:30,card:['Saison 2 · Chapitre 8','Season 2 · Chapter 8'],sub:['La route de Touraine','The Road to Touraine'],where:['La Manche','The Channel']},
{st:['clem','alistair']},
N(`Cette fois, la Manche est calme. Sur le pont du brick des Pembroke : toi, {fi}, Clem, Théo, deux gardes… et Lord Alistair Grey, arrivé au quai à la dernière minute avec un télescope sous le bras.`,`This time, the Channel is calm. On the deck of the Pembroke brig: you, {fi}, Clem, Theo, two guards… and Lord Alistair Grey, who turned up on the quay at the last minute with a telescope under his arm.`),
D('alistair','n',`Le ciel de la Loire est exceptionnellement sombre en octobre. Idéal pour observer la comète. C'est la seule raison de ma présence.`,`The Loire sky is exceptionally dark in October. Ideal for observing the comet. That is the only reason I'm here.`),
D('clem','h',`Évidemment. La comète. Rien à voir avec le fait que je sois là.`,`Of course. The comet. Nothing whatsoever to do with my being here.`),
D('alistair','a',`Rien du tout.`,`Nothing whatsoever.`),
N(`Il lui tend un petit sachet sans la regarder. Du gingembre confit. Contre le mal de mer.`,`He hands her a small packet without looking at her. Candied ginger. For seasickness.`),
D('clem','o',`Comment vous saviez que…`,`How did you know that…`),
D('alistair','s',`Théo parle beaucoup.`,`Theo talks a lot.`),
D('theo','h',`C'est faux. Il a demandé. Trois fois.`,`That's not true. He asked. Three times.`),
...IF('bessStays',[{st:['bess','mc']},D('bess','h',`Moi, je n'ai jamais vu la France. Ma grand-mère disait que les Français mangent des grenouilles et dansent toute la nuit. J'espère qu'elle avait raison pour la danse.`,`I've never seen France. My grandmother said the French eat frogs and dance all night. I hope she was right about the dancing.`)]),

{bg:'street',mus:'calm',card:['Quatre jours plus tard','Four days later'],sub:['',''],where:['Une auberge sur la route de Tours','An inn on the road to Tours']},
{st:['fi','mc']},
N(`Quatre jours de diligence plus tard, vous arrivez trempés dans une auberge près de Chartres. Un orage a noyé la route. L'aubergiste se gratte la tête.`,`Four days of stagecoach later, you arrive soaked at an inn near Chartres. A storm has flooded the road. The innkeeper scratches his head.`),
N(`« Il me reste deux chambres. Une pour les dames, une pour les messieurs… et une petite mansarde sous le toit, avec un seul lit. »`,`"I've two rooms left. One for the ladies, one for the gentlemen… and a little attic room under the roof, with a single bed."`),
D('clem','h',`Moi, je prends la chambre des dames. Seule. Je ronfle, il paraît.`,`I'll take the ladies' room. Alone. Apparently I snore.`),
D('theo','h',`Alistair et moi, la chambre des messieurs. Il lit jusqu'à trois heures du matin, je suis habitué.`,`Alistair and I will take the gentlemen's room. He reads until three in the morning; I'm used to it.`),
N(`Il ne reste que la mansarde. Et vous deux. Clem te fait un clin d'œil appuyé en montant l'escalier.`,`That leaves the attic. And the two of you. Clem gives you a heavy wink on her way upstairs.`),
D('fi','o',`Je peux dormir dans l'écurie. Vraiment. Les chevaux sont de très bonne compagnie.`,`I can sleep in the stable. Truly. Horses are very good company.`),
C('m59',1,[
 {t:[`« Ne sois pas ridicule. On partage la mansarde. »`,`"Don't be ridiculous. We'll share the attic."`],set:'shareRoom',fx:{fi:3},r:[
  {bg:'bedroom',mus:'tender',where:['La mansarde','The attic room']},
  N(`La mansarde est minuscule. Un lit étroit, une bougie, la pluie qui tambourine sur le toit à quelques centimètres de vos têtes.`,`The attic is tiny. A narrow bed, a candle, rain drumming on the roof a few inches above your heads.`),
  N(`Vous vous allongez côte à côte, tout habillés, sans oser bouger. Le silence est si épais qu'on pourrait le couper.`,`You lie down side by side, fully dressed, not daring to move. The silence is so thick you could cut it.`),
  D('fi','s',`Tu dors ?`,`Are you asleep?`),
  D('mc','h',`Non. Toi ?`,`No. You?`),
  D('fi','h',`Pas du tout. Je n'ai jamais été aussi réveillé{a:|e} de ma vie.`,`Not at all. I've never been so awake in my life.`),
  N(`Tu éclates de rire. {a:Il|Elle} aussi. Et la tension se dissout. Vous passez la nuit à parler de vos enfances, de vos peurs, de vos rêves, jusqu'à vous endormir enlacés, quand le jour se lève.`,`You burst out laughing. So does {a:he|she}. And the tension dissolves. You spend the night talking about your childhoods, your fears, your dreams, until you fall asleep in each other's arms as day breaks.`)
 ]},
 {t:[`« L'écurie, alors. Mais je t'apporte une couverture. »`,`"The stable, then. But I'll bring you a blanket."`],set:'stableNight',fx:{fi:2},r:[
  {bg:'street',mus:'tender',where:['L\'écurie','The stable']},
  N(`À minuit, tu descends avec une couverture et deux pommes volées en cuisine. {fi} est allongé{a:|e} dans la paille, à côté d'une jument grise qui a l'air de l'avoir adopté{a:|e}.`,`At midnight, you go down with a blanket and two apples stolen from the kitchen. {fi} is lying in the straw beside a grey mare who seems to have adopted {a:him|her}.`),
  D('fi','h',`Je te présente Marguerite. Je l'ai baptisée. Elle ronfle moins que Clem.`,`Meet Marguerite. I named her. She snores less than Clem.`),
  N(`Tu t'assieds dans la paille. Puis tu t'allonges. Puis tu poses ta tête sur sa poitrine. Tu ne remontes pas.`,`You sit down in the straw. Then you lie down. Then you rest your head on {a:his|her} chest. You don't go back up.`)
 ]}
]),

{bg:'street',mus:'calm',where:['La cour de l\'auberge','The inn yard']},
{st:['clem','mc']},
N(`Au matin, pendant qu'on attelle les chevaux, Clem t'attire à l'écart. Elle a des cernes. Et un air que tu ne lui connais pas.`,`In the morning, while the horses are being harnessed, Clem draws you aside. She has dark circles under her eyes. And an expression you've never seen on her.`),
D('clem','s',`Il a lu toute la nuit. Je le sais, je voyais la lumière sous sa porte. Et ce matin, il y avait un livre devant ma porte. Un livre d'astronomie pour débutants. Avec des notes dans la marge. Pour moi.`,`He read all night. I know, I could see the light under his door. And this morning, there was a book outside my door. A beginner's book on astronomy. With notes in the margins. For me.`),
D('clem','o',`Qu'est-ce que je fais ? Je ne sais pas quoi faire. Je sais toujours quoi faire !`,`What do I do? I don't know what to do. I always know what to do!`),
C('m60',1,[
 {t:[`« Va le remercier. Avec un vrai compliment. »`,`"Go and thank him. With a real compliment."`],set:'clemThanks',fx:{rep:1},r:[D('clem','h',`Un compliment. À Alistair Grey. D'accord. Je peux le faire. Je suis Clementine Pembroke, je peux tout faire.`,`A compliment. To Alistair Grey. All right. I can do this. I'm Clementine Pembroke, I can do anything.`),N(`Elle traverse la cour, se plante devant lui, ouvre la bouche… et lui dit que son écriture est horrible. Il sourit. Pour la première fois. Clem en reste paralysée.`,`She crosses the yard, plants herself in front of him, opens her mouth… and tells him his handwriting is dreadful. He smiles. For the first time. Clem is paralysed.`)]},
 {t:[`« Ne fais rien. Laisse-le venir à toi. »`,`"Do nothing. Let him come to you."`],set:'clemWaits',r:[D('clem','a',`Attendre ? Moi ? Je n'ai jamais attendu quoi que ce soit de ma vie !`,`Wait? Me? I've never waited for anything in my life!`),D('mc','h',`Justement. Ça va le rendre fou.`,`Exactly. It'll drive him mad.`),N(`Toute la journée, Clem ignore Lord Grey avec une application spectaculaire. Le soir, il a relu la même page quarante fois.`,`All day long, Clem ignores Lord Grey with spectacular dedication. By evening, he's reread the same page forty times.`)]}
]),
N(`Deux jours plus tard, au détour d'un virage, la Loire apparaît, large et argentée. Et sur l'autre rive, blanc comme un rêve, coiffé d'ardoises bleues : le château de Valcourt.`,`Two days later, around a bend, the Loire appears, wide and silver. And on the far bank, white as a dream, crowned with blue slate: Château de Valcourt.`),
{end:30}
);
