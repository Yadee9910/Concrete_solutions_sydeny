# Concrete Solutions Sydney Bricklaying - Professional Construction Services Website

A modern, SEO-optimized website for Concrete Solutions Sydney Bricklaying, featuring a dynamic blog system, service showcase, and admin dashboard. Built with Next.js 16, deployed on Vercel with Neon PostgreSQL database.

---

## 🌐 Deployment URLs

- **Production Website**: https://concrete-solutions-sydeny.vercel.app/
- **Admin Dashboard**: https://concrete-solutions-sydeny.vercel.app/admin/login
- **Database**: Hosted on https://neon.tech/

---

## 🔐 Admin Login Credentials

Access the admin panel at `/admin/login`:

```
Username: admin
Password: [Your configured password from environment variables]
```

⚠️ **Important**: These credentials are set via environment variables. Change them immediately in production for security.

---

## 🛠️ Technologies Used

### Frontend
- **Next.js 16.0.1** - React framework with App Router and Turbopack
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **React Hook Form + Zod** - Form validation
- **TipTap** - Rich text editor for blog posts

### Backend & Database
- **PostgreSQL** - Relational database (hosted on Neon)
- **Prisma 6.18.0** - Database ORM
- **Next.js API Routes** - Serverless API endpoints

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

### Deployment
- **Vercel** - Frontend hosting and deployment
- **Neon** - Serverless PostgreSQL database

### SEO Features
- Dynamic sitemap.xml generation
- robots.txt configuration
- JSON-LD structured data (Organization & BlogPosting schemas)
- Open Graph and Twitter Card meta tags
- Server-side rendering for all pages

---

## 📋 Project Setup Instructions

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 20.x or higher installed
- **npm**, **yarn**, or **pnpm** package manager
- A **Neon** account ([Sign up](https://neon.tech/))
- A **Vercel** account ([Sign up](https://vercel.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/concrete-solutions-sydney.git
cd concrete-solutions-sydney
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Connection (Neon PostgreSQL)
DATABASE_URL="postgresql://username:password@host.neon.tech/dbname?sslmode=require"

# Application Base URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Admin Authentication
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-secure-password-here"
JWT_SECRET="your-random-jwt-secret-key-256-chars"
```

#### Getting Your Neon Database URL:

1. Log in to [Neon Console](https://console.neon.tech/)
2. Create a new project or select an existing one
3. Navigate to **Connection Details**
4. Copy the **Connection String** (Prisma format)
5. Paste it as your `DATABASE_URL` in `.env`

### 4. Set Up the Database

Run the following commands to initialize your database:

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 6. Access Admin Panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and use the credentials from your `.env` file:

- **Username**: Value of `ADMIN_USERNAME`
- **Password**: Value of `ADMIN_PASSWORD`

---

## 🚀 Deployment to Vercel

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Install Command**: `npm install` (default)

### Step 3: Add Environment Variables in Vercel

In your Vercel project settings, go to **Settings** → **Environment Variables** and add:

```env
DATABASE_URL=postgresql://...@...neon.tech/...?sslmode=require
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-production-password
JWT_SECRET=your-production-jwt-secret-key
```

### Step 4: Deploy

Click **"Deploy"**. Vercel will automatically:
- Install dependencies
- Generate Prisma Client
- Build the Next.js application
- Deploy to production

Your site will be live at `https://your-project.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel, go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_BASE_URL` environment variable with your custom domain

---

## 📂 Project Structure

```
concrete-solutions-sydney/
├── app/
│   ├── (main)/              # Public-facing pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── blogs/           # Blog listing & detail pages
│   │   ├── contact/         # Contact page
│   │   └── services/        # Service pages
│   ├── admin/               # Admin dashboard
│   │   ├── login/           # Admin login
│   │   ├── dashboard/       # Dashboard
│   │   └── blog/            # Blog management
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/              # React components
├── lib/                     # Utility functions
│   └── prisma.ts            # Prisma client
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
├── .env                     # Environment variables (DO NOT COMMIT)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json             # Dependencies
```

---

## 🗄️ Database Schema

```prisma
model BlogPost {
  id          Int      @id @default(autoincrement())
  title       String
  slug        String   @unique
  imageUrl    String?
  description String
  content     String   @db.Text
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## 🎯 Key Features

### Public Features
- ✅ Responsive homepage with service showcase
- ✅ Dynamic blog system with rich text content
- ✅ Service detail pages (Bricklaying, Landscaping, Retaining Walls)
- ✅ Contact form with validation
- ✅ Mobile-responsive design
- ✅ Smooth animations with Framer Motion

### Admin Features
- ✅ Secure authentication system
- ✅ Create, edit, and delete blog posts
- ✅ Rich text editor (TipTap) with image uploads
- ✅ Blog post management dashboard

### SEO Optimization
- ✅ Dynamic meta tags (title, description, canonical)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Organization & BlogPosting)
- ✅ Auto-generated sitemap.xml with blog posts
- ✅ robots.txt configuration
- ✅ Server-side rendering for fast indexing
- ✅ Image optimization with alt attributes

---

## 🧪 Build & Testing

```bash
# Lint the code
npm run lint

# Build for production
npm run build

# Start production server locally
npm run start

# Generate Prisma Client
npx prisma generate

# View database in Prisma Studio
npx prisma studio
```

---

## 🔐 Security Best Practices

### For Production Deployment:

1. **Update Admin Credentials**
   - Use strong, unique passwords
   - Store credentials securely in Vercel environment variables

2. **Secure JWT Secret**
   - Generate a random 256-character string
   - Never expose in client-side code

3. **Database Security**
   - Use Neon's built-in SSL encryption
   - Enable connection pooling
   - Restrict IP access if needed

4. **Environment Variables**
   - Never commit `.env` to version control
   - Use different credentials for development and production

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Prisma Client not generated
```bash
npx prisma generate
```

**Issue**: Database connection failed
- Check `DATABASE_URL` in `.env`
- Ensure Neon database is active
- Verify SSL mode is enabled

**Issue**: Build fails on Vercel
- Check environment variables are set correctly
- Verify database is accessible from Vercel
- Check build logs for specific errors

**Issue**: Admin login not working
- Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` in environment variables
- Check `JWT_SECRET` is set
- Clear browser cookies and try again

---



---

