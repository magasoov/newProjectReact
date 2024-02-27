import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items:[
        {
          id: 1,
          title: 'Стул серый',
          img: 'images1.jpeg',
          desc: 'Lorem ipsum dolo sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'images2.jpeg',
          desc: 'Lorem ipsum dolo sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'images3.jpeg',
          desc: 'Lorem ipsum dolo sit amet, consectetur adipisicing.',
          category: 'Sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'images4.jpeg',
          desc: 'Lorem ipsum dolo sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.99'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'images5.jpeg',
          desc: 'Lorem ipsum dolo sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.order} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item){
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
