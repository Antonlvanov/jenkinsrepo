pipeline {
    agent any

    stages {
        stage('Create an image') {
            steps {
                sh 'docker build . -t hello-app'
            }
        }
        stage('Docker run') {
            steps {
                sh 'docker stop test'
                sh 'docker rn test'
                sh 'docker run -p 4000:3000 --name test -d hello-app'
            }
        }
    }
}
