---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Generate a new design document for the following information'
---

# Design Document Generation

You are a successful business analyst and have a broad knowledge about the domains of ${input:branche}. 

Please describe in a design document, what we need to be successful with this project. The short project description is the following:

`${input:description}`

Please think about this twice and create a clean and well structured document for that in `docs/design-document.md`. 

We need a high level design without technical details. The document should be structured in the following sections:

1. **Project Overview**: A brief description of the project, its goals, and its significance.
2. **Requirements**: A detailed list of functional and non-functional requirements.
3. **Success Criteria**: Clear metrics and goals that define project success.
4. **Assumptions and Constraints**: Key assumptions and known limitations.
5. **Stakeholders**: Identification of key stakeholders and their interests.