import { create } from "zustand";

const usestore = create((set)=>({
    cart:[],
    addtocart:(product)=>set((state)=>{
        const check = state.cart.map((item)=>item.id===product.id);
        if(check){
            return{
                cart:state.cart.map((item)=>item.id===product.id?{...item,quantity: item.quantity+1}:item)
            }
        }
        else{
            return{
                cart:[...state.cart,{...product,quantity:1}]

            }
        }
    }),
    removefromcart:(id)=>set((state)=>({
        cart:state.cart.filter((item)=>item.id!==id)
    })),
    increasequantity:(id)=>set((state)=>({
        cart:state.cart.map((item)=>item.id===id?{
            ...item,quantity:item.quantity+1
        }:item)
    })),
    decreasequantity:(id)=>set((state)=>({
        cart:state.cart.map((item)=>item.id===id?{
            ...item,quantity:item.quantity-1
        }:item)
    })),
    clearcart:()=>set((state)=>({
        cart:[]
    })),
    wishlist:[],
    addtowishlist:(product)=>set((state)=>{
        const checking = state.wishlist.map((item)=>item.id===product.id);
        if(!checking){
            return{
                wishlist:[...state.wishlist,product]
            }
        }
    }),
    removefromwishlit:(id)=>set((state)=>({
        wishlist:state.wishlist.filter((item)=>item.id!==id)
    })),
    resetwishlist:()=>((set)=>({
        wishlist:[]
    }))
}))

export default usestore