import React from "react";
import Item from "../Item";
import Accessories from '../../assets/Desktop-Accessories.jpg'
import Model3 from '../../assets/Desktop-Model3.jpeg'
import ModelY from '../../assets/Desktop-ModelY.jpeg'
import ModelS from '../../assets/Desktop-ModelS.jpg'
import ModelX from '../../assets/Desktop-ModelX.jpg'
import SolarPanels from '../../assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../../assets/Desktop-SolarRoof.jpg'

const Products = () => {
    return(
        <div>
            <Item 
            title = "Model 3"
            desc = "Order online for Touchless Delivery"
            backImg={Model3}
            FirstButton="Custom Order"
            SecondButton="Existing Inventory"
            twoButtons="true"
            />
            <Item 
            title = "Model Y"
            desc = "Order Online for Touchless Delivery"
            backImg={ModelY}
            FirstButton="Custom Order"
            SecondButton="Existing Inventory"
            twoButtons="true"
            />
            <Item 
            title = "Model S"
            desc = "Order Online for Touchless Delivery"
            backImg={ModelS}
            FirstButton="Custom Order"
            SecondButton="Existing Inventory"
            twoButtons="true"
            />
            <Item 
            title = "Model X"
            desc = "Order Online for Touchless Delivery"
            backImg={ModelX}
            FirstButton="Custom Order"
            SecondButton="Existing Inventory"
            twoButtons="true"
            />
            <Item 
            title = "Solar Panels"
            desc = "Lowest Cost Solar Panels in America"
            backImg={SolarPanels}
            FirstButton="Order Now"
            SecondButton="Learn More"
            twoButtons="true"
            />
            <Item 
            title = "Solar Roof"
            desc = "Produce Clean Energy From Your Roof"
            backImg={SolarRoof}
            FirstButton="Order Now"
            SecondButton="Learn More"
            twoButtons="true"
            />
            <Item 
            title = "Accessories"
            desc = ""
            backImg={Accessories}
            FirstButton="Shop Now"
            SecondButton=""
            />
        </div>
    )
}


export default Products;