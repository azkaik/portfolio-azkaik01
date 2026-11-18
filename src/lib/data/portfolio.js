export const HERO_DATA = {
  greeting: 'I am',
  name: 'Azkaik',
  subtitle: 'animator / programmer',
  highlights: [
    'Mentor Animasi — ICC 2026 (Juara 3)',
    'Juara Inovasi Animasi — ICC 2025',
    'Peneliti Muda Lapangan — YFSC',
  ],
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Profile', href: '#profile' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const MENU_GROUPS = [
  {
    index: '01.',
    title: 'EXPLORE',
    subtitle: 'Beranda, Tentang & Perkenalan',
    items: [
      {
        label: 'BERANDA',
        description: 'Poster Hero & 3 sorotan utama',
        href: '#top',
        external: false,
      },
      {
        label: 'ABOUT ME',
        description: 'Latar belakang, minat teknologi & sains',
        href: '#about',
        external: false,
      },
    ],
  },
  {
    index: '02.',
    title: 'PROFILE',
    subtitle: 'Pengalaman, Pendidikan, Software & Skills',
    items: [
      {
        label: 'EXPERIENCE',
        description: 'Mentor ICC 2026, YFSC & Juara Inovasi ICC 2025',
        href: '#experience',
        external: false,
      },
      {
        label: 'EDUCATION',
        description: 'Jaz Academy & Jaz Courses',
        href: '#education',
        external: false,
      },
      {
        label: 'SOFTWARE & SKILLS',
        description: 'MOHO, Adobe Animate, Clip Studio Paint, Krita & 10 Skills',
        href: '#software',
        external: false,
      },
    ],
  },
  {
    index: '03.',
    title: 'LEARNING JOURNEY',
    subtitle: 'Skill & Learning Frontend, Git & AI',
    items: [
      {
        label: 'LEARNING JOURNEY',
        description: 'Jaz Academy, GIT Courses, Udemy & WPU Courses',
        href: '#learning',
        external: false,
      },
    ],
  },
  {
    index: '04.',
    title: 'CONTACT & SOCIALS',
    subtitle: 'Instagram, Email, WhatsApp & Lokasi',
    items: [
      {
        label: 'CONTACT SECTION',
        description: 'Salin email & informasi kontak Tasikmalaya',
        href: '#contact',
        external: false,
      },
      {
        label: 'INSTAGRAM',
        description: '@azkaik01',
        href: 'https://instagram.com/azkaik01',
        external: true,
      },
      {
        label: 'WHATSAPP',
        description: '+62-896-5775-5757',
        href: 'https://wa.me/6289657755757',
        external: true,
      },
      {
        label: 'EMAIL',
        description: 'azkaik@jazacademy.id',
        href: 'mailto:azkaik@jazacademy.id',
        external: true,
      },
    ],
  },
]

export const ABOUT_TEXT =
  'Saya adalah siswa kelas 9 Home Schooling yang memiliki ketertarikan tinggi pada dunia teknologi, pemrograman, dan sains. Aktif mengembangkan konten digital edukatif seputar coding (Python, pembuatan game, dan pengembangan web), mengeksplorasi proyek lunak, serta melakukan penelitian ilmiah sederhana. Berpengalaman berkomunikasi aktif dalam bahasa Inggris, senang berdiskusi kritis, dan selalu antusias menyampaikan ide-ide teknis dengan cara yang mudah dipahami dan menarik.'

export const EXPERIENCES = [
  {
    title: 'Mentor Animasi — Indonesia Creative Competition',
    period: '2026',
    description:
      'Membimbing peserta selama persiapan ICC 2026, mulai dari perancangan konsep hingga pengembangan proyek, hingga mentee berhasil meraih Juara 3.',
    accent: 'indigo',
  },
  {
    title: 'Peneliti Muda Lapangan — Young Forest Scientist',
    period: '2026–Sekarang',
    description:
      'Mengumpulkan data, menguraikan temuan, dan menyusun laporan penelitian ilmiah tentang kehutanan.',
    accent: 'cyan',
  },
  {
    title: 'Juara Inovasi Animasi — Indonesia Creative Competition',
    period: '2025',
    description:
      'Merancang dan memproduksi karya animasi kreatif dengan memadukan pengembangan media digital serta teknik visual storytelling yang interaktif.',
    accent: 'indigo',
  },
]

export const EDUCATION = [
  {
    institution: 'Jaz Academy',
    focus: 'Programming & Animationing',
    period: '2024–2026',
  },
  {
    institution: 'Jaz Courses',
    focus: 'Editing & Design',
    period: '2025–2026',
  },
]

export const SKILLS = [
  'Film & Editing Techniques',
  'Cinematography',
  'Video Editing',
  'Animation',
  'Color Correction & Grading',
  'Audio Editing & Mixing',
  'Programming',
  'Visual Communication',
  'Multimedia Design',
  'Video Production',
]

export const SOFTWARE = [
  'MOHO',
  'ADOBE ANIMATE',
  'CLIP STUDIO PAINT',
  'KRITA',
]

export const LEARNING_JOURNEY = {
  eyebrow: 'Skill & Learning',
  title: 'Learning Journey',
  subtitle:
    'I am constantly learning and improving my skills in frontend development. Here are some of the technologies and frameworks I am currently learning:',
  items: [
    {
      title: 'Jaz Academy',
      description:
        'Learning frontend development through Jaz Academy, focusing on modern web technologies and best practices.',
      iconKey: 'code',
    },
    {
      title: 'GIT Courses | Video Editing',
      description:
        'Learning version control and collaboration using Git, as well as enhancing my skills in video editing for creating engaging content.',
      iconKey: 'git',
    },
    {
      title: 'Udemy Courses | Web Programming',
      description:
        'Taking online courses on Udemy to deepen my understanding of web programming and frontend development.',
      iconKey: 'web',
    },
    {
      title: 'WPU Courses | AI Engineering',
      description:
        'Learning GraphQL for efficient API development and data fetching.',
      iconKey: 'ai',
    },
  ],
}

export const CONTACT_INFO = {
  instagram: {
    handle: '@azkaik01',
    url: 'https://instagram.com/azkaik01',
  },
  email: {
    address: 'azkaik@jazacademy.id',
    mailto: 'mailto:azkaik@jazacademy.id',
  },
  whatsapp: {
    display: '+62-896-5775-5757',
    url: 'https://wa.me/6289657755757',
  },
  location: 'Tasikmalaya, Indonesia',
}
