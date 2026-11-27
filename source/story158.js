/* ===== LA FIANCÉE DU CORSAIRE — SAISON 3 — CHAPITRE 14 — Le oui ===== */
(function(){
const SAVE=()=>[
 {set:'pTiagoSaved'},
 N(`Tiago s'écrase sur le pont, à quatre pattes, haletant, trempé jusqu'aux os. Son ombre, à ses pieds, tremble encore, mais elle est là. Entière. Céleste se jette sur lui et le serre si fort qu'il gémit.`,`Tiago crashes onto the deck on all fours, gasping, soaked to the bone. His shadow, at his feet, is still trembling, but it's there. Whole. Céleste throws herself on him and hugs him so hard he groans.`),
 D('tiago','h',`Si c'est ça, se marier, capitaine… je crois que je vais attendre un peu, moi.`,`If this is what getting married's like, captain… I think I'll wait a while.`),
];
STORY.push(
{bg:'ship',mus:'mystery',chap:158,card:['Saison 3 · Chapitre 14','Season 3 · Chapter 14'],sub:['Le oui','Yes'],where:['Le pont du navire fantôme','The ghost ship\'s deck']},
{st:['lv','mc']},
N(`Les ombres déferlent sur le pont comme une vague noire. Tu tires ton sabre. Il passe à travers la première ombre sans la toucher, comme à travers de la fumée. Mais quand l'ombre te frôle le bras, un froid terrible te mord jusqu'à l'os, et tu sens ta propre ombre qui frémit, qui tire.`,`The shadows break over the deck like a black wave. You draw your cutlass. It passes through the first shadow without touching it, like smoke. But when the shadow brushes your arm, a terrible cold bites to the bone, and you feel your own shadow shiver, pull.`),
D('lv','a',`{first} !`,`{first}!`),
N(`{lv} crie ton nom, et ton ombre se calme. Le froid recule. Tu comprends : les armes ne servent à rien. Seuls les noms comptent.`,`{lv} shouts your name, and your shadow settles. The cold recedes. You understand: weapons are useless. Only names matter.`),
D('mc','a',`Les noms ! Appelez-vous par vos noms ! Tous ! Sans arrêt !`,`Names! Call each other by name! All of you! Don't stop!`),
N(`Et sur le pont du navire fantôme, au milieu des ombres, une étrange bataille commence. Des pirates qui ne frappent personne, et qui hurlent des prénoms. « Kit ! » « Matthias ! » « Céleste ! » « {ot} ! » Et à chaque nom, une ombre recule.`,`And on the ghost ship's deck, among the shadows, a strange battle begins. Pirates who strike no one and scream first names. "Kit!" "Matthias!" "Céleste!" "{ot}!" And at every name, a shadow recoils.`),
{st:['matthias','lv']},
N(`Au milieu du chaos, Matthias s'est planté au pied du grand mât, son livre de prières ouvert dans une main, un sabre dans l'autre, et il lit d'une voix de tonnerre.`,`In the middle of the chaos, Matthias has planted himself at the foot of the mainmast, prayer book open in one hand, cutlass in the other, reading in a voice like thunder.`),
D('matthias','a',`Nous sommes réunis ici, devant Dieu, devant la mer et devant ces… ces choses, pour unir {lv} et {first} {last} ! Kit, attention, derrière toi ! Si quelqu'un connaît une raison pour laquelle ces deux-là ne devraient pas être unis…`,`We are gathered here, before God, before the sea and before these… these things, to join {lv} and {first} {last}! Kit, look out, behind you! If anyone knows a reason why these two should not be joined…`),
D('anne','a',`Personne ! Dépêche-toi, le gros !`,`No one! Hurry up, big man!`),
N(`Anne Bonny, qui avait juré de rester sur son navire, est montée à bord avec dix de ses pirates. Elle hurle les noms de ses hommes à pleins poumons, en tirant en l'air avec ses deux pistolets, ce qui ne sert à rien mais lui fait visiblement du bien.`,`Anne Bonny, who swore she'd stay on her ship, has come aboard with ten of her pirates. She's bellowing her men's names at the top of her lungs and firing both pistols into the air, which achieves nothing but clearly does her good.`),
{st:['lv','mc']},
N(`{lv} et toi vous retrouvez dos à dos, au milieu du pont, encerclés par les ombres. Tu sens son dos contre le tien. Il est chaud. Il est vivant.`,`You and {lv} end up back to back in the middle of the deck, surrounded by shadows. You feel {a:his|her} back against yours. It's warm. It's alive.`),
D('matthias','a',`{lv} ! Veux-tu prendre {first} pour épouse ? Pour le meilleur et pour le pire, dans la tempête et dans le calme, dans la richesse et dans la piraterie…`,`{lv}! Do you take {first} to be your wife? For better and for worse, in storm and in calm, in riches and in piracy…`),
...IF('pEndRook',[
 D('lv','a',`Oui ! Je la veux ! Je la veux depuis la première nuit, quand elle m'a regardé{a:|e} dans les yeux sur mon propre pont sans baisser les siens ! Je la veux dans toutes les tempêtes, sur toutes les mers, jusqu'au bout du monde et au-delà ! Est-ce que c'est assez clair, ou il faut que je le crie plus fort ?`,`Yes! I want her! I've wanted her since the first night, when she looked me in the eye on my own deck without looking away! I want her in every storm, on every sea, to the end of the world and beyond! Is that clear enough, or do I have to shout it louder?`),
],[
 D('lv','a',`Oui ! Je la veux ! Elle m'a appris à respirer, à nager, à me battre, à tenir une barre dans la tempête ! Elle m'a appris à être libre ! Et je veux passer chaque jour de ma vie libre à côté d'elle ! Je le veux, Matthias ! Mille fois oui !`,`Yes! I want her! She taught me to breathe, to swim, to fight, to hold a helm in a storm! She taught me to be free! And I want to spend every free day of my life beside her! I do, Matthias! A thousand times yes!`),
]),
N(`Autour de vous, les ombres hésitent. Elles reculent d'un pas. Puis d'un autre. Comme si les mots de {lv} les brûlaient. Et à la poupe, Lazare Morne a pâli. Il s'agrippe à la rambarde.`,`Around you the shadows hesitate. They step back. Then again. As if {lv}'s words burned them. And at the stern, Lazare Morne has gone pale. He's gripping the rail.`),
{st:['tiago','celeste']},
N(`Mais à ce moment-là, un cri. Tiago. Une ombre énorme, celle d'un ancien marin de Morne, l'a saisi par la cheville et le traîne vers le bastingage. Son ombre à lui s'arrache déjà de ses pieds. Tiago bascule par-dessus bord, vers l'eau noire où brillent les lueurs vertes.`,`But at that moment, a scream. Tiago. An enormous shadow, one of Morne's old sailors, has grabbed his ankle and is dragging him to the rail. His own shadow is already tearing loose from his feet. Tiago tips over the side towards the black water where the green lights glow.`),
...IF('pTiagoCeleste',[
 N(`Céleste se jette sur le bastingage. Elle attrape la main de Tiago au dernier moment, et elle crie, de toute sa voix, par-dessus le vacarme.`,`Céleste throws herself at the rail. She catches Tiago's hand at the last moment and screams with all her voice over the din.`),
 D('celeste','a',`Tiago ! Tiago, je t'aime ! Tu m'entends ? Je t'aime, espèce d'idiot, tu n'as pas le droit de partir maintenant !`,`Tiago! Tiago, I love you! Do you hear me? I love you, you idiot, you're not allowed to leave now!`),
 N(`L'ombre géante lâche prise d'un coup, comme brûlée. L'ombre de Tiago revient se coller à ses pieds. Et Céleste, avec une force que personne ne lui soupçonnait, le hisse par-dessus le bastingage.`,`The giant shadow lets go at once, as if burned. Tiago's shadow settles back at his feet. And Céleste, with a strength no one suspected, hauls him back over the rail.`),
 ...SAVE(),
],[
 C('p58a',1,[
  {t:[`Sonner la vieille cloche de bronze au pied du mât.`,`Ring the old bronze bell at the foot of the mast.`],gem:20,fx:{rep:3},r:[N(`Tu te jettes sur la cloche verte, au pied du grand mât, et tu tires sur la corde de toutes tes forces. Pour la première fois depuis cent ans, elle sonne. Un son clair, pur, qui déchire la nuit. La cloche de la chapelle de l'îlet, volée par Morne le soir de sa fuite. Toutes les ombres se figent en même temps. L'ombre géante lâche Tiago. Céleste et Kit le rattrapent par les bras et le hissent sur le pont.`,`You hurl yourself at the green bell at the foot of the mainmast and haul on the rope with all your strength. For the first time in a hundred years, it rings. A clear, pure note that tears the night apart. The islet chapel's bell, stolen by Morne the night he fled. Every shadow freezes at once. The giant shadow lets go of Tiago. Céleste and Kit catch him by the arms and haul him onto the deck.`),...SAVE()]},
  {t:[`Courir vers lui en criant son nom.`,`Run to him shouting his name.`],fx:{},r:[
   {set:'pTiagoLost'},
   N(`Tu cours. Tu cries son nom. Céleste aussi. Mais vous ne le connaissez pas encore assez. Vos voix ne pèsent pas assez lourd. La main de Tiago glisse entre les doigts de Céleste. Il tombe dans l'eau noire, et les lueurs vertes se referment sur lui.`,`You run. You shout his name. So does Céleste. But you don't know him well enough yet. Your voices don't weigh enough. Tiago's hand slips through Céleste's fingers. He falls into the black water, and the green lights close over him.`),
   N(`Céleste hurle. Kit la retient de toutes ses forces pour qu'elle ne saute pas derrière lui. Et la bataille continue, autour d'elle, comme si rien ne s'était passé.`,`Céleste screams. Kit holds her back with all his strength so she won't jump in after him. And the battle goes on around her as if nothing had happened.`),
  ]}
 ]),
]),
{st:['matthias','mc']},
D('matthias','a',`{first} {last} ! Veux-tu prendre {lv} pour {a:époux|épouse} ?`,`{first} {last}! Do you take {lv} to be your {a:husband|wife}?`),
N(`Tu regardes {lv}. {a:Il|Elle} s'est retourné{a:|e}. {a:Il|Elle} te regarde, au milieu des ombres, le visage éclairé par la lune et les lueurs vertes. Sa demi-ombre tremble à ses pieds. Il vous reste peu de temps.`,`You look at {lv}. {a:He|She} has turned round. {a:He|She}'s looking at you, among the shadows, face lit by the moon and the green glow. {a:His|Her} half-shadow trembles at {a:his|her} feet. You have little time left.`),
C('p58b',1,[
 {t:[`« Oui. Dans toutes les tempêtes. Sur toutes les mers. Pour toujours. »`,`"Yes. In every storm. On every sea. Forever."`],set:'pVowSea',fx:{lv:5},r:[D('mc','a',`Oui ! Dans toutes les tempêtes. Sur toutes les mers. Et quand on sera vieux et qu'on se disputera pour savoir qui tient la barre. Pour toujours !`,`Yes! In every storm. On every sea. And when we're old and arguing over who holds the helm. Forever!`)]},
 {t:[`« Oui. Parce que c'est toi. Ça a toujours été toi. »`,`"Yes. Because it's you. It's always been you."`],set:'pVowYou',fx:{lv:5},r:[D('mc','a',`Oui ! Parce que c'est toi. Parce que ça a toujours été toi. Même quand j'avais peur de le dire. Surtout quand j'avais peur de le dire. Oui !`,`Yes! Because it's you. Because it's always been you. Even when I was afraid to say it. Especially when I was afraid to say it. Yes!`)]},
 {t:[`« Oui. Et je tiendrai ma promesse. Pas comme lui. »`,`"Yes. And I'll keep my promise. Not like him."`],set:'pVowPromise',fx:{lv:5,rep:2},r:[D('mc','a',`Oui ! Et je te promets, devant la mer, devant ce navire et devant celui qui l'a abandonnée, que moi, je ne partirai jamais. Je tiendrai ma promesse. Toute ma vie. Oui !`,`Yes! And I promise you, before the sea, before this ship and before the man who abandoned her, that I will never leave. I'll keep my promise. All my life. Yes!`)]}
]),
N(`Un silence tombe sur le navire. Les ombres se sont arrêtées. Toutes. Elles ne bougent plus. Elles écoutent. Même le vent s'est tu.`,`A silence falls over the ship. The shadows have stopped. All of them. They no longer move. They're listening. Even the wind has fallen silent.`),
D('matthias','s',`Alors… par les pouvoirs qui me sont conférés par… euh… par rien du tout, en fait, mais personne n'est là pour se plaindre… je vous déclare unis.`,`Then… by the powers vested in me by… er… by nothing at all, actually, but no one's here to complain… I pronounce you joined.`),
N(`Il ferme son livre. Ses yeux brillent. Il prend une grande inspiration, comme un homme qui attend ce moment depuis toute sa vie.`,`He closes his book. His eyes are shining. He takes a deep breath, like a man who's been waiting for this moment all his life.`),
D('matthias','h',`Vous pouvez vous embrasser.`,`You may kiss.`),
{end:158}
);
})();
