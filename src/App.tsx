import React, { useState } from "react";
import styled from "styled-components";

import Table from "./components/Common/Table";
import { Pagination } from "antd";
import ProLoader from "./components/Common/Loader";
import Constants from "./components/Common/Constants";
import Modal from "./components/Common/Modal";
import Button from "./components/Common/Button";
import Input from "./components/Common/Input";
import Tooltip from "./components/Common/Tooltip";
import { StyledCard, StyledSpanTag } from "./components/Common/Styles";
import { LoadingOutlined } from "@ant-design/icons";
import pagination from "antd/es/pagination";
import Loader from "./components/Common/Loader";
import PrimaryButton from "./components/Common/PrimaryButton";
import SecondaryButton from "./components/Common/SecondaryButton";

function App() {
  const [visible, setVisible] = useState(false);
  const  handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const data = [
    {
      name: "Button",
      component: <Button>Submit</Button>,
      key: "1",
    },
    {
      name: "Input",
      component: <Input placeholder={""} bordered={false}></Input>,
      key: "2",
    },
    {
      name: "Primary Button",
      component: <PrimaryButton>Sign Up</PrimaryButton>,
      key: "3",
    },
    {
      name: "Secondary button",
      component: <SecondaryButton>Cancel</SecondaryButton>,
      key: "4",
    },
    {
      name: "Card",
      component: (
        <StyledCard bordered={false} hoverable={true}>
          {" "}
          This is Card Component{" "}
        </StyledCard>
      ),
      key: "5",
    },
    {
      name: "Loader",
      component: <Loader icon={antIcon} spinning={false}></Loader>,
      key: "6",
    },
    {
      name: "Modal",
      component:<><Button onClick={showModal}>{"open modal"}</Button><Modal onOk={handleOk} onCancel={handleCancel} visible={visible}><div>THIS IS A MODAL</div></Modal></>,
      key: "7",
    },{
        name:"Tooltip",
        component:<Tooltip title="prompt text"  trigger ="hover"  arrow = {true}>
        <StyledSpanTag>Tooltip will show on mouse enter.</StyledSpanTag>
        </Tooltip>,
        key:"8",
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Component",
      dataIndex: "component",
      key: "key",
    },
  ];
  return (
    <>
     <Table
      dataSource={data}
      columns={columns}
      pagination={pagination}>
        this is table
      </Table>
    
   
    </>
  );
}

export default App;
