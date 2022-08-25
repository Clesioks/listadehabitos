<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Novo hábito</title>
    <link rel="stylessheet" type="text/css" href="styles.css">
</head>

<body>

    <div class="center">

        <h1>Novo hábito</h1>

        <!-- Formulário para cadastro de pessoas Note a 
        utilização do atributo name, que faz o link entre 
        os elementos do DOM e o JavaScript-->

        <form id="formulario" action="insertehabito.php">
            <p><label>Nome: <input type="text" id="nome" name="nome" autofocus /></label></p>
            <p><input type="submit" value="Criar"></p>
        </form>
    </div>
    <script type="text/javascript">
    // Declara uma função para
    // validar o formulário

    var validaForm = () => {
        var nomeHabito = document.getElementById("nome").value;
        if ("" == nomeHabito) {
            alert("É necessário informar o nome do hábito");
            return false
        }
    }

    // Aqui declaramos que esta
    // função ocorre sempre no
    // submit do formulário

    document.getElementById("formulario").onsubmit = validaForm;
    </script>


</body>

</html>