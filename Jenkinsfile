pipeline {
    agent any
    
    tools {
        jdk 'jdk17'
		maven 'mvn'
    }

    environment {
        IMAGE_NAME = "java-multi-branch"
        TAG = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$TAG .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f ${IMAGE_NAME}-${BRANCH_NAME} || true
                docker run -d -p 8001:8080 --name ${IMAGE_NAME}-${BRANCH_NAME} $IMAGE_NAME:$TAG
                '''
            }
        }
    }
}
