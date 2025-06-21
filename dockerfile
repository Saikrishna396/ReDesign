# Use official Java image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Give executable permission to gradlew
RUN chmod +x ./gradlew

# Build the application without running tests
RUN ./gradlew build -x test

# Replace this with your actual jar name from build/libs
CMD ["java", "-jar", "build/libs/awsApp-0.0.1-SNAPSHOT.jar"]
