pipeline {
    agent any

    stages {
        stage('Create an image') {
            steps {
                sh 'docker build . -t app'
            }
        }
        stage('Docker run') {
            steps {
                sh 'docker stop app-container || true'
                sh 'docker rm -f app-container || true'
                sh 'docker run -p 4000:3000 --name app-container -d app'
            }
        }
    }
}
