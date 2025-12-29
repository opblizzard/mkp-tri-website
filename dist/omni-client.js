// public/omni-client.js
// Handles Omni console form submission and calls the Worker endpoint

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const textarea = form?.querySelector("textarea[name='prompt']");
  const button = form?.querySelector("button");
  const shell = document.querySelector(".code-shell pre");

  if (!form || !textarea || !button || !shell) return;

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const prompt = textarea.value.trim();
    if (!prompt) return;
    shell.textContent = "Sending to Omni...";
    try {
      const res = await fetch("/api/omni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      shell.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      shell.textContent = `Error: ${err}`;
    }
  });
});
