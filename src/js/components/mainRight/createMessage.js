export function createMessage() {
  const message = document.createElement("div");
  message.classList.add("message");

  message.innerHTML = `
  <div class="message-title">
    <h2>Messages</h2>
    <i class="uil uil-edit"></i>
  </div>

  <div class="search-bar">
    <i class="uil uil-search-alt"></i>
    <input type="search" name="navbar-search" id="navbar-search" placeholder="Search Messages">
  </div>

  <div class="function-panel">
    <span class="active">Primary</span>
    <span>General</span>
    <span>Requests</span>
  </div>
  `;

  return message;
}
