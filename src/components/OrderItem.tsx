import { IOrder } from "../models/IOrder";
import React, {FC, useState} from "react";
import { Button, Modal } from 'antd';
interface OrderItemProps {
  order: IOrder;
}
const OrderItem: FC <OrderItemProps> = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      
      <Button type="primary" onClick={showModal}>
      Номер заказа: {order.id}
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{order.date}</p>
        <p>{order.goods}</p>
        <p>{order.contractor}</p>
        <p>{order.buyer}</p>
        <p>{order.recipient}</p>
        <p>{order.holiday}</p>
      </Modal>      
    </div>
  );
};

export default OrderItem;
