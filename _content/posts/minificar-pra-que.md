---
title: Minificar pra que? Uma breve explicação
date: '2014-09-15'
tags:
  - frontend
  - html
  - css
---

Quando você escreve um código fonte JS, com certeza, deixa alguns espaços em banco dando tabs para identar, coloca alguns espaços entre comentários, nomes de variáveis que são extremamente legíveis e fáceis de entender e por ai vai... Deixa tudo uma belezura.


<!-- vscode-markdown-toc -->
* [Para deixar os scripts mais leves](#Paradeixarosscriptsmaisleves)
* [Afinal o que é Minificar](#AfinaloqueMinificar)
* [Performance](#Performance)
* [Minificar os seus scripts não é a única salvação](#Minificarosseusscriptsnoanicasalvao)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


## <a name='Paradeixarosscriptsmaisleves'></a>Para deixar os scripts mais leves

Os comentários e tabulações não contam pra que o script funcione e deixar isso lá só torna seu arquivo mais pesado e para o CSS isso também se aplica. Então é para deixar esses scripts mais leves é que minificamos.

Pra uma pessoa com internet boa, navegador atualizado e utilizando o PC, não parece ter diferença - Apesar de ter sim. Porém pra quem usa a amada tecnologia do 3G navegando pelo Celular ou Tablet, 50kb fará muita diferença.



## <a name='AfinaloqueMinificar'></a>Afinal o que é Minificar

Minificar é remover os espaços desnecessários, tabulações, comentários, etc. - Por isso eu falei sobre os 50kb - Da pra fazer usando plug-ins nos editores de código ou sites onde colamos nosso código e ele remove tudo.

Porém isso tudo é bem chato viu... Ficar fazendo isso cada vez que você desenvolver um projeto ou modificar alguma coisa se torna um pé... E é por isso que usamos os automatizadores pra agilizar essa tarefa. – Recomendo que de uma olhadinha no [Gulp](https://woliveiras.com.br/gulp-esse-e-ligeiro/ "Gulp | Esse é ligeiro").

## <a name='Performance'></a>Performance

Depois de minificar faça alguns testes de [performance](https://www.webpagetest.org/ "Teste de velocidade") em sua aplicação e comprove a excelência dessa prática. Você irá curtir demais.

## <a name='Minificarosseusscriptsnoanicasalvao'></a>Minificar os seus scripts não é a única salvação

Sim, se você minificar seus arquivos e deixar as bibliotecas de terceiros (JQuery, Bootstrap, etc) inteiras lá a aplicação vai continuar pesadinha... Com certeza eles já te entregam os arquivos prontos - São aqueles arquivinhos **.min** - , basta usar eles. ;D

E ai, você tem minificado? Se usa algum plugin no editor ou módulo no Grunt ou Gulp, maneiro pra isso comenta ai, vai ajudar muito.
