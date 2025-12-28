const rssUrl =
  "https://news.google.com/rss/search?q=Indian+stock+market&hl=en-IN&gl=IN&ceid=IN:en";

fetch("https://api.allorigins.win/get?url=" + encodeURIComponent(rssUrl))
  .then(response => response.json())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");

    const container = document.getElementById("newsContainer");
    container.innerHTML = "";

    items.forEach((item, index) => {
      if (index >= 10) return;

      const title = item.querySelector("title").textContent;
      const link = item.querySelector("link").textContent;
      const pubDate = item.querySelector("pubDate").textContent;

      const div = document.createElement("div");
      div.className = "news-card";

      div.innerHTML = `
        <h3>${title}</h3>
        <small>${pubDate}</small>
        <br><br>
        <a href="${link}" target="_blank">Read full news →</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(() => {
    document.getElementById("newsContainer").innerHTML =
      "❌ Unable to load news at the moment.";
  });
ss