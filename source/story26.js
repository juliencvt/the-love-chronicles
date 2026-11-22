/* ===== SAISON 2 — CHAPITRE 4 — L'évasion ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:26,card:['Saison 2 · Chapitre 4','Season 2 · Chapter 4'],sub:['L\'évasion','The Escape'],where:['Le salon de Grosvenor Street','The Grosvenor Street drawing room']},
{st:['father','mother']},
N(`Le lendemain matin, un constable de Bow Street est assis dans votre salon, son chapeau sur les genoux, l'air de quelqu'un qui préférerait être n'importe où ailleurs.`,`The next morning, a Bow Street constable sits in your drawing room, hat on his knees, looking like a man who'd rather be anywhere else.`),
N(`« Un gardien soudoyé, Monsieur le Comte. Une robe de blanchisseuse. Elle est sortie par la porte des cuisines, avec les draps sales. Personne ne l'a regardée. »`,`"A bribed warder, Count. A washerwoman's dress. She walked out through the kitchen door, with the dirty linen. Nobody looked at her."`),
D('father','a',`Une femme qui a tué sa propre sœur, et personne ne l'a regardée ?`,`A woman who killed her own sister, and nobody looked at her?`),
D('mother','s',`Elle va revenir. Elle revient toujours.`,`She'll come back. She always comes back.`),
{st:['bess','mc']},
N(`Bess entre, blanche comme un linge. Elle tient quelque chose entre deux doigts, comme on tient un insecte mort.`,`Bess comes in, white as a sheet. She's holding something between two fingers, the way you'd hold a dead insect.`),
D('bess','o',`C'était sur le perron. Ce matin. Personne n'a vu qui l'a déposé.`,`It was on the front step. This morning. Nobody saw who left it.`),
N(`Un lys. Un lys noir, teint à l'encre, les pétales encore humides. Et une carte : « Pour le mariage. — I. »`,`A lily. A black lily, dyed with ink, its petals still damp. And a card: "For the wedding. — I."`),
C('c26a',0,[
 {t:[`Le jeter au feu.`,`Throw it in the fire.`],r:[N(`Le lys noir se tord dans les flammes. Ça ne te soulage pas autant que tu l'espérais.`,`The black lily writhes in the flames. It doesn't relieve you as much as you'd hoped.`)]},
 {t:[`Le garder comme preuve pour Bow Street.`,`Keep it as evidence for Bow Street.`],fx:{vig:1},set:'keptLily',r:[D('mc','n',`Constable, voici votre première pièce à conviction. L'encre vient d'une papeterie, cherchez laquelle.`,`Constable, here's your first piece of evidence. The ink comes from a stationer's; find out which one.`)]}
]),

{bg:'salon',mus:'mystery',where:['Pembroke House','Pembroke House']},
{st:['lordp','mc']},
N(`À Pembroke House, Lord Pembroke a déjà engagé six hommes armés pour surveiller ta maison. Il fait les cent pas dans son bureau, un verre à la main, sans le boire.`,`At Pembroke House, Lord Pembroke has already hired six armed men to watch your house. He's pacing his study, glass in hand, without drinking.`),
D('lordp','a',`Six hommes jour et nuit devant ta porte. Et deux qui te suivront partout. Ne discute pas.`,`Six men day and night outside your door. And two who'll follow you everywhere. Don't argue.`),
N(`Un valet entre et lui tend une lettre. Lord Pembroke reconnaît l'écriture au premier coup d'œil. Son visage se vide de toute couleur.`,`A footman comes in and hands him a letter. Lord Pembroke recognises the handwriting at first glance. All colour drains from his face.`),
D('lordp','s',`Excuse-moi. Une… affaire de banque.`,`Excuse me. A… banking matter.`),
N(`Il fourre la lettre dans sa poche sans l'ouvrir. Mais tu as eu le temps de voir le cachet : un lys noir.`,`He stuffs the letter into his pocket without opening it. But you had time to see the seal: a black lily.`),
...IF('pressPembroke',[D('mc','s',`(Encore cette peur dans ses yeux. Comme l'autre jour, quand j'ai parlé de Cordelia. Iris le tient. Je ne sais pas comment, mais elle le tient.)`,`(That fear in his eyes again. Like the other day, when I mentioned Cordelia. Iris has a hold on him. I don't know how, but she has.)`)],[D('mc','s',`(Une affaire de banque ? Avec le cachet d'Iris ? Qu'est-ce qu'il me cache ?)`,`(A banking matter? With Iris's seal? What is he hiding from me?)`)]),
C('m51',1,[
 {t:[`Accepter les gardes. Iris est capable de tout.`,`Accept the guards. Iris is capable of anything.`],set:'acceptGuards',fx:{vig:1},r:[D('mc','n',`Merci, Milord. Je les accepte. Je n'ai pas survécu à la cave pour me faire avoir dans la rue.`,`Thank you, my lord. I accept them. I didn't survive that cellar to get caught in the street.`),D('lordp','s',`Sage. Isadora, elle, refusait toujours qu'on la protège. Voilà où ça l'a menée.`,`Wise. Isadora always refused to be protected. Look where it got her.`)]},
 {t:[`Refuser. Tu ne vivras pas en prisonnier{g:|e|·e}.`,`Refuse. You won't live as a prisoner.`],set:'refuseGuards',fx:{rep:1},r:[D('mc','a',`Non. Si je m'enferme, elle a gagné. Je vivrai ma vie, Milord. Avec ou sans Iris.`,`No. If I lock myself away, she's won. I'll live my life, my lord. With or without Iris.`),D('lordp','s',`Tu as le courage d'Isadora. Et son imprudence. Prie pour n'avoir que le premier.`,`You have Isadora's courage. And her recklessness. Pray you only have the first.`)]}
]),

{bg:'bedroom',mus:'tender',card:['La nuit','Night'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['fi','mc']},
N(`Cette nuit-là, tu n'arrives pas à dormir. Chaque craquement de la maison ressemble à un pas dans l'escalier.`,`That night, you can't sleep. Every creak of the house sounds like a footstep on the stairs.`),
N(`On gratte doucement à ta fenêtre. Tu sursautes, le cœur au bord des lèvres… puis tu reconnais le visage derrière la vitre. {fi}.`,`Something scratches softly at your window. You jump, heart in your mouth… then you recognise the face behind the glass. {fi}.`),
D('fi','h',`Je sais, je sais. J'ai promis de passer par la porte, maintenant. Mais je n'arrivais pas à dormir en sachant que tu ne dormais pas.`,`I know, I know. I promised to use the door now. But I couldn't sleep knowing you couldn't either.`),
D('fi','s',`Je ne viens pas pour… enfin. Je viens juste pour veiller. Je reste dans le fauteuil. Tu dors, je regarde la fenêtre.`,`I'm not here to… well. I'm just here to keep watch. I'll stay in the armchair. You sleep, I'll watch the window.`),
C('m52',1,[
 {t:[`« Reste. Mais pas dans le fauteuil. Près de moi. »`,`"Stay. But not in the armchair. Next to me."`],set:'stayClose',fx:{fi:3},r:[
  N(`{fi} hésite. Puis {a:il|elle} enlève ses bottes et s'allonge par-dessus la couverture, tout habillé{a:|e}, raide comme un piquet.`,`{fi} hesitates. Then {a:he|she} takes off {a:his|her} boots and lies down on top of the covers, fully dressed, stiff as a board.`),
  D('mc','h',`Tu peux respirer, tu sais.`,`You're allowed to breathe, you know.`),
  D('fi','o',`Je respire. J'essaie. C'est difficile, avec toi si près.`,`I'm breathing. I'm trying. It's hard, with you this close.`),
  N(`Tu poses ta tête sur son épaule. Petit à petit, son cœur ralentit sous ton oreille. Tu t'endors, enfin, avec sa main dans tes cheveux.`,`You lay your head on {a:his|her} shoulder. Little by little, {a:his|her} heart slows beneath your ear. At last you fall asleep, with {a:his|her} hand in your hair.`)
 ]},
 {t:[`« Le fauteuil, alors. Mais tiens-moi la main. »`,`"The armchair, then. But hold my hand."`],set:'holdHandNight',fx:{fi:2},r:[
  N(`{fi} tire le fauteuil jusqu'au bord du lit et prend ta main dans la sienne. Ses doigts dessinent des cercles lents sur ta paume.`,`{fi} pulls the armchair to the edge of the bed and takes your hand in {a:his|hers}. {a:His|Her} fingers trace slow circles on your palm.`),
  D('fi','s',`Dors. Personne ne passera cette fenêtre. Personne.`,`Sleep. Nobody will get through that window. Nobody.`),
  N(`Quand tu te réveilles à l'aube, {fi} dort assis, la tête sur le bord du matelas, ta main toujours dans la sienne.`,`When you wake at dawn, {fi} is asleep sitting up, head on the edge of the mattress, your hand still in {a:his|hers}.`)
 ]}
]),
{end:26}
);
