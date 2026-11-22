/* ===== SAISON 2 — CHAPITRE 18 — Dernière nuit de liberté ===== */
STORY.push(
{bg:'vauxhall',mus:'ball',chap:40,card:['Saison 2 · Chapitre 18','Season 2 · Chapter 18'],sub:['Dernière nuit de liberté','The Last Night of Freedom'],where:['Les jardins de Vauxhall','Vauxhall Gardens']},
{st:['clem','theo']},
N(`Une semaine avant le mariage, Clem a organisé « la dernière nuit de liberté » à Vauxhall. Pas de masques cette fois. Des lanternes, un orchestre, du punch, et une table réservée sous les arbres pour toute la bande.`,`A week before the wedding, Clem has organised "the last night of freedom" at Vauxhall. No masks this time. Lanterns, an orchestra, punch, and a table reserved under the trees for the whole gang.`),
D('clem','h',`Règle numéro un : interdiction de parler d'Iris. Règle numéro deux : interdiction de parler de serviettes de table. Règle numéro trois : tout le monde danse. Même Alistair.`,`Rule number one: no talking about Iris. Rule number two: no talking about table napkins. Rule number three: everybody dances. Even Alistair.`),
D('alistair','a',`Je ne danse pas.`,`I don't dance.`),
D('clem','h',`Tu danseras.`,`You will dance.`),
N(`Il dansera. Mal. Avec une concentration digne d'un calcul d'orbite.`,`He will dance. Badly. With the concentration of someone calculating an orbit.`),
...IF('twinAlly',[{st:['twinA','mc']},N(`Une surprise : {tA} arrive avec une bouteille de champagne, l'air gêné.`,`A surprise: {tA} arrives with a bottle of champagne, looking awkward.`),D('twinA','s',`Clem m'a invité{t:|e}. Je ne sais pas pourquoi. Je ne sais pas non plus pourquoi j'ai accepté. Santé.`,`Clem invited me. I don't know why. I don't know why I accepted either. Cheers.`)]),
...IF('kindRj',[{st:['rj','mc']},N(`Et une autre silhouette, près des lanternes. {rj}. Hésitant{a:|e}.`,`And another figure, near the lanterns. {rj}. Hesitant.`),D('rj','s',`Clem m'a dit que je pouvais venir. Je t'ai dit qu'il me fallait du temps pour devenir ton ami{a:|e}. Je crois que c'est fait. Presque.`,`Clem told me I could come. I told you I needed time to become your friend. I think it's done. Almost.`),D('rj','h',`J'ai un cadeau. Ce n'est rien. Un mouchoir brodé de lys. Pour essuyer les larmes de ta mère pendant la cérémonie, parce qu'elle va pleurer comme une fontaine.`,`I have a present. It's nothing. A handkerchief embroidered with lilies. To dry your mother's tears during the ceremony, because she's going to cry like a fountain.`)]),

{st:['alistair','clem']},
N(`À minuit, l'orchestre s'arrête. Lord Grey se lève, très raide, et tapote son verre avec une cuillère. Tout le monde se tait.`,`At midnight, the orchestra stops. Lord Grey rises, very stiff, and taps his glass with a spoon. Everyone falls silent.`),
D('alistair','n',`J'ai calculé que les chances qu'une femme comme Clementine Pembroke accepte d'épouser un homme comme moi sont d'environ une sur quatre mille.`,`I have calculated that the chances of a woman like Clementine Pembroke agreeing to marry a man like me are roughly one in four thousand.`),
D('alistair','s',`J'ai décidé d'ignorer les calculs. C'est la première fois de ma vie. Clementine… voulez-vous m'épouser ?`,`I've decided to ignore the calculations. It's the first time in my life. Clementine… will you marry me?`),
N(`Clem le regarde. Elle ouvre la bouche. Rien ne sort. Pour la deuxième fois de sa vie, Clem ne trouve rien à dire.`,`Clem stares at him. She opens her mouth. Nothing comes out. For the second time in her life, Clem can't think of a thing to say.`),
D('clem','o',`… OUI ! Oui, espèce d'ours mal léché ! Mille fois oui !`,`… YES! Yes, you surly old bear! A thousand times yes!`),
N(`Toute la table explose. Théo pleure. Lord Grey sourit, et cette fois tout le monde le voit.`,`The whole table erupts. Theo weeps. Lord Grey smiles, and this time everyone sees it.`),

{bg:'vauxhall',mus:'mystery',where:['L\'allée des Ténèbres','The Dark Walk']},
{st:['bess','mc']},
N(`Plus tard, Bess te tire par la manche. Elle a l'air inquiète.`,`Later, Bess tugs at your sleeve. She looks worried.`),
D('bess','s',`{title}… Là-bas, sous les arbres. Une femme en cape noire. Elle parle avec un homme en habit d'église. Je crois que c'est le bedeau de Saint-George.`,`{title}… Over there, under the trees. A woman in a black cloak. She's talking to a man in church dress. I think it's the verger of St George's.`),
N(`Tu regardes. Une cape noire. Une silhouette droite comme un piquet. Elle tend une bourse au bedeau. Puis s'éloigne dans l'allée des Ténèbres.`,`You look. A black cloak. A figure straight as a ramrod. She hands the verger a purse. Then walks off down the Dark Walk.`),
C('m79',1,[
 {t:[`Suivre le bedeau, avec Théo et deux gardes.`,`Follow the verger, with Theo and two guards.`],set:'followVerger',fx:{vig:2},r:[
  N(`Vous suivez le bedeau jusqu'à une taverne près de la Tamise. Théo l'attrape par le col. L'homme tremble comme une feuille.`,`You follow the verger to a tavern by the Thames. Theo grabs him by the collar. The man shakes like a leaf.`),
  N(`« Elle m'a payé pour verser une poudre dans la coupe de vin des mariés ! Pendant la cérémonie ! Je n'ai pas encore la poudre, elle doit me la donner le matin même ! Pitié ! »`,`"She paid me to put a powder in the couple's wine cup! During the ceremony! I don't have the powder yet, she's to give it to me that very morning! Mercy!"`),
  D('theo','a',`Un flacon. Encore un flacon. Elle recommence exactement comme avec Isadora.`,`A vial. Another vial. She's doing exactly what she did to Isadora.`),
  {set:'knowPlot'}
 ]},
 {t:[`Ne pas gâcher la fête. Prévenir Bow Street demain.`,`Don't spoil the party. Warn Bow Street tomorrow.`],set:'waitBowStreet',r:[
  D('mc','s',`Pas ce soir. Ce soir, c'est la fête de Clem. Demain, j'irai à Bow Street.`,`Not tonight. Tonight is Clem's party. Tomorrow, I'll go to Bow Street.`),
  N(`Le lendemain, Bow Street cherche le bedeau. Il a disparu. Personne ne sait ce qu'Iris lui a demandé.`,`The next day, Bow Street looks for the verger. He's vanished. No one knows what Iris asked of him.`)
 ]}
]),

{bg:'vauxhall',mus:'tender',card:['Deux heures du matin','Two in the morning'],sub:['',''],where:['Sous les lanternes','Beneath the lanterns']},
{st:['fi','mc']},
N(`Deux heures du matin. Les lanternes s'éteignent une à une. La bande se disperse. {fi} et toi restez les derniers, assis sur un banc, ta tête sur son épaule valide.`,`Two in the morning. The lanterns go out one by one. The gang drifts away. You and {fi} are the last, sitting on a bench, your head on {a:his|her} good shoulder.`),
D('fi','s',`La dernière nuit de liberté. Tu as des regrets ? Des choses que tu aurais voulu faire avant de t'enchaîner à moi pour toujours ?`,`The last night of freedom. Any regrets? Things you'd have liked to do before chaining yourself to me for ever?`),
C('m80',1,[
 {t:[`« Une seule. Danser avec toi ici, maintenant, sans musique. »`,`"Just one. Dance with you here, now, without music."`],set:'lastDance',fx:{fi:3},r:[N(`Vous dansez sous les lanternes éteintes, dans le silence, comme dans la galerie de Valcourt. {fi} chante faux. Tu ris. Les gardiens des jardins vous regardent sans oser vous chasser.`,`You dance beneath the darkened lanterns, in silence, as in the Valcourt gallery. {fi} sings off-key. You laugh. The garden keepers watch without daring to throw you out.`)]},
 {t:[`« Aucun. La liberté, c'est toi. »`,`"None. You're my freedom."`],set:'freedomIsYou',fx:{fi:3},r:[D('fi','s',`… Tu ne peux pas dire des choses pareilles à deux heures du matin. Je vais pleurer, et Clem va le savoir, et elle ne me laissera jamais l'oublier.`,`… You can't say things like that at two in the morning. I'll cry, and Clem will find out, and she'll never let me forget it.`),N(`{fi} pleure quand même. Un peu. Tu l'embrasses sur les paupières.`,`{fi} cries anyway. A little. You kiss {a:his|her} eyelids.`)]}
]),
{bg:'street',mus:'tender',card:['Trois heures du matin','Three in the morning'],sub:['',''],where:['Dans la calèche','In the carriage']},
{st:['fi','mc']},
N(`Dans la calèche qui te ramène, les rideaux sont tirés. Les sabots claquent sur les pavés. {fi} ne dit rien. {a:Il|Elle} prend ta main gantée, la retourne, et pose ses lèvres à l'intérieur de ton poignet, là où le gant s'arrête.`,`In the carriage taking you home, the curtains are drawn. Hooves clatter on the cobbles. {fi} says nothing. {a:He|She} takes your gloved hand, turns it over, and presses {a:his|her} lips to the inside of your wrist, just where the glove ends.`),
N(`Un frisson te traverse, de la nuque jusqu'aux chevilles.`,`A shiver runs through you, from the nape of your neck to your ankles.`),
D('fi','s',`Le soir de nos noces, c'est moi qui t'enlèverai ces gants. Bouton par bouton.`,`On our wedding night, I'll be the one to take off these gloves. Button by button.`),
C('c40n',0,[
 {t:[`L'attirer contre toi et l'embrasser.`,`Pull {a:him|her} close and kiss {a:him|her}.`],fx:{fi:1},r:[N(`Le baiser a un goût de punch et de feux d'artifice. Ses mains se perdent dans ton dos, dans tes cheveux. La calèche cahote et vous jette l'un contre l'autre, et aucun de vous ne s'en plaint.`,`The kiss tastes of punch and fireworks. {a:His|Her} hands lose themselves in your back, in your hair. The carriage jolts and throws you against each other, and neither of you complains.`)]},
 {t:[`« Je compterai les heures. »`,`"I'll be counting the hours."`],fx:{fi:1},r:[D('fi','s',`Moi, je compte déjà les minutes.`,`I'm already counting the minutes.`)]}
]),
N(`La calèche s'arrête. Grosvenor Street. Sur le perron, ta mère attend en bonnet de nuit, une chandelle à la main. Elle te regarde. Elle regarde la calèche. Elle ne dit rien. C'est pire.`,`The carriage stops. Grosvenor Street. On the doorstep, your mother waits in her nightcap, a candle in her hand. She looks at you. She looks at the carriage. She says nothing. That's worse.`),
{end:40}
);
