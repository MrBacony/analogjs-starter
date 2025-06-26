---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Comprehensive risk analysis based on design, architecture, and roadmap documents'
---
# Comprehensive Risk Analysis

Based on all project documents and stakeholder reviews, conduct a comprehensive risk analysis:

**Review these inputs:**
- [Design Document](../../docs/design-document.md)
- [Architecture Document](../../docs/architecture-document.md)
- [Roadmap](../../docs/roadmap.md)
- [Stakeholder Review Summary](../../docs/stakeholder-reviews/summary.md)

**Identify and analyze risks in these categories:**

1. **Technical Risks**: Architecture complexity, performance bottlenecks, scalability issues, technology choices
2. **Business Risks**: Market fit, ROI uncertainty, timeline risks, competitive threats
3. **Operational Risks**: Deployment challenges, maintenance complexity, security vulnerabilities, compliance issues
4. **Resource Risks**: Skill gaps, team capacity, budget constraints, key person dependencies
5. **Integration Risks**: Third-party dependencies, API reliability, data migration challenges

**For each identified risk, specify:**
- **Risk Description**: Clear description of the risk
- **Probability**: Low/Medium/High likelihood of occurrence
- **Impact**: Low/Medium/High impact on project success
- **Affected Documents**: Which documents (design/architecture/roadmap) are impacted
- **Mitigation Strategy**: Specific actions to reduce or eliminate the risk
- **Priority Level**: Critical/High/Medium/Low based on probability × impact
- **Owner**: Who should be responsible for monitoring/mitigating this risk

**Output:**
Create a prioritized risk register in `docs/risk-analysis.md` with risks sorted by priority level.

Include a risk matrix visualization and recommended immediate actions for Critical and High priority risks.