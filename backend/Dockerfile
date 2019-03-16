FROM openjdk:8-jdk-alpine 
RUN apk --no-cache add curl
COPY build/libs/*.jar kt-rumble.jar
CMD java ${JAVA_OPTS} -jar kt-rumble.jar