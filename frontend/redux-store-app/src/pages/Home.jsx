import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Home = () => {
    const {data,error,isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <>
        <div className="productsContainer">
            <div className="productsStatus">
            {isLoading ? (<h2 className="isLoading">Loading....</h2>) : error ? (<h2 className="error">An Error occurred......</h2>) : (<>
                <h2 className="productsTitle">New Arrivals</h2>
                <div className="products">
                {data?.map((product) => {
                    const {image,name,id,price} = product;
                    return (
                        <div key={id}>
                        <div>
                            <div className="productContainer">
                                <img src={image} alt="img" className="productImage"/>
                                <h3 className="productTitle">{name}</h3>
                                <h4 className="productPrice">Price: ${price}</h4>
                                <div className="productButton">
                                    <button className="btn" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
                </div>
            </>)}
            </div>
        
        </div>
        </>
    )
}
export default Home;