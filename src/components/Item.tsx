interface Props {
  name: string;
  description: string;
  price: number;
}

function Item(props: Props) {
  return (
    <div className="col-sm-2">
      <div className="card">
        <img
          className="card-img-top"
          src={`../../pictures/${props.name}.jpg`}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
{
  /* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
