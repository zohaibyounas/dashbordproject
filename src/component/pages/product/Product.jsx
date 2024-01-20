import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../chart/Chart'
import {productData} from '../../../../src/DemoData'
import PublishIcon from '@mui/icons-material/Publish';


export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
       <h1 className="productTitle">Product</h1>
       <Link to= '/newproduct'>
       <button className="productAddButton">Create</button>
       </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart  data={productData} dataKey="Sales" title="Sales performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://www.health.com/thmb/rxTGGAG2SRDAbc7Pli8djBvxgOo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hlt-product-panoxyl-acne-foaming-wash-benzoyl-peroxide-jjuliao-0471-a0f8956d19c7440a89113437c4b787dc.jpg" alt="" 
                className="productInfoImg"
                 />
            <span className="productName">PanOxyl</span>
            </div>
            <div className="productInfoBotton">
               <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
               </div>
               <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
               </div>

            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text"  placeholder='PanOxyl'/>
                <label>In Stock</label>
                <select name='inStock' id='idstock'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://www.health.com/thmb/rxTGGAG2SRDAbc7Pli8djBvxgOo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hlt-product-panoxyl-acne-foaming-wash-benzoyl-peroxide-jjuliao-0471-a0f8956d19c7440a89113437c4b787dc.jpg" alt="" 
                    className="productUploadImg" 
                    />
                    <label for="file">
                     <PublishIcon />
                    </label>
                    <input type="file" id='file' style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}
