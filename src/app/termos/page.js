import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Termos de uso | Mundo Da Cozinha'
}

export default function transparencia() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Política de Privacidade e Termos de Uso</h1>
      </header>
      <br />
      <h2>Política de Privacidade</h2>
      <p>
        O respeito à sua privacidade é uma prioridade no Mundo da Cozinha. Estamos comprometidos em proteger
        todas as informações pessoais que possamos coletar através do nosso site e demais plataformas que operamos.
      </p>
      <br />
      <p>
        Coletamos informações pessoais apenas quando necessário para fornecer nossos serviços, sempre de maneira justa
        e legal, com o seu consentimento. Informaremos claramente o motivo da coleta e como essas informações serão utilizadas.
      </p>
      <br />
      <p>
        As informações coletadas serão retidas pelo tempo necessário para cumprir com o propósito para o qual foram coletadas.
        Adotamos medidas de segurança comercialmente aceitáveis para proteger esses dados contra perda, roubo, acesso não autorizado,
        divulgação, cópia, uso ou modificação.
      </p>
      <br />
      <p>
        Comprometemo-nos a não compartilhar suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
      </p>
      <br />
      <p>
        É importante ressaltar que não temos controle sobre o conteúdo e as práticas de sites externos vinculados ao Mundo da Cozinha,
        e não podemos nos responsabilizar por suas políticas de privacidade.
      </p>
      <br />
      <p>
        Você tem o direito de recusar o fornecimento de informações pessoais, compreendendo que isso pode afetar a disponibilidade
        de alguns serviços.
      </p>
      <br />
      <p>
        Ao continuar a usar nosso site, você está concordando com nossas práticas de privacidade e uso de informações pessoais. 
        Se tiver dúvidas sobre como lidamos com seus dados e informações pessoais, não hesite em nos contatar.
      </p>
      <br />
      <p>
        Utilizamos serviços de publicidade, como o Google AdSense, que podem utilizar cookies para exibir anúncios relevantes para você. 
        Esses cookies são utilizados para rastrear anonimamente seus interesses e apresentar anúncios que possam ser do seu interesse.
      </p>
      <br />
      <h2>Compromisso do Usuário</h2>
      <p>
        Ao utilizar o Mundo da Cozinha, compromete-se a fazer uso adequado de todo o conteúdo e informações disponibilizados, 
        abstendo-se de atividades ilegais ou contrárias à ética e à ordem pública. Não será tolerada a disseminação de conteúdo racista, 
        xenófobo, pornográfico, de apologia ao terrorismo ou que viole os direitos humanos.
      </p>
      <br />
      <p>
        Além disso, compromete-se a não causar danos aos sistemas físicos e lógicos do Mundo da Cozinha, bem como de terceiros, 
        através da introdução ou disseminação de vírus ou outros elementos prejudiciais.
      </p>
      <br />
      <h2>Termos de Uso</h2>
      <p>
        Ao acessar o Mundo da Cozinha, concorda em cumprir estes termos de serviço, bem como todas as leis e regulamentos aplicáveis. 
        Os materiais disponíveis neste site estão protegidos por direitos autorais e marcas registradas.
      </p>
      <br />
      <p>
        É concedida uma licença limitada para o uso temporário dos materiais disponíveis no Mundo da Cozinha para fins pessoais e 
        não comerciais. Esta licença não inclui a modificação ou cópia dos materiais, uso para fins comerciais, engenharia reversa 
        de software, entre outros.
      </p>
      <br />
      <p>
        O Mundo da Cozinha não oferece garantias quanto à precisão ou confiabilidade dos materiais disponíveis em seu site, 
        e não será responsável por quaisquer danos decorrentes do seu uso.
      </p>
      <br />
      <p>
        Reservamo-nos o direito de modificar estes termos de serviço a qualquer momento, sem aviso prévio. Ao continuar a 
        usar o Mundo da Cozinha, você concorda em ficar vinculado à versão mais recente destes termos.
      </p>
      <br />
      <h2>Lei Aplicável</h2>
      <p>
        Estes termos e condições são regidos e interpretados de acordo com as leis aplicáveis ao Mundo da Cozinha, e você 
        concorda irrevogavelmente com a jurisdição exclusiva dos tribunais competentes.
      </p>
      <br />
      <p>Esperamos que estas políticas estejam claras para você. Se tiver alguma dúvida ou preocupação, por favor, entre em contato conosco.</p>
      <br />
    </section>
  )
}
