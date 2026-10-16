# sautoTransport

A lightweight Java Spring Boot project for transport management (vehicles, payments, and reports). This repository contains the backend service code (controllers, DTOs, managers, interceptors) and build tooling to run the application locally or in containers.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Build & Run](#build--run)
- [Docker / Compose](#docker--compose)
- [Testing](#testing)
- [Exploring the Code / API](#exploring-the-code--api)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

## Overview

sautoTransport is a backend service for managing transport-related data such as vehicles and payments and for producing payment/report information. The code follows a typical layered structure (controllers, DTOs, managers, repository interfaces, interceptors) and is packaged as a Maven project.

## Tech Stack

- Java (JDK)
- Spring Boot (inferred from project layout and main application class)
- Maven (wrapper included: `mvnw`, `mvnw.cmd`, `pom.xml`)
- Docker / docker-compose (repository contains `compose.yaml`)

## Repository Structure

Top-level files:
- `pom.xml` — Maven project file
- `mvnw`, `mvnw.cmd` — Maven wrapper scripts
- `compose.yaml` — Compose file for containerized runs
- `.gitignore`, `.gitattributes`

Important source packages (src/main/java/com/autoTransport):
- `AutoTransportProjectApplication.java` — Main application entry point
- `controller/`
  - `Maincontoller.java`
  - `PaymentReportController.java`
- `dto/`
  - `PaymentDTO.java`
  - `VehicleDTO.java`
  - `VehicleViewDTO.java`
- `manager/`
  - `MainManager.java`
  - `ReportManager.java`
- `managerImpl/` — implementation classes (implementation details)
- `repository/` — data access interfaces
- `model/` — domain models
- `Interceptor/`
  - `LoginInterceptor.java`
  - `WebConfig.java`
- `resources/` (application configuration lives here — check for `application.properties` or `application.yml`)

Note: The above lists are based on the current package layout and key files present in the repo.

## Prerequisites

- Java JDK (recommended: check `pom.xml` for the target Java version)
- Git
- Docker & Docker Compose (if you plan to run via compose)
- (Optional) Maven installed — you can use the included Maven wrapper (`./mvnw` / `mvnw.cmd`)

## Build & Run

Build the project (from repository root):

Unix / macOS:
- ./mvnw clean package

Windows (PowerShell / CMD):
- mvnw.cmd clean package

Run with Maven:
- ./mvnw spring-boot:run

Or run the built JAR:
- java -jar target/*.jar

If you need a different profile or environment variables (DB connection, credentials, etc.), check `src/main/resources/application.properties` or `application.yml` and set the appropriate environment variables or profile when running.

## Docker / Compose

The repository includes `compose.yaml`. To start the application using Docker Compose:

- docker compose -f compose.yaml up --build

Adjust environment variables and any dependent services (databases, message brokers) referenced in the compose file before running in production.

## Testing

Run unit/integration tests with:

- ./mvnw test

Review test output and logs under `target` after running tests.

## Exploring the Code / API

- Controllers: Inspect `src/main/java/com/autoTransport/controller/` to see exposed endpoints and request mappings.
- DTOs: `src/main/java/com/autoTransport/dto/` contains data transfer objects used in request/response payloads.
- Managers & Implementations: Business logic lives in `manager` and `managerImpl`.
- Interceptor & Security: `Interceptor` package contains `LoginInterceptor` and `WebConfig` for request interception and web configuration.

To discover available endpoints, search for `@RestController`, `@Controller`, `@RequestMapping`, `@GetMapping`, `@PostMapping` annotations in the `controller` package.

Example (generic) Postman flow:
1. Start the app.
2. Inspect the controller request mappings or call `GET /actuator/mappings` (if Spring Actuator is enabled) to list endpoints.
3. Use DTO fields from `dto/` package to form requests.

## Contributing

Contributions are welcome. Suggested workflow:
1. Fork the repository.
2. Create a feature branch: git checkout -b feat/your-feature
3. Run tests and linters locally.
4. Open a pull request describing the change and any migration/configuration steps.

Please include unit tests for new behavior and update README if you add configuration or new running instructions.

## License & Contact

No license file is present in the repository. If you want this project to be open source, add a LICENSE (e.g., MIT, Apache-2.0) at the repo root.

For questions or help, open an issue in the repository or contact the maintainers.

---

If you'd like, I can:
- Add a more detailed "How to configure" section after inspecting the application's configuration files,
- Generate an example .env and docker-compose snippet tailored to the app's actual dependencies, or
- Create a CONTRIBUTING.md or LICENSE file.
