#!/bin/bash

# ── Deploy rápido para Vercel via GitHub ──────────────────────────────────────
cd "$(dirname "$0")"

# Mensagem de commit (usa argumento ou padrão)
MSG="${1:-update: alterações no portfólio}"

echo "Preparando deploy..."
git add .
git commit -m "$MSG"
git push

echo ""
echo "Deploy enviado! Acesse: https://portfoliokevenmatheus.vercel.app"
