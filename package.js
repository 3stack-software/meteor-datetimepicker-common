Package.describe({
  name: '3stack:datetimepicker-common',
  version: '4.14.30',
  summary: 'Common helpers for bootstrap3-datetimepicker',
  git: 'https://github.com/3stack-software/meteor-datetimepicker-common',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.1.0.2');
  api.export('DatetimePicker', 'client');
  api.use([
    'tsega:bootstrap3-datetimepicker@4.14.30_4'
  ], 'client');
  api.addFiles([
    'datetimepicker.js'
  ], 'client');
});
