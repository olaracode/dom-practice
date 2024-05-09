const products = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
    img: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 2,
    name: "phone",
    price: 500,
    img: "https://picsum.photos/id/238/200/300",
  },
  {
    id: 3,
    name: "tablet",
    price: 300,
    img: "https://picsum.photos/id/239/200/300",
  },
  {
    id: 4,
    name: "watch",
    price: 200,
    img: "https://picsum.photos/id/240/200/300",
  },
  {
    id: 5,
    name: "watch",
    price: 200,
    img: "https://picsum.photos/id/240/200/300",
  },
  {
    id: 6,
    name: "watch",
    price: 200,
    img: "https://picsum.photos/id/240/200/300",
  },
  {
    id: 7,
    name: "watch",
    price: 200,
    img: "https://picsum.photos/id/240/200/300",
  },
];

window.onload = () => {
  const productRow = document.getElementById("app");
  // Un elemento por producto
  // Y renderizar los datos de ese producto
  for (let product of products) {
    const productCard = document.createElement("div");
    productCard.classList.add("col-12", "col-md-4", "col-lg-3");
    productCard.innerHTML = `
    <div class="card">
        <img src="${product.img}" class="card-img-top" alt="product-${product.name}-id-${product.id}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <a href="#" class="btn btn-primary">
                ${product.price}
            </a>
        </div>
    </div>
    `;
    productRow.appendChild(productCard);
  }
};
