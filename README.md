# Weather API Normalization Service

## Overview

This project implements a RESTful API normalization service designed around one core idea:

> The application should never depend directly on an external API’s data shape.

Instead, upstream APIs are isolated behind a normalization layer so they can be replaced with minimal impact to the rest of the system.

This challenge focused on **architecture, judgment, and AI collaboration**, not just data fetching.

---

## Architecture

Request flow:

![Flow](./architecture.png)

### Controller
- Validates query parameters
- Handles HTTP concerns
- Maps errors to proper status codes
- Supports response filtering via `fields` query parameter

### Service
- Owns business logic
- Selects provider via factory
- Computes derived fields (`isFreezing`)
- Remains independent of external APIs

### Provider
- Responsible for communicating with external systems
- Formats outgoing requests
- Returns raw upstream data

### Normalizer
- Converts raw API data into a stable internal contract
- Shields the application from upstream schema changes

---

## Normalized Response Contract

All providers produce:

{
  location: string,
  temperature: number,
  windSpeed: number,
  condition: string,
  isFreezing: boolean
}

The rest of the system depends only on this contract.

---

## Supported Providers

### Open-Meteo (Default)
Real external weather API integration.

### Mock Provider
Local provider used to demonstrate swapability and deterministic testing.

Examples:

http://localhost:3000/weather?lat=30&lon=-97
http://localhost:3000/weather?lat=30&lon=-97&provider=mock

No business logic changes required when switching providers.

---

## Filtering

Supports projection filtering:

http://localhost:3000/weather?lat=30&lon=-97&fields=temperature,condition

Returns only requested fields while preserving normalization guarantees.

---

## Derived Field

`isFreezing` is computed within the Service layer rather than supplied by the upstream API, demonstrating separation between external data and internal business logic.

---

## Resilience

The service includes:

- Request validation
- Provider selection validation (400 for invalid providers)
- API timeout handling
- Normalizer shape validation
- Consistent error responses

---

## Design for Swap‑ability

If the upstream API changes:

### Files that WOULD change
- `/providers/implementations/*`
- `/normalizers/*`

### Files that WOULD NOT change
- Controllers
- Services
- Routes
- Response contract
- Tests

This keeps business logic stable while allowing rapid provider replacement.

---

## Setup

Install dependencies:

npm install

Run development server:

npm run dev

Run tests:

npm test

---

## Testing

Integration-style tests using Vitest + Supertest validate:

- Request validation
- Provider switching
- Filtering behavior
- Error handling
- Normalized contract stability

Tests intentionally use the mock provider to avoid external network dependency.

---

## Architectural Notes

I intentionally avoided over‑engineering. The solution focuses on:

- Clear separation of concerns
- Small, understandable abstractions
- Demonstrating extensibility without unnecessary complexity
- Shipping a complete, stable solution within the timebox

---

## AI Collaboration

See [AI_USAGE_REFLECTION.md](https://github.com/Zakk-Fast/Weather-Normalizer/blob/main/AI_USAGE_REFLECTION.md) for a detailed explanation of how AI was used as an engineering accelerator while architectural ownership, decision‑making, and validation remained human‑driven.

---

## Final Thoughts

The goal of this project was to demonstrate engineering judgment:

- choosing appropriate abstractions
- designing for change
- leveraging AI effectively without outsourcing thinking

The structure, architecture, and implementation direction were owned end‑to‑end, while AI was intentionally used to accelerate execution under clear constraints.
