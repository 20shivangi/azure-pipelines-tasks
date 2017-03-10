import ma = require('vsts-task-lib/mock-answer');
export var gulpGlobalGood: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i ./**/build/src/*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i .\\**\\build\\src\\*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true,
        "**/build/test/*.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ],
        "/invalid/input": []
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}

export var gulpLocalGood: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/node /fake/wd/node_modules/gulp/gulp.js --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/node c:\\fake\\wd\\node_modules\\gulp\\gulp.js --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        }
    },
    "checkPath": {
        "/usr/local/bin/node": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true
    },
    "exist": {
        "/fake/wd/node_modules/gulp/gulp.js": true,
        "c:\\fake\\wd\\node_modules\\gulp\\gulp.js": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}

export var gulpNoGulpFile: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i ./**/build/src/*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i .\\**\\build\\src\\*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": false,
        "**/build/test/*.js": true
    },
    "findMatch": {
        "gulpfile.js": []
    },
    "exist": {
        "/usr/local/bin/gulp": true
    }
}

export var gulpNoGulp: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "checkPath": {
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    }
}

export var npmFail: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 1,
            "stdout": "npm output here",
            "stderr": "npm failed with this output"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}

export var gulpFail: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 1,
            "stdout": "gulp output here",
            "stderr": "gulp failed with this output"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    }
}

export var istanbulFail: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i ./**/build/src/*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 1,
            "stdout": "istanbul output here",
            "stderr": "istanbul failed with this output"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i .\\**\\build\\src\\*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 1,
            "stdout": "istanbul output here",
            "stderr": "istanbul failed with this output"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true,
        "**/build/test/*.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}

export var invalidTestSource: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i ./**/build/src/*.js ./node_modules/mocha/bin/_mocha /invalid/input": {
            "code": 1,
            "stdout": "istanbul output here",
            "stderr": "istanbul failed with this output"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i .\\**\\build\\src\\*.js ./node_modules/mocha/bin/_mocha /invalid/input": {
            "code": 1,
            "stdout": "istanbul output here",
            "stderr": "istanbul failed with this output"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "gulpfile.js": true,
        "**/build/test/*.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "findMatch": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ],
        "gulpfile.js": [
            "gulpfile.js"
        ]
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}

export var gulpMultipleGulpFiles: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
    "which": {
        "gulp": "/usr/local/bin/gulp",
        "npm": "/usr/local/bin/npm",
        "node": "/usr/local/bin/node",
        "istanbulWin": "/usr/local/bin/istanbul",
        "istanbul": "/usr/local/bin/node_modules/istanbul/lib/cli.js"
    },
    "exec": {
        "/usr/local/bin/gulp --gulpfile /user/build/one/gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/gulp --gulpfile /user/build/two/gulpfile.js": {
            "code": 0,
            "stdout": "gulp output here"
        },
        "/usr/local/bin/npm install istanbul": {
            "code": 0,
            "stdout": "npm output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i ./**/build/src/*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        },
        "/usr/local/bin/node ./node_modules/istanbul/lib/cli.js cover --report cobertura --report html -i .\\**\\build\\src\\*.js ./node_modules/mocha/bin/_mocha **/build/test/*.js": {
            "code": 0,
            "stdout": "istanbul output here"
        }
    },
    "checkPath": {
        "/usr/local/bin/gulp": true,
        "/usr/local/bin/npm": true,
        "/usr/local/bin/node": true,
        "/usr/local/bin/istanbul": true,
        "/usr/local/bin/node_modules/istanbul/lib/cli.js": true,
        "/user/build/one/gulpfile.js": true,
        "/user/build/two/gulpfile.js": true,
        "**/build/test/*.js": true
    },
    "exist": {
        "/usr/local/bin/gulp": true
    },
    "match": {
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ]
    },
    "findMatch": {
        "**/gulpfile.js": [
            "/user/build/one/gulpfile.js",
            "/user/build/two/gulpfile.js"
        ],
        "**/TEST-*.xml": [
            "/user/build/fun/test-123.xml"
        ],
        "**/*.js": [
            "/test/test.js"
        ]
    },
    "getVariable": {
        "System.DefaultWorkingDirectory": "/user/build"
    }
}