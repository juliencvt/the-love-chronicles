/* ===== SAISON 2 — CHAPITRE 19 — Le dernier piège ===== */
STORY.push(
{bg:'salon',mus:'mystery',chap:41,card:['Saison 2 · Chapitre 19','Season 2 · Chapter 19'],sub:['Le dernier piège','The Last Trap'],where:['Le bureau de ton père','Your father\'s study']},
{st:['father','lordp']},
N(`Quatre jours avant le mariage. Le bureau de ton père est devenu un quartier général : un constable de Bow Street, Lord Pembroke, Théo, Lord Grey, et un plan de l'église Saint-George étalé sur le bureau.`,`Four days before the wedding. Your father's study has become a headquarters: a Bow Street constable, Lord Pembroke, Theo, Lord Grey, and a plan of St George's church spread across the desk.`),
...IF('knowPlot',[
 D('theo','n',`Nous savons ce qu'elle prépare : une poudre dans la coupe des mariés, versée par le bedeau. Il a accepté de travailler pour nous, en échange de sa liberté.`,`We know what she's planning: a powder in the couple's cup, poured by the verger. He's agreed to work for us, in exchange for his freedom.`),
 D('alistair','n',`Le matin du mariage, Iris lui remettra la poudre en personne. Si Bow Street est là, on l'arrête à ce moment-là. Avant même la cérémonie.`,`On the wedding morning, Iris will hand him the powder in person. If Bow Street is there, we arrest her at that moment. Before the ceremony even begins.`)
],[
 D('theo','s',`Nous ne savons pas ce qu'elle prépare. Le bedeau a disparu. Ça peut être n'importe quoi : un poison, une arme, un incendie…`,`We don't know what she's planning. The verger has vanished. It could be anything: poison, a weapon, a fire…`),
 D('lordp','a',`Alors on se prépare à tout. Des gardes partout. Et on surveille chaque personne qui approche des mariés.`,`Then we prepare for everything. Guards everywhere. And we watch every person who comes near the couple.`)
]),
...IF('irisHasPearls',[D('lordp','s',`Et n'oublions pas qu'elle a les Larmes de Valcourt. Quarante perles noires. De quoi acheter la moitié des domestiques de Londres.`,`And let's not forget she has the Tears of Valcourt. Forty black pearls. Enough to buy half the servants in London.`)],[D('father','n',`Au moins, elle n'a plus d'argent. Les perles sont à l'abri, au coffre de Coutts. Elle ne peut plus acheter grand monde.`,`At least she has no money left. The pearls are safe in the Coutts vault. She can't buy many people any more.`)]),
D('father','n',`Il reste une question. La coupe de vin des mariés. Qui la portera jusqu'à l'autel ?`,`There's one question left. The couple's wine cup. Who will carry it to the altar?`),
C('m81',1,[
 {t:[`Bess. Elle ne te trahirait jamais.`,`Bess. She would never betray you.`],set:'bessCup',fx:{vig:2,bess:2},r:[
  {st:['bess','mc']},
  D('bess','o',`Moi ? Porter la coupe ? À Saint-George ? Devant la Reine ?`,`Me? Carry the cup? At St George's? In front of the Queen?`),
  D('mc','s',`Personne d'autre. Je te confierais ma vie, Bess. Ce jour-là, c'est exactement ce que je fais.`,`No one else. I'd trust you with my life, Bess. On that day, that's exactly what I'm doing.`),
  D('bess','s',`… Alors personne ne touchera cette coupe. Pas même un ange descendu du ciel. Je vous le jure sur la tête de ma grand-mère.`,`… Then nobody will touch that cup. Not even an angel come down from heaven. I swear it on my grandmother's head.`)
 ]},
 {t:[`Le personnel de l'église, comme le veut la tradition.`,`The church staff, as tradition demands.`],set:'churchCup',r:[
  D('lordp','s',`La tradition… Bon. On surveillera les servants de l'église de près. Mais je n'aime pas ça.`,`Tradition… Very well. We'll watch the church servants closely. But I don't like it.`)
 ]}
]),
...IF('pembrokeConfess',[],[
 {st:['ladyp','mc']},
 N(`Le soir, une visite inattendue : Lady Pembroke. Seule. Elle reste debout dans le vestibule, son chapeau à la main.`,`In the evening, an unexpected visitor: Lady Pembroke. Alone. She stays standing in the hall, hat in hand.`),
 D('ladyp','s',`J'étais en colère contre vous. Pour le secret. Puis j'ai compris : vous l'avez gardé pour protéger mon mari. Pas pour me blesser.`,`I was angry with you. About the secret. Then I understood: you kept it to protect my husband. Not to hurt me.`),
 D('ladyp','n',`Arthur m'a tout raconté, depuis. Et Bow Street aussi. Iris n'a plus de prise sur nous. Je voulais vous le dire avant le mariage. Et… vous souhaiter du bonheur.`,`Arthur has told me everything since. And Bow Street too. Iris has no hold over us any more. I wanted to tell you before the wedding. And… wish you happiness.`),
 N(`Elle s'en va avant que tu aies pu répondre. Mais à la porte, elle se retourne et esquisse quelque chose qui ressemble presque à un sourire.`,`She leaves before you can answer. But at the door, she turns and gives something that almost looks like a smile.`)
]),

{bg:'bedroom',mus:'tender',card:['La nuit','Night'],sub:['',''],where:['Ta chambre','Your bedroom']},
{st:['bess','mc']},
N(`La tradition veut que les fiancés ne se voient plus pendant les trois jours qui précèdent le mariage. Ta mère y tient. La Duchesse aussi. Pour une fois, elles sont d'accord. C'est terrifiant.`,`Tradition says the betrothed must not see each other for the three days before the wedding. Your mother insists. So does the Duchess. For once, they agree. It's terrifying.`),
D('bess','h',`Une lettre. De vous-savez-qui. Je l'ai cachée dans mon tablier. Votre mère fouille tous les paquets.`,`A letter. From you-know-who. I hid it in my apron. Your mother searches every parcel.`),
N(`« Trois jours sans toi. J'ai déjà compté les heures : soixante-douze. J'ai aussi compté les minutes, mais le chiffre m'a fait peur. Je dors avec ton mouchoir sous l'oreiller. Ne le dis à personne. Surtout pas à Clem. — {fi} »`,`"Three days without you. I've already counted the hours: seventy-two. I counted the minutes too, but the number frightened me. I sleep with your handkerchief under my pillow. Don't tell anyone. Especially not Clem. — {fi}"`),
C('m82',1,[
 {t:[`Lui répondre par une longue lettre d'amour, scellée d'un lys.`,`Answer with a long love letter, sealed with a lily.`],set:'loveLetter',fx:{fi:3},r:[N(`Tu écris toute la nuit. Six pages. Tu y mets tout : la tempête, la cave, la crypte, la bougie. Tu la scelles avec la broche d'Isadora, pressée dans la cire.`,`You write all night. Six pages. You put everything in it: the storm, the cellar, the crypt, the candle. You seal it with Isadora's brooch pressed into the wax.`),D('bess','h',`Six pages ! Je vais devoir la cacher dans ma botte.`,`Six pages! I'll have to hide it in my boot.`)]},
 {t:[`Désobéir à la tradition et filer {a:le|la} retrouver, juste cinq minutes.`,`Defy tradition and slip out to see {a:him|her}, just for five minutes.`],set:'sneakOut',fx:{fi:2},r:[N(`À minuit, tu sors par la fenêtre, comme {fi} l'a fait cent fois. Tu {a:le|la} trouves déjà sous ton balcon, qui s'apprêtait à grimper.`,`At midnight, you climb out of the window, as {fi} has done a hundred times. You find {a:him|her} already under your balcony, about to climb up.`),D('fi','h',`On a eu la même idée. Évidemment.`,`We had the same idea. Of course.`),N(`Cinq minutes. Un baiser. Puis Bess ouvre la fenêtre au-dessus de vos têtes : « Votre mère monte l'escalier ! » Vous vous séparez en riant comme des voleurs.`,`Five minutes. One kiss. Then Bess opens the window above your heads: "Your mother's coming up the stairs!" You part, laughing like thieves.`)]}
]),
{end:41}
);
