const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("source/plants.json")
  .then((response) => response.json())
  .then((data) => {
    const allProducts = data.categories.flatMap((category) => category.products);
    const product = allProducts.find((p) => p.id == productId);

    if (!product) {
      console.log("Produto não encontrado");
      return;
    }

    document.querySelector("#productName h1").textContent = product.name;
    document.querySelector("#productName p").textContent = product.description || "Sem descrição disponível.";
    document.querySelector("#imageProduct img").src = product.image || product.url;
    document.querySelector("#productPreco h1").textContent = "R$ " + product.price;
  })
  .catch((err) => {
    console.error("Erro ao carregar o produto:", err);
  });