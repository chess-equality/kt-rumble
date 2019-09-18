FROM openjdk:8-jre-slim
WORKDIR /kt-rumble

# Copy the binary
COPY /backend/build/libs/kt-rumble.jar ./
COPY /backend/build/libs ./libs

CMD ["java", "-jar", "kt-rumble.jar"]

EXPOSE 8080
