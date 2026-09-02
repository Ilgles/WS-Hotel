export function Navbar() {
  return (
    <nav>
      <a href="/">Início</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </nav>
  );
}

export function Botao() {
  return <button>Clique aqui</button>;
}

export function Card() {
  return (
    <div>
      <h2>Produto</h2>
      <p>Descrição do produto</p>
    </div>
  );
}

export function Foto() {
  return (
    <img
      src="https://via.placeholder.com/150"
      alt="Imagem"
    />
  );
}

export function Lista() {
  return (
    <ul>
      <li>Maçã</li>
      <li>Banana</li>
      <li>Laranja</li>
    </ul>
  );
}

export function Produto({ nome, preco }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
      <button>Comprar</button>
    </div>
  );
}

export function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

export function CampoTexto() {
  return (
    <input
      type="text"
      placeholder="Digite seu nome"
    />
  );
}

export function Titulo() {
  return <h1>Meu site</h1>;
}

export function Usuario({ nome, idade }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
    </div>
  );
}
