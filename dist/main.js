const secretEl = document.getElementById("secret");

async function loadSecretMessage() {
  try {
    const response = await fetch("/message");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const message = await response.text();
    if (secretEl) {
      secretEl.textContent = message;
    }
  } catch (error) {
    if (secretEl) {
      secretEl.textContent = "Unable to load secret message.";
    }
    console.error("Error loading secret message:", error);
  }
}

loadSecretMessage();
