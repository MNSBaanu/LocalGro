# LocalGro

LocalGro is a frontend prototype for a Sri Lankan fresh produce supply chain platform. The current application focuses on a role-based React interface for browsing the product experience, signing in as different user types, and exploring core dashboards for inventory, orders, deliveries, and customer ordering flows.

## Current Status

This repository currently contains the frontend application only. There is no backend API, database, or persistent authentication yet. All data is mock data stored in React state for demonstration purposes.

Implemented today:

- Public landing page for the LocalGro brand
- Demo login with selectable roles
- Protected routes backed by in-memory auth context
- Shared sidebar layout for authenticated users
- Role-aware dashboard content
- Inventory CRUD UI with search, category filtering, and low-stock filtering
- Orders and delivery placeholder screens
- Customer order placement flow using local component state

## Tech Stack

- React 19
- React Router 7
- Vite 7
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
LocalGro/
|-- README.md
`-- frontend/
    |-- package.json
    |-- src/
    |   |-- components/
    |   |-- context/
    |   |-- layouts/
    |   |-- pages/
    |   |-- routes/
    |   `-- services/
    `-- vite.config.js
```

## Available Pages

Public routes:

- `/home` - marketing landing page
- `/login` - demo role selector

Protected routes:

- `/dashboard` - role-specific dashboard
- `/inventory` - inventory management screen
- `/orders` - orders management screen
- `/deliveries` - deliveries screen
- `/my-orders` - customer ordering screen

## Demo Roles

The login screen lets you enter the app as:

- Admin
- Warehouse Manager
- Delivery Personnel
- Finance Manager
- Customer
- Guest

Notes:

- `Guest` returns to the public home page without creating a session.
- Authenticated roles are stored only in React state, so refreshing the browser clears the session.
- The dashboard content changes by role, but route authorization is currently basic and does not enforce fine-grained permissions yet.

## Key Frontend Features

### Landing Page

- Branded home page focused on fresh produce and local farm sourcing
- Feature, category, product, and mission sections
- Entry point into the demo login flow

### Authentication

- Context-based auth provider
- Protected route wrapper redirects unauthenticated users to `/login`
- Role selection is simulated instead of using credentials

### Dashboard

- Reusable dashboard page that renders different metrics by role
- Shared sidebar navigation driven by the logged-in user's role

### Inventory Management

- Seeded inventory items with category, stock, supplier, and pricing data
- Add and edit inventory items through a form
- Delete inventory items
- Search by item name, category, or supplier
- Category filter and low-stock toggle
- Inventory summary cards for totals, value, low stock, and category count

### Orders and Deliveries

- Orders management table with sample order data
- Delivery page scaffold ready for expansion
- Customer ordering page that creates temporary orders in memory

## Running the Project

Prerequisites:

- Node.js 20+ recommended
- npm

Install and start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, typically `http://localhost:5173`.

Other useful commands:

```bash
cd frontend
npm run build
npm run preview
npm run lint
```

## Current Limitations

- No backend or database integration
- No persistent login session
- No real role-based access enforcement beyond menu visibility and shared routing
- Orders, deliveries, and finance flows are still partial
- Data resets on refresh

## Next Logical Steps

- Add backend services for authentication, inventory, orders, and deliveries
- Persist user sessions
- Enforce role-based route authorization
- Replace mock data with API-driven state
- Expand delivery and finance modules
- Add tests for core user flows

## Maintainer

LocalGro Developer
