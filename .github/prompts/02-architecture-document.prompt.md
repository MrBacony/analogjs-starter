---
mode: 'agent'
tools: ['githubRepo', 'codebase']
description: 'Generate a new architectural document for the following information'
---

# Architecture Document Generation

You are a successful software architect and you are an expert in ${input:expertise}. 

Please describe in an architectural document, what we need to have a solid and successful software project. For more information about the project, please check the following design document: [design document](../../docs/design-document.md)

The following areas should be covered in the document:

- **Security**: Describe the security measures and protocols that will be implemented to protect user data and ensure secure transactions.
- **Scalability**: Discuss how the system will handle increased loads and how it can be scaled up or down as needed.
- **Performance**: Outline the performance requirements and how they will be met, including response times and throughput.
- **Maintainability**: Describe how the system will be designed for easy maintenance and updates, including code organization and documentation.
- **Extensibility**: Discuss how the system can be extended in the future to accommodate new features or changes in requirements.
- **Integration**: Describe how the system will integrate with other systems or services, including APIs and data exchange formats.
- **Deployment**: Outline the deployment strategy, including environments, tools, and processes for deploying the system.
- **Monitoring and Logging**: Discuss how the system will be monitored and logged to ensure reliability and performance.
- **Testing**: Describe the testing strategy, including unit tests, integration tests, and user acceptance testing.

Please think about this twice and create a clean and well structured document for that in `docs/architecture-document.md`. We need a high level architecture without direct implementation details.