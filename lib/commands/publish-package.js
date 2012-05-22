var publish = require('./publish');


exports.summary = 'Publish a package to a repository';

exports.usage = '' +
'jam publish-package [PACKAGE_PATH]\n' +
'\n' +
'Parameters:\n' +
'  PACKAGE_PATH    Path to package directory to publish (defaults to ".")\n' +
'\n' +
'Options:\n' +
'  --repo         Target repository URL (otherwise uses "default" in .jamrc)\n' +
'  --force, -f    Overwrite if version is already published'


exports.run = publish.doPublish('package');