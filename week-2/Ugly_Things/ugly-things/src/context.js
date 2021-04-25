import React from 'react';
const { Provider, Consumer } = React.createContext();


class ListContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
        name: "Jim",
        desc: "Kinda hot in these Rhinos...",
        img: "https://1.bp.blogspot.com/-8LWxXCUj3N4/XES1O5WfwoI/AAAAAAAACpc/wjtdQkN1F-UTUxgRvjIIZSZhsR4zPyYNwCLcBGAs/s1600/a.png"
      },
      {
        name: "'Bean'ey Baby",
        desc: "Yeeshh...",
        img: "https://i.ytimg.com/vi/irGFKFmVVng/hqdefault.jpg"
      },
      {
        name: "Naked Mole Rat",
        desc: "...David Attenborough Voice... The naked mole rat quite possibly the most hideous of all the Earth's small mamals.",
        img: "https://media.nature.com/lw1024/magazine-assets/d41586-019-00906-3/d41586-019-00906-3_16573240.jpg"
      }],
      name: "",
      desc: "",
      img: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  
  handleDelete(e) {
    let deleteBtn = document.getElementsByClassName("cards")
    console.log(deleteBtn)
    for (var i = 0; i < deleteBtn.length; i++) {
      if (e.target === deleteBtn[i]) {
        let x = deleteBtn[i].parentNode
        let y = x.parentNode
        y.removeChild(x)
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let newEntry = {
      name: this.state.name,
      desc: this.state.desc,
      img: this.state.img
    }
    this.state.list.push(newEntry)
    this.setState({
      name: "",
      desc: "",
      img: ""
    })
  }

  render() {
    const items = this.state.list
    return (
      <Provider value={{ 
          list: items, 
          delete: this.handleDelete, 
          sub: this.handleSubmit, 
          change: this.handleChange,
          }} >

        {this.props.children}

      </Provider>
    )
  }
}






export { ListContextProvider, Consumer as ListContextConsumer };