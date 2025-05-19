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
                sh 'docker run -p 4000:3000 --name app-container -d app'
            }
        }
    }
}
