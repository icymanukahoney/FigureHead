import React from 'react'

const SingleProduct = () => {
  return (
    <div id="product-page">
      <div className='bg-image'></div>

      <div id="product">

        <img src="/img/logo.png" alt="main image for the product" className="main-img product-img" />
        <img src="/img/logo.png" alt="secondary image for the product" className="second-img product-img" />
        <img src="/img/logo.png" alt="tertiary image for the product" className="third-img product-img" />

        <h2>PRODUCT NAME</h2>
        <div className="product-details">
          <p>Product By: Author Name</p>
          <p>Price: $50.00</p>
          <p>Category, Category</p>
        </div>
        <div className="product-aside">
          <i className="fa fa-heart"></i>
        </div>
        <div className="product-description">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum laborum, non eligendi expedita cumque nam ea, voluptas quod praesentium dolore nemo hic in assumenda maxime molestias quidem quaerat blanditiis ex autem a libero officia temporibus ducimus? Soluta vero incidunt, reiciendis aliquam assumenda minus doloribus cumque expedita impedit libero magni molestiae tenetur, excepturi veritatis hic atque delectus nulla dolore laudantium officiis.</p>
        </div>
      </div>
      <div id="comment-flex">

      <div className="comment">
          <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>AUTHOR NAME</p>
              <p className='date'>DATE POSTED</p>
            </div>
          </div>
          <div className="comment-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed ut rerum aliquam deserunt quam repellat illum molestiae! Quidem, fugit.</p>
          </div>
        </div>
        
        <div className="comment">
          <div className="comment-author">
            <div>
              <img src="/img/logo.png" alt="Profile Picture" />
              <p className='author'>AUTHOR NAME</p>
              <p className='date'>DATE POSTED</p>
            </div>
          </div>
          <div className="comment-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates omnis dolores cumque deleniti, iste aperiam atque quas exercitationem. Voluptatem, optio laudantium? Numquam voluptas odio consectetur recusandae asperiores enim animi quibusdam veniam ab, totam, laudantium vero praesentium eos suscipit quod.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleProduct
