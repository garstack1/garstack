# garrettstack.com

Personal professional website for Garrett Stack — Instructional Designer,
Technical Writer & Implementation Consultant.

Built with: **Next.js 14** · **TypeScript** · **Tailwind CSS** · **Sanity CMS** · **Vercel** · **GA4**

---

## Getting started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Fill in the values (see below).

### 3. Run the dev server
```bash
npm run dev
# → http://localhost:3000
```

---

## Environment variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 → Admin → Data Streams → Measurement ID |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage → your project |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `SANITY_API_TOKEN` | sanity.io/manage → API → Tokens → Add token (Editor) |

---

## Setting up Sanity CMS

### 1. Create a Sanity project
Go to [sanity.io](https://sanity.io), create an account, then:
```bash
npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production --template clean
```

### 2. Add the schemas
Copy `sanity/schemas/` into your Sanity studio project's schema folder.

### 3. Deploy the studio
```bash
npx sanity deploy
# → gives you a studio URL like: your-project.sanity.studio
```

---

## Adding an employer landing page

1. Go to your Sanity studio
2. Click **Employer landing page → New**
3. Fill in:
   - **Employer name** e.g. `Acme Corp`
   - **Slug** → this becomes the URL: `garrettstack.com/acme-corp`
   - **Role type** → controls which persona is presented
   - **Hero headline / subline** → customised pitch
   - **Show/hide modules** → toggle portfolio, CV, music, GIS etc.
   - **Featured projects** → pick from your portfolio
   - **Personal message** → optional pull-quote to the employer
4. Hit Publish
5. Share the URL: `https://garrettstack.com/acme-corp`

> **Analytics**: Every visit to `/acme-corp` fires a `employer_page_view` GA4 event  
> with `employer: "acme-corp"` and `role_type: "instructional-designer"`.  
> Check Google Analytics → Reports → Events to see who's visiting.

---

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Then add your environment variables in the Vercel dashboard under
**Settings → Environment Variables**.

Link your domain: **Settings → Domains → Add → garrettstack.com**

---

## Project structure

```
src/
  app/
    layout.tsx          # Root layout + GA4
    page.tsx            # Homepage
    [employer]/
      page.tsx          # Dynamic employer landing pages
      EmployerPageClient.tsx
    about/page.tsx
    cv/page.tsx
    portfolio/page.tsx
    blog/page.tsx
    contact/page.tsx
  components/
    layout/
      Nav.tsx
      Footer.tsx
    sections/
      Hero.tsx
    ui/
  lib/
    analytics.ts        # GA4 event helpers
    sanity.ts           # Sanity client + queries + types
  styles/
    globals.css
sanity/
  schemas/
    employerPage.ts     # CMS schema for employer pages
    project.ts          # Portfolio project schema
    index.ts
```

---

## Design system

- **Display font**: Cormorant Garamond (elegant serif for headlines)
- **Body font**: DM Sans (clean, modern, readable)
- **Mono font**: DM Mono (labels, tags, code)
- **Primary colour**: `#0D0D0D` (near-black ink)
- **Accent colour**: `#E8490F` (signal orange — used sparingly for impact)
- **Background**: `#F4F2EE` (warm off-white)
