import Image from 'next/image';

import styles from './history.module.css';

import type { ReactElement } from 'react';

import image from 'ASSETS/images/about.webp';
import { stardos } from 'FONTS/stardos';

// * ---------------------------------------------------------------------- * //

function History(): ReactElement {
  return (
    <main className={styles.main}>
      <h1 className={stardos.className}>Nossa História</h1>
      <section className={styles.section}>
        <Image
          className={styles.img}
          alt=""
          src={image}
          placeholder="blur"
        />

        <article className={`${styles.article} ${styles.section}`}>
          <h2>A origem de tudo</h2>
          <p>
            O
            <a
              href="https://www.instagram.com/burgercarnequeijo/"
              target="_blank"
              rel="noreferrer"
            >
              {' @burgercarnequeijo '}
            </a>
            foi criado por nós (Raíra e Vinícius), bem no início da pandemia,
            com o intuito de gerar uma renda durante esse período de isolamento.
          </p>

          <p>
            Juntamos o pouquíssimo dinheiro que tínhamos, estudamos um pouco,
            testamos (e comemos 😋) muito. Então começamos a fazer hambúrguer na
            cozinha de casa, vendendo para os vizinhos do condomínio. Sem
            estrutura e sem experiência nenhuma, mas com muito apoio e força de
            vontade.
          </p>

          <p>
            Empreender não é nada fácil, mas nós estávamos dispostos a aprender
            com os nossos erros e a enfrentar os desafios. Nós seguimos em
            frente. Saímos de casa e mudamos pra uma cozinha na garagem (mas no
            centro 🤩). Contratamos um motoboy e entramos para o iFood 🛵.
          </p>
        </article>
      </section>

      {/* ali 

      naquela garagem vivenciamos os momentos mais exaustivos e estressantes 
      das nossas vidas. o negócio estava crescendo, ganhando um pouco mais de 
      visibilidade e a gente já não dava mais conta. precisávamos mudar de novo. 
      fomos pra um espacinho em frente ao condomínio condado de castella, 
      contratamos nossa primeira funcionária e lá ficamos por um ano trabalhando muito. 
      depois desse um ano, mudamos pra onde hoje é o nosso ponto físico, 
      após alguns longos meses fechados reformando o local. usamos esse tempo 
      pra estudo e remodelação do negócio. com isso, mudamos o cardápio, 
      o pão, a equipe, os equipamentos, os fornecedores e até as embalagens. 
      na verdade muita coisa mudou desde que começamos, não só no negócio mas 
      principalmente em nós. como já dissemos por aqui, o CQ nos fez sermos melhores, 
      e a única coisa que não muda é a nossa incessante vontade de fazer e 
      trazer sempre o melhor pra vocês! seguimos por aqui com essa nossa missão, 
      gratos por cada pedido e confiantes de que esse é só o começo, 
      ainda tem muito mais 💛🔥 */}

      <article className={styles.article}>
        <h2>💛 Agradecimentos</h2>

        <p>
          Agradecemos de coração a todos que nos apoiaram nesse inicio doido.
          Todas as críticas e sujestões de vocês nos guiaram e permitiram que
          evoluissemos o nosso produto. E embora hoje já tenhamos um
          conhecimento maior sobre o negócio, continuaremos sempre tentando
          melhorar. A nossa meta sempre será oferecer lanches de qualidade.
        </p>

        <p>
          Muito obrigado também às nossas famílias, por acreditarem, apoiarem e
          ajudarem sempre!
        </p>
      </article>
    </main>
  );
}

// * ---------------------------------------------------------------------- * //

export default History;
