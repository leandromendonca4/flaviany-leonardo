export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
};

const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const scheduleTimes = ["08:00", "14:00", "20:00"];

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function getScheduledDate(index: number) {
  const now = new Date();
  const date = new Date(now);
  date.setDate(now.getDate() - Math.floor(index / scheduleTimes.length));
  return `${formatDate(date)} · ${scheduleTimes[index % scheduleTimes.length]}`;
}

type RawBlogPost = Omit<BlogPost, "date">;

const rawPosts: RawBlogPost[] = [
  {
    slug: "como-falar-sobre-sexo-no-relacionamento",
    category: "Terapia Sexual",
    title: "Como falar sobre sexo no relacionamento sem medo",
    excerpt: "A comunicação sexual clara transforma intimidade e cria mais conexão entre parceiros.",
    content: "A comunicação sexual clara transforma intimidade e cria mais conexão entre parceiros.\n\nNo entanto, muitos casais conseguem conversar sobre contas, filhos, trabalho e rotina, mas encontram dificuldade quando o assunto é sexo. Talvez você também se identifique com essa situação. Pode existir medo de magoar o parceiro(a), de ser mal interpretado(a) ou até de ouvir algo que gere insegurança. Porém, aquilo que não é falado costuma alimentar o distanciamento emocional, a falta de diálogo no casal e dificuldades na vida sexual.\n\n## Por onde começar?\n\nO primeiro passo é desenvolver uma comunicação no relacionamento baseada na escuta e no respeito. Em vez de apontar falhas ou cobranças, procure falar sobre seus sentimentos, necessidades e desejos. Conversas abertas e acolhedoras ajudam a criar segurança emocional e fortalecem a intimidade no relacionamento.\n\nAntes de falar sobre sexo com o outro, é importante compreender a si mesmo. O que você sente falta na relação? O que gostaria de viver de forma diferente? Quais desejos sexuais ou emocionais têm sido difíceis de expressar?\n\n## Perguntas que podem ajudar\n\n- O que me impede de falar sobre meus desejos?\n- Tenho medo da rejeição ou do julgamento?\n- Consigo ouvir meu parceiro(a) sem me defender?\n- Como desejo me sentir durante a intimidade?\n- O que significaria para mim ter uma vida sexual mais satisfatória?\n\n## O papel da terapia sexual\n\nA terapia sexual oferece um espaço seguro para abordar temas que muitas vezes se tornam tabus dentro do relacionamento. Ela ajuda casais e indivíduos a desenvolverem uma comunicação mais saudável, compreenderem dificuldades relacionadas ao desejo sexual e fortalecerem a conexão afetiva.\n\nAo longo da minha prática clínica, percebo que muitos problemas na vida sexual não surgem pela falta de amor, mas pela dificuldade de diálogo e pela presença de medos, inseguranças e expectativas não compartilhadas. Quando essas questões encontram espaço para serem acolhidas, a intimidade deixa de ser um campo de tensão e passa a ser um lugar de encontro, prazer e conexão.\n\nSe você sente que a dificuldade para falar sobre sexo está gerando afastamento, conflitos ou sofrimento na relação, talvez seja o momento de buscar ajuda. A transformação começa quando aquilo que dói encontra espaço para ser ouvido e compreendido.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-comunicacao-sexual.png",
    tags: ["terapia sexual", "comunicação", "intimidade", "relacionamento"],
  },
  {
    slug: "terapia-de-casal-para-reconectar-emocoes",
    category: "Terapia de Casal",
    title: "Terapia de casal para reconectar emoções e desejos",
    excerpt: "A terapia de casal fortalece vínculos, melhora a comunicação e ajuda a redefinir o que o casal deseja construir juntos.",
    content: "A terapia de casal fortalece vínculos, melhora a comunicação e ajuda a redefinir o que o casal deseja construir juntos. Embora muitas pessoas procurem ajuda apenas quando o relacionamento está em crise, a verdade é que a terapia também pode ser um espaço de prevenção, crescimento e fortalecimento da conexão afetiva.\n\nCom o passar do tempo, a rotina, as responsabilidades, o trabalho e as demandas familiares podem fazer com que o casal se afaste emocionalmente. Talvez você perceba que as conversas já não acontecem como antes, que os conflitos no relacionamento se tornaram frequentes ou que a intimidade no casamento perdeu espaço. Quando isso acontece, é comum surgir uma sensação de solidão, mesmo estando ao lado de quem se ama.\n\n## O que está por trás do afastamento\n\nMuitas dificuldades conjugais não surgem de uma única situação, mas do acúmulo de pequenas desconexões ao longo do tempo. Como cada parceiro expressa suas emoções? Quais necessidades deixaram de ser comunicadas? O que aconteceu com os sonhos, projetos e desejos que um dia aproximaram vocês?\n\nEssas perguntas ajudam a compreender aspectos importantes da dinâmica do relacionamento e abrem espaço para mudanças significativas.\n\n## O que é trabalhado na terapia de casal\n\nNa terapia de casal, trabalhamos questões fundamentais para a saúde da relação, como:\n\n- Comunicação emocional e resolução de conflitos;\n- Problemas de comunicação no casamento;\n- Divisão das responsabilidades e da rotina;\n- Fortalecimento do carinho e da conexão emocional;\n- Expectativas sobre a relação e a vida sexual do casal;\n- Construção de confiança, respeito e parceria.\n\nAlém disso, buscamos compreender como a história individual de cada parceiro influencia a convivência atual, os conflitos e a forma de amar.\n\n## Como a terapia pode ajudar?\n\nMeu papel é oferecer um espaço seguro, acolhedor e sem julgamentos para que ambos possam ser ouvidos e compreendidos. A terapia ajuda o casal a identificar padrões que geram sofrimento, desenvolver novas formas de diálogo e reconstruir a intimidade emocional.\n\nAo longo da minha prática clínica, percebo que muitos casais não precisam necessariamente aprender a amar mais, mas sim aprender a se compreender melhor. Quando isso acontece, torna-se possível reconectar emoções, fortalecer o vínculo afetivo e construir uma relação mais leve, íntima e satisfatória.\n\nSe você sente que seu relacionamento precisa de um novo começo, que os conflitos estão se repetindo ou que a conexão entre vocês diminuiu, a terapia de casal pode ser um importante caminho de transformação. Saiba que o primeiro passo também é o mais importante.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-terapia-casal.png",
    tags: ["casal", "terapia", "comunicação", "intimidade"],
  },
  {
    slug: "disfuncao-eretil-entenda-e-trate",
    category: "Sexualidade",
    title: "Disfunção erétil: entenda as causas e saiba como tratar",
    excerpt: "A disfunção erétil é uma condição comum e tratável, especialmente quando suas causas são compreendidas de forma ampla, considerando tanto os aspectos físicos quanto emocionais.",
    content: "A disfunção erétil é uma condição comum e tratável, especialmente quando suas causas são compreendidas de forma ampla, considerando tanto os aspectos físicos quanto emocionais. Se você está enfrentando dificuldades para manter ou alcançar uma ereção, saiba que não está sozinho. Milhões de homens convivem com esse problema em algum momento da vida, embora muitos sofram em silêncio por vergonha, medo ou insegurança.\n\nA dificuldade de ereção pode afetar não apenas a vida sexual, mas também a autoestima, a confiança e os relacionamentos. Com frequência, homens que vivenciam a disfunção erétil passam a evitar situações íntimas por receio de falhar novamente, criando um ciclo de ansiedade e tensão que contribui para a manutenção do problema.\n\n## Fatores emocionais que podem influenciar a disfunção erétil\n\nDiversos fatores psicológicos podem estar relacionados à disfunção erétil psicológica, entre eles:\n\n- Ansiedade de desempenho sexual;\n- Excesso de cobrança e perfeccionismo;\n- Baixa autoestima;\n- Experiências negativas anteriores;\n- Medo de decepcionar a parceira ou o parceiro;\n- Conflitos no relacionamento;\n- Estresse e sobrecarga emocional.\n\nTalvez você já tenha se perguntado: \"O que está acontecendo comigo?\", \"Será que vou falhar novamente?\" ou \"Por que isso continua acontecendo?\". Essas preocupações costumam aumentar a pressão durante a relação sexual e afastar a sexualidade de seu propósito mais genuíno: conexão, prazer e intimidade.\n\n## Como a terapia sexual pode ajudar?\n\nO tratamento para disfunção erétil vai além da busca por soluções imediatas. A terapia sexual ajuda a compreender as causas emocionais envolvidas, reduzir a ansiedade, fortalecer a autoconfiança e desenvolver uma relação mais saudável com a própria sexualidade.\n\nDurante o processo terapêutico, trabalhamos crenças que alimentam o medo do fracasso, estratégias para diminuir a pressão sobre o desempenho, exercícios específicos voltados para a reconexão com o prazer e formas mais saudáveis de comunicação no relacionamento.\n\nAo longo da minha prática clínica, observo que muitos homens chegam acreditando que perderam sua capacidade sexual, quando, na realidade, estão enfrentando um excesso de preocupação, cobrança e medo. Quando esses fatores são compreendidos e trabalhados, o corpo tende a responder com mais naturalidade.\n\nA disfunção erétil tem tratamento. Buscar ajuda não é sinal de fraqueza, mas um importante passo em direção ao autocuidado. Quando a sexualidade é acolhida com respeito, conhecimento e suporte profissional, a recuperação torna-se mais leve, segura e possível.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-disfuncao-eretil.png",
    tags: ["disfunção erétil", "sexualidade", "ansiedade", "terapia"],
  },
  {
    slug: "ejaculacao-precoce-estrategias-psicologicas",
    category: "Sexualidade",
    title: "Ejaculação precoce: estratégias psicológicas que ajudam",
    excerpt: "A ejaculação precoce é uma das queixas sexuais masculinas mais comuns e pode gerar sofrimento, insegurança e impacto significativo nos relacionamentos.",
    content: "A ejaculação precoce é uma das queixas sexuais masculinas mais comuns e pode gerar sofrimento, insegurança e impacto significativo nos relacionamentos.\n\nEmbora muitos homens acreditem que se trata apenas de uma questão física ou de falta de controle, a realidade é que fatores emocionais costumam desempenhar um papel importante nesse processo.\n\nAnsiedade, medo de falhar, excesso de cobrança, insegurança e preocupação constante com o desempenho sexual podem transformar a intimidade em um momento de tensão, afastando o prazer e a espontaneidade da experiência sexual.\n\nTalvez você já tenha antecipado uma relação sexual com pensamentos como: \"E se acontecer novamente?\", \"Será que vou conseguir controlar?\" ou \"O que minha parceira vai pensar?\". Quanto maior a preocupação, maior tende a ser a ansiedade de desempenho sexual, criando um ciclo que favorece a repetição do problema e afeta a autoestima masculina.\n\n## Entendendo as causas da ejaculação precoce\n\nAs causas da ejaculação precoce podem envolver diferentes aspectos da vida emocional e relacional, como:\n\n- Ansiedade e estresse;\n- Medo de não corresponder às expectativas;\n- Insegurança na vida sexual;\n- Experiências negativas anteriores;\n- Excesso de foco no desempenho;\n- Dificuldades de comunicação no relacionamento.\n\nPor isso, compreender o que está por trás do sintoma é tão importante quanto buscar estratégias para melhorar o controle da ejaculação.\n\n## Estratégias terapêuticas que ajudam\n\nA terapia sexual oferece um espaço seguro para investigar as causas emocionais da ejaculação precoce e desenvolver recursos para lidar com elas de forma mais saudável.\n\nDurante o processo terapêutico, trabalhamos:\n\n- Reconhecimento dos sinais corporais que antecedem a ejaculação;\n- Técnicas para redução da ansiedade;\n- Exercícios de atenção plena e presença corporal;\n- Comunicação aberta com o parceiro ou parceira;\n- Estratégias para desacelerar a experiência sexual;\n- Fortalecimento da autoconfiança e da autoestima.\n\nO objetivo não é apenas prolongar o tempo da relação sexual, mas ajudar o homem a viver sua sexualidade com mais tranquilidade, conexão e prazer.\n\n## O efeito da ejaculação precoce no relacionamento\n\nMuitas vezes, a ejaculação precoce provoca sentimentos de vergonha, frustração e afastamento emocional. Alguns homens passam a evitar relações sexuais por medo de repetir a experiência, enquanto outros enfrentam conflitos silenciosos dentro do relacionamento.\n\nAo longo da minha prática clínica, percebo que quando o tema deixa de ser tratado como um fracasso e passa a ser compreendido com acolhimento e diálogo, a intimidade pode se transformar em um espaço de parceria e compreensão.\n\nA ejaculação precoce tem tratamento. Com apoio profissional adequado, é possível reduzir a ansiedade, recuperar a confiança e construir uma vivência sexual mais satisfatória para ambos os parceiros.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-ejaculacao-precoce.png",
    tags: ["ejaculação precoce", "sexualidade", "terapia", "intimidade"],
  },
  {
    slug: "desejo-sexual-e-conexao-emocional",
    category: "Ansiedade",
    tags: ["desejo", "conexão emocional", "relacionamento", "ansiedade"],
    title: "Desejo sexual e conexão emocional: como equilibrar",
    excerpt: "Desejo sexual e intimidade caminham juntos quando o casal consegue compreender suas necessidades emocionais, seus sentimentos e suas formas de se conectar.",
    content: "Desejo sexual e intimidade caminham juntos quando o casal consegue compreender suas necessidades emocionais, seus sentimentos e suas formas de se conectar.\n\nNo entanto, muitas pessoas acreditam que o desejo sexual deveria surgir espontaneamente o tempo todo. Quando isso não acontece, surgem dúvidas e preocupações como: \"Será que meu relacionamento esfriou?\", \"Será que estou com falta de desejo sexual?\" ou \"Por que estamos tão distantes?\".\n\nA verdade é que o desejo não acontece isoladamente. Ele é influenciado pela qualidade da relação, pela comunicação entre o casal, pelo vínculo emocional e pela sensação de segurança afetiva construída ao longo do tempo.\n\n## O que influencia o desejo sexual\n\nDiversos fatores podem contribuir para a diminuição da libido e da intimidade no relacionamento, entre eles:\n\n- Rotina exaustiva e excesso de responsabilidades;\n- Conflitos não resolvidos;\n- Mágoas acumuladas;\n- Sensação de não ser visto, ouvido ou valorizado;\n- Baixa autoestima e dificuldades com a imagem corporal;\n- Estresse, ansiedade e sobrecarga emocional;\n- Falta de conexão emocional no relacionamento.\n\nQuando esses fatores se acumulam, o desejo sexual tende a diminuir naturalmente. Muitas vezes, o casal interpreta esse afastamento como falta de amor, quando, na realidade, existe uma necessidade de reconexão emocional.\n\nTalvez você tenha percebido que as conversas se tornaram mais superficiais, os momentos de carinho diminuíram ou que a vida sexual passou a acontecer sem a mesma espontaneidade de antes. Esses sinais merecem atenção, mas não precisam ser vistos como uma sentença para o relacionamento.\n\n## Como resgatar a conexão emocional\n\nA escuta ativa, a demonstração de afeto e o cuidado mútuo são fundamentais para fortalecer a intimidade do casal. Quando cada parceiro se sente acolhido, respeitado e emocionalmente seguro, o desejo tende a surgir de forma mais natural.\n\nReconectar-se emocionalmente muitas vezes significa voltar a enxergar o outro para além das demandas da rotina, criando espaço para conversas genuínas, momentos de proximidade e experiências compartilhadas.\n\n## O papel da terapia sexual e de casal\n\nNa terapia, buscamos compreender o que está bloqueando a aproximação emocional e afetando o desejo sexual. Trabalhamos a comunicação, os conflitos silenciosos, as expectativas sobre a relação e as necessidades individuais de cada parceiro.\n\nAo longo da minha prática clínica, percebo que muitos casais chegam preocupados com a queda da libido, mas descobrem que a dificuldade está relacionada a questões emocionais que nunca tiveram espaço para ser expressas.\n\nReconectar emoções e sexualidade não acontece da noite para o dia. É um processo construído com paciência, diálogo, respeito e pequenas mudanças na convivência diária. Quando existe disposição para compreender o outro e fortalecer o vínculo afetivo, o desejo encontra caminhos mais naturais para se manifestar.\n\nSe você sente que a conexão emocional e a vida sexual perderam espaço no relacionamento, a terapia pode ajudar a construir novas formas de proximidade, intimidade e prazer.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-desejo-sexual.png",
  },
  {
    slug: "psicoterapia-individual-para-autoestima",
    category: "Autoestima",
    title: "Psicoterapia individual para fortalecer a autoestima",
    excerpt: "A autoestima não é algo com que nascemos pronto. Ela é construída ao longo da vida por meio das experiências que vivemos, das relações que estabelecemos e da forma como aprendemos a enxergar a nós mesmos.",
    content: "A autoestima não é algo com que nascemos pronto. Ela é construída ao longo da vida por meio das experiências que vivemos, das relações que estabelecemos e da forma como aprendemos a enxergar a nós mesmos. Quando essa construção acontece marcada por críticas, rejeições, comparações ou cobranças excessivas, é comum desenvolver uma autoestima baixa, insegurança e dificuldade para reconhecer o próprio valor.\n\nMuitas pessoas chegam à psicoterapia carregando uma sensação constante de insuficiência. Mesmo quando conquistam objetivos importantes, continuam acreditando que não são boas o bastante. Talvez você também se identifique com pensamentos como: \"Eu deveria fazer mais\", \"Nunca estou satisfeito comigo mesmo\" ou \"Preciso da aprovação dos outros para me sentir valorizado\".\n\n## O que é autoestima saudável?\n\nTer uma autoestima saudável não significa sentir-se perfeito ou superior aos outros. Significa desenvolver uma relação mais respeitosa consigo mesmo, reconhecendo qualidades e limitações de forma equilibrada.\n\nUma autoestima fortalecida envolve:\n\n- Reconhecer seus limites sem culpa excessiva;\n- Aceitar imperfeições sem se diminuir;\n- Valorizar seus esforços e conquistas;\n- Confiar mais nas próprias escolhas;\n- Desenvolver autoconfiança diante dos desafios;\n- Construir relações mais saudáveis e equilibradas.\n\n## Como a psicoterapia ajuda a melhorar a autoestima?\n\nNa psicoterapia individual, exploramos histórias pessoais, experiências marcantes, crenças internalizadas e padrões de autocrítica que influenciam a forma como você se percebe.\n\nMuitas vezes, a baixa autoestima não está relacionada ao presente, mas a mensagens recebidas ao longo da vida que foram incorporadas como verdades. Comentários, rejeições, comparações ou expectativas excessivas podem continuar influenciando a forma como uma pessoa se vê, mesmo muitos anos depois.\n\nAo compreender essas origens, torna-se possível construir uma visão mais realista, compassiva e fortalecedora sobre si mesmo.\n\n## Práticas que favorecem a transformação\n\nDurante o processo terapêutico, diferentes recursos podem contribuir para o fortalecimento da autoestima e do amor-próprio, como:\n\n- Diário emocional e autoconhecimento;\n- Exercícios de autocompaixão;\n- Construção de limites saudáveis;\n- Reconhecimento das próprias conquistas;\n- Desenvolvimento da autoconfiança;\n- Redução da autocrítica excessiva.\n\nÉ importante entender que fortalecer a autoestima não significa tornar-se alguém diferente, significa aprender a se enxergar com mais verdade, respeito e gentileza.\n\nQuando você reconhece seu valor, passa a fazer escolhas mais conscientes, estabelece relações mais saudáveis e desenvolve maior segurança para enfrentar os desafios da vida. A psicoterapia oferece exatamente esse espaço de reflexão, crescimento e transformação.\n\nInvestir em sua autoestima é investir na relação mais importante que você terá durante toda a vida: a relação consigo mesmo.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-autoestima.png",
    tags: ["autoestima", "psicoterapia", "autocuidado", "autoconhecimento"],
  },
  {
    slug: "psicanalise-e-sexualidade-compreendendo-desejos",
    category: "Psicanálise",
    title: "Psicanálise e sexualidade: compreendendo seus desejos",
    excerpt: "A psicanálise ajuda a olhar para os desejos sexuais e emocionais com profundidade, respeito e sem julgamentos.",
    content: "A psicanálise ajuda a olhar para os desejos sexuais e emocionais com profundidade, respeito e sem julgamentos. Muitas pessoas convivem com dúvidas sobre seus desejos, sentimentos contraditórios, culpa ou dificuldades nos relacionamentos sem compreender exatamente a origem desse sofrimento.\n\nVocê já se perguntou por que determinados desejos despertam tanto interesse, enquanto outros provocam medo, vergonha ou confusão? A sexualidade humana vai muito além do ato sexual. Ela está profundamente ligada à nossa história de vida, às experiências afetivas, aos vínculos construídos na infância e à forma como aprendemos a amar, desejar e nos relacionar.\n\n## O olhar psicanalítico sobre a sexualidade\n\nNa psicanálise, compreendemos que os desejos nem sempre são totalmente conscientes. Aquilo que sentimos hoje pode carregar marcas de experiências passadas, crenças internalizadas, conflitos emocionais e padrões relacionais que continuam influenciando nossas escolhas.\n\nPor isso, quando existe sofrimento relacionado à sexualidade, aos relacionamentos amorosos ou à forma de viver o desejo, olhar apenas para o sintoma costuma não ser suficiente. Muitas vezes, é necessário compreender os significados mais profundos que estão por trás das emoções e comportamentos.\n\nA psicoterapia psicanalítica busca justamente ampliar essa compreensão, ajudando a pessoa a reconhecer aspectos de sua história que permanecem atuando de maneira inconsciente.\n\n## O que é possível descobrir durante a análise?\n\nAo longo do processo terapêutico, convido meus pacientes a explorarem sonhos, lembranças, sentimentos, fantasias e padrões que se repetem em seus relacionamentos.\n\nPerguntas como estas podem abrir importantes caminhos de autoconhecimento:\n\n- Por que me sinto culpado ao desejar?\n- O que me faz repetir as mesmas escolhas afetivas?\n- Por que determinados relacionamentos sempre terminam da mesma forma?\n- O que me impede de viver minha sexualidade com mais liberdade?\n- Como minha história influencia meus vínculos atuais?\n\nA partir dessa investigação, torna-se possível compreender conflitos entre desejo e culpa, necessidades emocionais não reconhecidas e formas inconscientes de buscar afeto, aprovação ou proteção.\n\n## O papel da análise no autoconhecimento\n\nA psicanálise não oferece respostas prontas nem soluções rápidas. Ela propõe um espaço de escuta profunda, reflexão e descoberta.\n\nAo compreender os significados inconscientes presentes em sua história, muitas pessoas conseguem flexibilizar padrões rígidos, fortalecer sua identidade e desenvolver uma relação mais autêntica consigo mesmas.\n\nAo longo da minha prática clínica, percebo que quando uma pessoa compreende melhor sua história emocional, seus relacionamentos também se transformam. A sexualidade deixa de ser um lugar de conflito e passa a ser vivida com mais consciência, liberdade e verdade.\n\nConhecer seus desejos não significa mudar quem você é. Significa compreender, com mais profundidade, aquilo que faz parte da sua história e da sua forma única de existir no mundo.",
    readTime: "8 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-psicanalise.png",
    tags: ["psicanálise", "sexualidade", "desejo", "autoconhecimento"],
  },
  {
    slug: "ansiedade-e-vida-sexual",
    category: "Ansiedade",
    title: "Como a ansiedade afeta a vida sexual e relacional",
    excerpt: "Você já percebeu que, quanto mais tenta controlar o que sente, mais distante fica daquilo que deseja viver?",
    content: "Você já percebeu que, quanto mais tenta controlar o que sente, mais distante fica daquilo que deseja viver? A ansiedade costuma agir exatamente assim. Ela acelera os pensamentos, aumenta as preocupações e dificulta a conexão com o momento presente. E quando isso acontece, a vida sexual e os relacionamentos frequentemente são afetados.\n\nMuitas pessoas procuram terapia acreditando que o problema está apenas na falta de desejo sexual, na dificuldade de excitação ou nos conflitos com o parceiro. No entanto, ao aprofundarmos a escuta, encontramos uma mente constantemente ocupada com medos, cobranças, inseguranças e expectativas difíceis de sustentar.\n\nA ansiedade afeta o corpo e a mente ao mesmo tempo. Esse estado de alerta constante pode provocar tensão muscular, dificuldade para relaxar, medo de não corresponder às expectativas, diminuição da libido, dificuldades na intimidade e afastamento emocional.\n\n## Como a ansiedade afeta a vida sexual\n\nQuando a mente está preocupada com possíveis erros, rejeições ou frustrações, torna-se mais difícil estar presente durante os momentos de intimidade. Muitas pessoas relatam sintomas como:\n\n- Falta de desejo sexual;\n- Dificuldade de excitação;\n- Ansiedade de desempenho sexual;\n- Disfunção erétil relacionada à ansiedade;\n- Ejaculação precoce associada ao nervosismo;\n- Dificuldade de conexão emocional durante o sexo.\n\nNesses casos, a sexualidade deixa de ser vivida com espontaneidade e passa a ser acompanhada por preocupação, autocobrança e medo de falhar.\n\n## A influência da ansiedade nos relacionamentos\n\nAlém dos impactos na vida sexual, a ansiedade também pode afetar a qualidade dos relacionamentos. É comum que ela provoque dificuldades de comunicação, necessidade excessiva de controle, insegurança afetiva e medo de rejeição.\n\nMuitas vezes, aquilo que parece ser um problema exclusivamente do casal está relacionado a conflitos internos que ainda não foram compreendidos. Por isso, vale a pena se perguntar:\n\n- O que minha ansiedade está tentando comunicar?\n- Quais medos ocupam meus pensamentos durante momentos de intimidade?\n- O que temo perder, decepcionar ou revelar?\n- Como minhas preocupações interferem na forma como me relaciono?\n\n## Como a terapia pode ajudar?\n\nNa psicoterapia, buscamos compreender a origem desses conflitos e identificar os gatilhos emocionais que alimentam a ansiedade. O processo terapêutico ajuda a desenvolver maior consciência emocional, fortalecer recursos internos e construir formas mais saudáveis de lidar com pensamentos e sentimentos.\n\nAo longo da minha prática clínica, percebo que muitos pacientes descobrem que não precisam controlar tudo para se sentirem seguros. Quando a ansiedade encontra espaço para ser compreendida, a mente desacelera e o corpo volta a ter condições de experimentar prazer, presença e conexão.\n\nA ansiedade tem tratamento, com acolhimento, autoconhecimento e apoio profissional, é possível recuperar a qualidade dos relacionamentos e viver a sexualidade de forma mais leve, espontânea e satisfatória.\n\nQuando existe diálogo, compreensão e cuidado emocional, a intimidade deixa de ser um espaço de cobrança e volta a ser um lugar de encontro verdadeiro.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "/images/blog-ansiedade-sexual.png",
    tags: ["ansiedade", "vida sexual", "relacionamentos", "saúde mental"],
  },
];

export const getBlogPosts = (): BlogPost[] =>
  rawPosts.map((post, index) => ({
    ...post,
    date: getScheduledDate(index),
  }));

export const blogPosts: BlogPost[] = getBlogPosts();

export const getPostBySlug = (slug: string) =>
  getBlogPosts().find((p) => p.slug === slug);

export const getRelatedPosts = (currentSlug: string, category: string) =>
  getBlogPosts()
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, 3);
