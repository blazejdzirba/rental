# Full App Blueprint

> Generated automatically from the current Astro project.

## Purpose

This file contains the current application source code and relevant configuration needed to understand and rebuild the website.

## Project root

`/home/blaise/rental`

## Included files

- `astro.config.mjs`
- `package-lock.json`
- `package.json`
- `public/robots.txt`
- `src/components/ArticleCard.astro`
- `src/components/BaseHead.astro`
- `src/components/CategoryCard.astro`
- `src/components/Footer.astro`
- `src/components/FormattedDate.astro`
- `src/components/Header.astro`
- `src/components/HeaderLink.astro`
- `src/components/HeroVisual.astro`
- `src/components/Navbar.astro`
- `src/components/ProjectCard.astro`
- `src/components/SectionHeading.astro`
- `src/components/ToolCard.astro`
- `src/consts.ts`
- `src/content.config.ts`
- `src/content/blog/ile-placisz-za-saas.md`
- `src/content/blog/jak-podpiac-beds24-do-telegrama.md`
- `src/content/blog/licencje-open-source-dla-hostow.md`
- `src/content/blog/sync-kalendarzy-ical-za-darmo.md`
- `src/content/kursy/pierwsze-kroki-w-automatyzacji.md`
- `src/content/kursy/szablon-cennika-dynamicznego.md`
- `src/content/programy/beds24-telegram-bot.md`
- `src/content/programy/ical-cleaner.md`
- `src/content/wideo/pierwsze-kroki-w-automatyzacji.md`
- `src/content/wideo/szablon-cennika-dynamicznego.md`
- `src/data/tools.json`
- `src/layouts/BlogPost.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/layouts/Layout.astro`
- `src/pages/404.astro`
- `src/pages/about.astro`
- `src/pages/automatyzacja.astro`
- `src/pages/blog/[...slug].astro`
- `src/pages/blog/index.astro`
- `src/pages/index.astro`
- `src/pages/kontakt.astro`
- `src/pages/kursy/index.astro`
- `src/pages/narzedzia/index.astro`
- `src/pages/programy/index.astro`
- `src/pages/rss.xml.js`
- `src/pages/wideo/index.astro`
- `src/styles/global.css`
- `tsconfig.json`

---

# Source files

## `astro.config.mjs`

```javascript
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  vite: {
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
});
```


---

## `package-lock.json`

```json
{
  "name": "rental",
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "rental",
      "version": "0.0.1",
      "dependencies": {
        "@astrojs/markdown-satteri": "^0.4.0",
        "@astrojs/mdx": "^8.0.0",
        "@astrojs/rss": "^4.0.19",
        "@astrojs/sitemap": "^3.7.4",
        "@tailwindcss/vite": "^4.3.3",
        "astro": "^7.3.1",
        "sharp": "^0.35.0",
        "tailwindcss": "^4.3.3"
      },
      "engines": {
        "node": ">=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding/-/compiler-binding-0.4.0.tgz",
      "integrity": "sha512-x2RjDUuWfwLNtc3mjAdSRInwqh/rqbLar9cm/5FOMbHvmYZB7yfKewzSclAxWjIZsypJDXv1lhaP2WG+P8TK3g==",
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@astrojs/compiler-binding-darwin-arm64": "0.4.0",
        "@astrojs/compiler-binding-darwin-x64": "0.4.0",
        "@astrojs/compiler-binding-linux-arm64-gnu": "0.4.0",
        "@astrojs/compiler-binding-linux-arm64-musl": "0.4.0",
        "@astrojs/compiler-binding-linux-x64-gnu": "0.4.0",
        "@astrojs/compiler-binding-linux-x64-musl": "0.4.0",
        "@astrojs/compiler-binding-wasm32-wasi": "0.4.0",
        "@astrojs/compiler-binding-win32-arm64-msvc": "0.4.0",
        "@astrojs/compiler-binding-win32-x64-msvc": "0.4.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-darwin-arm64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-darwin-arm64/-/compiler-binding-darwin-arm64-0.4.0.tgz",
      "integrity": "sha512-ZVUwHundaQyFNjE6uoa0usaC0WOCitDCLS/4mdb4rOiJXwVUuKJBMxI5WMzXLWmamsXtK/Z//ifLXvV5Yeh4Hw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-darwin-x64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-darwin-x64/-/compiler-binding-darwin-x64-0.4.0.tgz",
      "integrity": "sha512-FI6G8AY8u6fR1SI/QRR5yGMwtvZwP34CDmZpZ5HwJGa50UM1VISTLhqkhV4a476pmgd25X1Aur2dqw6hUnrlKA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-linux-arm64-gnu": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-linux-arm64-gnu/-/compiler-binding-linux-arm64-gnu-0.4.0.tgz",
      "integrity": "sha512-lB9gLFJK7m82EnjaU8nlRBEfcwGNeHidW3sSjODTUjMNaoewVuUz9fwwdY5M4jiSXIqWLH3yl6TX8FTDKA74Sw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-linux-arm64-musl": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-linux-arm64-musl/-/compiler-binding-linux-arm64-musl-0.4.0.tgz",
      "integrity": "sha512-HPbvWqbxFxyaoQJhLxCaSjtYBx9KBo7JGVzEFZCmMl968a2PsSH0UfiODYgYPXofTOIsIH2aoCcrHXML0IA3ig==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-linux-x64-gnu": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-linux-x64-gnu/-/compiler-binding-linux-x64-gnu-0.4.0.tgz",
      "integrity": "sha512-tQKolMxoJ/+0AmLWm1PmJ/i+z3i10ZU1bNuVjEDulCf48azEMtUNjTZgHJ5MPtpYRNc7dlETr8QujUfduzoC7Q==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-linux-x64-musl": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-linux-x64-musl/-/compiler-binding-linux-x64-musl-0.4.0.tgz",
      "integrity": "sha512-5v5YymudsxMHp3NBLCS8BUlu5CRqeLtWD9cKS/4nIhIEHCbpz9okmVV6I0HWqmBAPhWYcDa3vw/vltYPrOQCTA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-wasm32-wasi": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-wasm32-wasi/-/compiler-binding-wasm32-wasi-0.4.0.tgz",
      "integrity": "sha512-m/phuH3x3PREvv1OnkM44NoPh4MatUadix1fB1u5SvMLCyDTUZykDJbKnWf1cjnYmHdlB8HcjTjl6JrCqAIXcw==",
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^1.2.2"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-win32-arm64-msvc": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-win32-arm64-msvc/-/compiler-binding-win32-arm64-msvc-0.4.0.tgz",
      "integrity": "sha512-B9zYf3okEY83kM8gydlpH2BHP00w4ifxPqlYlWrgTwuD6wnkrJDCwBlgy1q31cERjCJRXN1lrE2VmkLvFjv/6g==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-binding-win32-x64-msvc": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-binding-win32-x64-msvc/-/compiler-binding-win32-x64-msvc-0.4.0.tgz",
      "integrity": "sha512-zB0Nrv0dGc0zZWPGDRmmETTPhDRqyZjAjk+gWMlVrJX5U89obpB3VUUE1ZiHxOCN5LQojeLK6O8L/dnoHolvNQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@astrojs/compiler-rs": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler-rs/-/compiler-rs-0.4.0.tgz",
      "integrity": "sha512-koVikeon1kreEy+/JzLQRy3vzHHQVOjycs4degg4vFufKApZOwMZvSSAEztYNhmcQVfNVsVZZI4cEge3cexAbQ==",
      "license": "MIT",
      "dependencies": {
        "@astrojs/compiler-binding": "0.4.0"
      },
      "engines": {
        "node": ">=22.12.0"
      }
    },
    "node_modules/@astrojs/internal-helpers": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@astrojs/internal-helpers/-/internal-helpers-0.11.0.tgz",
      "integrity": "sha512-3rzxJ+xbo0+8YyqOzLziIN32wmsHdCjEVz2sGOpRxJ+Ben/KiLph4ItxBy1abEL+E8fkRzqjg0rfXmaHJGw9JA==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.4",
        "@types/mdast": "^4.0.4",
        "js-yaml": "^4.3.0",
        "picomatch": "^4.0.4",
        "retext-smartypants": "^6.2.0",
        "shiki": "^4.0.2",
        "smol-toml": "^1.6.0",
        "unified": "^11.0.5"
      }
    },
    "node_modules/@astrojs/markdown-satteri": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@astrojs/markdown-satteri/-/markdown-satteri-0.4.0.tgz",
      "integrity": "sha512-wykOOW9KsUVcZweOpY/CeXpdKcCKZy6fQbdcteWFuI75+sQCiqxYM7VKsGa5b+aGl3cYQscFY37rsbbyal5MRw==",
      "license": "MIT",
      "dependencies": {
        "@astrojs/internal-helpers": "0.11.0",
        "@astrojs/prism": "4.0.2",
        "github-slugger": "^2.0.0",
        "satteri": "^0.10.3"
      }
    },
    "node_modules/@astrojs/mdx": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/@astrojs/mdx/-/mdx-8.0.0.tgz",
      "integrity": "sha512-4I/z+VgUO0B9I/+yhzIEpLyBYQZNJsInmrtqClP4lqX9yvUpbuV72zfRTZ8VqJLKABETUE5CYOl+23va8nqxZg==",
      "license": "MIT",
      "dependencies": {
        "@astrojs/internal-helpers": "0.11.0",
        "@astrojs/markdown-satteri": "0.4.0",
        "es-module-lexer": "^2.0.0"
      },
      "engines": {
        "node": ">=22.12.0"
      },
      "peerDependencies": {
        "@astrojs/markdown-remark": "^7.3.0",
        "@astrojs/markdown-satteri": "^0.4.0",
        "astro": "^7.2.6"
      },
      "peerDependenciesMeta": {
        "@astrojs/markdown-remark": {
          "optional": true
        }
      }
    },
    "node_modules/@astrojs/prism": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@astrojs/prism/-/prism-4.0.2.tgz",
      "integrity": "sha512-KTivpmnz6lDsC6o9H4+DNm2SrE/GHzw8cNAvEJwAvUT+eoaEnn/4NtbDNfRRaxaJHdp15gf+tfHAWiXR4wB3BA==",
      "license": "MIT",
      "dependencies": {
        "prismjs": "^1.30.0"
      },
      "engines": {
        "node": ">=22.12.0"
      }
    },
    "node_modules/@astrojs/rss": {
      "version": "4.0.19",
      "resolved": "https://registry.npmjs.org/@astrojs/rss/-/rss-4.0.19.tgz",
      "integrity": "sha512-e+z5wYeYtffQdHQO8c2tkSd2JEBdAuRXJV4ZEU5IxkYeE6e39woDd7nw1PH1Kk2tEYNCYuKdylnnbhGmt61awA==",
      "license": "MIT",
      "dependencies": {
        "fast-xml-parser": "^5.5.7",
        "piccolore": "^0.1.3",
        "zod": "^4.3.6"
      }
    },
    "node_modules/@astrojs/sitemap": {
      "version": "3.7.4",
      "resolved": "https://registry.npmjs.org/@astrojs/sitemap/-/sitemap-3.7.4.tgz",
      "integrity": "sha512-LbKNC24bdUWcQf/pThB6qLlSqHojxGjZDURIzFocY8rlWnAn2t74nnhnK6S5x0NHriHoAduLEpVjRykmeGiVvA==",
      "license": "MIT",
      "dependencies": {
        "sitemap": "^9.0.0",
        "zod": "^4.3.6"
      }
    },
    "node_modules/@astrojs/telemetry": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@astrojs/telemetry/-/telemetry-3.3.3.tgz",
      "integrity": "sha512-C1TLn5sPJr0x4vk56piHWKbnqlEB8BKyte5Y45V02U+D7BGO5eMqZDH5aPjnkXQWJggvmsTXxH03QMZ9NgWLzQ==",
      "license": "MIT",
      "dependencies": {
        "ci-info": "^4.4.0",
        "dset": "^3.1.4",
        "is-docker": "^4.0.0",
        "package-manager-detector": "^1.6.0"
      },
      "engines": {
        "node": "18.20.8 || ^20.3.0 || >=22.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.8.tgz",
      "integrity": "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==",
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@bruits/satteri-darwin-arm64": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-darwin-arm64/-/satteri-darwin-arm64-0.10.5.tgz",
      "integrity": "sha512-27KTVl4TJkVahMy/ohyA7qd4938G5UNneFUz/PsScYfpIhj0IVAS23mpcJXdPF44sa6nva198lmV/cKIb2YPyA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@bruits/satteri-darwin-x64": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-darwin-x64/-/satteri-darwin-x64-0.10.5.tgz",
      "integrity": "sha512-IjnLe3nKspq6qaeqGgjT7MT8VrTV74yWRlaag7ZdNsI8TDAYZ0iPxMCo+9KQZHUk5EyVB+reBI/PFWL5KuFw9Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@bruits/satteri-linux-arm64-gnu": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-linux-arm64-gnu/-/satteri-linux-arm64-gnu-0.10.5.tgz",
      "integrity": "sha512-glkYXZCJywjP13v67eAyAMSJdF+ncvEbYvgi/wOtffL9tQ27lr/zsyzUfgs+ovjJ9d8JNQKiXeiArJcX8PJL9w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@bruits/satteri-linux-arm64-musl": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-linux-arm64-musl/-/satteri-linux-arm64-musl-0.10.5.tgz",
      "integrity": "sha512-yWdgG1g17Nh2QyGVlFUxGRa3FEFwiMcpZEyMNWkbM3deC94cmVc+/i9OuyFpdKuWo3GkgoCtYVOoxk1uCnCZIA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@bruits/satteri-linux-x64-gnu": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-linux-x64-gnu/-/satteri-linux-x64-gnu-0.10.5.tgz",
      "integrity": "sha512-FVaLoPT1fBgGl0J+AYebyyXJYBachGl8Oyyrf1lye4RTqCB4S0Gwkj1uM9RJyThUOvx5VUmAT1CnNh1SFHA+kw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@bruits/satteri-linux-x64-musl": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-linux-x64-musl/-/satteri-linux-x64-musl-0.10.5.tgz",
      "integrity": "sha512-EHpVAx2bqW3GINHTKkljtxVfQmVDGWIuwOYOP5YghTj+0PkBa2o8oKPRtQ9Kbsr1Fye8jtUcDjhwj2jMNugZKg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@bruits/satteri-wasm32-wasi": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-wasm32-wasi/-/satteri-wasm32-wasi-0.10.5.tgz",
      "integrity": "sha512-ypz8c/Zmipxp4IoeDa228Gstv6TLzVmNs3yC6wKCoNSOjx1iwpgzu87Y3hTkXFdwChVGU85qeUDuOIarGUZQLw==",
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.11.1",
        "@emnapi/runtime": "1.11.1",
        "@napi-rs/wasm-runtime": "^1.2.3"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@bruits/satteri-wasm32-wasi/node_modules/@emnapi/core": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.11.1.tgz",
      "integrity": "sha512-RSvbQmHzdKzNsLYa/wHrbc3KN4sYLKAdPZxqiM2HATqv/SBk2/ENSHpvXGaLOMcsAyz0poEGqkmmKYG3OWiJEQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.2",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@bruits/satteri-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.1.tgz",
      "integrity": "sha512-vgj7R3y3Wgx24IQaGPA/R6YFXLHVMOZ0uVEyIQPaWs+rd1AzfEMXlAC22FYwO1XkKR6NPsq7mUandH8oIRdZFw==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@bruits/satteri-wasm32-wasi/node_modules/@emnapi/wasi-threads": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.2.tgz",
      "integrity": "sha512-c95qOXkHdydNKhscBTebqEC1CVAZpyqOfVfBzQ1qgzyl3gfeldUjIggDbIZgDKsHLgnsM+igH7TJ/eAasaVuMA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@bruits/satteri-win32-arm64-msvc": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-win32-arm64-msvc/-/satteri-win32-arm64-msvc-0.10.5.tgz",
      "integrity": "sha512-siTV88nb0LRqNpkL2gXboqCwVdq95sLtzMHS1/3eONV2gLbB3NAK46wmSMvCO/yquBvI2lvaFIfd8P12ecsxBw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@bruits/satteri-win32-x64-msvc": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/@bruits/satteri-win32-x64-msvc/-/satteri-win32-x64-msvc-0.10.5.tgz",
      "integrity": "sha512-C3IfPvfvMXmlzBxaMPKFS1XiuV9pu2mC7YqkPk7PSvTgPZ8gbdASIpHpztDLvTTQjqZ0z1Ol8tK5X+V6XXC0wQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@capsizecss/unpack": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@capsizecss/unpack/-/unpack-4.0.1.tgz",
      "integrity": "sha512-CuNiSqg7+e1cO/GjffyMOm5Tt2jUF9CWHHnvQ/UkqvtkGfHdgwEC0wpmq7fkN3gxwpRnrAN0WzO3vREKmNolMQ==",
      "license": "MIT",
      "dependencies": {
        "fontkitten": "^1.0.3"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@clack/core": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@clack/core/-/core-1.5.0.tgz",
      "integrity": "sha512-zNikCcd8BbcEvzzG1sbXFrRHFk5kHPrpwZwksPvf9qyQO1Teb7JaXaOAxXZei9nZLDW0gaZawiuTCji88bTBhw==",
      "license": "MIT",
      "dependencies": {
        "fast-wrap-ansi": "^0.2.0",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 20.12.0"
      }
    },
    "node_modules/@clack/prompts": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/@clack/prompts/-/prompts-1.8.0.tgz",
      "integrity": "sha512-PXzLZ8N34rxmuo4dJg3xtOXhcBse94qGjDqsteoEYrFrrZ5FSjIGwMAuOcv64ln8rHVBBD06XeVGr+/JX+plcA==",
      "license": "MIT",
      "dependencies": {
        "@clack/core": "1.5.0",
        "fast-string-width": "^3.0.2",
        "fast-wrap-ansi": "^0.2.0",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 20.12.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.11.3.tgz",
      "integrity": "sha512-zLpS5asjEb7lq8jYLq37N6XKaE41DIexlY1rF/z4/tIl3wo13Sqm28fRyfIsKZD+NZ8mM5RoKkpW/rBcuoSZSg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.3.tgz",
      "integrity": "sha512-ELEBe8PsLvvJ6QMr0zLt8ffvOHW/dc1m3CEzNMg7aJUv3bMaoDtw2TXyDAwkYBuroxxuHEwhRTLJSe5sya547g==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.28.2.tgz",
      "integrity": "sha512-XExcO+dvLKvVtNTibSTBej1NCAbaGhWn9Ww1ZPx80qsahhPFe/8jgWP0IchNe0F3HwkU7n8ejhH8bjonqht8mQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.28.2.tgz",
      "integrity": "sha512-kXXoiPVVGQcnIYGOeaovwOURpniDBpSq4A03qkQ+BMQqtGG6HYap3xne9C1O1yo4TR3qxlCX5IqqmX6fFo2Lqg==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.28.2.tgz",
      "integrity": "sha512-5YfKeeI8qWfBZIX+u2xZC3Zlb3Os/gLS2sbEKM+I4ZOcsWmHS2WLysCcQZDAFRslDUU5Oiq44gf6PYN1vGwG5A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.28.2.tgz",
      "integrity": "sha512-O387ite7SzUyCcy3JQX4P4bLtEA7bLLkx+esve5JHnyYfNTxcVpXZo9jhdB0lTKN44gztELTdU7nS8Nr16Fs1Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.28.2.tgz",
      "integrity": "sha512-n4KqkOQrraxHJcgjM1RvwbigfQKIKJVpM7xp+KsxiyUSrRdIXnt73VhrPAx0fV44hgfmIVKjxMN9J1t5jySVkw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.28.2.tgz",
      "integrity": "sha512-uq6suIWYP37qzGddBKPw5QEQPi6HiLGsO7UmkpfyaYNQ3D+rN6w6WfwH+nuqcGXWvawGwxOEroO4YGnFh95azw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.28.2.tgz",
      "integrity": "sha512-n+I0BTSRIoy+d6RPKnEVwql5UwBJolytvY4mAOIEJorKlqgPII8ix6slVVrfZ5Tnj7glIZvloylbB/EJPMWEXw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.28.2.tgz",
      "integrity": "sha512-78XJTJkvPs0kz2w61301PJjXl4g7q3JqiYMZ/M/yVI73EHBrCRTgkhu9oqG7vPqq+a/yadEW8aD+agKlk5xrmg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.28.2.tgz",
      "integrity": "sha512-XlDnu2q5yoqems+xay6wSAcg9DDD7K9RLKZEBOMZm3ckNpJBvOX20tSfby8KfrrhINDyv9V2YVZKY/SpoGJI8w==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.28.2.tgz",
      "integrity": "sha512-pW4AC0P3it8c7do9MVM4p51FzHzdM/TZrerurgRcHJ2WTa1VQ1CIq18xncfpBJw4ojkiZZrKW2yIBWBP92j6Ug==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.28.2.tgz",
      "integrity": "sha512-CYbnj78HsIeA+DhgUKgFCfvNsTHFhMMrinUrMZpDXJXKN8T3XViTZ/+wtHeVxEWY8ewSzTFN+nRmSwO2tZaLUQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.28.2.tgz",
      "integrity": "sha512-buwkd8nsph4R+ajRvw0qM5Hja/TXQow3ptzWO2EbG/cqcIkHloRrdlBtQlshyYGTNFvfkfJ5tpPLVkY4DtsPfQ==",
      "cpu": [
        "loong64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.28.2.tgz",
      "integrity": "sha512-ZVykbDyk7519VwiNb9Lcj9m8XM6v5V9uKPvrEMkkEedVewf+0itkhahp4HDpgERXhwLRpWFypsGbG/J8s0QjJA==",
      "cpu": [
        "mips64el"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.28.2.tgz",
      "integrity": "sha512-CAXl+Dtd9UUuJd8pKKdwh6MLm3MUMiqMPmhZ3tTSXPqfyQ3vDl6R5hZdZ/kYojK4ofXtdfSv1tFq8XzWx3heNQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.28.2.tgz",
      "integrity": "sha512-GeXCej4IQtU1B+QlDV8W/RRvbzI3O/Stss+/bCXv4lZls5WGRtu2a+3JkA3i4qIUlMXpcHebWpF8AkJhATowuA==",
      "cpu": [
        "riscv64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.28.2.tgz",
      "integrity": "sha512-3H1weTYZPxt/WOhByszQZybS9w5lKzUn1FDMsgEChbHWQwHYQQRfBxgCcZvPhjHfKyJjIievvMmEUawJrdY9Dg==",
      "cpu": [
        "s390x"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.28.2.tgz",
      "integrity": "sha512-4xTZr1FUmSoQW4XIWmit3tzQrUTZM+N3P0XV8xROKYF50XfI7xeO90+1bZvNwxIufQ9hDQVRJH5YhgPVF8A/HQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-sSATRjPeDBg3pdgHoQfoYBob11Kk1FGa9lui5RIHZCoCkJa9QKlvl3/vKz2usCmYYjs7ymJR/2Nnsqe+Hjt5nw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.28.2.tgz",
      "integrity": "sha512-lqnzCV+mM0gIADaKihiCg6ifgfU2L3h5E33rNQBN1Y4MaVGnzryzmvvf7UHxprpQdE8hpqLolJ9Rl+SkIRDpyw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-AL2qJILH7lNjrDmCQDvdxMfAUIv8KMNZOvrwAQ8i8//ntL9FflhOyMJ8OZSMBb8/AWXe3/5v5S20y3zCoZWKoQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.28.2.tgz",
      "integrity": "sha512-QtiuPytchRyC4rwUKhexJdQKvDuZ6hWloi3igqPQNUJCS1/v9EiO3UTOXR6A3FoMo4fnAKbWJdqaIwhOzh8qEw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.28.2.tgz",
      "integrity": "sha512-WkhYDmpTjLvGlScA1rwjRUmhl4k8oXR3cIbtqWmELgU/dFeHHlEllxDvdWcNJV9rbzCexB5vz8gtNewWLgCT7Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.28.2.tgz",
      "integrity": "sha512-GPMSkTOtMnv2U2F8gxe4Io6qmVs+YKyp832Etqqxr0hFngmXQ3rzwytelm3GIn7T4VviRUlf3sOgBOiTdvaf7g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.28.2.tgz",
      "integrity": "sha512-PIhhEkE9uPBleRBrQEJpUn7MBnibZzbGzYWPmY3x+YoVg/95zbjB4CxPPOQ8l5tYYM4mMaCthF8/1DIfBQQyWQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.28.2.tgz",
      "integrity": "sha512-YmJbfTlvU7Sdn9BB+4PRES4oB6pxgS37MAONj+hBr/cpXS1aBPKXxNnDbu+QCWPj0o9dgyxeq79g6c5P8KeuYA==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.28.2.tgz",
      "integrity": "sha512-5ebpxr3nWMzrL/rnUI755Jkuee0bHL/Gq0WTF9lvcpv73wAp5eu8MfBUgWK9bhWvZjj7yX8etf/8tI8Ney695g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.4.tgz",
      "integrity": "sha512-Uhfl4V4lhP2nbUVF9+hyH1+luj86f1gUFeo8ALYxFoULoU+G87D43BfeMP8XHsk9boxAnCY/bf2EHwhA7MuGsA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.4.tgz",
      "integrity": "sha512-hWniXY3bG5qKpkKrAwPe4y+VTPmf086YQAnkxWh7uA1YrlRouWGa0M0Mxj3ZjnXFkv7/TD1bTy9lGUK26vRvWw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.4.tgz",
      "integrity": "sha512-lIsKw/BU+kjB4eZjxrYrZmwOJYi3Ajrv66iAlBmUPyKc3HpnloevB1g3wxGD9P/5BbQ1brBGl65VRRrCvQDEqA==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.3.tgz",
      "integrity": "sha512-suTBPTDGrI9WodccaDdwZItTSaBYASlBk1NSfElSHrUfzu3szG6lvIF58+WiFvnfzuK8ZBFS5zE00PxqxnRiPg==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.3.tgz",
      "integrity": "sha512-FVJZ5mITMobmXIz/hPDTw0EintTW5H3WfrxwLqEqjiIihlu+hVRyGrFQ60xl0Lxn7Bt3zdpevPaQi0HEzqz9fw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.3.tgz",
      "integrity": "sha512-3rbU4vqXXc3hY/OiXdl52xZvT0F1yEngWfvqudtPJg/KkyiaQw2DRsFrNzpmLvfavbwOq3qXn36GP8obHRULQA==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.3.tgz",
      "integrity": "sha512-0DaL0A6Xu6sQSQFwe4iVCrKWU2cCTItnRsYsCdxAMm9NF6twAA9BKnoqy4hqz4+azQ0JHuA26qiUKsf1XJ/v5A==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.3.tgz",
      "integrity": "sha512-cdn1OvUBwsXhbC0zSzJnNzf5MZ/mTrobawDvNXBTxe8VtqKAm0sRuEY2Evzovb/w9JMk4TvRxqt1mekSuJz64w==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.3.tgz",
      "integrity": "sha512-HjPVx7yKz+0lqdhDlTw1tt90wamBoxhiXpvl1XZpJLiHH4RCJ5yDTqH+VlYPv2fwFs89JFw4c1IexYOcQUi4IQ==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.3.tgz",
      "integrity": "sha512-neWLh+3yCNThxnfy3c4BbVBeGgt9aftno+XbT56iK28RgeDs3UOFWviLWlUu0bArYVYJaFDK+RRohbicUNCm8Q==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.3.tgz",
      "integrity": "sha512-4vKmvAst9nrowcqquKFAyZJUDolUaIp8uRiN0mWFguJ1IplC9/pitXtlnnlU4aa/eJw3J7i67V+pwUL+wZGdsA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.3.tgz",
      "integrity": "sha512-Y9kQaLMuNoB0bPYOOdcZMaseNrFpPodIWWMrx+CZyydf2xn68j9WYc6sWWRrDwNkzCQjKYfc68L7jKjGlHMibw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.3.tgz",
      "integrity": "sha512-fj8Mv0HHfD1Rr+4I68+3agJynxDWtBFgicTbSOb9Bke6pIwzGcJ+RX/yHjmiEGFMCavY/dxvem7MyNaJF+wDiw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.4.tgz",
      "integrity": "sha512-7OAS8gI0EReKGVN2HssHlM6umJgxF5VI3xN0p9FA91p/YO+ou5hiNghLdZ5BEHztwaaK5+bLKRf8x/o2L2nk9A==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.4.tgz",
      "integrity": "sha512-De4jpEnAU8Hd5oT0j1G3uL4ZvTuipVMn7YC6vPaJhy6/7EwEae0SVAoBrUMYQbkLGDm85taVWwuPc1a44LTzCQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.4.tgz",
      "integrity": "sha512-2oYZJeIl4kCcMGk4ouZVjnkCtFrpQFlNEtJ6GbxzhHQchwH0NH/qEb9ykmOl29dqwMq+JhFdZn+1ak2FKhI9fQ==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.4.tgz",
      "integrity": "sha512-cPbNChoRURAWdebDIHSenxRpgEdy7JkPydSnUxRm9VvKD7m0/xVaR/8Fzlu81pk5nHEvHH87UZUA7cTtwnbJSA==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.4.tgz",
      "integrity": "sha512-RY0JFY8Fd6RonCBtHz+DvadaPkXDSI1AUn6yWL9TipqkZ1vY8w8evqdgyDFnkm4/K1ve1TvZiaePP5oSd4+WVQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.4.tgz",
      "integrity": "sha512-9qvvEAuk8k89TfWUoX2htWjbAMX8p+NxCppjpcg5k6xMsjhBQPTsoIh36h9Qde4WRuGpJeYnOjdosDn/cnv+OA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.4.tgz",
      "integrity": "sha512-KB5jxpfWQTr0nc3xdHtWChdbifHrBGsd2SM62Eyxrl8afikm+f5qGBU75SJIZBT/S1MC8XyacdlXBMSWq6OURA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.4.tgz",
      "integrity": "sha512-f+eZJZIQNEEd26RPSW+76chwOf1XtA2Y/O+5ocVyLliHkeih3e+jhLVBdNTd2rS3IbNXK8+ug93Vf5ZXtF5Lxg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.4.tgz",
      "integrity": "sha512-zQnl4Kwp7Q6NHsENtU2T/00Zi+w3AQNwz3+UaTyVBy2FpXrzXzGjndpK61onhZjRtRpQXxCTeqw19bVyXOh7jA==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.4.tgz",
      "integrity": "sha512-ESfNkywmCfPNyaZjxooddJQiQ+l/nTpGEOGthxiLnIHXC/CmcBixnfwUleX9mCz9ovrUUvKMap/pm8RYbzfwaA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.4.tgz",
      "integrity": "sha512-iNdlBX9gLVvqe2I3uIJSIKTq6wckP/DYxZtcqxm09x5Gi24DnFBmPAWZmr60ZyYMG0xlzo6goG3670ar+RXvRw==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.4.tgz",
      "integrity": "sha512-kqRsbaa5CS6KHlpxnN7WhE6vAAugXyZButpRdvDWetlv6Qv4N9WTcrWzF7tXfB9T7MsoadqdI8hmwLq6UlLvtw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.4.tgz",
      "integrity": "sha512-XtmnYhBcrORsJ4XJngyzr/EWP0hRZLAZRFaApdKuviyqF78+ylxh2y06ZmtULAMOnObJ3ucpN0AcwSWnMowTRg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.2.3.tgz",
      "integrity": "sha512-UMduMbqO5s5zF2NkNacMT/yK5Y5QiKvWr2+50bzIIxFDwVJ2h49b+oyjaCGPhJxd2/gC2x39EHv/gHVuu36x2Q==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.4",
        "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.4"
      }
    },
    "node_modules/@nodable/entities": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@nodable/entities/-/entities-3.0.0.tgz",
      "integrity": "sha512-8L9xFeTYKhm49xfIypoe2W5wV1m/3Z58kT+7kR9A8OyFxcPduI4VmxaUMQyKYrRjUoLLSXv6EKKID5Tvj9cUVw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodable"
        }
      ],
      "license": "MIT"
    },
    "node_modules/@oslojs/encoding": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@oslojs/encoding/-/encoding-1.1.0.tgz",
      "integrity": "sha512-70wQhgYmndg4GCPxPPxPGevRKqTIJ2Nh4OkiMWmDAVYsTQ+Ta7Sq+rPevXyXGdzr30/qZBnyOalCszoMxlyldQ==",
      "license": "MIT"
    },
    "node_modules/@oxc-project/types": {
      "version": "0.148.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.148.0.tgz",
      "integrity": "sha512-Nm4s/jB+4FpFsPhWGEC4h7rzksesmtnMXomo6rCMcg/b8zLQuOziRgkCS1fxDCXOlJB/6Q8oABOZ/OP6RIPj9A==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      }
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.7.tgz",
      "integrity": "sha512-EypzgnYCwyVY4NDHKzGmNJT5b+XaQEBniHxsMdeIQLB/tcCzZnhqrzHpZFbX9iaxx+5RiB8caATBtfvZP7zVxQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.7.tgz",
      "integrity": "sha512-l17HE9EweWaqJZhuUuNBN/FzM62xw+DECVnJyvMsxn8vJFAGLy5QfLDoYAcronkAN8VxKZHezDpulHDPx95vFw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.7.tgz",
      "integrity": "sha512-8ED8ELFvHXc6OCETIn4gXObPiaR6bckM/ipXtbzlPVDRMBfEGjCKgO90F9YtfdpDatVx/ZQw7aZ1vUMf/+T3Mw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.7.tgz",
      "integrity": "sha512-/WPripjtiAIZ2tWY7ddijORT0Ujg87wxWW/qcoFVCKAWVDPhtY0xr7Dj0M3GyNGz60jGwTElhro/mkF9dT7dDQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.7.tgz",
      "integrity": "sha512-14DI4NcqpvbICxSnGLx3PmtDaWqRP/KGSGb6C+JLLVPeZRl6dKdHba3pGsqT3vpdTqhEYIPG0MMQ8c0xYqoJxA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.7.tgz",
      "integrity": "sha512-bxrWIRvHWQvbJwi+VIie/kDJmQxcNE6xxWwZdqF/ExVAigtHkv54WTLQPb+QsZdnFy18fg7JPfWGL0RH6vwIlQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.7.tgz",
      "integrity": "sha512-toOY2BChBZyuxU7OYX6Tn389di4IzAqPTycVcci0O7FSfBqzRB3RZn+K5Is6ANf4tmgRd/K1yZTsNTXbkXsnLg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.7.tgz",
      "integrity": "sha512-lAIXTH/aiLRLxsTgQvfhjo4K1ydWIp00+V0voOr9beb/9ZmkUFrSIb03dXNFRgMNvkE6oGsF10ioQ6UsI+vS5Q==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.7.tgz",
      "integrity": "sha512-kdnwS28Pkenp/mZMRwjXXXwxQ7pIsm+bF919LUK93BOyhcLsrVKdP2p9fxpiPNPAbNuch8ypQt0pm2P2LYCAGg==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.7.tgz",
      "integrity": "sha512-516OdsyLdr5E65paF3yBF55t8mfm9+gmtCsK3xI7XKXIT7EfRlHhxL8K/NR6Hu8BWSgF5+1w74lTL0+nxcc8Qw==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.7.tgz",
      "integrity": "sha512-r8/z8n7GFaYRln3xmP1Cxy0HH/HLM0uBUPkEuSVEfKGDA89M0FsZRZJRSwe/tJjRx+fpH/gjorfhB8tmEbSFLA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.7.tgz",
      "integrity": "sha512-pAsE8iiDxUg1xBqdhrTfg45AVDVpirjz00sblEYClGNNcMnDb+e8beQgqIAw6LvauX/APvgxUnwrgun/YYGBhw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.7.tgz",
      "integrity": "sha512-lTcIYmmnQQA8Or/2DatS6oSqcdLHvendjS+zLu+FwgToynWMRSmQdpM65fTANJgIS4mjbMOo5KT2lnT9SAb96w==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.7.tgz",
      "integrity": "sha512-e3Gu3WxbNk/UqQhxqU7YIYO+9ZBvWNz3U+h/qRFosscMFzdRPbXYSaSWgSnklv2fz1TgzBTcti2z35c/7irsHw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.7.tgz",
      "integrity": "sha512-W/jg5qoRSqjsEv0+dZi4e687mcHqmVuU0P4fK6qS/xjetW2Gmc1W8j//z5nAeNcC8Ttm0hV46IjcYeuVwYhuiw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "license": "MIT"
    },
    "node_modules/@shikijs/core": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/core/-/core-4.4.3.tgz",
      "integrity": "sha512-QCR4q2ZO/ILJEuwiBMel4wdcTDb1JGwfjKTxPDF6x8ixOaluPrVqIn06C99AcRPhmYlBR56d/Fb+GN58GzExpg==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/primitive": "4.4.3",
        "@shikijs/types": "4.4.3",
        "@shikijs/vscode-textmate": "^10.0.2",
        "@types/hast": "^3.0.5",
        "hast-util-to-html": "^9.0.5"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/engine-javascript": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/engine-javascript/-/engine-javascript-4.4.3.tgz",
      "integrity": "sha512-FbOjFJp9VLdo1Wevs10BBtVxiTWwNLqZh5Gkhjgda/ioL15YOgeSl9n+6XMa3qRlPQzfhFNe641SrynFHYG0nQ==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/types": "4.4.3",
        "@shikijs/vscode-textmate": "^10.0.2",
        "oniguruma-to-es": "^4.3.6"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/engine-oniguruma": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/engine-oniguruma/-/engine-oniguruma-4.4.3.tgz",
      "integrity": "sha512-EcOQkxdxGQrc1Row/cC2c96/v1dbZqGnEVu1qTuT/MJmp6+cXCvQussowVmCv5Tqr3KuY3c7IbM6HTW3LJ1k9w==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/types": "4.4.3",
        "@shikijs/vscode-textmate": "^10.0.2"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/langs": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/langs/-/langs-4.4.3.tgz",
      "integrity": "sha512-ePic0yfAJGOF83D5wBHK/00EjK65oahBYxFk5epgq33WRv7X9UuxLEV8PtR0szC0z8dl7INIpIodB99JRFlR+A==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/types": "4.4.3"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/primitive": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/primitive/-/primitive-4.4.3.tgz",
      "integrity": "sha512-m0wBeLDQDeIxRdUmrCPdQqfuUamDwRL5isCfYbguKD6NiaKpVbsv+3J81DyIKgNW5h4WAIIr8T4EkgQrBBxvaQ==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/types": "4.4.3",
        "@shikijs/vscode-textmate": "^10.0.2",
        "@types/hast": "^3.0.5"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/themes": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/themes/-/themes-4.4.3.tgz",
      "integrity": "sha512-w8UHjeUnIR965KMWJHUPXOc2mNJUnK3vpVLYLvw5IYU2mnTTJ89E24OrJDBNiJDQ0qzb0tc4l7mrIXx5cFeIyw==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/types": "4.4.3"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/types": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/@shikijs/types/-/types-4.4.3.tgz",
      "integrity": "sha512-UEJxmRR++MAGR6hugn0vgVS2W/6lWAts84FFSrnlH9sP0LNol7E5+NQ792pH8liWUhyMyjhTgSUH3k7iD7tc5g==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/vscode-textmate": "^10.0.2",
        "@types/hast": "^3.0.5"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@shikijs/vscode-textmate": {
      "version": "10.0.2",
      "resolved": "https://registry.npmjs.org/@shikijs/vscode-textmate/-/vscode-textmate-10.0.2.tgz",
      "integrity": "sha512-83yeghZ2xxin3Nj8z1NMd/NCuca+gsYXswywDy5bHvwlWL8tpTQmzGeUuHd9FC3E/SBEMvzJRwWEOz5gGes9Qg==",
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.3.3.tgz",
      "integrity": "sha512-yYU8cogLeSh/ms2jh8Fj7jaba/EWa7Ja6GoUqYZaraEuCI5YS6ms6ObZgjjedm+jm6XZjdNRWBpPP6Z86oOxcw==",
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "tailwindcss": "4.3.3"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.3.tgz",
      "integrity": "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "license": "MIT"
    },
    "node_modules/@types/estree-jsx": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@types/estree-jsx/-/estree-jsx-1.0.5.tgz",
      "integrity": "sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "*"
      }
    },
    "node_modules/@types/hast": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-3.0.5.tgz",
      "integrity": "sha512-rp/ezSWaD1m44dPKICGhiskI13nVr7qTloFwDa/IYkhhf5nzwP+zIQcIJh3WIFSBOy/H1PzB40jPjMDksN4F+g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/mdast": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/nlcst": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/nlcst/-/nlcst-2.0.3.tgz",
      "integrity": "sha512-vSYNSDe6Ix3q+6Z7ri9lyWqgGhJTmzRjZRqyq15N0Z/1/UnVsno9G/N40NBijoYx2seFDIl0+B2mgAb9mezUCA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "24.13.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.13.3.tgz",
      "integrity": "sha512-Dh8vAsV36ig5wa9OX4pXvMc9D3Veibfw2wix0CUwYODLD8nkj9UsLjASr49nPg+2eKzxhBV+v7L8pXvT4e639Q==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.18.0"
      }
    },
    "node_modules/@types/sax": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/sax/-/sax-1.2.7.tgz",
      "integrity": "sha512-rO73L89PJxeYM3s3pPPjiPgVVcymqU490g0YO5n5By0k2Erzj6tay/4lr1CHAAU4JyOWd1rpQ8bCf6cZfHU96A==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==",
      "license": "MIT"
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.4.0.tgz",
      "integrity": "sha512-1mEZtMKPM09vDmQt5y7YvmN2+DFTP7Tg0EWXdic8/C6VRnpb33e4ghisCIE3WZjsE2N8mf+QV1Zqh7ZFYLWInQ==",
      "license": "ISC"
    },
    "node_modules/am-i-vibing": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/am-i-vibing/-/am-i-vibing-0.4.0.tgz",
      "integrity": "sha512-MxT4XZL7pzLHpuvhDKdMaQHMGGkJDLluKBLsbstn+8wv9sWcFT6h+0ve9qkml95amVTZtZV83gQe2hY+ojgHLg==",
      "license": "MIT",
      "dependencies": {
        "process-ancestry": "^0.1.0"
      },
      "bin": {
        "am-i-vibing": "dist/cli.mjs"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/anynum": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/anynum/-/anynum-1.0.1.tgz",
      "integrity": "sha512-N6//FLET/tXYNM/F6ABca1oH6fWB+KlTt909Le28WMDBk8oaT4vY17DCrwg2MvmuqUKt3Ni4N5dGJ/EoBgcO6A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT"
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/astro": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/astro/-/astro-7.3.1.tgz",
      "integrity": "sha512-A/bJYHtc6n0UAdROY9W948fW6lX0pnUA+JWKW+IGCXRyDIGN2MsXC0OlS8onZGJjr+sv8htemwOc9W5PBRXCkw==",
      "license": "MIT",
      "dependencies": {
        "@astrojs/compiler-rs": "^0.4.0",
        "@astrojs/internal-helpers": "0.11.0",
        "@astrojs/markdown-satteri": "0.4.0",
        "@astrojs/telemetry": "3.3.3",
        "@capsizecss/unpack": "^4.0.0",
        "@clack/prompts": "^1.1.0",
        "@oslojs/encoding": "^1.1.0",
        "am-i-vibing": "^0.4.0",
        "aria-query": "^5.3.2",
        "axobject-query": "^4.1.0",
        "ci-info": "^4.4.0",
        "clsx": "^2.1.1",
        "common-ancestor-path": "^2.0.0",
        "cookie": "^2.0.1",
        "devalue": "^5.8.1",
        "diff": "^9.0.0",
        "dset": "^3.1.4",
        "es-module-lexer": "^2.0.0",
        "esbuild": "^0.28.0",
        "find-proc": "0.1.0",
        "flattie": "^1.1.1",
        "fontace": "~0.4.1",
        "get-tsconfig": "5.0.0-beta.4",
        "github-slugger": "^2.0.0",
        "html-escaper": "3.0.3",
        "http-cache-semantics": "^4.2.0",
        "js-yaml": "^4.3.0",
        "jsonc-parser": "^3.3.1",
        "magic-string": "^1.0.0",
        "magicast": "^0.5.2",
        "mrmime": "^2.0.1",
        "neotraverse": "^1.0.1",
        "obug": "^2.1.1",
        "p-limit": "^7.3.0",
        "p-queue": "^9.1.0",
        "package-manager-detector": "^1.6.0",
        "piccolore": "^0.1.3",
        "picomatch": "^4.0.4",
        "semver": "^7.7.4",
        "shiki": "^4.0.2",
        "smol-toml": "^1.6.0",
        "svgo": "^4.0.1",
        "tinyclip": "^0.1.12",
        "tinyexec": "^1.0.4",
        "tinyglobby": "^0.2.15",
        "ultrahtml": "^1.6.0",
        "unifont": "~0.7.5",
        "unstorage": "^1.17.5",
        "vite": "^8.0.13",
        "vitefu": "^1.1.2",
        "xxhash-wasm": "^1.1.0",
        "yargs-parser": "^22.0.0",
        "zod": "^4.5.4"
      },
      "bin": {
        "astro": "bin/astro.mjs"
      },
      "engines": {
        "node": ">=22.12.0",
        "npm": ">=9.6.5",
        "pnpm": ">=7.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/astrodotbuild"
      },
      "optionalDependencies": {
        "sharp": "^0.35.4"
      },
      "peerDependencies": {
        "@astrojs/markdown-remark": "^7.3.0"
      },
      "peerDependenciesMeta": {
        "@astrojs/markdown-remark": {
          "optional": true
        }
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/bail": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
      "license": "ISC"
    },
    "node_modules/ccount": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/ccount/-/ccount-2.0.1.tgz",
      "integrity": "sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-html4": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-2.1.0.tgz",
      "integrity": "sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-legacy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-3.0.0.tgz",
      "integrity": "sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chokidar": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-5.0.0.tgz",
      "integrity": "sha512-TQMmc3w+5AxjpL8iIiwebF73dRDF4fBIieAqGn9RGCWaEVwQ6Fb2cGe31Yns0RRIzii5goJ1Y7xbMwo1TxMplw==",
      "license": "MIT",
      "dependencies": {
        "readdirp": "^5.0.0"
      },
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/ci-info": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-4.4.0.tgz",
      "integrity": "sha512-77PSwercCZU2Fc4sX94eF8k8Pxte6JAwL4/ICZLFjJLqegs7kCuAsqqj/70NQF6TvDpgFjkubQB2FW2ZZddvQg==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/sibiraj-s"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/comma-separated-tokens": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-2.0.3.tgz",
      "integrity": "sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/commander": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-11.1.0.tgz",
      "integrity": "sha512-yPVavfyCcRhmorC7rWlkHn15b4wDVgVmBA7kV4QVBsF7kv/9TKJAbAXVTxvTnwP8HHKjRCJDClKbciiYS7p0DQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/common-ancestor-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/common-ancestor-path/-/common-ancestor-path-2.0.0.tgz",
      "integrity": "sha512-dnN3ibLeoRf2HNC+OlCiNc5d2zxbLJXOtiZUudNFSXZrNSydxcCsSpRzXwfu7BBWCIfHPw+xTayeBvJCP/D8Ng==",
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/cookie": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-2.0.1.tgz",
      "integrity": "sha512-yuToqVvRrj6pfDXREyQAAv8SkAEk/8GS3jQRTiUMm66TVtBYmqQeoEjL2Lmq8Rpo6271vH76InTChTitEAm65w==",
      "license": "MIT",
      "engines": {
        "node": ">=22"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cookie-es": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/cookie-es/-/cookie-es-1.2.3.tgz",
      "integrity": "sha512-lXVyvUvrNXblMqzIRrxHb57UUVmqsSWlxqt3XIjCkUP0wDAf6uicO6KMbEgYrMNtEvWgWHwe42CKxPu9MYAnWw==",
      "license": "MIT"
    },
    "node_modules/crossws": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/crossws/-/crossws-0.3.5.tgz",
      "integrity": "sha512-ojKiDvcmByhwa8YYqbQI/hg7MEU0NC03+pSdEq4ZUnZR9xXpwk7E43SMNGkn+JxJGPFtNvQ48+vV2p+P1ml5PA==",
      "license": "MIT",
      "dependencies": {
        "uncrypto": "^0.1.3"
      }
    },
    "node_modules/css-select": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-6.0.0.tgz",
      "integrity": "sha512-rZZVSLle8v0+EY8QAkDWrKhpgt6SA5OtHsgBnsj6ZaLb5dmDVOWUDtQitd9ydxxvEjhewNudS6eTVU7uOyzvXw==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^7.0.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.2.2",
        "nth-check": "^2.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/css-tree": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-3.2.1.tgz",
      "integrity": "sha512-X7sjQzceUhu1u7Y/ylrRZFU2FS6LRiFVp6rKLPg23y3x3c3DOKAwuXGDp+PAGjh6CSnCjYeAul8pcT8bAl+lSA==",
      "license": "MIT",
      "dependencies": {
        "mdn-data": "2.27.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/css-what": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-7.0.0.tgz",
      "integrity": "sha512-wD5oz5xibMOPHzy13CyGmogB3phdvcDaB5t0W/Nr5Z2O/agcB8YwOz6e2Lsp10pNDzBoDO9nVa3RGs/2BttpHQ==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/csso": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/csso/-/csso-5.0.5.tgz",
      "integrity": "sha512-0LrrStPOdJj+SPCCrGhzryycLjwcgUSHBtxNA8aIDxf0GLsRh1cKYhB00Gd1lDOS4yGH69+SNn13+TWbVHETFQ==",
      "license": "MIT",
      "dependencies": {
        "css-tree": "~2.2.0"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/csso/node_modules/css-tree": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-2.2.1.tgz",
      "integrity": "sha512-OA0mILzGc1kCOCSJerOeqDxDQ4HOh+G8NbOJFOTgOCzpw7fCBubk0fEyxp8AgOL/jvLgYA/uV0cMbe43ElF1JA==",
      "license": "MIT",
      "dependencies": {
        "mdn-data": "2.0.28",
        "source-map-js": "^1.0.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0",
        "npm": ">=7.0.0"
      }
    },
    "node_modules/csso/node_modules/mdn-data": {
      "version": "2.0.28",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.28.tgz",
      "integrity": "sha512-aylIc7Z9y4yzHYAJNuESG3hfhC+0Ibp/MAMiaOZgNv4pmEdFyfZhhhny4MNiAfWdBQ1RQ2mfDWmM1x8SvGyp8g==",
      "license": "CC0-1.0"
    },
    "node_modules/defu": {
      "version": "6.1.7",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.7.tgz",
      "integrity": "sha512-7z22QmUWiQ/2d0KkdYmANbRUVABpZ9SNYyH5vx6PZ+nE5bcC0l7uFvEfHlyld/HcGBFTL536ClDt3DEcSlEJAQ==",
      "license": "MIT"
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/destr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.5.tgz",
      "integrity": "sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==",
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/devalue": {
      "version": "5.9.2",
      "resolved": "https://registry.npmjs.org/devalue/-/devalue-5.9.2.tgz",
      "integrity": "sha512-po4PAY5c53tw5XMocSnf8A/5OHhbbUftpr93aEN6BBoAdntUmK7vu7wOATqvt7cXO7m1Cl4gMVn6p7n6n4mj0w==",
      "license": "MIT"
    },
    "node_modules/devlop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
      "license": "MIT",
      "dependencies": {
        "dequal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/diff": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-9.0.0.tgz",
      "integrity": "sha512-svtcdpS8CgJyqAjEQIXdb3OjhFVVYjzGAPO8WGCmRbrml64SPw/jJD4GoE98aR7r25A0XcgrK3F02yw9R/vhQw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dom-serializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
      "integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.2",
        "entities": "^4.2.0"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
      }
    },
    "node_modules/domelementtype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
      "integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "BSD-2-Clause"
    },
    "node_modules/domhandler": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
      "integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "domelementtype": "^2.3.0"
      },
      "engines": {
        "node": ">= 4"
      },
      "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
      }
    },
    "node_modules/domutils": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-3.2.2.tgz",
      "integrity": "sha512-6kZKyUajlDuqlHKVX1w7gyslj9MPIXzIFiz/rGu35uC1wMi+kMhQwGhl4lt9unC9Vb9INnY9Z3/ZA3+FhASLaw==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "dom-serializer": "^2.0.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/fb55/domutils?sponsor=1"
      }
    },
    "node_modules/dset": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/dset/-/dset-3.1.4.tgz",
      "integrity": "sha512-2QF/g9/zTaPDc3BjNcVTGoBbXBgYfMTTceLaYcFJ/W9kggFUkhxD/hMEeuLKbugyef9SqAx8cpgwlIP/jinUTA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.24.5",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.24.5.tgz",
      "integrity": "sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A==",
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.3.2.tgz",
      "integrity": "sha512-poHGpORABojJJucnV9KbOavETW8lBVnphkW77ER5/BQ5Fz7oXSoCNek7IH3vR5nRjdsEz926ibFYX8KtLQmdyw==",
      "license": "MIT"
    },
    "node_modules/esbuild": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.2.tgz",
      "integrity": "sha512-HKVLS8dvII+xoKW9kmqxbRKrnWEXfJJr/FZhhJmiqIB0e053QNYFqOBouTMO/k5sID4MvCiUCvv8b9M4h32wIA==",
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.28.2",
        "@esbuild/android-arm": "0.28.2",
        "@esbuild/android-arm64": "0.28.2",
        "@esbuild/android-x64": "0.28.2",
        "@esbuild/darwin-arm64": "0.28.2",
        "@esbuild/darwin-x64": "0.28.2",
        "@esbuild/freebsd-arm64": "0.28.2",
        "@esbuild/freebsd-x64": "0.28.2",
        "@esbuild/linux-arm": "0.28.2",
        "@esbuild/linux-arm64": "0.28.2",
        "@esbuild/linux-ia32": "0.28.2",
        "@esbuild/linux-loong64": "0.28.2",
        "@esbuild/linux-mips64el": "0.28.2",
        "@esbuild/linux-ppc64": "0.28.2",
        "@esbuild/linux-riscv64": "0.28.2",
        "@esbuild/linux-s390x": "0.28.2",
        "@esbuild/linux-x64": "0.28.2",
        "@esbuild/netbsd-arm64": "0.28.2",
        "@esbuild/netbsd-x64": "0.28.2",
        "@esbuild/openbsd-arm64": "0.28.2",
        "@esbuild/openbsd-x64": "0.28.2",
        "@esbuild/openharmony-arm64": "0.28.2",
        "@esbuild/sunos-x64": "0.28.2",
        "@esbuild/win32-arm64": "0.28.2",
        "@esbuild/win32-ia32": "0.28.2",
        "@esbuild/win32-x64": "0.28.2"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.4.tgz",
      "integrity": "sha512-mlsTRyGaPBjPedk6Bvw+aqbsXDtoAyAzm5MO7JgU+yVRyMQ5O8bD4Kcci7BS85f93veegeCPkL8R4GLClnjLFw==",
      "license": "MIT"
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "license": "MIT"
    },
    "node_modules/fast-string-truncated-width": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/fast-string-truncated-width/-/fast-string-truncated-width-3.0.3.tgz",
      "integrity": "sha512-0jjjIEL6+0jag3l2XWWizO64/aZVtpiGE3t0Zgqxv0DPuxiMjvB3M24fCyhZUO4KomJQPj3LTSUnDP3GpdwC0g==",
      "license": "MIT"
    },
    "node_modules/fast-string-width": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/fast-string-width/-/fast-string-width-3.0.2.tgz",
      "integrity": "sha512-gX8LrtNEI5hq8DVUfRQMbr5lpaS4nMIWV+7XEbXk2b8kiQIizgnlr12B4dA3ZEx3308ze0O4Q1R+cHts8kyUJg==",
      "license": "MIT",
      "dependencies": {
        "fast-string-truncated-width": "^3.0.2"
      }
    },
    "node_modules/fast-wrap-ansi": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/fast-wrap-ansi/-/fast-wrap-ansi-0.2.2.tgz",
      "integrity": "sha512-7F2Fl+TjRSenLqlU3UjSH0iyqopqoZIu7eZVpEirP2g1GtWa2G/ecEmBdgz31+Mxr+ELclgg6sokpSFIQiZ02Q==",
      "license": "MIT",
      "dependencies": {
        "fast-string-width": "^3.0.2"
      }
    },
    "node_modules/fast-xml-builder": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/fast-xml-builder/-/fast-xml-builder-1.3.1.tgz",
      "integrity": "sha512-pIM/1n3ntFXKYrUZwW7QCK0gAW7XY+wzj1YMIV3tLDvPj/V+zTGJK5e3/4WJfwj0qWw2ElNXiTixda/R+3YSug==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "path-expression-matcher": "^1.6.2",
        "xml-naming": "^0.3.0"
      }
    },
    "node_modules/fast-xml-parser": {
      "version": "5.11.1",
      "resolved": "https://registry.npmjs.org/fast-xml-parser/-/fast-xml-parser-5.11.1.tgz",
      "integrity": "sha512-TBw6K/fxoQGGjCmZDw9w/ZwP3uDcnTM4YH/g+PFRWr8sbe5idXtxNN6vITh4+1ruCZaho6uBFurElsA7F0zzgw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@nodable/entities": "^3.0.0",
        "fast-xml-builder": "^1.2.0",
        "is-unsafe": "^2.0.0",
        "path-expression-matcher": "^1.6.2",
        "strnum": "^2.4.2",
        "xml-naming": "^0.3.0"
      },
      "bin": {
        "fxparser": "src/cli/cli.js"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/find-proc": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/find-proc/-/find-proc-0.1.0.tgz",
      "integrity": "sha512-OaOpEYv2PiQ7SQ5LIrl+deA1XaWcxEjnpM6VuWXTUvn+teIXxeFTLDmu18/zDQpFmHN4o3oDBX+BT0AGwEhemg==",
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/flattie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/flattie/-/flattie-1.1.1.tgz",
      "integrity": "sha512-9UbaD6XdAL97+k/n+N7JwX46K/M6Zc6KcFYskrYL8wbBV/Uyk0CTAMY0VT+qiK5PM7AIc9aTWYtq65U7T+aCNQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fontace": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/fontace/-/fontace-0.4.1.tgz",
      "integrity": "sha512-lDMvbAzSnHmbYMTEld5qdtvNH2/pWpICOqpean9IgC7vUbUJc3k+k5Dokp85CegamqQpFbXf0rAVkbzpyTA8aw==",
      "license": "MIT",
      "dependencies": {
        "fontkitten": "^1.0.2"
      }
    },
    "node_modules/fontkitten": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/fontkitten/-/fontkitten-1.0.3.tgz",
      "integrity": "sha512-Wp1zXWPVUPBmfoa3Cqc9ctaKuzKAV6uLstRqlR56kSjplf5uAce+qeyYym7F+PHbGTk+tCEdkCW6RD7DX/gBZw==",
      "license": "MIT",
      "dependencies": {
        "tiny-inflate": "^1.0.3"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "5.0.0-beta.4",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-5.0.0-beta.4.tgz",
      "integrity": "sha512-7nF7C9fIPFEMHgEMEfgIlO9wDdZ8CyHw27rWciFZfHvHDReIiPhsYuzPRXsfvBCqFy1l8RRyyWV7QLM+ZhUJsQ==",
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "engines": {
        "node": ">=20.20.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/github-slugger": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/github-slugger/-/github-slugger-2.0.0.tgz",
      "integrity": "sha512-IaOQ9puYtjrkq7Y0Ygl9KDZnrf/aiUJYUpVf89y8kyaxbRG7Y1SrX/jaumrv81vc61+kiMempujsM3Yw7w5qcw==",
      "license": "ISC"
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/h3": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/h3/-/h3-1.15.11.tgz",
      "integrity": "sha512-L3THSe2MPeBwgIZVSH5zLdBBU90TOxarvhK9d04IDY2AmVS8j2Jz2LIWtwsGOU3lu2I5jCN7FNvVfY2+XyF+mg==",
      "license": "MIT",
      "dependencies": {
        "cookie-es": "^1.2.3",
        "crossws": "^0.3.5",
        "defu": "^6.1.6",
        "destr": "^2.0.5",
        "iron-webcrypto": "^1.2.1",
        "node-mock-http": "^1.0.4",
        "radix3": "^1.1.2",
        "ufo": "^1.6.3",
        "uncrypto": "^0.1.3"
      }
    },
    "node_modules/hast-util-to-html": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/hast-util-to-html/-/hast-util-to-html-9.0.5.tgz",
      "integrity": "sha512-OguPdidb+fbHQSU4Q4ZiLKnzWo8Wwsf5bZfbvu7//a9oTYoqD/fWpe96NuHkoS9h0ccGOTe0C4NGXdtS0iObOw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "comma-separated-tokens": "^2.0.0",
        "hast-util-whitespace": "^3.0.0",
        "html-void-elements": "^3.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "property-information": "^7.0.0",
        "space-separated-tokens": "^2.0.0",
        "stringify-entities": "^4.0.0",
        "zwitch": "^2.0.4"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-whitespace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-whitespace/-/hast-util-whitespace-3.0.0.tgz",
      "integrity": "sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/html-escaper": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-3.0.3.tgz",
      "integrity": "sha512-RuMffC89BOWQoY0WKGpIhn5gX3iI54O6nRA0yC124NYVtzjmFWBIiFd8M0x+ZdX0P9R4lADg1mgP8C7PxGOWuQ==",
      "license": "MIT"
    },
    "node_modules/html-void-elements": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/html-void-elements/-/html-void-elements-3.0.0.tgz",
      "integrity": "sha512-bEqo66MRXsUGxWHV5IP0PUiAWwoEjba4VCzg0LjFJBpchPaTfyfCKTG6bc5F8ucKec3q5y6qOdGyYTSBEvhCrg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.2.0.tgz",
      "integrity": "sha512-dTxcvPXqPvXBQpq5dUr6mEMJX4oIEFv6bwom3FDwKRDsuIjjJGANqhBuoAn9c1RQJIdAKav33ED65E2ys+87QQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/iron-webcrypto": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/iron-webcrypto/-/iron-webcrypto-1.2.1.tgz",
      "integrity": "sha512-feOM6FaSr6rEABp/eDfVseKyTMDt+KGpeB35SkVn9Tyn0CqvVsY3EwI0v5i8nMHyJnzCIQf7nsy3p41TPkJZhg==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/brc-dd"
      }
    },
    "node_modules/is-docker": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-4.0.0.tgz",
      "integrity": "sha512-LHE+wROyG/Y/0ZnbktRCoTix2c1RhgWaZraMZ8o1Q7zCh0VSrICJQO5oqIIISrcSBtrXv0o233w1IYwsWCjTzA==",
      "license": "MIT",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-unsafe": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-unsafe/-/is-unsafe-2.0.2.tgz",
      "integrity": "sha512-HgbIHPBH0KHHCcjLfGsCvhtPTVxjaAZlXjwdz7/GQC40SjSe4sfQsar8J5VFo8JOSbarkpV0OLG95bbaNd9aAQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-yaml": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.3.2.tgz",
      "integrity": "sha512-SFNOvSJ+Dgf/9An904Yx+CgSlIPCkIpao4qo51lpee25TIRejdH3rhR4EZMGoNx3/TP3O+wzWuiTFl4sqbltzA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/puzrin"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodeca"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsonc-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
      "integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==",
      "license": "MIT"
    },
    "node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lru-cache": {
      "version": "11.5.2",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.5.2.tgz",
      "integrity": "sha512-4pfM1Ff0x50o0tQwb5ucw/RzNyD0/YJME6IVcStalZuMWxdt3sR3huStTtxz4PUmvZfRguvDejasvQ2kifR11g==",
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/magic-string": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-1.2.3.tgz",
      "integrity": "sha512-Bpb0W2TbLKOZ7vJnOUnVRGq3WL2p+ISV29M6hYPL1AFCpyKZpdr5ytiXoTSSxRVhg8YW7f65+6gbG8WG6PCa/g==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/magicast": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/magicast/-/magicast-0.5.4.tgz",
      "integrity": "sha512-llBEhWm1SacoRwgHUoQJYtwp4PBLF4faQi5TCpIGyGs9n4y5+juI0tDgyKIfpqxckRHaHzouUEph3THklWh03w==",
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7",
        "source-map-js": "^1.2.1"
      }
    },
    "node_modules/mdast-util-to-hast": {
      "version": "13.2.1",
      "resolved": "https://registry.npmjs.org/mdast-util-to-hast/-/mdast-util-to-hast-13.2.1.tgz",
      "integrity": "sha512-cctsq2wp5vTsLIcaymblUriiTcZd0CwWtCbLvrOzYCDZoWyMNV8sZ7krj09FSnsiJi3WVsHLM4k6Dq/yaPyCXA==",
      "license": "MIT",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@ungap/structured-clone": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "trim-lines": "^3.0.0",
        "unist-util-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.27.1",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.27.1.tgz",
      "integrity": "sha512-9Yubnt3e8A0OKwxYSXyhLymGW4sCufcLG6VdiDdUGVkPhpqLxlvP5vl1983gQjJl3tqbrM731mjaZaP68AgosQ==",
      "license": "CC0-1.0"
    },
    "node_modules/micromark-util-character": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-encode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-sanitize-uri": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-symbol": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/micromark-util-types": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.2.tgz",
      "integrity": "sha512-Yw0ECSpJoViF1qTU4DC6NwtC4aWGt1EkzaQB8KPPyCRR8z9TWeV0HbEFGTO+ZY1wB22zmxnJqhPyTpOVCpeHTA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "license": "MIT"
    },
    "node_modules/mrmime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.1.tgz",
      "integrity": "sha512-Y3wQdFg2Va6etvQ5I82yUhGdsKrcYox6p7FfL1LbK2J4V01F9TGlepTIhnK24t7koZibmg82KGglhA1XK5IsLQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/neotraverse": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/neotraverse/-/neotraverse-1.0.1.tgz",
      "integrity": "sha512-WmmLty1YWwJl9yZi77v2dVIV6X2kuYV8YYBI/G3LWGKdGHmHUvL1z7FW0iDvEvGAwNEoc5x1tOOOyDnf5jJw/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/nlcst-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/nlcst-to-string/-/nlcst-to-string-4.0.0.tgz",
      "integrity": "sha512-YKLBCcUYKAg0FNlOBT6aI91qFmSiFKiluk655WzPF+DDMA02qIyy8uiRqI8QXtcFpEvll12LpL5MXqEmAZ+dcA==",
      "license": "MIT",
      "dependencies": {
        "@types/nlcst": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/node-fetch-native": {
      "version": "1.6.7",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.6.7.tgz",
      "integrity": "sha512-g9yhqoedzIUm0nTnTqAQvueMPVOuIY16bqgAJJC8XOOubYFNwz6IER9qs0Gq2Xd0+CecCKFjtdDTMA4u4xG06Q==",
      "license": "MIT"
    },
    "node_modules/node-mock-http": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/node-mock-http/-/node-mock-http-1.0.5.tgz",
      "integrity": "sha512-KQyt/wLjG3TAc7DOUhpqWzgd4ERxR80JOlTK5VE5R1S12IaPVN5qkj4klBce9HPG1Njuup4Sb5bljaT34lIyjw==",
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/obug": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/obug/-/obug-2.1.4.tgz",
      "integrity": "sha512-4a+OsYv9UktOJKE+l1A4OufDgdRF9PifWj+tJnHURo/P+WOxpG4GzUFL9qCalmWauao6ogiG+QvnCovwPoyAWA==",
      "funding": [
        "https://github.com/sponsors/sxzz",
        "https://opencollective.com/debug"
      ],
      "license": "MIT",
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/ofetch": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/ofetch/-/ofetch-1.5.1.tgz",
      "integrity": "sha512-2W4oUZlVaqAPAil6FUg/difl6YhqhUR7x2eZY4bQCko22UXg3hptq9KLQdqFClV+Wu85UX7hNtdGTngi/1BxcA==",
      "license": "MIT",
      "dependencies": {
        "destr": "^2.0.5",
        "node-fetch-native": "^1.6.7",
        "ufo": "^1.6.1"
      }
    },
    "node_modules/ohash": {
      "version": "2.0.12",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.12.tgz",
      "integrity": "sha512-65S/5gk9YSsaRjcyf7Nfa6h/d3E8/1gslpXfI4W7Dxn/oap8IKRuNT5VXkLQ1YFKIEg4apRY4Pj6aiwFzrDdmw==",
      "license": "MIT"
    },
    "node_modules/oniguruma-parser": {
      "version": "0.12.2",
      "resolved": "https://registry.npmjs.org/oniguruma-parser/-/oniguruma-parser-0.12.2.tgz",
      "integrity": "sha512-6HVa5oIrgMC6aA6WF6XyyqbhRPJrKR02L20+2+zpDtO5QAzGHAUGw5TKQvwi5vctNnRHkJYmjAhRVQF2EKdTQw==",
      "license": "MIT"
    },
    "node_modules/oniguruma-to-es": {
      "version": "4.3.6",
      "resolved": "https://registry.npmjs.org/oniguruma-to-es/-/oniguruma-to-es-4.3.6.tgz",
      "integrity": "sha512-csuQ9x3Yr0cEIs/Zgx/OEt9iBw9vqIunAPQkx19R/fiMq2oGVTgcMqO/V3Ybqefr1TBvosI6jU539ksaBULJyA==",
      "license": "MIT",
      "dependencies": {
        "oniguruma-parser": "^0.12.2",
        "regex": "^6.1.0",
        "regex-recursion": "^6.0.2"
      }
    },
    "node_modules/p-limit": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-7.3.2.tgz",
      "integrity": "sha512-Ll0w3fU24vYpXoZmjjZIee6bJQDgG0oAyo1PdmFYI8UDwJJddaHAypxIH9avUu+t+lSsAwKVsb1jDCMIIChliw==",
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^1.2.1"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-queue": {
      "version": "9.3.3",
      "resolved": "https://registry.npmjs.org/p-queue/-/p-queue-9.3.3.tgz",
      "integrity": "sha512-NXAOdnEe5FsZJfT4oK84lE1Y5cFFdWlRuOo5tww8DyNMxyRXwn39fIkUtNLKppcPC+UYU/bXujNCUGDv01y7CA==",
      "license": "MIT",
      "dependencies": {
        "eventemitter3": "^5.0.4",
        "p-timeout": "^7.0.0"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-timeout": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-7.0.1.tgz",
      "integrity": "sha512-AxTM2wDGORHGEkPCt8yqxOTMgpfbEHqF51f/5fJCmwFC3C/zNcGT63SymH2ttOAaiIws2zVg4+izQCjrakcwHg==",
      "license": "MIT",
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-manager-detector": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/package-manager-detector/-/package-manager-detector-1.8.0.tgz",
      "integrity": "sha512-yQA4H19AmPEoMUeavPMDIe1higySl/gH/yaQrkT/s07Qp+7pp2hYz30N3z2l5BkjVkF9Ow6o0wjJamm2y7Sn0A==",
      "license": "MIT"
    },
    "node_modules/path-expression-matcher": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/path-expression-matcher/-/path-expression-matcher-1.6.2.tgz",
      "integrity": "sha512-enSlaiat05iasnzmgNxRj8reFdj3puY2QpNgP1aPIaVfT6nn9ICuPoFlKHk8EN22HcwewshO+mN2DGbkCEOtqQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/piccolore": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/piccolore/-/piccolore-0.1.3.tgz",
      "integrity": "sha512-o8bTeDWjE086iwKrROaDf31K0qC/BENdm15/uH9usSC/uZjJOKb2YGiVHfLY4GhwsERiPI1jmwI2XrA7ACOxVw==",
      "license": "ISC"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prismjs": {
      "version": "1.30.0",
      "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.30.0.tgz",
      "integrity": "sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/process-ancestry": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/process-ancestry/-/process-ancestry-0.1.0.tgz",
      "integrity": "sha512-tGqJW/UnclpYASFcM6Xh8D8l/BMtaQ9+CSG0vlJSJTcdMM4lDRv4c6H0Pdcsfted+bVczdYSfk2fdukg2gQkZg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/property-information": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/property-information/-/property-information-7.2.0.tgz",
      "integrity": "sha512-IAtzIB6sUiWaJYrX9smp3V46pBGbBeLFRGdh25kg1334VcBlD8HzhPeNIWQH9zhGmo2itIe25EHt9dQP7G5hmg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/radix3": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/radix3/-/radix3-1.1.2.tgz",
      "integrity": "sha512-b484I/7b8rDEdSDKckSSBA8knMpcdsXudlE/LNL639wFoHKwLbEkQFZHWEYwDC0wa0FKUcCY+GAF73Z7wxNVFA==",
      "license": "MIT"
    },
    "node_modules/readdirp": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-5.1.1.tgz",
      "integrity": "sha512-Kko+Y5XQ6fM+Ce3dq3m9YGxnacYZYl9cA1wZjaF3Vbry2L3i1qVg8+CAgNPsXRArPMUMCaOR7oa9Nqntc43JKA==",
      "license": "MIT",
      "engines": {
        "node": ">= 20.19.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/regex/-/regex-6.1.0.tgz",
      "integrity": "sha512-6VwtthbV4o/7+OaAF9I5L5V3llLEsoPyq9P1JVXkedTP33c7MfCG0/5NOPcSJn0TzXcG9YUrR0gQSWioew3LDg==",
      "license": "MIT",
      "dependencies": {
        "regex-utilities": "^2.3.0"
      }
    },
    "node_modules/regex-recursion": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/regex-recursion/-/regex-recursion-6.0.2.tgz",
      "integrity": "sha512-0YCaSCq2VRIebiaUviZNs0cBz1kg5kVS2UKUfNIx8YVs1cN3AV7NTctO5FOKBA+UT2BPJIWZauYHPqJODG50cg==",
      "license": "MIT",
      "dependencies": {
        "regex-utilities": "^2.3.0"
      }
    },
    "node_modules/regex-utilities": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/regex-utilities/-/regex-utilities-2.3.0.tgz",
      "integrity": "sha512-8VhliFJAWRaUiVvREIiW2NXXTmHs4vMNnSzuJVhscgmGav3g9VDxLrQndI3dZZVVdp0ZO/5v0xmX516/7M9cng==",
      "license": "MIT"
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/retext-smartypants": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/retext-smartypants/-/retext-smartypants-6.2.0.tgz",
      "integrity": "sha512-kk0jOU7+zGv//kfjXEBjdIryL1Acl4i9XNkHxtM7Tm5lFiCog576fjNC9hjoR7LTKQ0DsPWy09JummSsH1uqfQ==",
      "license": "MIT",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "nlcst-to-string": "^4.0.0",
        "unist-util-visit": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.7.tgz",
      "integrity": "sha512-g0EtLvBjTUB7jhyV0S/TCup3v/XSVl45vUIGbOGU4QPiyjTenCe4mKuFvW9fEgYmS2Fo42AUssRmNuMziXdrig==",
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.148.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.7",
        "@rolldown/binding-android-arm64": "1.2.7",
        "@rolldown/binding-darwin-arm64": "1.2.7",
        "@rolldown/binding-darwin-x64": "1.2.7",
        "@rolldown/binding-freebsd-x64": "1.2.7",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.7",
        "@rolldown/binding-linux-arm64-gnu": "1.2.7",
        "@rolldown/binding-linux-arm64-musl": "1.2.7",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.7",
        "@rolldown/binding-linux-s390x-gnu": "1.2.7",
        "@rolldown/binding-linux-x64-gnu": "1.2.7",
        "@rolldown/binding-linux-x64-musl": "1.2.7",
        "@rolldown/binding-openharmony-arm64": "1.2.7",
        "@rolldown/binding-win32-arm64-msvc": "1.2.7",
        "@rolldown/binding-win32-x64-msvc": "1.2.7"
      }
    },
    "node_modules/satteri": {
      "version": "0.10.5",
      "resolved": "https://registry.npmjs.org/satteri/-/satteri-0.10.5.tgz",
      "integrity": "sha512-Ao1LKpAEa9Wdg0otgbVKViZHEq9ebdXe4DMrp3s9vQAU0HNIuHnFEuMuOcm0ZIXyV0Yzxj91NvhLpvXZJO/5ZQ==",
      "license": "MIT",
      "dependencies": {
        "@types/estree-jsx": "^1.0.5",
        "@types/hast": "^3.0.5",
        "@types/mdast": "^4.0.4",
        "@types/unist": "^3.0.3"
      },
      "optionalDependencies": {
        "@bruits/satteri-darwin-arm64": "0.10.5",
        "@bruits/satteri-darwin-x64": "0.10.5",
        "@bruits/satteri-linux-arm64-gnu": "0.10.5",
        "@bruits/satteri-linux-arm64-musl": "0.10.5",
        "@bruits/satteri-linux-x64-gnu": "0.10.5",
        "@bruits/satteri-linux-x64-musl": "0.10.5",
        "@bruits/satteri-wasm32-wasi": "0.10.5",
        "@bruits/satteri-win32-arm64-msvc": "0.10.5",
        "@bruits/satteri-win32-x64-msvc": "0.10.5"
      }
    },
    "node_modules/sax": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.6.1.tgz",
      "integrity": "sha512-42tBVwLWnaQvW5zc4HbZrTuWccECCZfBi92FDuwtqxasH+JbPB3/FOKb1m222K42R4WxuxzzMsTswfzgtSu64Q==",
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=11.0.0"
      }
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.4.tgz",
      "integrity": "sha512-n++8XWcj+jCOr2IOl7h8LbKnGBDY4aPbmprMONBNFdn0ImXqpGVv5zliDs0V9HbmbCQLpbuo2ej9rAoOQTvMDA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.4",
        "@img/sharp-darwin-x64": "0.35.4",
        "@img/sharp-freebsd-wasm32": "0.35.4",
        "@img/sharp-libvips-darwin-arm64": "1.3.3",
        "@img/sharp-libvips-darwin-x64": "1.3.3",
        "@img/sharp-libvips-linux-arm": "1.3.3",
        "@img/sharp-libvips-linux-arm64": "1.3.3",
        "@img/sharp-libvips-linux-ppc64": "1.3.3",
        "@img/sharp-libvips-linux-riscv64": "1.3.3",
        "@img/sharp-libvips-linux-s390x": "1.3.3",
        "@img/sharp-libvips-linux-x64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3",
        "@img/sharp-linux-arm": "0.35.4",
        "@img/sharp-linux-arm64": "0.35.4",
        "@img/sharp-linux-ppc64": "0.35.4",
        "@img/sharp-linux-riscv64": "0.35.4",
        "@img/sharp-linux-s390x": "0.35.4",
        "@img/sharp-linux-x64": "0.35.4",
        "@img/sharp-linuxmusl-arm64": "0.35.4",
        "@img/sharp-linuxmusl-x64": "0.35.4",
        "@img/sharp-webcontainers-wasm32": "0.35.4",
        "@img/sharp-win32-arm64": "0.35.4",
        "@img/sharp-win32-ia32": "0.35.4",
        "@img/sharp-win32-x64": "0.35.4"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/shiki": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/shiki/-/shiki-4.4.3.tgz",
      "integrity": "sha512-Mb/GvXPHBAXdgGIcnfU5L3ldpn1XcxrGkPHwqgRx17/I2XRfqlFKk2vGkHWINn1kdXvzJZeuO3is6I9KLPFm0g==",
      "license": "MIT",
      "dependencies": {
        "@shikijs/core": "4.4.3",
        "@shikijs/engine-javascript": "4.4.3",
        "@shikijs/engine-oniguruma": "4.4.3",
        "@shikijs/langs": "4.4.3",
        "@shikijs/themes": "4.4.3",
        "@shikijs/types": "4.4.3",
        "@shikijs/vscode-textmate": "^10.0.2",
        "@types/hast": "^3.0.5"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
      "license": "MIT"
    },
    "node_modules/sitemap": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/sitemap/-/sitemap-9.0.1.tgz",
      "integrity": "sha512-S6hzjGJSG3d6if0YoF5kTyeRJvia6FSTBroE5fQ0bu1QNxyJqhhinfUsXi9fH3MgtXODWvwo2BDyQSnhPQ88uQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "^24.9.2",
        "@types/sax": "^1.2.1",
        "arg": "^5.0.0",
        "sax": "^1.4.1"
      },
      "bin": {
        "sitemap": "dist/esm/cli.js"
      },
      "engines": {
        "node": ">=20.19.5",
        "npm": ">=10.8.2"
      }
    },
    "node_modules/smol-toml": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/smol-toml/-/smol-toml-1.8.0.tgz",
      "integrity": "sha512-kCZr2V3ch9i00x8zXRhjUNVcjG9ijES5dDudkXvUVCT5QlJNQWElSJdZqyPemffHoLNUYwOcou0Fy+ojN0uHSQ==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "url": "https://github.com/sponsors/cyyynthia"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/space-separated-tokens": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-2.0.2.tgz",
      "integrity": "sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/stringify-entities": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-4.0.4.tgz",
      "integrity": "sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==",
      "license": "MIT",
      "dependencies": {
        "character-entities-html4": "^2.0.0",
        "character-entities-legacy": "^3.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/strnum": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/strnum/-/strnum-2.4.2.tgz",
      "integrity": "sha512-rDG3Ah4TV0k1hWvLSzkZtMmLN9+eS+h3knq4MP6A42Y3Yh5qGNnOUs1jJkoSr8FG5dsL28c7KgkIBzSEykqtuw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "anynum": "^1.0.1"
      }
    },
    "node_modules/svgo": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/svgo/-/svgo-4.1.0.tgz",
      "integrity": "sha512-bkxnTg1kSU0guhIBmibA6UUhrQmPVA1XsQLN+ylCd+UWzbnLkySOcXpyk1mrl05f+pcaCx2eHb+sp6BgMZWX+Q==",
      "license": "MIT",
      "dependencies": {
        "commander": "^11.1.0",
        "css-select": "^6.0.0",
        "css-tree": "^3.0.1",
        "css-what": "^7.0.0",
        "csso": "^5.0.5",
        "picocolors": "^1.1.1",
        "sax": "1.6.1"
      },
      "bin": {
        "svgo": "bin/svgo.js"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/svgo"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tiny-inflate": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
      "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
      "license": "MIT"
    },
    "node_modules/tinyclip": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/tinyclip/-/tinyclip-0.1.15.tgz",
      "integrity": "sha512-uo33abH+Ays0xYaDysoBt494Hb3hsEczMpcC0MwFl773pazORx4fmvKhclhR1wonUbB6vvpRsvVMwnhfqeMc+A==",
      "license": "MIT",
      "engines": {
        "node": "^16.14.0 || >= 17.3.0"
      }
    },
    "node_modules/tinyexec": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.3.1.tgz",
      "integrity": "sha512-GCvB3aoys96IuDFBMcTB46JOR6mdMtAToqwiW8JlWhsoh1mhHi/xn9ss/Dg7N555GiJyEt2qzoG/NHCwM6h1EA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/trim-lines": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/trim-lines/-/trim-lines-3.0.1.tgz",
      "integrity": "sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/trough": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD",
      "optional": true
    },
    "node_modules/ufo": {
      "version": "1.6.4",
      "resolved": "https://registry.npmjs.org/ufo/-/ufo-1.6.4.tgz",
      "integrity": "sha512-JFNbkD1Svwe0KvGi8GOeLcP4kAWQ609twvCdcHxq1oSL8svv39ZuSvajcD8B+5D0eL4+s1Is2D/O6KN3qcTeRA==",
      "license": "MIT"
    },
    "node_modules/ultrahtml": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/ultrahtml/-/ultrahtml-1.7.0.tgz",
      "integrity": "sha512-2xRd0VHoAQE4M+vF/DvFFB7pUV0ZxTW1TLi7lHQWnF/Sb5TPeEUV/l+hxcNnGO00ZXGnR0voCMmYRKQf+rvJ2g==",
      "license": "MIT"
    },
    "node_modules/uncrypto": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/uncrypto/-/uncrypto-0.1.3.tgz",
      "integrity": "sha512-Ql87qFHB3s/De2ClA9e0gsnS6zXG27SkTiSJwjCc9MebbfapQfuPzumMIUMi38ezPZVNFcHI9sUIepeQfw8J8Q==",
      "license": "MIT"
    },
    "node_modules/undici": {
      "version": "8.10.2",
      "resolved": "https://registry.npmjs.org/undici/-/undici-8.10.2.tgz",
      "integrity": "sha512-/y4/bH9YNU5hi9NIrpOuvGXFcxrj3CMrV+/AYpowAYTpHn8gX/XPFjNy766FPoYY0miQhdW977JFWKGNhBdwyQ==",
      "license": "MIT",
      "engines": {
        "node": ">=22.19.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.18.2.tgz",
      "integrity": "sha512-AsuCzffGHJybSaRrmr5eHr81mwJU3kjw6M+uprWvCXiNeN9SOGwQ3Jn8jb8m3Z6izVgknn1R0FTCEAP2QrLY/w==",
      "license": "MIT"
    },
    "node_modules/unified": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "bail": "^2.0.0",
        "devlop": "^1.0.0",
        "extend": "^3.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unifont": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/unifont/-/unifont-0.7.5.tgz",
      "integrity": "sha512-ULe/Cs+ZIsq+dcFofNkhqielCrUJnb5mr+Yc4EBM2VlL+6OZR6+cjtI2mT1bJvRBrVncqHAbLURxmPLcCXzWMg==",
      "license": "MIT",
      "dependencies": {
        "css-tree": "^3.1.0",
        "ohash": "^2.0.11",
        "undici": "^8.0.0"
      }
    },
    "node_modules/unist-util-is": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-6.0.1.tgz",
      "integrity": "sha512-LsiILbtBETkDz8I9p1dQ0uyRUWuaQzd/cuEeS1hoRSyW5E5XGmTzlwY1OrNzzakGowI9Dr/I8HVaw4hTtnxy8g==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position/-/unist-util-position-5.0.0.tgz",
      "integrity": "sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-5.1.0.tgz",
      "integrity": "sha512-m+vIdyeCOpdr/QeQCu2EzxX/ohgS8KbnPDgFni4dQsfSCtpz8UqDyY5GjRru8PDKuYn7Fq19j1CQ+nJSsGKOzg==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-6.0.2.tgz",
      "integrity": "sha512-goh1s1TBrqSqukSc8wrjwWhL0hiJxgA8m4kFxGlQ+8FYQ3C/m11FcTs4YYem7V664AhHVvgoQLk890Ssdsr2IQ==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unstorage": {
      "version": "1.17.5",
      "resolved": "https://registry.npmjs.org/unstorage/-/unstorage-1.17.5.tgz",
      "integrity": "sha512-0i3iqvRfx29hkNntHyQvJTpf5W9dQ9ZadSoRU8+xVlhVtT7jAX57fazYO9EHvcRCfBCyi5YRya7XCDOsbTgkPg==",
      "license": "MIT",
      "dependencies": {
        "anymatch": "^3.1.3",
        "chokidar": "^5.0.0",
        "destr": "^2.0.5",
        "h3": "^1.15.10",
        "lru-cache": "^11.2.7",
        "node-fetch-native": "^1.6.7",
        "ofetch": "^1.5.1",
        "ufo": "^1.6.3"
      },
      "peerDependencies": {
        "@azure/app-configuration": "^1.8.0",
        "@azure/cosmos": "^4.2.0",
        "@azure/data-tables": "^13.3.0",
        "@azure/identity": "^4.6.0",
        "@azure/keyvault-secrets": "^4.9.0",
        "@azure/storage-blob": "^12.26.0",
        "@capacitor/preferences": "^6 || ^7 || ^8",
        "@deno/kv": ">=0.9.0",
        "@netlify/blobs": "^6.5.0 || ^7.0.0 || ^8.1.0 || ^9.0.0 || ^10.0.0",
        "@planetscale/database": "^1.19.0",
        "@upstash/redis": "^1.34.3",
        "@vercel/blob": ">=0.27.1",
        "@vercel/functions": "^2.2.12 || ^3.0.0",
        "@vercel/kv": "^1 || ^2 || ^3",
        "aws4fetch": "^1.0.20",
        "db0": ">=0.2.1",
        "idb-keyval": "^6.2.1",
        "ioredis": "^5.4.2",
        "uploadthing": "^7.4.4"
      },
      "peerDependenciesMeta": {
        "@azure/app-configuration": {
          "optional": true
        },
        "@azure/cosmos": {
          "optional": true
        },
        "@azure/data-tables": {
          "optional": true
        },
        "@azure/identity": {
          "optional": true
        },
        "@azure/keyvault-secrets": {
          "optional": true
        },
        "@azure/storage-blob": {
          "optional": true
        },
        "@capacitor/preferences": {
          "optional": true
        },
        "@deno/kv": {
          "optional": true
        },
        "@netlify/blobs": {
          "optional": true
        },
        "@planetscale/database": {
          "optional": true
        },
        "@upstash/redis": {
          "optional": true
        },
        "@vercel/blob": {
          "optional": true
        },
        "@vercel/functions": {
          "optional": true
        },
        "@vercel/kv": {
          "optional": true
        },
        "aws4fetch": {
          "optional": true
        },
        "db0": {
          "optional": true
        },
        "idb-keyval": {
          "optional": true
        },
        "ioredis": {
          "optional": true
        },
        "uploadthing": {
          "optional": true
        }
      }
    },
    "node_modules/vfile": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-message": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.3.tgz",
      "integrity": "sha512-QTHzsGd1EhbZs4AsQ20JX1rC3cOlt/IWJruk893DfLRr57lcnOeMaWG4K0JrRta4mIJZKth2Au3mM3u03/JWKw==",
      "license": "MIT",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vite": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.2.2.tgz",
      "integrity": "sha512-cFKLV/PRgAUlIRm5WjMjJ86jrftzpqcgH+Us+DS8mI3CDNiH30Whrz8uHL3+MOLPAgqbMBAqWdAHAphOAM+z/Q==",
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.26",
        "rolldown": "~1.2.4",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.4.0 || ^0.5.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vitefu": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.1.3.tgz",
      "integrity": "sha512-ub4okH7Z5KLjb6hDyjqrGXqWtWvoYdU3IGm/NorpgHncKoLTCfRIbvlhBm7r0YstIaQRYlp4yEbFqDcKSzXSSg==",
      "license": "MIT",
      "workspaces": [
        "tests/deps/*",
        "tests/projects/*",
        "tests/projects/workspace/packages/*"
      ],
      "peerDependencies": {
        "vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/xml-naming": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/xml-naming/-/xml-naming-0.3.0.tgz",
      "integrity": "sha512-ghig2TBE/H11aOVgmahA3MhimvkBr6JIYknH/Dhdk10nXwdbIqBJsbfMxpvFPG8bAw77gN29aQWvKpmVoPlvPQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/xxhash-wasm": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/xxhash-wasm/-/xxhash-wasm-1.1.0.tgz",
      "integrity": "sha512-147y/6YNh+tlp6nd/2pWq38i9h6mz/EuQ6njIrmW8D1BS5nCqs0P6DG+m6zTGnNz5I+uhZ0SHxBs9BsPrwcKDA==",
      "license": "MIT"
    },
    "node_modules/yargs-parser": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-22.0.0.tgz",
      "integrity": "sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==",
      "license": "ISC",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yocto-queue": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-1.2.2.tgz",
      "integrity": "sha512-4LCcse/U2MHZ63HAJVE+v71o7yOdIe4cZ70Wpf8D/IyjDKYQLV5GD46B+hSTjJsvV5PztjvHoU580EftxjDZFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.5.4.tgz",
      "integrity": "sha512-sC95tT5iHHH9gtpj6A81kh+NEaRAUFN+qlUPDUbRfOMvNf5QCBqsb3WgvnpVtK5Y+4UfA6KqufotuTvMGiTlsA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zwitch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    }
  }
}
```


---

## `package.json`

```json
{
  "name": "rental",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/markdown-satteri": "^0.4.0",
    "@astrojs/mdx": "^8.0.0",
    "@astrojs/rss": "^4.0.19",
    "@astrojs/sitemap": "^3.7.4",
    "@tailwindcss/vite": "^4.3.3",
    "astro": "^7.3.1",
    "sharp": "^0.35.0",
    "tailwindcss": "^4.3.3"
  },
  "allowScripts": {
    "esbuild": true
  }
}
```


---

## `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://najemks.pl/sitemap-index.xml
```


---

## `src/components/ArticleCard.astro`

```astro
---
interface Props {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  tags?: string[];
  readingTime?: string;
}

const { id, title, description, pubDate, tags = [], readingTime } = Astro.props;
const category = tags[0] || 'Poradnik';

const formattedDate = pubDate.toLocaleDateString('pl-PL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
---

<a href={`/blog/${id}/`} class="card card-hover group flex h-full flex-col">
  <div class="mb-3.5 flex items-center justify-between gap-3">
    <span class="pill pill-accent">{category}</span>
    {readingTime ? <span class="text-xs font-medium text-text-muted">~ {readingTime} czytania</span> : null}
  </div>

  <h3 class="group-hover:text-accent-dark transition-colors">{title}</h3>
  <p class="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{description}</p>

  <div class="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-text-muted">
    <time datetime={pubDate.toISOString()}>{formattedDate}</time>
    <span class="card-arrow inline-flex items-center gap-1 font-semibold text-primary">
      Czytaj
      <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </div>
</a>
```


---

## `src/components/BaseHead.astro`

```astro
---
// Import the global.css file here so that it is included on
// all pages through the use of the <BaseHead /> component.
import '../styles/global.css';
import type { ImageMetadata } from 'astro';
import FallbackImage from '../assets/blog-placeholder-1.jpg';
import { SITE_TITLE } from '../consts';
import { Font } from 'astro:assets';

interface Props {
	title: string;
	description: string;
	image?: ImageMetadata;
}

const canonicalURL = new URL(Astro.url.pathname, Astro.site);

const { title, description, image = FallbackImage } = Astro.props;
---

<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.ico" />
<link rel="sitemap" href="/sitemap-index.xml" />
<link
	rel="alternate"
	type="application/rss+xml"
	title={SITE_TITLE}
	href={new URL('rss.xml', Astro.site)}
/>
<meta name="generator" content={Astro.generator} />

<Font cssVariable="--font-atkinson" preload />

<!-- Theme color — granatowy z oferty (dla mobile status bar) -->
<meta name="theme-color" content="#173643" />

<!-- Canonical URL -->
<link rel="canonical" href={canonicalURL} />

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image.src, Astro.url)} />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
```


---

## `src/components/CategoryCard.astro`

```astro
---
interface Props {
  href: string;
  title: string;
  description: string;
  icon: 'tools' | 'guide' | 'projects' | 'video';
  count?: string;
}

const { href, title, description, icon, count } = Astro.props;
---

<a href={href} class="card card-hover group flex h-full flex-col">
  <div class="mb-4 flex items-center justify-between">
    <span
      class="icon-tile"
      aria-hidden="true"
    >
      {icon === 'tools' && (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6l-3 3-2.8-.7-.7-2.8 3.5-2.5z" />
        </svg>
      )}
      {icon === 'guide' && (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z" />
          <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
          <path d="M9 7.5h7M9 10.5h5" />
        </svg>
      )}
      {icon === 'projects' && (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14" />
        </svg>
      )}
      {icon === 'video' && (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M10.5 9.5l4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
        </svg>
      )}
    </span>
    {count ? <span class="pill pill-muted">{count}</span> : null}
  </div>
  <h3 class="mb-1.5">{title}</h3>
  <p class="flex-1 text-sm leading-relaxed text-text-muted">{description}</p>
  <span
    class="card-arrow mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
  >
    Zobacz
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </span>
</a>

<style>
  .icon-tile {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    background: var(--color-cream);
    border: 1px solid var(--color-border);
    color: var(--color-primary);
    transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  }
  .group:hover .icon-tile {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-accent-light);
  }
</style>
```


---

## `src/components/Footer.astro`

```astro
---
import { NAV, CONTACT } from '../consts';
const year = new Date().getFullYear();
const hasContact =
  (CONTACT.telegram && CONTACT.telegram !== '{{DO_UZUPEŁNIENIA}}') ||
  (CONTACT.email && CONTACT.email !== '{{DO_UZUPEŁNIENIA}}');
---

<footer class="bg-primary-dark text-cream">
  <div class="container-site grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
    <!-- Kolumna 1: o stronie -->
    <div>
      <a href="/" class="mb-4 inline-flex items-center gap-2.5" aria-label="Najem KŚ — strona główna">
        <span
          class="inline-flex h-9 w-9 items-center justify-center rounded-xl text-accent-light"
          style="background: rgb(255 255 255 / 0.06); box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.1);"
        >
          <svg viewBox="0 0 24 24" fill="none" width="17" height="17" aria-hidden="true">
            <path d="M12 2.5 L14 10 L21.5 12 L14 14 L12 21.5 L10 14 L2.5 12 L10 10 Z" fill="currentColor" />
          </svg>
        </span>
        <span class="font-heading text-lg font-semibold text-white">Najem&thinsp;KŚ</span>
      </a>
      <p class="max-w-sm text-sm leading-relaxed text-cream/70">
        Otwarta baza narzędzi open source, projektów z GitHub i poradników krok po kroku
        dla osób zarządzających najmem krótkoterminowym. Darmowy dostęp, bez abonamentów.
      </p>
    </div>

    <!-- Kolumna 2: Nawigacja -->
    <nav aria-label="Nawigacja w stopce">
      <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-cream/50">
        Nawigacja
      </h2>
      <ul class="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
        {NAV.map((link) => (
          <li>
            <a
              href={link.href}
              class="text-cream/80 transition-colors hover:text-accent-light"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    <!-- Kolumna 3: Kontakt -->
    <div>
      <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-cream/50">
        Kontakt
      </h2>
      <ul class="space-y-2.5 text-sm">
        {hasContact ? (
          <>
            {CONTACT.telegram && CONTACT.telegram !== '{{DO_UZUPEŁNIENIA}}' ? (
              <li>
                <a
                  href={CONTACT.telegram}
                  class="text-cream/80 transition-colors hover:text-accent-light"
                  target="_blank"
                  rel="noopener"
                >
                  Telegram
                </a>
              </li>
            ) : null}
            {CONTACT.email && CONTACT.email !== '{{DO_UZUPEŁNIENIA}}' ? (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  class="text-cream/80 transition-colors hover:text-accent-light"
                >
                  {CONTACT.email}
                </a>
              </li>
            ) : null}
          </>
        ) : (
          <li>
            <a href="/kontakt/" class="text-cream/80 transition-colors hover:text-accent-light">
              Strona kontaktowa
            </a>
          </li>
        )}
      </ul>
      <p class="mt-5 text-xs leading-relaxed text-cream/40">
        Masz pomysł na narzędzie lub poradnik? Napisz — baza rośnie z każdego zgłoszenia.
      </p>
    </div>
  </div>

  <!-- Pasek dolny -->
  <div class="border-t border-white/10">
    <div class="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/50 sm:flex-row">
      <p>© {year} Najem KŚ. Darmowa baza wiedzy i narzędzi.</p>
      <p>Zbudowane na otwartych komponentach — open source, self-hosted.</p>
    </div>
  </div>
</footer>
```


---

## `src/components/FormattedDate.astro`

```astro
---
interface Props {
	date: Date;
}

const { date } = Astro.props;
---

<time datetime={date.toISOString()}>
	{
		date.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
</time>
```


---

## `src/components/Header.astro`

```astro
---
import { SITE_TITLE } from '../consts';
import HeaderLink from './HeaderLink.astro';
---

<header>
	<nav>
		<h2><a href="/">{SITE_TITLE}</a></h2>
		<div class="internal-links">
			<HeaderLink href="/">Home</HeaderLink>
			<HeaderLink href="/blog">Blog</HeaderLink>
			<HeaderLink href="/about">About</HeaderLink>
		</div>
		<div class="social-links">
			<a href="https://m.webtoo.ls/@astro" target="_blank">
				<span class="sr-only">Follow Astro on Mastodon</span>
				<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"
					><path
						fill="currentColor"
						d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
					></path></svg
				>
			</a>
			<a href="https://twitter.com/astrodotbuild" target="_blank">
				<span class="sr-only">Follow Astro on Twitter</span>
				<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"
					><path
						fill="currentColor"
						d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
					></path></svg
				>
			</a>
			<a href="https://github.com/withastro/astro" target="_blank">
				<span class="sr-only">Go to Astro's GitHub repo</span>
				<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"
					><path
						fill="currentColor"
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					></path></svg
				>
			</a>
		</div>
	</nav>
</header>
<style>
	header {
		margin: 0;
		padding: 0 1em;
		background: white;
		box-shadow: 0 2px 8px rgba(var(--black), 5%);
	}
	h2 {
		margin: 0;
		font-size: 1em;
	}

	h2 a,
	h2 a.active {
		text-decoration: none;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	nav a {
		padding: 1em 0.5em;
		color: var(--black);
		border-bottom: 4px solid transparent;
		text-decoration: none;
	}
	nav a.active {
		text-decoration: none;
		border-bottom-color: var(--accent);
	}
	.social-links,
	.social-links a {
		display: flex;
	}
	@media (max-width: 720px) {
		.social-links {
			display: none;
		}
	}
</style>
```


---

## `src/components/HeaderLink.astro`

```astro
---
import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;
const pathname = Astro.url.pathname.replace(import.meta.env.BASE_URL, '');
const subpath = pathname.match(/[^\/]+/g);
const isActive = href === pathname || href === '/' + (subpath?.[0] || '');
---

<a href={href} class:list={[className, { active: isActive }]} {...props}>
	<slot />
</a>
<style>
	a {
		display: inline-block;
		text-decoration: none;
	}
	a.active {
		font-weight: bolder;
		text-decoration: underline;
	}
</style>
```


---

## `src/components/HeroVisual.astro`

```astro
---
// Subtelny wizualny panel workflow — czysty HTML/CSS, bez ilustracji
// marketingowych. Pokazuje, czym jest "automatyzacja" na tej stronie:
// samodzielnie uruchamiane narzędzia spięte w prosty workflow.
const rows = [
  { label: 'Kalendarze', detail: 'sync iCal z kanałów', status: 'co 60 min', statusClass: 'pill-green', icon: 'calendar' },
  { label: 'Bot Telegram', detail: 'powiadomienia o rezerwacjach', status: 'aktywny', statusClass: 'pill-green', icon: 'bot' },
  { label: 'Ceny', detail: 'reguły minimalnego pobytu', status: 'reguły: 3', statusClass: '', icon: 'tag' },
];
---

<div class="hero-visual" aria-hidden="true">
  <div class="hv-panel">
    <div class="hv-titlebar">
      <span class="hv-dots">
        <i></i><i></i><i class="gold"></i>
      </span>
      <span class="hv-title">workflow · najem-ks</span>
    </div>
    <div class="hv-body">
      {rows.map((row) => (
        <div class="hv-row">
          <span class="hv-icon">
            {row.icon === 'calendar' && (
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="3" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
            )}
            {row.icon === 'bot' && (
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 4L3 11l6 2.5L11.5 20l3.5-5 6-11z" />
              </svg>
            )}
            {row.icon === 'tag' && (
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 12.5L12.5 20a2 2 0 0 1-2.8 0L4 14.3V4h10.3l5.7 5.7a2 2 0 0 1 0 2.8z" />
                <circle cx="8" cy="8" r="1.6" />
              </svg>
            )}
          </span>
          <span class="hv-text">
            <strong>{row.label}</strong>
            <small>{row.detail}</small>
          </span>
          <span class={`pill ${row.statusClass}`}>{row.status}</span>
        </div>
      ))}
      <div class="hv-progress">
        <span style="width: 78%;"></span>
      </div>
      <p class="hv-progress-label">4 z 5 automatyzacji skonfigurowanych</p>
    </div>
  </div>

  <span class="hv-chip hv-chip-code">cron&nbsp; 0 * * * *  sync-ical</span>
  <span class="hv-chip hv-chip-meta">12 obiektów · 3 kanały</span>
</div>

<style>
  .hero-visual {
    position: relative;
    padding: 1rem 0.5rem;
  }
  .hv-panel {
    position: relative;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-pop);
    overflow: hidden;
  }
  .hv-titlebar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem 1.25rem;
    background: var(--color-cream);
    border-bottom: 1px solid var(--color-border);
  }
  .hv-dots {
    display: inline-flex;
    gap: 0.3rem;
  }
  .hv-dots i {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--color-border-strong);
  }
  .hv-dots i.gold {
    background: var(--color-accent-light);
  }
  .hv-title {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-text-muted);
  }
  .hv-body {
    padding: 1.25rem;
    display: grid;
    gap: 0.9rem;
  }
  .hv-row {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.8rem 0.95rem;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }
  .hv-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--color-primary);
    color: var(--color-accent-light);
  }
  .hv-text {
    display: grid;
    gap: 0.1rem;
    min-width: 0;
  }
  .hv-text strong {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-primary);
  }
  .hv-text small {
    font-size: 0.78rem;
    color: var(--color-text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hv-row .pill {
    margin-left: auto;
    flex-shrink: 0;
  }
  .hv-progress {
    height: 8px;
    border-radius: 999px;
    background: var(--color-cream);
    border: 1px solid var(--color-border);
    overflow: hidden;
  }
  .hv-progress span {
    display: block;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--color-accent-light), var(--color-accent));
  }
  .hv-progress-label {
    font-size: 0.78rem;
    color: var(--color-text-muted);
    margin-top: -0.2rem;
  }
  .hv-chip {
    position: absolute;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-pop);
  }
  .hv-chip-code {
    left: -0.5rem;
    bottom: -0.75rem;
    padding: 0.55rem 0.95rem;
    background: var(--color-primary-dark);
    color: #DCE8EC;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.02em;
  }
  .hv-chip-meta {
    right: 0;
    top: -0.85rem;
    padding: 0.5rem 0.95rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-primary);
  }
</style>
```


---

## `src/components/Navbar.astro`

```astro
---
import { NAV } from '../consts';

function isActive(href: string): boolean {
  const path = Astro.url.pathname.replace(/\/+$/, '') || '/';
  if (href === '/') return path === '/';
  const base = href.replace(/\/+$/, '');
  return path === base || path.startsWith(base + '/');
}
---

<header class="site-header">
  <nav
    class="container-site flex items-center justify-between gap-4 py-3.5 md:py-4"
    aria-label="Główna nawigacja"
  >
    <!-- Marka: lekki wordmark zamiast ciężkiego kwadratowego badge'a -->
    <a href="/" class="brand" aria-label="Najem KŚ — strona główna">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
          <path
            d="M12 2.5 L14 10 L21.5 12 L14 14 L12 21.5 L10 14 L2.5 12 L10 10 Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span class="brand-name">Najem&thinsp;<span class="brand-accent">KŚ</span></span>
    </a>

    <!-- Menu desktop -->
    <ul class="hidden items-center gap-0.5 md:flex">
      {NAV.map((link) => (
        <li>
          <a
            href={link.href}
            class={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    <!-- Hamburger (mobile) -->
    <button
      id="menu-toggle"
      type="button"
      class="menu-btn md:hidden"
      aria-label="Otwórz menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path id="icon-open" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7h16M4 12h16M4 17h16" />
        <path id="icon-close" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <!-- Menu mobilne -->
  <div id="mobile-menu" class="hidden md:hidden">
    <ul class="container-site flex flex-col gap-1 pb-5 pt-1">
      {NAV.map((link) => (
        <li>
          <a
            href={link.href}
            class={`mobile-link ${isActive(link.href) ? 'mobile-link-active' : ''}`}
          >
            {link.label}
          </a>
        </li>
      ))}
      <li class="mt-3">
        <span class="pill pill-dot">Darmowy dostęp · bez abonamentów</span>
      </li>
    </ul>
  </div>
</header>

<style>
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
  }
  .brand-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 11px;
    background: linear-gradient(135deg, #204453 0%, #0E232C 100%);
    color: #C9A24D;
    box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.08);
  }
  .brand-name {
    font-family: var(--font-heading);
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--color-primary);
  }
  .brand-accent {
    color: var(--color-accent-dark);
  }
  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-primary);
    cursor: pointer;
    transition: border-color 0.15s ease, background-color 0.15s ease;
  }
  .menu-btn:hover {
    border-color: var(--color-border-strong);
    background: var(--color-cream);
  }
  .mobile-link {
    display: block;
    padding: 0.7rem 0.9rem;
    border-radius: var(--radius-md);
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--color-primary);
    text-decoration: none;
    transition: background-color 0.15s ease;
  }
  .mobile-link:hover {
    background: var(--color-cream);
  }
  .mobile-link-active,
  .mobile-link-active:hover {
    background: var(--color-primary);
    color: var(--color-cream);
  }
</style>

<script>
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  toggle?.addEventListener('click', () => {
    const nowHidden = menu?.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!nowHidden));
    toggle.setAttribute('aria-label', nowHidden ? 'Otwórz menu' : 'Zamknij menu');
    iconOpen?.classList.toggle('hidden');
    iconClose?.classList.toggle('hidden');
  });

  // Zamknij menu po kliknięciu linku
  menu?.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu?.classList.add('hidden');
      toggle?.setAttribute('aria-expanded', 'false');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    })
  );
</script>
```


---

## `src/components/ProjectCard.astro`

```astro
---
interface Props {
  title: string;
  description: string;
  level: string;
  requirements?: string[];
  tags?: string[];
  repoUrl?: string;
  demoUrl?: string;
  guideUrl?: string;
}

const { title, description, level, requirements = [], tags = [], repoUrl, demoUrl, guideUrl } = Astro.props;
---

<article class="card card-hover flex h-full flex-col">
  <div class="mb-3.5 flex items-center justify-between gap-3">
    <span class="pill pill-accent">{level}</span>
    <span class="pill pill-muted">do samodzielnego uruchomienia</span>
  </div>

  <h3>{title}</h3>
  <p class="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>

  {requirements.length > 0 ? (
    <div class="mt-4">
      <p class="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-text-muted">
        Wymagania
      </p>
      <ul class="space-y-1.5">
        {requirements.map((r) => (
          <li class="flex items-start gap-2 text-sm text-text">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="var(--color-accent)" stroke-width="1.8" class="mt-1 shrink-0" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : null}

  {tags.length > 0 ? (
    <div class="mt-4 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span class="pill">{tag}</span>
      ))}
    </div>
  ) : null}

  {(repoUrl || demoUrl || guideUrl) ? (
  <div class="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
    {repoUrl ? (
      <a href={repoUrl} target="_blank" rel="noopener" class="btn btn-sm btn-secondary">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        GitHub
      </a>
    ) : null}
    {demoUrl ? (
      <a href={demoUrl} target="_blank" rel="noopener" class="btn btn-sm btn-secondary">
        Demo ↗
      </a>
    ) : null}
    {guideUrl ? (
      <a href={guideUrl} class="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark transition-colors hover:text-primary">
        Otwórz poradnik
        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    ) : null}
  </div>
  ) : null}
</article>
```


---

## `src/components/SectionHeading.astro`

```astro
---
interface Props {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  actionHref?: string;
  actionLabel?: string;
}

const { eyebrow, title, lead, align = 'left', actionHref, actionLabel } = Astro.props;
const centered = align === 'center';
---

<div
  class={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
    centered ? 'items-center text-center' : ''
  }`}
>
  <div class={`max-w-2xl ${centered ? 'mx-auto' : ''}`}>
    <p class="eyebrow mb-3">{eyebrow}</p>
    <h2>{title}</h2>
    {lead ? <p class={`lead mt-4 ${centered ? 'mx-auto' : ''}`}>{lead}</p> : null}
  </div>
  {actionHref && actionLabel ? (
    <a
      href={actionHref}
      class="group inline-flex shrink-0 items-center gap-1.5 font-semibold text-primary transition-colors hover:text-accent-dark"
    >
      {actionLabel}
      <span class="card-arrow inline-flex" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </a>
  ) : null}
</div>
```


---

## `src/components/ToolCard.astro`

```astro
---
interface Props {
  name: string;
  who: string;
  description: string;
  stars: number;
  license: string;
  pushed_at: string;
  archived?: boolean;
  categoryLabel: string;
  level: string;
  guide?: string;
  url: string;
}

const {
  name, who, description, stars, license, pushed_at,
  archived = false, categoryLabel, level, guide, url,
} = Astro.props;

const licClass =
  /^(MIT|Apache-2\.0|BSD|BSD-2|BSD-3|BSD-3-Clause|ISC|Unlicense|CC0|CC-BY|Zlib)/.test(license)
    ? 'lic-ok'
    : license === 'None' || license === 'null'
      ? 'lic-bad'
      : 'lic-warn';

const levelDots = level === 'zaawansowany' ? 3 : level === 'średni' ? 2 : 1;
---

<article class="card card-hover flex h-full flex-col">
  <div class="mb-4 flex items-start justify-between gap-3">
    <span class="tool-avatar" aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
    <span class="lic {licClass}" title={`Licencja: ${license}`}>{license}</span>
  </div>

  <h3 class="text-[1.05rem] leading-snug">
    <a href={url} target="_blank" rel="noopener" class="transition-colors hover:text-accent-dark">
      {name}
      {archived ? (
        <span class="lic lic-bad ml-2 align-middle" title="Repozytorium zarchiwizowane">
          archiwum
        </span>
      ) : null}
    </a>
  </h3>
  <p class="mt-1 text-xs font-medium uppercase tracking-[0.06em] text-text-muted/80">{who}</p>
  <p class="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">{description}</p>

  <div class="mt-4 flex flex-wrap items-center gap-1.5">
    <span class="pill">{categoryLabel}</span>
    <span class="pill pill-muted" title={`Poziom: ${level}`}>
      <span class="level-dots" aria-hidden="true">
        <i class={levelDots >= 1 ? 'on' : ''}></i>
        <i class={levelDots >= 2 ? 'on' : ''}></i>
        <i class={levelDots >= 3 ? 'on' : ''}></i>
      </span>
      {level}
    </span>
  </div>

  <div class="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
    <span class="inline-flex items-center gap-3 text-xs text-text-muted">
      <span class="inline-flex items-center gap-1">
        <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" class="text-accent" aria-hidden="true">
          <path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2-.7-4.3-3.1-3 4.3-.6z" />
        </svg>
        {stars.toLocaleString('pl-PL')}
      </span>
      <span class="hidden sm:inline">zmiana: {pushed_at}</span>
    </span>
    <span class="flex items-center gap-3 text-sm font-semibold">
      {guide ? (
        <a href={guide} class="text-accent-dark transition-colors hover:text-primary">
          Poradnik
        </a>
      ) : null}
      <a href={url} target="_blank" rel="noopener" class="group/github inline-flex items-center gap-1 text-primary transition-colors hover:text-accent-dark">
        GitHub
        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
          <path d="M6.5 3.5H3.5v9.5h9.5v-3M9.5 2.5h4v4M13.5 2.5l-7 7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </span>
  </div>
</article>

<style>
  .tool-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    background: var(--color-primary);
    color: var(--color-accent-light);
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 600;
    flex-shrink: 0;
  }
  .level-dots {
    display: inline-flex;
    align-items: center;
    gap: 3px;
  }
  .level-dots i {
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: var(--color-border-strong);
  }
  .level-dots i.on {
    background: var(--color-accent);
  }
</style>
```


---

## `src/consts.ts`

```typescript
// Globalne dane strony — importuj skąd chcesz: `import { NAV } from '../consts'`

export const SITE_TITLE = 'RentalDev';
export const SITE_DESCRIPTION =
  'Twoja baza wiedzy o automatyzacji najmu krótkoterminowego.';

// Menu główne — kolejność = kolejność w navbarze
export const NAV = [
  { label: 'Start', href: '/' },
  { label: 'Narzędzia', href: '/narzedzia' },
  { label: 'Poradniki', href: '/blog' },
  { label: 'Projekty', href: '/programy' },
  { label: 'Wideo', href: '/wideo' },
  { label: 'O stronie', href: '/about' },
] as const;

// Kontakt — {{DO_UZUPEŁNIENIA}}: podaj swoje dane
export const CONTACT = {
  telegram: '{{DO_UZUPEŁNIENIA}}', // np. https://t.me/twojanick
  email: '{{DO_UZUPEŁNIENIA}}', // np. kontakt@twojadomena.pl
};
```


---

## `src/content.config.ts`

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Poradniki — wszystkie treści są darmowe (schemat bez `access`/`price`
// uniemożliwia przypadkowe przywrócenie paywalla).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

// Wideo / tutoriale — miejsce pod przyszłe materiały wideo.
// `videoUrl` (YouTube/Vimeo) — gdy puste, karta pokazuje stan "w przygotowaniu".
const wideo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wideo' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
    videoUrl: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Projekty do samodzielnego uruchomienia (GitHub / open source / własne).
const programy = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    guideUrl: z.string().optional(),
    level: z.enum(['początkujący', 'średni', 'zaawansowany']).default('początkujący'),
    requirements: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, wideo, programy };
```


---

## `src/content/blog/ile-placisz-za-saas.md`

```markdown
---
title: "Ile naprawdę płacisz za SaaS-y do najmu? Policz to, zanim kupisz kolejny"
description: "PMS, channel manager, narzędzie do sprzątania, dynamiczne ceny — host z 5 obiektów płaci 300–800 zł/mies. Pokazuję, ile z tego pokrywają darmowe odpowiedniki z katalogu."
pubDate: 2026-09-08
tags: ["koszty", "saas", "open-source"]
readingTime: "6 min"
---

Cena abonamentu nigdy nie boli, bo jest rozłożona. Ale zsumuj kwartalne wyciągi — większość
hostów tego nie robi.

## Tabela prawdy (5 obiektów, PL, 2026)

| Funkcja | Typowy SaaS | Darmowy odpowiednik z katalogu |
|---|---|---|
| Channel manager / sync iCal | 150–400 zł/mies | Sync-Rentals-Calendar + cron |
| Kody do zamków z rezerwacji | 100–250 zł/mies | Home Assistant + własny skrypt |
| Skrzynka wiadomości gości | 80–200 zł/mies | FreeScout + bot Telegram |
| Plan sprzątań dla ekipy | 100–200 zł/mies | własny kalendarz iCal + czat |
| Raporty rentowności | 150–300 zł/mies | Metabase + dbt (wzorce warehouse) |

Suma SaaS: **580–1350 zł/mies.** Rocznie: **7–16 tys. zł.** To ceny za narzędzia, które
raz skonfigurowane, robią rzeczy, do których nie potrzebujesz cudzej chmury.

## Ale (i to ważne „ale”)

Open-source nie jest darmowy w sensie „zero pracy”:

1. **Ktoś musi to skonfigurować** — kilka godzin jednorazowo (Twoje albo kogoś, kto w to wchodzi).
2. **Ktoś musi to utrzymywać** — aktualizacje, kopie zapasowe. To godziny w miesiącu, nie dni.
3. **Nie każde narzędzie ma polskie wsparcie** — dokumentacje czytasz po angielsku.

Dlatego zasada: **automatyzuj open-source tam, gdzie proces jest stabilny**
(kalendarze, kody, alerty), i **płać za SaaS tam, gdzie liczy się wsparcie i szybka reakcja**
(np. channel manager przy 10+ kanałach: każda godzina awarii to puste noce).

## Kalkulator na marginesie kartki

Zanim kupisz kolejny abonament, policz trzy liczby:

1. Ile **godzin/mies.** realnie Cię to kosztuje dziś ręcznie?
2. Ile kosztuje SaaS **rocznie**, z podatkiem?
3. Po ilu miesiącach zwróciłyby się **godziny konfiguracji** na open-source?

Jeśli punkt 3 wychodzi poniżej 12 miesięcy — zastanów się poważnie nad przejściem na
open-source. Nie wiesz, które narzędzia z [katalogu](/narzedzia/) pasują do Twojej liczby
obiektów? Podaj szczegóły przez [stronę kontaktową](/kontakt/) — pomogę dobrać zestaw
i opiszę go w kolejnym poradniku.
```


---

## `src/content/blog/jak-podpiac-beds24-do-telegrama.md`

````markdown
---
title: "Jak podpiąć Beds24 do Telegrama"
description: "Darmowe powiadomienia o rezerwacjach, anulowaniach i zmianach kalendarza prosto na Twój telefon. Własny bot, własny serwer, zero abonamentu."
pubDate: 2026-09-01
tags: ["beds24", "telegram", "automatyzacja"]
readingTime: "9 min"
---

Zamiast co godzinę odświeżać panel Beds24, niech on sam napisze do Ciebie — na Telegrama.
Poniżej najprostsza, w pełni darmowa wersja: hook z Beds24 → mały skrypt na Twoim serwerze →
wiadomość do Twojego bota. Koszt: 0 zł/mies. (zakładając, że masz VPS — jeśli nie, zacznij od
najtańszego dostępnego, wystarczy 1 vCPU).

## Co dostaniesz

- natychmiastową wiadomość na telefon przy zdarzeniu, które wybierzesz (np. nowa rezerwacja,
  anulowanie, zmiana danych rezerwacji),
- pełną kontrolę: treść, do kogo, jakie zdarzenia,
- zero abonamentów i zero pośredników.

## Czego potrzebujesz

1. Konto Beds24 (z dostępem do ustawień hooków/webhooków).
2. Bot w Telegramie (uruchomisz w 2 minuty).
3. Adres URL do Twojego serwera z protokołem HTTPS (VPS + dowolny serwer web; do HTTPS
   polecam Caddy — certyfikat załatwia sam).

## Krok 1. Stwórz bota w Telegramie

1. Otwórz Telegrama i znajdź **@BotFather** → `/newbot`.
2. Podaj nazwę i użytkownika bota (np. `TwojNajemBot` / `twoj_najem_bot`).
3. Zapisz **token** — wygląda jak `123456789:AAH...`. Trzymaj go jak hasło.

## Krok 2. Pobierz swój chat_id

1. Napisz do swojego bota cokolwiek (np. `start`).
2. Otwórz w przeglądarce: `https://api.telegram.org/bot<TOKEN>/getUpdates`.
3. W odpowiedzi JSON znajdziesz `"chat":{"id":123456789}` — to Twój `chat_id`.

## Krok 3. Stwórz webhook w Beds24

W panelu Beds24 wejdź w **Ustawienia → Hooks (Webhooks)** i dodaj nowy hook:

1. **Zdarzenia** — zaznacz te, które Cię interesują (np. `Booking created`, `Booking cancelled`,
   `Reservation modified`). Zaczynaj od jednego, żeby nie tonąć w wiadomościach.
2. **URL** — podaj adres swojego endpointu, np. `https://twoj-serwer.pl/hook/beds24`.
3. Jeśli Beds24 oferuje pole na dodatkowe nagłówki/sekret — użyj go (patrz Krok 5).

Od tej chwili Beds24 przy każdym wybranym zdarzeniu wyśle do Twojego URL-a żądanie POST z
danych tego zdarzenia.

## Krok 4. Endpoint, który wysyła wiadomość

Minimalny serwer w Pythonie (FastAPI) — na serwerze:

```bash
pip install fastapi uvicorn httpx
```

`webhook.py`:

```python
import os

import httpx
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()

TOKEN = os.environ["TG_BOT_TOKEN"]   # token z kroku 1
CHAT_ID = os.environ["TG_CHAT_ID"]   # chat_id z kroku 2
SECRET = os.environ.get("HOOK_SECRET")  # opcjonalny wspólny sekret z Beds24


@app.post("/hook/beds24")
async def beds24_hook(request: Request):
    # Weryfikacja sekretu (jeśli podałeś go w ustawieniach hooka)
    if SECRET and request.headers.get("x-hook-secret") != SECRET:
        raise HTTPException(status_code=403)

    data = await request.json()

    # Struktura payloadu zależy od zdarzenia — na start zaloguj całość
    # (print(data)), sprawdź, jakie pola interesują Ciebie, i zbuduj treść.
    event = data.get("hook_name") or data.get("event") or "zdarzenie"
    fields = data.get("data") or data
    lines = [f"🔔 Beds24: {event}"]
    if isinstance(fields, dict):
        lines += [f"{k}: {v}" for k, v in list(fields.items())[:8]]
    text = "\n".join(lines)

    async with httpx.AsyncClient(timeout=10) as client:
        await client.post(
            f"https://api.telegram.org/bot{TOKEN}/sendMessage",
            json={"chat_id": CHAT_ID, "text": text},
        )
    return {"ok": True}
```

Uruchomienie:

```bash
TG_BOT_TOKEN="..." TG_CHAT_ID="123456789" HOOK_SECRET="..." \
  uvicorn webhook:app --host 0.0.0.0 --port 8000
```

**Ważne:** dokładnie nie znam struktury payloadu dla każdego zdarzenia (Beds24 zmienia formaty) —
dlatego skrypt na start loguje całość (`print(data)`). Obejrzyj 2–3 pierwsze zdarzenia i
dopasuj listę pól do tego, co chcesz widzieć.

## Krok 5. HTTPS, firewall i auto-start

```Caddyfile
# Caddyfile — Caddy sam wystawi i odnowi certyfikat
twoj-serwer.pl {
    reverse_proxy localhost:8000
}
```

- **Nagłówek sekretu** — jeśli Beds24 pozwala na dodatkowe nagłówki, wstaw `x-hook-secret`
  z losową wartością (skrypt powyżej go weryfikuje).
- **Nieprzewidywalny path** — `/hook/beds24` jest OK, ale lepiej `/hook/x8k2m9` —
  chroni przed losowymi skanami internetu.
- **Auto-start** — systemd albo `pm2 start webhook.py --name beds24-webhook && pm2 save`.

## Testowanie

1. W panelu Beds24 wyszukaj opcję testu hooka (jednorazowe wywołanie) — albo poczekaj na
   pierwsze naturalne zdarzenie.
2. Sprawdź `journalctl -u caddy` / logi uvicorn, że dotarł POST.
3. Telegram: powinna pojawić się wiadomość z nagłówkiem zdarzenia.

## Ograniczenia i następne kroki

- To **jednostronna** automatyzacja: dostajesz powiadomienia, ale nie odpowiadasz gościom.
  Na auto-odpowiady gości potrzebujesz API Beds24 + frameworka botowego (aiogram/grammy —
  oba w [katalogu](/narzedzia/)) i osobnego poradnika, który powstaje.
- Hooki to „push”. Jeśli wolisz „pull” (sam co godzinę sprawdzasz API), Beds24 ma API
  REST — to temat na kolejny wpis.

Masz inne zdarzenie, które chcesz łapać (np. zmiana cen, wiadomość gościa)? Napisz przez
[stronę kontaktową](/kontakt/) — jeśli temat się powtórzy, powstanie z niego osobny poradnik.
````


---

## `src/content/blog/licencje-open-source-dla-hostow.md`

```markdown
---
title: "Zanim użyjesz darmowego narzędzia z GitHub: licencje dla hostów, łamanie po polsku"
description: "MIT, Apache, GPL, AGPL — co wolno Ci robić z darmowym narzędziem jako host najmu krótkoterminowego, a co grozi mandatem. Bez prawnika, na przykładach."
pubDate: 2026-09-08
tags: ["licencje", "open-source", "poradnik"]
readingTime: "8 min"
---

Darmowe nie znaczy „rób co chcesz”. Każde narzędzie z [katalogu](/narzedzia/) ma licencję,
która mówi, co wolno Ci zrobić z kodem. Krótki przewodnik dla hosta — bez prawnika.

## Trzy kolory, którymi oznaczam narzędzia

- **Zielony (MIT, Apache-2.0, BSD)** — używaj jak chcesz: komercyjnie, w swojej ofercie,
  zmodyfikowany, nawet sprzedawaj. Jedyne wymagania: zachowaj informację o autorach w plikach
  licencji. To jest „darmowe” w potocznym sensie.
- **Żółty (GPL, AGPL, LGPL, MPL)** — wolno Ci **używać** narzędzia (uruchamiać je dla siebie
  i klientów), ale jeśli zmienisz kod i rozpowszechniasz go dalej, musisz udostępnić swoje
  zmiany na tych samych zasadach. AGPL dodatkowo „widzi” przez serwer. Praktyczna zasada dla hosta:
  **używaj jako usługi, nie wbuduj w produkt, który sprzedajesz**.
- **Czerwony (brak licencji)** — „all rights reserved”. Autor nie dał Ci żadnych praw.
  Możesz patrzeć i uczyć się, ale nie kopiuj kodu.

## Co to znaczy dla Twojego biznesu

1. **PMS na MIT** — możesz go postawić dla swoich obiektów, zmienić logo
   i obsługiwać nim 10 apartamentów. Możesz nawet wziąć pieniądze od innych hostów za „zarządzanie
   ich obiektami w Twoim systemie”.
2. **Narzędzie na AGPL (np. FreeScout, Grafana)** — postaw dla siebie, podłącz maila Booking.com,
   używaj. Nie pakuj jego kodu w aplikację, którą sprzedasz jako swoją.
3. **Scraper (np. pyairbnb)** — licencja MIT, ale to **warunki Airbnb**, nie licencja, są tu
   problemem. Publiczne dane do analizy własnej — OK; systematyczne masowe pobieranie — ryzyko.

## Szybka ściąga

| Chcesz… | Licencja, której szukasz |
|---|---|
| używać narzędzia w swojej firmie | dowolna z zielonych |
| wbudować w usługę dla klientów | MIT / Apache / BSD |
| zmienić kod narzędzia dla siebie | dowolna, ale GPL wymaga publikacji zmian |
| sprzedawać zmodyfikowaną wersję | tylko MIT / Apache / BSD |

## Lista kontrolna przed wdrożeniem

1. Sprawdź plik `LICENSE` w repo (nie opis na stronie).
2. Jeśli GPL/AGPL: planujesz używać jako usługa? Jeśli tak — spokój.
3. Jeśli brak licencji: napisz do autora o zgodę albo wybierz coś innego z katalogu.
4. Zachowaj oryginalne pliki licencji w swoich wdrożeniach (to obowiązek w MIT/Apache).

## Gdzie szukać dalej

- Pełny spis licencji z [katalogu](/narzedzia/) jest oznaczony kolorami przy każdej pozycji —
  przed instalacją spójrz na chip przy nazwie narzędzia.
- W razie wątpliwości przeczytaj `LICENSE` dwa razy i zachowaj go w swoim repozytorium.

Znalazłeś narzędzie, o którego licencji nie jestem pewien? Podaj link przez
[stronę kontaktową](/kontakt/) — dopiszę analizę do poradnika.
```


---

## `src/content/blog/sync-kalendarzy-ical-za-darmo.md`

````markdown
---
title: "Sync kalendarzy Airbnb i Booking za darmo: iCal na własnym serwerze"
description: "Krok po kroku: zbierasz feedy iCal wszystkich kanałów na własnym serwerze i widzisz jeden kalendarz. Zero abonamentu, pełna kontrola. Na bazie Sync-Rentals-Calendar."
pubDate: 2026-09-08
tags: ["kalendarze", "ical", "poradnik"]
readingTime: "7 min"
---

Podwójne rezerwacje biorą się z tego, że każdy kanał ma „swój” kalendarz. Rozwiązanie znasz:
channel manager za 150–400 zł/mies. Jest też droga darmowa — na własnym serwerze, na otwartych
komponentach z [katalogu](/narzedzia/). Pokażę najprostszą wersję.

## Co zbudujemy

- jeden zbiorczy kalendarz wszystkich Twoich obiektów i kanałów,
- odświeżany automatycznie (np. co godzinę),
- dostępny w przeglądarce i do subskrypcji w telefonie,
- koszt: 0 zł (zakładam, że masz VPS — jeśli nie, zacznij od [Radicale](#krok-0)).

## Krok 0. Wybierz bazę

- **Sync-Rentals-Calendar** (PHP) — najprostszy self-hosted „iCal middle layer” dla hostów.
- **Radicale** (Python, GPL) — lekki serwer CalDAV: kalendarz subskrybowany w kalendarzu telefonu.
- **node-ical** (Node) lub **icalendar** (Python) — jeśli chcesz napisać własny kawałek logiki.

## Krok 1. Zbierz adresy feedów

W panelu każdego kanału znajdź eksport kalendarza (Airbnb: Profil → Ustawienia → Integracje →
Kalendarz → Eksport; Booking podobnie). Zapisz URL-e — to zwykłe linki `.ics`.

## Krok 2. Postaw Sync-Rentals-Calendar na VPS

```bash
git clone https://github.com/pixelcrash/Sync-Rentals-Calendar.git
cd Sync-Rentals-Calendar
# postępuj wg README: PHP + lekki serwer (php -S lub nginx)
```

Wklej feedy wszystkich kanałów. Od tej chwili masz **jedno miejsce prawdy** dla dostępności.

## Krok 3. Spraw, żeby kanały mówiły prawdę

Ważne: samo „oglądanie” nie chroni przed podwójną rezerwacją. W panelu każdego kanału
podaj też **import** z Twojego serwera (feed zwrotny). Kanały będą się blokować nawzajem
w ciągu kilku minut od rezerwacji, zamiast czekać na ręczną aktualizację.

## Krok 4. Automatyczne odświeżanie

Cron wystarczy:

```cron
0 * * * * curl -s https://twoj-serwer.pl/sync.php > /dev/null
```

## Typowe problemy

- **Feed przestaje działać po zmianie hasła Airbnb** — wygeneruj nowy link, podmień.
- **Kanał cache'uje import** — Booking potrafi odświeżać rzadziej niż deklaruje; przy
  obiektach z krótkimi horyzontami ustaw przypomnienie weryfikacji ręcznej wieczorem.
- **Strefy czasowe** — iCal operuje na UTC; wyświetlaj lokalne, loguj UTC.

## Kiedy to nie wystarcza

Powyżej ~4 obiektów i 2 kanałów sam kalendarz to za mało — chcesz reguł: minimalnego pobytu,
blokad serwisowych, stref cen. Wtedy ma sens bardziej rozbudowany PMS z [katalogu](/narzedzia/)
albo własna warstwa reguł nałożona na ten zestaw.

Uważasz, że brakuje tu jakiegoś scenariusza albo kolejności kroków? Napisz przez
[stronę kontaktową](/kontakt/) — tematy z największym zainteresowaniem trafiają do kolejnych
poradników.
````


---

## `src/content/kursy/pierwsze-kroki-w-automatyzacji.md`

```markdown
---
title: "Pierwsze kroki w automatyzacji najmu"
description: "Darmowy kurs dla początkujących — od mapowania procesów po pierwszy automatyzacja."
pubDate: 2026-08-15
access: free
level: początkujący
tags: ["start", "automatyzacja", "dla-początkujących"]
---
Treść kursu.
```


---

## `src/content/kursy/szablon-cennika-dynamicznego.md`

```markdown
---
title: "Szablon cennika dynamicznego dla Airbnb i Booking"
description: "Jak obniżyć stawkę przy 7-dniowej przerwie bez ręcznego klikania?"
pubDate: 2026-09-02
access: paid
level: średni
tags: ["cennik", "revenue", "automatyzacja"]
---
Treść kursu.
```


---

## `src/content/programy/beds24-telegram-bot.md`

```markdown
---
title: "Beds24 Telegram Bot"
description: "Bot do obsługi wiadomości gości z poziomu Telegrama — powiadomienia o rezerwacjach i szybkie odpowiedzi bez wchodzenia do panelu."
pubDate: 2026-08-20
level: początkujący
requirements: ["Python 3.11+", "token bota (BotFather)", "dostęp do API Beds24"]
tags: ["beds24", "telegram", "python"]
---
Opis projektu (w przygotowaniu) — docelowo link do repozytorium oraz poradnik krok po kroku.
```


---

## `src/content/programy/ical-cleaner.md`

```markdown
---
title: "iCal Cleaner"
description: "Skrypt Python do łączenia kalendarzy iCal z różnych kanałów w jeden porządkowany plik — baza poradnika o synchronizacji."
pubDate: 2026-08-10
level: początkujący
requirements: ["Python 3.10+", "pliki .ics z kanałów"]
tags: ["python", "ical", "kalendarze"]
guideUrl: "/blog/sync-kalendarzy-ical-za-darmo/"
---
Opis projektu (w przygotowaniu) — docelowo link do repozytorium oraz poradnik krok po kroku.
```


---

## `src/content/wideo/pierwsze-kroki-w-automatyzacji.md`

```markdown
---
title: "Pierwsze kroki w automatyzacji najmu"
description: "Od mapowania procesów po pierwszą automatyzację: co zautomatyzować, w jakiej kolejności i od którego narzędzia zacząć."
pubDate: 2026-08-15
level: początkujący
tags: ["start", "automatyzacja"]
---
Treść tutoriala (w przygotowaniu).
```


---

## `src/content/wideo/szablon-cennika-dynamicznego.md`

```markdown
---
title: "Szablon cennika dynamicznego dla Airbnb i Booking"
description: "Jak obniżyć stawkę przy dłuższych przerwach bez ręcznego klikania — reguły, wyjątki i testy na realnych danych."
pubDate: 2026-09-02
level: średni
tags: ["cennik", "airbnb", "booking"]
---
Treść tutoriala (w przygotowaniu).
```


---

## `src/data/tools.json`

```json
[
  {
    "name": "langflow",
    "repo": "langflow-ai/langflow",
    "url": "https://github.com/langflow-ai/langflow",
    "category": "ai",
    "description": "Wizualny builder przepływów LLM w Pythonie (MIT).",
    "who": "Prototypowanie agentów bez kodu",
    "stars": 154412,
    "license": "MIT",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "Flowise",
    "repo": "FlowiseAI/Flowise",
    "url": "https://github.com/FlowiseAI/Flowise",
    "category": "ai",
    "description": "Wizualny builder agentów LLM/RAG — demo AI koncjercierka w 20 minut (Apache-2.0 core).",
    "who": "Szybkie demo AI dla gości",
    "stars": 55429,
    "license": "NOASSERTION",
    "pushed_at": "2026-08-13",
    "archived": true
  },
  {
    "name": "mcp-server-airbnb",
    "repo": "openbnb-org/mcp-server-airbnb",
    "url": "https://github.com/openbnb-org/mcp-server-airbnb",
    "category": "ai",
    "description": "Serwer MCP: agent AI przeszukuje oferty Airbnb (MIT). Wzorzec do budowy własnego MCP dla PMS.",
    "who": "Analiza konkurencji przez agenta AI",
    "stars": 527,
    "license": "MIT",
    "pushed_at": "2026-08-06",
    "archived": false
  },
  {
    "name": "hostaway-mcp",
    "repo": "prosperkartik/hostaway-mcp",
    "url": "https://github.com/prosperkartik/hostaway-mcp",
    "category": "ai",
    "description": "Serwer MCP dla PMS Hostaway — dowód wzorca 'MCP dla systemu najmu' (MIT).",
    "who": "Wzorzec integracji agent ↔ PMS",
    "stars": 2,
    "license": "MIT",
    "pushed_at": "2026-05-07",
    "archived": false
  },
  {
    "name": "n8n",
    "repo": "n8n-io/n8n",
    "url": "https://github.com/n8n-io/n8n",
    "category": "auto",
    "description": "Wizualna automatyzacja workflow z węzłami AI, HTTP, cron (fair-code: wewnętrzne użycie i wdrożenia u klientów OK, hostowanie jako własny SaaS NIE).",
    "who": "Automatyzacje bez kodu — kursy no-code",
    "stars": 203679,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "activepieces",
    "repo": "activepieces/activepieces",
    "url": "https://github.com/activepieces/activepieces",
    "category": "auto",
    "description": "Alternatywa dla n8n z czystym MIT — można osadzać we własnym produkcie.",
    "who": "Automatyzacje embedowane w produkcie",
    "stars": 24325,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "chatwoot",
    "repo": "chatwoot/chatwoot",
    "url": "https://github.com/chatwoot/chatwoot",
    "category": "comm",
    "description": "Omnichannel inbox: WhatsApp, Telegram, e-mail, czat na stronie — gotowy frontend operatora (MIT core, 36k+ gwiazdek).",
    "who": "Wspólna skrzynka gości i właścicieli",
    "stars": 36584,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "python-telegram-bot",
    "repo": "python-telegram-bot/python-telegram-bot",
    "url": "https://github.com/python-telegram-bot/python-telegram-bot",
    "category": "comm",
    "description": "Pełny wrapper Telegram Bot API (LGPL-3.0, 29k+ gwiazdek).",
    "who": "Boty dla ekip i alertów",
    "stars": 29455,
    "license": "GPL-3.0",
    "pushed_at": "2026-09-06",
    "archived": false
  },
  {
    "name": "whatsapp-web.js",
    "repo": "wwebjs/whatsapp-web.js",
    "url": "https://github.com/wwebjs/whatsapp-web.js",
    "category": "comm",
    "description": "Klient WhatsApp Web przez Puppeteer (Apache-2.0, 22k+ gwiazdek).",
    "who": "Szybkie prototypy WA",
    "stars": 22530,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-06",
    "archived": false
  },
  {
    "name": "Baileys",
    "repo": "WhiskeySockets/Baileys",
    "url": "https://github.com/WhiskeySockets/Baileys",
    "category": "comm",
    "description": "Biblioteka WhatsApp Web (MIT) — komponent pod Evolution API (ToS WhatsApp).",
    "who": "Prototypy integracji WA",
    "stars": 10975,
    "license": "MIT",
    "pushed_at": "2026-09-06",
    "archived": false
  },
  {
    "name": "evolution-api",
    "repo": "evolution-foundation/evolution-api",
    "url": "https://github.com/evolution-foundation/evolution-api",
    "category": "comm",
    "description": "Self-hosted API WhatsApp z webhookami (Apache-2.0; część kanałów nieoficjalna — ryzyko banów).",
    "who": "Komunikacja z ekipą sprzątającą",
    "stars": 9559,
    "license": "NOASSERTION",
    "pushed_at": "2026-07-14",
    "archived": false
  },
  {
    "name": "waha",
    "repo": "devlikeapro/waha",
    "url": "https://github.com/devlikeapro/waha",
    "category": "comm",
    "description": "WhatsApp HTTP API w Dockerze (Core darmowy).",
    "who": "Alternatywa dla Evolution",
    "stars": 7348,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-01",
    "archived": false
  },
  {
    "name": "aiogram",
    "repo": "aiogram/aiogram",
    "url": "https://github.com/aiogram/aiogram",
    "category": "comm",
    "description": "Async framework Telegram z czystym MIT.",
    "who": "Boty — gdy liczy się licencja",
    "stars": 5860,
    "license": "MIT",
    "pushed_at": "2026-08-26",
    "archived": false
  },
  {
    "name": "freescout",
    "repo": "freescout-help-desk/freescout",
    "url": "https://github.com/freescout-help-desk/freescout",
    "category": "comm",
    "description": "Lekki helpdesk e-mail — skrzynka dla wiadomości Booking.com, które przychodzą mailem (AGPL-3.0).",
    "who": "Tickety z maili OTA",
    "stars": 4528,
    "license": "AGPL-3.0",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "grammY",
    "repo": "grammyjs/grammY",
    "url": "https://github.com/grammyjs/grammY",
    "category": "comm",
    "description": "Nowoczesny framework Telegram dla TS (MIT).",
    "who": "Boty w Node",
    "stars": 3735,
    "license": "MIT",
    "pushed_at": "2026-08-26",
    "archived": false
  },
  {
    "name": "pyairbnb",
    "repo": "johnbalvin/pyairbnb",
    "url": "https://github.com/johnbalvin/pyairbnb",
    "category": "data",
    "description": "Scraper Airbnb: ceny, recenzje, kalendarze (MIT; uwaga na ToS Airbnb — tylko dane publiczne).",
    "who": "Research konkurencji",
    "stars": 149,
    "license": "MIT",
    "pushed_at": "2026-08-22",
    "archived": false
  },
  {
    "name": "short-term-rentals-warehouse",
    "repo": "rsanjabi/short-term-rentals-warehouse",
    "url": "https://github.com/rsanjabi/short-term-rentals-warehouse",
    "category": "data",
    "description": "Hurtownia BI danych najmu: dbt + model danych (MIT).",
    "who": "Wzorzec raportów rentowności",
    "stars": 15,
    "license": "brak/zobacz w repo",
    "pushed_at": "2023-06-09",
    "archived": false
  },
  {
    "name": "strr",
    "repo": "UPGo-McGill/strr",
    "url": "https://github.com/UPGo-McGill/strr",
    "category": "data",
    "description": "Akademickie narzędzia analizy rynku najmu krótkoterminowego (R).",
    "who": "Metodologia analizy rynku",
    "stars": 5,
    "license": "brak/zobacz w repo",
    "pushed_at": "2024-06-09",
    "archived": false
  },
  {
    "name": "beds24",
    "repo": "api-evangelist/beds24",
    "url": "https://github.com/api-evangelist/beds24",
    "category": "data",
    "description": "Specyfikacja OpenAPI Beds24 — mapa endpointów przed budową integracji.",
    "who": "Dokumentacja API Beds24",
    "stars": 0,
    "license": "brak/zobacz w repo",
    "pushed_at": "2026-09-04",
    "archived": false
  },
  {
    "name": "api",
    "repo": "Hostaway/api",
    "url": "https://github.com/Hostaway/api",
    "category": "data",
    "description": "Dokumentacja API Hostaway w formacie Slate (MIT).",
    "who": "Wzorzec dokumentacji API PMS",
    "stars": 0,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "Radicale",
    "repo": "Kozea/Radicale",
    "url": "https://github.com/Kozea/Radicale",
    "category": "ical",
    "description": "Lekki serwer CalDAV — self-hosted magazyn kalendarzy subskrybowanych w telefonie (GPL: używać jako usługa, nie odsprzedawać zmodyfikowanego).",
    "who": "Wspólny kalendarz dla ekipy sprzątającej",
    "stars": 4977,
    "license": "GPL-3.0",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "calendar",
    "repo": "nextcloud/calendar",
    "url": "https://github.com/nextcloud/calendar",
    "category": "ical",
    "description": "Kalendarz z subskrypcją iCal — jeśli już używasz Nextclouda (AGPL).",
    "who": "Hosty już na Nextcloudzie",
    "stars": 1184,
    "license": "AGPL-3.0",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "ical.js",
    "repo": "kewisch/ical.js",
    "url": "https://github.com/kewisch/ical.js",
    "category": "ical",
    "description": "Parser iCal/vCard w JS używany w Thunderbirdzie (MPL-2.0).",
    "who": "Parser do dashboardów frontendowych",
    "stars": 1177,
    "license": "MPL-2.0",
    "pushed_at": "2026-08-31",
    "archived": false
  },
  {
    "name": "icalendar",
    "repo": "collective/icalendar",
    "url": "https://github.com/collective/icalendar",
    "category": "ical",
    "description": "Standardowy parser/generator iCal w Pythonie (BSD).",
    "who": "Komponent bazowy dla Pythona",
    "stars": 1171,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "ics-py",
    "repo": "ics-py/ics-py",
    "url": "https://github.com/ics-py/ics-py",
    "category": "ical",
    "description": "Pythoniczne czytanie i tworzenie plików ICS.",
    "who": "Generowanie np. kalendarza sprzątań dla ekipy",
    "stars": 721,
    "license": "NOASSERTION",
    "pushed_at": "2026-04-15",
    "archived": false
  },
  {
    "name": "node-ical",
    "repo": "jens-maus/node-ical",
    "url": "https://github.com/jens-maus/node-ical",
    "category": "ical",
    "description": "Parser iCal dla Node z obsługą URL i reguł cyklicznych (Apache-2.0).",
    "who": "Komponent do budowy własnych integracji",
    "stars": 170,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-03",
    "archived": false
  },
  {
    "name": "python-recurring-ical-events",
    "repo": "niccokunzmann/python-recurring-ical-events",
    "url": "https://github.com/niccokunzmann/python-recurring-ical-events",
    "category": "ical",
    "description": "Rozwijanie zdarzeń cyklicznych z ICS (LGPL-3.0).",
    "who": "Cykliczne kontrole i zadania",
    "stars": 121,
    "license": "LGPL-3.0",
    "pushed_at": "2026-07-20",
    "archived": false
  },
  {
    "name": "Sync-Rentals-Calendar",
    "repo": "pixelcrash/Sync-Rentals-Calendar",
    "url": "https://github.com/pixelcrash/Sync-Rentals-Calendar",
    "category": "ical",
    "description": "Najprostszy self-hosted sync kalendarzy Airbnb/Booking — PHP, na własnym serwerze.",
    "who": "Pierwszy krok do własnej automatyzacji kalendarza",
    "stars": 41,
    "license": "brak/zobacz w repo",
    "pushed_at": "2020-01-23",
    "archived": false
  },
  {
    "name": "RentTools.io",
    "repo": "Gribadan/RentTools.io",
    "url": "https://github.com/Gribadan/RentTools.io",
    "category": "ical",
    "description": "Narzędzia dla gospodarzy oparte o kalendarze iCal (Next.js + SQLite, MIT).",
    "who": "Sync kalendarzy wielu kanałów",
    "stars": 22,
    "license": "MIT",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "core",
    "repo": "home-assistant/core",
    "url": "https://github.com/home-assistant/core",
    "category": "locks",
    "description": "Hub IoT dla apartamentu: temperatura, hałas, wycieki, energia → alerty (Apache-2.0, 75k+ gwiazdek).",
    "who": "Monitoring obiektu bez abonamentu",
    "stars": 90315,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "zigbee2mqtt",
    "repo": "Koenkk/zigbee2mqtt",
    "url": "https://github.com/Koenkk/zigbee2mqtt",
    "category": "locks",
    "description": "Bramka Zigbee → MQTT dla tanich czujników (GPL-3.0).",
    "who": "Sensorika obiektu bez chmury",
    "stars": 15610,
    "license": "GPL-3.0",
    "pushed_at": "2026-09-06",
    "archived": false
  },
  {
    "name": "esphome",
    "repo": "esphome/esphome",
    "url": "https://github.com/esphome/esphome",
    "category": "locks",
    "description": "Firmware dla własnych czujników (hałas, wilgoć) za kilkadziesiąt złotych.",
    "who": "DIY czujniki do demo",
    "stars": 11661,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-08",
    "archived": false
  },
  {
    "name": "keymaster",
    "repo": "FutureTense/keymaster",
    "url": "https://github.com/FutureTense/keymaster",
    "category": "locks",
    "description": "Zarządzanie slotami kodów w zamkach Z-Wave/Zigbee w Home Assistant (MIT).",
    "who": "Para do Rental Control",
    "stars": 348,
    "license": "MIT",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "homeassistant-rental-control",
    "repo": "tykeal/homeassistant-rental-control",
    "url": "https://github.com/tykeal/homeassistant-rental-control",
    "category": "locks",
    "description": "Najdojrzalsza open-source ścieżka iCal → kod do zamka: czyta kalendarz Airbnb, generuje kody w turnusach check-in/out (Apache-2.0).",
    "who": "Automatyczne kody do drzwi z rezerwacji",
    "stars": 81,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "pynuki",
    "repo": "pschmitt/pynuki",
    "url": "https://github.com/pschmitt/pynuki",
    "category": "locks",
    "description": "Klient Python dla Nuki Bridge — integracja bez chmury (GPL-3.0).",
    "who": "Hosty z zamkami Nuki",
    "stars": 20,
    "license": "GPL-3.0",
    "pushed_at": "2026-07-20",
    "archived": false
  },
  {
    "name": "python",
    "repo": "seamapi/python",
    "url": "https://github.com/seamapi/python",
    "category": "locks",
    "description": "Ujednolicone SDK do zamków August, Yale, Schlage, Nuki, TTLock (MIT; samo API Seam płatne).",
    "who": "Wielozamkowe portfele 20+ obiektów",
    "stars": 19,
    "license": "MIT",
    "pushed_at": "2026-09-02",
    "archived": false
  },
  {
    "name": "QloApps",
    "repo": "Qloapps/QloApps",
    "url": "https://github.com/Qloapps/QloApps",
    "category": "pms",
    "description": "Hotelowy PMS z booking engine i modułem housekeeping. Ciężki, ale dojrzały — jako referencja lub hosting dla większego obiektu.",
    "who": "Większe obiekty / pensjonaty",
    "stars": 14340,
    "license": "OSL-3.0",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "microrealestate",
    "repo": "microrealestate/microrealestate",
    "url": "https://github.com/microrealestate/microrealestate",
    "category": "pms",
    "description": "System dla wynajmujących: najemcy, czynsze, dokumenty, umowy. Wzorzec rozliczeń właścicielskich (owner statements).",
    "who": "Moduł rozliczeń dla zarządzających wieloma obiektami",
    "stars": 1186,
    "license": "NOASSERTION",
    "pushed_at": "2026-09-01",
    "archived": false
  },
  {
    "name": "condo",
    "repo": "open-condo-software/condo",
    "url": "https://github.com/open-condo-software/condo",
    "category": "pms",
    "description": "Ticketing usterek, kontakty, faktury, mini-aplikacje. Dojrzały wzorzec modułowego systemu serwisowego.",
    "who": "Śledzenie usterek i zleceń napraw",
    "stars": 404,
    "license": "MIT",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "movinin",
    "repo": "aelassas/movinin",
    "url": "https://github.com/aelassas/movinin",
    "category": "pms",
    "description": "Kompletna platforma zarządzania najmem: panel admina, frontend rezerwacji i aplikacja mobilna. Licencja MIT pozwala używać komercyjnie.",
    "who": "Direct booking engine dla hosta z kilkoma obiektami",
    "stars": 221,
    "license": "MIT",
    "pushed_at": "2026-07-13",
    "archived": false
  },
  {
    "name": "OpenKos",
    "repo": "senatroxx/OpenKos",
    "url": "https://github.com/senatroxx/OpenKos",
    "category": "pms",
    "description": "Najem krótko- i długoterminowy w Laravelu (MIT).",
    "who": "Mieszany portfel najmu",
    "stars": 99,
    "license": "Apache-2.0",
    "pushed_at": "2026-09-04",
    "archived": false
  },
  {
    "name": "pesan-pms",
    "repo": "pesanio/pesan-pms",
    "url": "https://github.com/pesanio/pesan-pms",
    "category": "pms",
    "description": "Lekki PMS (Bun + React, MIT) — zarządzanie obiektami i rezerwacjami.",
    "who": "Prosty starter PMS do własnej rozbudowy",
    "stars": 58,
    "license": "MIT",
    "pushed_at": "2025-05-18",
    "archived": false
  },
  {
    "name": "kamra-pms",
    "repo": "Kamra-PMS/kamra-pms",
    "url": "https://github.com/Kamra-PMS/kamra-pms",
    "category": "pms",
    "description": "PMS z fakturowaniem na frameworku Frappe (Python).",
    "who": "Fakturowanie najmu — kraje wymagające faktur",
    "stars": 30,
    "license": "AGPL-3.0",
    "pushed_at": "2026-09-07",
    "archived": false
  },
  {
    "name": "drbookings",
    "repo": "DrBookings/drbookings",
    "url": "https://github.com/DrBookings/drbookings",
    "category": "pms",
    "description": "Desktop: rezerwacje + plan sprzątań + finanse w jednym (Java).",
    "who": "Inspircja: iCal → sprzątanie → finanse",
    "stars": 13,
    "license": "GPL-2.0",
    "pushed_at": "2021-12-07",
    "archived": false
  },
  {
    "name": "roost",
    "repo": "captainarcher/roost",
    "url": "https://github.com/captainarcher/roost",
    "category": "pms",
    "description": "Operacje najmu w Python/FastAPI (Apache-2.0).",
    "who": "Baza pod własne narzędzie operacyjne w Pythonie",
    "stars": 3,
    "license": "Apache-2.0",
    "pushed_at": "2026-05-26",
    "archived": true
  },
  {
    "name": "OpenSTR",
    "repo": "lkilpatrick/OpenSTR",
    "url": "https://github.com/lkilpatrick/OpenSTR",
    "category": "pms",
    "description": "Self-hosted zarządzanie sprzątaniem: checklisty, obowiązkowe zdjęcia before/after (GPL-3.0 — jako inspiracja/własna instancja).",
    "who": "Kontrola jakości sprzątania",
    "stars": 1,
    "license": "GPL-3.0",
    "pushed_at": "2026-04-07",
    "archived": false
  }
]
```


---

## `src/layouts/BlogPost.astro`

```astro
---
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import FormattedDate from '../components/FormattedDate.astro';
import Header from '../components/Header.astro';

type Props = CollectionEntry<'blog'>['data'];

const { title, description, pubDate, updatedDate, heroImage } = Astro.props;
---

<html lang="en">
	<head>
		<BaseHead title={title} description={description} />
		<style>
			main {
				width: calc(100% - 2em);
				max-width: 100%;
				margin: 0;
			}
			.hero-image {
				width: 100%;
			}
			.hero-image img {
				display: block;
				margin: 0 auto;
				border-radius: 12px;
				box-shadow: var(--box-shadow);
			}
			.prose {
				width: 720px;
				max-width: calc(100% - 2em);
				margin: auto;
				padding: 1em;
				color: rgb(var(--gray-dark));
			}
			.title {
				margin-bottom: 1em;
				padding: 1em 0;
				text-align: center;
				line-height: 1;
			}
			.title h1 {
				margin: 0 0 0.5em 0;
			}
			.date {
				margin-bottom: 0.5em;
				color: rgb(var(--gray));
			}
			.last-updated-on {
				font-style: italic;
			}
		</style>
	</head>

	<body>
		<Header />
		<main>
			<article>
				<div class="hero-image">
					{heroImage && <Image width={1020} height={510} src={heroImage} alt="" />}
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={pubDate} />
							{
								updatedDate && (
									<div class="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							}
						</div>
						<h1>{title}</h1>
						<hr />
					</div>
					<slot />
				</div>
			</article>
		</main>
		<Footer />
	</body>
</html>
```


---

## `src/layouts/BlogPostLayout.astro`

```astro
---
import Layout from './Layout.astro';

interface Props {
  title: string;
  description?: string;
  pubDate: Date;
  tags?: string[];
  heroImage?: string;
  readingTime?: string;
}

const { title, description, pubDate, tags = [], heroImage, readingTime } = Astro.props;

const formattedDate = pubDate.toLocaleDateString('pl-PL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
---

<Layout title={title} description={description}>
  <article class="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
    <a
      href="/blog/"
      class="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-dark"
    >
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M13 8H3M7 4L3 8l4 4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Wszystkie poradniki
    </a>

    {heroImage ? (
      <img src={heroImage} alt={title} class="mb-8 h-64 w-full rounded-2xl object-cover md:h-96" />
    ) : null}

    <div class="mb-5 flex flex-wrap items-center gap-3 text-sm text-text-muted">
      <time datetime={pubDate.toISOString()}>{formattedDate}</time>
      {readingTime ? (
        <span class="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" />
            <path d="M8 4.5V8l2.5 1.5" stroke-linecap="round" />
          </svg>
          ~ {readingTime} czytania
        </span>
      ) : null}
      {tags.length > 0 ? (
        <span class="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span class="pill">{tag}</span>
          ))}
        </span>
      ) : null}
    </div>

    <h1 class="mb-5">{title}</h1>
    {description ? <p class="lead mb-9">{description}</p> : null}

    <div class="prose-content">
      <slot />
    </div>

    <div class="mt-14 rounded-2xl border border-border bg-cream p-6 md:p-8">
      <h2 class="mb-2 text-lg">Było pomocne?</h2>
      <p class="text-sm leading-relaxed text-text-muted">
        Znalazłeś błąd w instrukcji albo masz pytanie do konfiguracji? Napisz przez
        <a href="/kontakt/" class="font-semibold text-accent-dark underline underline-offset-2 hover:text-primary">
          stronę kontaktową
        </a>
        — poprawię poradnik w kolejnej wersji.
      </p>
    </div>
  </article>
</Layout>
```


---

## `src/layouts/Layout.astro`

```astro
---
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const { title = SITE_TITLE, description = SITE_DESCRIPTION } = Astro.props;
const fullTitle = title === SITE_TITLE ? SITE_TITLE : `${title} — ${SITE_TITLE}`;
const canonical = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#173643" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={canonical} />
    <link rel="sitemap" href="/sitemap-index.xml" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={Astro.url} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary" />

    <!-- Fonty: Sora (nagłówki) + Inter (tekst), subset latin-ext, swap -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="flex min-h-screen flex-col">
    <a class="skip-link" href="#tresc">Przejdź do treści</a>
    <Navbar />
    <main id="tresc" class="flex-1">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```


---

## `src/pages/404.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Nie znaleziono strony" description="Ta strona nie istnieje — wróć na start.">
  <section class="section">
    <div class="container-site max-w-xl text-center">
      <p class="eyebrow mb-4 justify-center">404</p>
      <h1 class="mb-4">Ta strona wyjechała na nocleg.</h1>
      <p class="lead mb-9">
        Adres nie istnieje albo został przeniesiony. Zacznij od strony głównej albo
        przejrzyj katalog narzędzi.
      </p>
      <div class="flex flex-col justify-center gap-3 sm:flex-row">
        <a href="/" class="btn btn-primary">Wróć na start</a>
        <a href="/narzedzia/" class="btn btn-secondary">Katalog narzędzi</a>
      </div>
    </div>
  </section>
</Layout>
```


---

## `src/pages/about.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="O stronie"
  description="Co to jest Najem KŚ: zasady bazy, zaufanie do treści i brak paywalla."
>
  <section class="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-16">
    <p class="eyebrow mb-3">O stronie</p>
    <h1 class="mb-6">Dlaczego ta strona istnieje</h1>

    <div class="prose-content">
      <p>
        <strong>Najem KŚ</strong> to otwarta baza wiedzy i narzędzi dla osób zarządzających
        najmem krótkoterminowym. Zbieram tu to, co faktycznie działa: aplikacje open source,
        projekty z GitHub i instrukcje, które da się odtworzyć krok po kroku.
      </p>
      <p>
        Cała treść jest <strong>darmowa</strong>. Nie sprzedaję wdrożeń, konsultacji ani
        dostępów — strona ma jedną rolę: żebyś sam/samą potrafiła uruchomić i skonfigurować
        rozwiązania, bez zależności od zewnętrznego usługodawcy.
      </p>

      <h2>Zasady bazy</h2>
      <ul>
        <li>
          <strong>Każde narzędzie z katalogu jest weryfikowane</strong> — licencja, data
          ostatniej zmiany, stan repozytorium. Nieaktywne projekty oznaczam.
        </li>
        <li>
          <strong>Każdy poradnik opiera się na konfiguracji, którą da się odtworzyć</strong> —
          jeśli instrukcja nie działa, jest do poprawienia.
        </li>
        <li>
          <strong>Brak paywalla</strong> — nie ma dostępu premium ani płatnych pakietów.
          Jeśli coś się zmieni (licencja, cena, projekt), poprawiam opis zamiast ukrywać.
        </li>
        <li>
          <strong>Zgłoszenia czytelników decydują o kolejności tematów</strong> — pytania,
          które pojawiają się najczęściej, trafiają do kolejnych poradników.
        </li>
      </ul>

      <p>
        Masz pomysł na narzędzie, projekt albo temat poradnika? Napisz przez
        <a href="/kontakt/">stronę kontaktową</a> — lista pomysłów rośnie z każdą wiadomością.
      </p>
    </div>
  </section>
</Layout>
```


---

## `src/pages/automatyzacja.astro`

```astro
---
import Layout from '../layouts/Layout.astro';

const CONTACT_TELEGRAM = '{{DO_UZUPEŁNIENIA}}';
const CONTACT_EMAIL = '{{DO_UZUPEŁNIENIA}}';

const problemRows = [
  { before: 'Pisanie do gości z telefonu', after: 'Auto-odpowiedzi i statusy w Telegramie' },
  { before: 'Koordynacja ekipy', after: 'Automatyczne harmonogramy + bot' },
  { before: 'Urlop wymaga pełnej dostępności', after: 'Człowiek w pętli (HITL) + systemy' },
  { before: 'Brak nadzoru nad cenami', after: 'Revenue manager + cennik dynamiczny' },
];

const filary = [
  { title: 'Master Brief', desc: 'Architektura sprawdzona na 40+ obiektach.' },
  { title: 'Smart Cost Router', desc: 'Dwuetapowe AI: decyzja i optymalizacja kosztów.' },
  { title: 'Brama Telegram-First', desc: 'Główny kanał komunikacji z gośćmi i ekipą.' },
  { title: 'Revenue Manager', desc: 'Cennik dynamiczny bez ręcznego klikania.' },
];

const weeks = [
  'Tydzień 1: Audyt i fundamenty',
  'Tydzień 2: Integracja systemów',
  'Tydzień 3: Testy i poprawki',
  'Tydzień 4: Start produkcyjny',
];
---

<Layout title="Automatyzacja pod klucz — Najem KŚ" description="Cyfryzacja, automatyzacja i architektura operacyjna najmu krótkoterminowego.">
  <!-- HERO -->
  <section class="section-dark">
    <div class="container-site mx-auto py-24 md:py-32 text-center">
      <h1 class="text-white text-4xl md:text-6xl mb-6">Cyfryzacja, automatyzacja i architektura operacyjna najmu</h1>
      <p class="text-cream/80 text-lg max-w-2xl mx-auto mb-10">Wdrażam pełne środowisko: Beds24, boty Telegram, AI, ekipa sprzątająca i revenue manager — tak, żebyś Ty mógł spać spokojnie.</p>
      <a href={CONTACT_TELEGRAM} class="btn btn-gold text-lg px-10 py-4">Umów bezpłatną konsultację</a>
      <p class="mt-4 text-sm text-cream/50">Wypełnij formularz lub napisz na Telegram</p>
    </div>
  </section>

  <!-- PROBLEM / DIAGNOZA -->
  <section class="section container-site mx-auto">
    <h2 class="text-center mb-12">Stan obecny vs Po wdrożeniu</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm md:text-base border-collapse">
        <thead>
          <tr class="border-b-2 border-primary">
            <th class="py-3 px-4 text-left text-primary-light">Stan obecny</th>
            <th class="py-3 px-4 text-left text-primary-light">Po wdrożeniu</th>
          </tr>
        </thead>
        <tbody>
          {problemRows.map((row) => (
            <tr class="border-b border-line">
              <td class="py-3 px-4 text-text-muted">{row.before}</td>
              <td class="py-3 px-4 font-medium text-accent">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>

  <!-- JAK TO DZIAŁA -->
  <section class="section container-site mx-auto bg-cream">
    <h2 class="text-center mb-12">Jak to działa?</h2>
    <div class="card text-center max-w-2xl mx-auto p-8">
      <p class="text-lg text-primary mb-6">Beds24 ↔ Serwer VPS + AI → Telegram / Ekipa / Konserwator</p>
      <p class="text-text-muted">Całość spięta w jeden spójny system. Gość rezerwuje → system aktualizuje kalendarz → bot powiadamia ekipę → AI odpowiada na wiadomości → Ty widzisz raport.</p>
    </div>
  </section>

  <!-- 4 FILARY -->
  <section class="section container-site mx-auto">
    <h2 class="text-center mb-12">4 filary wdrożenia</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filary.map((f) => (
        <div class="card">
          <h3 class="text-accent mb-3">{f.title}</h3>
          <p class="text-sm text-text-muted">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>

  <!-- ZAKRES I WYCENA -->
  <section class="section container-site mx-auto bg-cream">
    <div class="card max-w-2xl mx-auto border-accent border-2 p-8 text-center">
      <h2 class="mb-4">Zakres i orientacyjna wycena</h2>
      <p class="text-text-muted mb-6">Każde wdrożenie jest inne — poniżej pakiet, który najczęściej wybierają klienci.</p>
      <ul class="text-left text-text mb-6 space-y-2 list-disc pl-5">
        <li>Audyt obecnych procesów</li>
        <li>Konfiguracja Beds24 + API</li>
        <li>Bot Telegram dla gości i ekipy</li>
        <li>Integracja z AI (obsługa wiadomości)</li>
        <li>Revenue manager / cennik dynamiczny</li>
        <li>Monitoring i dokumentacja</li>
      </ul>
      <p class="text-2xl font-bold text-primary mb-6">od 2900 PLN</p>
      <a href={CONTACT_TELEGRAM} class="btn btn-gold">Zapytaj o indywidualną wycenę</a>
    </div>
  </section>

  <!-- HARMONOGRAM -->
  <section class="section container-site mx-auto">
    <h2 class="text-center mb-12">Harmonogram wdrożenia</h2>
    <div class="grid md:grid-cols-4 gap-4">
      {weeks.map((w, i) => (
        <div class="card text-center">
          <div class="text-accent font-bold text-2xl mb-2">{i + 1}</div>
          <p class="text-sm text-primary font-medium">{w}</p>
        </div>
      ))}
    </div>
  </section>

  <!-- GWARANCJA -->
  <section class="section container-site mx-auto bg-cream">
    <div class="card max-w-3xl mx-auto p-8 text-center">
      <h2 class="mb-4">Gwarancja</h2>
      <p class="text-text-muted mb-4">„Człowiek w pętli (HITL)” — żaden proces nie zostawia Cię sam na sam z systemem. Rozliczenie etapowe 50/50: pierwsza po akceptacji fundamentów, druga po uruchomieniu produkcyjnym.</p>
      <p class="text-sm text-text-muted">Jeśli po wdrożeniu okaże się, że system nie działa zgodnie z ustaleniami — naprawiam na własny koszt.</p>
    </div>
  </section>

  <!-- CTA KOŃCOWE -->
  <section class="section-dark section text-center">
    <div class="container-site mx-auto">
      <h2 class="text-white mb-6">Jak zaczynamy?</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto text-cream/80">
        <div>
          <div class="text-accent font-bold text-3xl mb-2">1</div>
          <p>Umów bezpłatną konsultację</p>
        </div>
        <div>
          <div class="text-accent font-bold text-3xl mb-2">2</div>
          <p>Otrzymasz plan i wycenę</p>
        </div>
        <div>
          <div class="text-accent font-bold text-3xl mb-2">3</div>
          <p>Startujemy w ciągu tygodnia</p>
        </div>
      </div>
      <a href={CONTACT_TELEGRAM} class="btn btn-gold text-lg px-10 py-4">Umów bezpłatną konsultację</a>
      {CONTACT_EMAIL !== '{{DO_UZUPEŁNIENIA}}' && (
        <p class="mt-4 text-cream/60 text-sm">lub napisz: {CONTACT_EMAIL}</p>
      )}
    </div>
  </section>
</Layout>
```


---

## `src/pages/blog/[...slug].astro`

```astro
---
import { type CollectionEntry, getCollection, render } from 'astro:content';
import BlogPostLayout from '../../layouts/BlogPostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}

type Props = CollectionEntry<'blog'>;

const post = Astro.props;
const { Content } = await render(post);
---

<BlogPostLayout
  title={post.data.title}
  description={post.data.description}
  pubDate={post.data.pubDate}
  tags={post.data.tags}
  heroImage={post.data.heroImage}
  readingTime={post.data.readingTime}
>
  <Content />
</BlogPostLayout>
```


---

## `src/pages/blog/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import ArticleCard from '../../components/ArticleCard.astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../../consts';

const posts = (await getCollection('blog'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout
  title={`${SITE_TITLE} – Poradniki`}
  description="Poradniki krok po kroku: jak uruchomić, skonfigurować i połączyć narzędzia open source dla najmu krótkoterminowego."
>
  <section class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-16">
    <p class="eyebrow mb-3">Poradniki</p>
    <h1 class="mb-4">Poradniki</h1>
    <p class="max-w-3xl text-lg leading-relaxed text-text-muted">
      Instrukcje, które da się odtworzyć: co zainstalować, co skopiować, gdzie kliknąć.
      Od synchronizacji kalendarzy, przez boty, po licencje open source.
    </p>

    {posts.length === 0 ? (
      <p class="mt-8 text-text-muted">Brak wpisów.</p>
    ) : (
      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard
            id={post.id}
            title={post.data.title}
            description={post.data.description}
            pubDate={post.data.pubDate}
            tags={post.data.tags}
            readingTime={post.data.readingTime}
          />
        ))}
      </div>
    )}
  </section>
</Layout>
```


---

## `src/pages/index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import HeroVisual from '../components/HeroVisual.astro';
import SectionHeading from '../components/SectionHeading.astro';
import CategoryCard from '../components/CategoryCard.astro';
import ToolCard from '../components/ToolCard.astro';
import ArticleCard from '../components/ArticleCard.astro';
import ProjectCard from '../components/ProjectCard.astro';
import { getCollection } from 'astro:content';
import tools from '../data/tools.json';

const allPosts = (await getCollection('blog'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
const posts = allPosts.slice(0, 3);

const projects = (await getCollection('programy'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

const wideo = await getCollection('wideo');

const featuredTools = tools.filter((t) => t.featured).slice(0, 6);

const CAT_LABELS: Record<string, string> = {
  ical: 'Kalendarze iCal',
  locks: 'Zamki i IoT',
  comm: 'Komunikacja',
  ai: 'Agenci AI',
  auto: 'Automatyzacja',
  data: 'Dane i ceny',
};

const categories = [
  {
    href: '/narzedzia/',
    title: 'Narzędzia',
    description: 'Aplikacje i rozwiązania open source przydatne w codziennej pracy: kalendarze, komunikacja, zamki, dane.',
    icon: 'tools' as const,
    count: `${tools.length} pozycji`,
  },
  {
    href: '/blog/',
    title: 'Poradniki',
    description: 'Instrukcje krok po kroku: jak uruchomić, skonfigurować i połączyć usługi — od podstaw po zaawansowane ustawienia.',
    icon: 'guide' as const,
    count: `${allPosts.length} poradników`,
  },
  {
    href: '/programy/',
    title: 'Projekty',
    description: 'Gotowe projekty z GitHub i własne narzędzia — do sklonowania, skonfigurowania i uruchomienia u siebie.',
    icon: 'projects' as const,
    count: `${projects.length} projekty`,
  },
  {
    href: '/wideo/',
    title: 'Wideo',
    description: 'Tutoriale wideo pokazujące uruchamianie i konfigurację krok po kroku. Nowe materiały wkrótce.',
    icon: 'video' as const,
    count: `${wideo.length} w przygotowaniu`,
  },
];
---

<Layout>
  <!-- A. HERO -->
  <section class="hero-section relative overflow-hidden">
    <div class="container-site grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div>
        <span class="pill pill-accent pill-dot mb-6">
          Darmowa baza narzędzi i poradników
        </span>
        <h1 class="mb-6">
          Narzędzia, poradniki i projekty dla
          <span class="text-accent-dark">najmu krótkoterminowego</span>
        </h1>
        <p class="lead mb-9 max-w-xl">
          Zbieram tu sprawdzone aplikacje open source, projekty z GitHub i instrukcje
          krok po kroku — wszystko do samodzielnego uruchomienia. Bez abonamentów,
          bez pośredników, z konkretnymi ustawieniami.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="/narzedzia/" class="btn btn-primary btn-lg">Przeglądaj narzędzia</a>
          <a href="/blog/" class="btn btn-secondary btn-lg">Zobacz poradniki</a>
        </div>
        <ul class="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
          <li class="inline-flex items-center gap-2">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="var(--color-accent)" stroke-width="1.8" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {tools.length} zweryfikowanych narzędzi
          </li>
          <li class="inline-flex items-center gap-2">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="var(--color-accent)" stroke-width="1.8" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {allPosts.length} poradników krok po kroku
          </li>
          <li class="inline-flex items-center gap-2">
            <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="var(--color-accent)" stroke-width="1.8" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            100% darmowy dostęp
          </li>
        </ul>
      </div>
      <HeroVisual />
    </div>
  </section>

  <!-- B. KATEGORIE -->
  <section id="kategorie" class="section-alt section">
    <div class="container-site">
      <SectionHeading
        eyebrow="Zacznij od kategorii"
        title="Co znajdziesz w bazie?"
        lead="Cztery obszary, jedna zasada: wszystko możesz uruchomić sam/sama, zgodnie z instrukcją."
      />
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard
            href={c.href}
            title={c.title}
            description={c.description}
            icon={c.icon}
            count={c.count}
          />
        ))}
      </div>
    </div>
  </section>

  <!-- C. WYRÓŻNIONE NARZĘDZIA -->
  <section class="section">
    <div class="container-site">
      <SectionHeading
        eyebrow="Katalog"
        title="Wybrane narzędzia"
        lead="Sprawdzone projekty open source, które realnie oszczędzają czas w codziennym zarządzaniu. Pełna lista — z licencjami i datami aktualizacji — czeka w katalogu."
        actionHref="/narzedzia/"
        actionLabel={`Wszystkie ${tools.length} narzędzi`}
      />
      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredTools.map((t) => (
          <ToolCard
            name={t.name}
            who={t.who}
            description={t.description}
            stars={t.stars}
            license={t.license}
            pushed_at={t.pushed_at}
            archived={t.archived}
            categoryLabel={CAT_LABELS[t.category] || t.category}
            level={t.level}
            guide={t.guide || undefined}
            url={t.url}
          />
        ))}
      </div>
    </div>
  </section>

  <!-- D. NAJNOWSZE PORADNIKI -->
  <section class="section-alt section">
    <div class="container-site">
      <SectionHeading
        eyebrow="Poradniki"
        title="Najnowsze poradniki"
        lead="Instrukcje, które da się odtworzyć: co zainstalować, co skopiować, gdzie kliknąć. Bez ogólników."
        actionHref="/blog/"
        actionLabel="Wszystkie poradniki"
      />
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard
            id={post.id}
            title={post.data.title}
            description={post.data.description}
            pubDate={post.data.pubDate}
            tags={post.data.tags}
            readingTime={post.data.readingTime}
          />
        ))}
      </div>
    </div>
  </section>

  <!-- E. PROJEKTY DO SAMODZIELNEGO URUCHOMIENIA -->
  <section class="section">
    <div class="container-site">
      <SectionHeading
        eyebrow="Projekty"
        title="Projekty do samodzielnego uruchomienia"
        lead="Skopiuj, skonfiguruj, uruchom. Do każdego projektu wymagania startowe i link do kodu albo poradnika."
        actionHref="/programy/"
        actionLabel="Wszystkie projekty"
      />
      <div class="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            title={project.data.title}
            description={project.data.description}
            level={project.data.level}
            requirements={project.data.requirements}
            tags={project.data.tags}
            repoUrl={project.data.repoUrl || undefined}
            demoUrl={project.data.demoUrl || undefined}
            guideUrl={project.data.guideUrl || undefined}
          />
        ))}
      </div>
    </div>
  </section>

  <!-- F. CTA KOŃCOWE (niesprzedażowe) -->
  <section class="section-dark section">
    <div class="container-site mx-auto max-w-2xl text-center">
      <p class="eyebrow mb-4 justify-center">Dołącz do bazy</p>
      <h2 class="mb-4">Masz pomysł na narzędzie lub poradnik?</h2>
      <p class="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-cream/80">
        Ta baza rośnie dzięki pomysłom czytelników. Podpowiedz, co dodać — albo wyłap
        błąd w instrukcji, a poprawię ją w kolejnej wersji.
      </p>
      <div class="flex flex-col justify-center gap-3 sm:flex-row">
        <a href="/kontakt/" class="btn btn-primary btn-lg">Napisz do mnie</a>
        <a href="#kategorie" class="btn btn-secondary btn-lg">Wróć do kategorii</a>
      </div>
    </div>
  </section>
</Layout>

<style>
  .hero-section {
    background:
      radial-gradient(52rem 26rem at 82% -12%, rgb(201 162 77 / 0.16) 0%, transparent 62%),
      radial-gradient(40rem 22rem at -8% 8%, rgb(23 54 67 / 0.07) 0%, transparent 58%),
      var(--color-background);
  }
</style>
```


---

## `src/pages/kontakt.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import { CONTACT } from '../consts';

const telegram =
  CONTACT.telegram && CONTACT.telegram !== '{{DO_UZUPEŁNIENIA}}' ? CONTACT.telegram : null;
const email = CONTACT.email && CONTACT.email !== '{{DO_UZUPEŁNIENIA}}' ? CONTACT.email : null;
---

<Layout
  title="Kontakt"
  description="Napisz: pytanie do poradnika, pomysł na narzędzie albo zgłoszenie błędu w instrukcji."
>
  <section class="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-16">
    <p class="eyebrow mb-3">Kontakt</p>
    <h1 class="mb-4">Kontakt</h1>
    <p class="mb-9 max-w-2xl text-lg leading-relaxed text-text-muted">
      Masz pytanie do poradnika, pomysł na nowe narzędzie albo znalazłeś błąd w instrukcji?
      Najprościej napisać — odpowiadam na wszystko, co dotyczy bazy.
    </p>

    <div class="card p-6 md:p-8">
      {telegram || email ? (
        <ul class="space-y-3">
          {telegram ? (
            <li>
              <a
                href={telegram}
                target="_blank"
                rel="noopener"
                class="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary"
              >
                <span>
                  <span class="block font-semibold text-primary">Telegram</span>
                  <span class="block text-sm text-text-muted">Najszybsza droga — odpisuję pierwszy</span>
                </span>
                <span class="card-arrow text-primary" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
          ) : null}
          {email ? (
            <li>
              <a
                href={`mailto:${email}`}
                class="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary"
              >
                <span>
                  <span class="block font-semibold text-primary">{email}</span>
                  <span class="block text-sm text-text-muted">E-mail — dla dłuższych opisów i załączników</span>
                </span>
                <span class="card-arrow text-primary" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
          ) : null}
        </ul>
      ) : (
        <p class="text-text-muted">
          Dane kontaktowe w przygotowaniu — wrzuć link do kanału na
          <a href="https://github.com" class="font-semibold text-accent-dark underline underline-offset-2">GitHub</a>
          albo śledź bieżące porady na stronie.
        </p>
      )}

      <p class="mt-6 text-sm leading-relaxed text-text-muted">
        Staram się odpowiadać w ciągu 1–2 dni. Zgłoszenia błędów w poradnikach traktuję
        priorytetowo — dzięki nim instrukcje się poprawiają.
      </p>
    </div>
  </section>
</Layout>
```


---

## `src/pages/kursy/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const courses = (await getCollection('kursy'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

const levelLabels: Record<string, string> = {
  'początkujący': '🌱 Początkujący',
  'średni': '📈 Średni',
  'zaawansowany': '🚀 Zaawansowany',
};
---

<Layout title="Kursy — Najem KŚ" description="Kursy wideo i szkolenia z automatyzacji najmu krótkoterminowego.">
  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
    <h1>Kursy</h1>
    <p class="mt-4 text-lg text-text-muted">
      Szkolenia wideo i kursy krok po kroku dla gospodarzy najmu krótkoterminowego.
    </p>

    {courses.length === 0 ? (
      <p class="mt-8 text-text-muted">Brak kursów.</p>
    ) : (
      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <a
            href={`/kursy/${course.id}/`}
            class="group block rounded-xl border border-secondary-dark bg-secondary p-6 transition-shadow hover:shadow-lg"
          >
            <div class="flex items-center justify-between">
              <time class="text-xs font-semibold uppercase tracking-wide text-accent">
                {course.data.pubDate.toLocaleDateString('pl-PL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span class={`badge ${course.data.access === 'free' ? 'badge-free' : 'badge-paid'}`}>
                {course.data.access === 'free' ? 'Darmowy' : 'Premium'}
              </span>
            </div>
            <h3 class="mt-3 text-primary group-hover:text-accent transition-colors">
              {course.data.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">{course.data.description}</p>
            {course.data.level && (
              <div class="mt-3 text-xs font-medium text-accent">
                {levelLabels[course.data.level] || course.data.level}
              </div>
            )}
            {course.data.price && (
              <div class="mt-2 text-sm font-semibold text-primary">
                {course.data.price}
              </div>
            )}
          </a>
        ))}
      </div>
    )}
  </section>
</Layout>
```


---

## `src/pages/narzedzia/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import tools from '../../data/tools.json';

const CATS: { key: string; label: string; desc: string }[] = [
  { key: 'ical', label: 'Kalendarze iCal', desc: 'Sync kalendarzy Airbnb/Booking, parsowanie feedów, kalendarze dla ekipy.' },
  { key: 'locks', label: 'Zamki i IoT', desc: 'Kody do drzwi generowane z rezerwacji, czujniki temperatury i ruchu, smart home.' },
  { key: 'comm', label: 'Komunikacja', desc: 'Skrzynki omnichannel, boty Telegram, czat dla ekipy sprzątającej.' },
  { key: 'auto', label: 'Automatyzacja', desc: 'Wizualne workflow bez kodu: n8n, Node-RED i alternatywy.' },
  { key: 'ai', label: 'Agenci AI', desc: 'Wizualne buildery agentów, RAG i serwery MCP — AI w codziennej pracy.' },
  { key: 'data', label: 'Dane i ceny', desc: 'Dashboardy, transformacje danych, analizy rynku i ceny.' },
].filter((c) => tools.some((t) => t.category === c.key));

const LIC_OK = /^(MIT|Apache-2\.0|BSD|BSD-2|BSD-3|BSD-3-Clause|ISC|Unlicense|CC0|CC-BY|Zlib)/;

function licClass(l: string | undefined): string {
  if (!l || l === 'null' || l === 'None') return 'lic-bad';
  if (LIC_OK.test(l)) return 'lic-ok';
  return 'lic-warn';
}

const year = new Date().getFullYear();
---

<Layout
  title="Katalog narzędzi"
  description={`Zweryfikowane darmowe narzędzia open source dla hostów najmu krótkoterminowego: kalendarze, zamki, komunikacja, automatyzacja, AI i dane. Z licencjami i polskimi opisami.`}
>
  <section class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-16">
    <p class="eyebrow mb-3">Katalog</p>
    <h1 class="mb-4">Katalog narzędzi</h1>
    <p class="max-w-3xl text-lg leading-relaxed text-text-muted">
      {tools.length} zweryfikowanych narzędzi open source dla hostów najmu krótkoterminowego.
      Każda pozycja: licencja, gwiazdki i data ostatniej zmiany (dane z GitHub API, {year}).
    </p>

    <div class="mt-6 max-w-3xl rounded-2xl border border-border bg-cream p-5 text-sm leading-relaxed text-text-muted">
      <strong class="text-primary">Kolor licencji:</strong>&nbsp;
      <span class="lic lic-ok">MIT / Apache / BSD</span> = możesz używać komercyjnie,
      <span class="lic lic-warn">copyleft / inna</span> = używaj jako usługa, nie wbudowuj w produkt,
      <span class="lic lic-bad">brak licencji</span> = all rights reserved, nie kopiuj kodu.
      Szczegóły: <a href="/blog/licencje-open-source-dla-hostow/" class="font-semibold text-accent-dark underline underline-offset-2 hover:text-primary">poradnik o licencjach</a>.
    </div>

    <nav class="mt-9 flex flex-wrap gap-2.5" aria-label="Kategorie narzędzi">
      {CATS.map((c) => (
        <a
          href={`#${c.key}`}
          class="pill !px-4 !py-2 !text-[0.85rem] border !border-border-strong !bg-surface transition-colors hover:!border-primary hover:!bg-primary/5"
        >
          {c.label} ({tools.filter((t) => t.category === c.key).length})
        </a>
      ))}
    </nav>

    {CATS.map((c) => (
      <section id={c.key} class="mt-12 scroll-mt-24">
        <h2 class="mb-1.5">{c.label}</h2>
        <p class="mb-5 text-text-muted">{c.desc}</p>
        <div class="table-wrap">
          <div class="table-scroll">
            <table class="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr class="border-b border-border-strong bg-cream text-left">
                  <th class="px-5 py-3.5 font-semibold text-primary">Narzędzie</th>
                  <th class="px-5 py-3.5 font-semibold text-primary">Do czego</th>
                  <th class="px-5 py-3.5 font-semibold text-primary">Gwiazdki</th>
                  <th class="px-5 py-3.5 font-semibold text-primary">Licencja</th>
                  <th class="px-5 py-3.5 font-semibold text-primary">Ostatnia zmiana</th>
                </tr>
              </thead>
              <tbody>
                {tools
                  .filter((t) => t.category === c.key)
                  .sort((a, b) => b.stars - a.stars)
                  .map((t, i, arr) => (
                    <tr class={`align-top ${i < arr.length - 1 ? 'border-b border-border' : ''}`}>
                      <td class="px-5 py-4">
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener"
                          class="font-semibold text-primary transition-colors hover:text-accent-dark"
                        >
                          {t.name}
                        </a>
                        {t.archived ? (
                          <span class="lic lic-bad ml-2" title="Repo zarchiwizowane">archiwum</span>
                        ) : null}
                        <div class="mt-1 text-xs text-text-muted">{t.who}</div>
                      </td>
                      <td class="max-w-md px-5 py-4 text-text-muted">{t.description}</td>
                      <td class="whitespace-nowrap px-5 py-4">
                        <span class="inline-flex items-center gap-1.5 text-primary">
                          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" class="text-accent" aria-hidden="true">
                            <path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2-.7-4.3-3.1-3 4.3-.6z" />
                          </svg>
                          {t.stars.toLocaleString('pl-PL')}
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-5 py-4">
                        <span class={`lic ${licClass(t.license)}`}>{t.license}</span>
                      </td>
                      <td class="whitespace-nowrap px-5 py-4 text-xs text-text-muted">{t.pushed_at}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ))}

    <section class="mt-16 rounded-2xl border border-border bg-cream p-7 md:p-9">
      <h2 class="mb-2 text-xl">Brakuje tu czegoś konkretnego?</h2>
      <p class="max-w-2xl text-sm leading-relaxed text-text-muted">
        Podpowiedz, które narzędzie zweryfikować jako następne albo zaproponuj temat
        poradnika, który pomoże je uruchomić. Kategoria rośnie z każdym zgłoszeniem —
        <a href="/kontakt/" class="font-semibold text-accent-dark underline underline-offset-2 hover:text-primary">
          napisz
        </a>.
      </p>
    </section>
  </section>
</Layout>
```


---

## `src/pages/programy/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const projects = (await getCollection('programy'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---

<Layout title="Projekty — Najem KŚ" description="Gotowe projekty i szablony automatyzacji dla najmu krótkoterminowego.">
  <section class="mx-auto max-w-6xl px-4 py-16 md:px-8">
    <h1>Projekty</h1>
    <p class="mt-4 text-lg text-text-muted">
      Gotowe projekty i szablony automatyzacji — kod do skopiowania i uruchomienia u siebie.
    </p>

    {projects.length === 0 ? (
      <p class="mt-8 text-text-muted">Brak projektów.</p>
    ) : (
      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div class="group block rounded-xl border border-secondary-dark bg-secondary p-6 transition-shadow hover:shadow-lg">
            <div class="flex items-center justify-between">
              <time class="text-xs font-semibold uppercase tracking-wide text-accent">
                {project.data.pubDate.toLocaleDateString('pl-PL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span class={`badge ${project.data.access === 'free' ? 'badge-free' : 'badge-paid'}`}>
                {project.data.access === 'free' ? 'Darmowe' : 'Premium'}
              </span>
            </div>
            <h3 class="mt-3 text-primary group-hover:text-accent transition-colors">
              {project.data.title}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">{project.data.description}</p>
            {project.data.tags && project.data.tags.length > 0 && (
              <div class="mt-4 flex flex-wrap gap-2">
                {project.data.tags.map((tag: string) => (
                  <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {/* Przyciski GitHub / Demo */}
            <div class="mt-4 flex gap-3">
              {project.data.repoUrl && (
                <a
                  href={project.data.repoUrl}
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.data.demoUrl && (
                <a
                  href={project.data.demoUrl}
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-accent px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-primary-dark"
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
</Layout>
```


---

## `src/pages/rss.xml.js`

```javascript
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
```


---

## `src/pages/wideo/index.astro`

```astro
---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../../consts';

const tutorials = (await getCollection('wideo'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

const levelLabels: Record<string, string> = {
  'początkujący': 'Początkujący',
  'średni': 'Poziom średni',
  'zaawansowany': 'Zaawansowany',
};

function embedUrl(videoUrl: string): string {
  // YouTube: https://www.youtube.com/watch?v=ID lub youtu.be/ID → oembed
  const yt = videoUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  // Vimeo: https://vimeo.com/123456
  const vm = videoUrl.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return videoUrl;
}
---

<Layout
  title={`${SITE_TITLE} – Wideo`}
  description="Tutoriale wideo pokazujące krok po kroku uruchamianie i konfigurację narzędzi dla najmu krótkoterminowego."
>
  <section class="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-16">
    <p class="eyebrow mb-3">Wideo</p>
    <h1 class="mb-4">Wideo i tutoriale</h1>
    <p class="max-w-3xl text-lg leading-relaxed text-text-muted">
      Krok po kroku na ekranie: jak uruchomić, skonfigurować i połączyć usługi, o których
      piszą poradniki. Nowe materiały pojawiają się w miarę rozwoju bazy.
    </p>

    <div class="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-cream p-5 text-sm leading-relaxed text-text-muted">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--color-accent)" stroke-width="1.7" class="mt-0.5 shrink-0" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M10.5 9.5l4.5 2.5-4.5 2.5z" fill="var(--color-accent)" stroke="none" />
      </svg>
      <p>
        <strong class="text-primary">Sekcja w budowie.</strong> Poniższe tutoriale mają
        zaplanowany scenariusz i czekają na nagranie. W międzyczasie poradniki pisane
        pokrywają te same tematy.
      </p>
    </div>

    {tutorials.length === 0 ? (
      <p class="mt-8 text-text-muted">Brak materiałów.</p>
    ) : (
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        {tutorials.map((t) => (
          <article class="card card-hover flex h-full flex-col overflow-hidden !p-0">
            <div class="relative aspect-video w-full bg-primary-dark">
              {t.data.videoUrl ? (
                <iframe
                  src={embedUrl(t.data.videoUrl)}
                  title={t.data.title}
                  class="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <div class="video-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span class="play-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                      <path d="M8.5 5.5l11 6.5-11 6.5z" />
                    </svg>
                  </span>
                  <span class="text-sm font-semibold text-cream/90">Materiał w przygotowaniu</span>
                </div>
              )}
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="mb-3 flex flex-wrap items-center gap-2">
                <span class="pill pill-accent">{levelLabels[t.data.level] || t.data.level}</span>
                {t.data.duration ? <span class="pill pill-muted">{t.data.duration}</span> : null}
              </div>
              <h2 class="text-lg leading-snug">{t.data.title}</h2>
              <p class="mt-2 text-sm leading-relaxed text-text-muted">{t.data.description}</p>
            </div>
          </article>
        ))}
      </div>
    )}
  </section>
</Layout>

<style>
  .video-placeholder {
    background:
      radial-gradient(20rem 12rem at 70% 20%, rgb(201 162 77 / 0.12) 0%, transparent 60%),
      var(--color-primary-dark);
  }
  .play-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    border-radius: 999px;
    background: var(--color-accent-light);
    color: var(--color-primary-dark);
    box-shadow: 0 12px 30px -10px rgb(0 0 0 / 0.5);
  }
</style>
```


---

## `src/styles/global.css`

```css
@import "tailwindcss";

/* ═══════════════════════════════════════════════════════════════════
   Najem KŚ — design system
   Paleta: petrol (kolor mocny) + krem/jasne tła + złoty akcent.
   Złoty jest kolorem AKCENTOWYM — nie malujemy nim całej strony.
   ═══════════════════════════════════════════════════════════════════ */

@theme {
  /* Kolorystyka — baza z istniejącej palety, skorygowana pod kontrast */
  --color-primary: #173643;
  --color-primary-light: #2C4854;
  --color-primary-dark: #0E232C;
  --color-cream: #F5F1E6;
  --color-background: #FBF9F5;
  --color-surface: #FFFFFF;
  --color-accent: #B3862C;
  --color-accent-light: #C9A24D;
  --color-accent-dark: #8A6420;
  --color-text: #24282C;
  --color-text-muted: #5A6068;
  --color-border: #E7E0CF;
  --color-border-strong: #D9D0BC;

  /* Typografia: nagłówki Sora (charakterystyczny, techniczny sans),
     tekst i interfejs Inter (czytelny, pełny latin-ext) */
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-heading: "Sora", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Mono", Menlo, Consolas, monospace;

  /* Zaokrąglenia — jeden system zamiast ostrych prostokątów */
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  /* Cienie — bardzo subtelne */
  --shadow-card: 0 1px 2px rgb(23 54 67 / 0.05);
  --shadow-card-hover: 0 14px 30px -16px rgb(23 54 67 / 0.22);
  --shadow-pop: 0 24px 48px -24px rgb(23 54 67 / 0.35);
}

/* ── Baza ─────────────────────────────────────────────────────────── */

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: #EAD9AF;
  color: var(--color-primary-dark);
}

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Skala typograficzna — jedna hierarchia na całej stronie */
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  font-weight: 600;
}

h1 {
  font-size: clamp(2.1rem, 1.15rem + 3vw, 2.9rem);
  line-height: 1.14;
  letter-spacing: -0.025em;
  font-weight: 700;
}

h2 {
  font-size: clamp(1.5rem, 1.15rem + 1.3vw, 2.05rem);
  line-height: 1.22;
  letter-spacing: -0.018em;
}

h3 {
  font-size: 1.1875rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

/* Lead — tekst prowadzący sekcji i hero */
.lead {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-text-muted);
}

/* Dostępność: link "przejdź do treści" */
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1.1rem;
  border-radius: 0 0 var(--radius-sm) 0;
}
.skip-link:focus {
  left: 0;
}

/* ── Kontener i sekcje — jeden system kontenerów ─────────────────── */

.container-site {
  width: 100%;
  max-width: 74rem;
  margin-inline: auto;
  padding-inline: 1.25rem;
}
@media (min-width: 768px) {
  .container-site { padding-inline: 2rem; }
}

.section {
  padding-block: 4rem;
}
@media (min-width: 768px) {
  .section { padding-block: 6rem; }
}

.section-alt {
  background-color: var(--color-cream);
  border-block: 1px solid var(--color-border);
}

.section-dark {
  background-color: var(--color-primary);
  color: var(--color-cream);
}
.section-dark h1,
.section-dark h2,
.section-dark h3 {
  color: #fff;
}

/* Nagłówek sekcji: nadpis (eyebrow) + tytuł + lead */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}
.eyebrow::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--color-accent-light);
}
.section-dark .eyebrow {
  color: var(--color-accent-light);
}

/* ── Przyciski — zaokrąglone, z wyraźną hierarchią ───────────────── */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1.5px solid transparent;
  padding: 0.72rem 1.55rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.2;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease,
    color 0.18s ease, transform 0.12s ease;
}
.btn:active {
  transform: translateY(1px);
}
.btn-lg {
  padding: 0.95rem 2rem;
  font-size: 1.02rem;
}
.btn-sm {
  padding: 0.5rem 1.05rem;
  font-size: 0.875rem;
}

.btn-primary {
  background-color: var(--color-accent-light);
  color: var(--color-primary-dark);
}
.btn-primary:hover {
  background-color: var(--color-accent);
}

.btn-secondary {
  background-color: var(--color-surface);
  border-color: var(--color-border-strong);
  color: var(--color-primary);
}
.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent-dark);
}

/* Przyciski na ciemnym tle */
.section-dark .btn-primary {
  background-color: var(--color-accent-light);
  color: var(--color-primary-dark);
}
.section-dark .btn-primary:hover {
  background-color: #D6B265;
}
.section-dark .btn-secondary {
  background-color: transparent;
  border-color: rgb(247 243 234 / 0.4);
  color: var(--color-cream);
}
.section-dark .btn-secondary:hover {
  border-color: var(--color-accent-light);
  color: var(--color-accent-light);
  background-color: rgb(247 243 234 / 0.06);
}

/* ── Karty — spójne obramowanie, radius, hover ───────────────────── */

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 1.5rem;
}

.card-hover {
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.card-hover:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-border-strong);
}
.card-hover:hover .card-arrow {
  transform: translateX(4px);
  color: var(--color-accent-dark);
}
.card-arrow {
  transition: transform 0.18s ease, color 0.18s ease;
}

/* ── Pigułki / badge — tagi, kategorie, statusy ──────────────────── */

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  background-color: var(--color-cream);
  color: var(--color-primary);
  white-space: nowrap;
}
.pill-accent {
  background-color: #F6EBCF;
  border-color: #EBD9AC;
  color: #7A5A17;
}
.pill-green {
  background-color: #E4F2E7;
  border-color: #CCE6D4;
  color: #1E6B3C;
}
.pill-muted {
  background-color: transparent;
  border-color: var(--color-border);
  color: var(--color-text-muted);
}
.pill-dot::before {
  content: "";
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: var(--color-accent-light);
}

/* Chipy licencji (katalog narzędzi) */
.lic {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.18rem 0.65rem;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
}
.lic-ok {
  background: #E4F2E7;
  color: #1E6B3C;
}
.lic-warn {
  background: #FBF0D7;
  color: #8A6420;
}
.lic-bad {
  background: #FBE4E1;
  color: #A33B2E;
}

/* ── Navbar ──────────────────────────────────────────────────────── */

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgb(251 249 245 / 0.86);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.85rem;
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.nav-link:hover {
  background-color: var(--color-cream);
  color: var(--color-primary-dark);
}
.nav-link-active,
.nav-link-active:hover {
  background-color: var(--color-primary);
  color: var(--color-cream);
}

/* ── Tabele (katalog narzędzi) ────────────────────────────────────── */

.table-wrap {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
.table-scroll {
  overflow-x: auto;
}

/* ── Treść artykułów ─────────────────────────────────────────────── */

.prose-content {
  font-size: 1.02rem;
  line-height: 1.75;
}
.prose-content h2 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.45rem;
  line-height: 1.3;
  color: var(--color-primary);
}
.prose-content h3 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  color: var(--color-primary);
}
.prose-content p {
  margin-bottom: 1.25rem;
  color: var(--color-text);
}
.prose-content a {
  color: var(--color-accent-dark);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #D8C58F;
  text-underline-offset: 3px;
  transition: color 0.15s ease, text-decoration-color 0.15s ease;
}
.prose-content a:hover {
  color: var(--color-primary);
  text-decoration-color: var(--color-primary);
}
.prose-content ul,
.prose-content ol {
  margin: 0 0 1.25rem 1.4rem;
}
.prose-content ul {
  list-style: disc;
}
.prose-content ol {
  list-style: decimal;
}
.prose-content li {
  margin-bottom: 0.5rem;
}
.prose-content li::marker {
  color: var(--color-accent);
}
.prose-content code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--color-cream);
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  padding: 0.1rem 0.35rem;
  color: var(--color-primary);
}
.prose-content pre {
  background: var(--color-primary-dark);
  color: #DCE8EC;
  border: 1px solid rgb(255 255 255 / 0.08);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.25rem;
  overflow-x: auto;
  margin: 0 0 1.5rem;
}
.prose-content pre code {
  background: transparent;
  border: 0;
  padding: 0;
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.65;
}
.prose-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
}
.prose-content th {
  text-align: left;
  font-weight: 600;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-border-strong);
  padding: 0.55rem 0.75rem;
}
.prose-content td {
  border-bottom: 1px solid var(--color-border);
  padding: 0.55rem 0.75rem;
  vertical-align: top;
}
.prose-content blockquote {
  border-left: 3px solid var(--color-accent-light);
  padding: 0.25rem 0 0.25rem 1rem;
  margin: 0 0 1.5rem;
  color: var(--color-text-muted);
  font-style: italic;
}

/* ── Ruch — szanujemy prefers-reduced-motion ─────────────────────── */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .card-hover,
  .btn,
  .card-arrow {
    transition: none;
  }
  .card-hover:hover {
    transform: none;
  }
}
```


---

## `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```


---
