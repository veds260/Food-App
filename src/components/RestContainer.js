const RestContainer = ()=>(
    <div className="restcontainer">
        {
        resList.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData= {restaurant} />)
    }
    </div>
)

export default RestContainer;