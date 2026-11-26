// Full project item template:
// {
//   project_id: '',
//   name: '',
//   start_date: '',
//   end_date: '',
//   summary: '',
//   banner_url: '',
//   favicon_url: '',
//   article_markdown: null,
//   github_url: '',
//   live_site_url: '',
// },

// favicon imports
import frontendMentor from '../assets/projects/frontendMentor.jpg'
import sillySoundAppLogo from '../assets/projects/silly-sound-app/sillySoundAppLogo.jpg'
import iatvLogo from '../assets/projects/iatv/iatvLogo.png'
import blackjackLogo from '../assets/projects/blackjack/blackjackLogo.png'
import terminalSweeperLogo from '../assets/projects/terminal-sweeper/terminalSweeperLogo.png'

// banner imports
import sillySoundAppBanner from '../assets/projects/silly-sound-app/sillySoundAppBanner.png'
import iatvBanner from '../assets/projects/iatv/iatvBanner.png'
import terminalSweeperBanner from '../assets/projects/terminal-sweeper/terminalSweeperBanner.png'

// markdown file imports
import qrCodeComponentMarkdown from '../content/qrCodeComponent.md?raw'
import socialLinksMarkdown from '../content/socialLinks.md?raw'
import adviceGenMarkdown from '../content/adviceGen.md?raw'
import blackjackMarkdown from '../content/blackjack.md?raw'
import calcMarkdown from '../content/calc.md?raw'
import ipTrackerMarkdown from '../content/ipTracker.md?raw'
import launchCountdownMarkdown from '../content/launchCountdown.md?raw'
import contactFormMarkdown from '../content/contactForm.md?raw'
import nullflixMarkdown from '../content/nullflix.md?raw'

export function toProjectSlug(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ADD TAGS AND STACK TOOLS

const projects = [
  {
    project_id: '00',
    name: 'EC Portfolio',
    start_date: '2023',
    end_date: 'PRESENT',
    summary: 'I utilized my skills with HTML, CSS, and JavaScript to develop my own online portfolio where I can better showcase my work. I plan for this site to be steadily built upon as I continue to grow my knowledge of this field.',
    banner_url: null,
    favicon_url: '',
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/CreightonEli.github.io',
    live_site_url: 'https://creightoneli.github.io/',
    category: 'UI & components',
    stack: [
      'react',
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '01',
    name: 'Neobrutalist Component',
    start_date: '2023',
    end_date: '',
    summary: "My attempt at replicating an interesting style I saw on the internet and gaining a better understanding of the features of CSS3. I'm pretty happy with how it came out.",
    banner_url: 'https://github.com/CreightonEli/Neobrutalism/raw/main/images/screenshot.png',
    favicon_url: '',
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/Neobrutalism',
    live_site_url: 'https://creightoneli.github.io/Neobrutalism/',
    category: 'UI & components',
    stack: [
      'html',
      'css',
    ],
  },
  {
    project_id: '02',
    name: 'QR Code Component',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the QR code component challenge on Frontend Mentor.',
    banner_url: 'https://github.com/CreightonEli/QR-code-component-FEM/raw/main/design/screenshot.png',
    favicon_url: frontendMentor,
    article_markdown: qrCodeComponentMarkdown,
    github_url: 'https://github.com/CreightonEli/QR-code-component-FEM',
    live_site_url: 'https://creightoneli.github.io/QR-code-component-FEM/',
    category: 'UI & components',
    stack: [
      'html',
      'css',
    ],
  },
  {
    project_id: '03',
    name: 'DF Dwarven Translator',
    start_date: '2024',
    end_date: '',
    summary: 'An english to Dwarven translator app that I made with Java for the simulation game Dwarf Fortress.',
    banner_url: 'https://github.com/CreightonEli/DF-Dwarven-Translator-Java/raw/main/image.png',
    favicon_url: '',
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/DF-Dwarven-Translator-Java',
    live_site_url: '',
    category: 'tools',
    stack: [
      'java',
    ],
  },
  {
    project_id: '04',
    name: 'Social Links Profile',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the social links profile challenge on Frontend Mentor.',
    banner_url: 'https://github.com/CreightonEli/Social-Links-Profile-FEM/raw/main/screenshot.png',
    favicon_url: frontendMentor,
    article_markdown: socialLinksMarkdown,
    github_url: 'https://github.com/CreightonEli/Social-Links-Profile-FEM',
    live_site_url: 'https://creightoneli.github.io/Social-Links-Profile-FEM/',
    category: 'UI & components',
    stack: [
      'html',
      'scss',
    ],
  },
  {
    project_id: '05',
    name: 'Advice Generator',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the Advice Generator App challenge on Frontend Mentor.',
    banner_url: 'https://raw.githubusercontent.com/CreightonEli/Advice-Generator-App-FEM/refs/heads/main/images/screenshot.png',
    favicon_url: frontendMentor,
    article_markdown: adviceGenMarkdown,
    github_url: 'https://github.com/CreightonEli/Advice-Generator-App-FEM',
    live_site_url: 'https://creightoneli.github.io/Advice-Generator-App-FEM/',
    category: 'web app',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '06',
    name: 'Silly Sound App',
    start_date: '2024',
    end_date: '',
    summary: "A joke web app that plays a selected audio file at random intervals. All thanks and blame to my buddy Charlie for the idea.",
    banner_url: sillySoundAppBanner,
    favicon_url: sillySoundAppLogo,
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/Silly-Sound-App',
    live_site_url: 'https://creightoneli.github.io/Silly-Sound-App/',
    category: 'web app',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '07',
    name: 'Blackjack',
    start_date: '2024',
    end_date: '',
    summary: 'I love playing card games. So, I decided to challenge myself to create one of these games for the web.',
    banner_url: 'https://creightoneli.github.io/images/projects/blackjack.png',
    favicon_url: blackjackLogo,
    article_markdown: blackjackMarkdown,
    github_url: 'https://github.com/CreightonEli/Blackjack',
    live_site_url: 'https://creightoneli.github.io/Blackjack/',
    category: 'game',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '08',
    name: 'Calc',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the Calculator App challenge on Front End Mentor.',
    banner_url: 'https://github.com/CreightonEli/calc/raw/main/images/screenshots/screenshot1080.png',
    favicon_url: frontendMentor,
    article_markdown: calcMarkdown,
    github_url: 'https://github.com/CreightonEli/calc',
    live_site_url: 'https://creightoneli.github.io/calc/',
    category: 'web app',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '09',
    name: 'IP Tracker',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the IP Address Tracker Challenge on Frontend Mentor.',
    banner_url: 'https://github.com/CreightonEli/ip-tracker/raw/main/images/screenshots/screenshotDesktop.png',
    favicon_url: frontendMentor,
    article_markdown: ipTrackerMarkdown,
    github_url: 'https://github.com/CreightonEli/ip-tracker',
    live_site_url: 'https://creightoneli.github.io/ip-tracker/',
    category: 'web app',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '10',
    name: 'Launch Countdown',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the launch countdown challenge on Frontend Mentor.',
    banner_url: 'https://github.com/CreightonEli/launch-countdown/raw/main/images/screenshots/screenshotDesktop.png',
    favicon_url: frontendMentor,
    article_markdown: launchCountdownMarkdown,
    github_url: 'https://github.com/CreightonEli/launch-countdown',
    live_site_url: 'https://creightoneli.github.io/launch-countdown/',
    category: 'UI & components',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '11',
    name: 'Contact Form',
    start_date: '2024',
    end_date: '',
    summary: 'My solution to the contact form challenge on Frontend Mentor.',
    banner_url: 'https://github.com/CreightonEli/contact-form-FEM/raw/main/assets/images/screenshotDesktop.png',
    favicon_url: frontendMentor,
    article_markdown: contactFormMarkdown,
    github_url: 'https://github.com/CreightonEli/contact-form-FEM',
    live_site_url: 'https://creightoneli.github.io/contact-form-FEM/',
    category: 'UI & components',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '12',
    name: 'IATV',
    start_date: '2024',
    end_date: '2025',
    summary: "Internet Archive TV. A perhaps overly simplistic web app specifically for browsing the internet archive's video media.",
    banner_url: iatvBanner,
    favicon_url: iatvLogo,
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/iatv',
    live_site_url: 'https://creightoneli.github.io/iatv/',
    category: 'web app',
    stack: [
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '13',
    name: 'Nullflix',
    start_date: '2025',
    end_date: 'Present',
    summary: "I saw someone build a similar project and wanted to try it myself. I used this as a learning opportunity to practice my React skills. I also wanted to try out Vite as a build tool, which I found to be very fast and efficient.",
    banner_url: 'https://raw.githubusercontent.com/CreightonEli/notflix/main/src/assets/horizontal.png',
    favicon_url: 'https://github.com/CreightonEli/notflix/blob/main/src/assets/logo_small_shadow.png?raw=true',
    article_markdown: nullflixMarkdown,
    github_url: 'https://github.com/CreightonEli/notflix',
    live_site_url: 'https://nullflix.vercel.app/',
    category: 'web app',
    stack: [
      'react',
      'html',
      'scss',
      'js',
    ],
  },
  {
    project_id: '14',
    name: 'Terminal Sweeper',
    start_date: '2025',
    end_date: '2026',
    summary: 'Minesweeper game with a computer terminal aesthetic.',
    banner_url: terminalSweeperBanner,
    favicon_url: terminalSweeperLogo,
    article_markdown: null,
    github_url: 'https://github.com/CreightonEli/minesweeper',
    live_site_url: 'https://creightoneli.github.io/minesweeper/',
    category: 'game',
    stack: [
      'react',
      'html',
      'css',
      'ts',
    ],
  },
];

export default projects;
