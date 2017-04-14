export default class ProductBox extends React.Component {

  constructor() {
    this.state = {
      showProducts: true,
      description: []
    };
  }

  componentWillMount() {
    this._fetchProducts ();
  }

  render() {
    const products = this.getProducts
    return(
      <div className="products-container">
        <h2> The Gems </h2>
        <div> {products.name} </div>
      </div>
    )
  }

  _getProducts() {
    return this.state.product.map((product) => {
      return <Product
              {...product}
              name={products.name.en} />
              //  id={comment.id}
              //  author={comment.author}
              //  body={comment.body}
              //  avatarUrl={comment.avatarUrl}
              //  onDelete={this._deleteComment.bind(this)}
              //  key={comment.id} />
    });
  }

  _fetchProducts() {
    jQuery.ajax({
      method: 'GET',
      url: 'api.sphere.io/down-under/product-projections?token=GSy9xD4iy41w1wPOR2LiHNlgbwJQG8I5',
      headers: {Authorization: 'Bearer GSy9xD4iy41w1wPOR2LiHNlgbwJQG8I5'},
      success: (products) => {
        this.setState({ products })
      }
    });
  }
}