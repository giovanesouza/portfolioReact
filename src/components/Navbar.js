

export default function Navbar() {
    return (

        <header>

            <div className="container">

                <div className="logo">
                    <a href=""><span class="ri-code-s-slash-line iconCode"></span> Dev Giovane Souza</a>
                </div>


                <nav>

                    <div className="menuMobile">
                        <div className="menuLine"></div>
                        <div className="menuLine"></div>
                        <div className="menuLine"></div>
                    </div>


                    <ul>

                        <li><a href="#hello" className="active">Home</a></li>
                        <li><a href="#aboutMe">Sobre mim</a></li>
                        <li><a href="#">Tecnologias</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contato</a></li>


                    </ul>

                </nav>

            </div>

        </header>

    );
}