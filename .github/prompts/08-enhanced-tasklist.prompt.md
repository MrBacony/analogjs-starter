---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Task list generation based on refined project documentation'
---
# Enhanced Task List Generation

Using the validated and refined project documentation, create comprehensive and detailed task lists.

**Source Documents:**
- [Refined Design Document](../../docs/design-document-v2.md)
- [Refined Architecture Document](../../docs/architecture-document-v2.md) 
- [Refined Roadmap](../../docs/roadmap-v2.md)
- [Risk Analysis](../../docs/risk-analysis.md)
- [Final Validation Report](../../docs/final-validation.md)

**Task List Requirements:**

For each section of the roadmap, create detailed task lists that include:

## Standard Development Tasks
- [ ] Implementation tasks broken down to 1-3 day chunks
- [ ] Code review and quality assurance tasks
- [ ] Testing tasks (unit, integration, system, acceptance)
- [ ] Documentation tasks

## Risk Mitigation Tasks  
- [ ] Specific tasks to address Critical and High priority risks
- [ ] Risk monitoring and checkpoint tasks
- [ ] Contingency planning tasks
- [ ] Risk validation and testing tasks

## Stakeholder Integration Tasks
- [ ] Tasks to address stakeholder feedback and requirements
- [ ] Cross-functional coordination tasks
- [ ] Stakeholder review and approval tasks
- [ ] Communication and reporting tasks

## Quality Assurance Tasks
- [ ] Validation and verification tasks
- [ ] Performance testing and optimization tasks
- [ ] Security testing and compliance tasks
- [ ] Usability testing and UX validation tasks

## Operational Tasks
- [ ] Deployment preparation and execution tasks
- [ ] Monitoring and logging setup tasks
- [ ] Documentation and knowledge transfer tasks
- [ ] Training and onboarding tasks

**Task Format:**
Each task should include:
- [ ] **Task Description**: Clear, actionable description
- **Estimated Effort**: Hours or days required
- **Dependencies**: Other tasks that must be completed first
- **Assigned Role**: Who should execute this task
- **Acceptance Criteria**: How to determine task completion
- **Risk Level**: Impact if this task fails (Critical/High/Medium/Low)

**Output Structure:**
Save the enhanced task lists in `docs/tasklists/{phase-number}-{phase-name}.md` for each roadmap phase.

**Additional Deliverables:**
1. **Master Task Tracker** (`docs/tasklists/master-tracker.md`): 
   - All tasks across all phases in a single view
   - Critical path identification
   - Resource allocation overview
   - Risk-critical tasks highlighted

2. **Sprint Planning Guide** (`docs/tasklists/sprint-planning-guide.md`):
   - Recommended task groupings for sprints
   - Priority sequencing suggestions  
   - Resource loading recommendations
   - Risk distribution across sprints

**Quality Checks:**
- Ensure no task is larger than 3 days effort
- Verify all risks have corresponding mitigation tasks
- Confirm all stakeholder requirements have implementation tasks
- Validate that dependencies are clearly mapped