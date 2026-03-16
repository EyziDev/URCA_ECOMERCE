fetch("source/plants.json")
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");

    data.categories.forEach((category) => {
      const categoryTitle = document.createElement("h2");
      categoryTitle.className = "category-tittle poppins-bold";
      categoryTitle.textContent = category.name;
      gallery.appendChild(categoryTitle);

      const categoryContainer = document.createElement("div");
      categoryContainer.className = "product-container";

      category.products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = product.url;
        img.alt = product.name;

        const caption = document.createElement("div");
        caption.className = "poppins-regular";
        caption.textContent = product.name;

        card.appendChild(img);
        card.appendChild(caption);

        // 👇 aqui faz o clique abrir a página do produto
        card.addEventListener("click", () => {
          window.location.href = `product.html?id=${product.id}`;
        });

        categoryContainer.appendChild(card);
      });

      gallery.appendChild(categoryContainer);
    });
  })
  .catch((err) => {
    console.error("Erro ao carregar plants.json:", err);
    document.getElementById("gallery").textContent =
      "Erro ao carregar plantas.";
  });