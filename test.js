
//place order
const placeOrder = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        let orderPayload = {
            products: cart,
            user: auth.user,
            total: totalPrice(),
        };
        let response = await axios.post("/api/authRoute/order", orderPayload);
        if (response.status === 200) {
            setLoading(false);
            setCart([]);
            localStorage.removeItem("cart");
            navigate("/orders");
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Something went wrong!");
    }
};

<button
    className="place-order-btn"
    disabled={loading}
    onClick={placeOrder}
>
    {loading ? "Placing Order..." : "PLACE ORDER"}
</button>