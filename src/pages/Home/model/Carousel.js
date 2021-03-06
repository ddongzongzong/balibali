import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import img from '@/images/banner/1.jpg'
import img2 from '@/images/banner/2.jpg'
import img3 from '@/images/banner/3.jpg'

class app extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [img,img2,img3],
      });
    }, 100);
  }

  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map((val,index) => (
          <a
            key={index}
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={val}
              alt="val"
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
            />
          </a>
          ))}
      </Carousel>
    )
  }
}

export default app