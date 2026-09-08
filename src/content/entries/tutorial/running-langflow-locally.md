---
type: tutorial
title: Running Langflow locally, the way that actually worked for me
description: A step-by-step walkthrough for getting Langflow running on WSL2.
date: 2026-08-22
tags: [AI, Python, Guide]
relatedSlug: langflow
difficulty: beginner
estimatedTime: 15 min
---

The official docs are fine, but I hit two snags on Windows that cost me
an hour, so here's the exact path that worked.

## 1. Set up WSL2

If you're on Windows, don't fight the native install — go straight to WSL2.

```bash
wsl --install
```

## 2. Install Python 3.11 inside WSL

```bash
sudo apt update && sudo apt install python3.11 python3.11-venv
```

## 3. Clone and run

```bash
git clone https://github.com/langflow-ai/langflow
cd langflow
uv pip install -e .
langflow run
```

Open `http://localhost:7860`. If the port is already taken, pass `--port 7861`.
