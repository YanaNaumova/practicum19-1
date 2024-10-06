import { useState } from "react";
import "./App.css";
import { Button, Modal } from "antd";

function App() {
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
        Открыть модальное окно
      </Button>
      <Modal
        title="Простое модальное окно"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Это простое модальное окно вы можете настроить по своему усмотрению
        </p>
      </Modal>
    </div>
  );
}

export default App;
