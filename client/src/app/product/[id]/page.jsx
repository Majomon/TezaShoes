async function getProductId(id) {
  const response = await fetch(`${process.env.URL_BASE_DEV}/products/${id}`);
  const data = await response.json();
  return data;
}

async function UserPage({ params }) {
  const product = await getProductId(params.id);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>{product.name}</h2>
      </div>
    </div>
  );
}

export default UserPage;
