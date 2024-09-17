import Header from "../../components/Header/Index"
import Footer from "../../components/Footer/Index"

function Home () {
    return (
        <>
      <Header />
      <section className='container'>
        <div className='inicio'>
        Motores
        <br />
        <br />
        Contamos com serviços especializados, um dos principais é a assistencia à motores de todos os tipos,  com profissionais qualificados para esta função.
        </div>
        <figure>
          <img className='img-home' src="../public/motor.PNG1.png" alt="imagem motor" />
        </figure>
      </section>
      <Footer />
    </>
    )
}

export default Home 
