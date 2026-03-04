# Guia de Customização - A.M Braids

## 🔧 Atualizações Necessárias

### 1. Links de Contato

Procure por `seu-numero`, `seu-usuario` e `seu-email` nos seguintes arquivos e substitua pelos seus dados reais:

#### Header.tsx
```tsx
// Procure por:
<a href="https://wa.me/seu-numero">

// E substitua por:
<a href="https://wa.me/5585987654321">
```

#### Hero.tsx
```tsx
// Procure por:
<a href="https://wa.me/seu-numero">
<a href="https://instagram.com">

// E substitua pelos seus links reais
```

#### Contact.tsx
```tsx
// Procure por:
href: 'https://instagram.com/ammbraids',
href: 'mailto:contato@ammbraids.com',
href: 'https://wa.me/seu-numero',

// E substitua pelos seus dados
```

### 2. Informações de Localização

Em **contact.tsx**, atualize:
```tsx
📍 Localização: [Insira seu endereço]
🕐 Horário de funcionamento: Segunda à Sábado, 9h às 18h
```

E no **footer.tsx**:
```tsx
📍 [Endereço da sua localização]
```

### 3. Links do Google Maps

Em **contact.tsx**, atualize o link de localização:
```tsx
href: 'https://maps.google.com/?q=seu+endereco+aqui'
```

## 🎨 Personalizações de Design

### Alterar Cores

Edite `/app/globals.css` na seção `:root`:

```css
:root {
  --primary: #E7057A;      /* Cor principal */
  --secondary: #FFB6D9;    /* Cor secundária */
  --accent: #FFFF00;       /* Cor de destaque */
  --background: #FFFFFF;   /* Fundo */
  --foreground: #1a1a1a;   /* Texto */
}
```

### Alterar Fontes

No `/app/layout.tsx`, você pode importar diferentes fontes do Google Fonts:

```tsx
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });
```

## 📝 Textos Principais

### Hero Section
Em **components/hero.tsx**, edite:
- Título principal
- Descrição
- Texto dos botões

### Seção Sobre
Em **components/about.tsx**, edite:
- Biografia de Agatha
- Descrição profissional
- Estatísticas (anos, clientes, etc.)

### Portfolio
Em **components/portfolio.tsx**, adicione/remova itens do array `portfolioItems`:

```tsx
const portfolioItems = [
  {
    title: 'Seu Título',
    image: 'https://link-da-imagem.com/imagem.jpg',
  },
  // ... mais itens
];
```

## 🖼️ Substituir Imagens

Todos os links de imagens estão em:
- **header.tsx** - Logo
- **about.tsx** - Foto de Agatha
- **portfolio.tsx** - Galeria de trabalhos

Para usar imagens locais, salve-as em `/public/images/` e atualize os caminhos:

```tsx
src="/images/sua-imagem.jpg"
```

## 🔗 Links Importantes

### Redes Sociais
- Instagram: `https://instagram.com/seu-usuario`
- WhatsApp: `https://wa.me/55DDD9XXXXXXXX` (formato: país + DDD + número)
- Email: `mailto:seu-email@gmail.com`

### Google Maps
Para encontrar o link correto:
1. Abra Google Maps
2. Procure seu endereço
3. Copie o link da URL

## 📱 Testar Responsividade

Após customizar, teste em:
- Chrome DevTools (F12)
- Abra a aba "Dispositivos" (Toggle device toolbar)
- Teste em: iPhone 12, iPad, Desktop

## 🚀 Deploy

Após todas as customizações:

1. Commit das mudanças:
```bash
git add .
git commit -m "Customização para A.M Braids"
git push
```

2. Deploy automático via GitHub + Vercel

## ✅ Checklist Final

- [ ] Links de WhatsApp atualizados
- [ ] Instagram linking corrigido
- [ ] Email atualizado
- [ ] Endereço da loja adicionado
- [ ] Horários de funcionamento corretos
- [ ] Foto de Agatha em alta qualidade
- [ ] Galeria de trabalhos completa
- [ ] Todos os textos revisados
- [ ] Links de contato testados
- [ ] Responsividade verificada

---

Dúvidas? Consulte o README_PT.md para mais informações sobre a estrutura do projeto.
