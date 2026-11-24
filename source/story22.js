/* ===== CHAPITRE 22 — Le grand bal de fin de saison ===== */
STORY.push(
{bg:'bedroom',mus:'tender',chap:22,card:['Chapitre 22','Chapter 22'],sub:['Le grand bal de fin de saison','The End-of-Season Ball'],where:['Ta chambre','Your bedroom']},
{st:['mc']},
N(`Sur ta coiffeuse, une lettre arrivée le matin même. Le cachet de Lyon.`,`On your dressing table, a letter that arrived this very morning. A Lyon postmark.`),
N(`« Tu étais À PARIS et je n'étais pas là ?! Je ne m'en remettrai jamais. Ma gouvernante dit que tu étais pâle et que tu avais l'air d'avoir un secret. Ma tante dit que je suis insupportable depuis. Elle a raison. Promets-moi qu'on se reverra. Promets. — Camille »`,`"You were IN PARIS and I wasn't there?! I'll never get over it. My housekeeper says you were pale and looked like you had a secret. My aunt says I've been unbearable ever since. She's right. Promise me we'll see each other again. Promise. — Camille"`),
C('c22cam',0,[
 {t:[`« Je te le promets. Un jour, je reviens à Paris. »`,`"I promise. One day, I'll come back to Paris."`],set:'camPromise',r:[D('mc','h',`(Et cette fois, je ne la raterai pas.)`,`(And this time, I won't miss her.)`)]},
 {t:[`« Je t'écrirai tout. Chaque bal, chaque secret. »`,`"I'll write you everything. Every ball, every secret."`],r:[D('mc','h',`(Enfin… presque tous les secrets.)`,`(Well… almost every secret.)`)]}
]),
{st:['mother','mc']},
N(`Le soir du dernier bal de la Saison. Ta mère entre dans ta chambre avec un écrin de velours bleu, qu'elle tient comme un objet sacré.`,`The night of the last ball of the Season. Your mother comes into your room with a blue velvet case, which she holds like something sacred.`),
D('mother','s',`Ton père l'a gardé dix-huit ans au fond d'un tiroir. Il était à elle. Je crois qu'il est temps qu'il soit à toi.`,`Your father kept it at the bottom of a drawer for eighteen years. It was hers. I think it's time it was yours.`),
N(`Dans l'écrin : une broche en forme de lys, d'argent et de perles. La même que sur le sceau de Marguerite. La même qu'au-dessus de la porte de la rue de Varenne.`,`In the case: a lily-shaped brooch, of silver and pearls. The same as on Marguerite's seal. The same as above the door on the Rue de Varenne.`),
C('c22a',0,[
 {t:[`L'épingler sur ton cœur.`,`Pin it over your heart.`],set:'lilyBrooch',r:[D('mother','s',`Elle te va. Comme si elle avait été faite pour toi. Peut-être qu'elle l'était.`,`It suits you. As if it had been made for you. Perhaps it was.`)]},
 {t:[`Serrer ta mère dans tes bras, longtemps.`,`Hold your mother in your arms, for a long time.`],fx:{rep:1},r:[D('mother','s',`Allons, allons. Tu vas froisser ta tenue. … Non, reste. Encore un peu.`,`Come now. You'll crease your outfit. … No, stay. A little longer.`)]}
]),
{st:['bess','mc']},
D('bess','h',`{title}, je voulais vous dire… Madame Fleury m'a proposé de devenir sa première assistante. Je… je ne sais pas si je dois accepter. Je ne veux pas vous quitter.`,`{title}, I wanted to tell you… Madame Fleury has offered to make me her head assistant. I… I don't know if I should accept. I don't want to leave you.`),
C('c22b',1,[
 {t:[`« Accepte, Bess. Tu mérites tellement plus. »`,`"Accept, Bess. You deserve so much more."`],set:'bessFleury',fx:{bess:2},r:[D('bess','o',`Vous… vous êtes sûr{e} ? Oh, {title} ! Je viendrai vous habiller pour tous les bals. Gratuitement. Enfin, presque.`,`You… you're sure? Oh, {title}! I'll come and dress you for every ball. Free of charge. Well, almost.`)]},
 {t:[`« Reste avec moi. Je doublerai tes gages. »`,`"Stay with me. I'll double your wages."`],set:'bessStays',fx:{bess:1},r:[D('bess','h',`Doublés ? … Bon. Mais je garde le droit de vous dire quand vos chapeaux sont ridicules.`,`Doubled? … All right. But I keep the right to tell you when your hats are ridiculous.`)]}
]),

{bg:'ballnight',mus:'ball',card:['Le palais de la Reine','The Queen\'s Palace'],sub:['Le dernier bal','The Last Ball'],where:['La grande salle de bal','The great ballroom']},
{st:['queen','mc']},
N(`« {first} {last}, héritier{g:|e|·e} de la maison de Valcourt ! » Cette fois, quand on annonce ton nom, toute la salle se lève.`,`"{first} {last}, heir to the house of Valcourt!" This time, when your name is announced, the whole room rises.`),
D('queen','h',`Vous voilà. Vous savez que vous m'avez gâché ma Saison ? Je n'ai pas eu une minute d'ennui. C'est la première fois depuis 1790.`,`There you are. Do you know you've ruined my Season? I haven't had a single dull minute. It's the first time since 1790.`),
D('queen','s',`Isadora serait fière. Et moi aussi, ce qui est beaucoup plus rare.`,`Isadora would be proud. And so am I, which is much rarer.`),
{st:['georgie','clem']},
D('georgie','h',`Regardez ma main ! Regardez ! Lord Fairfax m'a demandée en mariage ! Dans l'écurie ! Devant Bonbon !`,`Look at my hand! Look! Lord Fairfax proposed! In the stable! In front of Bonbon!`),
D('clem','h',`C'était, je dois l'avouer, d'un romantisme assez particulier.`,`It was, I must admit, a rather particular kind of romance.`),
D('georgie','h',`Le pacte des mousquetaires est rempli à un tiers ! Clem, c'est ton tour.`,`The musketeers' pact is one-third fulfilled! Clem, it's your turn.`),
D('clem','s',`Moi, je vais d'abord apprendre à faire confiance à quelqu'un. Ensuite, on verra pour le mari.`,`Me, I'm going to learn to trust someone first. Then we'll see about a husband.`),
{st:['clem','mc']},
D('clem','s',`Tu crois qu'elle reviendra ? Cordelia ?`,`Do you think she'll come back? Cordelia?`),
C('m43',1,[
 {t:[`« Peut-être. Et si elle revient, je l'écouterai. »`,`"Maybe. And if she does, I'll listen to her."`],set:'forgiveDoor',r:[D('clem','s',`Moi aussi, je crois. Je la giflerai d'abord. Ensuite, j'écouterai.`,`Me too, I think. I'll slap her first. Then I'll listen.`),N(`Vous riez {g:tous|toutes|tous} les deux, les yeux humides.`,`You both laugh, eyes wet.`)]},
 {t:[`« Si elle revient, ce sera pour nous faire du mal. Méfie-toi. »`,`"If she comes back, it'll be to hurt us. Be careful."`],set:'neverForgive',r:[D('clem','a',`Tu as raison. Je ne serai plus jamais aussi naïve. Plus jamais.`,`You're right. I'll never be so naive again. Never.`),N(`Mais tu la vois toucher, sans y penser, le petit ruban violet qu'elle porte encore au poignet.`,`But you see her touch, without thinking, the little violet ribbon she still wears on her wrist.`)]}
]),
...IF('twinAlly',[{st:['twinA','twinB']},D('twinA','n',`Félicitations. Pour l'héritage. Et pour le reste.`,`Congratulations. On the inheritance. And everything else.`),D('twinB','s',`… Félicitations. Voilà. Je l'ai dit. Ne me demande pas de le répéter.`,`… Congratulations. There. I said it. Don't ask me to repeat it.`)],
 [{st:['twinA','twinB']},D('twinB','h',`Profite bien de ta petite victoire. La prochaine Saison sera longue.`,`Enjoy your little victory. Next Season will be a long one.`),D('twinA','h',`Très longue.`,`Very long.`)]),
...IF('danceLi1',[{st:['duchess','mc']},D('duchess','n',`{title}. Mon enfant a passé la Saison à me désobéir à cause de vous. Je devrais vous en vouloir.`,`{title}. My child has spent the Season disobeying me because of you. I ought to resent you.`),D('duchess','h',`Je ne vous en veux pas. Isadora aurait ri de me voir vaincue par sa progéniture. Allez. {a:Il|Elle} vous attend sur la terrasse.`,`I don't. Isadora would have laughed to see me defeated by her offspring. Go on. {a:He|She} is waiting for you on the terrace.`)],
 [{st:['queen','mc']},D('queen','h',`J'ai appris qu'{a:un certain apprenti|une certaine apprentie} de Madame Fleury a dessiné la moitié des tenues de ce bal, y compris la mienne. Je l'ai nommé{a:|e} couturi{a:er|ère} de la Cour, ce matin.`,`I've learned that a certain apprentice of Madame Fleury's designed half the outfits at this ball, including mine. I named {a:him|her} Dressmaker to the Court this morning.`),D('queen','s',`Le talent vaut tous les titres. Allez. {a:Il|Elle} vous attend sur la terrasse.`,`Talent is worth every title. Go on. {a:He|She} is waiting for you on the terrace.`)]),

{bg:'ballnight',mus:'mystery',where:['Un couloir du palais','A palace corridor']},
{st:['mc']},
N(`Avant de sortir sur la terrasse, un valet que tu n'as jamais vu te glisse une enveloppe dans la main, puis disparaît dans la foule.`,`Before you step out onto the terrace, a footman you've never seen slips an envelope into your hand, then vanishes into the crowd.`),
N(`Un parfum de lavande. Une tache d'encre violette dans le coin.`,`A scent of lavender. A violet ink blot in the corner.`),
...IF('vialReturned',[N(`« Je t'ai rendu le flacon de notre tante. C'était la seule chose juste que je pouvais faire. Ne me cherche pas. Pas encore. Mais nous nous reverrons, {g:cousin|cousine|cousin·e}. Ce n'est que le début. — C. »`,`"I gave you back our aunt's vial. It was the only right thing I could do. Don't look for me. Not yet. But we'll meet again, cousin. This is only the beginning. — C."`)],
 [N(`« Tu as gagné cette manche. Profite de ta fortune, de ton nom, de ton amour. Profites-en bien. Parce que je reviendrai les chercher. Ce n'est que le début. — C. »`,`"You've won this round. Enjoy your fortune, your name, your love. Enjoy them well. Because I'll be back for them. This is only the beginning. — C."`)]),
N(`Sous la signature, une dernière ligne, griffonnée à la hâte :`,`Beneath the signature, one last line, hastily scribbled:`),
N(`« P.S. Demande à Lord Pembroke pourquoi il m'a recueillie. »`,`"P.S. Ask Lord Pembroke why he took me in."`),
D('mc','o',`(…Lord Pembroke ?)`,`(…Lord Pembroke?)`),
N(`Tu glisses la lettre dans ta manche. Tu y penseras demain. Ce soir, quelqu'un t'attend sur la terrasse.`,`You slip the letter into your sleeve. You'll think about it tomorrow. Tonight, someone is waiting for you on the terrace.`),
{bg:'terrace',mus:'tender',card:['Minuit','Midnight'],sub:['',''],where:['La terrasse du palais','The palace terrace']},
{st:['lv','mc']},
N(`Sur la terrasse, sous les étoiles, la musique arrive étouffée. Comme le soir du bal de la Reine. Comme le premier soir. {lv} est là, plus nerveu{a:x|se} que tu ne l'as jamais vu{a:|e}, même au duel.`,`On the terrace, beneath the stars, the music comes muffled. Like the night of the Queen's ball. Like the very first night. {lv} is there, more nervous than you've ever seen {a:him|her}, even at the duel.`),
...IF('wantLife',[D('lv','h',`Dans la voiture, après la cave, tu m'as dit que tu voulais passer ta vie avec moi. J'ai gardé cette phrase au chaud, comme promis.`,`In the carriage, after the cellar, you told me you wanted to spend your life with me. I kept that sentence nice and warm, as promised.`)]),
...IF('goPublic',[D('lv','h',`Tout Londres nous a vus à Rotten Row. Autant leur donner une vraie raison de bavarder.`,`All London saw us on Rotten Row. Might as well give them a real reason to gossip.`)]),
D('lv','s',`Depuis le premier soir, tu as tout bouleversé. Mes plans, mes certitudes, ma façon de dormir. J'ai eu peur pour toi, j'ai ri avec toi, je me suis battu{a:|e} pour toi. Et je ne veux plus jamais faire autrement.`,`Since the very first night, you've turned everything upside down. My plans, my certainties, the way I sleep. I've been afraid for you, laughed with you, fought for you. And I never want to do anything else.`),
N(`{lv} met un genou à terre. Dans sa main, une bague. Un petit lys d'or, avec une perle au cœur.`,`{lv} goes down on one knee. In {a:his|her} hand, a ring. A small gold lily, with a pearl at its heart.`),
...IF('danceLi1',[N(`« C'était celle de ma grand-mère. Ma mère me l'a donnée ce matin, sans un mot. Je crois que c'est sa façon de dire oui. »`,`"It was my grandmother's. My mother gave it to me this morning, without a word. I think it's her way of saying yes."`)],[N(`« Je l'ai forgée moi-même, avec l'or du médaillon de Marguerite. Elle aurait voulu que ce soit toi. »`,`"I made it myself, from the gold of Marguerite's locket. She would have wanted it to be you."`)]),
D('lv','s',`{first} {last}… Veux-tu m'épouser ?`,`{first} {last}… Will you marry me?`),
N(`Le temps s'arrête. Les étoiles, la musique, ton cœur. {lv} attend ta réponse, à genoux, la bague tremblant légèrement entre ses doigts.`,`Time stops. The stars, the music, your heart. {lv} waits for your answer, on one knee, the ring trembling slightly between {a:his|her} fingers.`),
N(`À suivre dans la saison 2…`,`To be continued in Season 2…`),
{end:22}
);
