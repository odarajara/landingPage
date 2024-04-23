import imagemDev from "./images/Odara.png"
import iconeGithub from "./images/icons8-github.gif"
import iconelinkedin from "./images/icons8-linkedin.gif"
import iconeinstagram from "./images/icons8-instagram.gif"
import iconefacebook from "./images/icons8-facebook.gif"

function App() {
  

  return (
   
      <main>
        <section>
          <p>
            Olá! Seja bem-vindo(a) ao meu portifólio.
          </p>
          <p>
            Meu nome é <span>Odara</span> e eu sou uma desenvolvedora web.
          </p>
          <div id="redes-sociais">

<a href="https://github.com/odarajara">
  <img src={iconeGithub} alt="icone do Github" srcset=""/>
</a>
<a href="https://www.linkedin.com/in/odara-oliveira-55a7962b5/">
  <img src={iconelinkedin} alt="icone do Linkedin" srcset=""/>
</a>
<a href="https://www.instagram.com/odarajara/">
  <img src={iconeinstagram} alt="icone do Instagram" srcset=""/>
</a>
<a href="https://www.facebook.com/odara.oliveira.71">
  <img src={iconefacebook} alt="icone do Facebook" srcset=""/>
</a>
          </div>
          <a href="#sobreMim">
            <button>Conheça mais sobre mim</button>
          </a>
          </section>


        
<section>
<img id="imagemDev" src={imagemDev}/>
</section>

      </main>
     
  )
}

export default App
