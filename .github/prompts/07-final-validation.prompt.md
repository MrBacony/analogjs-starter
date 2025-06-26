
---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Validate the refined project documentation for readiness to proceed'
---

# Final Project Validation

Perform a comprehensive final validation of the refined project documentation.

**Review the refined documents:**
- [Refined Design Document](../../docs/design-document-v2.md)
- [Refined Architecture Document](../../docs/architecture-document-v2.md)
- [Refined Roadmap](../../docs/roadmap-v2.md)
- [Revision Log](../../docs/revision-log.md)

**Validation Checklist:**

## Consistency Validation
- [ ] Do business requirements align with technical capabilities?
- [ ] Is the roadmap realistic given the architecture complexity?
- [ ] Are resource requirements consistent across all documents?
- [ ] Do timeline estimates align with technical complexity?
- [ ] Are security requirements consistent between design and architecture?

## Stakeholder Concerns Resolution
- [ ] Are all Critical stakeholder concerns addressed?
- [ ] Are all High priority stakeholder concerns addressed?
- [ ] Are UX and user experience gaps filled?
- [ ] Are operational and DevOps concerns integrated?
- [ ] Are business value and ROI considerations addressed?

## Risk Mitigation Integration
- [ ] Are all Critical risks properly mitigated in the plans?
- [ ] Are High priority risks addressed with specific actions?
- [ ] Are risk mitigation tasks integrated into the roadmap?
- [ ] Are monitoring and early warning systems defined?

## Completeness Check
- [ ] Are all functional requirements clearly defined?
- [ ] Are all non-functional requirements specified?
- [ ] Are integration points and dependencies identified?
- [ ] Are testing strategies comprehensive?
- [ ] Are deployment and operational procedures defined?

## Feasibility Assessment
- [ ] Is the technical approach realistic and proven?
- [ ] Are resource requirements achievable?
- [ ] Is the timeline realistic for the scope?
- [ ] Are skill requirements available or obtainable?
- [ ] Is the budget estimate reasonable?

**Output Requirements:**

Create a final validation report in `docs/final-validation.md` with:

1. **Executive Summary**: Overall project readiness and recommendation
2. **Consistency Score**: Rate overall consistency (1-10) with justification
3. **Risk Profile**: Current risk level after mitigation (Low/Medium/High)  
4. **Remaining Concerns**: Any unresolved issues that need attention
5. **Go/No-Go Recommendation**: Clear recommendation with reasoning
6. **Success Probability**: Estimated likelihood of project success (%)
7. **Critical Success Factors**: Top 3-5 factors that will determine success
8. **Immediate Next Steps**: Recommended actions before task generation

**Decision Matrix:**
Include a decision matrix scoring the project on:
- Technical feasibility (1-10)
- Business value (1-10) 
- Resource availability (1-10)
- Risk level (1-10, where 10 = low risk)
- Timeline realism (1-10)

**Final Validation Outcome:**
- ✅ **PROCEED**: All validations passed, ready for task generation
- ⚠️ **PROCEED WITH CAUTION**: Minor issues identified, proceed with monitoring
- ❌ **REVISE**: Significant issues identified, requires another iteration