
import { BsTelephoneFill, BsCheckLg } from "react-icons/bs"
const ProductBox=()=>{
 return   <div className="productBox">
    <h3>ЦЕМЕНТ 42.5</h3>
    <div className='price'>
        <div className='price-tog'>
            <p className='tog'>202,000₮</p>
            <div className='noat'>
                <p>НӨАТ-тай</p>
                <p>Жижиглэн (байхгүй)</p>
            </div>
        </div>
        <div className='btns'>
          <button>Цемент 32.5 захиалах</button>
        </div>
    </div>
    <div className='detail'>
      <p><BsCheckLg/>Задгай /бөөний үнэ/ - 202,000₮</p>
      <p><BsCheckLg/>Ууттай /бөөний үнэ/ - 227,000₮</p>
    </div>
</div>
}

export default ProductBox;