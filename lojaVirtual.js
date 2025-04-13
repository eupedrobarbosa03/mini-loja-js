
const cadastros = {
    usuarios: []
}

const produtos = {
    produtos: []
}

const usuarioCompra = {
    compra: []
}

class Usuario {
    constructor(nome, email, senha) {
        this._nome = nome;
        this._email = email
        this._senha = senha;
        this._proximaEtapa = false; //Recebe true toda vez que um setter é verificado com sucesso e retorna true.
    }

    set nome(nomeUsuario) {

        if (typeof nomeUsuario !== "string") {
            throw new Error("(Erro) Nome de usuário precisa ser uma string.");
        }

        nomeUsuario = nomeUsuario.trim();
        this._nome = nomeUsuario;
        this._proximaEtapa = true;

    }

    set email(emailUsuario) {

        if (typeof emailUsuario !== "string") {
            throw new Error("(Erro) Email precisa ser uma string");
        }

        const emailVerificadores = ["@", ".com"];

        emailVerificadores.forEach((verificador) => {
            if (!emailUsuario.includes(verificador)) {
                this._proximaEtapa = false;
                throw new Error("(Erro) Email precisa conter '@' e '.com'!");
            }
        })

        this._email = emailUsuario;
        this._proximaEtapa = true;

    }

    set senha(senhaUsuario) {

        const tamananhoMinimoSenha = 8;

        if (typeof senhaUsuario !== "string") {
            throw new Error("(Erro) Senha precisa ser uma string");
        }

        if (senhaUsuario.length < tamananhoMinimoSenha) {
            throw new Error("(Erro) Senha precisa ter uma tamanho minímo de 8 caracteres.");
        }

        this._senha = senhaUsuario;
        cadastros.usuarios.push({
            Usuario: this._nome,
            Email: this._email,
            Senha: this._senha
        })
    }
}

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    validarInformacoesProduto() {

        if (typeof this.nome !== "string" || !this.nome) {
            throw new Error("(Erro) O nome do produto deve ser uma string");
        }

        if (typeof this.preco !== "number" || typeof this.estoque !== "number") {
            throw new Error("(Erro) Preço e Estoque do produto precisa ser númericos");
        }

        if (this.preco <= 0 || this.estoque <= 0) {
            throw new Error("(Erro) Preço e Estoque não podem ser negativos ou iguais a 0.")
        }

        this.nome.trim();

        produtos.produtos.push({
            Produto: this.nome,
            Preco: this.preco,
            Estoque: this.estoque
        })

    }
}

class Loja {
    constructor(nomeUsuario, produto, quantidade) {
        this._nomeUsuario = nomeUsuario;
        this._produto = produto;
        this._quantidade = quantidade;
    }

    comprarProduto(nomeUsuario, nomeProduto, quantidadeProduto) {

        if (typeof nomeUsuario !== "string" || typeof nomeProduto !== "string") {
            throw new Error("(Erro) Nome de usuário e Produto precisa ser uma string.");
        }

        if (typeof quantidadeProduto !== "number" || quantidadeProduto <= 0) {
            throw new Error("(Erro) Quantidade precisa ser um valor númerico e/ou quantidade precisa ser maior que 0!");
        }

        for (let verificar of cadastros.usuarios) {
            if (nomeUsuario !== verificar.Usuario) {
                throw new Error("Usuário não encotrado!");
            }
        }

        for (let verificar of produtos.produtos) {
            if (nomeProduto !== verificar.Produto) {
                throw new Error("Produto não encontrado!");
            }
        }

        for (let verificar of produtos.produtos) {
            if (nomeProduto) {
                if (verificar.Estoque < quantidadeProduto) {
                    throw new Error("Estoque insuficiente!");
                }
            }
        }

        for (let atualizar of produtos.produtos) {
            if (nomeProduto) {
                atualizar.Estoque -= quantidadeProduto;
                break;
            }
        }

        let valorTotal = 0;

        for (let atualizar of produtos.produtos) {
            if (nomeProduto) {
                valorTotal += atualizar.Preco * quantidadeProduto;
            }
        }

        this._nomeUsuario = nomeUsuario;
        this._produto = nomeProduto;
        this._quantidade = quantidadeProduto;

        usuarioCompra.compra.push({
            Cliente: this._nomeUsuario,
            ProdutoComprado: this._produto,
            Quantidade: this._quantidade,
            ValorTotal: valorTotal
        })

    }

}

function converterParaJson(object) {

    const converterParaJSON = JSON.stringify(object, null, 2);
    console.log(converterParaJSON);

}

try {
    const controleUsuario = new Usuario();
    controleUsuario.nome = "   Henrique";
    controleUsuario.email = "pedro@gmail.com";
    controleUsuario.senha = "pedro1230322";
    console.warn("Cadastro Usuário realizado com sucesso!");

} catch(error) {
    console.error(`${error}`);
}

try {
    const controleProduto = new Produto("Notebook Gamer", 454.56, 14);
    controleProduto.validarInformacoesProduto();
    console.warn("Cadastro Produto Realizado com sucesso!");

} catch(error) {
    console.error(`${error}`);
}

try {
    const controleLoja = new Loja();
    controleLoja.comprarProduto("Henrique", "Notebook Gamer", 14);
    console.warn("Compra realizada com sucesso!")

} catch(error) {
    console.error(`${error}`)
}

converterParaJson(cadastros);
converterParaJson(produtos);
converterParaJson(usuarioCompra);
