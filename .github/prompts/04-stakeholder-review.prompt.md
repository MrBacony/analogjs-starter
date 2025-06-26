---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Multi-perspective stakeholder review of design, architecture, and roadmap documents'
---

# Multi-Perspective Stakeholder Review

Please review all three documents from these different expert perspectives:

**Review these documents:**
- [Design Document](../../docs/design-document.md)
- [Architecture Document](../../docs/architecture-document.md) 
- [Roadmap](../../docs/roadmap.md)

**Expert Perspectives to consider:**

1. **Security Expert**: Focus on security gaps, compliance requirements, and security architecture
2. **UX Designer**: Focus on user experience, interface requirements, and user journey gaps
3. **DevOps Engineer**: Focus on deployment, monitoring, operational aspects, and infrastructure requirements
4. **Project Manager**: Focus on timeline feasibility, resource requirements, and risk management
5. **Business Stakeholder**: Focus on ROI, business value alignment, and market considerations
6. **Quality Assurance**: Focus on testing strategies, quality gates, and validation approaches

**For each perspective, create:**
- **Critical Findings**: What concerns or gaps did you identify?
- **Missing Requirements**: What requirements are missing from the current documents?
- **Recommended Changes**: Specific changes to improve the project
- **Risk Assessment**: What risks does this perspective highlight?

**Output Structure:**
Save individual reviews in `docs/stakeholder-reviews/{role}-review.md` for each perspective.

Create a consolidated summary in `docs/stakeholder-reviews/summary.md` highlighting the most critical findings across all perspectives.