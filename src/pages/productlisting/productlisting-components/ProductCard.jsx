import React from 'react'

const ProductCard = (props) => {
  const img = props.image;
  return (
    <div className='ProductCard'>
        <div className="productcard-wrapper flex flex-col justify-center items-center shadow-xl font-Roboto w-32">
            <div className="product-image w-full bg-cover bg-no-repeat h-44" style={{backgroundImage: `url(${img})`}}>
              
            </div>
            <div className="product-info flex flex-col self-start justify-self-start gap-2">
                <span className='product-rating' >Rating: {props.rating}/5</span>
                <span className="product-title">{props.title}</span>
                <span className="product-category">{props.category}</span>
                <span className="product-price">{props.price}</span>
            </div>
        </div>



    </div>
  )
}

export default ProductCard;