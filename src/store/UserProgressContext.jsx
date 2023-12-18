import { createContext, useState } from "react";

const userProgressContext = createContext({
    progress:'',
    showCart: ()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
});

export const UserProgressContextProvider=({children})=>{
    const [userProgress , setUserProgress] = useState('');

    const showCart=()=>{
        setUserProgress('cart');
    }

    const hideCart=()=>{
        setUserProgress('');
    }

    const showCheckout=()=>{
        setUserProgress('checkout');
    }

    const hideCheckout=()=>{
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return(
        <userProgressContext.Provider value={userProgressCtx}>{children}</userProgressContext.Provider>
    );
}

export default userProgressContext;