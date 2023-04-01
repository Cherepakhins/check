import { useState } from "react";
import { postAPI } from "../services/PostService";
import IOrder from "./OrderItem";

const OrderContainer = () => {
  const [limit, setLimit] = useState(10)
  const {
    data: orders,
    error,
    isLoading,
    
  } = postAPI.useFetchAllOrdersQuery(limit);

  return (
    <div>
      <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {orders && orders.map((order) => <IOrder key={order.id} order={order} />)}
      </div>
    </div>
  );
};

export default OrderContainer;
