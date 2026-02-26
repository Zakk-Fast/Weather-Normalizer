# AI Usage Reflection

## Philosophy

AI was used as an **implementation accelerator**, not a replacement for engineering judgment.

I owned:

- System architecture
- Layer boundaries
- Trade‑off decisions
- Scope management
- Validation and testing

AI was tasked with generating code **after** design decisions were made.

The workflow intentionally mirrored how modern engineers collaborate with AI tools.

---

## How AI Was Used

### 1. Architectural Planning (Human‑Led)

Before writing code, I designed the system architecture:

Controller → Service → Provider → Normalizer

AI was not asked to invent architecture. Instead, I defined constraints and instructed AI to implement within them.

Investing time in design before generating code made the implementation phase predictable and low-risk. I was able to correctly stear the agent step by step to insure at the end we had a fully working product and didn't fall into common pitfalls such as over-engineering, scope creep, and systems that didn't connect properly.

Key goal:

- Prevent over‑engineering
- Maintain swap‑ability requirement from the challenge.

---

### 2. Directed Code Generation

AI received narrow, precise prompts such as:

- “Implement only the provider logic.”
- “Do not modify architecture.”
- “Keep implementation minimal.”

For example, prompts were intentionally scoped to single responsibilities (implementing only a provider or normalizer) rather than requesting full application generation.

This ensured predictable output and maintainable code aligned with the timebox.

All generated code was reviewed and validated before acceptance.

---

### 3. Iterative Refinement

AI initially attempted to introduce unnecessary abstraction and complexity.

I corrected this by tightening prompts and explicitly constraining scope.

This reinforced an important lesson:

Effective AI usage is primarily about directing and constraining the model.

---

### 4. Debugging and Validation

AI assisted with:

- identifying failure points
- implementing timeout handling
- suggesting test scaffolding

However, architectural decisions and final acceptance remained manual.

---

### 5. Testing Strategy

AI helped scaffold tests quickly, while I chose the strategy:

- integration‑style testing
- mock provider usage
- contract‑focused validation

The goal was reliability and clarity rather than maximizing test count.

---

## Challenges Encountered

- AI tends to over‑design unless constrained.
- Some generated solutions optimized for theoretical flexibility rather than challenge requirements.
- Maintaining clarity required occasional prompt refinement.

Successful workflow:

1. Design first
2. Constrain AI clearly
3. Review critically
4. Iterate intentionally

---

## What This Demonstrates

This project showcases my approach to AI‑assisted development:

- AI as a productivity multiplier
- Human ownership of architecture and reasoning
- Clear separation between thinking and implementation
- Focus on delivering maintainable software within constraints

---

## Summary

AI accelerated implementation.

I owned the architecture, constraints, and validation.

The result reflects my engineering decisions, with AI acting as a force multiplier rather than a decision maker.

This collaboration allowed delivery of a clean, extensible solution well within the ~5 hour timebox while demonstrating modern AI fluency.
