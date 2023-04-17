import React from "react";
import "./Antd.css";
import {Col,Row,Divider} from 'antd';
const Antd:React.FC=()=>(
<>
<Row>
    <Col span={24} className="col1" >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain><h2>Text</h2></Divider>
    </Col>
</Row>
<Row>
<Col span={12} >
 <Row > 
      <Col span={16}  className="subcol1">Col-16</Col>
       <Col span={8} className="subcol2">Col-8</Col>
   </Row>
</Col>
<Col span={12} className="col2">
<Row>
      <Col span={16} className="subcol1">Col-16</Col>
       <Col span={8} className="subcol2">Col-8</Col>
 </Row>
 </Col> 
 </Row>
<Row gutter={[70,80]}>
   <Col span={6} offset={6}
   className="col3">
    col-6
   </Col>
   <Col span={6}>
      col-6
   </Col>
   <Col span={6} className="col3">
      col-6
   </Col>
</Row>
<Row >
   <Col span={18} className="col4" push={6} >
      col-18 col-push-6
   </Col>
   <Col span={6} className="col5"  pull={18}> 
      col-6 col-pull-18(number of cells that raster is moved to the left)
   </Col>
</Row>




</>


)
export default Antd;