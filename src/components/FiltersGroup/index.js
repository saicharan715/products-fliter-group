import {BiSearchAlt2} from 'react-icons/bs'
import './index.css'

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const FiltersGroup = () => (
  <div className="filters-group-container">
    <input placeholder="Search" type="search" />
    <div className="inner-part">
      <h1 className="heading">Category</h1>
      <p className="category">Clothing</p>
      <p className="category">Electronics</p>
      <p className="category">Appliances</p>
      <p className="category">Grocery</p>
      <p className="category">Toys</p>
      <h1 className="heading">Rating</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png"
          alt="rating 4"
        />
        <p>& up</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png"
          alt="rating 3"
        />
        <p>& up</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png"
          alt="rating 2"
        />
        <p>& up</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png"
          alt="rating 1"
        />
        <p>& up</p>
      </div>
      <button type="button">Clear Filters</button>
    </div>
    {/* Replace this element with your code */}
  </div>
)

export default FiltersGroup
