---
title: "Langflow"
description: "Visual builder for LLM flows in Python. Drag nodes, ship a prototype agent without starting from a blank repo."
date: 2026-09-05
type: github
ownership: found
featured: true
author: "Langflow AI"
authorUrl: https://github.com/langflow-ai
github: https://github.com/langflow-ai/langflow
url: https://www.langflow.org/
tags: [ai, llm, open-source, python]
why: "The fastest path I’ve seen from ‘idea for an agent’ to something you can click through. MIT-licensed core."
install: |
  # pip
  pip install langflow
  python -m langflow run

  # or Docker
  docker pull langflowai/langflow:latest
  docker run -p 7860:7860 langflowai/langflow:latest
exploring: true
---

## What it is

Langflow is a visual IDE for building LLM applications. Nodes represent models, prompts, tools, and vector stores. You wire them, test in the UI, then export or serve.

## Why I’m writing it up

I keep meeting people who want a “small AI concierge” experiment — answer FAQs, draft messages, route tickets — but freeze at the empty `main.py`. Langflow removes that blank-page problem.

## Caveats

- Visual builders hide complexity until they don’t. For production, expect to graduate some flows into plain code.
- Check the license of any components you pin; the core is MIT, extras vary.
- It’s a moving target. Pin versions.

## Who should try it

Anyone prototyping agent workflows who values speed over perfect architecture on day one.
