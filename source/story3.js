/* ===== CHAPITRE 3 — Rendez-vous secrets ===== */
STORY.push(
{bg:'park',mus:'tender',chap:3,card:['Chapitre 3','Chapter 3'],sub:['Rendez-vous secrets','Secret Meetings'],where:['Londres','London']},
{st:[]},
...IF('p1',[
 {bg:'park',where:['Hyde Park, à l\'aube','Hyde Park, at dawn']},
 N(`L'aube se lève à peine sur Hyde Park. La brume s'accroche à la Serpentine et les cygnes dorment encore. Tu as filé par la porte de service, enveloppé{e} dans la cape de Bess.`,`Dawn is barely breaking over Hyde Park. Mist clings to the Serpentine and the swans are still asleep. You slipped out through the servants' door, wrapped in Bess's cloak.`),
 N(`Sous le kiosque à musique, une silhouette t'attend, les mains dans le dos.`,`Under the bandstand, a figure is waiting, hands clasped behind {a:his|her} back.`),
 {st:['li1','mc']},
 D('li1','h',`Vous êtes venu{e}. J'avais parié avec moi-même que vous ne viendriez pas… et je suis ravi{a:|e} d'avoir perdu.`,`You came. I'd bet myself you wouldn't… and I'm delighted to have lost.`),
 D('mc','n',`Votre billet disait que vous aviez quelque chose d'important à me révéler.`,`Your note said you had something important to tell me.`),
 D('li1','s',`Oui. Et je ne l'ai jamais dit à personne.`,`Yes. And I've never told anyone.`),
 D('li1','n',`Tout le monde croit que ma mère n'est qu'une amie de la Reine. C'est faux. Augusta Ashbury est ses yeux et ses oreilles. Elle surveille chaque famille étrangère qui arrive à Londres.`,`Everyone thinks my mother is just the Queen's friend. That's not true. Augusta Ashbury is her eyes and ears. She watches every foreign family that arrives in London.`),
 D('mc','o',`Une… espionne ?`,`A… spy?`),
 D('li1','n',`Elle préfère le mot « gardienne ». Depuis la guerre avec la France, la Couronne se méfie de tout ce qui vient de Paris.`,`She prefers the word "guardian". Since the war with France, the Crown distrusts everything that comes from Paris.`),
 D('li1','s',`Hier soir, j'ai vu le dossier qu'elle a ouvert sur votre famille. Elle a écrit à des gens, à Paris. Elle cherche quelque chose.`,`Last night I saw the file she's opened on your family. She's written to people in Paris. She's looking for something.`),
 D('li1','a',`Et ma mère trouve toujours ce qu'elle cherche.`,`And my mother always finds what she's looking for.`),
 D('mc','s',`(Si elle découvre les dettes… nous sommes finis.)`,`(If she finds out about the debts… we're finished.)`),
 D('mc','o',`Pourquoi me dire tout ça ? Vous trahissez votre propre mère.`,`Why tell me all this? You're betraying your own mother.`),
 D('li1','h',`Parce que je ne veux pas vous rencontrer à travers un dossier. Je veux vous connaître vraiment. Vos secrets, s'il y en a, je préfère les entendre de votre bouche.`,`Because I don't want to meet you through a file. I want to truly know you. Your secrets, if there are any, I'd rather hear them from you.`),
 C('m5',1,[
  {t:[`Lui avouer les dettes de ta famille.`,`Confess your family's debts.`],set:'confided',fx:{li1:2},r:[
   D('mc','s',`Ma famille est ruinée. Ou presque. Mes parents sont venus à Londres pour me marier à une fortune. Voilà notre grand secret.`,`My family is ruined. Or nearly. My parents came to London to marry me to a fortune. That's our great secret.`),
   N(`{li1} ne recule pas. {a:Il|Elle} prend doucement ta main gantée.`,`{li1} doesn't step back. {a:He|She} gently takes your gloved hand.`),
   D('li1','h',`Merci de me faire confiance. Je garderai ce secret. Et si ma mère le découvre, elle ne l'apprendra pas de moi.`,`Thank you for trusting me. I'll keep this secret. And if my mother finds out, it won't be from me.`),
   D('li1','n',`Pour être honnête… les Ashbury ne sont pas aussi riches qu'on le croit, eux non plus. Personne à Mayfair ne l'est.`,`To be honest… the Ashburys aren't as rich as people think either. No one in Mayfair is.`)]},
  {t:[`Garder le silence. Il est trop tôt pour lui faire confiance.`,`Stay silent. It's too soon to trust {a:him|her}.`],set:'silent',r:[
   D('mc','n',`Ma famille n'a rien à cacher. Votre mère perd son temps.`,`My family has nothing to hide. Your mother is wasting her time.`),
   D('li1','s',`Je l'espère. Sincèrement.`,`I hope so. Truly.`),
   D('li1','n',`Mais si un jour vous changez d'avis… vous savez où me trouver. Je serai là.`,`But if you ever change your mind… you know where to find me. I'll be there.`)]}
 ]),
 D('li1','n',`Il y a autre chose. Ma mère a prononcé un nom en lisant votre dossier. Elle l'a murmuré, comme une prière : « Isadora ».`,`There's something else. My mother said a name while reading your file. She whispered it, like a prayer: "Isadora".`),
 D('mc','o',`Isadora ?!`,`Isadora?!`),
 D('li1','o',`Vous connaissez ce nom ?`,`You know that name?`),
 D('mc','s',`Je… l'ai entendu. Une fois. Mes parents se sont tus dès que je suis entré{e}.`,`I… heard it. Once. My parents went silent the moment I walked in.`),
 D('li1','n',`Alors nous avons un mystère en commun. Je vais essayer d'en savoir plus. Prudemment.`,`Then we share a mystery. I'll try to find out more. Carefully.`),
 N(`Le soleil perce la brume. Au loin, les premiers cavaliers de Rotten Row approchent. Il est temps de rentrer avant que quelqu'un ne vous voie ensemble.`,`The sun breaks through the mist. In the distance, the first riders of Rotten Row are approaching. Time to go home before anyone sees you together.`)
],[
 {bg:'bridge',mus:'mystery',where:['Pont de Blackfriars','Blackfriars Bridge']},
 N(`Le soir suivant, tu te glisses hors de Grosvenor Street dans la vieille cape de Bess. Le fiacre te dépose près de la Tamise, dans un quartier où les dames de Mayfair ne mettent jamais les pieds.`,`The next evening, you slip out of Grosvenor Street in Bess's old cloak. The hackney drops you near the Thames, in a part of town where Mayfair ladies never set foot.`),
 N(`Sous la troisième lanterne du pont de Blackfriars, une silhouette t'attend, accoudée au parapet.`,`Under the third lantern of Blackfriars Bridge, a figure is waiting, leaning on the parapet.`),
 {set:'li2named'},
 {st:['li2','mc']},
 D('li2','h',`Vous êtes venu{e}. Toute {g:seul|seule|seul·e}, dans les docks, en pleine nuit. Vous êtes {g:fou|folle|fou·folle}… ou {g:très courageux|très courageuse|très courageux·se}.`,`You came. Alone, by the docks, in the middle of the night. You're either mad… or very brave.`),
 D('mc','n',`Votre billet disait que vous me diriez tout.`,`Your note said you'd tell me everything.`),
 D('li2','s',`Tout ce que je sais, en tout cas.`,`Everything I know, at least.`),
 D('li2','n',`J'ai été {a:élevé|élevée} par une Française, Marguerite. Elle était couturière à Paris, avant la Révolution. Elle est morte l'hiver dernier.`,`I was raised by a Frenchwoman, Marguerite. She was a seamstress in Paris before the Revolution. She died last winter.`),
 D('li2','s',`Avant de partir, elle m'a donné ce pendentif. Elle m'a dit qu'il avait appartenu à la dame qu'elle avait servie toute sa jeunesse. Une dame nommée Isadora.`,`Before she passed, she gave me this pendant. She told me it had belonged to the lady she served all her youth. A lady named Isadora.`),
 D('mc','o',`Isadora…`,`Isadora…`),
 D('li2','n',`Le lys, c'était son emblème. Marguerite m'a fait promettre une chose : « Si un jour tu croises ce lys, suis-le. »`,`The lily was her emblem. Marguerite made me promise one thing: "If you ever come across that lily, follow it."`),
 D('li2','a',`Et elle m'a dit aussi qu'une seule personne à Londres avait connu Isadora : la Duchesse d'Ashbury. C'est pour ça que je me suis {a:introduit|introduite} à son bal.`,`And she told me that only one person in London had known Isadora: the Duchess of Ashbury. That's why I sneaked into her ball.`),
 D('mc','s',`(Mes parents… le médaillon… la Duchesse… Tout ramène à cette femme.)`,`(My parents… the locket… the Duchess… Everything leads back to that woman.)`),
 D('li2','n',`À votre tour. D'où vient le lys que vous avez vu ? Et pourquoi avez-vous pâli quand j'ai dit son nom ?`,`Your turn. Where does the lily you saw come from? And why did you go pale when I said her name?`),
 C('m5b',1,[
  {t:[`Lui parler du médaillon et de la conversation de tes parents.`,`Tell {a:him|her} about the locket and your parents' conversation.`],set:'confided',fx:{li2:2},r:[
   D('mc','s',`J'ai trouvé un médaillon caché dans ma malle. Le portrait d'une femme, avec ce lys au dos, et l'initiale « I. ». Et hier soir, j'ai entendu mes parents parler d'une certaine Isadora… morte depuis longtemps.`,`I found a locket hidden in my trunk. A portrait of a woman, with that lily on the back and the initial "I.". And last night I heard my parents talking about a certain Isadora… long dead.`),
   D('li2','o',`Vos parents ? Le Comte et la Comtesse {last} connaissaient Isadora ?`,`Your parents? The Count and Countess {last} knew Isadora?`),
   D('li2','s',`Alors nos histoires sont liées. Je ne sais pas encore comment… mais je vous jure que je vais le découvrir. Avec vous, si vous le voulez bien.`,`Then our stories are tied together. I don't know how yet… but I swear I'll find out. With you, if you'll let me.`)]},
  {t:[`Rester prudent{e}. Tu ne {a:le|la} connais pas encore.`,`Stay careful. You barely know {a:him|her}.`],set:'silent',r:[
   D('mc','n',`J'ai vu un lys semblable sur un bijou de famille. C'est tout. Sans doute une coïncidence.`,`I saw a similar lily on a family jewel. That's all. Probably a coincidence.`),
   D('li2','s',`Vous ne me faites pas confiance. Je le comprends. Les gens comme vous ont appris à se méfier des gens comme moi.`,`You don't trust me. I understand. People like you are taught to distrust people like me.`),
   D('li2','h',`Mais je n'abandonne pas facilement, {first}.`,`But I don't give up easily, {first}.`)]}
 ]),
 D('li2','n',`Je travaille chez Madame Fleury, la modiste française de Bond Street. Si vous avez besoin de moi, c'est là que vous me trouverez.`,`I work at Madame Fleury's, the French dressmaker on Bond Street. If you need me, that's where you'll find me.`),
 N(`Une cloche sonne minuit à Saint-Paul. {a:Mateo|Nell} t'aide à monter dans un fiacre et reste sur le pont jusqu'à ce que la voiture disparaisse dans la nuit.`,`A bell at St Paul's strikes midnight. {a:Mateo|Nell} helps you into a hackney and stays on the bridge until the carriage disappears into the night.`)
]),

{bg:'bedroomday',mus:'calm',where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`Tu te glisses dans ta chambre juste à temps. Trente secondes plus tard, on frappe à la porte.`,`You slip into your room just in time. Thirty seconds later, there's a knock at the door.`),
D('bess','h',`C'est moi ! Votre mère a demandé de vos nouvelles. Je lui ai dit que vous dormiez comme un loir… et que vous ronfliez un peu.`,`It's me! Your mother asked after you. I told her you were sleeping like a log… and snoring a little.`),
C('c3a',0,[
 {t:[`« Bess, tu es un trésor. »`,`"Bess, you're a treasure."`],fx:{bess:1},r:[D('bess','h',`Je sais. Mais un trésor qui accepte les rubans en remerciement.`,`I know. But a treasure who accepts ribbons as thanks.`)]},
 {t:[`« Je ne ronfle pas ! »`,`"I do not snore!"`],r:[D('bess','h',`Toutes les dames disent ça, {title}.`,`All the ladies say that, {title}.`)]},
 {t:[`« Tu ne me demandes pas où j'étais ? »`,`"Aren't you going to ask where I was?"`],fx:{bess:1},r:[D('bess','n',`Moins j'en sais, moins je mentirai mal. Mais vous me raconterez tout quand ce sera fini.`,`The less I know, the less badly I'll lie. But you'll tell me everything when it's over.`)]}
]),
...IF('p2',[
 N(`Sur ta coiffeuse t'attend un énorme bouquet de roses blanches. Une carte y est glissée, aux armes des Ashbury.`,`On your dressing table waits an enormous bouquet of white roses. A card is tucked into it, bearing the Ashbury crest.`),
 N(`« Pour {first}, qui a quitté le thé trop vite. J'espère vous revoir très bientôt. — {li1} »`,`"For {first}, who left tea too soon. I hope to see you again very soon. — {li1}"`),
 D('bess','o',`Des roses blanches ! Chez nous, ça veut dire « mes intentions sont sérieuses ».`,`White roses! Where I'm from, that means "my intentions are serious".`),
 D('mc','s',`(Pourquoi est-ce que je ne ressens pas ce que je devrais ressentir ?)`,`(Why don't I feel what I'm supposed to feel?)`)
]),
{bg:'salon',where:['Le salon','The drawing room']},
{st:['mother','mc']},
D('mother','h',`Ah, te voilà. Grande nouvelle : la Duchesse nous invite dans sa loge à l'Opéra, demain soir. La Reine y sera.`,`Ah, there you are. Wonderful news: the Duchess has invited us to her box at the Opera tomorrow night. The Queen will be there.`),
D('mother','n',`Tu ne peux pas porter une robe que tout Londres a déjà vue. Nous allons chez Madame Fleury, la modiste de Bond Street. Elle est française : au moins quelqu'un comprendra le bon goût.`,`You can't wear a gown all of London has already seen. We're going to Madame Fleury, the dressmaker on Bond Street. She's French: at least someone will understand good taste.`),
...IF('p2',[D('mc','o',`(Madame Fleury… c'est là que travaille {a:Mateo|Nell} !)`,`(Madame Fleury… that's where {a:Mateo|Nell} works!)`)]),
C('c3b',0,[
 {t:[`« Avec quel argent, Mère ? »`,`"With what money, Mother?"`],r:[D('mother','a',`Avec le crédit que nous accorde encore notre nom. Ne pose plus jamais cette question à voix haute.`,`With the credit our name still affords us. Never ask that question out loud again.`)]},
 {t:[`« Quelle merveilleuse idée ! »`,`"What a marvellous idea!"`],fx:{rep:1},r:[D('mother','h',`Enfin, un peu d'enthousiasme.`,`Finally, a little enthusiasm.`)]},
 {t:[`« La Duchesse nous invite ? Après ce que je lui ai dit ? »`,`"The Duchess is inviting us? After what I said to her?"`],r:[D('mother','s',`Les invitations d'Augusta Ashbury ne sont jamais des cadeaux. Ce sont des examens.`,`Augusta Ashbury's invitations are never gifts. They're examinations.`)]}
]),

{bg:'shop',mus:'calm',card:['Bond Street','Bond Street'],sub:['Chez Madame Fleury','At Madame Fleury\'s'],where:['Chez Madame Fleury','At Madame Fleury\'s']},
{st:['fleury','mc']},
N(`La boutique de Madame Fleury est un écrin de soie : des rouleaux de tissu de toutes les couleurs, des plumes d'autruche, des rubans par centaines.`,`Madame Fleury's shop is a jewel box of silk: bolts of fabric in every colour, ostrich feathers, ribbons by the hundred.`),
D('fleury','h',`Ah ! Enfin quelqu'un de Paris ! Bienvenue, {g:mon cher|ma chère|mon ange}. Ici, on parle la langue de la beauté.`,`Ah! At last, someone from Paris! Welcome, my dear. Here, we speak the language of beauty.`),
C('c3c',0,[
 {t:[`Lui répondre avec chaleur, comme à une vieille amie.`,`Answer warmly, as if to an old friend.`],r:[D('fleury','h',`Ah, ça fait du bien d'entendre un vrai accent ! Les Anglaises me prennent pour une sorcière quand je parle trop vite.`,`Ah, it feels good to hear a real accent! The English ladies think I'm a witch when I talk too fast.`)]},
 {t:[`« Paris me manque terriblement. »`,`"I miss Paris terribly."`],r:[D('fleury','s',`À moi aussi, {g:mon cher|ma chère|mon ange}. Depuis vingt ans. On ne s'en remet jamais vraiment.`,`So do I, my dear. For twenty years. You never quite get over it.`)]}
]),
D('fleury','n',`Pour l'Opéra, il faut quelque chose d'inoubliable. {a:Mon apprenti|Mon apprentie} va vous apporter les plus belles soieries de la maison.`,`For the Opera, you need something unforgettable. My apprentice will bring you the finest silks in the house.`),
{st:['li2','mc']},
...IF('li2named',[
 ...IF('p2',[D('li2','h',`{title}. Quelle surprise de vous voir ici… en plein jour.`,`{title}. What a surprise to see you here… in broad daylight.`),D('mc','h',`Une surprise totale, vraiment.`,`A complete surprise, truly.`)],
  [D('li2','o',`Vous ! Je veux dire… {title}. Bienvenue chez Madame Fleury.`,`You! I mean… {title}. Welcome to Madame Fleury's.`),D('mc','o',`{a:Mateo|Nell} ? Vous travaillez ici ?`,`{a:Mateo|Nell}? You work here?`),D('li2','h',`Il faut bien que quelqu'un coupe les robes que je n'aurai jamais les moyens de porter.`,`Someone has to cut the gowns I'll never be able to afford.`)])
],[
 {set:'li2named'},
 N(`{a:Un jeune homme|Une jeune femme} aux bras chargés de soie apparaît. En te voyant, {a:il|elle} manque de tout laisser tomber.`,`A young {a:man|woman} with arms full of silk appears. Seeing you, {a:he|she} nearly drops everything.`),
 D('li2','o',`Oh. C'est vous.`,`Oh. It's you.`),
 D('mc','o',`On se connaît ?`,`Do we know each other?`),
 D('li2','h',`Pas vraiment. Disons que, la dernière fois, je vous ai {g:bousculé|bousculée|bousculé·e} sur une piste de danse… et que vous m'avez sauvé la vie.`,`Not really. Let's say that last time, I crashed into you on a dance floor… and you saved my life.`),
 ...IF('betrayed',[D('li2','a',`Enfin, non. Vous m'avez dénoncé{a:|e}. Je confonds toujours.`,`Well, no. You turned me in. I always get those mixed up.`)]),
 D('mc','o',`{a:L'inconnu|L'inconnue} du bal masqué !`,`The stranger from the masked ball!`),
 D('li2','h',`{a:Mateo|Nell}. {a:Apprenti|Apprentie} de Madame Fleury le jour. {a:Intrus|Intruse} dans les bals la nuit.`,`{a:Mateo|Nell}. Madame Fleury's apprentice by day. Ball-crasher by night.`)
]),
N(`Tandis que {a:Mateo|Nell} déroule une soie couleur de lune, la clochette de la porte tinte.`,`As {a:Mateo|Nell} unrolls a moon-coloured silk, the shop bell tinkles.`),
{st:['twinA','twinB']},
D('twinA','h',`Tiens, tiens. {g:Le petit Français|La petite Française|Le petit Français} fait ses emplettes. Avec quel argent, je me le demande ?`,`Well, well. The little French upstart is shopping. With what money, I wonder?`),
D('twinB','a',`Toi, là ! Oui, toi, {a:le commis|la commise}. Cette soie argentée, nous la prenons. Tout le rouleau.`,`You there! Yes, you, shop {a:boy|girl}. That silver silk, we'll take it. The whole bolt.`),
D('li2','n',`Pardon, mais {title} l'a choisie en premier.`,`Forgive me, but {title} chose it first.`),
D('twinA','a',`On ne t'a pas sonné{a:|e}. Les domestiques ne contredisent pas les Ashbury. Un mot à notre mère, et ta patronne ferme boutique.`,`Nobody asked you. Servants don't contradict the Ashburys. One word to our mother and your mistress closes shop.`),
C('c3d',0,[
 {t:[`Prendre la défense de {a:Mateo|Nell}.`,`Defend {a:Mateo|Nell}.`],set:'defendLi2',fx:{li2:2,rep:-1},r:[D('mc','a',`{a:Il|Elle} a raison, et vous le savez. Un peu de politesse ne ruinerait pas les Ashbury.`,`{a:He's|She's} right, and you know it. A little courtesy wouldn't ruin the Ashburys.`),{st:['twinA','mc']},D('twinA','o',`Tu prends le parti d'{a:un domestique|une domestique} ? Contre nous ?`,`You're siding with a servant? Against us?`),D('twinB','a',`Garde ta soie. Elle ira très bien avec ta réputation… usée jusqu'à la corde.`,`Keep your silk. It'll go nicely with your reputation… worn threadbare.`)]},
 {t:[`Leur laisser la soie, avec un sourire.`,`Let them have the silk, with a smile.`],fx:{rep:1},r:[D('mc','h',`Prenez-la. L'argent vous va si bien au teint… il fait ressortir l'éclat de votre caractère.`,`Take it. Silver suits your complexion so well… it brings out the sparkle in your personality.`),D('twinB','o',`…C'était un compliment ?`,`…Was that a compliment?`),D('twinA','a',`Non, idiot{t:|e}.`,`No, you fool.`)]},
 {t:[`Ne rien dire et laisser Madame Fleury gérer.`,`Say nothing and let Madame Fleury handle it.`],r:[{st:['fleury','twinA']},D('fleury','a',`Mesdemoiselles, messieurs, ma boutique, mes règles. La soie est réservée. Il me reste un très joli vert pomme pour vous.`,`Ladies, gentlemen, my shop, my rules. The silk is reserved. I have a lovely apple green left for you.`)]}
]),
{st:['li2','mc']},
N(`Les {t:jumeaux|jumelles} repartent en claquant la porte. {a:Mateo|Nell} s'approche pour prendre tes mesures… et en profite pour murmurer.`,`The twins leave, slamming the door. {a:Mateo|Nell} comes over to take your measurements… and seizes the chance to whisper.`),
D('li2','s',`Demain soir, à l'Opéra. Faites attention à vous. Ce n'est pas un hasard si la Duchesse vous invite dans sa loge.`,`Tomorrow night, at the Opera. Be careful. It's no accident the Duchess is inviting you to her box.`),
D('li2','n',`J'y serai aussi, d'une certaine façon. Madame Fleury fournit les costumes du théâtre. Si vous avez besoin de moi, cherchez du côté des coulisses.`,`I'll be there too, in a way. Madame Fleury supplies the theatre's costumes. If you need me, look backstage.`),

{bg:'salon',mus:'mystery',card:['La nuit tombe','Night falls'],sub:['',''],where:['Grosvenor Street','Grosvenor Street']},
{st:['mc']},
N(`Ce soir-là, la maison s'endort tôt. Tes parents sont sortis dîner chez un banquier. En passant devant le petit salon, tu remarques le secrétaire de ta mère, entrouvert.`,`That evening, the house goes to sleep early. Your parents have gone to dine with a banker. Passing the small drawing room, you notice your mother's writing desk, ajar.`),
N(`À l'intérieur, une liasse de lettres nouées d'un ruban noir. Toutes à l'encre violette. Toutes signées d'une seule initiale : « I. »`,`Inside, a bundle of letters tied with a black ribbon. All in violet ink. All signed with a single initial: "I."`),
D('mc','s',`(Je ne devrais pas… Mais ils me mentent depuis le début.)`,`(I shouldn't… But they've been lying to me from the start.)`),
C('m6',1,[
 {t:[`Lire les lettres.`,`Read the letters.`],set:'readLetters',r:[
  N(`Tes mains tremblent en dénouant le ruban. L'écriture est fine, élégante, presque cruelle.`,`Your hands shake as you untie the ribbon. The handwriting is fine, elegant, almost cruel.`),
  N(`« Je sais ce que vous avez pris à Isadora. Vous l'avez emporté loin de Paris, et vous croyez être à l'abri à Londres. Vous vous trompez. »`,`"I know what you took from Isadora. You carried it far from Paris and you believe you're safe in London. You are mistaken."`),
  N(`« Rendez ce qui ne vous appartient pas avant la fin de la Saison. Sinon, tout Londres saura. — I. »`,`"Return what does not belong to you before the Season ends. Otherwise, all of London will know. — I."`),
  D('mc','o',`(« Ce que vous avez pris à Isadora »… Notre fortune ? Mes parents auraient volé cette femme ?)`,`("What you took from Isadora"… Our fortune? Did my parents rob that woman?)`),
  D('mc','s',`(Est-ce que tout ce que nous possédons lui appartenait ?)`,`(Did everything we own once belong to her?)`),
  N(`En bas de la dernière lettre, un post-scriptum : « Nous nous verrons à Covent Garden. »`,`At the bottom of the last letter, a postscript: "We shall meet at Covent Garden."`)
 ]},
 {t:[`Refermer le secrétaire. Pas comme ça.`,`Close the desk. Not like this.`],set:'leftLetters',fx:{rep:1},r:[
  D('mc','n',`(Non. Je veux la vérité, mais pas en volant les secrets de ma propre mère.)`,`(No. I want the truth, but not by stealing my own mother's secrets.)`),
  {st:['bess','mc']},
  D('bess','s',`{title}… Je ne devrais pas vous le dire. Mais hier, votre mère a brûlé une de ces lettres. J'ai ramassé ce qui restait dans la cheminée.`,`{title}… I shouldn't tell you this. But yesterday your mother burned one of those letters. I picked up what was left in the fireplace.`),
  N(`Un fragment de papier noirci. On ne lit plus que quelques mots : « …Isadora… ce qui lui revient… Covent Garden… »`,`A blackened scrap of paper. Only a few words remain: "…Isadora… what is hers by right… Covent Garden…"`),
  D('mc','o',`(Covent Garden… L'Opéra. Demain soir.)`,`(Covent Garden… The Opera. Tomorrow night.)`)
 ]}
]),
{st:['mc']},
D('mc','s',`(Quelqu'un sera à l'Opéra demain. Quelqu'un qui connaît la vérité sur Isadora.)`,`(Someone will be at the Opera tomorrow. Someone who knows the truth about Isadora.)`),
N(`Cette nuit-là, tu ne dors presque pas. Dans le double fond de ta malle, le portrait du médaillon semble te regarder.`,`That night, you barely sleep. In the false bottom of your trunk, the portrait in the locket seems to be watching you.`),
{end:3}
);
