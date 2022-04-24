import type { NextPage } from 'next'
import Link from 'next/link'

import { config } from 'infra/config'

const Home: NextPage = () => {
  return (
    <>
      <header>
        <h1>{config.BLOG_DESCRIPTION}</h1>
        <p>Olá, pessoa! Eu sou o <a href={config.TWITTER_LINK} target="_blank" rel='noreferrer'>William Oliveira</a>, desenvolvedor de software e escritor do livro <a href={config.CASA_DO_CODIGO_UDP} target="_blank" rel='noreferrer'>O Universo da Programação</a>, um livro guia para iniciantes.</p>
        <p>Utilizo este espaço para compartilhar opiniões pessoais, informação e tutoriais de programação e desenvolvimento front-end; ministro cursos e faço live code na <a href={config.TWITCH_LINK} target="_blank" rel='noreferrer'>Twitch.tv</a> e estou sempre disponível para te ajudar no <a href={config.LINKEDIN_LINK} target="_blank" rel='noreferrer'>LinkedIn</a></p>
      </header>
      <Link href={`/posts/`}>
        <a>
          <h2>Leia meus artigos</h2>
        </a>
      </Link>
    </>
  )
}

export default Home
