import { Row, Col } from 'antd';
import { BsTelephoneFill, BsCheckLg } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import ProductBox from './components/productBox';
function App() {
  return (
    <div className="App">
      <div className='App-header-tag'>
        <Row gutter={[16,16]} justify="end">
          <Col className='contact1'>
            <p><BsTelephoneFill/>(+976) 736-8151</p>
          </Col>
          <Col className='contact2'>
            <p className='alba'>Борлуулалтын алба</p>
          </Col>
          <Col className='contact3'>
            <p><BsTelephoneFill/>(+976) 7227-8888</p>
          </Col>
        </Row>
      </div>
      <div className='App-header'>
          <div className='menus'>
            <div className='icon'>
              <img src='https://i.postimg.cc/KjvTk1yn/Logo2022.png'/>
              <div className='bar'>
                  <FaBars/>
              </div>
            </div>
            <div className='menu'>
                <p>Бидний тухай</p>
                <p>Хүний нөөц</p>
                <p>Авлигын эсрэг үйл ажиллагаа</p>
                <p>Үйлдвэрчний эвлэлийн хороо</p>
                <p>Үйлдвэрчний эвлэлийн хороо</p>
                <button>Захиалга</button>
                <button> Ил тод байдал</button>
            </div>
            
          </div>
      </div>
      <div className='section'>
        <h1 className='section-title'>Чанартай бүтээгдэхүүнийг хамгийн хямдаар</h1>
        <div className='section-btns'>
            <button>Цемент</button>
            <button>Шохой</button>
        </div>
        <div className='section-second'>
          <Row className='section-second-box' align='center' gutter={[0,16]}>
            <Col>
              <ProductBox/>
            </Col>
            <Col>
              <div className="productBox-white">
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
            </Col>
            <Col>
            <ProductBox/>
            </Col>
          </Row>
          
          
        </div>
      </div>


     
   
    </div>
  );
}

export default App;
