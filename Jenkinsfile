pipeline {
    agent { dockerfile true }
    
    stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
