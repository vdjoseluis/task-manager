#!/bin/bash

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Start the application
npm run start:prod
