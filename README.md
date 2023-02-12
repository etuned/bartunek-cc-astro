# Edwin Bartunek's Personal Site

A rewrite of my personal site using Astro. Please feel free to fork this and make it your own. I am loving what Astro is doing for a11y and making it developer friendly too!

Click fork to get your own version of this website.

Then get your own Sanity account and add your projectId to the `astro.config.mjs`. Go to [the sanity docs](https://sanity.io) to get started with the Sanity CMS.

Then run these commands.

```sh
npm install && npm run dev
```

If you prefer to make your own site, you can start a new Astro project with this command.

```sh
npm create astro@latest -- --template basics
```

## This Project Structure

Inside of the Astro project, you'll see the following folders and files:

```
/
├── lib/
│   └── sanity.ts
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── image files
│   │   └── etc..
│   ├── components/
│   │   ├── icons/
|   |   |   └── GithubIcon.astro
|   |   |   └── LinkedinIcon.astro
|   |   |   └── LogoIcon.astro
|   |   |   └── TwitterIcon.astro
│   │   └── ColoredContainer.astro
│   │   └── Content.astro
│   │   └── Footer.astro
│   │   └── Intro.astro
│   │   └── MainContent.astro
│   │   └── Nav.astro
│   │   └── ProjectCard.astro
│   │   └── SectionTitle.astro
│   │   └── Separator.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── about.astro
│       └── blog.astro
│       └── index.astro
│       └── projects.astro
└── package.json
└── file settings
└── etc...
```

## 🧞 List of Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run prettier`     | Prettier writes for ts, tsx, and astro files     |

## 👀 Astro Docs are here!

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
