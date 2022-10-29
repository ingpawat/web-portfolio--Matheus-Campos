import './App.css';
import Pics from './pic/pic-1.png'
import logo from './pic/logo.png'

// Contact logo
import Linkedin from './pic/Linkedin.png'
import Instagram from './pic/Instagram.png'
import Git from './pic/Git.png'

function App() {
    return (
        <div className="App">

            <div className='Background w-[1920px] h-[1080px] '>
                {/* Navbar */}
                <div className='Navbar w-[100%] h-[180px] flex justify-center space-x-64 items-center'>

                    <div className='Logo w-[334px] h-[104px] flex items-center justify-center '>
                        <img src={logo} />
                        <span className='font-[24px] font-[500] ml-[6%]'>Matheus Campos</span>
                    </div>

                    <div className='Navigation w-[856px] h-[70px] flex flex-row '>
                        <ul className='flex space-x-[20%]'>
                            <a href='#'>home</a>
                            <a href='#'>sobre</a>
                            <a href='#'>portifóao</a>
                            <a href='#'>serviços</a>
                            <a href='#'>resumo</a>
                            <a href='#'>contato</a>
                        </ul>
                    </div>

                </div>

                {/* Content */}
                <div className='flex justify-center bspace-x-20 '>

                    {/* LEFT BOX */}
                    <div className='LeftBox flex flex-col space-y-[20%] w-[705px] h-[697px] '>

                        <div className='w-[545px] h-[240px] '>
                            <p className='text-[24px] font-[500] '>Olá pessoas, </p>
                            <p className='text-[72px] font-[900]'>EU SOU UM <br />
                                PROGRAMADOR</p>
                            <p className='text-[24px] font-[500] ' >Seja bem-vindo ao meu portifólio website</p>


                        </div>

                        <button className='w-[310px] h-[70px] text-[24px] text-white font-[900] border border-[#263138] bg-[#263138] rounded-[20px]'>Saiba mais sobre mim</button>

                        <div className='Contact w-[600px] h-[130px] flex '>
                            <img className='w-[40px] h-[38px] m-2' src={Git} alt='git' href='' />
                            <img className='w-[40px] h-[38px] m-2' src={Linkedin} alt='linkedin' href='' />
                            <img className='w-[40px] h-[40px] m-2' src={Instagram} alt='instagram' href='' />
                        </div>

                    </div>

                    {/* RIGHT BOX */}
                    <div className='RightBox flex w-[705px] h-[697px]  '>
                        <img src={Pics} alt='pics'></img>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;
