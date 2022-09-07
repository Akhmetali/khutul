import { Row, Col, Image, Avatar } from 'antd';
import { BsTelephoneFill, BsCheckLg } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import ProductBox from './components/productBox';
import NewsBox from './components/NewsBox';
function App() {
  return (
    <div className="App">
      <div className='App-header-tag container-lg'>
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
      <div className='App-header container-xl'>
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
        <div className='section-second container-xl'>
          <Row gutter={[0,16]} className='section-second-box' justify='space-between' align='center'>
            <Col xl={8} span={24}>
              <ProductBox/>
            </Col>
            <Col  xl={8} span={24}>
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
            <Col  xl={8} span={24}>
            <ProductBox/>
            </Col>
          </Row>
        </div>

      </div>
      <div className='cups container-xl' >
{
            [1,2,3,4,5,5,6,6,6].map(e=>
              <Image
              width={50}
              src="https://i.postimg.cc/J0fMZJCv/reward5.png"
              />
              
            )

}
          </div>
          <div className='content container-xl'>
            <img src='https://i.postimg.cc/MTz55KSG/naranbaatar.jpg'/>
            <div className='backcolor'></div>
            <div className='welcome'>
              <p className='text'>Бид зах зээлд хамгийн өрсөлдөхүйц үнэ тогтоосон. 765 ажилтан өдөр шөнөгүй чанар сайтай цемент, шохой үйлдвэрлэж байна. Манай борлуулалтын албатай холбогдож цемент аваарай! Таны бүтээн байгуулалтад амжилт хүсье!</p>
              <p className='director'>Гүйцэтгэх захирал</p>
              <p className='director'>Л.Наранбаатар</p>
            </div>
          </div>
          <div className='news container-xl'>
            <div className='title'>
              <h1>Сүүлийн мэдээ</h1>
            </div>
            <Row gutter={[16,16]}>
                <Col span={8}><NewsBox/></Col>
                <Col span={8}><NewsBox/></Col>
                <Col span={8}><NewsBox/></Col>
            </Row>
           
          </div>


     
   
    </div>
  );
}

export default App;
