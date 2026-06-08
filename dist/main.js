const secretMessage = 'Secret: Teamwork makes the code work.';
const secretEl = document.getElementById('secret');
if (secretEl) {
  secretEl.textContent = secretMessage;
}
console.log('Secret message loaded.');
