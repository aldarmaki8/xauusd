# EA SaaS — Manual Wallet Payments (USDT TRC20)
Generated: 2025-11-07T12:28:20.240159Z

- Manual wallet page (shows network + address)
- Proof submission form → admin approval
- Prisma schema (Plan, PaymentRequest, Payment, License, User)
- License verification API for MT5

## Setup (local)
1) `cp .env.example .env` and fill values
2) `npm i`
3) `npm run prisma:generate && npm run prisma:migrate`
4) `npm run seed`
5) `npm run dev`

## Deploy (Vercel)
- Add all .env values in Project → Settings → Environment Variables
- Use Postgres (Supabase/Neon) for DATABASE_URL
- Routes: `/pay`, `/proof`, `/admin`, `/api/license/verify`
