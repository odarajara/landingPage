import "./Sobre.css";
export const Sobre = ({ categoria }) => {
  return (
    <div id={categoria}>
      <div id="resumo">
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Odara e eu estudo desenvolvimento web desde janeiro de
          2024. Comecei meus estudos em HTML/CSS e hoje tenho conhecimento de
          diversas tecnologias.
          <br />
          <br />
          Possuo experiência também na área de educação, pois sou formada em Português/Italiano, além de inglês. Acredito, que a minha formação anterior seria uma vantagem na hora de desenvolver trabalhos, pois língua é uma mistura de regras gramaticais e improviso verbal, visando expressar um pensamento da forma mais coesa, clara e objetiva possível. Diante desse quadro, sei que todo conhecimento adquirido tende a melhorar com o estudo e prática do mesmo, se houver motivação profissional a tendência é melhorar mais rápido e melhor.
        </p>
      </div>
      <div id="meus-conhecimentos">
        <h2>Meus conhecimentos</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </div>
  )
}
