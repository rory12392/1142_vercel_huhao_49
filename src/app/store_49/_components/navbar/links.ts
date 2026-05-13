type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/store_49', label: 'StoreHome' },
  { href: '/store_49/about_49', label: 'about_49' },
  { href: '/store_49/products_49', label: 'products_49' },
  { href: '/store_49/favorites_49', label: 'favorites_49' },
  { href: '/store_49/reviews_49', label: 'reviews_49' },
  { href: '/store_49/cart_49', label: 'cart_49' },
  { href: '/store_49/orders_49', label: 'orders_49' },
];

export const linksAdmin: NavLink[] = [
  { href: '/store_49/admin_49/sales_49', label: 'dashboard_49' },
];

export const adminLinks: NavLink[] = [
  { href: '/store_49/admin_49/sales_49', label: 'sales_49' },
  { href: '/store_49/admin_49/products_49', label: 'my products_49' },
  { href: '/store_49/admin_49/products_49/create', label: 'create product_49' },
];
