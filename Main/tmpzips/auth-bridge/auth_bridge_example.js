// auth_bridge_example.js
// Example token exchange mock

async function exchangeCodeForToken(code) {
  // Simulate token exchange
  await new Promise(r => setTimeout(r, 120));
  return { access_token: 'mock-access-token', expires_in: 3600 };
}

async function refreshToken(refreshToken) {
  await new Promise(r => setTimeout(r, 100));
  return { access_token: 'refreshed-mock-token', expires_in: 3600 };
}

module.exports = { exchangeCodeForToken, refreshToken };