/* ===== SAISON 2 — CHAPITRE 7 — Le testament ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:29,card:['Saison 2 · Chapitre 7','Season 2 · Chapter 7'],sub:['Le secret de Lord Pembroke','Lord Pembroke\'s Secret'],where:['Le bureau de Lord Pembroke','Lord Pembroke\'s study']},
{st:['lordp','mc']},
N(`Le lendemain. Lord Pembroke a fermé la porte de son bureau à clé, tiré les rideaux, et renvoyé les domestiques. Il a l'air d'avoir vieilli de dix ans en une nuit.`,`The next day. Lord Pembroke has locked his study door, drawn the curtains and dismissed the servants. He looks ten years older in a single night.`),
D('lordp','s',`La nuit où tu es né{g:|e|·e}, j'étais à Paris. Je savais qu'Isadora allait accoucher. Je voulais… je ne sais pas. La voir une dernière fois. Lui souhaiter du bonheur.`,`The night you were born, I was in Paris. I knew Isadora was about to give birth. I wanted… I don't know. To see her one last time. To wish her happiness.`),
D('lordp','s',`Dans l'escalier de la rue de Varenne, j'ai croisé un valet. Il tenait un petit flacon bleu. Il m'a dit : « Un remède de la part de sa sœur, Monsieur. Vous montez ? Vous pourriez le lui donner. »`,`On the stairs at the Rue de Varenne, I passed a footman. He was holding a small blue vial. He said to me: "A remedy from her sister, sir. Are you going up? You could give it to her."`),
N(`Lord Pembroke se tait. Sa voix se brise.`,`Lord Pembroke falls silent. His voice breaks.`),
D('lordp','a',`C'est moi qui le lui ai donné. Le flacon. De mes propres mains. Je l'ai posé sur sa table de chevet, je l'ai embrassée sur le front, et je suis parti. Une heure plus tard, elle était morte.`,`I'm the one who gave it to her. The vial. With my own hands. I set it on her bedside table, kissed her on the forehead, and left. An hour later, she was dead.`),
D('mc','o',`Vous ne pouviez pas savoir…`,`You couldn't have known…`),
D('lordp','s',`Iris, elle, savait que j'étais monté. Trois ans plus tard, elle est venue me trouver avec sa fille dans les bras. « Un amoureux éconduit qui apporte le poison à la femme qui l'a rejeté. Qui croira à ton innocence ? Prends Cordelia chez toi, ou je raconte tout. »`,`Iris knew I'd gone up. Three years later, she came to me with her daughter in her arms. "A spurned lover who brings poison to the woman who rejected him. Who'll believe in your innocence? Take Cordelia into your home, or I tell everything."`),
D('lordp','s',`Alors j'ai pris Cordelia. Par peur. Et par culpabilité. Et puis… je l'ai aimée, cette petite. C'est ça le pire. Je l'ai aimée comme ma fille.`,`So I took Cordelia. Out of fear. And out of guilt. And then… I loved her, that little girl. That's the worst of it. I loved her like my own daughter.`),
D('lordp','a',`Maintenant, Iris est libre, et elle recommence. De l'argent, un passeport, ou elle me fait pendre comme complice. Honoria ne sait rien. Mes enfants ne savent rien.`,`Now Iris is free, and she's starting again. Money, a passport, or she has me hanged as an accomplice. Honoria knows nothing. My children know nothing.`),
C('m57',1,[
 {t:[`Le pousser à tout avouer : à sa famille, et à Bow Street.`,`Urge him to confess everything: to his family, and to Bow Street.`],set:'pembrokeConfess',fx:{vig:2},r:[
  D('mc','a',`Tant que vous vous tairez, Iris aura une arme contre vous. Dites la vérité, Milord. À Bow Street. À Lady Pembroke. À Clem et Théo. Et je témoignerai pour vous : vous ne pouviez pas savoir.`,`As long as you keep quiet, Iris has a weapon against you. Tell the truth, my lord. To Bow Street. To Lady Pembroke. To Clem and Theo. And I'll testify for you: you couldn't have known.`),
  N(`Lord Pembroke te regarde longuement. Puis il hoche la tête, lentement, comme un homme qui pose enfin un fardeau trop lourd.`,`Lord Pembroke looks at you for a long time. Then he nods, slowly, like a man finally setting down a burden that's too heavy.`),
  D('lordp','s',`Tu as raison. Je le dirai. Quand le moment sera venu. Mais je le dirai.`,`You're right. I'll tell them. When the moment comes. But I'll tell them.`)
 ]},
 {t:[`Promettre de garder son secret, et l'aider à protéger sa famille.`,`Promise to keep his secret, and help him protect his family.`],set:'pembrokeSecret',r:[
  D('mc','s',`Votre secret est en sécurité avec moi. Vous m'avez sauvé{g:|e|·e} de la prison et de la Tamise. Je ne vous trahirai pas.`,`Your secret is safe with me. You saved me from prison and from the Thames. I won't betray you.`),
  D('lordp','s',`Merci. Je ne mérite pas ta bonté. Personne ne doit savoir. Personne.`,`Thank you. I don't deserve your kindness. No one must know. No one.`),
  N(`En sortant, tu ressens un poids nouveau sur tes épaules. Celui d'un secret qui ne t'appartient pas.`,`As you leave, you feel a new weight on your shoulders. That of a secret that isn't yours.`)
 ]}
]),

{bg:'salon',mus:'calm',where:['Le bureau de ton père','Your father\'s study']},
{st:['dorval','father']},
N(`L'après-midi, Maître Dorval arrive, plus pâle encore que d'habitude, une liasse de papiers sous le bras.`,`In the afternoon, Mr Dorval arrives, even paler than usual, a bundle of papers under his arm.`),
D('dorval','n',`Le testament du vieux marquis contient une clause que j'avais négligée. L'héritier doit prendre possession du château de Valcourt en personne avant la Saint-Martin. Sinon, le domaine revient au parent le plus proche.`,`The old Marquis's will contains a clause I had overlooked. The heir must take possession of Château de Valcourt in person before Martinmas. Otherwise, the estate passes to the nearest relative.`),
D('father','a',`Le parent le plus proche… c'est Iris.`,`The nearest relative… is Iris.`),
D('dorval','s',`Et Iris vient de demander un passeport pour la France. Elle compte s'y rendre avant vous.`,`And Iris has just applied for a passport to France. She means to get there before you.`),
D('father','s',`La Saint-Martin, c'est dans cinq semaines. Il faut partir pour la Touraine. Dès que possible.`,`Martinmas is in five weeks. You must leave for Touraine. As soon as possible.`),

{bg:'garden',mus:'tender',card:['Le soir','Evening'],sub:['',''],where:['Le jardin de Grosvenor Street','The Grosvenor Street garden']},
{st:['fi','mc']},
N(`Le soir, tu retrouves {fi} au jardin. Tu lui annonces le départ pour la France. {a:Il|Elle} ne demande même pas si {a:il|elle} vient : {a:il|elle} a déjà commencé à faire la liste des choses à emporter.`,`In the evening, you meet {fi} in the garden. You tell {a:him|her} about the journey to France. {a:He|She} doesn't even ask whether {a:he's|she's} coming: {a:he's|she's} already started listing what to pack.`),
D('fi','s',`Tu as l'air ailleurs. Il y a autre chose. Lord Pembroke, c'est ça ? Tu es sorti{e} de chez lui avec la tête de quelqu'un qui porte une montagne.`,`You look miles away. There's something else. Lord Pembroke, isn't it? You came out of his house looking like someone carrying a mountain.`),
C('m58',1,[
 {t:[`Tout lui raconter. Tu ne veux pas de secret entre vous.`,`Tell {a:him|her} everything. You want no secrets between you.`],set:'shareSecret',fx:{fi:3},r:[
  N(`Tu racontes tout. Le flacon, l'escalier, le chantage, Cordelia. {fi} écoute sans t'interrompre, ta main serrée dans la sienne.`,`You tell everything. The vial, the stairs, the blackmail, Cordelia. {fi} listens without interrupting, your hand clasped in {a:his|hers}.`),
  D('fi','s',`Merci de me l'avoir dit. Je sais ce que ça te coûte. On le portera à deux, cette montagne. C'est à ça que sert un mariage, non ?`,`Thank you for telling me. I know what it costs you. We'll carry this mountain together. That's what a marriage is for, isn't it?`),
  N(`{fi} pose un baiser sur tes doigts, un par un. Le poids sur tes épaules s'allège un peu.`,`{fi} kisses your fingers, one by one. The weight on your shoulders lightens a little.`)
 ]},
 {t:[`Garder le secret. Ce n'est pas le tien à raconter.`,`Keep the secret. It isn't yours to tell.`],set:'keepPromise',fx:{fi:1},r:[
  D('mc','s',`Je ne peux pas te le dire. J'ai promis. Ce n'est pas mon secret.`,`I can't tell you. I promised. It isn't my secret.`),
  D('fi','s',`… D'accord. Je ne demanderai plus. Mais si ça devient trop lourd, je suis là. Pour porter la moitié.`,`… All right. I won't ask again. But if it gets too heavy, I'm here. To carry half.`),
  N(`{fi} t'embrasse sur le front, sans insister. Tu l'aimes encore plus pour ça.`,`{fi} kisses your forehead, without insisting. You love {a:him|her} even more for it.`)
 ]}
]),
D('fi','h',`La Touraine, alors. Les châteaux, la Loire, le vin… Tu sais que ça ressemble furieusement à un voyage de noces avant l'heure ?`,`Touraine, then. Châteaux, the Loire, wine… You know this looks suspiciously like a honeymoon before the wedding?`),
D('mc','h',`Avec Clem, Théo et des gardes armés. Très romantique.`,`With Clem, Theo and armed guards. Very romantic.`),
D('fi','h',`J'en ai connu de pires. Le duel, par exemple.`,`I've known worse. The duel, for instance.`),
{end:29}
);
