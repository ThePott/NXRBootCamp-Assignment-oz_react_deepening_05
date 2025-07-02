import React, { useState } from 'react';

const CartHeader = ({toggleCart, isOpen}) => {
    return (
        <div className="cart-header">
            <h2>장바구니</h2>
            <div onClick={toggleCart}>{isOpen ? '▲' : '▼'}</div>
        </div>
    )
}
const CartBody = ({ cart }) => {
    if (cart.length === 0) { return <p>장바구니가 비어있습니다.</p> }

    return (
        <>
            {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                    <span>₩{item.price.toLocaleString()}</span>
                </div>
            ))}
        </>
    )
}

const Cart = ({ cart, setCart }) => {
    const [isOpen, setIsOpen] = useState(true);

    // ---- 완료 ----
    //TODO: 장바구니를 열고 닫는 함수를 완성하세요.
    //setIsOpen 함수를 사용하여 State값을 업데이트하세요.
    const toggleCart = () => {
        console.log("--- here")
        setIsOpen((prev) => !prev)
    };

    // ---- 완료 ----
    //TODO: cart에 담긴 상품의 총 가격을 계산하세요.
    //reduce 함수를 사용하여 총 가격을 계산하세요.
    const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

    // ---- 완료 ----
    //TODO: (선택 과제) 상품 가격에 서식을 지정하세요.
    //상품 가격을 3자리마다 콤마(,)를 찍어주는 함수를 작성하세요.
    //예시) 1000000 => 1,000,000
    //이 함수의 사용법은 totalPriceFormatted(가격) 입니다.
    //HINT : https://shape-coding.tistory.com/72
    const totalPriceFormatted = (price) => price.toLocaleString()

    // ---- 완료 ----
    //TODO: 결제하기 버튼 구현하기
    //결제하기 버튼을 눌렀을 때 alert를 띄우고
    //장바구니를 비워주세요.
    const handlePurchase = () => {
        alert("안 되지롱!")
        setCart([])
    };


    return (
        <div className="cart">
            <CartHeader toggleCart={toggleCart} isOpen={isOpen} />
            {isOpen && <CartBody cart={cart} />}
            {totalPrice > 0 && (
                <div className="price-item">합계 금액 : {totalPriceFormatted(totalPrice) || totalPrice} 원</div>
            )}
            <button onClick={handlePurchase} disabled={cart.length === 0}>
                결제하기
            </button>
        </div>
    );
};

export default Cart;
