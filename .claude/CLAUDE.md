# Project Rules

These rules are mandatory for every agent and developer working on this project. Follow them on every change, no exceptions.

## 1. No grid lines in the UI

- Never render visible grid lines anywhere in the interface.
- This includes background grid patterns, dotted or lined backdrops, table cell borders forming a grid, chart grid lines (e.g. `CartesianGrid` in Recharts), and decorative grid overlays.
- Use spacing, whitespace, and subtle background color differences to separate content instead.
- CSS Grid as a layout tool (`grid`, `grid-cols-*`) is fine; the rule is about visible lines, not layout.

## 2. No em-dashes

- Never use the em-dash character (Unicode U+2014) anywhere: UI copy, code, comments, docs, commit messages, or PR descriptions.
- Use a comma, colon, period, parentheses, or a regular hyphen (`-`) instead.
- Before finishing a task, search your changes for U+2014 and remove any you find.

## 3. Comments only when necessary

- Do not add comments that restate what the code already says (e.g. `// set loading to true`).
- Write self-explanatory code first: clear names for variables, functions, and components.
- Add a comment only when the code is not self-explanatory, such as a non-obvious workaround, a business rule, or the reason behind a surprising decision, so the next developer understands what is happening and why.
- Do not leave commented-out code, placeholder comments, or section-divider comments.

## 4. Follow DRY (Don't Repeat Yourself)

- The moment you notice you are writing the same markup, logic, or styling a second time, extract it into a reusable component, hook, or utility.
- Before creating something new, check `src/components`, `src/hooks`, and `src/lib` for an existing piece you can reuse or extend.
- Shared UI goes in `@/components`, shared hooks in `@/hooks`, shared helpers in `@/lib`.
- Keep content (lists of projects, links, nav items) in data arrays and map over them instead of duplicating JSX.

## 5. Build all UI with shadcn/ui

- Every UI component must be built on shadcn/ui. Do not reinvent the wheel.
- If a component you need exists in shadcn/ui, add it with the CLI instead of hand-writing it:
  ```bash
  npx shadcn@latest add <component>
  ```
- shadcn components live in `@/components/ui` (see `components.json`). Compose them into larger components in `@/components`; do not fork or duplicate them.
- Only build a custom component when shadcn/ui has no equivalent, and even then compose it from shadcn primitives and the existing theme tokens.
- Use the `lucide` icon library, as configured in `components.json`.
