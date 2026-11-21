/* ===== CHAPITRE 12 — Rue de Varenne ===== */
STORY.push(
{bg:'street',mus:'mystery',chap:12,card:['Chapitre 12','Chapter 12'],sub:['Rue de Varenne','Rue de Varenne'],where:['Rue de Varenne','Rue de Varenne']},
...IF('bringCordelia',[{st:['cordelia','mc']}],[{st:['clem','mc']}]),
N(`L'hôtel des Valcourt est toujours là : une grande façade grise aux volets clos, un portail rouillé, un lys de pierre ébréché au-dessus de la porte. Ta maison natale.`,`The Valcourt house is still there: a tall grey façade with closed shutters, a rusted gate, a chipped stone lily above the door. The house where you were born.`),
N(`Tu poses la main sur la grille. Elle est glacée. Tu as l'impression étrange que quelqu'un, derrière les volets, t'attend depuis dix-huit ans.`,`You lay your hand on the gate. It's ice-cold. You have the strange feeling that someone behind those shutters has been waiting for you for eighteen years.`),
...IF('bringCordelia',[D('cordelia','s',`C'est sinistre. On devrait demander aux voisins, non ? Quelqu'un doit se souvenir.`,`It's grim. We should ask the neighbours, shouldn't we? Someone must remember.`)],[D('clem','s',`Ça va ? Tu trembles. … Je suis là. On fait ça ensemble.`,`Are you all right? You're shaking. … I'm here. We'll do this together.`)]),
N(`Une vieille femme sort de la maison d'en face, un panier au bras. Elle s'arrête net en te voyant. Le panier tombe. Des pommes roulent sur les pavés.`,`An old woman comes out of the house opposite, a basket on her arm. She stops dead at the sight of you. The basket falls. Apples roll across the cobbles.`),
D('roux','o',`Sainte Vierge… Isadora ?`,`Holy Virgin… Isadora?`),
D('mc','s',`Non, Madame. Je suis {g:son fils|sa fille|son enfant}.`,`No, Madame. I'm her child.`),
D('roux','s',`{g:Son fils|Sa fille|Son enfant}… Alors tu as vécu. Je savais que tu avais vécu. Je t'ai mis{g:|e|·e} au monde, mon petit. Entre. Entre vite.`,`Her child… So you lived. I knew you had lived. I brought you into the world, little one. Come in. Come in quickly.`),

{bg:'bedroomday',mus:'tender',where:['Chez Madame Roux','Madame Roux\'s home']},
{st:['roux','mc']},
N(`Madame Roux te fait asseoir près du feu. Elle te touche le visage, les mains, comme pour s'assurer que tu es réel{e}.`,`Madame Roux sits you down by the fire. She touches your face, your hands, as if to make sure you're real.`),
D('roux','s',`C'était une nuit de neige. Isadora a souffert longtemps, mais tu es né{g:|e|·e} en pleine santé, avec un cri à réveiller tout le faubourg. Ton père pleurait comme un enfant.`,`It was a snowy night. Isadora suffered a long time, but you were born perfectly healthy, with a cry fit to wake the whole neighbourhood. Your father wept like a child.`),
D('roux','a',`Isadora allait bien. Fatiguée, mais bien. Puis un valet a apporté un flacon. « Un remède fortifiant, de la part de votre sœur. » Une heure après l'avoir bu, elle était morte.`,`Isadora was fine. Tired, but fine. Then a footman brought a vial. "A fortifying remedy, from your sister." An hour after drinking it, she was dead.`),
C('c12a',0,[
 {t:[`« Pourquoi n'avez-vous rien dit à personne ? »`,`"Why didn't you tell anyone?"`],r:[D('roux','s',`J'ai essayé. Le commissaire était l'ami d'Iris. On m'a menacée de prison. J'avais quatre enfants.`,`I tried. The police commissioner was Iris's friend. I was threatened with prison. I had four children.`)]},
 {t:[`Prendre sa main ridée dans la tienne.`,`Take her wrinkled hand in yours.`],fx:{rep:1},r:[D('roux','h',`Tu as ses mains. Les mains d'une musicienne.`,`You have her hands. A musician's hands.`)]}
]),
D('roux','n',`Mais quelqu'un a été plus courageux que moi. Marguerite, la couturière d'Isadora, sa confidente. Elle a caché le flacon avant que le valet ne le reprenne.`,`But someone was braver than me. Marguerite, Isadora's seamstress, her confidante. She hid the vial before the footman could take it back.`),
D('roux','s',`Avant de fuir pour l'Angleterre, elle m'a laissé ceci. « Pour l'enfant, s'il revient un jour. » Elle emmenait avec elle un autre petit orphelin du quartier, je crois.`,`Before fleeing to England, she left me this. "For the child, if they ever come back." She was taking another little orphan from the neighbourhood with her, I believe.`),
N(`Elle sort d'un coffre un paquet ficelé, scellé d'un lys de cire. Dedans : un petit flacon de verre bleu, encore bouché. Une copie de ton acte de baptême, signée par le curé de Saint-Sulpice. Et une lettre de Marguerite, racontant toute la nuit.`,`She takes a string-tied parcel from a chest, sealed with a wax lily. Inside: a small blue glass vial, still stoppered. A copy of your baptism record, signed by the curate of Saint-Sulpice. And a letter from Marguerite, recounting the whole night.`),
...IF('danceLi1',[],[D('mc','o',`(Marguerite… La femme qui a élevé {li2} s'appelait Marguerite. Une couturière française. Ce ne peut pas être une coïncidence.)`,`(Marguerite… The woman who raised {li2} was called Marguerite. A French seamstress. That can't be a coincidence.)`)]),
...IF('bringCordelia',[
 {st:['cordelia','mc']},
 D('cordelia','o',`Mon Dieu… C'est la preuve de tout ! Il faut le mettre à l'abri. Je peux le coudre dans la doublure de ma cape, personne ne fouillera une jeune fille.`,`Good heavens… This proves everything! We have to keep it safe. I can sew it into the lining of my cloak; no one will search a young lady.`),
 C('m23',1,[
  {t:[`Garder le paquet sur toi, jour et nuit.`,`Keep the parcel on you, day and night.`],set:'keepProof',r:[D('mc','n',`Merci, Cordelia. Mais c'est à moi de le porter. C'est ma mère.`,`Thank you, Cordelia. But it's mine to carry. She was my mother.`),D('cordelia','s',`Bien sûr. Je comprends.`,`Of course. I understand.`)]},
  {t:[`Le confier à Cordelia, comme elle le propose.`,`Entrust it to Cordelia, as she suggests.`],set:'cordProof',r:[D('cordelia','h',`Tu as bien fait. Personne ne pensera à regarder dans ma cape.`,`You did the right thing. No one will think to look in my cloak.`),N(`Elle glisse le paquet sous sa cape avec des gestes très sûrs. Presque trop sûrs.`,`She slips the parcel under her cloak with very sure movements. Almost too sure.`)]},
  {t:[`Le confier à {lv}, dès ce soir.`,`Entrust it to {lv}, this very evening.`],set:'lvProof',fx:{lv:1},r:[D('mc','n',`Je le donnerai à {lv}. Personne ne sait qu'{a:il|elle} est à Paris.`,`I'll give it to {lv}. No one knows {a:he's|she's} in Paris.`),D('cordelia','s',`À {lv} ? Oui… Oui, bien sûr. Bonne idée.`,`To {lv}? Yes… Yes, of course. Good idea.`),N(`Pendant une fraction de seconde, quelque chose de dur passe dans ses yeux. Puis elle sourit.`,`For a fraction of a second, something hard flickers in her eyes. Then she smiles.`)]}
 ])
],[
 {st:['clem','mc']},
 D('clem','o',`C'est… c'est la preuve de tout. Iris est finie.`,`That's… that's proof of everything. Iris is finished.`),
 C('m23b',1,[
  {t:[`Garder le paquet sur toi, jour et nuit.`,`Keep the parcel on you, day and night.`],set:'keepProof',r:[D('clem','h',`Et moi, je dors devant ta porte avec un tisonnier. Personne n'y touchera.`,`And I'll sleep outside your door with a poker. No one will touch it.`)]},
  {t:[`Le confier à {lv}, dès ce soir.`,`Entrust it to {lv}, this very evening.`],set:'lvProof',fx:{lv:1},r:[D('clem','h',`Bonne idée. Personne ne sait qu'{a:il|elle} est là. Et {a:il|elle} se ferait tuer pour toi, ça se voit à trois lieues.`,`Good idea. No one knows {a:he's|she's} here. And {a:he'd|she'd} die for you, anyone can see that from three miles off.`)]}
 ])
]),

{bg:'paris',mus:'mystery',where:['Saint-Sulpice','Saint-Sulpice']},
{st:['theo','lv']},
N(`Le soir, Théo et {lv} reviennent de Saint-Sulpice, la mine sombre.`,`In the evening, Theo and {lv} come back from Saint-Sulpice looking grim.`),
D('theo','a',`La page du registre a été arrachée. Proprement, au rasoir. Le bedeau dit qu'une dame anglaise est venue consulter les archives… il y a deux semaines.`,`The page in the register has been torn out. Cleanly, with a razor. The beadle says an English lady came to consult the archives… two weeks ago.`),
D('mc','n',`Deux semaines ? Iris savait que nous viendrions avant même que nous le sachions nous-mêmes.`,`Two weeks? Iris knew we'd come before we even knew it ourselves.`),
D('theo','s',`Quelqu'un la renseigne. Quelqu'un de très proche.`,`Someone is feeding her information. Someone very close.`),
N(`Tu montres le paquet de Madame Roux. Théo siffle entre ses dents. {lv}, {a:lui|elle}, fixe le lys de cire sans pouvoir parler.`,`You show them Madame Roux's parcel. Theo whistles through his teeth. {lv}, for {a:his|her} part, stares at the wax lily, unable to speak.`),
...IF('danceLi1',[],[D('lv','s',`C'est son sceau. Le sceau de Marguerite. Elle cachetait toutes ses lettres comme ça… Alors c'est vrai. Elle a connu votre mère. Elle m'a élevé{a:|e} dans l'ombre d'Isadora sans jamais me le dire.`,`That's her seal. Marguerite's seal. She sealed all her letters that way… So it's true. She knew your mother. She raised me in Isadora's shadow without ever telling me.`),D('lv','h',`« Suis le lys. » Elle savait. Elle savait que je vous trouverais.`,`"Follow the lily." She knew. She knew I'd find you.`)]),

{bg:'bridge',mus:'tender',card:['Minuit','Midnight'],sub:['',''],where:['Le pont des Arts','The Pont des Arts']},
{st:['lv','mc']},
N(`Plus tard, {lv} t'emmène sur le pont des Arts. Paris dort. La Seine est noire et argentée, et les lanternes se reflètent dans l'eau comme des étoiles tombées.`,`Later, {lv} takes you onto the Pont des Arts. Paris is asleep. The Seine is black and silver, and the lanterns are reflected in the water like fallen stars.`),
N(`Une marchande de fleurs attardée vous tend son dernier bouquet. Un lys blanc. {lv} le paie sans discuter et le glisse dans tes cheveux.`,`A late flower-seller holds out her last bouquet. A white lily. {lv} pays without haggling and tucks it into your hair.`),
D('lv','h',`Voilà. Maintenant, vous êtes officiellement la plus belle chose de Paris. Notre-Dame peut aller se rhabiller.`,`There. Now you're officially the most beautiful thing in Paris. Notre-Dame can go home.`),
D('lv','s',`Demain est notre dernier jour ici. Qu'est-ce que vous voulez en faire ?`,`Tomorrow is our last day here. What do you want to do with it?`),
C('m24',1,[
 {t:[`Aller sur la tombe d'Isadora, avec {lv}.`,`Visit Isadora's grave, with {lv}.`],set:'graveVisit',fx:{lv:2},r:[
  {bg:'park',mus:'tender',where:['Le cimetière du Père-Lachaise','Père-Lachaise cemetery']},
  N(`À l'aube, vous trouvez la tombe sous un tilleul. Une simple pierre : « Isadora de Valcourt. Elle chantait. » Quelqu'un y a déposé des fleurs fraîches. Récemment.`,`At dawn, you find the grave under a linden tree. A simple stone: "Isadora de Valcourt. She sang." Someone has left fresh flowers. Recently.`),
  D('mc','s',`Bonjour, Maman. Je suis {g:venu|venue|venu·e}. Je vais finir ce que tu n'as pas pu finir.`,`Hello, Mother. I came. I'm going to finish what you couldn't.`),
  N(`{lv} ne dit rien. {a:Il|Elle} reste derrière toi, une main posée sur ton épaule, tout le temps qu'il faut.`,`{lv} says nothing. {a:He|She} stays behind you, one hand on your shoulder, for as long as it takes.`)
 ]},
 {t:[`Danser toute la nuit dans une guinguette au bord de l'eau.`,`Dance all night in a riverside guinguette.`],set:'guinguette',fx:{lv:2},r:[
  {bg:'terrace',mus:'ball',where:['Une guinguette sur la Seine','A guinguette on the Seine']},
  N(`Sous les lampions, des ouvriers, des grisettes et des étudiants dansent sur un violon désaccordé. Personne ne vous connaît. Personne ne vous juge.`,`Under the paper lanterns, workers, shopgirls and students dance to an out-of-tune fiddle. No one knows you. No one judges you.`),
  D('lv','h',`Ici, vous n'êtes ni héritier{g:|e|·e} ni scandale. Juste quelqu'un qui me marche sur les pieds.`,`Here, you're neither heir nor scandal. Just someone treading on my feet.`),
  N(`Vous dansez jusqu'à ce que le violoniste s'endorme sur sa chaise. Sur le chemin du retour, {lv} chante faux, et tu ris comme tu n'avais plus ri depuis Londres.`,`You dance until the fiddler falls asleep in his chair. On the way back, {lv} sings off-key, and you laugh as you haven't laughed since London.`)
 ]}
]),
{end:12}
);
