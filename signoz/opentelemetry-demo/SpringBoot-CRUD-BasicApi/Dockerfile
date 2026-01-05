# ===== Stage 1: Build the application =====
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy the Maven project files
COPY pom.xml .
COPY src ./src

# Build the application (skip tests for faster builds)
RUN mvn clean package -DskipTests

# ===== Stage 2: Create a lightweight runtime image =====
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/spring-boot-crud-basic-api-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run as a non-root user for better security
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
