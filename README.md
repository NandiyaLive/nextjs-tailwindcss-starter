This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and pre-configured with TailwindCSS, Shadcn UI, Lucide Icons, ESLint, Prettier, commitlint, and Husky. This app uses Next.js App Router and Desktop-First Design with TailwindCSS.

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs) 
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting Started

- First, clone the repository to your local machine:
    ```bash
    git clone https://github.com/NandiyaLive/nextjs-tailwindcss-starter
    ```
- Then, navigate to the project directory and install the dependencies:

    ```bash
    npm install
    ```
- Finally, run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pre-Configured Packages & Plugins

### Packages
- [TailwindCSS](https://tailwindcss.com) : Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.
- [Shadcn UI](https://ui.shadcn.com) : Shadcn UI provides accessible and customizable components that you can copy and paste into your apps.
- [Lucide Icons](https://lucide.dev/icons) : Lucide is an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols.
- [ESLint](https://eslint.org) : ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.

### Plugins
- [Prettier](https://prettier.io) : Prettier is an opinionated code formatter that enforces a consistent code style across your entire codebase.
- [prettier-plugin-tailwindcss](ttps://github.com/tailwindlabs/prettier-plugin-tailwindcss) : Prettier plugin that scans the code for class attributes containing Tailwind CSS classes, and then sorts those classes automatically following the recommended class order.
- [commitlint](https://commitlint.js.org) : CommitLint is a tool that checks if your commit messages meet the conventional commit format.
- [Husky](https://typicode.github.io/husky) : Husky is a tool that allows you to run scripts in response to Git events.

## Commit Message Convention
 
This website follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
 
Commit message will be checked using [husky and commit lint](https://theodorusclarence.com/library/husky-commitlint-prettier), you can't commit if not using the proper convention below.
 
### Format
 
`<type>(optional scope): <description>`\
- Example:\
`feat(pre-event): add speakers section`
 
**Available types are:**

- feat → Changes about addition or removal of a feature.\
  `feat: add table on landing page`\
  `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug.\
  `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
 
**If there are multiple changes, then commit one by one**
 
- After colon, there are a single space\
  Ex: `feat: add something`
- When using `fix` type, state the issue\
  Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence