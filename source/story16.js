/* ===== CHAPITRE 16 — Le duel ===== */
STORY.push(
{bg:'bedroomday',mus:'mystery',chap:16,card:['Chapitre 16','Chapter 16'],sub:['Le duel','The Duel'],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Bess entre sans frapper, ce qui n'arrive jamais. Elle tient une feuille imprimée qui sent encore l'encre fraîche.`,`Bess comes in without knocking, which never happens. She's holding a printed sheet that still smells of fresh ink.`),
D('bess','o',`{title}, c'est dans tous les journaux à scandale. Lisez. Non, ne lisez pas. Si, lisez.`,`{title}, it's in every scandal sheet. Read it. No, don't read it. Yes, read it.`),
N(`« On a vu une personne de naissance douteuse passer la nuit seule avec {lv}. Quand on n'a plus d'honneur, on ne craint plus de le perdre. »`,`"A person of doubtful birth was seen spending the night alone with {lv}. When one has no honour left, one no longer fears losing it."`),
D('bess','s',`Et ce n'est pas tout. On dit que {lv} s'en est vanté{a:|e}. Au club. Devant témoins.`,`And that's not all. They say {lv} boasted about it. At the club. In front of witnesses.`),
C('c16a',0,[
 {t:[`« C'est faux. {lv} ne ferait jamais ça. »`,`"That's false. {lv} would never do that."`],fx:{lv:1},r:[D('bess','h',`Je le sais bien. Mais tout Londres, lui, ne le sait pas.`,`I know that. But all of London doesn't.`)]},
 {t:[`« Qui a écrit ça ? »`,`"Who wrote this?"`],r:[D('bess','s',`Pas de signature. Mais le valet du journal dit que la lettre est arrivée parfumée. À la lavande.`,`No signature. But the paper's footman says the letter arrived perfumed. With lavender.`)]}
]),
D('bess','o',`Il y a pire. {ot} a lu l'article ce matin. {a:Il|Elle} est allé{a:|e} trouver {lv}, et {a:il|elle} l'a giflé{a:|e} avec son gant. Devant tout le monde.`,`There's worse. {ot} read the article this morning. {a:He|She} went to find {lv} and struck {a:him|her} with a glove. In front of everyone.`),
D('mc','o',`Un duel ?!`,`A duel?!`),
D('bess','s',`Demain à l'aube. À Hyde Park, près de la Serpentine. À l'épée.`,`Tomorrow at dawn. In Hyde Park, by the Serpentine. With swords.`),

{bg:'salon',mus:'mystery',where:['Le salon des Pembroke','The Pembroke drawing room']},
{st:['clem','mc']},
...IF('suspectCordelia',[N(`Tu cours chez les Pembroke. Clem t'ouvre elle-même. Elle ne t'a pas parlé depuis Ascot. Elle a les yeux rouges.`,`You run to the Pembrokes'. Clem opens the door herself. She hasn't spoken to you since Ascot. Her eyes are red.`)],[N(`Tu cours chez les Pembroke. Clem t'ouvre elle-même, le journal à la main, furieuse.`,`You run to the Pembrokes'. Clem opens the door herself, the paper in her hand, furious.`)]),
D('clem','s',`Je l'ai lu. J'ai demandé au journal de me montrer la lettre originale. J'ai menacé de faire un scandale. Ils me l'ont montrée.`,`I read it. I asked the paper to show me the original letter. I threatened to make a scene. They showed it to me.`),
D('clem','s',`L'écriture était déguisée. Mais le papier sentait la lavande. Et il y avait une petite tache d'encre violette dans le coin. Comme celle que Cordelia fait toujours avec sa plume qui fuit.`,`The handwriting was disguised. But the paper smelled of lavender. And there was a small violet ink blot in the corner. Like the one Cordelia always makes with her leaky pen.`),
N(`Clem s'assied d'un coup, comme si ses jambes ne la portaient plus.`,`Clem sits down all at once, as if her legs could no longer hold her.`),
...IF('suspectCordelia',[D('clem','s',`Tu avais raison, à Ascot. Et je t'ai crié dessus. Je suis désolée. Je suis tellement désolée.`,`You were right, at Ascot. And I shouted at you. I'm sorry. I'm so sorry.`)],[D('clem','s',`Ça ne veut rien dire. Beaucoup de gens aiment la lavande. Pas vrai ? … Pas vrai ?`,`It doesn't mean anything. Lots of people like lavender. Right? … Right?`)]),
C('c16b',0,[
 {t:[`La serrer dans tes bras.`,`Hug her.`],set:'clemHug16',r:[N(`Clem pleure dans ton épaule, en silence, comme quelqu'un qui n'a pas l'habitude.`,`Clem cries on your shoulder, silently, like someone who isn't used to it.`),D('clem','s',`Quinze ans. Je lui ai tout dit pendant quinze ans.`,`Fifteen years. I told her everything for fifteen years.`)]},
 {t:[`« On n'est sûr{e}s de rien encore. Mais il faut l'empêcher de nuire. »`,`"We're not sure of anything yet. But we have to stop her doing harm."`],r:[D('clem','a',`Tu as raison. Pleurer plus tard. Agir maintenant.`,`You're right. Cry later. Act now.`)]}
]),
D('clem','n',`Pour le duel, je ne peux rien faire. Mais toi, peut-être.`,`About the duel, I can't do anything. But maybe you can.`),

{bg:'park',mus:'mystery',card:['L\'aube','Dawn'],sub:['Hyde Park','Hyde Park'],where:['Au bord de la Serpentine','By the Serpentine']},
{st:['lv','ot']},
N(`L'aube, grise et froide. La brume flotte sur la Serpentine. Deux silhouettes en chemise blanche se font face sur l'herbe mouillée, l'épée à la main.`,`Dawn, grey and cold. Mist drifts over the Serpentine. Two figures in white shirts face each other on the wet grass, swords in hand.`),
D('ot','a',`Vous avez traîné son nom dans la boue. Je ne vous le pardonnerai pas.`,`You dragged that name through the mud. I won't forgive you for it.`),
D('lv','a',`Je n'ai jamais dit un mot sur {first}. Mais si vous tenez à vous battre, battons-nous.`,`I've never said a word about {first}. But if you insist on fighting, let's fight.`),
N(`Les lames se croisent avec un cri d'acier. Une fois, deux fois. {ot} attaque avec rage, {lv} pare avec précision. Une manche se déchire. Une goutte de sang tombe sur l'herbe.`,`The blades cross with a shriek of steel. Once, twice. {ot} attacks with fury, {lv} parries with precision. A sleeve tears. A drop of blood falls on the grass.`),
C('m31',1,[
 {t:[`Te jeter entre les deux lames.`,`Throw yourself between the blades.`],set:'stopDuel',fx:{lv:2,rep:-1},r:[
  {st:['lv','mc']},
  N(`Tu cours sans réfléchir et tu te jettes entre eux, les bras écartés. Une lame t'effleure le bras. Une traînée rouge sur ta manche.`,`You run without thinking and throw yourself between them, arms spread wide. A blade grazes your arm. A red streak on your sleeve.`),
  D('lv','o',`{first} !`,`{first}!`),
  D('mc','a',`Assez ! Vous êtes tous les deux tombés dans le piège de quelqu'un qui veut nous séparer. Cette lettre est un mensonge !`,`Enough! You've both fallen into the trap of someone who wants to tear us apart. That letter is a lie!`),
  N(`{ot} lâche son épée. Elle tombe dans l'herbe avec un bruit mat.`,`{ot} drops {a:his|her} sword. It falls in the grass with a dull thud.`)
 ]},
 {t:[`Faire confiance à {lv} et regarder, le cœur au bord des lèvres.`,`Trust {lv} and watch, heart in your mouth.`],set:'letDuel',fx:{lv:1},r:[
  N(`Tu serres les poings si fort que tes ongles s'enfoncent dans tes paumes. {lv} recule, pare, recule encore… puis d'un mouvement de poignet, désarme {ot}. L'épée vole et se plante dans l'herbe.`,`You clench your fists so hard your nails dig into your palms. {lv} retreats, parries, retreats again… then, with a flick of the wrist, disarms {ot}. The sword flies and sticks in the grass.`),
  D('lv','n',`Je n'ai jamais rien dit au club. Je n'y ai même pas mis les pieds depuis un mois. Demandez au portier.`,`I never said anything at the club. I haven't set foot in it for a month. Ask the porter.`)
 ]}
]),
{st:['ot','mc']},
D('ot','s',`Alors… on s'est servi de moi. Je suis désolé{a:|e}, {first}. Je voulais seulement vous défendre.`,`So… I was used. I'm sorry, {first}. I only wanted to defend you.`),
D('ot','s',`Je vois bien que vous avez fait votre choix. Ce n'est pas moi. Ça fait mal, mais… je préfère le savoir.`,`I can see you've made your choice. It isn't me. It hurts, but… I'd rather know.`),
C('c16c',0,[
 {t:[`« Je suis désolé{e}. Vous méritez quelqu'un qui vous choisisse aussi. »`,`"I'm sorry. You deserve someone who chooses you too."`],fx:{ot:1},r:[D('ot','h',`C'est gentil. Faux, peut-être, mais gentil.`,`That's kind. Untrue, perhaps, but kind.`)]},
 {t:[`« Merci d'avoir voulu me défendre. Sincèrement. »`,`"Thank you for wanting to defend me. Truly."`],fx:{rep:1},r:[D('ot','h',`Si un jour vous avez besoin d'une épée, vous savez où me trouver.`,`If you ever need a sword, you know where to find me.`)]}
]),
N(`{ot} ramasse sa veste et s'éloigne dans la brume, le dos très droit.`,`{ot} picks up {a:his|her} jacket and walks off into the mist, back very straight.`),

{bg:'bedroomday',mus:'tender',where:['Le pavillon du jardin','The garden pavilion']},
{st:['lv','mc']},
...IF('stopDuel',[N(`Dans le pavillon du parc, {lv} déchire un pan de sa chemise pour bander ton bras. Ses mains tremblent bien plus que les tiennes.`,`In the park pavilion, {lv} tears a strip from {a:his|her} shirt to bandage your arm. {a:His|Her} hands are shaking much more than yours.`),D('lv','a',`Ne refaites jamais ça. Jamais. Vous m'entendez ? J'ai cru… J'ai cru que…`,`Never do that again. Never. Do you hear me? I thought… I thought…`)],
 [N(`Dans le pavillon du parc, c'est toi qui bandes son bras égratigné, avec ton propre mouchoir. {lv} grimace et sourit en même temps.`,`In the park pavilion, it's you who bandages {a:his|her} scratched arm with your own handkerchief. {lv} winces and smiles at the same time.`),D('lv','h',`Si j'avais su qu'un duel me vaudrait ce genre de soins, je me serais battu{a:|e} plus souvent.`,`If I'd known a duel would earn me this kind of nursing, I'd have fought more often.`)]),
D('lv','s',`Cette rumeur va vous coller à la peau. À moins que…`,`That rumour will stick to you. Unless…`),
D('mc','o',`À moins que quoi ?`,`Unless what?`),
D('lv','h',`À moins qu'on arrête de se cacher. Qu'on se promène ensemble à Rotten Row, à l'heure où tout Londres est là. Bras dessus, bras dessous. Que ce soit nous qui racontions l'histoire.`,`Unless we stop hiding. Unless we stroll together on Rotten Row, at the hour when all London is there. Arm in arm. So that we're the ones telling the story.`),
...IF('danceLi1',[D('lv','s',`Ma mère va hurler. Ça fait partie du charme.`,`My mother will scream. That's part of the charm.`)],[D('lv','s',`Un apprenti au bras d'{g:un héritier|une héritière|un·e héritier·e}… Tout Londres va s'étrangler. Ça fait partie du charme.`,`An apprentice on an heir's arm… All London will choke. That's part of the charm.`)]),
C('m32',1,[
 {t:[`Accepter : vous vous montrerez ensemble, devant tout Londres.`,`Accept: you'll show yourselves together, in front of all London.`],set:'goPublic',fx:{lv:3},r:[
  {bg:'park',mus:'calm',where:['Rotten Row','Rotten Row']},
  N(`À cinq heures, Rotten Row est noir de monde. Tu avances au bras de {lv}, la tête haute. Les éventails s'arrêtent. Les conversations meurent.`,`At five o'clock, Rotten Row is packed. You walk on {lv}'s arm, head high. Fans stop fluttering. Conversations die.`),
  N(`Puis quelqu'un applaudit. Georgie, perchée dans la calèche de Lord Fairfax. Puis Lord Pembroke. Puis, incroyable, {tA}. Bientôt, la moitié de l'allée applaudit.`,`Then someone applauds. Georgie, perched in Lord Fairfax's carriage. Then Lord Pembroke. Then, incredibly, {tA}. Soon, half the avenue is applauding.`),
  D('lv','h',`Voilà. Maintenant, c'est notre histoire.`,`There. Now it's our story.`)
 ]},
 {t:[`Refuser : votre amour mérite mieux que d'être exhibé.`,`Refuse: your love deserves better than to be paraded.`],set:'staySecret',fx:{lv:1},r:[
  D('mc','s',`Je n'ai pas besoin que Londres nous applaudisse. J'ai besoin de vous. Ici. Sans témoins.`,`I don't need London to applaud us. I need you. Here. Without witnesses.`),
  D('lv','h',`Alors gardons-nous pour nous. Encore un peu.`,`Then let's keep ourselves to ourselves. A little longer.`),
  N(`{lv} t'embrasse dans la pénombre du pavillon, pendant que dehors, Londres continue de bavarder sans rien savoir.`,`{lv} kisses you in the half-light of the pavilion while, outside, London goes on gossiping and knowing nothing.`)
 ]}
]),
{end:16}
);
