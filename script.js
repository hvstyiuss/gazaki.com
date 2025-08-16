const games = [
    {
      title: "Baseball 9 (MOD)",
      author: "playus soft",
      android: "https://tapunlock.co/cl/i/o6no4d",
      ios: "https://tapunlock.co/cl/i/x6w3ll",
      image: "images/baseball9.png"
    },
    {
      title: "Speed Stars (MOD)",
      author: "Miniclip",
      android: "https://tapunlock.co/cl/i/g6p5x1",
      ios: "https://tapunlock.co/cl/i/5kq8o3",
      image: "images/speed_stars.jpg"
    },
    {
      title: "Subway Surfers (MOD)",
      author: "SYBO Games",
      android: "https://tapunlock.co/cl/i/qkv9p6",
      ios: "https://tapunlock.co/cl/i/merw6n",
      image: "images/subway_surfers.jpeg"
    },
    {
        title: "Clash Royale (Mod)",
        author: "Supercell",
        android: "https://tapunlock.co/cl/i/r72xdl",
        ios: "https://tapunlock.co/cl/i/e6qn2k",
        image: "images/clash_royale.jpeg"
    },
    {
        title: "Clash of Clans (Mod)",
        author: "Supercell",
        android: "https://tapunlock.co/cl/i/o6n1qq",
        ios: "https://tapunlock.co/cl/i/qkvr8w",
        image: "images/clash_of_clans.jpeg"
    },
    {
        title: "8 Ball Pool (Mod)",
        author: "Supercell",
        android: "https://tapunlock.co/cl/i/37x82m",
        ios: "https://tapunlock.co/cl/i/merml4",
        image: "images/8_ball_pool.jpeg"
    },
    {
        title: "Among us (Mod)",
        author: "Innersloth",
        android: "https://tapunlock.co/cl/i/r72k6d",
        ios: "https://tapunlock.co/cl/i/42l8ex",
        image: "images/among_s.png"
    }
  ];
  
  let allGames = [];
  for (let i = 0; i < games.length; i++) {
    allGames.push({ ...games[i % games.length] });
  }
  
  const gameGrid = document.getElementById("gameGrid");
  
  function displayGames(gameList) {
    gameGrid.innerHTML = "";
    gameList.forEach(game => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="content">
          <div class="title">${game.title}</div>
          <div class="author">${game.author}</div>
          <div class="stars">★★★★★</div>
          <div class="buttons">
            <a href="${game.android}" class="btn android"><i style="width:10px; margin-right: 4px" class="fab fa-android"></i> Get it</a>
            <a href="${game.ios}" class="btn ios"><i class="fab fa-apple"></i> Get it</a>
          </div>
        </div>
      `;
      gameGrid.appendChild(card);
    });
  }
  
  displayGames(allGames);
  
  // Filtering
  document.getElementById("searchTitle").addEventListener("input", filterGames);
  
  function filterGames() {
    const title = document.getElementById("searchTitle").value.toLowerCase();
  
    const filtered = allGames.filter(game =>
      game.title.toLowerCase().includes(title)
    );
  
    displayGames(filtered);
  }
  