# 🚀 Comece Aqui - A.M Braids

Bem-vindo ao website profissional de A.M Braids! Este documento te guiará através das customizações essenciais para colocar seu site ao vivo.

## ⚡ Quick Start (5 minutos)

### 1️⃣ Atualize seus links de contato

Edite os arquivos abaixo e substitua os placeholders pelos seus dados reais:

**WhatsApp Link:**
```
Procure por: https://wa.me/seu-numero
Substitua por: https://wa.me/5585987654321
(Formato: código país + DDD + número, sem espaços ou hífens)
```

**Instagram:**
```
Procure por: https://instagram.com
Substitua por: https://instagram.com/seu-usuario
```

**Email:**
```
Procure por: mailto:contato@ammbraids.com
Substitua por: mailto:seu-email@gmail.com
```

**Endereço:**
```
Procure por: [Insira seu endereço]
Substitua por: Seu endereço completo aqui
```

### Arquivos a Editar:
- `components/header.tsx` - Links do header
- `components/hero.tsx` - Seção inicial
- `components/contact.tsx` - Seção de contato completa
- `components/footer.tsx` - Informações de endereço

### 2️⃣ Rode localmente para testar

```bash
pnpm install
pnpm dev
```

Acesse: http://localhost:3000

### 3️⃣ Deploy para o mundo

```bash
git add .
git commit -m "Customização A.M Braids"
git push
```

O deploy é automático via Vercel! 🎉

---

## 📋 O Que Pode Ser Customizado

### Textos
- ✏️ Todos os títulos, descrições e botões
- ✏️ Biografia de Agatha
- ✏️ Descrições de serviços

**Onde:** Edite diretamente nos componentes `.tsx`

### Imagens
- 🖼️ Logo (header.tsx)
- 📸 Foto de Agatha (about.tsx)
- 📷 Fotos de trabalhos (portfolio.tsx)

**Como:** Substitua as URLs ou salve em `/public/images/`

### Cores
- 🎨 Primária, Secundária, Acento
- 🎨 Backgrounds e textos

**Onde:** `/app/globals.css` (seção `:root`)

### Fontes
- 🔤 Família de fontes

**Onde:** `/app/layout.tsx`

---

## 🔗 Links Rápidos

| Arquivo | Elemento | Link Atual |
|---------|----------|-----------|
| header.tsx | WhatsApp CTA | `https://wa.me/seu-numero` |
| hero.tsx | Agendar | `https://wa.me/seu-numero` |
| contact.tsx | Instagram | `https://instagram.com/ammbraids` |
| contact.tsx | Email | `mailto:contato@ammbraids.com` |
| contact.tsx | WhatsApp | `https://wa.me/seu-numero` |
| footer.tsx | Endereço | `[Insira seu endereço]` |

---

## 🎨 Paleta de Cores Atuais

```css
--primary: #E7057A       /* Rosa Magenta */
--secondary: #FFB6D9     /* Rosa Claro */
--accent: #FFFF00        /* Amarelo */
--background: #FFFFFF    /* Branco */
--foreground: #1a1a1a    /* Preto */
```

Para mudar, edite `/app/globals.css`

---

## 📱 Testar em Diferentes Telas

### Chrome/Firefox DevTools
1. Pressione `F12`
2. Clique no ícone de dispositivo (canto superior esquerdo)
3. Teste em: iPhone 12, iPad, Desktop

### Certificar-se de Responsividade
- [ ] Menu hamburger aparece em telas < 768px
- [ ] Grid do portfolio muda de 3 → 2 → 1 coluna
- [ ] Textos são legíveis em todos os tamanhos
- [ ] Botões são clicáveis em mobile

---

## ✅ Checklist de Customização

```
LINKS:
☐ WhatsApp atualizado (todos os arquivos)
☐ Instagram linkado
☐ Email correto
☐ Endereço adicionado
☐ Horários corretos

IMAGENS:
☐ Logo de alta qualidade
☐ Foto de Agatha em alta resolução
☐ Galeria de trabalhos completa (14 fotos)

TEXTOS:
☐ Título principal revisado
☐ Descrição revisada
☐ Biografia de Agatha atualizada
☐ Sem placeholders restantes

TESTE:
☐ Testado em mobile
☐ Testado em tablet
☐ Testado em desktop
☐ Todos os links funcionam
☐ Sem erros no console (F12)

PRONTO:
☐ Commit e push para GitHub
☐ Deploy automático via Vercel
☐ URL do site funcionando
```

---

## 🆘 Dúvidas Frequentes

**P: Como mudo a cor principal?**
R: Edite `/app/globals.css` e altere `--primary: #E7057A;`

**P: Onde coloco minhas fotos?**
R: Salve em `/public/images/` ou use links diretos (Blob Storage)

**P: Como funciona o WhatsApp link?**
R: Use o formato `https://wa.me/5585987654321` (país + DDD + número)

**P: Posso adicionar mais fotos ao portfolio?**
R: Sim! Edite o array `portfolioItems` em `components/portfolio.tsx`

**P: Como mudo a fonte?**
R: Edite `app/layout.tsx` e importe de `next/font/google`

---

## 📚 Documentação Completa

- **README_PT.md** - Documentação técnica completa
- **CUSTOMIZACAO.md** - Guia detalhado de customizações
- **PROJETO_COMPLETO.txt** - Resumo de tudo que foi feito

---

## 🎯 Próximas Etapas

1. ✅ Customize os links (5 min)
2. ✅ Adicione suas imagens (10 min)
3. ✅ Revise os textos (5 min)
4. ✅ Teste em mobile (5 min)
5. ✅ Faça commit e push (2 min)
6. ✅ Seu site está live! 🚀

---

## 💡 Dicas Pro

- Use `Ctrl+F` (Cmd+F no Mac) para encontrar rapidamente
- Teste links antes de fazer commit
- Mantenha um backup dos textos originais
- Use Alt Text descritivo em novas imagens

---

**Parabéns! Seu website A.M Braids está pronto para o mundo!** 🎉

Qualquer dúvida, consulte a documentação completa ou refira-se aos arquivos mencionados acima.

Bom sucesso! 💪
