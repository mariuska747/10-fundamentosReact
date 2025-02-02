const adverts = [
  {
    id: "94d0ca7f-3a2c-4df8-8502-7c7273a58e67",
    createdAt: "2025-01-30T14:23:51.000Z",
    name: "queso de burgos",
    sale: true,
    price: 30,
    tags: ["lifestyle"],
    photo: "http://localhost:3001/public/1738247031129-909187199.jpeg",
  },
];

function AdvertsPage() {
  return (
    <div>
      <h1>Adverts</h1>
        <ul>
            {adverts.map((advert) => (
            <li key={advert.id}>
                <img src={advert.photo} alt={advert.name} width="50px"/>
                <h3>{advert.name}</h3>
                <p>Precio: {advert.price} €</p>
                <p>Compra/Venta: {advert.sale ? "Sale" : "Purchase"}</p>
                <p>Tags {advert.tags.join(", ")}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default AdvertsPage;
