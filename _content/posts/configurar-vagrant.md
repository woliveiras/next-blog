---
title: 'Vagrant - Como configurar e utilizar'
categories:
  - infraestrutura
date: '2014-08-17'
tags:
  - infraestrutura
description: Como configurar e utilizar o Vagrant para Desenvolvimento
---
Se você leu a primeira parte desse tutorial, [Crie e compartilhe ambientes com o Vagrant (Instalação)](/posts/vagrant-introducao-instalacao/ "Crie e compartilhe ambientes com o Vagrant (Instalação)"), então podemos seguir nossos estudos e aprender a configurar e utilizar o Vagrant.

<!-- vscode-markdown-toc -->
* [Adicionando uma Box](#AdicionandoumaBox)
	* [Explicação](#Explicao)
* [Inicializando com a nova box](#Inicializandocomanovabox)
	* [Explicação](#Explicao-1)
* [Iniciar a VM](#IniciaraVM)
* [Alguns comandos uteis](#Algunscomandosuteis)
* [Referências](#Referncias)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


## <a name='AdicionandoumaBox'></a>Adicionando uma Box

Vamos utilizar uma Box que alguém já deixou pré configurada como exemplo, mas podemos conferir como criar uma Box para o Vagrant nesse outro artigo: [Como criar uma base box para o Vagrant](/posts/criar-uma-base-box-para-o-vagrant/).

Para adicionar uma Box usamos o seguinte comando:

```bash
vagrant box add 'nome da Box' 'Local de onde será clonado'
```

Execute esse comando para clonar a Box pré configurada.

```bash
vagrant box add lucid32 https://files.vagrantup.com/lucid32.box
```

### <a name='Explicao'></a>Explicação

- **vagrant box add** é o comando para adicionar uma box.
- **lucid32** é o nome da Base Box. Esse nome é que vamos usar no **vagrantfile** para informar qual box será a base para as VM's que vamos subir posteriormente e que vamos usar para criar uma nova VM.
- O Link *https://files.vagrantup.com/lucid32.box* é onde está a box no momento. Se fosse um repositório pessoal colocaríamos o link desse repo no lugar.

Podemos encontrar outras Base Box no repositório do Vagrant no site oficial: [https://vagrantbox.es](https://vagrantbox.es/ "Repositório de Boxes do Vagrant").

*Esse passo pode demorar um pouco dependendo da velocidade da sua conexão.*

## <a name='Inicializandocomanovabox'></a>Inicializando com a nova box

Agora, no terminal/cmd, entre na pasta do projeto – que aqui chamei de  vagrant - e execute:

```bash
vagrant init lucid32
```

![Iniciando uma VM]({{site.postsImagesPath}}vagrant-init-lucid32.png)

### <a name='Explicao-1'></a>Explicação

- **vagrant init** iniciará uma VM de acordo com as configurações da box que você escolher. Será criado o Vagrantfile no local.
- **lucid32** é a box que eu mandei ele utilizar para criar a VM. As configurações dessa Box serão clonadas para essa nova VM.

Eu recomendo que dê uma olhada no arquivo Vagrantfile para conhecer melhor as configurações, isso fará muita diferença e facilitará futuras configurações.

Após as minhas configurações, meu arquivo ficou assim – Deixei esses comentários para ficar fácil de entender:

```bash
#Versão da API do Vagrant

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

#Box a ser utilizada

config.vm.box = "lucid32"

#Modo de Rede

config.vm.network : bridged

#Porta do servidor Web

config.vm.forward_port 80, 8080

#Porta do MySQL

config.vm.forward_port 3306, 3306

end

```

## <a name='IniciaraVM'></a>Iniciar a VM

Para iniciar a VM e podermos utilizar nosso servidor, basta rodar o comando:

```bash
vagrant up
```

Na primeira vez, será importada a base Box e configurada a nova VM. Você até poderá entrar no Virtualbox e verá uma máquina com um nome esquisito.

![Subindo a VM]({{site.postsImagesPath}}Capturar.png)

Se você está usando terminal Unix, então execute o comando: **vagrant ssh** com o endereço e porta que o próprio vagrant mostra na tela do terminal nesse momento. Se está usando Windows você vai precisar do [Putty](/posts/vagrant-no-windows/ "Windows, Vagrant e Putty").

No terminal ficou um endereço de IP parecido com 127.0.0.1:2222, esse é o ip e o usuário e senha "vagrant" para acesso.

Fica esse comando para acesso em terminais Unix:

```bash
ssh vagrant@127.0.0.1:2222
```

Na tela de boas vindas será solicitado a senha, que é *vagrant*.

Conectado. Agora é só usar seu servidor! :D

## <a name='Algunscomandosuteis'></a>Alguns comandos uteis

- Quando quiser pausar sua máquina use **vagrant suspend** e para retomar **vagrant resume**.
- Para desligar a máquina use **vagrant halt**.
- Para, literalmente, destruir uma máquina e começar do zero use **vagrant destroy**.
- Reiniciar a máquina **varant reload**.

*Lembrando que esses comandos devem ser rodados dentro do diretório onde está o vagrantfile da VM que estiver rodando no momento.*
Uma dica agora é pesquisar sobre [Shell Script](https://pt.wikipedia.org/wiki/Shell_script), [Puppet](https://puppetlabs.com/) ou [Chef](https://www.chef.io/chef/) para automatizar a configuração do ambiente. A [documentação do Vagrant](https://docs.vagrantup.com/v2/) tem boas dicas sobre isso.

Caso não tenha entendido algo, estou a disposição, só me chamar! ;D

## <a name='Referncias'></a>Referências

* <https://simplesideias.com.br/usando-o-vagrant-como-ambiente-de-desenvolvimento-no-windows>
* <https://www.erikaheidi.com/blog/vagrant-101-montando-seu-ambiente-de-desenvolvimento-portatil>
* <https://www.akitaonrails.com/2013/10/25/iniciante-criando-um-ambiente-de-desenvolvimento-com-vagrant-e-chef-solo#.U-_1H_ldX2M>
