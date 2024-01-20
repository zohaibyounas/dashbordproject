import './newProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className="newProductTitle">New Product</h1>
        <span className="productImg">Images</span>
            <form className="newProductForm">
                <input type="file" style={{marginTop:"10px"}}/>
                <div className="newProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='product name' />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder='123' />
                </div>
                <div className="newProductItem">
                    <label>Active</label>
                    <select className='newProductSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                
                <div className="newProductItem">
                   
                        <button className="newProductButton">Create</button>
                    </div>
            </form>
    </div>
  )
}
