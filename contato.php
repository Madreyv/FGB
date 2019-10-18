<?php include 'header.php';?>

<body>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="contactBanner">
          <div class="transparentBanner">
            <h1>Contato</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form action="" method="post" class="contactForm">
            <label for="nome_usuario">NOME</label>
            <input class="form-control" type="text" name="nome_usuario" required>

            <label for="email">EMAIL</label>
            <input class="form-control" type="email" name="email" required>

            <label for="nome_usuario">ASSUNTO</label>
            <input class="form-control" type="text" name="nome_usuario">

            <label for="mensagem">MENSAGEM</label>
            <textarea class="form-control" name="mensagem" rows="10"></textarea>

            <button type="submit" class="btn btn-primary mb-2 btnEnviar">Enviar</button>
          </form>
        </div>
        <div class="col-md-6">
          <div class="contactArea">
            <h3 class="adressTitle">Endereço</h3>
            <p>Av. Deus Dará, nº666, Jardim do Edem, Macaé</p>
            <h3 class="adressTitle">Telefone</h3>
            <p>(22)9 9999-9999</p>
            <h3 class="adressTitle">Email</h3>
            <p>contato@fgbinformatica.com.br</p>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php include 'footer.php';?>