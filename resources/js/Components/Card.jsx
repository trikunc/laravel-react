import React from 'react'

const Card = ({ news }) => {
  return !news ? noNews() : isNews(news)
}

const isNews = (news) => {
  return news.map((data, index) => {
    return (
      <div key={index} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">
              {data.author}
            </div>
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.category}</div>
            {/* <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    )
  })
}

const noNews = () => {
  return (
    <div>No Data</div>
  )
}


export default Card