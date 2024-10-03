import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div className="bg-pink-500 min-h-screen">
      <Navbar />
      <div id="home" className="flex flex-col md:flex-row items-center mx-auto mt-6 p-4 justify-center">
        <img src="/foto-perfil.png" alt="Foto de Perfil" className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4" />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h1 className='text-white text-2xl md:text-4xl'>Maria de Fátima Nunes Alves</h1>
          <h2 className='text-white text-lg'>Desenvolvedora Web | UI/UX Designer</h2>
        </div>
      </div>

      <div className='bg-white mx-4 md:mx-10 mt-6 p-4 rounded'>
        <h1 className='text-pink-500 text-center text-xl md:text-2xl'>Sobre mim</h1>
        <p className='text-left text-black text-sm md:text-base'>Sou Maria de Fátima Nunes Alves, graduanda em Ciência da Computação no Centro Universitário de Maceió - Unima. Tenho paixão por tecnologia e estou sempre em busca de novos desafios. Com 5 meses de experiência como estagiária de Desenvolvimento Web na ART Martins Consultoria & Marketing, também atuei como Embaixadora Tech na Reprograma e no Roga DX 2024, além de contribuir para o projeto Open Source SOS-RS como Desenvolvedora Frontend voluntária.</p>
      </div>

      <div id="habilidades" className='bg-white mx-4 md:mx-10 mt-6 p-4 rounded'>
    <h1 className='text-pink-500 text-center text-xl md:text-2xl'>Habilidades</h1>
    <div className='flex flex-wrap justify-center gap-4 mt-4'>
        <div className='flex justify-center space-x-4 flex-wrap'>
            <img src="/html-logo.png" alt="Logotipo HTML 5" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/css-logo.png" alt="Logotipo CSS 3" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/js-logo.png" alt="Logotipo JavaScript" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/tailwindcss-logo.png" alt="Logotipo Tailwind CSS" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/python-logo.png" alt="Logotipo Python" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/git-logo.png" alt="Logotipo Git" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/figma-logo.png" alt="Logotipo Figma" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/node.js-logo.png" alt="Logotipo Node.js" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/reactjs-logo.png" alt="Logotipo React JS" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/bootstrap-logo.png" alt="Logotipo Bootstrap" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/logotipo-php.png" alt="Logotipo PHP" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/wordpress-logo.png" alt="Logotipo WordPress" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <img src="/logotipo-mariadb.png" alt="Logotipo MariaDB" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
        </div>
    </div>
</div>

<div id="projetos" className="bg-white mx-10 mt-6 p-4 rounded">
  <h1 className="text-pink-500 text-center">Projetos Recentes</h1>
  <div className="flex flex-wrap justify-center gap-6 mt-4">
    <div className="bg-white p-4 rounded max-w-[300px] w-full sm:w-auto"> 
      <div className="flex justify-center"> 
        <img src="/sistema-ponto.png" alt="Foto do Sistema de Ponto Eletrônico da empresa ART Martins Consultoria & Marketing" className="w-72 h-auto" />
      </div>
      <h2 className="text-center text-black">Sistema de Ponto Eletrônico da empresa ART Martins & Marketing</h2>
      <div className="flex justify-center">
        <a href="https://artlancamentos.com.br/artponto/" target="_blank" rel="noopener noreferrer" className="text-pink-500">Clique aqui</a>
      </div>
    </div>

    <div className="bg-white p-4 rounded max-w-[300px] w-full sm:w-auto"> 
      <div className="flex justify-center"> 
        <img src="/site-institucional-wordpress.png" alt="Foto do Site institucional da empresa para o evento 'A Chave Para o Sucesso'" className="w-72 h-auto" />
      </div>
      <h2 className="text-center text-black">Site institucional da empresa para o evento "A Chave Para o Sucesso"</h2>
      <div className="flex justify-center">
        <a href="https://artlancamentos.com.br/estagio1/" target="_blank" rel="noopener noreferrer" className="text-pink-500">Clique aqui</a>
      </div>
    </div>

    <div className="bg-white p-4 rounded max-w-[300px] w-full sm:w-auto"> 
      <div className="flex justify-center"> 
        <img src="/nova-versao-site-art-martins-wordpress.png" alt="Foto da nova versão do site da empresa" className="w-72 h-auto" />
      </div>
      <h2 className="text-center text-black">Nova versão do site da empresa ART Martins Consultoria & Marketing</h2>
      <div className="flex justify-center">
        <a href="https://hostartmartins.com.br/" target="_blank" rel="noopener noreferrer" className="text-pink-500">Clique aqui</a>
      </div>
    </div>
  </div>
</div>

      <div id="contato" className="bg-white mx-4 md:mx-10 mt-6 p-4 rounded">
        <h1 className="text-pink-500 text-center text-xl md:text-2xl">Contato</h1>
        <p className="text-black text-center text-sm md:text-base">Me siga nas redes sociais caso queira trocar alguma ideia comigo ou alguma oportunidade:</p>
        <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/alvesmariadefatima" target="_blank"><img src="/logotipo-github.png" alt="Logotipo Github" className="w-12 h-12" /></a>
        <a href="https://linkedin.com/in/maria-de-fatima-nunes-alves" target="_blank"><img src="/logotipo-linkedin.png" alt="Logotipo Linkedin" className="w-12 h-12" /></a>
        <a href="https://instagram.com/devmariadefatima" target="_blank"><img src="/logotipo-instagram.png" alt="Logotipo Instagram" className="w-12 h-12" /></a>
        <a href="https://w.app/NSocWf" target="_blank"><img src="/logotipo-whatsapp.png" alt="Logotipo Whatsapp" className="w-12 h-12" /></a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
