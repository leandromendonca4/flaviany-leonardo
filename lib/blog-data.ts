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
    content: "Falar sobre sexo no relacionamento é um exercício de confiança. Muitas pessoas evitam o tema por vergonha ou medo de serem julgadas, e isso pode gerar distância na relação.\n\n## Por onde começar\n\nComece com uma escuta gentil. Em vez de apontar problemas, conte como você se sente e o que gostaria de vivenciar. A linguagem aberta e sem cobranças constrói segurança.\n\n## Perguntas que ajudam\n\n- O que você mais gosta na nossa vida íntima?\n- Como posso te ajudar a me sentir mais confortável?\n- Há algo novo que você gostaria de experimentar?\n\n## O papel da terapia sexual\n\nA terapia sexual cria um espaço seguro para explorar essas conversas e transformar tabus em possibilidades reais. Aqui, cuidamos do desejo, da intimidade e da conexão de forma cuidadosa.\n\nA partir do diálogo, o casal aprende a se aproximar com mais presença e menos ansiedade.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    tags: ["terapia sexual", "comunicação", "intimidade", "relacionamento"],
  },
  {
    slug: "terapia-de-casal-para-reconectar-emocoes",
    category: "Terapia de Casal",
    title: "Terapia de casal para reconectar emoções e desejos",
    excerpt: "A terapia de casal fortalece vínculos, melhora a comunicação e ajuda a redefinir o que o casal deseja juntos.",
    content: "A terapia de casal não é apenas para crises. É um espaço onde ambos podem ser ouvidos, compreender padrões de convivência e renovar o compromisso afetivo.\n\n## Quando buscar ajuda\n\nQuando a rotina pesa, as conversas travam ou o desejo diminui, a terapia aparece como um apoio para redescobrir o casal por trás do cotidiano.\n\n## O que é trabalhado\n\n- comunicação emocional\n- divisão de tarefas e carinho\n- expectativas e desejo sexual\n- confidência e respeito mútuo\n\n## A importância do olhar profissional\n\nO terapeuta ajuda a mapear as dificuldades sem culpa, a criar acordos e a entender como as experiências de vida individuais impactam a vida a dois.\n\nEsse processo constrói um ambiente mais tranquilo e afetivo para que o casal se sinta seguro para crescer junto.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    tags: ["casal", "terapia", "comunicação", "intimidade"],
  },
  {
    slug: "disfuncao-eretil-entenda-e-trate",
    category: "Sexualidade",
    title: "Disfunção erétil: entenda e saiba como tratar",
    excerpt: "A disfunção erétil é uma condição comum e tratável, especialmente quando abordada com cuidado psicológico.",
    content: "A disfunção erétil muitas vezes tem componentes orgânicos e psicológicos. Identificar o que está em jogo é essencial para um tratamento eficaz.\n\n## Fatores que influenciam\n\n- ansiedade de performance\n- autoestima abalada\n- histórico de relacionamentos\n- expectativas irreais sobre o desempenho\n\n## O papel da terapia\n\nA terapia trabalha a ansiedade, a comunicação com o parceiro e as crenças que alimentam o problema. O objetivo é criar um cenário de menor pressão e mais prazer.\n\n## Caminhos possibilitados\n\n- exercícios de respiração e atenção plena\n- ressignificação do desejo\n- construção de uma relação mais acolhedora\n\nQuando a sexualidade é tratada com respeito, a curva de recuperação é muito mais suave.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    tags: ["disfunção erétil", "sexualidade", "ansiedade", "terapia"],
  },
  {
    slug: "ejaculacao-precoce-estrategias-psicologicas",
    category: "Sexualidade",
    title: "Ejaculação precoce: estratégias psicológicas que ajudam",
    excerpt: "O tratamento eficaz da ejaculação precoce passa pela mente e pela presença de um plano terapêutico.",
    content: "A ejaculação precoce é uma queixa comum e frequentemente envolve componentes emocionais e fisiológicos.\n\n## Entendendo a questão\n\nA dificuldade de controle está frequentemente associada a ansiedade, medo de falhar e tensão corporal. Trabalhar essas dimensões melhora o resultado.\n\n## Estratégias terapêuticas\n\n- reconhecimento dos sinais do corpo\n- técnicas de respiração\n- comunicação aberta com o parceiro\n- exercícios de foco e desaceleração\n\n## O efeito no relacionamento\n\nQuando o assunto é conversado com cuidado, a intimidade pode se transformar em um espaço de compreensão em vez de vergonha.\n\nA terapia cria um ambiente para que o paciente retome o controle com mais calma e suporte.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["ejaculação precoce", "sexualidade", "terapia", "intimidade"],
  },
  {
    slug: "desejo-sexual-e-conexao-emocional",
    category: "Saúde Mental",
    title: "Desejo sexual e conexão emocional: como equilibrar",
    excerpt: "Desejo e intimidade caminham juntos quando o casal consegue se entender em suas necessidades e sentimentos.",
    content: "O desejo sexual não acontece isolado. Ele está ligado à comunicação, ao vínculo emocional e à sensação de segurança no casal.\n\n## O que influencia o desejo\n\n- cansaço e rotina\n- conflitos não resolvidos\n- sensação de não ser visto\n- autoimagem afetada\n\n## Como resgatar a conexão\n\nA escuta ativa e o cuidado mútuo são fundamentais. Quando cada parceiro se sente acolhido, o desejo tende a emergir com mais naturalidade.\n\n## Trabalho terapêutico\n\nA terapia ajuda a identificar bloqueios emocionais, a fortalecer a intimidade e a criar um espaço seguro para desejo e prazer.\n\nEsse caminho é construído com paciência, respeito e pequenas mudanças na convivência diária.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["desejo", "conexão emocional", "relacionamento", "saúde mental"],
  },
  {
    slug: "psicoterapia-individual-para-autoestima",
    category: "Autoestima",
    title: "Psicoterapia individual para fortalecer a autoestima",
    excerpt: "A autoestima nasce do autoconhecimento. A terapia individual é o caminho para reconhecer seu valor.",
    content: "A autoestima não é algo fixo, é construída com cuidado e reflexão. A terapia individual oferece um espaço seguro para este processo.\n\n## O que é autoestima saudável?\n\n- reconhecer seus limites\n- aceitar imperfeições sem se diminuir\n- valorizar seus esforços\n- confiar em suas escolhas\n\n## Como a terapia ajuda\n\nNa psicoterapia, exploramos histórias pessoais, crenças internalizadas e padrões de autocrítica.\n\n## Práticas que transformam\n\n- diário emocional\n- exercícios de autocompaixão\n- limites saudáveis\n- reconhecimento de conquistas\n\nEsse trabalho fortalece a relação consigo mesmo e amplia a capacidade de se relacionar com mais equilíbrio.",
    readTime: "6 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["autoestima", "psicoterapia", "autocuidado", "autoconhecimento"],
  },
  {
    slug: "psicanalise-e-sexualidade-compreendendo-desejos",
    category: "Psicanálise",
    title: "Psicanálise e sexualidade: compreendendo seus desejos",
    excerpt: "A psicanálise ajuda a olhar para os desejos sexuais e emocionais com profundidade e sem julgamento.",
    content: "A psicanálise oferece um espaço para explorar a sexualidade como parte da história pessoal e da vida afetiva.\n\n## Desejos e simbolismos\n\nOs desejos sexuais podem conter significados ligados à infância, às relações de poder e às histórias emocionais.\n\n## O olhar psicanalítico\n\nA investigação se faz a partir de associações livres, sonhos, lembranças e relações atuais.\n\n## O que é possível encontrar\n\n- conflitos entre desejo e culpa\n- limites internos rígidos\n- formas de expressão do afeto\n- padrões repetidos em relação ao prazer\n\nA psicanálise não pressiona, mas propõe um caminho reflexivo para que cada pessoa se reconheça com mais verdade.",
    readTime: "8 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    tags: ["psicanálise", "sexualidade", "desejo", "autoconhecimento"],
  },
  {
    slug: "ansiedade-e-vida-sexual",
    category: "Saúde Mental",
    title: "Como a ansiedade afeta a vida sexual e relacional",
    excerpt: "A ansiedade pode enfraquecer a intimidade. Conhecer seus sinais é o primeiro passo para cuidar melhor.",
    content: "A ansiedade impacta nossa vida sexual de forma profunda. Quando a mente está acelerada, o corpo também sofre consequências.\n\n## Sintomas na intimidade\n\n- tensão muscular\n- dificuldade de excitação\n- medo de não corresponder\n- afastamento emocional\n\n## A influência nos relacionamentos\n\nA ansiedade pode gerar evitamento, culpa e comunicação truncada, afetando o desejo e a conexão.\n\n## O papel da terapia\n\nA terapia apoia a pessoa a identificar gatilhos, regular a ansiedade e construir estratégias de enfrentamento.\n\n## Um caminho possível\n\n- foco no presente\n- diálogo com o parceiro\n- acolhimento das emoções\n- renovação do autocuidado\n\nCom orientação adequada, o corpo e a mente podem reencontrar calma e presença na intimidade.",
    readTime: "7 min",
    author: "Flaviany Leonardo",
    image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&w=1200&q=80",
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
