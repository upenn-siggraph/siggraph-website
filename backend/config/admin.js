module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8cd948bd049090be092f190bf68b3253'),
  },
});
