import Project from '../components/Project';

import agenciaViagens from './images/agencia-viagens.png';
import equalizes from './images/equalizes.png';
import linkedin from './images/linkedin.png';
import calculadoraImc from './images/calculadora-imc.png';
import buscaCep from './images/buscaCep.png';

export default function Projects() {
    return (

        <section id="projects">

            <div className="container column">
                <h2>Projetos</h2>


                <div className="listProjects">

                    <a href="https://github.com/giovanesouza/agenciaViagens" target="_blank">
                        <Project img={agenciaViagens} alt={"Agência de Viagens"} caption={"Agência de Viagens"} />
                    </a>

                    <a href="https://squad29t3.github.io/projeto_final_equalizes/index.html" target="_blank">
                        <Project img={equalizes} alt={"Projeto Social - Equalizes"} caption={"Projeto Social - Equalizes"} />
                    </a>

                    <a href="https://giovanesouza.github.io/linkedin-clone-frontend/" target="_blank">
                        <Project img={linkedin} alt={"Clone LinkedIn"} caption={"Clone LinkedIn"} />
                    </a>


                    <a href="https://giovanesouza.github.io/calculadoraIMC/" target="_blank">
                        <Project img={calculadoraImc} alt={"Calculadora de IMC"} caption={"Calculadora de IMC"} />
                    </a>

                    <a href="https://giovanesouza.github.io/buscaCep/" target="_blank">
                        <Project img={buscaCep} alt={"Buscador de CEP"} caption={"Buscador de CEP"} />
                    </a>


                </div>

            </div>
        </section>
    );
}