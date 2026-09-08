---
type: post
title: Found a nice MCP pattern
description: A small trick for exposing read-only tools without extra auth.
date: 2026-08-20
tags: [MCP, AI]
---

Today I found a neat pattern for exposing read-only MCP tools without
building a whole auth layer around them — scope the server to a single
read-only API key and let the tool description do the guardrailing.
Not groundbreaking, but it saved me an afternoon.
