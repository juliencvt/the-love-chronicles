/* ===== SAISON 2 — CHAPITRE 1 — La réponse ===== */
STORY.push(
{bg:'terrace',mus:'tender',chap:23,card:['Saison 2 · Chapitre 1','Season 2 · Chapter 1'],sub:['La réponse','The Answer'],where:['La terrasse du palais','The palace terrace']},
{st:['lv','mc']},
N(`Le temps s'est arrêté. {lv} est à genoux devant toi, la bague au lys d'or tremblant au creux de sa main. Derrière les fenêtres, tout le bal retient son souffle.`,`Time has stopped. {lv} kneels before you, the gold lily ring trembling in {a:his|her} palm. Behind the windows, the whole ball holds its breath.`),
N(`Tu ouvres la bouche pour répondre…`,`You open your mouth to answer…`),
D('ot','a',`Attends !`,`Wait!`),
{st:['ot','lv']},
N(`Une silhouette traverse la terrasse à grands pas, le souffle court, les cheveux défaits. {ot}.`,`A figure strides across the terrace, breathless, hair dishevelled. {ot}.`),
D('lv','a',`Tu n'as rien à faire ici.`,`You have no business here.`),
D('ot','s',`Je sais. Je sais tout ça. Laisse-moi juste parler. Une fois. Après, je disparais.`,`I know. I know all that. Just let me speak. Once. Then I'll disappear.`),
{st:['ot','mc']},
D('ot','s',`Je t'aime, {first}. Depuis le premier soir. Depuis la première fois que tu m'as regardé{a:|e} comme si j'étais quelqu'un.`,`I love you, {first}. Since the very first night. Since the first time you looked at me as if I were someone.`),
D('ot','s',`Je sais que tu m'as repoussé{a:|e}. Je sais que j'ai perdu. Mais je ne pouvais pas te laisser dire oui sans l'avoir dit une fois, à voix haute. Je ne te demande rien. Juste de choisir en sachant.`,`I know you turned me away. I know I've lost. But I couldn't let you say yes without having said it once, out loud. I'm not asking for anything. Just that you choose knowing it.`),
N(`Le silence est assourdissant. {lv}, toujours à genoux, ne quitte pas ton visage des yeux. {ot}, debout, les poings serrés, attend sa sentence.`,`The silence is deafening. {lv}, still on one knee, doesn't take {a:his|her} eyes off your face. {ot}, standing, fists clenched, awaits the verdict.`),
D('mc','s',`(Deux cœurs. Deux vies possibles. Et une seule réponse.)`,`(Two hearts. Two possible lives. And only one answer.)`),
N(`⚠️ Ce choix est définitif : tu épouseras la personne que tu choisis.`,`⚠️ This choice is final: you will marry the person you choose.`),
C('m45',1,[
 {t:[`Dire oui à {lv}.`,`Say yes to {lv}.`],set:'fiLv',fx:{lv:5},r:[
  ...IF('danceLi1',[SET('fiNoble')],[]),
  D('mc','s',`{ot}… merci. Pour ton courage. Pour ces mots. Mais mon cœur a déjà choisi.`,`{ot}… thank you. For your courage. For those words. But my heart has already chosen.`),
  N(`Tu te tournes vers {lv} et tu tends ta main.`,`You turn to {lv} and hold out your hand.`),
  D('mc','h',`Oui. Oui, je veux t'épouser.`,`Yes. Yes, I want to marry you.`),
  {st:['lv','mc']},
  N(`{lv} glisse la bague à ton doigt d'une main qui tremble, puis se relève et te serre contre {a:lui|elle} comme si on allait t'arracher à {a:lui|elle}.`,`{lv} slides the ring onto your finger with a trembling hand, then rises and holds you as if someone were about to tear you away.`),
  D('lv','s',`J'ai cru… pendant une seconde, j'ai cru que…`,`I thought… for a second, I thought…`),
  D('mc','h',`Je sais. Je suis là.`,`I know. I'm here.`)
 ]},
 {t:[`Te tourner vers {ot}.`,`Turn to {ot}.`],set:'fiOt',fx:{ot:5},r:[
  ...IF('danceLi1',[],[SET('fiNoble')]),
  N(`Tu baisses les yeux vers {lv}. Ton cœur se brise en deux, proprement, comme une branche sous la neige.`,`You look down at {lv}. Your heart breaks in two, cleanly, like a branch under snow.`),
  D('mc','s',`{lv}… pardonne-moi. Je t'aime. Mais pas comme ça. Pas comme il faut pour toute une vie.`,`{lv}… forgive me. I love you. But not like that. Not the way it takes for a whole lifetime.`),
  N(`{lv} referme lentement la main sur la bague. {a:Il|Elle} se relève, très droit{a:|e}, très pâle.`,`{lv} slowly closes {a:his|her} hand over the ring. {a:He|She} rises, very straight, very pale.`),
  D('lv','s',`Je crois que je le savais. Depuis Hyde Park. Je ne voulais pas le voir.`,`I think I knew. Since Hyde Park. I didn't want to see it.`),
  {st:['ot','mc']},
  N(`Tu traverses la terrasse jusqu'à {ot}, qui ne bouge pas, comme s'{a:il|elle} avait peur que le moindre geste brise le rêve.`,`You cross the terrace to {ot}, who doesn't move, as if afraid the slightest gesture might shatter the dream.`),
  D('ot','o',`Tu… moi ? Vraiment ?`,`You… me? Really?`),
  D('mc','h',`Toi. Demande-moi. Correctement, cette fois.`,`You. Ask me. Properly, this time.`),
  D('ot','h',`Je n'ai pas de bague. Je n'avais rien prévu. Je… Épouse-moi, {first}. Avec ce ruban en attendant.`,`I don't have a ring. I hadn't planned anything. I… Marry me, {first}. With this ribbon for now.`),
  N(`{ot} dénoue le ruban de sa manchette et le noue autour de ton doigt. Tu ris en pleurant. Tu dis oui.`,`{ot} unties the ribbon from {a:his|her} cuff and ties it around your finger. You laugh through your tears. You say yes.`)
 ]}
]),
{st:['fi','mc']},
N(`{fi} t'embrasse sous les étoiles. Ce baiser-là ne ressemble à aucun autre : il a le goût d'une promesse.`,`{fi} kisses you under the stars. This kiss is like no other: it tastes of a promise.`),
{st:['rj']},
N(`Au bout de la terrasse, {rj} s'éloigne seul{a:|e} vers les jardins. Sans se retourner.`,`At the end of the terrace, {rj} walks off alone towards the gardens. Without looking back.`),
C('m46',1,[
 {t:[`Courir rattraper {rj}, quelques secondes.`,`Run after {rj}, just for a moment.`],set:'kindRj',fx:{rep:1,vig:1},r:[
  {st:['rj','mc']},
  D('mc','s',`Attends. Je ne veux pas te perdre complètement. Tu comptes pour moi. Tu compteras toujours.`,`Wait. I don't want to lose you completely. You matter to me. You always will.`),
  D('rj','s',`Laisse-moi un peu de temps. Après… on verra si je sais être ton ami{a:|e}. Va. On t'attend.`,`Give me a little time. Afterwards… we'll see if I can be your friend. Go. They're waiting for you.`)
 ]},
 {t:[`Le laisser partir. C'est mieux ainsi.`,`Let {a:him|her} go. It's better this way.`],set:'leaveRj',r:[
  D('fi','s',`Laisse-lui sa dignité. C'est tout ce qu'il lui reste ce soir.`,`Leave {a:him|her} {a:his|her} dignity. It's all {a:he|she} has left tonight.`)
 ]}
]),
{bg:'ballnight',mus:'ball',where:['La grande salle de bal','The great ballroom']},
{st:['queen','mc']},
N(`Quand vous rentrez dans la salle, main dans la main, la Reine frappe trois coups de sa canne. Silence.`,`When you come back into the ballroom, hand in hand, the Queen strikes the floor three times with her cane. Silence.`),
D('queen','h',`Eh bien ? Nous attendons tous. Certains ont parié.`,`Well? We're all waiting. Some have placed bets.`),
D('mc','h',`J'ai dit oui, Votre Majesté. À {fi}.`,`I said yes, Your Majesty. To {fi}.`),
N(`La salle explose. Ta mère s'évanouit à moitié dans les bras de ton père. Clem saute au cou de Théo. Lord Pembroke commande du champagne pour tout le monde.`,`The room erupts. Your mother half-faints into your father's arms. Clem throws her arms round Theo's neck. Lord Pembroke orders champagne for everyone.`),
{st:['duchess','mother']},
...IF('fiNoble',[D('duchess','n',`Félicitations. Nous parlerons des détails. Beaucoup de détails.`,`Congratulations. We shall discuss the details. A great many details.`),D('mother','h',`Avec plaisir, Votre Grâce.`,`With pleasure, Your Grace.`),N(`Les deux femmes se sourient. Comme deux duellistes qui se saluent avant de croiser le fer.`,`The two women smile at each other. Like two duellists saluting before crossing swords.`)],
 [D('duchess','a',`Un apprenti. L'héritier{g:|e|·e} Valcourt épouse… un apprenti couturier.`,`An apprentice. The Valcourt heir is marrying… a dressmaker's apprentice.`),D('mother','a',`{a:Un couturier|Une couturière} de la Cour, Votre Grâce. Nommé{a:|e} par la Reine elle-même.`,`Dressmaker to the Court, Your Grace. Appointed by the Queen herself.`),D('duchess','s',`Nous verrons ce qu'en dira Londres.`,`We shall see what London has to say about it.`)]),
{end:23}
);
