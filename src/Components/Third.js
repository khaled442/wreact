import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export const Third = () => {
    return (
        <div>
            <Carousel class ="Tab">
  <Carousel.Item interval={2000}>
    <img
      class="d-block w-100"
      src="https://media-exp1.licdn.com/dms/image/C4D1BAQE26cjBgmbvag/company-background_10000/0/1601910986393?e=2159024400&v=beta&t=qLHPwYZQi68ZMGhYs46eTqI0AJ18S-jArT6K_8opNKc"
      alt=""
    />
    <Carousel.Caption>
      <h3>Go My Code</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      class="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudcJ6wz5JQooSS3iwSroGKAB3N1t6OsvgJg&usqp=CAU"
      alt="Go-My-Code"
    />
    <Carousel.Caption>
      <h3>Full-Js</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      class="d-block w-100"
      src="https://gomytech.gomycode.co/content/images/2020/05/inside-gomycode.jpg"
      alt="Full-Js"
    />
    <Carousel.Caption>
      <h3>JS</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
