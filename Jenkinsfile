node {
    def commit_id

    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('test') {
        nodjs(nodeJSInstallationName: 'nodejs') {
            sh 'npm install --only=dev'
            sh 'npm test'
        }
    }

    stage('docker build/push') {
        docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') { //reg, cred
            def app = dockerbuild("jorgearh/nodejs-app-demo:${commit_id}", '.').push()
        }
    }
}