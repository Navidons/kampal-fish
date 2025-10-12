# Database Setup Guide

This application uses MySQL with Prisma ORM for database management.

## Setup Steps

### 1. Create MySQL Database

Create a MySQL database for the application:

```sql
CREATE DATABASE kampal_fish_db;
```

### 2. Environment Variables

Create a `.env` file in the root directory with your database connection:

```env
DATABASE_URL="mysql://username:password@localhost:3306/kampal_fish_db"
```

**Example connection strings:**
- Local MySQL: `mysql://root:yourpassword@localhost:3306/kampal_fish_db`
- Cloud databases (PlanetScale, Railway, etc.): `mysql://username:password@host:port/database_name?sslaccept=strict`

### 3. Database Migration

Run the migration to create tables:

```bash
npx prisma db push
```

### 4. Seed Products

Populate the database with initial product data:

```bash
npm run seed-products
```

## Database Schema

### Products Table
- `id` (Int, Primary Key, Auto Increment)
- `name` (String) - Product name
- `description` (String, Optional) - Product description
- `price` (String) - Product price
- `image` (String) - Thumbnail image path
- `popular` (Boolean) - Whether product is popular
- `fishType` (String, Optional) - Type of fish
- `serving` (String, Optional) - Serving size
- `icon` (String, Optional) - Display icon
- `unitPrice` (Float, Optional) - Price per kg in UGX
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

### Custom Orders Table
- `id` (Int, Primary Key, Auto Increment)
- `weight` (String) - Weight description (e.g., "1/2 kg", "1 kg")
- `unitPrice` (Float) - Price per kg in UGX
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

### Users Table
- `id` (Int, Primary Key, Auto Increment)
- `email` (String, Unique) - User email
- `name` (String, Optional) - User name
- `createdAt` (DateTime) - Creation timestamp
- `updatedAt` (DateTime) - Last update timestamp

## API Endpoints

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create a new product
- `GET /api/custom-orders` - Fetch all custom orders with calculated prices
- `POST /api/custom-orders` - Create a new custom order

## Development Commands

- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npm run seed-products` - Seed database with initial data
