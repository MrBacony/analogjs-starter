---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Document refinement based on stakeholder reviews and risk analysis'
---
# Iterative Document Refinement

You are now a senior consultant with expertise in ${input:expertise} reviewing this project for final optimization.

**Base your refinements on:**
- [Original Design Document](../../docs/design-document.md)
- [Original Architecture Document](../../docs/architecture-document.md)
- [Original Roadmap](../../docs/roadmap.md)
- [Stakeholder Review Summary](../../docs/stakeholder-reviews/summary.md)
- [Risk Analysis](../../docs/risk-analysis.md)

**Create refined versions that address:**

1. **Updated Design Document** (`docs/design-document-v2.md`):
   - Address business and UX stakeholder concerns
   - Incorporate missing requirements identified in reviews
   - Adjust scope based on risk analysis
   - Clarify success criteria and assumptions

2. **Updated Architecture Document** (`docs/architecture-document-v2.md`):
   - Address technical and operational stakeholder concerns
   - Incorporate security and DevOps recommendations
   - Add risk mitigation strategies to architecture decisions
   - Enhance monitoring, logging, and operational considerations

3. **Updated Roadmap** (`docs/roadmap-v2.md`):
   - Address timeline and resource concerns from stakeholder reviews
   - Incorporate risk mitigation tasks and activities
   - Adjust phases based on technical complexity insights
   - Add quality gates and validation checkpoints

**Documentation Requirements:**
- For each updated document, clearly highlight what changed and why
- Create a comprehensive revision log in `docs/revision-log.md` explaining:
  - What changes were made to each document
  - Which stakeholder feedback or risk drove each change
  - How the changes improve the overall project success probability

**Quality Standards:**
- Ensure all documents remain consistent with each other
- Maintain the same professional structure and detail level
- Address all Critical and High priority risks identified
- Incorporate all stakeholder feedback marked as "must address"