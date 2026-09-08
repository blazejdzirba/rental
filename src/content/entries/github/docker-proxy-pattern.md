---
title: "Local HTTPS with Traefik + mkcert"
description: "A pattern (and a solid reference repo) for *.docker.localhost domains with trusted certificates — zero per-project config."
date: 2026-09-02
type: github
ownership: found
author: "community pattern"
github: https://github.com/fkrzski/docker-proxy
tags: [docker, traefik, dx, networking]
why: "I wasted years on self-signed warnings and port soup. One reverse proxy for everything local is the correct default."
install: |
  # Conceptual — see the linked repo for the real setup
  mkcert -install
  mkcert "*.docker.localhost"
  docker compose up -d
exploring: true
---

## The problem

Every side project wants port 3000. Browser trust is a mess. Copy-pasting nginx configs between repos is how weekends disappear.

## The pattern

Run a single Traefik instance on your machine. Point `*.docker.localhost` at it with certificates from mkcert. Each project only needs a couple of labels.

I first saw a clean packaging of this idea in [fkrzski/docker-proxy](https://github.com/fkrzski/docker-proxy) — worth reading even if you roll your own.

## What I use day to day

- One compose stack always on
- Project networks attach to it
- HTTPS URLs that feel like production

Not glamorous. Extremely sticky once you have it.
