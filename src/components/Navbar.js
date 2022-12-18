export default function Navbar() {


    // Função para mostrar o Menu em dispositivos móveis
    const showMenu = () => {
        let menu = document.querySelector('nav ul');
        //    console.log(menu);

        if (menu.style.display == 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }

    }





    return (

        <header>

            <div className="container">

                <div className="logo">
                    <a href="/"><span class="ri-code-s-slash-line iconCode"></span> Dev Giovane Souza</a>
                </div>


                <nav>

                    <div className="menuMobile" onClick={showMenu}>
                        <div className="menuLine"></div>
                        <div className="menuLine"></div>
                        <div className="menuLine"></div>
                    </div>


                    <ul>
                        <li><a href="#hello" className="active">Home</a></li>
                        <li><a href="#aboutMe">Sobre mim</a></li>
                        <li><a href="#tecnologies">Tecnologias</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>

                </nav>

            </div>

        </header>

    );
}