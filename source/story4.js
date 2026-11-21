/* ===== CHAPITRE 4 — Une nuit à l'opéra ===== */
STORY.push(
{bg:'opera',mus:'ball',chap:4,card:['Chapitre 4','Chapter 4'],sub:['Une nuit à l\'opéra','A Night at the Opera'],where:['Covent Garden','Covent Garden']},
{st:[]},
N(`Le Théâtre royal de Covent Garden brille de mille feux. Des loges dorées, un rideau de velours pourpre, et tout le gratin de Londres qui fait semblant d'écouter la musique.`,`The Theatre Royal, Covent Garden, blazes with light. Gilded boxes, a crimson velvet curtain, and the cream of London pretending to listen to the music.`),
N(`Dans ta nouvelle robe de soie, tu sens les lorgnettes se tourner vers toi à mesure que vous montez vers la loge des Ashbury.`,`In your new silk, you feel the opera glasses turn towards you as you climb to the Ashbury box.`),
{st:['duchess','mc']},
D('duchess','n',`{title}. Asseyez-vous à ma droite. Je veux vous avoir sous les yeux.`,`{title}. Sit on my right. I want to keep you where I can see you.`),
D('mc','s',`(Sous les yeux… ou sous surveillance ?)`,`(Where she can see me… or keep watch on me?)`),
{st:['li1','mc']},
...IF('p1',[
 ...IF('confided',[D('li1','h',`Vous êtes resplendissant{e}. Et rassurez-vous : votre secret est en sécurité. Ma mère n'en sait rien.`,`You look radiant. And rest assured: your secret is safe. My mother knows nothing.`)],
  [D('li1','h',`Vous êtes resplendissant{e}. Ma mère vous observe comme un faucon. Restez près de moi, ce soir.`,`You look radiant. My mother is watching you like a hawk. Stay close to me tonight.`)])
],[
 D('li1','h',`Vous avez reçu mes roses ? J'espère qu'elles vous ont fait sourire. Moi, j'ai souri toute la journée en pensant à ce soir.`,`Did you get my roses? I hope they made you smile. I've been smiling all day thinking about tonight.`),
 C('c4a',0,[
  {t:[`« Elles sont magnifiques. Merci. »`,`"They're beautiful. Thank you."`],fx:{li1:1},r:[D('li1','h',`Alors ma soirée est déjà réussie.`,`Then my evening is already a success.`)]},
  {t:[`« Vous n'auriez pas dû. »`,`"You shouldn't have."`],r:[D('li1','s',`Peut-être. Mais je ne regrette rien.`,`Perhaps. But I don't regret it.`)]}
 ])
]),
N(`Les trois coups retentissent. Le rideau se lève sur « Les Noces de Figaro ». La salle entière se tourne… vers la loge royale.`,`The three knocks ring out. The curtain rises on "The Marriage of Figaro". The whole house turns… towards the royal box.`),
{st:['queen','mc']},
...IF('queenAmused',[D('queen','h',`Ah ! {g:Le jeune Français|La jeune Française|La jeune personne de Paris} qui salue à la Versailles ! Venez me parler à l'entracte.`,`Ah! The young Parisian who greets like Versailles! Come and talk to me at the interval.`)],
 [D('queen','n',`{title}, n'est-ce pas ? Augusta m'a beaucoup parlé de vous. Beaucoup trop, peut-être.`,`{title}, isn't it? Augusta has told me a great deal about you. Perhaps too much.`)]),
N(`Pendant le premier acte, un détail t'obsède : dans une loge sombre, de l'autre côté de la salle, une femme voilée de noir ne regarde pas la scène. Elle te regarde, toi.`,`During the first act, one detail obsesses you: in a dark box across the theatre, a woman veiled in black isn't watching the stage. She's watching you.`),
...IF('readLetters',[D('mc','o',`(« Nous nous verrons à Covent Garden »… C'est elle. C'est « I. ».)`,`("We shall meet at Covent Garden"… It's her. It's "I.".)`)],
 [D('mc','o',`(Covent Garden… le fragment de lettre. Est-ce que c'est elle ?)`,`(Covent Garden… the letter fragment. Could it be her?)`)]),

{bg:'opera',mus:'mystery',card:['L\'entracte','The Interval'],sub:['',''],where:['Le foyer de l\'Opéra','The Opera foyer']},
{st:['twinA','twinB']},
N(`À l'entracte, le foyer bourdonne. Puis, d'un coup, le silence se propage autour de toi comme une tache d'encre.`,`At the interval, the foyer buzzes. Then, all at once, silence spreads around you like an ink stain.`),
D('twinA','h',`Vous connaissez la nouvelle ? Notre cousin de Paris nous a écrit. La famille {last} est ruinée. Ruinée ! Ils ont des dettes jusqu'au cou.`,`Have you heard the news? Our cousin in Paris wrote to us. The {last} family is ruined. Ruined! They're up to their necks in debt.`),
D('twinB','h',`Ils sont venus à Londres pour vendre leur {g:fils|fille|enfant} au plus offrant. Comme un cheval à la foire !`,`They came to London to sell their {g:son|daughter|child} to the highest bidder. Like a horse at the fair!`),
N(`Des rires étouffés. Des éventails qui s'agitent. Des regards qui se détournent. Ta mère est devenue blanche comme un linge.`,`Stifled laughter. Fluttering fans. Eyes turning away. Your mother has gone white as a sheet.`),
{st:['duchess','mc']},
D('duchess','a',`{title}. Est-ce vrai ?`,`{title}. Is it true?`),
N(`Tout le foyer retient son souffle. Toute ta vie à Londres va se jouer sur ta réponse.`,`The whole foyer holds its breath. Your entire life in London hinges on your answer.`),
C('m7',1,[
 {t:[`Nier avec aplomb pour protéger ta famille.`,`Deny it boldly to protect your family.`],set:'denied',fx:{rep:1},r:[
  D('mc','a',`Des ragots de cousins jaloux, Votre Grâce. Si ma famille était ruinée, croyez-vous que je porterais la plus belle soie de Madame Fleury ?`,`Gossip from jealous cousins, Your Grace. If my family were ruined, do you think I'd be wearing Madame Fleury's finest silk?`),
  N(`Quelques rires changent de camp. Les {t:jumeaux|jumelles} perdent de leur assurance.`,`A few laughs switch sides. The twins lose some of their swagger.`),
  D('duchess','n',`Hm. Bien répondu. Que ce soit vrai, c'est une autre affaire.`,`Hm. Well answered. Whether it's true is another matter.`),
  ...IF('confided',[...IF('p1',[{st:['li1','mc']},D('li1','s',`(Vous mentez pour survivre. Je ne vous en veux pas… mais je sais.)`,`(You're lying to survive. I don't blame you… but I know.)`)])])
 ]},
 {t:[`Dire la vérité, avec dignité.`,`Tell the truth, with dignity.`],set:'truth',fx:{rep:-1,li1:1,li2:1},r:[
  D('mc','n',`Oui. Ma famille traverse des difficultés. Comme beaucoup de familles françaises depuis la guerre.`,`Yes. My family is going through difficulties. Like many French families since the war.`),
  D('mc','a',`Mais je ne suis pas à vendre. Et je préfère être {g:pauvre|pauvre|pauvre} et {g:honnête|honnête|honnête} que {g:riche|riche|riche} et cruel{e} comme ceux qui lisent le courrier des autres.`,`But I am not for sale. And I'd rather be poor and honest than rich and cruel like those who read other people's letters.`),
  N(`Un silence stupéfait. Puis, dans la loge royale, quelqu'un se met à applaudir doucement. La Reine.`,`A stunned silence. Then, from the royal box, someone begins to clap softly. The Queen.`),
  {st:['queen','mc']},
  D('queen','h',`Enfin quelqu'un qui dit la vérité dans ce théâtre. C'est plus rare qu'un ténor juste.`,`At last, someone telling the truth in this theatre. That's rarer than a tenor in tune.`),
  SET('queenRespect')
 ]}
]),
{st:['duchess','mc']},
D('duchess','n',`Suivez-moi, {title}. Dans mon salon privé. Maintenant.`,`Follow me, {title}. To my private salon. Now.`),

{bg:'salon',mus:'mystery',where:['Le salon privé de la Duchesse','The Duchess\'s private salon']},
{st:['duchess','mc']},
N(`La Duchesse referme la porte. Le brouhaha du foyer disparaît d'un coup. Elle te fixe longtemps, sans un mot.`,`The Duchess closes the door. The noise of the foyer vanishes at once. She stares at you for a long time, without a word.`),
D('duchess','s',`Ma famille et la vôtre se ressemblent plus que vous ne le croyez, {title}. Nous avons toutes deux des secrets.`,`My family and yours are more alike than you think, {title}. We both have secrets.`),
D('duchess','n',`J'ai lu votre dossier. Des dettes, oui. Mais ce n'est pas ce qui m'intéresse.`,`I've read your file. Debts, yes. But that's not what interests me.`),
D('duchess','s',`Dites-moi… vos parents vous ont-ils déjà parlé d'une femme nommée Isadora de Valcourt ?`,`Tell me… have your parents ever mentioned a woman named Isadora de Valcourt?`),
C('c4b',0,[
 {t:[`« Qui était-elle ? »`,`"Who was she?"`],r:[D('duchess','s',`Mon amie la plus chère. Autrefois. Avant que la Révolution ne nous sépare. Elle est morte il y a près de vingt ans… à Paris.`,`My dearest friend. Once. Before the Revolution tore us apart. She died nearly twenty years ago… in Paris.`)]},
 {t:[`Lui dire ce que tu sais : le nom, le lys, le médaillon.`,`Tell her what you know: the name, the lily, the locket.`],set:'toldDuchess',fx:{rep:1},r:[D('mc','s',`J'ai entendu ce nom dans la bouche de mes parents. Et j'ai trouvé un médaillon avec un lys gravé, et l'initiale « I. ».`,`I heard that name from my parents. And I found a locket engraved with a lily, and the initial "I.".`),D('duchess','o',`Le lys des Valcourt…`,`The Valcourt lily…`),N(`Pour la première fois, la Duchesse semble ébranlée. Elle s'assoit, lentement.`,`For the first time, the Duchess looks shaken. She sits down, slowly.`)]},
 {t:[`« Jamais entendu parler. » (mentir)`,`"Never heard of her." (lie)`],r:[D('duchess','a',`Vous mentez aussi mal que votre père, {title}. C'est presque touchant.`,`You lie as badly as your father, {title}. It's almost touching.`)]}
]),
D('duchess','s',`Isadora était la femme la plus brillante de Paris. Et la plus imprudente. On dit qu'elle est morte de fièvre. Je n'y ai jamais cru.`,`Isadora was the most brilliant woman in Paris. And the most reckless. They say she died of a fever. I never believed it.`),
D('duchess','n',`Depuis quelques semaines, je reçois des lettres. Encre violette. Signées « I. ». Comme si Isadora m'écrivait d'outre-tombe.`,`For some weeks now, I've been receiving letters. Violet ink. Signed "I.". As if Isadora were writing to me from beyond the grave.`),
D('mc','o',`Ma mère en reçoit aussi !`,`My mother gets them too!`),
D('duchess','a',`Alors écoutez-moi bien. Celui ou celle qui signe « I. » n'est pas un fantôme. Et ce n'est pas votre amie. Ne rencontrez jamais cette personne {g:seul|seule|seul·e}.`,`Then listen carefully. Whoever signs "I." is no ghost. And they are not your friend. Never meet them alone.`),
D('duchess','n',`Maintenant, retournez dans la salle. Et souriez. À Londres, on ne pleure jamais en public.`,`Now go back to the house. And smile. In London, one never cries in public.`),

{bg:'opera',mus:'tender',card:['Le dernier acte','The Final Act'],sub:['',''],where:['Les coulisses','Backstage']},
...IF('p1',[
 {bg:'terrace',where:['Le balcon de l\'Opéra','The Opera balcony']},
 N(`Tu ne retournes pas dans la loge. Tu as besoin d'air. Tu trouves un petit balcon désert qui surplombe la place de Covent Garden.`,`You don't go back to the box. You need air. You find a small deserted balcony overlooking Covent Garden square.`),
 {st:['li1','mc']},
 D('li1','s',`Je vous cherchais partout. Ma mère vous a fait peur ? Elle fait peur à tout le monde. Même à la Reine, parfois.`,`I've been looking for you everywhere. Did my mother frighten you? She frightens everyone. Even the Queen, sometimes.`),
 ...IF('truth',[D('li1','h',`Ce que vous avez dit, dans le foyer… Je n'ai jamais vu quelqu'un d'aussi courageux. Tout Londres vous regardait, et vous n'avez pas baissé les yeux.`,`What you said in the foyer… I've never seen anyone so brave. All of London was watching, and you didn't look away.`)],
  [D('li1','h',`Vous avez remis {t:mes frères|mes sœurs} à leur place avec un sang-froid incroyable. Je crois que je suis {a:un peu jaloux|un peu jalouse} de votre aplomb.`,`You put my {t:brothers|sisters} in their place with incredible composure. I think I'm a little jealous of your nerve.`)]),
 D('li1','n',`{first}… Peu importe votre fortune, votre famille, vos secrets. Ce n'est pas ça que je vois quand je vous regarde.`,`{first}… Your fortune, your family, your secrets — none of it matters. That's not what I see when I look at you.`),
 N(`{a:Il|Elle} s'approche. Les lumières de la place dansent dans {a:ses|ses} yeux. Le monde entier semble suspendu.`,`{a:He|She} steps closer. The lights of the square dance in {a:his|her} eyes. The whole world seems to hold still.`),
 C('m8',1,[
  {t:[`L'embrasser.`,`Kiss {a:him|her}.`],set:'kissLi1',fx:{li1:3},r:[
   N(`Tu franchis le dernier pas. Le baiser est doux, hésitant d'abord, puis plus sûr. Quelque part derrière vous, l'orchestre attaque le grand final.`,`You close the last step. The kiss is soft, hesitant at first, then surer. Somewhere behind you, the orchestra strikes up the grand finale.`),
   D('li1','h',`Je crois que je vais me souvenir de « Figaro » toute ma vie.`,`I think I'll remember "Figaro" for the rest of my life.`),
   D('mc','h',`Vous n'avez pas vu une seule minute du dernier acte.`,`You haven't seen a single minute of the last act.`),
   D('li1','h',`Précisément.`,`Precisely.`)]},
  {t:[`Te retenir. Pas encore.`,`Hold back. Not yet.`],set:'waitLi1',fx:{li1:1},r:[
   D('mc','s',`{li1}… Pas ce soir. Il se passe trop de choses. Je ne veux pas que notre premier… que ce moment soit gâché par tout ça.`,`{li1}… Not tonight. Too much is happening. I don't want our first… I don't want this moment spoiled by all of it.`),
   D('li1','h',`Alors j'attendrai. Je vous l'ai dit : je suis {a:patient|patiente}.`,`Then I'll wait. I told you: I'm patient.`),
   N(`{a:Il|Elle} porte ta main gantée à ses lèvres. C'est presque plus troublant qu'un baiser.`,`{a:He|She} raises your gloved hand to {a:his|her} lips. It's almost more unsettling than a kiss.`)]}
 ])
],[
 N(`Tu ne retournes pas dans la loge. Tu descends un escalier dérobé, puis un autre, jusqu'aux coulisses où s'entassent décors, perruques et costumes.`,`You don't go back to the box. You take a hidden staircase, then another, down to the wings where sets, wigs and costumes are piled high.`),
 {st:['li2','mc']},
 D('li2','o',`{first} ? Qu'est-ce que vous faites ici ? Le public n'a pas le droit de…`,`{first}? What are you doing here? The audience isn't allowed to…`),
 D('li2','s',`J'ai entendu, pour le foyer. Toute la troupe en parle.`,`I heard about the foyer. The whole company is talking about it.`),
 ...IF('truth',[D('li2','h',`« Je ne suis pas à vendre. » Je crois que je vais le broder sur un mouchoir.`,`"I am not for sale." I think I'll embroider it on a handkerchief.`)],
  [D('li2','n',`Vous avez menti devant tout Londres sans trembler. Je ne sais pas si je dois être {a:impressionné|impressionnée} ou inquiet{a:|e}.`,`You lied in front of all of London without flinching. I don't know whether to be impressed or worried.`)]),
 D('mc','s',`La Duchesse connaissait Isadora. Elle reçoit les mêmes lettres que ma mère. Et elle dit que « I. » est dangereux.`,`The Duchess knew Isadora. She gets the same letters as my mother. And she says "I." is dangerous.`),
 D('li2','a',`Alors vous n'irez nulle part {g:seul|seule|seul·e}. Plus jamais. Pas tant que je suis là.`,`Then you won't go anywhere alone. Ever again. Not while I'm here.`),
 N(`Entre deux portants de costumes, la lumière de la scène filtre à travers le rideau. Vous êtes si proches que tu sens son souffle.`,`Between two costume racks, stage light filters through the curtain. You're so close you can feel {a:his|her} breath.`),
 C('m8b',1,[
  {t:[`L'embrasser.`,`Kiss {a:him|her}.`],set:'kissLi2',fx:{li2:3},r:[
   N(`C'est toi qui franchis le pas. Un baiser volé, dans la poussière des coulisses, pendant que la soprano chante l'amour à quelques mètres de vous.`,`You're the one who closes the gap. A stolen kiss, in the dust of the wings, while the soprano sings of love a few yards away.`),
   D('li2','o',`Vous… vous savez que si quelqu'un nous voit, vous êtes {g:perdu|perdue|perdu·e} ?`,`You… you know if anyone sees us, you're ruined?`),
   D('mc','h',`Je suis déjà ruiné{e}. Tout Londres le sait.`,`I'm already ruined. All of London knows it.`),
   N(`{a:Mateo|Nell} éclate de rire, et t'embrasse à son tour.`,`{a:Mateo|Nell} bursts out laughing, and kisses you back.`)]},
  {t:[`Te retenir. Pas encore.`,`Hold back. Not yet.`],set:'waitLi2',fx:{li2:1},r:[
   D('mc','s',`Pas ici. Pas comme ça. Si on nous surprend, c'est vous qui finirez à Newgate, pas moi.`,`Not here. Not like this. If we're caught, you're the one who ends up in Newgate, not me.`),
   D('li2','h',`Vous pensez à moi avant de penser à vous. Personne n'a jamais fait ça.`,`You think of me before yourself. No one's ever done that.`),
   N(`{a:Il|Elle} remet doucement une mèche de cheveux derrière ton oreille, puis recule d'un pas.`,`{a:He|She} gently tucks a strand of hair behind your ear, then steps back.`)]}
 ])
]),

{bg:'salon',mus:'mystery',card:['Grosvenor Street','Grosvenor Street'],sub:['Après minuit','After midnight'],where:['Grosvenor Street','Grosvenor Street']},
{st:['father','mother']},
N(`Le retour en voiture se fait dans un silence de mort. À peine la porte refermée, ton père s'effondre dans un fauteuil.`,`The carriage ride home passes in deathly silence. The moment the door closes, your father collapses into an armchair.`),
D('father','s',`Tout Londres sait. Demain, les créanciers anglais frapperont à la porte. Ils ne nous feront plus crédit.`,`All of London knows. Tomorrow the English creditors will be at the door. They'll give us no more credit.`),
...IF('truth',[D('mother','a',`Et c'est toi qui l'as confirmé, devant la Reine ! As-tu la moindre idée de ce que tu as fait ?`,`And you're the one who confirmed it, in front of the Queen! Do you have any idea what you've done?`),...IF('queenRespect',[D('mc','a',`La Reine a applaudi, Mère. Elle a applaudi.`,`The Queen applauded, Mother. She applauded.`),D('father','o',`…C'est vrai. Elle a applaudi. Ce n'est peut-être pas tout à fait perdu.`,`…That's true. She applauded. Perhaps all is not quite lost.`)])],
 [D('mother','n',`Tu as menti avec panache. Je n'aurais pas fait mieux. Mais un mensonge ne tient qu'un temps à Londres.`,`You lied with flair. I couldn't have done better. But a lie only lasts so long in London.`)]),
{st:['mother','mc']},
D('mc','a',`Assez de secrets. La Duchesse m'a parlé d'Isadora de Valcourt. Qui était-elle pour vous ?`,`Enough secrets. The Duchess told me about Isadora de Valcourt. Who was she to you?`),
N(`Ta mère pâlit. Ton père se lève d'un bond. Pendant un long moment, personne ne parle.`,`Your mother goes pale. Your father leaps to his feet. For a long moment, no one speaks.`),
D('mother','s',`{first}… Il y a quelque chose que tu dois savoir. Quelque chose que nous aurions dû te dire il y a très longtemps…`,`{first}… There's something you need to know. Something we should have told you a very long time ago…`),
{st:['bess','mc']},
N(`On frappe à la porte. Trois coups secs. À une heure du matin.`,`A knock at the door. Three sharp raps. At one in the morning.`),
D('bess','o',`Un petit garçon a déposé ça pour vous, {title}. Il s'est enfui en courant.`,`A little boy left this for you, {title}. He ran off.`),
N(`Une enveloppe cachetée de cire noire. Ton nom, écrit à l'encre violette.`,`An envelope sealed with black wax. Your name, written in violet ink.`),
C('c4c',0,[
 {t:[`L'ouvrir immédiatement, devant tes parents.`,`Open it at once, in front of your parents.`],r:[N(`Ta mère tend la main pour t'en empêcher. Trop tard.`,`Your mother reaches out to stop you. Too late.`)]},
 {t:[`Monter l'ouvrir dans ta chambre, {g:seul|seule|seul·e}.`,`Go and open it alone in your room.`],r:[N(`Tu montes l'escalier sans un mot. Derrière toi, ta mère appelle ton nom, encore et encore.`,`You climb the stairs without a word. Behind you, your mother calls your name, again and again.`)]}
]),
{st:['mc']},
N(`« Ce qu'ils ont pris à Isadora n'était pas de l'or. Tu mérites de connaître la vérité. Viens seul{e} à la cathédrale Saint-Paul, demain à midi. — I. »`,`"What they took from Isadora was not gold. You deserve to know the truth. Come alone to St Paul's Cathedral, tomorrow at noon. — I."`),
D('mc','o',`(Pas de l'or… Alors quoi ?)`,`(Not gold… Then what?)`),
...IF('p1',[D('mc','s',`({li1} m'a dit de faire attention. La Duchesse m'a dit de ne jamais y aller {g:seul|seule|seul·e}…)`,`({li1} told me to be careful. The Duchess told me never to go alone…)`)],
 [D('mc','s',`({a:Mateo|Nell} m'a fait promettre de ne plus jamais y aller {g:seul|seule|seul·e}…)`,`({a:Mateo|Nell} made me promise never to go alone again…)`)]),
N(`En bas, tu entends ta mère pleurer. Pour la première fois de ta vie.`,`Downstairs, you hear your mother crying. For the first time in your life.`),
{end:4}
);
