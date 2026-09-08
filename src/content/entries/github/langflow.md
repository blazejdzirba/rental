---
type: github
title: langflow
description: A visual builder for LLM workflows in Python.
date: 2026-08-20
tags: [AI, Python, Open Source]
featured: true
author: langflow-ai
repoUrl: https://github.com/langflow-ai/langflow
why: >
  It's the fastest way I've found to sketch an agent flow before writing
  any real code — good for validating an idea in an afternoon.
installSteps:
  - "git clone https://github.com/langflow-ai/langflow"
  - "cd langflow"
  - "uv pip install -e ."
  - "langflow run"
stack: [Python, React]
---

## Instrukcja instalacji (PL)

1. Sklonuj repozytorium: `git clone https://github.com/langflow-ai/langflow`
2. Wejdź do folderu: `cd langflow`
3. Zainstaluj zależności: `uv pip install -e .`
4. Uruchom: `langflow run`
5. Otwórz `http://localhost:7860` w przeglądarce.

Wymaga Pythona 3.10+. Na Windowsie polecam WSL2 — natywnie miałem problemy
z jedną z zależności natywnych.

## Moje uwagi

Nie polecam tego do produkcji — traktuj jako prototypownię. Do szybkiego
sprawdzenia pomysłu na agenta jest świetny.
