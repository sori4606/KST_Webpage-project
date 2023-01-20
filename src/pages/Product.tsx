import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="Product" style={{ position: "relative" , background:'#fffff4', height:'3100px'}}>
      <div>
        <img src="./img/Product.jpg" alt="Product_image" />
      </div>

      <div className='Product_Sub1'>
        Product
      </div>
      <div className = 'introduce'>
        <span >ㅡ제품소개</span>
      </div>
      
      <div className="Product1" style={{position: 'relative',top:'100px'}}>
        
        <ul>
          <img src = './img/NXP Processor.png' alt="NXP_png" />
          <li>
            Digital 광 분산 중계기 (Genesis) Control
            Processor : NXP LS1020AXE7KQB
          </li>
        </ul>

        <ul>
          <img src = './img/T1 Processor.jpg' alt="T1_png" />
          <li>
            Digital 광 분산 중계기 (Genesis) Control
            Processor : TI AM3352BZCZD60
          </li>
        </ul>
        
        <ul>
          <img src = './img/Xilinx Processor.png' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance,single SDM) Module
            Processor : Xilinx XC7Z020 (Zynq MPSoC)
          </li>
        </ul>

        <ul>
          <img src = './img/Xilinx2 Processor.jpg' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance,dual SDM) Module
            Processor : Xilinx XC7Z020 (Zynq MPSoC)
          </li>
        </ul>
        
        <ul>
          <img src = './img/XCZU5CG_2.png' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance) DPD Module
            Processor : Xilinx XCZU5CG (UltraScale  Zynq MPSoC)
          </li>
        </ul>
        
        <ul>
          <img src = './img/XCZU9CG_2.jpg' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance) DPD Module
            Processor : Xilinx XCZU9CG (UltraScale  Zynq MPSoC)
          </li>
        </ul>
        







      </div>


    </div>
  );
};

export default Product;
