import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const StoreContext = createContext(null)

export const StoreContextProvider =(props)=>{
    const [cartItem,setCartItem] =useState ({})
    const [ token , setToken ] = useState("")
    const [ food_list , setFood_list] = useState([])
    const backendURL = "http://localhost:3000"


    function addToCart(itemId){
        if(!cartItem[itemId]){
            setCartItem((p)=>({...p,[itemId]:1}))
        }else{
            setCartItem((p)=>({...p,[itemId]:p[itemId]+1}))
        }
    }
    function removeCart(itemId){
            setCartItem((p) => ({ ...p, [itemId]: p[itemId] - 1 }));

    }
    function getTotalCartAmaunt(){
        let titalAmaunt = 0
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itenInfo = food_list.find((product)=>product._id === item)
                titalAmaunt = titalAmaunt + itenInfo.price * cartItem[item]
            }
        }
        return titalAmaunt
    }

    const fetchFoodList = async () => {
        const response = await axios.get(backendURL + "/api/food/list") ;
        setFood_list(response.data.data) ;
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList() ; 
            if(localStorage.getItem("Token")){
                setToken(localStorage.getItem("Token"))
            }
        }
        loadData()
    },[])


    const contextValue={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeCart,
        getTotalCartAmaunt,
        backendURL,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}