var PROJECT_NAME = 'shower-presentation-template';

module.exports = require('lasso-tools')
    .project({
        projectDir: __dirname,
        name: PROJECT_NAME
    }, function(config, callback) {
        callback(null, {
            routes: [
                // IFRAME page for webchat
                {
                    template: require.resolve('presentation/index.marko'),
                    path: '/',
                    title: 'Presentation Template Using Shower'
                }
            ]
        });
    })

    // Parse the command-line (parsing will happen when server or build starts but before configuration)
    .parseCommandLine();
