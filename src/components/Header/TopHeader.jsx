import React, { useContext } from 'react';
import Row from "../common/Row.jsx"
import HeaderButton from './HeaderButton.jsx';
import RotatedSquares from '../../svgs/RotatedSquare';
import SearchIcon from "../../svgs/SearchIcon.jsx"
import CartIcon from "../../svgs/BucketIcon.jsx"
import UserIcon from "../../svgs/UserIcon.jsx"
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
import { CartContext } from '../../ContextAPI/index.js';

const TopHeader = () => {
    const {cartItems} = useContext(CartContext)
    return (  <div className="w-full h-full px-[10%]">
        <Row className="flex h-full items-center justify-between">
                <SearchIcon />
                <Row className="items-center">
                    <Link className="flex items-center" to="/">
            <RotatedSquares />
                <h1 className="text-[28px] text-[#433633] mx-[8px] font-semibold">Khazana.com</h1>
            <RotatedSquares />
                    </Link>
                </Row>
                <Row>
                    <HeaderButton title = "Account" icon ={<UserIcon />}/>
                    <Link to="/cart">
                    <Row className="ml-[10px]">
                    <HeaderButton title = {`Cart (${cartItems.length})`} icon ={<CartIcon />}/>
                    </Row>
                    </Link>
                </Row>
        </Row>
    </div> );
}
 
export default TopHeader;