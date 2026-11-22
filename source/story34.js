/* ===== SAISON 2 — CHAPITRE 12 — L'ombre au village ===== */
STORY.push(
{bg:'river',mus:'mystery',chap:34,card:['Saison 2 · Chapitre 12','Season 2 · Chapter 12'],sub:['L\'ombre au village','A Shadow in the Village'],where:['Le vieux moulin','The old mill']},
{st:['theo','mc']},
N(`À l'aube, le vieux moulin émerge de la brume, couvert de lierre. Sa grande roue de bois, figée depuis vingt ans, trempe dans l'eau noire du bief.`,`At dawn, the old mill emerges from the mist, covered in ivy. Its great wooden wheel, frozen for twenty years, dips into the black water of the millrace.`),
N(`Quelqu'un est venu cette nuit. La terre est retournée partout autour de la roue. Des trous, des pelles abandonnées, des traces de bottes.`,`Someone came during the night. The earth has been turned over all around the wheel. Holes, abandoned spades, boot prints.`),
D('theo','a',`Ils ont creusé comme des taupes. Mais ils n'ont rien trouvé, sinon ils n'auraient pas laissé leurs pelles.`,`They dug like moles. But they found nothing, or they wouldn't have left their spades.`),
D('mc','n',`« Sous la roue », pas autour. Ils ont mal lu.`,`"Beneath the wheel", not around it. They misread.`),
N(`{fi} enlève ses bottes, retrousse son pantalon et descend dans l'eau glacée, sous la roue. Tu l'entends jurer, puis rire.`,`{fi} takes off {a:his|her} boots, rolls up {a:his|her} trousers and wades into the icy water beneath the wheel. You hear {a:him|her} swear, then laugh.`),
D('fi','h',`Il y a une niche dans la pierre, sous l'axe ! Et un coffret de fer ! Passe-moi la petite clé !`,`There's a niche in the stone, under the axle! And an iron box! Pass me the little key!`),
N(`Le coffret s'ouvre avec un grincement. Dedans, sur un lit de velours pourri, une seule perle noire, grosse comme une noisette. Et un dernier billet.`,`The box creaks open. Inside, on a bed of rotted velvet, a single black pearl, big as a hazelnut. And one last note.`),
N(`« Voici une larme. Les trente-neuf autres t'attendent là où dorment les Valcourt. Ne descends pas seul{g:|e|·e}, mon trésor. »`,`"Here is one tear. The other thirty-nine await you where the Valcourts sleep. Don't go down alone, my treasure."`),
D('gaspard','s',`Là où dorment les Valcourt… La crypte. Sous la chapelle. Personne n'y est descendu depuis l'enterrement de votre grand-père.`,`Where the Valcourts sleep… The crypt. Beneath the chapel. No one has been down there since your grandfather's funeral.`),

{bg:'street',mus:'calm',card:['Le marché','Market day'],sub:['',''],where:['La place du village','The village square']},
{st:['clem','mc']},
N(`C'est jour de marché au village, et la fête des vendanges commence ce soir. Des guirlandes de feuilles de vigne pendent entre les maisons. Ça sent le raisin écrasé, le pain chaud et le fromage de chèvre.`,`It's market day in the village, and the grape-harvest festival begins tonight. Garlands of vine leaves hang between the houses. It smells of crushed grapes, warm bread and goat's cheese.`),
D('clem','h',`Je veux tout acheter. Tout. Ce fromage. Ce chapeau de paille. Cette chèvre.`,`I want to buy everything. Everything. That cheese. That straw hat. That goat.`),
N(`Tu souris… puis ton sourire se fige. Derrière l'église, dans l'ombre d'une ruelle, Agnès, la nouvelle servante, parle à une femme en noir. Voilée. Droite comme un piquet.`,`You smile… then your smile freezes. Behind the church, in the shadow of an alley, Agnès, the new maid, is talking to a woman in black. Veiled. Straight as a ramrod.`),
N(`La femme glisse quelque chose dans la main d'Agnès. Des pièces. Puis elle disparaît.`,`The woman slips something into Agnès's hand. Coins. Then she vanishes.`),
...IF('closeDoor',[D('mc','s',`(Lord Grey avait raison. L'encre sur ses doigts. Heureusement que j'ai fermé cette porte.)`,`(Lord Grey was right. The ink on her fingers. Thank goodness I closed that door.)`)],[D('mc','s',`(Agnès. Elle était dans le couloir quand j'ai tout raconté. Iris sait tout. Le moulin, cette nuit… c'était elle.)`,`(Agnès. She was in the corridor when I told everyone. Iris knows everything. The mill last night… that was her.)`)]),
C('m67',1,[
 {t:[`Faire croire à Agnès que les perles sont dans le moulin… et tendre un piège.`,`Make Agnès believe the pearls are in the mill… and set a trap.`],set:'trapAgnes',fx:{vig:2},r:[
  N(`De retour au château, tu t'arranges pour qu'Agnès t'entende, par une porte entrouverte : « Les perles sont dans le grenier du moulin. On ira les chercher après-demain. »`,`Back at the château, you make sure Agnès overhears you through a half-open door: "The pearls are in the mill loft. We'll go and fetch them the day after tomorrow."`),
  D('theo','h',`Et pendant qu'Iris surveillera le moulin, nous, on descendra dans la crypte. Tu es diabolique. J'adore.`,`And while Iris is watching the mill, we'll go down into the crypt. You're diabolical. I love it.`)
 ]},
 {t:[`Confronter Agnès et la renvoyer sur-le-champ.`,`Confront Agnès and dismiss her on the spot.`],set:'fireAgnes',fx:{vig:1},r:[
  D('mc','a',`Agnès. Je t'ai vue avec la dame en noir. Rends-lui son argent, prends tes affaires, et ne remets jamais les pieds au château.`,`Agnès. I saw you with the lady in black. Give her back her money, pack your things, and never set foot in the château again.`),
  N(`Agnès éclate en sanglots : son père est malade, Iris payait bien. Elle part dans l'heure. Mais tu sais qu'Iris a désormais une longueur d'avance : elle sait que tu sais.`,`Agnès bursts into tears: her father is ill, Iris paid well. She leaves within the hour. But you know Iris is now one step ahead: she knows you know.`)
 ]}
]),

{bg:'terrace',mus:'ball',card:['La fête des vendanges','The Harvest Festival'],sub:['',''],where:['La place du village','The village square']},
{st:['fi','mc']},
N(`Le soir, la place du village s'illumine de lampions. Des violoneux jouent des bourrées. Les vendangeurs dansent pieds nus, les mains violettes de raisin.`,`In the evening, the village square lights up with paper lanterns. Fiddlers play bourrées. The grape-pickers dance barefoot, their hands purple with juice.`),
D('fi','h',`Ce n'est pas une valse. Je ne connais pas les pas. Et je m'en fiche complètement.`,`It isn't a waltz. I don't know the steps. And I don't care in the slightest.`),
N(`{fi} t'entraîne dans la ronde. Vous tournez, vous trébuchez, vous riez. Une vieille vendangeuse te pose une couronne de feuilles de vigne sur la tête. « Pour la future mariée ! » Tout le village applaudit.`,`{fi} pulls you into the round. You spin, you stumble, you laugh. An old grape-picker puts a crown of vine leaves on your head. "For the bride-to-be!" The whole village applauds.`),
C('m68',1,[
 {t:[`L'entraîner à l'écart, sous la vigne, pour un baiser au goût de raisin.`,`Pull {a:him|her} aside, under the vines, for a kiss that tastes of grapes.`],set:'vineKiss',fx:{fi:3},r:[N(`Sous la treille, à l'écart des lampions, tu l'embrasses. Ses lèvres ont le goût du vin nouveau. Quelque part derrière vous, quelqu'un siffle. Clem, évidemment.`,`Under the trellis, away from the lanterns, you kiss {a:him|her}. {a:His|Her} lips taste of new wine. Somewhere behind you, someone whistles. Clem, of course.`)]},
 {t:[`Danser jusqu'à l'aube, sans jamais lâcher sa main.`,`Dance until dawn, never letting go of {a:his|her} hand.`],set:'danceDawn',fx:{fi:2},r:[N(`Vous dansez jusqu'à ce que les violoneux s'endorment. Au lever du soleil, vous rentrez pieds nus au château, tes chaussures à la main, ta couronne de travers.`,`You dance until the fiddlers fall asleep. At sunrise, you walk back to the château barefoot, shoes in hand, your crown askew.`)]}
]),
D('fi','s',`Demain, la crypte. Promets-moi une chose : tu ne descends pas sans moi.`,`Tomorrow, the crypt. Promise me one thing: you don't go down without me.`),
D('mc','h',`« Ne descends pas seul{g:|e|·e}, mon trésor. » Ma mère était du même avis.`,`"Don't go down alone, my treasure." My mother was of the same mind.`),
{end:34}
);
