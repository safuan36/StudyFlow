# StudyFlow

StudyFlow is a student productivity MVP for organizing study tasks and monitoring progress.

## Stack

- Next.js with the App Router
- React 19
- Tailwind CSS 4 with shared global styling and design tokens

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Sends visitors to login or dashboard based on the stored name |
| `/login` | Local name entry |
| `/dashboard` | Task summary and add-task flow |
| `/tasks` | Full task list with due dates |
| `/subjects`, `/progress`, `/settings` | Milestone-one placeholders |
| `/health` | Basic route placeholder |

## Project structure

```text
app/                         App Router layouts and route pages
components/                  Reusable UI and client-side state provider
public/                      Static assets
```

The root layout uses a scoped client provider for localStorage-backed user name and in-memory task state. Route pages and placeholder views remain Server Components unless browser interactivity is needed.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` before delivery.

## Environment

Copy `.env.example` to a local `.env` file only when configuration is needed. Real `.env` files are ignored by Git.
