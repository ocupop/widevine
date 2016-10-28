var clientname        = 'amara';
var src               = 'src';
var srcAssets         = 'src/_assets';
var bowerAssets       = 'bower_components';


module.exports = {
  bower: {
    debugging: true,
    includeDev: true,
    dest: src + '/libs',
    paths: {
      bowerDirectory: bowerAssets,
      bowerrc: './.bowerrc',
      bowerJson: './bower.json'
    }
  }
};
