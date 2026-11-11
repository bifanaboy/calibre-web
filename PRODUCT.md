# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Self-hosting library owners managing and browsing their own eBook collections.

## Product Purpose

Calibre-Web provides web browsing, reading, and download access to eBooks backed by a Calibre database.

## Positioning

The product operates directly on Calibre library data and exposes eBook discovery, reading, downloads, and collection management through a self-hosted web app.

## Operating Context

Library owners configure a Calibre database and manage users, permissions, shelves, metadata, uploads, and reading/download access. Users browse the shared library and may read in-browser or send books to e-readers.

## Capabilities and Constraints

Preserve Calibre library data, existing routes, permissions, and workflows. The unified Standard theme may change; Simple/E-ink and EPUB reader themes remain unchanged. The application supports multilingual UI, search, shelves, metadata editing, uploads, and multiple reading/download formats.

## Evidence on Hand

`README.md` documents the product purpose, capabilities, installation, and default workflows. `library/metadata.db` is the bundled sample library used for local verification.

## Product Principles

- Preserve library data and established workflows.
- Keep browsing, reading, administration, and download access coherent across roles.
- Limit the visual cutover to the Standard theme while protecting Simple/E-ink and EPUB reader experiences.
